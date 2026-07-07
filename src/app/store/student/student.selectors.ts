import { createSelector } from '@ngrx/store';
import { AppState } from './student.reducer';

export const selectStudentState = (state: AppState) => state.students;

export const selectAllStudents = createSelector(
  selectStudentState,
  (state) => state.students
);

export const selectStudentsLoading = createSelector(
  selectStudentState,
  (state) => state.loading
);

export const selectStudentsError = createSelector(
  selectStudentState,
  (state) => state.error
);
