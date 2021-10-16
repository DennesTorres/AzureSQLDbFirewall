import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export type AuthWindow = 'open' | 'close';

@Component({
  selector: 'Hidden-Auth',
  templateUrl: './Hidden-Auth.component.html',
  styleUrls: ['./Hidden-Auth.component.css']
})
export class HiddenAuthComponent {
  box: AuthWindow = 'open';

  arrowDown = 'assets/images/arrowsDown.jpg';
  arrowTop = 'assets/images/arrowsTop.jpg';

  get Image() {
    if (this.box == 'open')
      return this.arrowDown;
    else
      return this.arrowTop;
  }

  get ShowWindow() {
    return this.box == 'open';
  }

  WindowClick() {
    if (this.box == 'open')
      this.box = 'close';
    else
      this.box = 'open';
  }

}
