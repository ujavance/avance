import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalComponent } from '../modal/modal.component';
import { SigninComponent } from '../signin/signin.component';
import { RegisterComponent } from '../register/register.component';

@Injectable()
export class ModalService {
    /* normal 弹出框 */
    bsModalRef: BsModalRef;
    /* login 弹出框 */
    bsModalRefSignIn: BsModalRef;
    /* 注册 弹出框 */
    bsModalRefRegister: BsModalRef;

    constructor(
        private modalService: BsModalService
    ) {
        
    }
    /* 打开自定义的modal */
    openModalWithComponent(initialState: Object, time: number) {
        this.bsModalRef = this.modalService.show(ModalComponent,  initialState);
        this.bsModalRef.content.closeModal(time);
    }

    openModalWithSignIn(initialState: ModalInfor, time: number) {
        this.bsModalRefSignIn = this.modalService.show(SigninComponent, { initialState });
        // this.bsModalRefSignIn.content.closeModal(time);
    }
    openModalWithRegister(initialState: ModalInfor, time: number) {
        this.bsModalRefRegister = this.modalService.show(RegisterComponent, { initialState });
        // this.bsModalRefRegister.content.closeModal(time);
    }
}
class ModalInfor {
    constructor(
        public title:string,
        public message:string,
        public headStyle: object
    ) {
        
    }
}
class headStyleInfor{
    constructor(
        public headStyle: boolean
    ) {}
}