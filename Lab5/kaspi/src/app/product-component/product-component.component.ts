import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductDescription } from '../product-description';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class = "product-main">
  <section *ngFor="let product of filteredProducts">
    <a [href]="product.link" target="_blank" class="product-link">
      <section class="products">
      <img class="product-photo icon-large" [src]="product.image" alt="{{product.name}}">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <h3 class="product-rating">{{ product.rating }}</h3>
      <button class=  "like" (click) = "increaseLikes($event, product)" > ❤️ {{product.likes}} </button>
      <button class="whatsapp-btn" (click)="shareProduct(product, 'whatsapp')">Share on WhatsApp
      </button>
      <button class="telegram-btn" (click)="shareProduct(product, 'telegram')"> Share on Telegram
      </button>
      </section>
    </a>
    
  </section>
  </section>
  `,
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent implements OnInit {
  categoryId!: number;
  filteredProducts: ProductDescription[] = [];
  likes:number = 0;

  productDescriptionList: ProductDescription[] = [
    {
      id: 1,
      name: "Adapter",
      image: "/assets/adapter.jpg",
      description: "A high-quality power adapter for various devices.",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000",
      categoryId: 1,
      likes:0,
    },
    {
      id: 2,
      name: "iPhone",
      image: "/assets/iphone.jpg",
      description: "The latest iPhone model with cutting-edge technology.",
      rating: 4.9,
      link:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
      categoryId:1,
      likes:0,
    },
    {
      id: 3,
      name: "Cover",
      image: "/assets/cover.jpg",
      description: "A protective cover for your smartphone.",
      rating: 4.4,
      link: "https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000",
      categoryId: 1,
      likes:0,
    },
    {
      id: 4,
      name: "Cable",
      image: "/assets/cable.jpg",
      description: "Unique and useful cable",
      rating: 4.6,
      link: "https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000",
      categoryId: 1,
      likes:0,
    },
    {
      id: 5,
      name: "Xiaomi",
      image: "/assets/xiaomi.jpg",
      description: "Great device with new technologies",
      rating: 4.6,
      link: "https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000",
      categoryId: 1,
      likes:0,
    },
    {
      id: 6,
      name: "Mouse",
      image: "/assets/mouse_2.jpg",
      description: "An ergonomic and high-precision mouse for productivity and gaming.",
      rating: 4.5,
      link:"https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
      categoryId: 2,
      likes:0,
    },
    {
      id: 7,
      name: "Keyboard",
      image: "/assets/keyboard.jpg",
      description: "A mechanical keyboard for an enhanced typing experience.",
      rating: 4.6,
      link: "https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000",
      categoryId: 2,
      likes:0,
    },
    {
      id: 8,
      name: "Mouse pad",
      image: "/assets/mat.jpg",
      description: "Nice and comfortable mat",
      rating: 3.6,
      link:"https://kaspi.kz/shop/p/art-strata-900x400x3-risunok-109753958/?c=750000000",
      categoryId:2,
      likes:0,
    },
    {
      id: 9,
      name: "Laptop bag",
      image: "/assets/bag.jpg",
      description: "Elegant design and functionality",
      rating: 4.6,
      link:"https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000",
      categoryId:2,
      likes:0,
    },
    {
      id: 10,
      name: "Hard drive",
      image: "/assets/mem.jpg",
      description: "Compact and lightweight external hard disk drive",
      rating: 5.0,
      link:"https://kaspi.kz/shop/p/kesu-k108-500-gb-108528189/?c=750000000",
      categoryId:2,
      likes:0,
    },
    {
      id: 11,
      name: "Women's Dress",
      image: "/assets/womendress.jpg",
      description: "Elegant dress for special occasions.",
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/povsednevnoe-plat-e-399161-chernyi-xs-122330846/?c=750000000",
      categoryId: 3,
      likes:0,
    },
    {
      id: 12,
      name: "Men's Shirt",
      image: "/assets/menshirt.jpg",
      description: "Classic shirt suitable for business meetings.",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/futbolka-bahodir-4743-chernyi-3xl-119819445/?c=750000000",
      categoryId: 3,
      likes:0,
    },
    {
      id: 13,
      name: "Children's Sports Suit",
      image: "/assets/kidsportsuit.jpg",
      description: "Comfortable sports suit for children.",
      rating: 4.8,
      link: "https://kaspi.kz/shop/p/decathlon-8737748-sinii-7-8y-123-130--106026840/?c=750000000",
      categoryId: 3,
      likes:0,
    },
    {
      id: 14,
      name: "Women's T-Shirt",
      image: "/assets/thsirt.jpg",
      description: "Stylish T-shirt made from natural cotton.",
      rating: 4.6,
      link: "https://kaspi.kz/shop/p/futbolka-730323194-rozovyi-2xl-119351270/?c=750000000",
      categoryId: 3,
      likes:0,
    },
    {
      id: 15,
      name: "Men's Jeans",
      image: "/assets/jeans_2.jpg",
      description: "High-quality straight-cut jeans.",
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/dzhinsy-prjamye-urban-outfit-as0628jj-sinii-2xl-113558315/?c=750000000",
      categoryId: 3,
      likes:0,
    },
    {
      id: 16,
      name: "Electric Kettle Bosch TWK3A011",
      image: "/assets/kettle.jpg",
      description: "Reliable electric kettle with a 1.7-liter capacity.",
      rating: 4.8,
      link: "https://kaspi.kz/shop/p/elektrochainik-bosch-twk3a011-belyi-115035149/?c=750000000",
      categoryId: 4,
      likes:0,
    },
    {
      id: 17,
      name: "Vacuum Cleaner Samsung VC18M3120",
      image: "/assets/vacuum.jpg",
      description: "Powerful vacuum cleaner with CycloneForce technology.",
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/samsung-vc18m3120-sinii-3701334/?c=750000000",
      categoryId: 4,
      likes:0,
    },
    {
      id: 18,
      name: "Iron Philips GC2998/80",
      image: "/assets/iron.jpg",
      description: "Iron with steam boost and ceramic soleplate.",
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/ariston-blu1-r-abs-80-v-3900990/?c=750000000",
      categoryId: 4,
      likes:0,
    },
    {
      id: 19,
      name: "Microwave LG MS2042DB",
      image: "/assets/microwave.jpg",
      description: "Compact microwave oven with a 20-liter capacity.",
      rating: 4.6,
      link: "https://kaspi.kz/shop/p/lg-ms2042db-chernyi-114330525/?c=750000000",
      categoryId: 4,
      likes:0,
    },
    {
      id: 20,
      name: "Toaster Tefal TT330D30",
      image: "/assets/toaster.jpg",
      description: "Stylish toaster with two slots and adjustable browning control.",
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/tefal-tt330d30-serebristyi-106520063/?c=750000000",
      categoryId: 4,
      likes:0,
    }
       
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = +params['id'];
      this.filteredProducts = this.productDescriptionList.filter(
        product => product.categoryId === this.categoryId
      );
    });
  }
  increaseLikes(event:Event, product: ProductDescription){
    event.preventDefault();
    product.likes +=1;
  }
  

  shareProduct(product: ProductDescription, platform: string) {
    const message = `Check out this product: ${product.name} - ${product.link}`;
    let url = '';

    if (platform === 'whatsapp') {
      url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    } else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`;
    }

    window.open(url, '_blank');
  }
}

