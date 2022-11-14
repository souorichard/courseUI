import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/core/model';

import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  displayedColumns: string[] = ['id', 'name', 'period'];

  constructor( private coursesService: CoursesService ) {
    this.courses$ = this.coursesService.list();
  }

  ngOnInit(): void {}

  scroll() {
    window.scroll({
      top: 500,
      behavior: 'smooth',
    });
  }
}
