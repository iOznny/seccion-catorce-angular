import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  searchMovie(text: string) {
    // Quitamos espacios.
    text = text.trim();

    // Verificamos que no venga vacio.
    if(text.length === 0) { 
      return;
    }

    // Enviamos al search.
    this.router.navigate(['/search', text]);    
  }

}
