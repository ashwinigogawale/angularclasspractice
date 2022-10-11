import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { PartnersComponent } from './partners/partners.component';
import { BlogComponent } from './blog/blog.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent,
    children:[{
      path:'',
      component:ServicesComponent
    }]
    },
    {
      path:'',
      component:HeaderComponent,
      children:[{
        path:'features',
        component:FeaturesComponent
      }]
      },
      {
        path:'',
        component:HeaderComponent,
        children:[{
          path:'successstories',
          component:SuccessStoriesComponent
        }]
        },
        {
          path:'',
          component:HeaderComponent,
          children:[{
            path:'partners',
            component:PartnersComponent
          }]
          },
          {
            path:'',
            component:HeaderComponent,
            children:[{
              path:'blog',
              component:BlogComponent
            }]
            },
            {
              path:'',
              component:HeaderComponent,
              children:[{
                path:'resources',
                component:ResourcesComponent 
              }]
              },
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
