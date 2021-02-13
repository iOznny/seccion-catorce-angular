import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MoviesComponent },
  { path: 'search/:name', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
