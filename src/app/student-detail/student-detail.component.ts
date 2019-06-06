import {Component, Inject, Input, OnInit} from '@angular/core';
import {Student} from '../Model/student';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  @Input() row: Student;
  constructor(@Inject(MAT_DIALOG_DATA)public data: any) { }

  ngOnInit() {
  }

}
