import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ProductDescription } from '../product-description';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [ProductsComponent, CommonModule, FormsModule],
  template:`
  <section>
    <form>
      <input type="text" name="search" [(ngModel)]="search" (input)="filterProducts()" placeholder="Filter products">
      <button class="primary" type="button" (click)="filterProducts()">Search</button>
    </form>
  </section>
  <section class="results">
    <app-products *ngFor="let productDescription of filteredProducts" [productDescription]="productDescription"></app-products>
  </section>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search: string = '';

  productDescriptionList: ProductDescription[] = [
    {
      id: 1,
      name: "Adapter",
      image: "/assets/adapter.jpg",
      description: "A high-quality power adapter for various devices.",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000"
  },
  {
      id: 2,
      name: "AirPods",
      image: "/assets/airpods.jpg",
      description: "Wireless earbuds with high-fidelity audio and noise cancellation.",
      rating: 4.8,
      link:"https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000"
  },
  {
      id: 3,
      name: "Alica",
      image: "/assets/alica.jpg",
      description: "A stylish accessory with a unique design.",
      rating: 4.2,
      link:"https://kaspi.kz/shop/p/jandeks-stantsija-mini-s-chasami-yndx-00020-chernyi-102580021/?c=750000000"
  },
  {
      id: 4,
      name: "Bag",
      image: "/assets/bag.jpg",
      description: "A spacious and durable bag for everyday use.",
      rating: 4.6,
      link:"https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000"
  },
  {
      id: 5,
      name: "Boots",
      image: "/assets/boots.jpg",
      description: "Comfortable and stylish boots for all seasons.",
      rating: 4.7,
      link:"https://kaspi.kz/shop/p/s999-chernyi-41-109580901/?c=750000000"
  },
  {
      id: 6,
      name: "Cover",
      image: "/assets/cover.jpg",
      description: "A protective cover for your smartphone.",
      rating: 4.4,
      link: "https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000"
  },
  {
      id: 7,
      name: "iPhone",
      image: "/assets/iphone.jpg",
      description: "The latest iPhone model with cutting-edge technology.",
      rating: 4.9,
      link:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000"
  },
  {
      id: 8,
      name: "Keyboard",
      image: "/assets/keyboard.jpg",
      description: "A mechanical keyboard for an enhanced typing experience.",
      rating: 4.6,
      link:"https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000"
  },
  {
      id: 9,
      name: "Mouse",
      image: "/assets/mouse.jpg",
      description: "An ergonomic and high-precision mouse for productivity and gaming.",
      rating: 4.5,
      link:"https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000"
  },
  {
      id: 10,
      name: "Pump",
      image: "/assets/pump.jpg",
      description: "A reliable pump for various applications.",
      rating: 4.3,
      link:"https://kaspi.kz/shop/p/riderace-rr7070-101450289/?c=750000000"
  }
  ]


  filteredProducts: ProductDescription[] = [...this.productDescriptionList];

  filterProducts() {
    this.filteredProducts = this.productDescriptionList.filter(product =>
      product.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}