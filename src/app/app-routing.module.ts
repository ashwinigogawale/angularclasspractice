import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about/about.component';
  import {ContactUsComponent} from './contact/contact.component';
import { PageNotFoundComponent } from './page/page.component';
import { DepartmentComponent } from './department/depatment.component';
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component';


const routes: Routes = [
  {path:'about us',component:AboutUsComponent},
  {path:'contact us',component:ContactUsComponent},
  {path:'department',component:DepartmentComponent},
  {path:'departments/:id',component:DepartmentdetailsComponent},
    {path:'page not found',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
