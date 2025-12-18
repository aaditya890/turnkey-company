import { Component, type OnInit, type OnDestroy, HostListener } from "@angular/core"
import { CommonModule } from "@angular/common"
import { NavbarComponent } from "../navbar/navbar.component"

interface Slide {
  desktopImage: string
  mobileImage: string
  buttonText: string
  alt: string
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0
  isMobile = false

  slides: Slide[] = [
    {
      desktopImage: "assets/1.png",
      mobileImage: "assets/mobile-1.png",
      buttonText: "BOOK CONSULTATION",
      alt: "Professional consultation service",
    },
    {
      desktopImage: "assets/2.png",
      mobileImage: "assets/mobile-2.png",
      buttonText: "BOOK CONSULTATION",
      alt: "Expert advice and guidance",
    },
    {
      desktopImage: "assets/3.png",
      mobileImage: "assets/mobile-3.png",
      buttonText: "BOOK CONSULTATION",
      alt: "Calculate your options",
    },
  ]

  private autoSlideInterval: any

  ngOnInit(): void {
    this.checkViewport()
    this.startAutoSlide()
  }

  ngOnDestroy(): void {
    this.stopAutoSlide()
  }

  @HostListener("window:resize")
  checkViewport(): void {
    this.isMobile = window.innerWidth < 640
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide()
    }, 5000)
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval)
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length
    this.resetAutoSlide()
  }

  previousSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1
    this.resetAutoSlide()
  }

  goToSlide(index: number): void {
    this.currentSlide = index
    this.resetAutoSlide()
  }

  resetAutoSlide(): void {
    this.stopAutoSlide()
    this.startAutoSlide()
  }

  onBookConsultation(): void {
    console.log("Book consultation clicked for slide:", this.currentSlide)
  }
}
