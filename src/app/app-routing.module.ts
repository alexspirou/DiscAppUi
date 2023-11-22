import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';
import { DiscViewComponent } from './components/disc-view/disc-view.component';
import { ArtistViewComponent } from './components/artist-view/artist-view.component';

const routes: Routes =
[
  {  path: '', component: MainViewComponent},
  {  path: 'Collection/:msg', component: DiscViewComponent},
  {  path: 'Wantlist/:msg', component: DiscViewComponent},
  {  path: 'Artist/:name', component: ArtistViewComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
