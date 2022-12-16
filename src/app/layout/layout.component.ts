import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IsLoggedInDirective } from '@auth';
import { LetModule, PushModule } from '@ngrx/component';
import { CartService } from '@state/cart';
import { SessionService } from '@state/session';
import { CardButtonComponent } from '@ui/card-button';

@Component({
  selector: 'layout',
  templateUrl: 'layout.component.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, IsLoggedInDirective, LetModule, CardButtonComponent, PushModule],
  styles: [`:host { @apply flex-1 flex flex-col justify-start items-stretch; }`]
})
export class LayoutComponent {

  sessionService = inject(SessionService)
  cartService = inject(CartService)

}
