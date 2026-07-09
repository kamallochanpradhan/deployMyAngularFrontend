import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/Model/Student';

export const loadStudents = createAction('[Students Page] Load Students');

export const loadStudentsSuccess = createAction(
  '[Students API] Load Students Success',
  props<{ students: Student[] }>()
);

export const loadStudentsFailure = createAction(
  '[Students API] Load Students Failure',
  props<{ error: string }>()
);

export const deleteStudent = createAction(
  '[Students Page] Delete Student',
  props<{ id: number }>()
);

export const deleteStudentSuccess = createAction(
  '[Students API] Delete Student Success',
  props<{ id: number }>()
);

export const deleteStudentFailure = createAction(
  '[Students API] Delete Student Failure',
  props<{ error: string }>()
);

export const updateStudent = createAction(
  '[Students Page] Update Student',
  props<{ student: Student }>()
);

export const updateStudentSuccess = createAction(
  '[Students API] Update Student Success',
  props<{ student: Student }>()
);

export const updateStudentFailure = createAction(
  '[Students API] Update Student Failure',
  props<{ error: string }>()
);
