import { Component, Input} from '@angular/core';
import { CategoryDescription } from '../category-description';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
  <div class = "category">
    <a class="categoryLink" [routerLink]="['/category', categoryDescription.id]">
      <img class="categoryImage icon-large" [src]="categoryDescription.image" alt="{{categoryDescription.name}}">
      <h2 class="categoryName">{{categoryDescription.name}}</h2>
    </a>
  </div>
  `,
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() categoryDescription!: CategoryDescription;
}
