import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { positiveNumberValidator } from '../validators/validator';
import { ProductService } from '../shared/product.service';
import { InforSkill, Skills } from '../bean/InforSkill';
import { InformationResult } from '../recommend/information.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../shared/modal-service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit {

  /* 判断当前选择 单选项 Radio */
  cSalary = -1;
  cSkill = -1;
  cTime = -1;
  cWork = -1;
  /* 等候单选选项 */
  skills: string[];
  salarys: string[];
  releseTime: string[];
  workTime: string[];
  edus: string[];
  /* 猜你喜欢 */
  recommend: Object[];
  /* 显示搜索结果 */
  searchResult = false;
  /* 查询返回结果 */
  infors: InformationResult[];

  // TODO: 模拟排行榜
  // TODO: 返回数据接口
  
  formModel: FormGroup;
  /* error 弹出框 */
  bsModalRef: BsModalRef;
  /* 正在等待 弹出框 */
  bsMRNormal: BsModalRef;
  /* 可多选的技能 */
  sillsInfor: InforSkill[];
  selected: Array<string>=[];
  /* 是否显示页面 */
  isshow = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private modalService: BsModalService,
    private ms: ModalService
  ) {
    /* 获得查询参数 */
    this.productService.getSearchParams().subscribe(
      data => {
        /* 展示页面 */
        this.isshow = true;
        console.log('后台返回候选项');
        console.log(data);
        /* 候选字段 */
        this.edus = data.education;
        this.releseTime = data.releaseTime;
        this.skills = data.skills;
        this.workTime = data.workExperience;
        this.salarys = data.salary;        
        /* 遍历技能值，创建技能对象 */
        this.sillsInfor = this.skills.map(str => {
          var obj: InforSkill = new InforSkill(str, false);
          return obj;
        });
        /* 获得猜你喜欢字段 */
        this.recommend = data.recommend;
      });

    /* 表单模型结构 */
    this.formModel = fb.group({
      position: [null,
        [
          Validators.minLength(2),
          Validators.required
        ]
      ],
      comp: [null],
      place: [null],   
      salary: [null],
      time: [null],
      exper: [null]
    });
  }
   
  ngOnInit() {}
  
  //   点击时执行
  //  执行增加、删除
  clickItem(item) {    
    console.log(item); 
    if (this.selected.indexOf(item) == -1) {
      console.log('执行添加');
      this.selected.push(item);
    } else {
      console.log('执行删除');
      this.selected.splice(this.selected.indexOf(item), 1);
    }
    console.log(this.selected);
  }
  /* 点击搜索按钮 */
  onSubmit() {
    if (this.formModel.valid) {
      const result = this.formModel.value;
      console.log(result);
      let postResult:string='';
      for (let prop in result) {
        if(result[prop] == null) {
          console.log(prop);
          console.log(result[prop]);
        }else{
          postResult = postResult + '\"' + prop + '\"' + ':'+'\"' + result[prop] + '\"\,';
        }
      }
      if(this.selected.length>0) {
        postResult = '{' + postResult + "\"skills\"" + ":" +'\"' +this.selected +  '\"}';
      }else{
        const l = postResult.length;
        postResult = '{' + postResult.substring(0, l-1) +'}';
        console.log('未选中技能');
      }
      console.log(postResult);
      const params = JSON.parse(postResult);
      console.log('上传JSON字段');
      console.log(params);
      // let infor : Skills[]=[];
      // for (let entry of this.selected) {
      //   infor.push(new Skills(entry));
      // }
      // this.formModel.setValue({ 'skills': infor});
      this.openModalWithComponent();
      /* 提交搜索字段 */
      this.productService.search(params).subscribe(data => {
        console.log("后台返回数据：");
        console.log(data);
        if (data.status == 'yes') {
          this.searchResult = true;
          this.infors = data.result;
          this.bsMRNormal.content.closeModal(1);
        } else if (data.status == 'no') {
          console.log('搜索结果出现错误');
          /* 关闭 等待框 */
          this.bsMRNormal.content.closeModal(1);
          this.openModalError();
          this.searchResult = false;
        }
      });
    } else {
      console.log('表单不合格 ： error');
    }
  }
  /* 打开 waiting 的 提示框 */
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
  /* 打开提交出错 */
  openModalError() {
    let t = setTimeout(() => {
      this.bsModalRef = this.modalService.show(ModalComponent, {
        initialState: {
          title: '提示',
          message: '搜索出错',
          headStyle: {'head-danger': true },
          waiting: false
        }
      });
      this.bsModalRef.content.closeModal(2);
    }, 800);
  }

}
