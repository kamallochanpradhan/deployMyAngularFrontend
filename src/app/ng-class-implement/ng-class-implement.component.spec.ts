import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassImplementComponent } from './ng-class-implement.component';

describe('NgClassImplementComponent', () => {
  let component: NgClassImplementComponent;
  let fixture: ComponentFixture<NgClassImplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassImplementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassImplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
