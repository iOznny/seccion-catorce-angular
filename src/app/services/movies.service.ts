import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Catalogue } from '../interfaces/catalogue';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { 
  }

  getCatalogue(): Observable<Catalogue> {
    return this.http.get<Catalogue>('https://api.themoviedb.org/3/movie/now_playing?api_key=ebb4ea52538b19f02cd4883e4d3c638b&language=es-ES&page=1');
  }

}
