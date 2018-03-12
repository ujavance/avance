import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { OKOrNo } from '../bean/RegisterOrLogin';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  /* 标题 */
  headStyle: any;
  title: string;
  message: string;
  waiting:false;
  /* btnOK: string;
  btnNO: string; */
  constructor(public bsModalRef: BsModalRef) { }
  ngOnInit() { }

  closeModal(time: number) {
    if( time > 0) {
      let t = setTimeout(() => {
        /* 关闭提示框 */
        this.bsModalRef.hide();
        clearTimeout(t);
      }, time*1000);
    } else if(time = 0){
      /* 关闭提示框 */
      this.bsModalRef.hide();
      console.log('小于 0 直接隐藏不延迟');
    }
  }
}
