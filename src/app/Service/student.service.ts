import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../Model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  private  url = 'http://localhost:8080/api/student';

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }
}
