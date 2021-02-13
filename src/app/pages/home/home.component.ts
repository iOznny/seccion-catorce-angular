import { Component, HostListener, OnInit } from '@angular/core';

import { Movie } from 'src/app/interfaces/catalogue';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  // Decorador de una Funcion para escuchar el window.
  @HostListener('window:scroll', ['$event'])
  
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
   
    if(pos > max) {
      // Con esto limitamos las peticiones.
      if(this.moviesSV.loadingAPI) { 
        return;
      }

      // Llamar el servicio http para cargar mas peliculas.
      this.moviesSV.getCatalogue().subscribe( movies => {
        this.movies.push(...movies);
      });
    }
  }

  constructor(private moviesSV: MoviesService) { 
  }

  ngOnInit(): void {
    this.moviesSV.getCatalogue().subscribe( movies => {
      this.movies = movies;
      this.moviesSlideShow = movies;
    });
  }
}
