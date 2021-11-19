import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GlobalComponent } from '../Common/GlobalComponent';

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
    GlobalComponent.serverName = this.serverName.value;
    GlobalComponent.userName = this.userName.value;
    GlobalComponent.password = this.password.value;
    GlobalComponent.setAuthenticated(true);
  }
}
