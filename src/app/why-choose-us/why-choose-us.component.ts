import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {

  reels = signal([
    { video: 'https://www.pexels.com/download/video/6831465/' },
    { video: 'https://www.pexels.com/download/video/6831084/' },
    { video: 'https://www.pexels.com/download/video/10453250/' },
    { video: 'https://www.pexels.com/download/video/6715884/' },
  ]);
}
