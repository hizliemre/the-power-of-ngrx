import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toastr',
  templateUrl: 'toastr.component.html',
  standalone: true,
  imports: [NgClass, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('150ms ease-in', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('150ms ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ToastrComponent implements OnInit {

  @Input() level!: 'success' | 'warn' | 'error';
  @Input() message!: string;
  @Input() timeout = 3000;

  show = true;

  #cdr = inject(ChangeDetectorRef);

  get bgClass() {
    switch (this.level) {
      case 'success': return ['bg-green-700', 'border-green-700'];
      case 'warn': return ['bg-yellow-700', 'border-yellow-700',];
      case 'error': return ['bg-red-700', 'border-red-700'];
    }
  }

  get icon() {
    switch (this.level) {
      case 'success': return 'fa-check-circle';
      case 'warn': return 'fa-triangle-exclamation';
      case 'error': return 'fa-circle-exclamation';
    }
  }

  ngOnInit() {
    const t = setTimeout(() => {
      this.show = false;
      this.#cdr.markForCheck();
      clearTimeout(t);
    }, this.timeout);
  }
}
