import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private configUrl = 'assets/json/products.json';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get(this.configUrl);
  }
}
