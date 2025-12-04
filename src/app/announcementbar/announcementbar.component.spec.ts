import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementbarComponent } from './announcementbar.component';

describe('AnnouncementbarComponent', () => {
  let component: AnnouncementbarComponent;
  let fixture: ComponentFixture<AnnouncementbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnouncementbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
