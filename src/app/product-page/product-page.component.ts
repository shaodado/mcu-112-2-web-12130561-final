import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, combineLatest, startWith, switchMap, tap } from 'rxjs';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  router = inject(Router);

  private productService = inject(ProductService);

  protected pageSize = 5;

  protected readonly formControl = new FormControl<string | undefined>(undefined, { nonNullable: true });

  private readonly refresh$ = new Subject<void>();

  private readonly condition$ = new BehaviorSubject<string | undefined>(undefined);
  get condition() {
    return this.condition$.value;
  }
  set condition(value: string | undefined) {
    this.condition$.next(value);
  }

  private readonly pageIndex$ = new BehaviorSubject<number>(1);
  get pageIndex() {
    return this.pageIndex$.value;
  }
  set pageIndex(value: number) {
    this.pageIndex$.next(value);
  }

  readonly products$ = combineLatest([
    this.refresh$.pipe(startWith(undefined)),
    this.condition$.pipe(tap((condition) => console.log(condition))),
    this.pageIndex$.pipe(tap((index) => console.log(index))),
  ]).pipe(switchMap(([_, condition, pageIndex]) => this.productService.getList(condition, pageIndex, this.pageSize)));

  readonly totalCount$ = combineLatest([this.refresh$.pipe(startWith(undefined)), this.condition$]).pipe(
    switchMap(([_, condition]) => this.productService.getCount(condition))
  );

  onPageIndexChange(index: number): void {
    this.pageIndex = index;
  }

  /*onAdd(): void {
    const product = new Product({
      id: 1,
      name: '產品 Z',
      authors: ['作者A', '作者B', '作者C'],
      company: '博碩文化',
      isShow: true,
      createDate: new Date(),
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 10000,
    });

    this.productService.add(product).subscribe(()=>this.refresh$.next());
  }*/

  onShop(product: Product): void {
    this.router.navigate(['shop']);
    alert('已加入購物車');
  }

  onView(product: Product): void {
    this.router.navigate(['product', 'view', product.id]);
  }
}
