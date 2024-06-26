import { Component, EventEmitter, HostBinding, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productname!: String;
  @Input() authors!: String[];
  @Input() company!: String;
  @Input() imgUrl!: String;
  @Input({ transform: booleanAttribute }) isShow!: boolean;
  @Input({ transform: numberAttribute }) price!: number;

  @HostBinding('class')
  class = 'product-card';

  @Output() shop = new EventEmitter<void>();
  @Output() view = new EventEmitter<void>();
}
