import { CommonModule, NgClass } from "@angular/common"
import { Component, type ElementRef, HostListener, type OnDestroy, type OnInit, ViewChild } from "@angular/core"
import { NavbarComponent } from "../navbar/navbar.component"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, NgClass, NavbarComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit, OnDestroy {
  mobileOpen = false
  profileOpen = false
  scrolled = false

  currentSlide = 0
  slides = [0, 1, 2] // Array representing the number of slides
  private slideInterval: any
  private readonly autoSlideDelay = 5000 // 5 seconds between slides

  @ViewChild("profileDropdown") profileDropdown!: ElementRef
  @ViewChild("profileButton") profileButton!: ElementRef

  ngOnInit() {
    // Start automatic sliding
    this.startAutoSlide()
  }

  ngOnDestroy() {
    // Clean up the interval when component is destroyed
    this.stopAutoSlide()
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen
  }

  toggleProfile() {
    this.profileOpen = !this.profileOpen
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length
    this.resetAutoSlide()
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1
    this.resetAutoSlide()
  }

  goToSlide(index: number) {
    this.currentSlide = index
    this.resetAutoSlide()
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide()
    }, this.autoSlideDelay)
  }

  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval)
    }
  }

  resetAutoSlide() {
    this.stopAutoSlide()
    this.startAutoSlide()
  }

  @HostListener("window:scroll")
  onWindowScroll() {
    this.scrolled = window.scrollY > 50
  }

  @HostListener("document:click", ["$event"])
  onClickOutside(event: Event) {
    if (!this.profileOpen) return

    const dropdown = this.profileDropdown?.nativeElement
    const button = this.profileButton?.nativeElement

    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
      this.profileOpen = false
    }
  }
}
