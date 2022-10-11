import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VediosComponent } from './vedios/vedios.component';
import { BlogComponent } from './blog/blog.component';
import { CarrentalComponent } from './carrental/carrental.component';
import { PunetomumbaiComponent } from './punetomumbai/punetomumbai.component';
import { PunetomahaComponent } from './punetomaha/punetomaha.component';
import { GoaComponent } from './goa/goa.component';
import { AsthvinayakComponent } from './asthvinayak/asthvinayak.component';
import { BeachComponent } from './beach/beach.component';
import { TreakComponent } from './treak/treak.component';
import { ValleyComponent } from './valley/valley.component';
import { HistoricalComponent } from './historical/historical.component';
import { HoneymoonComponent } from './honeymoon/honeymoon.component';
import { WeekendComponent } from './weekend/weekend.component';
import { HillsComponent } from './hills/hills.component';
import { RomanticComponent } from './romantic/romantic.component';
import { RelaxComponent } from './relax/relax.component';
import { FoodComponent } from './food/food.component';
import { SportComponent } from './sport/sport.component';
import { PilgrimageComponent } from './pilgrimage/pilgrimage.component';
import { SharedComponent } from './shared/shared.component';
import { PersonalComponent } from './personal/personal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { HttpClientModule } from '@angular/common/http';
import { ConstantsService } from './constants.service';

import { CommonModule } from 'task/node_modules/@angular/common/common';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    GalleryComponent,
    VediosComponent,
    BlogComponent,
    CarrentalComponent,
    PunetomumbaiComponent,
    PunetomahaComponent,
    GoaComponent,
    AsthvinayakComponent,
    BeachComponent,
    TreakComponent,
    ValleyComponent,
    HistoricalComponent,
    HoneymoonComponent,
    WeekendComponent,
    HillsComponent,
    RomanticComponent,
    RelaxComponent,
    FoodComponent,
    SportComponent,
    PilgrimageComponent,
    SharedComponent,
    PersonalComponent,
    EnquiryComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
