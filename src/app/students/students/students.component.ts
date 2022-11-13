import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Student } from './../../core/model';
import { StudentsService } from './../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Observable<Student[]>;

  displayedColumns: string[] = ['id', 'name', 'age'];

  constructor( private studentsService: StudentsService ) {
    this.students = this.studentsService.list();
  }

  ngOnInit(): void {
  }

  scroll() {
    window.scroll({
      top: 500,
      behavior: 'smooth'
    })
  }

}
