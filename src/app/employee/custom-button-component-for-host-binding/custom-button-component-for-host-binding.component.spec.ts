import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonComponentForHostBindingComponent } from './custom-button-component-for-host-binding.component';

describe('CustomButtonComponentForHostBindingComponent', () => {
  let component: CustomButtonComponentForHostBindingComponent;
  let fixture: ComponentFixture<CustomButtonComponentForHostBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomButtonComponentForHostBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomButtonComponentForHostBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
