import { NgClass } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-about-us-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about-us-section.component.html',
  styleUrl: './about-us-section.component.scss'
})

export class AboutUsSectionComponent {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 // visibility flags
  leftImageVisible = false;
  rightContentVisible = false;
  leftStatsVisible = false;
  rightPanelVisible = false;

  // (optional) big stats (if you keep any countups)
  stats = [
    { number: 24, displayNumber: '0' },
    { number: 300, displayNumber: '0' },
    { number: 15, displayNumber: '0' },
  ];

  private observer: IntersectionObserver | null = null;

  // capture all animatable elements
  @ViewChildren('anim', { read: ElementRef }) animTriggers!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.target || !(entry.target instanceof Element)) return;
          const key = entry.target.getAttribute('data-anim');
          if (entry.isIntersecting) {
            this.activate(key);
            if (this.observer) this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    this.animTriggers.forEach((el) => {
      const native = el.nativeElement as Element;
      if (native.getAttribute('data-anim')) this.observer!.observe(native);
    });
  }

  animateStats() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('.stat-number'));
  if (!els.length) return;

  els.forEach((el: HTMLElement) => {
    const attr = el.getAttribute('data-count-to') || '0';
    const endValue = Number(attr.replace(/,/g, '')) || 0;
    const duration = 1600; // ms
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * endValue);
      el.innerText = current.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        // ensure final value
        el.innerText = endValue.toLocaleString();
      }
    };

    requestAnimationFrame(tick);
  });
}

hasAnimatedStats = false;
  private activate(key: string | null) {
  switch (key) {
    case 'left-image':
      this.leftImageVisible = true;
      break;
    case 'right-content':
      this.rightContentVisible = true;
      break;
    case 'left-stats':
      this.leftStatsVisible = true;
      // trigger count-up once
      if (!this.hasAnimatedStats) {
        this.hasAnimatedStats = true;
        // slight delay so element paints / animation class applied
        setTimeout(() => this.animateStats(), 120);
      }
      break;
    case 'right-panel':
      this.rightPanelVisible = true;
      break;
  }
}

  // example count-up runner (if you want to animate numbers)
  startCountUp(items: { number: number; displayNumber: string }[], duration = 1000) {
    const start = performance.now();
    const targets = items.map(i => i.number);
    const step = (ts: number) => {
      const t = Math.min((ts - start) / duration, 1);
      items.forEach((it, idx) => (it.displayNumber = String(Math.floor(t * targets[idx]))));
      if (t < 1) requestAnimationFrame(step);
      else items.forEach((it, idx) => (it.displayNumber = String(targets[idx])));
    };
    requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

}
