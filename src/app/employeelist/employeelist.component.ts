import { Component, OnInit } from '@angular/core';  
import { EmployeeService } from '../employee.service';  
import { Employee } from '../employee';  
import { Observable,Subject } from "rxjs";
import {FormControl,FormGroup,Validators} from '@angular/forms'; 
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  constructor(private employeeservice:EmployeeService) { }  
  
  employeeArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  employees: Observable<Employee[]>;  
  employee : Employee=new Employee();  
  deleteMessage=false;  
  employeelist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.employeeservice.getEmployeeList().subscribe(data =>{  
    this.employees =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deleteEmployee (empid: number) {  
    this.employeeservice.deleteEmployee(empid)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.employeeservice.getEmployeeList().subscribe(data =>{  
            this.employees =data  
            })  
        },  
        error => console.log(error));  
  }  
  
  updateEmployee  (empid: number){  
    this.employeeservice.getEmployee(empid)  
      .subscribe(  
        data => {  
          this.employeelist=data             
        },  
        error => console.log(error));  
  }  
  
  employeeupdateform=new FormGroup({  
    Empid:new FormControl(),  
    name:new FormControl(),  
    email:new FormControl(),  
    phone:new FormControl(),
    designation:new FormControl(),
    salary:new FormControl()  
  });  
  
  updateEmp(updemp){  
    
    this.employee=new Employee();     
    this.employee.name=this.Name.value;  
    this.employee.email=this.Email.value;  
    this.employee.phone=this.Phone.value; 
    this.employee.designation=this.Designation.value;
    this.employee.salary=this.Salary.value; 
   console.log(this.Designation.value);  
     
  
   this.employeeservice.updateEmployee(this.employee.empid,this.employee).subscribe(  
    data => {       
      this.isupdated=true;  
      this.employeeservice.getEmployeeList().subscribe(data =>{  
        this.employees =data  
        })  
    },  
    error => console.log(error));  
  }  
  
  get Name(){  
    return this.employeeupdateform.get('name');  
  }  
  
  get Email(){  
    return this.employeeupdateform.get('email');  
  }  
  
  get Phone(){  
    return this.employeeupdateform.get('phone');  
  }  
  get Designation(){  
    return this.employeeupdateform.get(' designation');  
  }  
  get Salary(){  
    return this.employeeupdateform.get(' salary');  
  }  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  