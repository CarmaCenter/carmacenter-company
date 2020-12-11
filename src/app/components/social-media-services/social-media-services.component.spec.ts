import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaServicesComponent } from './social-media-services.component';

describe('SocialMediaServicesComponent', () => {
  let component: SocialMediaServicesComponent;
  let fixture: ComponentFixture<SocialMediaServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
