import { Component } from '@angular/core';
import {ActivatedRoute,ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 
  constructor(public router:Router,public route:ActivatedRoute ) {

  }
  showTshirt()
  {
   this.router.navigate(['tshirts'],{relativeTo:this.route})
  }
  showTrousers()
  {
   this.router.navigate(['trousers'],{relativeTo:this.route})
  }
}
