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

  public students:any;

  constructor(private router: Router, private studentService: StudentServiceService) { }

  private getStudent(){
    this.studentService.getAllStudents()
    .subscribe(data => {
      console.log(data);
      this.students = data;
    },err=>{
      console.log(err);
    });

  }

  ngOnInit(): void {
    this.getStudent();
  }

updateStudent(student: Student){
  this.router.navigateByUrl("/updateStudent/"+student);
}

onDeleteStudent(id:number){
  let conf = confirm("Etes vous sure?");
  if(conf){
    this.studentService.deleteRessource(id).subscribe( data =>{
      this.getStudent();
    });
  }
}

}
