import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
const routes: Routes = [
  {path: "students", component: ListStudentComponent},
  {path: "addStudent", component: AddStudentComponent},
  {path: "updateStudent/:idStudent", component: UpdateStudentComponent},
  {path:"", redirectTo:"/home", pathMatch:'full'},
  {path:"home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
