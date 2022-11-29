import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'layout',
  templateUrl: 'layout.component.html',
  standalone: true,
  imports: [RouterOutlet]
})
export class LayoutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
