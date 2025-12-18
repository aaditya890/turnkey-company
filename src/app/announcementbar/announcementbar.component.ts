import { CommonModule, NgClass } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-announcementbar',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './announcementbar.component.html',
  styleUrl: './announcementbar.component.scss'
})
export class AnnouncementbarComponent {
   showAnnouncement = true

  messages = [
    "Transform your home with TurnKey — Book a free consultation!",
    "Free delivery across India for select models.",
    "Warranty & service support available in major cities.",
  ]

  current = 0
  state: "visible" | "hidden" = "visible"

  private intervalId: any
  private flipDelay = 4200

  constructor() {
    this.startLoop()
  }

  startLoop() {
    this.clear()
    this.intervalId = setInterval(() => {
      this.next()
    }, this.flipDelay)
  }

  next() {
    this.state = "hidden"

    setTimeout(() => {
      this.current = (this.current + 1) % this.messages.length
      this.state = "visible"
    }, 300)
  }

  close() {
    this.clear()
    this.state = "hidden"

    setTimeout(() => {
      this.showAnnouncement = false
    }, 300)
  }

  clear() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  ngOnDestroy() {
    this.clear()
  }
}
