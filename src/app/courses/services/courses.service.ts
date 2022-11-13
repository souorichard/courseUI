import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/core/model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor( private httpClient: HttpClient ) { }

  list() {
    return this.httpClient.get<Course[]>(this.API);
  }

}
