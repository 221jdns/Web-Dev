import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-component',
  imports: [CommonModule],
  template: `
    <h1>About Us</h1>
    <p>This is a simple Angular project demonstrating routing and HTTP module.</p>
  `,
  styleUrl: './about-component.component.css'
})
export class AboutComponentComponent {

}
