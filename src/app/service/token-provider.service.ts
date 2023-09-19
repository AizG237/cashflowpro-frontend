import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenProviderService {

  constructor(private http: HttpClient) { }
  getToken(){
    return this.http.get('api/token')
  }

}
