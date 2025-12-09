import { CommonModule } from "@angular/common"
import {
  Component,
  type ElementRef,
  HostListener,
  ViewChild,
  type AfterViewInit,
  type OnInit,
  type OnDestroy,
} from "@angular/core"
import { FaqComponent } from "./faq/faq.component";
import { TestimonialSectionComponent } from "./testimonial-section/testimonial-section.component";

interface SliderImage {
  src: string
  alt: string
  size: string
}

interface Service {
  icon: string
  title: string
  description: string
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, FaqComponent, TestimonialSectionComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  title = "turnkey-company"

  /* ================================
     MOBILE & PROFILE MENU LOGIC
  ================================= */
  mobileOpen = false
  profileOpen = false
  scrolled = false
  @ViewChild("profileDropdown") profileDropdown!: ElementRef
  @ViewChild("profileButton") profileButton!: ElementRef

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen
  }

  toggleProfile() {
    this.profileOpen = !this.profileOpen
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50
  }

  @HostListener("document:click", ["$event"])
  onClickOutside(event: Event) {
    if (!this.profileOpen) return

    const clickedInsideDropdown = this.profileDropdown?.nativeElement.contains(event.target)

    const clickedProfileButton = this.profileButton?.nativeElement.contains(event.target)

    if (!clickedInsideDropdown && !clickedProfileButton) {
      this.profileOpen = false
    }
  }

  /* ================================
     IMAGE SLIDER WITH INDICATORS
  ================================= */

  @ViewChild("sliderTrack") sliderTrack!: ElementRef
  @ViewChild("sliderWrapper") sliderWrapper!: ElementRef
  @ViewChild("sliderContainer") sliderContainer!: ElementRef

  sliderImages: SliderImage[] = [
    {
      src: "https://framerusercontent.com/images/TvRymMb9eE6gexPti05pMO8KzfI.png",
      alt: "Interior Design 1",
      size: "w-[350px] h-[520px]",
    },
    {
      src: "https://framerusercontent.com/images/MeKJAlOXXupItPDmkok7GEkRjg.png",
      alt: "Interior Design 2",
      size: "w-[420px] h-[420px]",
    },
    {
      src: "https://framerusercontent.com/images/4kzBVuRSxzERYTPFFvq46XUrexA.png",
      alt: "Interior Design 3",
      size: "w-[350px] h-[520px]",
    },
    {
      src: "https://framerusercontent.com/images/4sU8ZcE1VPt5tOMPRWaOZKjCMk.png",
      alt: "Interior Design 4",
      size: "w-[420px] h-[420px]",
    },
    {
      src: "https://framerusercontent.com/images/TvRymMb9eE6gexPti05pMO8KzfI.png",
      alt: "Interior Design 1",
      size: "w-[350px] h-[520px]",
    },
    {
      src: "https://framerusercontent.com/images/MeKJAlOXXupItPDmkok7GEkRjg.png",
      alt: "Interior Design 2",
      size: "w-[420px] h-[420px]",
    },
    {
      src: "https://framerusercontent.com/images/4kzBVuRSxzERYTPFFvq46XUrexA.png",
      alt: "Interior Design 3",
      size: "w-[350px] h-[520px]",
    },
    {
      src: "https://framerusercontent.com/images/4sU8ZcE1VPt5tOMPRWaOZKjCMk.png",
      alt: "Interior Design 4",
      size: "w-[420px] h-[420px]",
    },
  ]

  currentSlideIndex = 0
  sliderPosition = 0
  isAutoSliding = true
  autoSlideInterval: any

  ngOnInit() {
    this.startAutoSlide()
  }

  ngAfterViewInit() {
    this.startSmoothSlider()
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      if (this.isAutoSliding) {
        this.nextSlide()
      }
    }, 6000)
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index
    this.updateSliderPosition()
  }

  @HostListener("window:scroll", [])
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  imageWidth = 380 + 24;    // width + gap
  totalSlides = this.sliderImages.length;
  
  updateSliderPosition() {
    const track = this.sliderTrack?.nativeElement as HTMLElement;
    if (!track) return;

    this.sliderPosition = -(this.currentSlideIndex * this.imageWidth);

    track.style.transition = "transform 0.7s ease";
    track.style.transform = `translateX(${this.sliderPosition}px)`;

    // if last slide, jump instantly to 0 (no white space)
    if (this.currentSlideIndex >= this.totalSlides) {
      setTimeout(() => {
        track.style.transition = "none"; // remove animation
        this.currentSlideIndex = 0;
        this.sliderPosition = 0;
        track.style.transform = `translateX(0px)`;
      }, 700); // match animation duration
    }
  }



  nextSlide() {
    this.currentSlideIndex++;
    this.updateSliderPosition();
  }

  prevSlide() {
    if (this.currentSlideIndex === 0) {
      // jump to duplicate end
      this.currentSlideIndex = this.totalSlides;
      this.updateSliderPosition();
    }
    this.currentSlideIndex--;
    this.updateSliderPosition();
  }

  startSmoothSlider() {
    const track = this.sliderTrack?.nativeElement as HTMLElement
    const wrapper = this.sliderWrapper?.nativeElement as HTMLElement

    if (!track || !wrapper) return

    wrapper.addEventListener("mouseenter", () => {
      this.isAutoSliding = false
    })

    wrapper.addEventListener("mouseleave", () => {
      this.isAutoSliding = true
    })

    let touchStartX = 0
    wrapper.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX
    })

    wrapper.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].clientX
      if (touchStartX - touchEndX > 50) {
        this.nextSlide()
      } else if (touchEndX - touchStartX > 50) {
        this.prevSlide()
      }
    })
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval)
    }
  }
}
