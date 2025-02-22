import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [SearchComponent, RouterOutlet],
  standalone: true,
  template: `
    <main>
      <header class="brand-name">
      <img class="brand-logo icon-large" src="/assets/kaspi-logo.svg" alt="Kaspi">
      </header>

      <app-search> </app-search>
      
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kaspi';
}
