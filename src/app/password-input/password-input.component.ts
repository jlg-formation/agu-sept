import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent implements OnInit {


  isVisible = false;
  internalPassword: string;
  @Input() get password() {
    return this.internalPassword;
  }

  set password(val) {
    this.internalPassword = val;
    this.passwordChange.emit(this.internalPassword);
  }

  @Output() passwordChange = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

}
