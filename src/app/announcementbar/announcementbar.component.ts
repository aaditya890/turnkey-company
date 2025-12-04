import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-announcementbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './announcementbar.component.html',
  styleUrl: './announcementbar.component.scss'
})
export class AnnouncementbarComponent {
  messages = [
    '✨ Transform your home with TurnKey — Book a free consultation!',
    '🚚 Free delivery across India for select models.',
    '🔧 Warranty & service support available in major cities.',
  ];

  current = 0;
  state: 'visible' | 'hidden' = 'visible';
  private intervalId: any;
  private flipDelay = 4200; // ms

  constructor() {
    this.startLoop();
  }

  startLoop() {
    this.clear();
    this.intervalId = setInterval(() => {
      this.next();
    }, this.flipDelay);
  }

  next() {
    // small crossfade with translate
    this.state = 'hidden';
    setTimeout(() => {
      this.current = (this.current + 1) % this.messages.length;
      this.state = 'visible';
    }, 300); // must match css transition
  }

  close() {
    this.clear();
    this.state = 'hidden';
  }

  clear() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy() {
    this.clear();
  }
} 
