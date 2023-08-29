import { Component } from '@angular/core';
import {ActivatedRoute,ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  selectedId:any;
MyEmployees=[
  {"id":1,"name":"divya"},
  {"id":2,"name":"navya"},
  {"id":3,"name":"sunay"},
  {"id":4,"name":"chittu"},
  {"id":5,"name":"prem"}
]

constructor(private router:Router,private route:ActivatedRoute) {

}
EmpClick(employee:any)
{
   this.router.navigate(['/employees',employee.id,employee.name]);
}
ngOnInit():void
{
  let id=this.route.snapshot.paramMap.get('id');
  let name=this.route.snapshot.paramMap.get('name');
  this.selectedId=id;
}
isSelected(employee:any)
{
return parseInt(employee.id)===parseInt(this.selectedId);
}
}