import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


interface BentoItem {
  label: string;
  img: string;
  grid: string;
}

@Component({
  selector: 'app-bento-grid-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './bento-grid-section.component.html',
  styleUrl: './bento-grid-section.component.scss'
})
export class BentoGridSectionComponent {
// Your original Bento items (UNCHANGED)
  bentoItems: BentoItem[] = [
    {
      label: "Living Room",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/living-1759750377-O1Yiw/lr-13-1763111912-Rl3YP.jpg",
      grid: "md:col-span-2 md:row-span-2",
    },
    {
      label: "Master Bedroom",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/mbr-1759750466-DinYK/mbr-10-1763100361-s4LQX.jpg",
      grid: "md:col-span-2",
    },
    {
      label: "False Ceiling",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/tv-1761583761-DjqGd/20-1762773267-P8Vt9.jpg",
      grid: "",
    },
    {
      label: "Wardrobe",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/wr-1759751175-9MtjY/21-1762774027-Iei06.jpg",
      grid: "",
    },
    {
      label: "Dining Area",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/di-1759750788-LFDCZ/16-1762773650-i8mOT.jpg",
      grid: "md:col-span-2",
    },
    {
      label: "Study Room",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2023-1696420252-fyaIE/renders-1696505505-hTG0j/study-table-1696505519-Q0m8k/st10-1702448336-FYVVc.jpg",
      grid: "md:col-span-2",
    },
    {
      label: "Living Room",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/living-1759750377-O1Yiw/lr-13-1763111912-Rl3YP.jpg",
      grid: "md:col-span-2 md:row-span-2",
    },
    {
      label: "Master Bedroom",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/mbr-1759750466-DinYK/mbr-10-1763100361-s4LQX.jpg",
      grid: "md:col-span-2",
    },
    {
      label: "False Ceiling",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/tv-1761583761-DjqGd/20-1762773267-P8Vt9.jpg",
      grid: "",
    },
    {
      label: "Wardrobe",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/wr-1759751175-9MtjY/21-1762774027-Iei06.jpg",
      grid: "",
    },
    {
      label: "Dining Area",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/ond-1759736307-rv9SV/di-1759750788-LFDCZ/16-1762773650-i8mOT.jpg",
      grid: "md:col-span-2",
    },
    {
      label: "Study Room",
      img: "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2023-1696420252-fyaIE/renders-1696505505-hTG0j/study-table-1696505519-Q0m8k/st10-1702448336-FYVVc.jpg",
      grid: "md:col-span-2",
    },
  ];

  // SLIDER STATE
  currentIndex = 0;

  // AUTO SPLIT ITEMS ➝ PAGE 1 & PAGE 2
  bentoItemsPage1: any[] = [];
  bentoItemsPage2: any[] = [];

  ngOnInit() {
    // 4 items on first page, 2 on next page
    this.bentoItemsPage1 = this.bentoItems.slice(0, 6);
    this.bentoItemsPage2 = this.bentoItems.slice(6, 12);
  }

  // NEXT SLIDE
  nextBento() {
    if (this.currentIndex < 1) {
      this.currentIndex++;
    }
  }

  // PREVIOUS SLIDE
  prevBento() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
