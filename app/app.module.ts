import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { PartnersComponent } from './partners/partners.component';
import { BlogComponent } from './blog/blog.component';
import { ResourcesComponent } from './resources/resources.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    FeaturesComponent,
    SuccessStoriesComponent,
    PartnersComponent,
    BlogComponent,
    ResourcesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
