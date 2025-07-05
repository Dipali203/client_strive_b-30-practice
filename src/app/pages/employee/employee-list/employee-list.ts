import { Component, OnInit, inject } from '@angular/core';
import { Employee } from '../../../core/services/employee';
import { IEmployeeList } from '../../../core/models/interface/employee.model';


@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {

  employeeService = inject(Employee);
  employeeList: IEmployeeList[] =  [];

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next:(result:any)=>{
        this.employeeList =  result.data;
      },
      error:()=>{
        
      }
    })
  }

}
