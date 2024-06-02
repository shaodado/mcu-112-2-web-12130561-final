import { Component, HostBinding, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input()
  productname!: String;
  @Input() authors!: String[];
  @Input() company!: String;
  @Input({ transform: booleanAttribute }) isShow!: boolean;
  @Input() imgUrl!: String;

  @HostBinding('class')
  class = 'product-card';

  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}
