import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SocialMediaServicesComponent } from './components/social-media-services/social-media-services.component';
import { ProgramServicesComponent } from './components/program-services/program-services.component';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactTopComponent } from './components/contact-top/contact-top.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactBottomComponent } from './components/contact-bottom/contact-bottom.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MyComponent } from './components/slider/slider.component';
import { BtnComponent } from './components/btn/btn.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { BtnToTopComponent } from './components/btn-to-top/btn-to-top.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SocialMediaServicesComponent,
    ProgramServicesComponent,
    AllServicesComponent,
    ContactUsComponent,
    ContactTopComponent,
    NavbarComponent,
    ContactBottomComponent,
    FooterComponent,
    PageNotFoundComponent,
    PortfolioComponent,
    MyComponent,
    BtnComponent,
    BtnToTopComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
