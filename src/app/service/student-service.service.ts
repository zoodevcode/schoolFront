import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';



@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private baseUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) { }

  getAllStudents():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  addStudent(student:Student):Observable<Object>{
    return this.http.post(`${this.baseUrl}`, student);
  }
}
