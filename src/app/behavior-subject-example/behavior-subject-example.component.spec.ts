import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectExampleComponent } from './behavior-subject-example.component';

describe('BehaviorSubjectExampleComponent', () => {
  let component: BehaviorSubjectExampleComponent;
  let fixture: ComponentFixture<BehaviorSubjectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorSubjectExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorSubjectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
