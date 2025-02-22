import { Component } from '@angular/core';
import { ProductDescription } from '../product-description';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from '../category/category.component';
import { CategoryDescription } from '../category-description';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, CategoryComponent],
  template:`
  <section class="results">
    <app-category *ngFor = "let categoryDescription of categoryProducts" [categoryDescription] = "categoryDescription"> </app-category>
  </section>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search: string = '';
  categoryProducts: CategoryDescription[] = [
    {
      id:1,
      name:"Phones and gadgets",
      routerLink:"",
      image:"assets/phone_category.jpg",
    },
    {
      id:2,
      name:"Computers",
      routerLink:"",
      image:"assets/laptop_category.jpg",
    },
    {
      id:3,
      name:"Clothes",
      routerLink:"",
      image:"assets/clother_category.jpg",
    },
    {
      id:4,
      name:"Home Products",
      routerLink:"",
      image:"assets/home_category.jpg",
    }
  ];


}
