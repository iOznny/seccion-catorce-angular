import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits';

import { MovieDetail } from 'src/app/interfaces/movie-detail';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  public movieDetail: MovieDetail;
  public cast: Cast[] = [];

  constructor(private movieSv: MoviesService, private route: ActivatedRoute, private location: Location, private router: Router) { 
  }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;

    // Recibe observables y regresa un objeto que es un arreglo con todas las respuestas de los observables cuando ya han devuelto una respuesta.
    combineLatest([
      this.movieSv.getDetail(id),
      this.movieSv.getCredits(id)
    ]).subscribe( ([movie, credits]) => {
      if(!movie) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.movieDetail = movie;
      this.cast = credits.filter( actor => actor.profile_path != null)
    });
  }

  returnView() {
    this.location.back();
  }

}
