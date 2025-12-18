import { Component, HostListener } from "@angular/core"
import { CommonModule } from "@angular/common"
import { AnnouncementbarComponent } from "../announcementbar/announcementbar.component";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, AnnouncementbarComponent],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  mobileMenuOpen = false

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen
    this.toggleBodyScroll()
  }

  closeMobileMenu(): void {
    if (this.mobileMenuOpen) {
      this.mobileMenuOpen = false
      this.toggleBodyScroll()
    }
  }

  private toggleBodyScroll(): void {
    if (this.mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  // login register profile dropdown

  profileOpen = false;

  toggleProfile() {
    this.profileOpen = !this.profileOpen;
  }

  closeProfile() {
    this.profileOpen = false;
  }


  @HostListener("window:resize")
  onResize(): void {
    // Close mobile menu when resizing to desktop view
    if (window.innerWidth >= 1280 && this.mobileMenuOpen) {
      this.closeMobileMenu()
    }
  }
}
