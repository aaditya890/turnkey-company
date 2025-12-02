import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'turnkey-company';
 
 mobileMenuOpen = false
  state: "visible" | "hidden" = "visible"
  current = 0
  notificationClosed = false
  private intervalId: any

  messages: string[] = [
    "Our website uses cookies. Learn more",
    "✨ Transform your home with TurnKey",
    "📞 Book your free consultation today",
    "🔥 Exciting turnkey offers available",
  ]

  ngOnInit() {
    if (!this.notificationClosed) {
      this.startMessageRotation()
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  private startMessageRotation() {
    this.intervalId = setInterval(() => {
      this.rotateMessage()
    }, 3500)
  }

  private rotateMessage() {
    this.state = "hidden"
    setTimeout(() => {
      this.current = (this.current + 1) % this.messages.length
      this.state = "visible"
    }, 400)
  }

  closeNotification() {
    this.notificationClosed = true
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen
  }
}
