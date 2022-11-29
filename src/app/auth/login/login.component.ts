import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  standalone: true,
  imports: [NgClass],
  styles: [`:host { @apply flex-1 flex; }`]
})
export default class LoginComponent implements OnInit {

  showPassword = false;

  constructor() { }

  ngOnInit() { }
}
