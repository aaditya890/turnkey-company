import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { AnnouncementbarComponent } from "./announcementbar/announcementbar.component";

interface SliderImage {
  src: string;
  alt: string;
  size: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AnnouncementbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {

  title = 'turnkey-company';
  /* ================================
     MOBILE & PROFILE MENU LOGIC
  ================================= */
  mobileOpen = false;
  profileOpen = false;
  

  @ViewChild('profileDropdown') profileDropdown!: ElementRef;
  @ViewChild('profileButton') profileButton!: ElementRef;

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  toggleProfile() {
    this.profileOpen = !this.profileOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.profileOpen) return;

    const clickedInsideDropdown =
      this.profileDropdown?.nativeElement.contains(event.target);

    const clickedProfileButton =
      this.profileButton?.nativeElement.contains(event.target);

    if (!clickedInsideDropdown && !clickedProfileButton) {
      this.profileOpen = false;
    }
  }

  /* ================================
        IMAGE SLIDER WITH INDICATORS
  ================================= */

  @ViewChild('sliderTrack') sliderTrack!: ElementRef;
  @ViewChild('sliderWrapper') sliderWrapper!: ElementRef;
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  // <CHANGE> Added slider images array and control properties
  sliderImages: SliderImage[] = [
    {
      src: 'https://framerusercontent.com/images/TvRymMb9eE6gexPti05pMO8KzfI.png',
      alt: 'Interior Design 1',
      size: 'w-[350px] h-[520px]'
    },
    {
      src: 'https://framerusercontent.com/images/MeKJAlOXXupItPDmkok7GEkRjg.png',
      alt: 'Interior Design 2',
      size: 'w-[420px] h-[420px]'
    },
    {
      src: 'https://framerusercontent.com/images/4kzBVuRSxzERYTPFFvq46XUrexA.png',
      alt: 'Interior Design 3',
      size: 'w-[350px] h-[520px]'
    },
    {
      src: 'https://framerusercontent.com/images/4sU8ZcE1VPt5tOMPRWaOZKjCMk.png',
      alt: 'Interior Design 4',
      size: 'w-[420px] h-[420px]'
    },
    {
      src: 'https://framerusercontent.com/images/4kzBVuRSxzERYTPFFvq46XUrexA.png',
      alt: 'Interior Design 3',
      size: 'w-[350px] h-[520px]'
    },
    {
      src: 'https://framerusercontent.com/images/4sU8ZcE1VPt5tOMPRWaOZKjCMk.png',
      alt: 'Interior Design 4',
      size: 'w-[420px] h-[420px]'
    },
    {
      src: 'https://framerusercontent.com/images/TvRymMb9eE6gexPti05pMO8KzfI.png',
      alt: 'Interior Design 1',
      size: 'w-[350px] h-[520px]'
    },
    {
      src: 'https://framerusercontent.com/images/MeKJAlOXXupItPDmkok7GEkRjg.png',
      alt: 'Interior Design 2',
      size: 'w-[420px] h-[420px]'
    },
  ];

  // <CHANGE> Added services array for the services section
  // services: Service[] = [
  //   {
  //     icon: '🎨',
  //     title: 'Interior Design',
  //     description: 'Transform your living spaces with our innovative and personalized interior design solutions tailored to your lifestyle.'
  //   },
  //   {
  //     icon: '🏗️',
  //     title: 'Architecture',
  //     description: 'From concept to completion, we deliver architectural excellence combining functionality with aesthetic beauty.'
  //   },
  //   {
  //     icon: '🛋️',
  //     title: 'Furniture & Decor',
  //     description: 'Curated selection of premium furniture and decorative pieces that complement your interior perfectly.'
  //   }
  // ];

  currentSlideIndex = 0;
  sliderPosition = 0;
  isAutoSliding = true;
  autoSlideInterval: any;
  normalSpeed = 0.5;
  slowSpeed = 0.1;
  currentSpeed = this.normalSpeed;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngAfterViewInit() {
    this.startSmoothSlider();
  }

  // <CHANGE> Auto-slide functionality with pause on hover
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      if (this.isAutoSliding) {
        this.nextSlide();
      }
    }, 5000);
  }

  // <CHANGE> Manual slide navigation
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.sliderImages.length;
    this.updateSliderPosition();
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.sliderImages.length) % this.sliderImages.length;
    this.updateSliderPosition();
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
    this.updateSliderPosition();
  }

  // <CHANGE> Update slider position with smooth animation
  updateSliderPosition() {
    const track = this.sliderTrack?.nativeElement as HTMLElement;
    if (track) {
      const itemWidth = 350; // Adjust based on your image sizes
      const gap = 24;
      this.sliderPosition = -(this.currentSlideIndex * (itemWidth + gap));
      track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      track.style.transform = `translateX(${this.sliderPosition}px)`;
    }
  }

  // <CHANGE> Smooth slider with hover effects
  startSmoothSlider() {
    const track = this.sliderTrack?.nativeElement as HTMLElement;
    const wrapper = this.sliderWrapper?.nativeElement as HTMLElement;
    const container = this.sliderContainer?.nativeElement as HTMLElement;

    if (!track || !wrapper) return;

    // Pause auto-slide on hover
    wrapper.addEventListener('mouseenter', () => {
      this.isAutoSliding = false;
      this.currentSpeed = this.slowSpeed;
    });

    wrapper.addEventListener('mouseleave', () => {
      this.isAutoSliding = true;
      this.currentSpeed = this.normalSpeed;
    });

    // Optional: Add touch support for mobile
    let touchStartX = 0;
    wrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    });

    wrapper.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX - touchEndX > 50) {
        this.nextSlide();
      } else if (touchEndX - touchStartX > 50) {
        this.prevSlide();
      }
    });
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}