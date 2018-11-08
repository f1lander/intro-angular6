import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RestApiServiceService {

  baseURL = 'https://reqres.in';

  constructor(private _http: HttpClient) {

  }

  getData() {
    return this._http.get(`${this.baseURL}/api/users?page=2`);
  }
}
