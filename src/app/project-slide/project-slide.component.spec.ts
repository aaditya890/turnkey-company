import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSlideComponent } from './project-slide.component';

describe('ProjectSlideComponent', () => {
  let component: ProjectSlideComponent;
  let fixture: ComponentFixture<ProjectSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
