import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LaunchFilterComponent } from './launch-filter/launch-filter.component';
import { SpacexLaunchesComponent } from './spacex-launches/spacex-launches.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, 
    SpacexLaunchesComponent
  ],
  templateUrl:`./app.component.html`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routes';
}
