import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramServicesComponent } from './program-services.component';

describe('ProgramServicesComponent', () => {
  let component: ProgramServicesComponent;
  let fixture: ComponentFixture<ProgramServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
