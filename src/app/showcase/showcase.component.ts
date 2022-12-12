import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ProductsApi } from '@api';
import { Product } from '@models';
import { ProductCardComponent } from '@ui/product-card';

@Component({
  selector: 'showcase',
  templateUrl: 'showcase.component.html',
  standalone: true,
  imports: [ProductCardComponent, NgFor, NgIf]
})
export default class ShowcaseComponent implements OnInit {

  products: Product[] = [];
  skeletons = new Array(10);
  #productsApi = inject(ProductsApi);
  #cdr = inject(ChangeDetectorRef);
  constructor() { }

  ngOnInit() {

    this.#productsApi.getAllProducts().subscribe(response => {
      this.products = response.products;
      this.#cdr.markForCheck();
    })
  }
}
