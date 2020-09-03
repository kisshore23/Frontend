import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';  
import { AddEmployeeComponent } from './add-employee/add-employee.component'; 


const routes: Routes = [
{ path: '', redirectTo: 'view-Employee', pathMatch: 'full' },  
  { path: 'view-Employee', component:  EmployeelistComponent},  
  { path: 'addemployee', component: AddEmployeeComponent },  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
