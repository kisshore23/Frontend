import { Component, OnInit } from '@angular/core';  
import { EmployeeService } from '../employee.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Employee } from '../employee';  
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  constructor(private employeeservice:EmployeeService) { }  
  
  employee : Employee=new Employee();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  employeesaveform=new FormGroup({  
    name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    email:new FormControl('',[Validators.required,Validators.email]),  
    branch:new FormControl()  
  });  
  
  saveEmployee(saveEmployee){  
    this.employee=new Employee();     
    this.employee.name=this.Name.value;  
    this.employee.email=this.Email.value;  
    this.employee.phone=this.Phone.value; 
    this.employee.designation=this.Designation.value;
    this.employee.salary=this.Salary.value;
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.employeeservice.createEmployee(this.employee)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.employee = new Employee();  
  }  
  
  get Name(){  
    return this.employeesaveform.get('name');  
  }  
  
  get Email(){  
    return this.employeesaveform.get('email');  
  }  
  
  get Phone(){  
    return this.employeesaveform.get('phone');  
  }  
  get Designation(){  
    return this.employeesaveform.get(' designation');  
  }  
  get Salary(){  
    return this.employeesaveform.get(' salary');  
  }  
  
  addEmployeeForm(){  
    this.submitted=false;  
    this.employeesaveform.reset();  
  }  
}  