import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    appURL = environment.dev.ts;

  constructor(private http : HttpClient) { }


}
