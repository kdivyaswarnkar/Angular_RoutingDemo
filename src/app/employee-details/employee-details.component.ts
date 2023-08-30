import { Component } from '@angular/core';
import {ActivatedRoute,ParamMap,Router} from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  public EmpId:any;
  public EmpName:any;
constructor(private route:ActivatedRoute,private router:Router) {
}
ngOnInit() :void
{
 let id=this.route.snapshot.paramMap.get('id');
//  let name=this.route.snapshot.paramMap.get('name');
 this.EmpId=id;
 this.route.paramMap.subscribe((params:ParamMap)=>{
  let id=params.get('id');
  this.EmpId=id;
 });
//  this.EmpName=name;
}
PreviousEmp()
{
  let previousId=parseInt(this.EmpId)-1;
  this.router.navigate(['/employees',previousId]);
}
NextEmp()
{
  let nextId=parseInt(this.EmpId)+1;
  this.router.navigate(['/employees',nextId]);
}
gotoEmployees()
{
  let selectedId=this.EmpId;
  this.router.navigate(['/employees',{id:selectedId}])
}
}
