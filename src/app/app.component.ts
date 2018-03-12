import { Component } from '@angular/core';
import { OnInit,  HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { MycookieService } from './shared/mycookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SOTS';
  // router跳转动画所需参数
  constructor(
    private cs: MycookieService
  ) {
    /* 移除所有Cookie */
    this.cs.removeAllCookie();
  }
}
