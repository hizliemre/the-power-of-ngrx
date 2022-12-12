import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '@models';
import { LetModule, PushModule } from '@ngrx/component';
import { ProductsService } from '@state/products';
import { ProductCardComponent } from '@ui/product-card';
import { ShowcasePageService } from './+state/facade';

@Component({
  selector: 'showcase',
  templateUrl: 'showcase.component.html',
  standalone: true,
  imports: [ProductCardComponent, NgFor, NgIf, LetModule, PushModule],
})
export default class ShowcaseComponent implements OnInit {

  products: Product[] = [];
  skeletons = new Array(10);
  state = inject(ShowcasePageService);
  productsService = inject(ProductsService);

  ngOnInit() {
    this.state.initialize();
  }
}
