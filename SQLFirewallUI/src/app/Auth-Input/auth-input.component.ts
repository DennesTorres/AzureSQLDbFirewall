import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'auth-input',
  templateUrl: './Auth-Input.component.html',
  styleUrls: ['./Auth-Input.component.css']
})
export class AuthInputComponent {
  serverName = new FormControl('');
  userName = new FormControl('');
  password = new FormControl('');

  authenticate() {
  }
}
