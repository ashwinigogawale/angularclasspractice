import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObsproComponent } from './components/obspro/obspro.component';
import { Obspro1Component } from './components/obspro1/obspro1.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
  { path: '', redirectTo: 'temp', pathMatch: 'full' },
  { path: 'temp', component: TemplateComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'obpr', component: ObsproComponent },
  { path: 'obpr1', component: Obspro1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
