import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Student } from './../../core/model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private readonly API = '/assets/students.json';

  constructor( private httpClient: HttpClient ) { }

  list() {
    return this.httpClient.get<Student[]>(this.API).pipe(
      first(),
      delay(2000),
      tap(students => console.log(students))
    )
  }

}
