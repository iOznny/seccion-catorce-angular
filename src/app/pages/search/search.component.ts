import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/catalogue';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public text: string = '';
  public movies: Movie[] = [];

  constructor(private movieSv: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.text = params.name;
      // Obtenemos la pelicula.
      this.movieSv.searchMovie(params.name).subscribe( movies => {
        this.movies = movies;
      })
    })
  }

}
