import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqs = [
    {
      id: '01',
      question: 'How involved can I be in the design process?',
      answer: `We believe in collaboration and value your input throughout the design
      process. We encourage clients to actively participate in discussions,
      share their ideas, preferences, and feedback.`,
      open: true
    },
    {
      id: '02',
      question: 'What services do you offer?',
      answer: `We provide turnkey interior solutions including design, carpentry,
      electrical, modular kitchens, wardrobes, civil work, and complete execution.`,
      open: false
    },
    {
      id: '03',
      question: 'What is your design process?',
      answer: `Our design process includes consultation, concept development,
      3D visualization, material selection, and final execution.`,
      open: false
    },
    {
      id: '04',
      question: 'How do you establish your design fees?',
      answer: `Fees are based on project size, complexity, and customization level.`,
      open: false
    },
    {
      id: '05',
      question: 'How long does a typical project take?',
      answer: `Most turnkey projects take 30–90 days depending on scope and materials.`,
      open: false
    },
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
