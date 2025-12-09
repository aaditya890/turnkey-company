import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-section.component.html',
  styleUrl: './testimonial-section.component.scss'
})
export class TestimonialSectionComponent {
 testimonials = [
    {
      text: 'Turnkey transformed our entire home. Their team is reliable, professional, and communicates extremely well. The design-to-execution workflow was smooth and stress-free.',
      name: 'Anita Kapoor',
      role: 'Founder, HomeScape',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      text: 'Working with them has been a game changer for our organization. Their proactive approach enhanced our security posture and built deep trust with our clients.',
      name: 'Varun Kumar Thapliyal',
      role: 'CEO, Reliance AI',
      avatar: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      text: 'Exceptional craftsmanship and coordination. They delivered our office interiors ahead of time while maintaining outstanding quality.',
      name: 'Rohan Sinha',
      role: 'CTO, MetaWorks',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    // add as many as you want – layout stays same
  ];

  currentIndex = 0;

  get visibleTestimonials() {
    const len = this.testimonials.length;
    const prev = this.testimonials[(this.currentIndex - 1 + len) % len];
    const current = this.testimonials[this.currentIndex];
    const next = this.testimonials[(this.currentIndex + 1) % len];
    return [prev, current, next];
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  goToSlide(i: number) {
    this.currentIndex = i;
  }
}
