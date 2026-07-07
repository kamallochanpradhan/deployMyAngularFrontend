import { createReducer, on } from '@ngrx/store';
import { loadStudents, loadStudentsFailure, loadStudentsSuccess } from './student.actions';
import { Student } from 'src/app/Model/Student';

export interface StudentState {
  students: Student[];
  loading: boolean;
  error: string | null;
}

export interface AppState {
  students: StudentState;
}

export const initialStudentState: StudentState = {
  students: [],
  loading: false,
  error: null,
};

export const studentReducer = createReducer(
  initialStudentState,
  on(loadStudents, (state) => ({ ...state, loading: true, error: null })),
  on(loadStudentsSuccess, (state, { students }) => ({
    ...state,
    students,
    loading: false,
    error: null,
  })),
  on(loadStudentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export const reducers = {
  students: studentReducer,
};
