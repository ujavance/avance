import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../shared/product.service';
import { MycookieService } from '../../shared/mycookie.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { OKOrNo, RegisterOrLogin } from '../../bean/RegisterOrLogin';
import { ModalComponent } from '../../modal/modal.component';
import { ModalService } from '../../shared/modal-service';

@Component({
  selector: 'app-personal-information-edit',
  templateUrl: './personal-information-edit.component.html',
  styleUrls: ['./personal-information-edit.component.css']
})
export class PersonalInformationEditComponent implements OnInit {
  /* 表单控件 */
  formModel: FormGroup;
  /* 下拉框 数据 */
  citys: string[];
  edu: string[];
  sex: string[];
  workTimes: string[];

  /* 弹出框 */
  // bsModalRef: BsModalRef;
  /* error 弹出框 */
  bsMRError: BsModalRef;
  constructor(
    private fb: FormBuilder,
    private ps: ProductService,
    private cs: MycookieService,
    private router: Router,
    private modalService: BsModalService,

  ) {

    this.formModel = fb.group({
      name: [null],
      gender: [null],
      settledCity: [null],
      phone: [null],
      highestEducation: [null],
      workingTime: [null],
      email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+_]+@[a-z0-9.-]+')]],
      majors: [null],
      graduatedSchool: [null],
      graduationYear: [null],
      degree: [null],
    });

    /* 获得表单中的待选项 */
    this.ps.getPersonalEdit().subscribe(
      data => {
        console.log('获得表单中的待选项');
        console.log(data);
        if (data.status == OKOrNo[0]) {
          this.citys = data.result.citys;
          this.sex = data.result.sex;
          this.workTimes = data.result.workTimes;
          this.edu = data.result.edu;
        }
      }
    )
  }
  // TODO: 默认值设定 性别默认是 '男' 北京 
  // TODO: 填写个人信息的时候， 退出登录注意提示信息

  onSubmit() {
    console.log('个人信息 表单');
    console.log(this.formModel.value);
    if (this.formModel.valid) {
      /* 异步提交表单 */
      this.ps.postPersonalInformation(this.formModel.value).subscribe(
        data => { 
          if (data['isOK'] == 'Yes') {
            /* 提交个人信息表单成功， 获得已经递交的flag */
            this.cs.setStrCookie(RegisterOrLogin[3], OKOrNo[0])
            /* 表单合格, 跳到个人消息展示页面 */
            this.router.navigate(['/personOK/personal-information']);
          } else {
            console.log('个人信息 表单 返回 有误');
            console.log(data);
            /* 弹出 出错提示 */
            this.openModalError();
          }
          
        }
      );      
    } else {
      console.log('表单存在错误');        
    }
  }

  canDeactivate(): Observable<boolean> | boolean {
    /* 填写完表单，才能离开页面 */
    if (this.formModel.valid) {
      return true;
    } else {
      console.log('路由退出保护存在错误');
      /* 弹出 出错提示 */
      this.openModalError();
      return false;
    }
  }

  ngOnInit() {}

  /* 登录失败 */
  openModalError() {
    /* 弹框提示 */
    const initialState = {
      title: '提示',
      message: '提交未成功',
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
    }, 600);
  }
}
