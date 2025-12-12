import { Component, ElementRef, Renderer2 } from '@angular/core';
import { SectionStyleDirective } from '../section-style.directive';

interface Step {
  number: number;
  title: string;
  description: string;
  points: string[];
  image: string;
}

@Component({
  selector: 'app-steps-section',
  standalone: true,
  imports: [],
  templateUrl: './steps-section.component.html',
  styleUrl: './steps-section.component.scss'
})
export class StepsSectionComponent {

  steps: Step[] = [
    {
      number: 1,
      title: "Meet Your Designer",
      description:
        "Tell us about your space, style, needs, and budget. The more we know, the better we design.",
      points: [
        "Fill out your project form",
        "Get a FREE design consultation",
        "Receive personalized concepts & quotations"
      ],
      image: "assets/steps/step1.webp"
    },

    {
      number: 2,
      title: "Book The Turnkey Company",
      description:
        "Pay 10% of the project value or ₹25,000 (whichever is higher). This locks your project, designer, and timeline.",
      points: [
        "Finalize materials",
        "Color combinations",
        "Layouts"
      ],
      image: "assets/steps/step2.webp"
    },

    {
      number: 3,
      title: "Place Your Order",
      description:
        "After final approvals make a cumulative 60% payment to move the project into production.",
      points: [
        "Production begins",
        "Material procurement",
        "Quality checks"
      ],
      image: "assets/steps/step3.webp"
    },

    {
      number: 4,
      title: "Execution Begins",
      description:
        "On-site work starts — civil, electrical, plumbing, carpentry — tracked by your project manager.",
      points: [
        "Project manager updates",
        "Client group communication",
        "Scheduled inspections"
      ],
      image: "assets/steps/step4.webp"
    },

    {
      number: 5,
      title: "Final Installations & Move-In",
      description:
        "At material dispatch, pay the final 100% and move into the finishing stage.",
      points: [
        "Modular furniture",
        "Wardrobes",
        "Kitchens",
        "Lighting & electrical",
        "Deep cleaning"
      ],
      image: "assets/steps/step5.webp"
    }
  ];

  constructor(private host: ElementRef, private r: Renderer2) { }

  ngAfterViewInit(): void {
    const root = this.host.nativeElement as HTMLElement;
    const items = Array.from(root.querySelectorAll('.step-row')) as HTMLElement[];

    if (!('IntersectionObserver' in window)) {
      // fallback: just add in-view immediately
      items.forEach(it => this.r.addClass(it, 'in-view'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        const el = e.target as HTMLElement;
        if (e.isIntersecting) {
          this.r.addClass(el, 'in-view');
        }
      });
    }, { threshold: 0.18 });

    items.forEach(it => io.observe(it));
  }
}
