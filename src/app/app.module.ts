import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { DiscViewComponent } from './components/disc-view/disc-view.component';
import { DiskDetailsComponent } from './components/disc-view/disk-details/disk-details.component';
import { ArtistViewComponent } from './components/artist-view/artist-view.component';
import { ArtistReleaseDetailsComponent } from './components/artist-view/artist-release-details/artist-release-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderComponent,
    DiscViewComponent,
    DiskDetailsComponent,
    ArtistViewComponent,
    ArtistReleaseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,MainViewComponent,HeaderComponent,DiscViewComponent]
})
export class AppModule { }
