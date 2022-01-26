import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';



@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private baseUrl = 'http://localhost:8080/api/students';
  private idStudent: any;
  private student: Student | undefined;


  constructor(private http: HttpClient) { }

  public getRessource(idStudent:any):Observable<any>{
    return this.http.get(idStudent);
  }

  getAllStudents():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  addStudent(student:Student):Observable<Object>{
    return this.http.post(`${this.baseUrl}`, student);
  }

  public updateRessource(id: any,data: any){
    return this.http.put(id,data);
  }

  public deleteRessource(idStudent:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${idStudent}`);
  }
}
