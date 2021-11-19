import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from '../Common/GlobalComponent';

@Component({
  selector: 'alternate-ui',
  templateUrl: './alternate-ui.component.html',
  styleUrls: ['./alternate-ui.component.css']
})
export class AlternateUIComponent implements OnInit {

  public isAuthenticated: boolean=false;

  constructor() { }

  ngOnInit(): void {
    GlobalComponent.isAuthenticated.subscribe( (x) => {
      this.isAuthenticated=x;
      console.log("subscription");;
      console.log(x);
    });
  }

  get ShowDbs() : boolean {
    return this.isAuthenticated;
  }
  get ShowAuth() : boolean {
    return !this.isAuthenticated;
  }

}
