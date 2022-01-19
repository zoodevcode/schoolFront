import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/student.model';
import { StudentServiceService } from '../service/student-service.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students: Student[] | undefined;

  constructor(private router: Router, private studentService: StudentServiceService) { }

  getStudent(){
    this.studentService.getAllStudents()
    .subscribe(data => {
      this.students = data;
    });

  }

  // addStudent(): void {
  //   this.router.navigate(['addStudent'])
  //     .then((e) => {
  //       if (e) {
  //         console.log("Navigation is successful!");
  //       } else {
  //         console.log("Navigation has failed!");
  //       }
  //     });
  // };


  ngOnInit(): void {
    // this.router.events.subscribe(value => {
    this.getStudent();
  // });
  }

}
