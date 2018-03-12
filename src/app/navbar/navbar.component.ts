import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MycookieService } from '../shared/mycookie.service';
import { ProductService } from '../shared/product.service';
import { PersonalInformation } from '../bean/PersonalInformation';
import { PersonalStatus } from '../bean/PersonalStatus';
import { RegisterOrLogin } from '../bean/RegisterOrLogin';

import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../shared/modal-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /* 控制个人中心，登录，注册等显隐 */
  isLoginOrRegister = false;
  /* 弹出框 */ 
  constructor(
    private router: Router,
    private activateroute: ActivatedRoute,
    private cs: MycookieService,
    private route: ActivatedRoute,
    private ps: ProductService,
    private ms: ModalService
  ) {
    /* 监视登录 和 注册 */
    this.ps.isLogin.subscribe(
      data => {
        console.log('监视登录和注册：');
        console.log(data);
        /* 是登陆 或者 注册 */
        if( data == RegisterOrLogin[0] || data == RegisterOrLogin[1]) {
            /* 如果是登录 或 注册 */
            this.isLoginOrRegister = true;
          } else if( data == RegisterOrLogin[2]) {
            /* 如果是退出登录 */
            this.isLoginOrRegister = false;
        }
      }
    )
  }
  ngOnInit() {}

  /* 点击 退出登录 */
  clickSignOut() {
    /* 先跳到首页，可以出发路由守卫，否则有bug */
    // let isTOHome = this.router.navigate(['/home']);   
    this.router.navigate(['/home']).then(value => { 
      console.log(value);
      console.log('导航到首页返回值：');
      /* 如果可以正常导航到首页，则发送广播 */
      if (value == true) {
        /* 
          navBar isLogin控制登录和注册按钮的显隐   
        */
        this.ps.isLogin.emit(RegisterOrLogin[2]);
        this.cs.removeAllCookie();
      }
    }).catch(error => {
      console.log(error);
    })    
  }
  // /* 打开自定义的modal */
  // openModalWithComponent() {
  //   /* 弹框提示 */
  //   const initialState = {
  //     title: '提示',
  //     message: null,
  //     headStyle: { 'head-warning': true },
  //     waiting: true
  //   };
  //   const config = {
  //     backdrop:  'static',
  //     keyboard: false,
  //     initialState: initialState
  //   };
  //   this.ms.openModalWithComponent(config, 0);
  // }

  /* login modal */
  openModalSignIn() {
    /* 弹框提示 */
    const initialState = {
      title: 'SOTS',
      message: '测试使用',
      headStyle: { 'head-success': true },
      btnOK: '登录',
      btnNO: '退出'
    };
    this.ms.openModalWithSignIn(initialState, 0);
  }
  /* login modal */
  openModalRegister() {
    /* 弹框提示 */
    const initialState = {
      title: '注册',
      message: '测试使用',
      headStyle: { 'head-success': true },
      btnOK: '登录',
      btnNO: '退出'
    };
    this.ms.openModalWithRegister(initialState, 0);
  }
}

