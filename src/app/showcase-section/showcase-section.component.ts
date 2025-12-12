import { CommonModule, NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

interface SliderImage {
  src: string
  alt: string
  size: string
}

@Component({
  selector: 'app-showcase-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './showcase-section.component.html',
  styleUrl: './showcase-section.component.scss'
})
export class ShowcaseSectionComponent {
   @ViewChild('sliderTrack') sliderTrack!: ElementRef;

  sliderImages: SliderImage[] = [
    { src: "https://framerusercontent.com/images/TvRymMb9eE6gexPti05pMO8KzfI.png", alt: "Interior 1", size: "w-[260px] h-[390px]" },
    { src: "https://framerusercontent.com/images/MeKJAlOXXupItPDmkok7GEkRjg.png", alt: "Interior 2", size: "w-[315px] h-[315px]" },
    { src: "https://framerusercontent.com/images/4kzBVuRSxzERYTPFFvq46XUrexA.png", alt: "Interior 3", size: "w-[260px] h-[390px]" },
    { src: "https://framerusercontent.com/images/4sU8ZcE1VPt5tOMPRWaOZKjCMk.png", alt: "Interior 4", size: "w-[315px] h-[315px]" }
  ];

  position = 0;
  speed = 0.8; // smooth speed
  imageWidth = 0;

  ngAfterViewInit() {
    setTimeout(() => {
      const firstImg = this.sliderTrack.nativeElement.querySelector("img");
      this.imageWidth = firstImg.offsetWidth + 24; // gap included
      this.startAutoScroll();
    }, 300);
  }

  startAutoScroll() {
    const track = this.sliderTrack.nativeElement;

    const animate = () => {
      this.position -= this.speed;
      track.style.transform = `translateX(${this.position}px)`;

      const totalWidth = this.sliderImages.length * this.imageWidth;

      if (Math.abs(this.position) >= totalWidth) {
        this.position = 0;
        track.style.transform = "translateX(0px)";
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}
