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
import { AnnouncementbarComponent } from "./announcementbar/announcementbar.component";

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
  imports: [CommonModule, FaqComponent, TestimonialSectionComponent, AnnouncementbarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  title = "turnkey-company";

  mobileOpen = false;
  profileOpen = false;
  scrolled = false;

  @ViewChild("profileDropdown") profileDropdown!: ElementRef;
  @ViewChild("profileButton") profileButton!: ElementRef;

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  toggleProfile() {
    this.profileOpen = !this.profileOpen;
  }

  @HostListener("window:scroll")
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  @HostListener("document:click", ["$event"])
  onClickOutside(event: Event) {
    if (!this.profileOpen) return;

    const dropdown = this.profileDropdown?.nativeElement;
    const button = this.profileButton?.nativeElement;

    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
      this.profileOpen = false;
    }
  }

  // Your original Bento items (UNCHANGED)
  bentoItems = [
    {
      label: "Living Room",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/living-1759750377-O1Yiw/lr-13-1763111912-Rl3YP.jpg",
      grid: "md:col-span-2 md:row-span-2",
    },
    {
      label: "Master Bedroom",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/mbr-1759750466-DinYK/mbr-10-1763100361-s4LQX.jpg",
      grid: "md:col-span-2",
    },
    {
      label: "False Ceiling",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/tv-1761583761-DjqGd/20-1762773267-P8Vt9.jpg",
      grid: "",
    },
    {
      label: "Wardrobe",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/wr-1759751175-9MtjY/21-1762774027-Iei06.jpg",
      grid: "",
    },
    {
      label: "Dining Area",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/di-1759750788-LFDCZ/16-1762773650-i8mOT.jpg",
      grid: "md:col-span-2",
    },
    {
      label: "Study Room",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2023-1696420252-fyaIE/renders-1696505505-hTG0j/study-table-1696505519-Q0m8k/st10-1702448336-FYVVc.jpg",
      grid: "md:col-span-2",
    },
    {
      label: "Living Room",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/living-1759750377-O1Yiw/lr-13-1763111912-Rl3YP.jpg",
      grid: "md:col-span-2 md:row-span-2",
    },
    {
      label: "Master Bedroom",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/mbr-1759750466-DinYK/mbr-10-1763100361-s4LQX.jpg",
      grid: "md:col-span-2",
    },
    {
      label: "False Ceiling",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/tv-1761583761-DjqGd/20-1762773267-P8Vt9.jpg",
      grid: "",
    },
    {
      label: "Wardrobe",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/wr-1759751175-9MtjY/21-1762774027-Iei06.jpg",
      grid: "",
    },
    {
      label: "Dining Area",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/di-1759750788-LFDCZ/16-1762773650-i8mOT.jpg",
      grid: "md:col-span-2",
    },
    {
      label: "Study Room",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2023-1696420252-fyaIE/renders-1696505505-hTG0j/study-table-1696505519-Q0m8k/st10-1702448336-FYVVc.jpg",
      grid: "md:col-span-2",
    },
  ];

  // SLIDER STATE
  currentIndex = 0;

  // AUTO SPLIT ITEMS ➝ PAGE 1 & PAGE 2
  bentoItemsPage1: any[] = [];
  bentoItemsPage2: any[] = [];

  ngOnInit() {
    // 4 items on first page, 2 on next page
    this.bentoItemsPage1 = this.bentoItems.slice(0, 6);
    this.bentoItemsPage2 = this.bentoItems.slice(6, 12);
  }

  // NEXT SLIDE
  nextBento() {
    if (this.currentIndex < 1) {
      this.currentIndex++;
    }
  }

  // PREVIOUS SLIDE
  prevBento() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  @ViewChild("sliderTrack") sliderTrack!: ElementRef;
  @ViewChild("sliderWrapper") sliderWrapper!: ElementRef;

  sliderImages: SliderImage[] = [
    { src: "https://framerusercontent.com/images/TvRymMb9eE6gexPti05pMO8KzfI.png", alt: "Interior 1", size: "w-[350px] h-[520px]" },
    { src: "https://framerusercontent.com/images/MeKJAlOXXupItPDmkok7GEkRjg.png", alt: "Interior 2", size: "w-[420px] h-[420px]" },
    { src: "https://framerusercontent.com/images/4kzBVuRSxzERYTPFFvq46XUrexA.png", alt: "Interior 3", size: "w-[350px] h-[520px]" },
    { src: "https://framerusercontent.com/images/4sU8ZcE1VPt5tOMPRWaOZKjCMk.png", alt: "Interior 4", size: "w-[420px] h-[420px]" },
  ];

  currentSlide = 0;
  position = 0;
  speed = 1;
  imageWidth = 404;


  ngAfterViewInit() {
    this.startInfiniteAutoScroll();
    this.enableManualControls();
    this.animateStats();
  }

  animateStats() {
  const elements = document.querySelectorAll(".stat-number");

  elements.forEach((el: any) => {
    const endValue = parseInt(el.getAttribute("countTo"));
    let start = 0;

    const duration = 2000;
    const step = endValue / (duration / 16);

    function update() {
      start += step;
      if (start < endValue) {
        el.innerText = Math.floor(start).toLocaleString();
        requestAnimationFrame(update);
      } else {
        el.innerText = endValue.toLocaleString();
      }
    }
    update();
  });
}

  startInfiniteAutoScroll() {
    const track = this.sliderTrack.nativeElement;

    const animate = () => {
      this.position -= this.speed;
      track.style.transform = `translateX(${this.position}px)`;

      const totalScrollWidth = this.sliderImages.length * this.imageWidth;

      if (Math.abs(this.position) >= totalScrollWidth) {
        this.position = 0;
        track.style.transform = "translateX(0px)";
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }

  // MANUAL NEXT/PREV CONTROLS
  manualNext() {
    this.position -= this.imageWidth;
    this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
  }

  manualPrev() {
    this.position += this.imageWidth;
    this.currentSlide =
      (this.currentSlide - 1 + this.sliderImages.length) % this.sliderImages.length;
  }

  goToSlide(i: number) {
    this.currentSlide = i;
    this.position = -(i * this.imageWidth);
  }

  // HOVER PAUSE + TOUCH SWIPE
  enableManualControls() {
  const wrapper = this.sliderWrapper.nativeElement;

  wrapper.addEventListener("mouseenter", () => (this.speed = 0.4));
  wrapper.addEventListener("mouseleave", () => (this.speed = 1));

  let startX = 0;

  wrapper.addEventListener("touchstart", (e: any) => {
    startX = e.touches[0].clientX;
    this.speed = 0;
  });

  wrapper.addEventListener("touchend", (e: any) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) this.manualNext();
    if (diff < -50) this.manualPrev();
    this.speed = 0.4;
  });
}
}
