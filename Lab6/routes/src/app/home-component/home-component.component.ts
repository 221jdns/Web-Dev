import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsComponentComponent } from '../albums-component/albums-component.component';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule,RouterModule],
  template: `
    <h1>Home Page</h1>
    <p>Welcome to the album collection app!</p> 
    <a routerLink = "/albums">albums </a>
  `,
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
