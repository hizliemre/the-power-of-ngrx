import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-button',
  templateUrl: 'card-button.component.html',
  standalone: true,
  host: {
    class: 'relative'
  }
})
export class CardButtonComponent implements OnInit {
  ngOnInit() { }
}
