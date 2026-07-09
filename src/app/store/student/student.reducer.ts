import { createReducer, on } from '@ngrx/store';
import {
  deleteStudent,
  deleteStudentFailure,
  deleteStudentSuccess,
  loadStudents,
  loadStudentsFailure,
  loadStudentsSuccess,
  updateStudent,
  updateStudentFailure,
  updateStudentSuccess,
} from './student.actions';
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
  })),
  on(deleteStudent, (state) => ({ ...state, loading: true, error: null })),
  on(deleteStudentSuccess, (state, { id }) => ({
    ...state,
    students: state.students.filter((student) => student.id !== id),
    loading: false,
    error: null,
  })),
  on(deleteStudentFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(updateStudent, (state) => ({ ...state, loading: true, error: null })),
  on(updateStudentSuccess, (state, { student }) => ({
    ...state,
    students: state.students.map((item) => (item.id === student.id ? student : item)),
    loading: false,
    error: null,
  })),
  on(updateStudentFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export const reducers = {
  students: studentReducer,
};
