import { CommonModule } from "@angular/common"
import {Component,ElementRef,HostListener,ViewChild,AfterViewInit,OnInit,OnDestroy,} from "@angular/core"
import { FaqComponent } from "./faq/faq.component";
import { StepsSectionComponent } from "./steps-section/steps-section.component";
import { ReviewSliderComponent } from "./review-slider/review-slider.component";
import { ShowcaseSectionComponent } from "./showcase-section/showcase-section.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { AboutUsSectionComponent } from "./about-us-section/about-us-section.component";
import { BentoGridSectionComponent } from "./bento-grid-section/bento-grid-section.component";
import { WhyChooseUsComponent } from "./why-choose-us/why-choose-us.component";
import { GetInTouchComponent } from "./get-in-touch/get-in-touch.component";

interface SliderImage {
  src: string
  alt: string
  size: string
}

interface Service {
  icon: string
  title: string
  description: string
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, FaqComponent, StepsSectionComponent, ReviewSliderComponent, ShowcaseSectionComponent, AboutUsSectionComponent, FooterComponent, HomeComponent, WhyChooseUsComponent, GetInTouchComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent  {
  title = "turnkey-company"
}
