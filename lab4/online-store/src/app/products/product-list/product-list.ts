import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductCardComponent } from '../product-card/product-card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 16 Pro Max',
      description: 'Latest Apple smartphone with A18 Pro chip and titanium body.',
      price: 899990,
      rating: 4.8,
      image: 'data:image/webp;base64,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',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1f/h4d/85122098049054.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h8b/h28/85122098180126.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h13/hcb/85122098245662.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      likes: 0,
      category:'smartphones'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Flagship Samsung smartphone with powerful Snapdragon processor.',
      price: 499990,
      rating: 4.7,
      image: 'data:image/jpeg;base64,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',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb6/h94/82645744140318.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h46/82645744205854.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/h3e/82645744271390.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000',
      likes: 1,
      category:'smartphones'
    },
    {
      id: 3,
      name: 'PlayStation 5',
      description: 'Next-gen Sony gaming console.',
      price: 349990,
      rating: 4.9,
      image: 'https://m.media-amazon.com/images/I/619BkvKW35L.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
       likes: 112,
      category:'gadzhet'
    },
    {
      id: 4,
      name: 'MacBook Air M3',
      description: 'Lightweight Apple laptop with M3 chip.',
      price: 699990,
      rating: 4.8,
      image: 'https://itmag.kz/upload/iblock/8/61/product_image_103661_1296476.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxct3-137228009/?c=750000000',
       likes: 32,
      category:'gadzhet'
    },
    {
      id: 5,
      name: 'AirPods Pro 2',
      description: 'Noise cancelling wireless earbuds.',
      price: 129990,
      rating: 4.7,
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRESKfehxchPuZFCBYWThOyGv05I0y-2Db8kbDRUByzQDmM5d9hSsGWecah8AB7Auqu4b6AcW-Zs0CDkaMeomyt4JbJAJ9MN8JTX0zPMld6a0mUl5YSd5LZUudATrQtHA&usqp=CAc',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
       likes: 16,
      category:'headphones'
    },
    {
      id: 6,
      name: 'ТV Samsung',
      description: 'Watch HDR content with improved clarity and accurate color reproduction. Samsung UHD TV delivers more accurate detail in both bright and dark scenes.',
      price: 285000,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000',
       likes: 21,
      category:'gadzhet'
    },
    {
      id: 7,
      name: 'Dyson Airwrap Complete Long HS05 + Airstrait HT01 стайлер синий',
      description: 'The Dyson AirWrap Complete Long was created by professionals specifically for styling long hair',
      price: 385220,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/hbc/87174276317214.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/dyson-airwrap-complete-long-hs05-airstrait-ht01-stailer-sinii-123773739/?c=750000000',
       likes: 43,
      category:'beauty'
    },
    {
      id: 8,
      name: 'Мышь Logitech G Pro X Superlight 2 розовый',
      description: 'The Logitech G Pro X Superlight 2 in pink is an ultra lightweight wireless gaming mouse with the high precision HERO 2 sensor',
      price: 73990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h6b/84212513603614.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-rozovyi-113957944/?c=750000000',
       likes: 32,
      category:'gadzhet'
    },
    {
      id: 9,
      name: 'NOW Omega 3 1000 мг, Омега 3 капсулы 100 шт',
      description: 'NOW Omega-3 1000 mg is a high-quality supplement containing omega-3 fatty acids',
      price: 7260,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe4/p8c/27570315.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/now-omega-3-1000-mg-omega-3-kapsuly-100-sht-107545548/?c=750000000',
       likes: 32,
      category:'health'
    },
    {
      id: 10,
      name: 'Колье Teosa TeAr1 длина 55 см вес 4.55 г золото, фианит',
      description: 'The Bismarck chain with the Mother and Child pendant is an elegant combination of durable classic weaving',
      price: 355000,
      rating:  1.1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p57/pd2/60906826.jpeg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/kol-e-teosa-tear1-dlina-55-sm-ves-4-55-g-zoloto-fianit-142272088/?c=750000000',
       likes: 32,
      category:'beauty'
    }
  ];
    selectedCategory: string = 'all';

get filteredProducts() {
  if (this.selectedCategory === 'all') {
    return this.products;
  }
  return this.products.filter(p => p.category === this.selectedCategory);
}

likeProduct(product: Product) {
  product.likes++;
}

deleteProduct(id: number) {
  this.products = this.products.filter(p => p.id !== id);
}

selectCategory(category: string) {
  this.selectedCategory = category;
}


  
  

}