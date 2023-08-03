import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
