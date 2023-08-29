import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  public EmpId:any;

constructor(private route:ActivatedRoute) {
}
ngOnInit() :void
{
 let id=this.route.snapshot.paramMap.get('id');
 this.EmpId=id;
}
}
