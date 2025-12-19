import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardSectionComponent {
  services: ServiceCard[] = [
    {
      id: 1,
      title: 'Office Interiors',
      description: 'Functional kitchen, wardrobe and storage',
      image: 'assets/cards/1.png'
    },
    {
      id: 2,
      title: 'Full Home Interiors',
      description: 'Turnkey interior solutions for your home',
      image: 'assets/cards/2.png'
    },
    {
      id: 3,
      title: 'Luxury Interiors',
      description: 'Tailored interiors that redefine elegance',
      image: 'assets/cards/3.png'
    },
    {
      id: 4,
      title: 'Renovations',
      description: 'Expert solutions to upgrade your space',
      image: 'assets/cards/4.png'
    }
  ];

  onCardClick(serviceId: number): void {
    console.log('Card clicked:', serviceId);
  }

  onWhatsAppClick(): void {
    window.open('https://wa.me/your-number', '_blank');
  }

  onChatClick(): void {
    console.log('Chat clicked');
  }
}