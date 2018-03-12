import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterInfor } from '../bean/RegisterInfor';
import { ProductService } from '../shared/product.service';
import { MycookieService } from '../shared/mycookie.service';
import { equalValidator, usernameValidator } from '../validators/validator';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RegisterOrLogin, OKOrNo } from '../bean/RegisterOrLogin';

import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formModel: FormGroup;
  /* 标题 */
  headStyle: any;
  title: string;
  message: string;
  btnOK: string;
  btnNO: string;
  /* normal 弹出框 */
  bsMRNormal: BsModalRef;
  /* error 弹出框 */
  bsMRError: BsModalRef;
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private ps: ProductService,
    private cs: MycookieService,
    public bsModalRef: BsModalRef,
    private modalService: BsModalService
  ) {

    this.formModel = fb.group({
      username: [null, [Validators.required, usernameValidator, Validators.minLength(4), Validators.maxLength(12)]],
      passwords: fb.group({
        password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(7)]],
        confirmPassword: [null, [Validators.required, Validators.minLength(6)]]
      }, { validator: equalValidator })
    });    
  }
 
  
  ngOnInit() {} 
  onSubmit() {
    if (this.formModel.valid) {
      console.log('表单数据：');
      console.log(this.formModel.value);
      
      let submitData: RegisterInfor = new RegisterInfor(this.formModel.get('username').value, this.formModel.get('passwords').get('password').value);
      console.log(submitData);
      /* 关闭该登录框， 出现等待框 */
      this.bsModalRef.hide();
      this.openModalWithComponent();

      this.ps.getRegisterInfor(submitData).subscribe(
        data => {
          /* 注册成功 */
          if(data.isOK == OKOrNo[0]) {           
            /* 注册后逻辑 */
            let t = setTimeout(() => {
              /* 关闭 等待提示框*/
              this.bsMRNormal.content.closeModal(1);      
              /* 注册成功， 将已经注册的flag 保存 */
              this.cs.setStrCookie(RegisterOrLogin[0], 'Yes');
              /* 跳转至 提交个人信息页面 */
              this.router.navigate(['/person']);
              /* 发出信号， 注册成功了 */
              this.ps.isLogin.emit(RegisterOrLogin[0]);
              clearTimeout(t);
            }, 2000);
            
          } else {
            console.log('注册返回信息');            
            console.log(data);
            /* 关闭 等待提示框*/
            this.bsMRNormal.content.closeModal(1);            
            /* 关闭 等待提示框*/
            // this.bsMRNormal.content.closeModal(1);
            this.openModalError();
          }
        }
      )    
    } else {
      console.log('校验注册表单，发现错误');
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
  /* 注册 失败 */
  openModalError() {
    /* 弹框提示 */
    const initialState = {
      title: '提示',
      message: '注册出错',
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
      
    },800);    
  }
  
}
