import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablwwithmappipeoperatorComponent } from './observablwwithmappipeoperator.component';

describe('ObservablwwithmappipeoperatorComponent', () => {
  let component: ObservablwwithmappipeoperatorComponent;
  let fixture: ComponentFixture<ObservablwwithmappipeoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablwwithmappipeoperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablwwithmappipeoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
