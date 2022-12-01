import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { ToastrComponent } from '../toastr.component';
import * as actions from './actions';

@Injectable({ providedIn: 'root' })
export class ToastrService {
  actions = actions;
  #overlay = inject(Overlay);
  #lastOverlayRef!: OverlayRef;

  showToastr(level: 'success' | 'warn' | 'error', message: string, timeout = 3000) {
    if (this.#lastOverlayRef) this.#lastOverlayRef.dispose();
    const overlayRef = this.#overlay.create({ positionStrategy: this.#overlay.position().global().right('2rem').bottom('2rem') });
    this.#lastOverlayRef = overlayRef;
    const toastrPortal = new ComponentPortal(ToastrComponent);
    const componentRef = overlayRef.attach(toastrPortal);
    componentRef.instance.level = level;
    componentRef.instance.message = message;
    componentRef.instance.timeout = timeout;
    const t = setTimeout(() => {
      overlayRef.dispose();
      clearTimeout(t)
    }, timeout + 1000);
  }
}
