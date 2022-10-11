import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact/contact.component';
import { AboutUsComponent } from './about/about.component';
import { PageNotFoundComponent } from './page/page.component';
import { DepartmentComponent } from './department/depatment.component';
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component';
import { PipeComponent } from './pipe/pipe.component';


@NgModule({
  declarations: [
  AppComponent,ContactUsComponent,AboutUsComponent,PageNotFoundComponent,DepartmentComponent, DepartmentdetailsComponent,PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
