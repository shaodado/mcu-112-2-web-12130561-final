import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Product } from './model/product';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ProductCardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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

  onSetNoDate(): void {
    this.products = [];
  }
  onSetHasData(): void {
    this.products = [
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
  }
}
