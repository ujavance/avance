import { Directive, Input, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Directive({
    selector: '[user-async]',
    exportAs: 'userAsync',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: forwardRef(() => UserAsyncDirective),
        multi: true
    }]
})
export class UserAsyncDirective implements Validator {
    constructor(
        private http: HttpClient
    ) {

    }
    validate(c: AbstractControl): Observable<any> {
        return c.valueChanges
            // 去抖
            .debounceTime(300)
            // 抑制重复值
            .distinctUntilChanged()
            // 1、可以使用flatMap进行远程校验
            .flatMap(value => {
                let result = '';
                // this.http.post('/sots/postuserName', { 'username': value }).subscribe(
                //     data => {
                //         result = data['msg'];
                //     }
                // );
                return this.http.post('/sots/postuserName', { 'username': value });
                // console.log(result);
                // if (result != null) {
                //     console.log('改名字已经注册 :' + value);
                //     return Observable.of({
                //         mobile: {
                //             msg: '手机号为黑名',
                //             actualValue: value
                //         }
                //     });
                // }
                // console.log('校验成功');
                // return null;
            })
            // 2、本地模拟判断
            // .map((value: string) => {
            //     const result = this.http.post('/sots/postuserName', { 'username': value});
            //     if (result != null) {
            //         console.log('改名字已经注册 :'+ value);
            //         return {
            //             mobile: {
            //                 msg: '手机号为黑名',
            //                 actualValue: value
            //             }
            //         }
            //     }
            //     console.log('校验成功');
            //     return null;
            // })
            .first();
    }
}