import { studentReducer, initialStudentState } from './student.reducer';
import { loadStudents, loadStudentsFailure, loadStudentsSuccess } from './student.actions';

describe('student reducer', () => {
  it('should set loading true when students are requested', () => {
    const state = studentReducer(initialStudentState, loadStudents());

    expect(state.loading).toBeTrue();
    expect(state.error).toBeNull();
  });

  it('should store students and clear loading on success', () => {
    const students = [{ id: 1, studentName: 'John', email: 'john@test.com' } as any];
    const state = studentReducer(initialStudentState, loadStudentsSuccess({ students }));

    expect(state.students).toEqual(students);
    expect(state.loading).toBeFalse();
    expect(state.error).toBeNull();
  });

  it('should capture error on failure', () => {
    const state = studentReducer(initialStudentState, loadStudentsFailure({ error: 'Failed' }));

    expect(state.loading).toBeFalse();
    expect(state.error).toBe('Failed');
  });
});
