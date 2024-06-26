import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  @Input()
  product!: Product;

  private router = inject(Router);

  private ProductService = inject(ProductService);

  onBack(): void {
    this.router.navigate(['products']);
  }

  onShop(): void {
    this.router.navigate(['shop']);
    alert('已加入購物車');
  }
}
