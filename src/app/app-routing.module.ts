import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NopageComponent} from './nopage/nopage.component';
import { HomeComponent} from './home/home.component';
import { RegisterComponent} from './register/register.component';
// import { LoginComponent } from './login/login.component';
import { PersonalCenterComponent} from './personal-center/personal-center.component';
// import { LoginOKComponent } from './login-ok/login-ok.component';
import { PersonalInformationEditComponent } from './personal-center/personal-information-edit/personal-information-edit.component';
// import { LoginNoComponent } from './login-no/login-no.component';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { AuthGuard } from './shared/can-active-guard';
import { TestComponent } from './test/test.component';
import { SearchHomeComponent } from './search-home/search-home.component';
/* 移除路径
  { path: 'loginOK/:id', component: LoginOKComponent},
  { path: 'loginNo', component: LoginNoComponent},
 */
const routeConfig: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'personOK', component: PersonalCenterComponent},
  { path: 'person', component: PersonalInformationEditComponent, canDeactivate: [CanDeactivateGuard], canActivate: [AuthGuard],},
  { path: 'searchhome', component: SearchHomeComponent},
  { path: 'test', component: TestComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NopageComponent}
];
/* 
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard],},
  { path: 'register', component: RegisterComponent},
  { path: 'search', component: SearchComponent},

*/
@NgModule({
  imports: [
    RouterModule.forRoot(
      routeConfig
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
