import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../model/student.model';
import { StudentServiceService } from '../service/student-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  private currentStudent: Student | undefined;
  private idStudent: any;
  private student: Student | undefined;
  private data:String  | undefined;
  constructor(private studentService: StudentServiceService,
    private router: Router,    private route: ActivatedRoute) { }

    // register(registerForm:NgForm){
    //   this.studentService.regi
    // }
    
  // StudentToUpdate = {
  //     idStudent: "",
  //     nom: "",
  //     prenom: "",
  //     niveau: "",
  //     email: ""
  // };
  ngOnInit(): void {
    this.student = new Student(); 
    this.idStudent = this.route.snapshot.params['idStudent'];
    this.studentService.getRessource(this.idStudent)
      .subscribe(data => {
        // console.log(data);
        this.currentStudent = data;
      }, err =>{
        console.log(err);
      })
  }


  onUpdateStudent(value:any) {
    this.studentService.updateRessource(this.idStudent, value)
      .subscribe(data => {
        alert("Mise a jour effectuee avec success");
        this.router.navigateByUrl("/students");
      }, err => console.log(err));
  }

  
  }