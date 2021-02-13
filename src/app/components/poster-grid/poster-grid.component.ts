import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/catalogue';

@Component({
  selector: 'app-poster-grid',
  templateUrl: './poster-grid.component.html',
  styleUrls: ['./poster-grid.component.css']
})

export class PosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {
  }

}
