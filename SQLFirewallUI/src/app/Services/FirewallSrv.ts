import { EventEmitter, Injectable } from '@angular/core';
import { ApiServices } from './Api.Services';
import { GlobalComponent } from '../Common/GlobalComponent';


@Injectable({
  providedIn: 'root',
})
export class FirewallSrv {

  private GetDatabasesURL = "https://sqlfirewallbackend.azurewebsites.net/api/ListDbs?code=03FDi2GihkIfT9pndXB0NZkhTQR8dznmS1CuaSK58kgIvhzQyOLVwQ==";
  private server: ApiServices

 public DatabasesReceived: EventEmitter<string[]> = new EventEmitter();

  public Databases : string[] = [];

  constructor(private api: ApiServices) {
    this.server = api;
  }

  public GetDatabases() {
    var auth = GlobalComponent.GetAuth();
    this.server.sendPostRequest<string[]>(this.GetDatabasesURL,auth).subscribe((data: string[]) => {
      console.log(data);
      this.Databases = data;
      this.DatabasesReceived.emit(this.Databases);
    });
  }
}
