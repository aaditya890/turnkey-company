import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.scss'
})
export class DummyComponent {
   openMenu: string | null = null;
  mobileMenu = false;

  toggleMenu(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }

  closeMenu() {
    this.openMenu = null;
  }

  toggleMobile() {
    this.mobileMenu = !this.mobileMenu;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item')) {
      this.openMenu = null;
    }
  }
}
