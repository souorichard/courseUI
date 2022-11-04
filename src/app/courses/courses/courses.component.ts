import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/model';

const courses: Course[] = [
  { id: 1, namecourse: 'Development of Systems' },
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  courses = courses;

  constructor() { }

  ngOnInit(): void {
  }

}
