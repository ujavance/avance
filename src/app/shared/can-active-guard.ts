import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MycookieService } from './mycookie.service';
import { RegisterOrLogin, OKOrNo } from '../bean/RegisterOrLogin';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private cs: MycookieService, private router: Router) { }

    canActivate() {
        console.log('AuthGuard#canActivate called');
        
        /*  根据Cookie 判断进入 PersonOK Person */
        if (this.cs.getCookie(RegisterOrLogin[3]) == OKOrNo[0]) {
            /* 进入个人信息 */
            this.router.navigate(['/personOK/personal-information']);
            console.log('导航进入 personOK/personal-information');
            return false;
        } /* else if (this.cs.getCookie(RegisterOrLogin[1]) == OKOrNo[0] || this.cs.getCookie(RegisterOrLogin[0]) == OKOrNo[0]) {
            // 进入个人表单 
            this.router.navigate(['/person']);
            console.log('导航进入 person');
            return false;
        } */
        return true;
    }
}