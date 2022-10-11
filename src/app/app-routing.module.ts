import { NgModule } from '@angular/core';




import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
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
import { RomanticComponent } from './romantic/romantic.component';
import { PilgrimageComponent } from './pilgrimage/pilgrimage.component';
import { HillsComponent } from './hills/hills.component';
import { SportComponent } from './sport/sport.component';
import { FoodComponent } from './food/food.component';
import { RelaxComponent } from './relax/relax.component';
import { PersonalComponent } from './personal/personal.component';
import { SharedComponent } from './shared/shared.component';


const routes: Routes = [
  {path : '' , redirectTo: 'home',pathMatch:'full' },
  {path : 'home' , component : HomeComponent},
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'gallery' , component : GalleryComponent},
  {path : 'vedios' , component : VediosComponent},
  {path : 'blog' , component : BlogComponent},
  {path : 'contactus' , component : ContactusComponent},
  {path : 'carrental' , component : CarrentalComponent},
  {path : 'punetomumbai' , component : PunetomumbaiComponent},
  {path : 'punetomaha' , component : PunetomahaComponent},
  {path : 'goa' , component : GoaComponent},
  {path : 'asthvinayak' , component : AsthvinayakComponent},
  {path : 'beach' , component : BeachComponent},
  {path :'treak' , component :TreakComponent},
  {path : 'valley' , component : ValleyComponent},
  {path :'historical' , component :HistoricalComponent},
  {path : 'honeymoon' , component : HoneymoonComponent},
  {path :'weekend' , component :WeekendComponent},
  {path : 'romantic' , component : RomanticComponent},
  {path :'pilgrimage' , component :PilgrimageComponent},
  {path : 'hills' , component : HillsComponent},
  {path :'spot' , component :SportComponent},
  {path : 'food' , component : FoodComponent},
  {path :'relax' , component :RelaxComponent},
  {path : 'personal' , component : PersonalComponent},
  {path :'shared' , component :SharedComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
