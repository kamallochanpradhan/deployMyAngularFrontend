import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassrqstHeaderWithRqstObjectComponent } from './passrqst-header-with-rqst-object.component';

describe('PassrqstHeaderWithRqstObjectComponent', () => {
  let component: PassrqstHeaderWithRqstObjectComponent;
  let fixture: ComponentFixture<PassrqstHeaderWithRqstObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassrqstHeaderWithRqstObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassrqstHeaderWithRqstObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
