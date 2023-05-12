import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservabletestComponent } from './observabletest.component';

describe('ObservabletestComponent', () => {
  let component: ObservabletestComponent;
  let fixture: ComponentFixture<ObservabletestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservabletestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservabletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
