import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-button',
  templateUrl: 'card-button.component.html',
  standalone: true,
  imports: [NgIf],
  host: {
    class: 'relative'
  }
})
export class CardButtonComponent {
  @Input() itemsCount!: number | undefined;
  @Input() itemsPrice!: number | undefined;
}
