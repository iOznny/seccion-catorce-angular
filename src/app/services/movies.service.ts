import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from "rxjs/operators";

import { Catalogue, Movie } from '../interfaces/catalogue';
import { Cast, Credits } from '../interfaces/credits';
import { MovieDetail } from '../interfaces/movie-detail';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private url: string = 'https://api.themoviedb.org/3';
  private page_movies = 1;
  public loadingAPI: boolean = false;

  constructor(private http: HttpClient) { 
  }

  get params() {
    return {
      api_key: 'ebb4ea52538b19f02cd4883e4d3c638b',
      language: 'es-ES',
      page: this.page_movies.toString()
    }
  }

  resetCatalogue() {
    this.page_movies = 1;
  }

  getCatalogue(): Observable<Movie[]> {
    if(this.loadingAPI) {
      return of([]);
    }

    this.loadingAPI = true;

    return this.http.get<Catalogue>(`${ this.url }/movie/now_playing`, {
      params: this.params
    }).pipe(
      map( (resp) => resp.results),
      tap( () => {
        this.page_movies += 1;
        this.loadingAPI = false;
      })
    )
  }

  searchMovie(text: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: text };

    return this.http.get<Catalogue>(`${ this.url }/search/movie`, {
      params
    }).pipe(
      map( resp => resp.results )
    )
  }

  getDetail(id: string) {
    return this.http.get<MovieDetail>(`${ this.url }/movie/${ id }`, {
      params: this.params
    }).pipe(
      catchError( err => of(null) )
    );
  }

  getCredits(id: string): Observable<Cast[]> {
    return this.http.get<Credits>(`${ this.url }/movie/${ id }/credits`, {
      params: this.params
    }).pipe(
      map( resp => resp.cast ),
      catchError( err => of([]) )
    );
  }

}
