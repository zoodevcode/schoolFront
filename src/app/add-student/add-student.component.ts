import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../service/student-service.service';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor( private router: Router, private studentService: StudentServiceService) { }

  student: Student = new Student();

  ngOnInit(): void {
  }

  saveStudent(){
    this.studentService.addStudent(this.student).subscribe(data =>{
      this.gotoStudent();
      // console.log(data);
    },
    error => console.log(error));
  }

  gotoStudent(){
    this.router.navigate(["/students"]);
  }
  onSubmit(){
    this.saveStudent();
    // console.log(this.student);
  }
 
}
