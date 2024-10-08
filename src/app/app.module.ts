import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FbnPodcastComponent } from './pages/fbn-podcast/fbn-podcast.component';
import { EconomicComponent } from './pages/economic/economic.component';
import { FeaturedCardComponent } from './pages/featured-card/featured-card.component';
import { FirstMonieCardComponent } from './pages/first-monie-card/first-monie-card.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    FbnPodcastComponent,
    EconomicComponent,
    FeaturedCardComponent,
    FirstMonieCardComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
