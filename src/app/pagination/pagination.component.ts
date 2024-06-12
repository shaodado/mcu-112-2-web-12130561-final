import { Component, EventEmitter, Input, Output, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input({ required: true, transform: numberAttribute })
  totalCount!: number;

  @Input({ required: true, transform: numberAttribute })
  pageSize!: number;

  @Input({ transform: numberAttribute })
  pageIndex = 1;

  @Output()
  pageIndexChange = new EventEmitter<number>();

  range: number[] = [];

  ngOnChanges(): void {
    const length = Math.ceil(this.totalCount / this.pageSize);
    this.range = Array.from({ length }, (_, i) => i + 1);
  }
}
