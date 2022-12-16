import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '@models';
import { LetModule, PushModule } from '@ngrx/component';
import { CartService } from '@state/cart';
import { ProductsService } from '@state/products';
import { ProductCardComponent } from '@ui/product-card';
import { ShowcasePageService } from './+state/facade';

import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

@Pipe({
  name: 'isAddedToCart',
  standalone: true
})
export class IsAddedToCartPipe implements PipeTransform {

  cartService = inject(CartService);
  transform(productId: number): Observable<boolean> {
    return this.cartService.products$.pipe(map((products) => products.some((product) => product.id === productId)))
  }
}

@Component({
  selector: 'showcase',
  templateUrl: 'showcase.component.html',
  standalone: true,
  imports: [ProductCardComponent, NgFor, NgIf, LetModule, PushModule, IsAddedToCartPipe],
})
export default class ShowcaseComponent implements OnInit {

  products: Product[] = [];
  skeletons = new Array(10);
  state = inject(ShowcasePageService);
  productsService = inject(ProductsService)
  cartService = inject(CartService);

  ngOnInit() {
    this.state.initialize();
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }

  removeFromCart(product: Product) {
    this.cartService.remove(product);
  }

}
