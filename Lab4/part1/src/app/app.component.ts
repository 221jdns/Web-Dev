import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  template: `
  <main>
    <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
      </a>
      <section class="content">

      <router-outlet></router-outlet>
    
      </section>
    </main>
  `,
  imports: [HomeComponent,RouterModule],
})
export class AppComponent {
  title = 'part1';
}
