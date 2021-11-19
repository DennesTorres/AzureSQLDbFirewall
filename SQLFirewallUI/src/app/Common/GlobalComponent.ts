import { BehaviorSubject, Observable } from "rxjs";

export class GlobalComponent {

  public static serverName: string = "";
  public static userName: string = "";
  public static password: string = "";
  private static _isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  public static setAuthenticated(value:boolean)
  {
     this._isAuthenticated.next(value);     
     console.log("setAuthenticated");
  }

  public static get isAuthenticated() : BehaviorSubject<boolean>
  {
    return this._isAuthenticated;
  }


  public static GetAuth() {
    return new Authentication(this.serverName, this.userName, this.password);
  }
  
}


export class Authentication {

  public ServerName: string;
  public UserName: string;
  public Password: string

  constructor(server: string, user: string, passw: string) {
    this.ServerName = server;
    this.UserName = user;
    this.Password = passw;
  }

}
