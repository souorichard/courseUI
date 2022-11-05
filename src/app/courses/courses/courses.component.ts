import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/model';

const courses: Course[] = [
  { id: 1, namecourse: 'Development of Systems', period: 'Full' },
  { id: 2, namecourse: 'Chemistry', period: 'Full' },
  { id: 3, namecourse: 'Marketing', period: 'Morning' },
  { id: 4, namecourse: 'Buildings', period: 'Night' },
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'period'];
  courses = courses;

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
