import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

import { Cast } from 'src/app/interfaces/credits';

@Component({
  selector: 'app-credits-slide-show',
  templateUrl: './credits-slide-show.component.html',
  styleUrls: ['./credits-slide-show.component.css']
})

export class CreditsSlideShowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.cast);
    
  }
  
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

}
