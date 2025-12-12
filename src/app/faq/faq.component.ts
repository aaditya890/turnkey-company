import { Component, OnInit } from '@angular/core';
import { SectionStyleDirective } from '../section-style.directive';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  open: boolean;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {

  activeIndex = 0;

  faqs: FaqItem[] = [
    { id: '01', question: 'What does your turnkey interior service include?', answer: 'We include complete design, execution, material sourcing, carpentry, electrical, civil work, and full project management.', open: false },
    { id: '02', question: 'How do you maintain project quality?', answer: 'We follow a strict quality checklist, expert supervision, branded materials, and client-approved drawings.', open: false },
    { id: '03', question: 'Do you offer on-site project updates?', answer: 'Yes, your project manager will update you through WhatsApp groups, site photos, and scheduled inspections.', open: false },
    { id: '04', question: 'What is the typical project timeline?', answer: 'Turnkey interior projects take 30–90 days depending on scope, design approval, and material selection.', open: false },
    { id: '05', question: 'How does payment work?', answer: 'Payments are milestone-based — booking, design, production, installation, and handover.', open: false },
    { id: '06', question: 'Do you provide warranty on interiors?', answer: 'Yes, we offer warranty on modular products, hardware, and workmanship depending on the materials chosen.', open: false }
  ];

  testimonials: Testimonial[] = [
    {
      name: "Rohit Sharma",
      role: "Home Owner",
      quote: "The Turnkey Company made the whole interior process smooth and stress-free. The final result was exactly what I imagined."
    },
    {
      name: "Simran Kaur",
      role: "Apartment Owner",
      quote: "Loved the design and finishing! The team transformed my flat beautifully and handled everything on time."
    },
    {
      name: "Aman Verma",
      role: "Villa Client",
      quote: "Great execution and neat workmanship. The final interiors matched the designs perfectly."
    },
    {
      name: "Neha Patel",
      role: "2BHK Owner",
      quote: "Very professional team. They planned my space well and delivered clean, high-quality interiors."
    },
    {
      name: "Karan Mehta",
      role: "Office Renovation",
      quote: "Our office revamp was handled efficiently. Good coordination, modern design, and smooth delivery."
    },
    {
      name: "Shruti Jain",
      role: "Modular Kitchen Client",
      quote: "The kitchen came out better than expected. Smart storage, clean finishes, and quick installation."
    }
  ];

  ngOnInit() {
    setInterval(() => {
      this.next();
    }, 4000); // auto slide every 4 seconds
  }

  toggleFAQ(i: number) {
    this.faqs[i].open = !this.faqs[i].open;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
