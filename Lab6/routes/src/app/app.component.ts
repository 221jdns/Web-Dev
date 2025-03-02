import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HomeComponentComponent, RouterModule],
  template:`
    <router-outlet></router-outlet>
  `,

  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routes';
}
