import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  
  private baseUrl = 'http://localhost:9091/audit/all'; 

  getEmployeeList(): Observable<any> {  
    //return this.http.get(`${this.baseUrl}`+'all'); 
    return this.http.get(this.baseUrl);  
  }  

}

