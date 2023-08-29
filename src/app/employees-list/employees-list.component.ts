import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
MyEmployees=[
  {"id":1,"name":"divya"},
  {"id":2,"name":"navya"},
  {"id":3,"name":"sunay"},
  {"id":4,"name":"chittu"},
  {"id":5,"name":"prem"}
]

constructor(private router:Router) {

}
EmpClick(employee:any)
{
   this.router.navigate(['/employees',employee.id]);
}
ngOnInit():void
{

}
}