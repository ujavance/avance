import { Component, OnInit,  HostBinding } from '@angular/core';
import { routeAnimation } from '../animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ routeAnimation ]
})

export class HomeComponent implements OnInit {
  constructor( ) {}
  ngOnInit() {
  }

}
