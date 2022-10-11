import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Flex1Component } from './flex1/flex1.component';
import { Flex2Component } from './flex2/flex2.component';
import { Flex3Component } from './flex3/flex3.component';
import { Flex4Component } from './flex4/flex4.component';
import { Flex5Component } from './flex5/flex5.component';
import { Flex6Component } from './flex6/flex6.component';
@NgModule({
  declarations: [
    AppComponent,Flex1Component,Flex2Component,Flex3Component,Flex4Component,Flex5Component,Flex6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
