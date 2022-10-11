import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Flex1Component } from './flex1/flex1.component';
import { Flex2Component } from './flex2/flex2.component';
import { Flex3Component } from './flex3/flex3.component';
import { AppComponent } from './app.component';
import { Flex4Component } from './flex4/flex4.component';
import { Flex5Component } from './flex5/flex5.component';
import { Flex6Component } from './flex6/flex6.component';


const routes: Routes = [
  {path:'app',component:AppComponent},
  {path:'flex1',component:Flex1Component},
  {path:'flex2',component:Flex2Component},
  {path:'flex3',component:Flex3Component},
  {path:'flex4',component:Flex4Component},
  {path:'flex5',component:Flex5Component},
  {path:'flex6',component:Flex6Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
