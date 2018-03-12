import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
export class validators {

    mobileValidator(control: FormControl): any {
        let myReg = /^1(3|4|5|7|8)+\d{9}$/;
        let valid = myReg.test(control.value);
        console.log("moblie的校验结果是" + valid)
        return valid ? null : { mobile: true };//如果valid是true 返回是null
    }
   
    euqalValidator(group: FormGroup): any {
        let password: FormControl = group.get("password") as FormControl;
        let pwconfrim: FormControl = group.get("pwconfrim") as FormControl;
        let valid: boolean = (password.value === pwconfrim.value);
        console.log("密码校验结果是" + valid);
        return valid ? null : { equal: { descx: "密码和确认密码不匹配" } };
    }
}
