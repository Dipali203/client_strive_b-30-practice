import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/Constant';

@Injectable({
  providedIn: 'root'
})
export class Employee {

  constructor(private http : HttpClient) { }


  getAllEmployees(){
   return this.http.get(environment.API_URL+ Constant.API_METHODS.EMPLOYEE.GET_ALL);
  }
}
