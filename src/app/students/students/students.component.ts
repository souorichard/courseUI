import { Component, OnInit } from '@angular/core';

import { Student } from './../../core/model';

const students: Student[] = [
  { id: 1, namestudent: 'Richard', age: 16 },
  { id: 2, namestudent: 'Yuri', age: 17 },
  { id: 3, namestudent: 'Carol', age: 17 },
  { id: 4, namestudent: 'João', age: 17 },
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'age'];
  students = students;

  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    window.scroll({
      top: 500,
      behavior: 'smooth'
    })
  }

}
