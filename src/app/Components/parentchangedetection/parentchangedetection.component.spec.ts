import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentchangedetectionComponent } from './parentchangedetection.component';

describe('ParentchangedetectionComponent', () => {
  let component: ParentchangedetectionComponent;
  let fixture: ComponentFixture<ParentchangedetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentchangedetectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentchangedetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
