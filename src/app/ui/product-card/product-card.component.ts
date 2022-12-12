import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '@models';
import { ProductCardSkeletonComponent } from './product-card-skeleton/product-card-skeleton.component';

@Component({
  selector: 'product-card',
  templateUrl: 'product-card.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, ProductCardSkeletonComponent]
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;
  @Input() skeleton = false;

  constructor() { }

  ngOnInit() { }
}
