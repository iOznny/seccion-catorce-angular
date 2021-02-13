import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import { Swiper } from 'swiper';

import { Movie } from 'src/app/interfaces/catalogue';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  public swiper: Swiper;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true 
    });
  }

  ngOnInit(): void {
    console.log(this.movies);
  }

  // Control de anterior slide.
  onSlidePrev() {
    this.swiper.slidePrev();
  }

  // Control de siguiente slide.
  onSlideNext() {
    this.swiper.slideNext();
  }
}
