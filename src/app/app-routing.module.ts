import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
