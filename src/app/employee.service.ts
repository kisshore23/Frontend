import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/';  
  
  constructor(private http:HttpClient) { }  
  
  getEmployeeList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'employee-list');  
  }  
  
  createEmployee(employee: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'save-employee', employee);  
  }  
  
  deleteEmployee(empid: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/delete-employee/${empid}`, { responseType: 'text' });  
  }  
  
  getEmployee(empid: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/employee/${empid}`);  
  }  
  
  updateEmployee(empid: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/update-employee/${empid}`, value);  
  }  
    
}  