import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchComponent],
  template: `
    <main>
      <header class = "brand-name">
        <img class = "brand-logo" src =" /assets/kaspi-logo.svg">
      </header>
      <section class = "search">
        <app-search> </app-search>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'part2';
}
