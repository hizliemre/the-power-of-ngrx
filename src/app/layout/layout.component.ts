import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IsLoggedInDirective } from '@auth';
import { LetModule } from '@ngrx/component';
import { SessionService } from '@state/session';
import { CardButtonComponent } from '@ui/card-button';

@Component({
  selector: 'layout',
  templateUrl: 'layout.component.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, IsLoggedInDirective, LetModule, CardButtonComponent],
  styles: [`:host { @apply flex-1 flex flex-col justify-start items-stretch; }`]
})
export class LayoutComponent implements OnInit {

  sessionService = inject(SessionService)

  constructor() { }

  ngOnInit() { }
}
