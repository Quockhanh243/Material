import { Component, OnInit, ViewChild } from '@angular/core';
import {StudentService} from '../Service/student.service';
import {Student} from '../Model/student';
import {Subscription} from 'rxjs';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {StudentDetailComponent} from '../student-detail/student-detail.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  subscription: Subscription;
  student;
  displayedColumns = ['ID', 'Name', 'Birth'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private studentService: StudentService, private dialog: MatDialog) { }
  ngOnInit() {
    this.subscription = this.studentService.getStudent().subscribe((data: Student[]) => {
      this.student = new MatTableDataSource<Student>(data);
      this.student.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.student.filer = filterValue;
  }

  logData(row) {
    this.dialog.open(StudentDetailComponent, {data: {row}});
  }
}
