import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectvsbehavioursubjectExampleComponent } from './subjectvsbehavioursubject-example.component';

describe('SubjectvsbehavioursubjectExampleComponent', () => {
  let component: SubjectvsbehavioursubjectExampleComponent;
  let fixture: ComponentFixture<SubjectvsbehavioursubjectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectvsbehavioursubjectExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectvsbehavioursubjectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
