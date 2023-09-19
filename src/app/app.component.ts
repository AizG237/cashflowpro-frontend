import { Component } from '@angular/core';
import{ LoginService } from '../app/service/login.service'
import {OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
  
})
export class AppComponent implements OnInit{
  title = 'cfp-font';


  constructor(private loginService : LoginService){

  }
  ngOnInit(){

  }

  
}
