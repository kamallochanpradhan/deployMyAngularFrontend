import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableVsPromiseExampleComponent } from './observable-vs-promise-example.component';

describe('ObservableVsPromiseExampleComponent', () => {
  let component: ObservableVsPromiseExampleComponent;
  let fixture: ComponentFixture<ObservableVsPromiseExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableVsPromiseExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableVsPromiseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
