import { Component } from '@angular/core';

import { Catalogue } from './interfaces/catalogue';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private moviesSV: MoviesService) {
    this.moviesSV.getCatalogue().subscribe( resp => {
      console.log(resp);
    });
  }


}
