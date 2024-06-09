import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  product = new Product({
    id: 1,
    name: '產品 A',
    authors: ['作者A', '作者B', '作者C'],
    company: '博碩文化',
    isShow: true,
    createDate: new Date(),
    imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    price: 10000,
  });

  private router = inject(Router);

  onBack(): void {
    this.router.navigate(['products']);
  }

  onShop(): void {
    this.router.navigate(['login']);
    alert('已加入購物車');
  }
}
