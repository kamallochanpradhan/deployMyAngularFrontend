import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllconceptComponent } from './allconcept.component';

describe('AllconceptComponent', () => {
  let component: AllconceptComponent;
  let fixture: ComponentFixture<AllconceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllconceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
