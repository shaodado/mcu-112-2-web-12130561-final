import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data = [
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

  getList(): Product[] {
    return this._data;
  }

  add(product: Product): void {
    const id = this._data.length === 0 ? 1 : Math.max(...this._data.map(({ id }) => id)) + 1;
    this._data.push(new Product({ ...product, id }));
  }
}
