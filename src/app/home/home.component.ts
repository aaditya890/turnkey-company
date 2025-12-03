import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   currentIndex = 0;
  private intervalId?: any;

 banners: string[] = [
    'https://img.freepik.com/free-photo/optimistic-hopeful-girl-having-faith-desire-come-true-standing-with-crossed-fingers-good_1258-142999.jpg?t=st=1764594806~exp=1764598406~hmac=72ebc1bed0b0e7be9d78929bed8180327d8728fbbdec4570469d742d45d2721b&w=1480',
    // 'https://img.freepik.com/premium-photo/back-school-fall-fashion-accessory-happy-stylish-girl-leather-wear-child-with-autumn-umbrella-rainy-weather-horizontal-poster-banner-with-copy-space_545934-33001.jpg?w=1480',
    'https://img.freepik.com/free-photo/friendlylooking-sociable-stylish-woman-with-curly-hair-red-beanie-winking-joyfully-pointi_1258-152292.jpg?t=st=1764595965~exp=1764599565~hmac=444b28f082173618de04fc70ddfb57ce2500d385e5eed61b331106aaeabc64a8&w=1480',
    'https://img.freepik.com/free-photo/optimistic-hopeful-girl-having-faith-desire-come-true-standing-with-crossed-fingers-good_1258-142999.jpg?t=st=1764594806~exp=1764598406~hmac=72ebc1bed0b0e7be9d78929bed8180327d8728fbbdec4570469d742d45d2721b&w=1480',

  ];


  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  private startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.banners.length;
    }, 4000);
  }

  stopAutoSlide() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  goToSlide(index: any) {
    this.currentIndex = index;
    this.stopAutoSlide();
    this.startAutoSlide(); // restart timer after manual change
  }

}
