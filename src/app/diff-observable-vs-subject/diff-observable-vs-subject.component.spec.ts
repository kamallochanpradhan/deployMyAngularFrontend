import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffObservableVsSubjectComponent } from './diff-observable-vs-subject.component';

describe('DiffObservableVsSubjectComponent', () => {
  let component: DiffObservableVsSubjectComponent;
  let fixture: ComponentFixture<DiffObservableVsSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffObservableVsSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffObservableVsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
