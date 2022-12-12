import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'product-card-skeleton',
  templateUrl: 'product-card-skeleton.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardSkeletonComponent { }
