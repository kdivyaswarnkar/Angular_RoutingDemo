import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProductsComponent } from './products/products.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { TrousersComponent } from './trousers/trousers.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesDetails2Component } from './courses-details2/courses-details2.component';

const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{
  path:'products',
  component:ProductsComponent,
  children:[
    {path:'tshirts',component:TshirtsComponent},
    {path:'trousers',component:TrousersComponent}
  ]
},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'courses',component:CoursesComponent},

{
  path:'coursesDetails',
  outlet:'courses-details',
  component:CoursesDetailsComponent
},
{
  path:'coursesDetails2',
  outlet:'courses-details2',
  component:CoursesDetails2Component
},

{path:'employees',component:EmployeesListComponent},
{path:'employees/:id',component:EmployeeDetailsComponent},
// {path:'employees/:id/:name',component:EmployeeDetailsComponent},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
