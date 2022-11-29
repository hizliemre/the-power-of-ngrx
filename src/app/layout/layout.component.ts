import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'layout',
  templateUrl: 'layout.component.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styles: [`:host { @apply flex-1 flex flex-col justify-start items-stretch; }`]
})
export class LayoutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
