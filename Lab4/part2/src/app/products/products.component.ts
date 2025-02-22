import { Component, Input } from '@angular/core';
import { ProductDescription } from '../product-description';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  template: `
  <a [href]="productDescription.link" target="_blank" class="product-link">
  <section class="products" >
    <img class="product-photo" [src]="productDescription.image">
    <h2 class="product-name">{{ productDescription.name }}</h2>
    <p class="product-description">{{ productDescription.description }}</p>
    <h3 class="product-rating">{{ productDescription.rating }}</h3>
    <button class="share-btn whatsapp-btn" (click)="shareProduct('whatsapp')">Share on WhatsApp</button>
    <button class="share-btn telegram-btn" (click)="shareProduct('telegram')">Share on Telegram</button>

  </section>
  </a>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() productDescription!: ProductDescription;
  shareProduct(platform: string) {
    const productLink = encodeURIComponent(this.productDescription.link);
    const message = encodeURIComponent(`Check out this product: ${this.productDescription.name} - ${this.productDescription.link}`);

    let url = '';

    if (platform === 'whatsapp') {
      url = `https://api.whatsapp.com/send?text=${message}`;
    } else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${productLink}&text=${message}`;
    }

    window.open(url, '_blank');
  }
}
