import { Component, OnInit } from '@angular/core';
import { FirewallSrv } from '../Services/FirewallSrv';

@Component({
  selector: 'database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.css']
})
export class DatabaseListComponent implements OnInit {

  firewall: FirewallSrv;
  public databases: string[] = [];

  constructor(fwl: FirewallSrv) {
    this.firewall = fwl;
    console.log("dblist constructor");
  }

  ngOnInit(): void {
    console.log("dblist nginit");

    this.firewall.DatabasesReceived.subscribe( (data: string[]) =>
    {
        this.databases = data;
      });
    this.firewall.GetDatabases(); 
  }

}
