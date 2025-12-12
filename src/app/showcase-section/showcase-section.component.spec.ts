import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseSectionComponent } from './showcase-section.component';

describe('ShowcaseSectionComponent', () => {
  let component: ShowcaseSectionComponent;
  let fixture: ComponentFixture<ShowcaseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowcaseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
