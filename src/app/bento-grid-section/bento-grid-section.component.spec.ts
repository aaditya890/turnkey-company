import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BentoGridSectionComponent } from './bento-grid-section.component';

describe('BentoGridSectionComponent', () => {
  let component: BentoGridSectionComponent;
  let fixture: ComponentFixture<BentoGridSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BentoGridSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BentoGridSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
