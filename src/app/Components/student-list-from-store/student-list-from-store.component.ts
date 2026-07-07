import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Student } from 'src/app/Model/Student';
import { AppState } from 'src/app/store/student/student.reducer';
import { selectAllStudents, selectStudentsError, selectStudentsLoading } from 'src/app/store/student/student.selectors';

@Component({
  selector: 'app-student-list-from-store',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card mt-3">
      <div class="card-header bg-info text-white">Students from NgRx Store</div>
      <div class="card-body">
        <div *ngIf="loading$ | async" class="alert alert-info">Loading students from store...</div>
        <div *ngIf="error$ | async as error" class="alert alert-danger">{{ error }}</div>

        <table class="table table-bordered" *ngIf="(students$ | async)?.length; else noStudents">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let student of students$ | async; trackBy: trackByStudentId">
              <td>{{ student.id }}</td>
              <td>{{ student.studentName }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.gender }}</td>
            </tr>
          </tbody>
        </table>

        <ng-template #noStudents>
          <p class="text-muted">No students in store yet.</p>
        </ng-template>
      </div>
    </div>
  `,
})
export class StudentListFromStoreComponent implements OnInit, OnDestroy {
  students$ = this.store.select(selectAllStudents);
  loading$ = this.store.select(selectStudentsLoading);
  error$ = this.store.select(selectStudentsError);

  private destroy$ = new Subject<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.students$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackByStudentId(index: number, student: Student): number {
    return student.id ?? index;
  }
}
