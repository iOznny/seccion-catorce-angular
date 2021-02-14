import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RatingModule } from 'ng-starrating';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PosterGridComponent } from './poster-grid/poster-grid.component';

import { PipesModule } from '../pipes/pipes.module';
import { CreditsSlideShowComponent } from './credits-slide-show/credits-slide-show.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PosterGridComponent,
    CreditsSlideShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PosterGridComponent,
    CreditsSlideShowComponent
  ]
})

export class ComponentsModule { }
