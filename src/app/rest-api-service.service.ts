import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiServiceService {

  baseURL = 'https://reqres.in';

  constructor(private _http: HttpClient) {

  }

  public getData() {
    return this._http.get(`${this.baseURL}/api/users?page=2`).pipe((map((item: any) => item.data)));
  }
}
