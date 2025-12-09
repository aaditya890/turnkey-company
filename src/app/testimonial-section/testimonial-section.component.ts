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
   currentIndex = 1; // middle card active

  testimonials = [
    {
      name: 'Varun Kumar Thapliyal',
      role: 'CEO, Reliance AI',
      avatar: 'https://i.pravatar.cc/100?img=11',
      text: `Working with them has been a game changer for our organization.
      Their commitment to safeguarding our data and ensuring compliance
      has given us peace of mind. The team’s expertise and proactive
      approach have not only enhanced our security posture but also
      built trust with our clients. Highly recommend their services!`
    },
    {
      name: 'Anita Kapoor',
      role: 'Founder, HomeScape',
      avatar: 'https://i.pravatar.cc/100?img=32',
      text: `Turnkey transformed our entire home. Their team is reliable,
      professional, and communicates extremely well. The design-to-execution
      workflow was smooth and stress-free.`
    },
    {
      name: 'Rohan Sinha',
      role: 'CTO, MetaWorks',
      avatar: 'https://i.pravatar.cc/100?img=22',
      text: `Exceptional craftsmanship and coordination. They delivered
      our office interiors ahead of time, maintaining outstanding quality.`
    },
    {
      name: 'Varun Kumar Thapliyal',
      role: 'CEO, Reliance AI',
      avatar: 'https://i.pravatar.cc/100?img=11',
      text: `Working with them has been a game changer for our organization.
      Their commitment to safeguarding our data and ensuring compliance
      has given us peace of mind. The team’s expertise and proactive
      approach have not only enhanced our security posture but also
      built trust with our clients. Highly recommend their services!`
    },
    {
      name: 'Anita Kapoor',
      role: 'Founder, HomeScape',
      avatar: 'https://i.pravatar.cc/100?img=32',
      text: `Turnkey transformed our entire home. Their team is reliable,
      professional, and communicates extremely well. The design-to-execution
      workflow was smooth and stress-free.`
    },
    {
      name: 'Rohan Sinha',
      role: 'CTO, MetaWorks',
      avatar: 'https://i.pravatar.cc/100?img=22',
      text: `Exceptional craftsmanship and coordination. They delivered
      our office interiors ahead of time, maintaining outstanding quality.`
    }
  ];

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
}
