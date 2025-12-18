import { Component, HostListener } from "@angular/core"
import { CommonModule } from "@angular/common"
import { AnnouncementbarComponent } from "../announcementbar/announcementbar.component";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, AnnouncementbarComponent,CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  mobileMenuOpen = false
  profileOpen = false
  activeDropdown: string | null = null
  mobileActiveDropdown: string | null = null

  // Mega menu data
  designIdeasCategories = [
    {
      title: "By Room",
      links: [
        { name: "Living Room", image: "/modern-living-room.png" },
        { name: "Kitchen", image: "/modular-kitchen-design.jpg" },
        { name: "Bedroom", image: "/luxury-bedroom.png" },
        { name: "Bathroom", image: "/modern-bathroom.png" },
        { name: "Office", image: "/home-office-interior.png" },
        { name: "Dining Room", image: "/elegant-dining-room.png" },
      ],
    },
    {
      title: "By Style",
      links: [
        { name: "Modern", image: "/modern-minimalist-interior.png" },
        { name: "Contemporary", image: "/contemporary-home-design.jpg" },
        { name: "Traditional", image: "/traditional-interior.png" },
        { name: "Industrial", image: "/industrial-style-interior.jpg" },
      ],
    },
  ]

  magazineCategories = [
    { name: "Latest Projects", image: "/interior-design-project-showcase.jpg" },
    { name: "Design Tips", image: "/interior-design-tips.jpg" },
    { name: "Trends 2025", image: "/2025-interior-trends.jpg" },
    { name: "Before & After", image: "/home-renovation-before-after.jpg" },
  ]

  servicesData = [
    {
      icon: "🏠",
      title: "Turnkey Solutions",
      desc: "Complete end-to-end projects",
    },
    {
      icon: "🔧",
      title: "Modular Kitchens",
      desc: "Custom kitchen designs",
    },
    {
      icon: "🛋️",
      title: "Furniture & Wardrobes",
      desc: "Built-in storage solutions",
    },
    {
      icon: "🏢",
      title: "Office Solutions",
      desc: "Commercial interiors",
    },
    {
      icon: "🚿",
      title: "Bathroom Renovation",
      desc: "Complete bathroom solutions",
    },
    {
      icon: "🌿",
      title: "Landscaping",
      desc: "Terrace & garden design",
    },
  ]

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen
    if (this.mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      this.mobileActiveDropdown = null
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false
    this.mobileActiveDropdown = null
    document.body.style.overflow = ""
  }

  toggleProfile() {
    this.profileOpen = !this.profileOpen
  }

  showDropdown(menu: string) {
    this.activeDropdown = menu
  }

  hideDropdown() {
    this.activeDropdown = null
  }

  toggleMobileDropdown(menu: string) {
    this.mobileActiveDropdown = this.mobileActiveDropdown === menu ? null : menu
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement
    if (!target.closest(".desktop-profile")) {
      this.profileOpen = false
    }
  }
}
