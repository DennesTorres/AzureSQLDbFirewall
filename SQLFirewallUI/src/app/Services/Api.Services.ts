import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  private server: HttpClient

  constructor(private http: HttpClient) {
    this.server = http;
  }

  public sendGetRequest<T>(URL: string) {
    return this.server.get<T>(URL);
  }

  public sendPostRequest<T>(URL: string,data : any) {
    return this.server.post<T>(URL,data);
  }
}
