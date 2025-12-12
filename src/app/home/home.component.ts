
import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

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

}
