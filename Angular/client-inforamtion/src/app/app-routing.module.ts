import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { IntroComponent } from './intro/intro.component';
import { GalaryComponent } from './galary/galary.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,

  children: [
    {
      path: 'intro', // child route path
      component: IntroComponent, // child route component that the router renders
    },
    {
      path: 'galary', // child route path
      component: GalaryComponent, // child route component that the router renders
    }  
  ]
  },
  { path: 'about-us', component: AboutUsComponent  },
  { path: 'contact-us', component: ContactUsComponent  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
