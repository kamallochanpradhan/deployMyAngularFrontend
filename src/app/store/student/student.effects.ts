import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RegisterService } from 'src/app/Services/register.service';
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

@Injectable()
export class StudentEffects {
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStudents),
      switchMap(() =>
        this.registerService.getStudent().pipe(
          map((students) => loadStudentsSuccess({ students })),
          catchError((error) =>
            of(loadStudentsFailure({ error: error.message || 'Failed to load students' }))
          )
        )
      )
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteStudent),
      switchMap(({ id }) =>
        this.registerService.deleteStudent(id).pipe(
          map(() => deleteStudentSuccess({ id })),
          catchError((error) =>
            of(deleteStudentFailure({ error: error.message || 'Failed to delete student' }))
          )
        )
      )
    )
  );

  updateStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateStudent),
      switchMap(({ student }) =>
        this.registerService.updateStudent(student).pipe(
          map(() => updateStudentSuccess({ student })),
          catchError((error) =>
            of(updateStudentFailure({ error: error.message || 'Failed to update student' }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private registerService: RegisterService
  ) {}
}
