import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './components/header-component/header-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { HomeScreenPage } from './pages/home-screen-page/home-screen-page';
import { AboutScreenPage } from './pages/about-screen-page/about-screen-page';
import { StatsScreenPage } from './pages/stats-screen-page/stats-screen-page';
import { ServicesScreenPage } from './pages/services-screen-page/services-screen-page';
import { RoomsScreenPage } from './pages/rooms-screen-page/rooms-screen-page';
import { ReviewScreenPage } from './pages/review-screen-page/review-screen-page';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    FooterComponent,
    HomeScreenPage,
    AboutScreenPage,
    StatsScreenPage,
    ServicesScreenPage,
    RoomsScreenPage,
    ReviewScreenPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
