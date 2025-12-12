import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { SectionStyleDirective } from '../section-style.directive';

interface Testimonial {
  text: string
  name: string
  role: string
  avatar: string
}

@Component({
  selector: 'app-review-slider',
  standalone: true,
  imports: [NgClass],
  templateUrl: './review-slider.component.html',
  styleUrl: './review-slider.component.scss'
})
export class ReviewSliderComponent implements OnInit {
  autoSlideInterval: any = null;
  autoSlideDelay = 3500; // 3.5 seconds
  currentIndex = 0;

  private readonly SCALE_CLASSES = {
    active: "scale-100 shadow-md opacity-100 z-20 py-10 px-8 md:px-10",
    inactive: "scale-90 opacity-60 blur-[1px] border-2 border-gray-100 z-10 py-8 px-6 shadow-sm",
  };

  testimonials: Testimonial[] = [
    {
      text: "The Turnkey Company delivered far beyond our expectations. Every stage, from planning to execution, was handled with clarity and professionalism.",
      name: "Arjun Malhotra",
      role: "Business Owner",
      avatar: "assets/review-users/1.webp"
    },
    {
      text: "Their proactive communication and attention to detail made the entire journey smooth. Truly a reliable team that understands client needs.",
      name: "Varun Kumar Thapliyal",
      role: "CEO, Reliance AI",
      avatar: "assets/review-users/2.webp"
    },
    {
      text: "Exceptional craftsmanship and top-tier coordination. Our office interiors were delivered ahead of schedule with premium finishing.",
      name: "Ananya Rao",
      role: "CTO, MetaWorks",
      avatar: "assets/review-users/9.webp"
    },
    {
      text: "They understood my home interior expectations instantly. The final outcome reflects great aesthetics and thoughtful execution.",
      name: "Karan Patel",
      role: "Software Engineer",
      avatar: "assets/review-users/3.webp"
    },
    {
      text: "The 3D designs matched the final output perfectly. Smooth renovation experience with excellent quality control.",
      name: "Aman Verma",
      role: "Villa Owner",
      avatar: "assets/review-users/4.webp"
    },
    {
      text: "Their team took full ownership of the project. Every update was timely and every finish looked premium. Very satisfied.",
      name: "Priya Mehta",
      role: "Senior HR Manager",
      avatar: "assets/review-users/10.webp"
    },
    {
      text: "Clear timelines, budget clarity, and exceptional execution. Truly a trustworthy turnkey interior partner.",
      name: "Kunal Deshpande",
      role: "Product Designer",
      avatar: "assets/review-users/5.webp"
    },
    {
      text: "Their detailing and material knowledge really stood out. Our space now feels elegant, functional, and beautifully planned.",
      name: "Rajat Bhandari",
      role: "Finance Consultant",
      avatar: "assets/review-users/6.webp"
    },
    {
      text: "The team beautifully transformed our apartment. The designs were creative, modern, and aligned perfectly with our lifestyle.",
      name: "Rohan Sinha",
      role: "Architectural Student",
      avatar: "assets/review-users/7.webp"
    },
    {
      text: "Every room now feels warm, functional, and aesthetically balanced. Their designers showed great professionalism and patience.",
      name: "Nikhil Sharma",
      role: "Marketing Head",
      avatar: "assets/review-users/8.webp"
    }
  ];


  ngOnInit(): void {
    this.startAutoSlide();
  }

  get visibleTestimonials(): Testimonial[] {
    const len = this.testimonials.length;
    const prev = this.testimonials[(this.currentIndex - 1 + len) % len];
    const current = this.testimonials[this.currentIndex];
    const next = this.testimonials[(this.currentIndex + 1) % len];
    return [prev, current, next];
  }

  getTestimonialClass(index: number): string {
    return index === 1 ? this.SCALE_CLASSES.active : this.SCALE_CLASSES.inactive;
  }

  getDotClass(i: number) {
    return {
      "bg-[#D4894E]": this.currentIndex === i,
      "w-6": this.currentIndex === i,
      "bg-gray-300": this.currentIndex !== i,
      "w-2": this.currentIndex !== i,
    };
  }

  nextSlide(auto = false): void {
    if (!auto) this.stopAutoSlide();   // Stop only when user clicks
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide(): void {
    this.stopAutoSlide();
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  goToSlide(i: number): void {
    this.stopAutoSlide();
    this.currentIndex = i;
  }


  startAutoSlide() {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide(true);  // AUTO MODE
    }, this.autoSlideDelay);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  @HostListener("window:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === "ArrowLeft") {
      this.prevSlide();
    } else if (event.key === "ArrowRight") {
      this.nextSlide();
    }
  }
}
