import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent implements OnInit {

  @Input() ngModel: string;
  isVisible = false;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

}
