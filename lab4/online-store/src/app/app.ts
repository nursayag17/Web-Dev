import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
}

