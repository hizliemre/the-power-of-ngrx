import { NgIf, NgIfContext } from '@angular/common';
import { Directive, inject, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { SessionService } from '@state/session';
import { map, Subscription } from 'rxjs';

@Directive({
  selector: '[isLoggedIn]',
  standalone: true,
  hostDirectives: [{
    directive: NgIf,
  }],
})
export class IsLoggedInDirective implements OnInit, OnDestroy {

  #sessionService = inject(SessionService);
  #ngIf = inject(NgIf, { host: true });
  #sub?: Subscription;

  @Input() isLoggedInElse!: TemplateRef<NgIfContext<unknown>>;

  ngOnInit(): void {
    this.#ngIf.ngIfElse = this.isLoggedInElse;
    this.#sub = this.#sessionService.user$.pipe(map((m) => Boolean(m))).subscribe((isLoggedIn) => {
      this.#ngIf.ngIf = isLoggedIn;
    });
  }

  ngOnDestroy(): void {
    this.#sub?.unsubscribe();
    this.#sub = undefined;
  }
}
