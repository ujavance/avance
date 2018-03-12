import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class MycookieService {

  constructor(private cookieService: CookieService) { }
  getCookie(key: string) {
    return this.cookieService.get(key);
  }
  setStrCookie(key: string, value: string) {
    return this.cookieService.put(key, value);
  }
  setObjCookie(key: string, value: Object) {
    return this.cookieService.putObject(key, value);
  }
  removeCookie(key: string) {
    return this.cookieService.remove(key);
  }
  removeAllCookie() {
    return this.cookieService.removeAll();
  }
}
