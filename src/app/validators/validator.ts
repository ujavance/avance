import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';

export class validator {
    /**
     *
     */
    // constructor(
    //     private http: HttpClient
    // ) {
        
    // }
    // usernameAsyncValidate(c: AbstractControl): Observable<any> {
    //     return c.valueChanges
    //         // 去抖
    //         .debounceTime(300)
    //         // 抑制重复值
    //         .distinctUntilChanged()
    //         // 1、可以使用flatMap进行远程校验
    //         .flatMap(value => {
    //             let result= '';
    //             this.http.post('/sots/postuserName', value).subscribe(
    //                 data => {
    //                     result = data['msg'];
    //                     console.log(result);
    //                 }
    //             )
    //             if (['123@qq.com', 'qq@qq.com'].includes(value)) {
    //                 return Observable.of({
    //                     mobile: {
    //                         msg: '手机号为黑名',
    //                         actualValue: value
    //                     }
    //                 });
    //             }
    //             return null;
    //         })
    //         // 2、本地模拟判断
    //         // .switchMap(value => {
    //         //     if (['123@qq.com', 'qq@qq.com'].includes(value)) {
    //         //         return {
    //         //             mobile: {
    //         //                 msg: '手机号为黑名',
    //         //                 actualValue: value
    //         //             }
    //         //         }
    //         //     }
    //         //     return null;
    //         // })
    //         .first();
    // }
}

/* 异步校验用户名 */
// export function usernameAsyncValidate(): ValidatorFn {
//     return (control: AbstractControl) => {
//         const c = control.value;
//         if (c.value == 'qq@qq.com') {      
//             return new Promise(resolve => {
//                 resolve({ 'error': { c } });
//             });
//         } else {
//             return new Promise(resolve => {
//                 resolve({ 'error': { c } });
//             });
//         }

//     };
// }
/* 异步校验用户名 */
export function usernameAsyncValidate1(c: AbstractControl): Observable < any > {
    return c.valueChanges
        // 去抖
        .debounceTime(300)
        // 抑制重复值
        .distinctUntilChanged()
        // 1、可以使用flatMap进行远程校验
        .flatMap(value => value)
        // 2、本地模拟判断
        // .map((value: string) => {
        //     if (['123@qq.com', 'qq@qq.com'].includes(value)) {
        //         return {
        //             mobile: {
        //                 msg: '手机号为黑名',
        //                 actualValue: value
        //             }
        //         }
        //     }
        //     return null;
        // })
        .first();
}

/*  校验邮编 和 校验电话*/
export function usernameValidator(control: AbstractControl): any {
    if (!control.value)
        return null;
    var emailReq = /\w@\w*\.\w/;
    // var mobileReq = /^(13[0-9]{9})|(15[89][0-9]{8})$/;
    let emaiValid = emailReq.test(control.value);
    // let mobileValid = mobileReq.test(control.value);
    // if (emaiValid)
    console.log('邮箱校验' + emaiValid);
    return emaiValid ? null : { 'username': { errorInfor: '邮箱 格式错误' } };
    // else (mobileValid)
    //   return mobileValid ? null : { mobile: { error: '电话号码错误' } };
}
/*  校验前后两次输入密码正确  */
export function equalValidator(group: AbstractControl): any {
    const password = group.get('password').value;
    const pConfirm = group.get('confirmPassword').value;
    let validEqual: boolean = (password === pConfirm);
    console.log('两次输入密码比较' + validEqual);
    return validEqual ? null : { 'equal': { errorInfor: '前后两次输入密码不同' } };
}
/*验证输入数值是否为正数*/
export function positiveNumberValidator(control: AbstractControl): any {
    if (!control.value) {
        return null;
    }
    const prices = parseInt(control.value, 10);
    if (prices > 0) {
        return null;
    } else {
        return { positiveNumber: true };
    }
}

/* 异步验证登录名是否重复 */
// export function 

/*  校验邮编 和 校验电话*/
// usernameValidator(control: FormControl): any {
//   if (!control.value)
//     return null;
//   var emailReq = /\w@\w*\.\w/;
//   // var mobileReq = /^(13[0-9]{9})|(15[89][0-9]{8})$/;
//   let emaiValid = emailReq.test(control.value);
//   // let mobileValid = mobileReq.test(control.value);
//   // if (emaiValid)
//   console.log('邮箱校验' + emaiValid);
//   return emaiValid ?  null : { 'username': { errorInfor: '邮箱格式错误' } };
//   // else (mobileValid)
//   //   return mobileValid ? null : { mobile: { error: '电话号码错误' } };
// }
