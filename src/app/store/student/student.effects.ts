import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RegisterService } from 'src/app/Services/register.service';
import { loadStudents, loadStudentsFailure, loadStudentsSuccess } from './student.actions';

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

  constructor(
    private actions$: Actions,
    private registerService: RegisterService
  ) {}
}
