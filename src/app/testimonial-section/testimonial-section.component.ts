import { CommonModule } from "@angular/common"
import { Component, ChangeDetectionStrategy, HostListener } from "@angular/core"

interface Testimonial {
  text: string
  name: string
  role: string
  avatar: string
}

@Component({
  selector: "app-testimonial-section",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./testimonial-section.component.html",
  styleUrl: "./testimonial-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialSectionComponent {
  private readonly SCALE_CLASSES = {
    active: "scale-100 shadow-md opacity-100 z-20 py-10 px-8 md:px-10",
    inactive: "scale-90 opacity-60 blur-[1px] border-2 border-gray-100 z-10 py-8 px-6 shadow-sm",
  }

  testimonials: Testimonial[] = [
    {
      text: "Turnkey transformed our entire home. Their team is reliable, professional, and communicates extremely well. The design-to-execution workflow was smooth and stress-free.",
      name: "Anita Kapoor",
      role: "Founder, HomeScape",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      text: "Working with them has been a game changer for our organization. Their proactive approach enhanced our security posture and built deep trust with our clients.",
      name: "Varun Kumar Thapliyal",
      role: "CEO, Reliance AI",
      avatar:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      text: "Exceptional craftsmanship and coordination. They delivered our office interiors ahead of time while maintaining outstanding quality.",
      name: "Rohan Sinha",
      role: "CTO, MetaWorks",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  currentIndex = 0

  get visibleTestimonials(): Testimonial[] {
    const len = this.testimonials.length
    const prev = this.testimonials[(this.currentIndex - 1 + len) % len]
    const current = this.testimonials[this.currentIndex]
    const next = this.testimonials[(this.currentIndex + 1) % len]
    return [prev, current, next]
  }

  getTestimonialClass(index: number): string {
    return index === 1 ? this.SCALE_CLASSES.active : this.SCALE_CLASSES.inactive
  }

  getDotClass(i: number): { "bg-[#D4894E]": boolean; "w-6": boolean; "bg-gray-300": boolean; "w-2": boolean } {
    return {
      "bg-[#D4894E]": this.currentIndex === i,
      "w-6": this.currentIndex === i,
      "bg-gray-300": this.currentIndex !== i,
      "w-2": this.currentIndex !== i,
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length
  }

  goToSlide(i: number): void {
    this.currentIndex = i
  }

  @HostListener("window:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === "ArrowLeft") {
      this.prevSlide()
    } else if (event.key === "ArrowRight") {
      this.nextSlide()
    }
  }
}
