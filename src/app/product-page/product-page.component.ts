import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  products = [
    new Product({
      id: 1,
      name: '產品 A',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      createDate: new Date(),
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 10000,
    }),
    new Product({
      id: 2,
      name: '產品 B',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      createDate: new Date(),
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 10000,
    }),
    new Product({
      id: 3,
      name: '產品 C',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      createDate: new Date(),
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 10000,
    }),
    new Product({
      id: 4,
      name: '產品 D',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      createDate: new Date(),
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 10000,
    }),
  ];

  router = inject(Router);

  onView(product: Product): void {
    this.router.navigate(['product', product.id]);
  }
}
