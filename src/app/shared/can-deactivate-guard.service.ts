import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { PersonalInformationEditComponent } from '../personal-center/personal-information-edit/personal-information-edit.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<PersonalInformationEditComponent> {

  canDeactivate(
    component: PersonalInformationEditComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // Get the Crisis Center ID
    console.log(route.paramMap.get('id'));

    // Get the current URL
    console.log(state.url);

    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (component.formModel.valid) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return component.canDeactivate();
  }
}