import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { usernameValidator, validator } from '../validators/validator';
import { ProductService } from '../shared/product.service';
import { RegisterOrLogin } from '../bean/RegisterOrLogin';
import { MycookieService } from '../shared/mycookie.service';
import { ModalService } from '../shared/modal-service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  /* 标题 */
  headStyle: any;
  title: string;
  message: string;
  btnOK: string;
  btnNO: string;
  /* 表单控制器 */
  formModel: FormGroup;
  /* normal 弹出框 */
  bsMRNormal: BsModalRef;
  /* error 弹出框 */
  bsMRError: BsModalRef;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private ps: ProductService,
    private router: Router,
    private cs: MycookieService,
    private modalService: BsModalService
  ) {
    this.formModel = fb.group({
      username: [null, [Validators.required, usernameValidator, Validators.maxLength(12), Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() { }
  /* 确认  */
  onSubmit() {
    if (this.formModel.valid) {
      console.log('提交 以下登录表单数据  ：');
      console.log(this.formModel.value);
      /* 关闭该登录框， 出现等待框 */
      this.bsModalRef.hide();
      this.openModalWithComponent();

      this.ps.getLoginInfor(this.formModel.value).subscribe(
        data => {

          /* 登录成功 */
          if (data.isOK == 'Yes') {

            /* 展示注册成功 */
            // this.modalRef = this.modalService.show(registerOK);
            let t = setTimeout(() => {
              /* 关闭 等待提示框*/
              this.bsMRNormal.content.closeModal(1);
              /* 登录成功，保存cookie */
              this.cs.setStrCookie(RegisterOrLogin[1], 'Yes');
              /* 跳转至 登录成功页面 */
              // this.router.navigate(['/loginOK', RegisterOrLogin.LOGIN]);
              /* 登录成功，跳到个人中心界面 */6.
              this.router.navigate(['/person']);
              /* 发出信号， 登录成功了 */
              this.ps.isLogin.emit(RegisterOrLogin[1]);
              clearTimeout(t);
            }, 2000);
          } else {
            console.log('登录失败，返回结果为：');
            console.log(data);
            /* 关闭 等待提示框*/
            this.bsMRNormal.content.closeModal(1);
            this.openModalError();

          }
        }
      );
      // 
    } else {
      console.log('登录表单存在错误');

    }
  }
  /* 打开自定义的modal */
  openModalWithComponent() {
    /* 弹框提示 */
    const initialState = {
      title: '正在提交',
      message: null,
      headStyle: { 'head-warning': true },
      waiting: true
    };
    this.bsMRNormal = this.modalService.show(ModalComponent, {
      backdrop: "static",
      keyboard: false,
      initialState: initialState
    });
  }
  /* 登录失败 */
  openModalError() {
    /* 弹框提示 */
    const initialState = {
      title: '提示',
      message: '登录出错',
      headStyle: { 'head-danger': true },
      waiting: false
    };
    let t = setTimeout(() => {
      this.bsMRError = this.modalService.show(ModalComponent, {
        backdrop: "static",
        keyboard: false,
        initialState: initialState
      });
      this.bsMRError.content.closeModal(2);
    }, 800);

  }

  /* 关闭 登录弹框 */
  closeModal(time: number) {
    if (time > 0) {
      let t = setTimeout(() => {
        /* 关闭提示框 */
        this.bsModalRef.hide();
        /* 登录成功，保存cookie */
        this.cs.setStrCookie(RegisterOrLogin[1], 'Yes');
        /* 登录成功，跳到个人中心界面 */
        this.router.navigate(['/person']);
        /* 发出信号， 登录成功了 */
        this.ps.isLogin.emit(RegisterOrLogin[1]);
        clearTimeout(t);
      }, time * 1000);
    }
  }
}
