import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildchangedetectionComponent } from './childchangedetection.component';

describe('ChildchangedetectionComponent', () => {
  let component: ChildchangedetectionComponent;
  let fixture: ComponentFixture<ChildchangedetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildchangedetectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildchangedetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
