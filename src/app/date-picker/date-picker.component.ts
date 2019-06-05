import { Component, OnInit, ViewChild } from '@angular/core';
import {StudentService} from '../Service/student.service';
import {Student} from '../Model/student';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  student = new StudentDataSource(this.studentService);
  displayedColumns = ['ID', 'Name', 'Birth'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private studentService: StudentService) { }
  ngOnInit() {}
}

export class StudentDataSource extends DataSource<any>{
  constructor(private studentService: StudentService){
    super();
  }

  connect(): Observable<Student[]> {
    return this.studentService.getStudent();
  }

  disconnect(): void {
  }
}
