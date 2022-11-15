import { ErrorDialogComponent } from './../../shared/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';

import { Student } from './../../core/model';
import { StudentsService } from './../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students$: Observable<Student[]>;

  displayedColumns: string[] = ['id', 'name', 'age'];

  constructor(
    private studentsService: StudentsService,
    public dialog: MatDialog
  ) {
    this.students$ = this.studentsService.list().pipe(
      catchError(error => {
        this.onError('Error loading students.');
        return of([]);
      })
    );
  }

  ngOnInit(): void {
  }

  scroll() {
    window.scroll({
      top: 500,
      behavior: 'smooth'
    })
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
