import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttractionsComponent } from './attractions/attractions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BioluminescenetParkHomeComponent } from './bioluminescenet-park-home/bioluminescenet-park-home.component';

const routes: Routes = [
  { path: 'home', component: BioluminescenetParkHomeComponent},
  { path: 'contact-us', component: ContactUsComponent  },
  { path: 'attractions', component: AttractionsComponent},  
  { path: '', component: BioluminescenetParkHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
