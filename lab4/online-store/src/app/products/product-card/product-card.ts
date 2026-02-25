import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

  openWhatsApp() {
    const message = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  openTelegram() {
    const url =
      `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
  @Output() like = new EventEmitter<void>();
@Output() delete = new EventEmitter<void>();

onLike() {
  this.like.emit();
}

onDelete() {
  this.delete.emit();
}
}