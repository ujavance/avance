import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ProductService } from './shared/product.service';
import { FilterPipe } from './pipe/filter.pipe';
// import { WebSocketService } from './shared/web-socket.service';

import { CookieModule } from 'ngx-cookie';


import { AppRoutingModule} from './app-routing.module';
import { PersonalCenterModule} from './personal-center/personal-center.module';

import { NopageComponent } from './nopage/nopage.component';
import { RegisterComponent } from './register/register.component';
import { RecommendComponent } from './recommend/recommend.component';
import { HotJobsComponent } from './hot-jobs/hot-jobs.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { PersonalizedRecommendationComponent} from './personalized-recommendation/personalized-recommendation.component';
// import { InformationTempleComponent } from './information-temple/information-temple.component';
import { FooterComponent } from './footer/footer.component';
import { MycookieService } from './shared/mycookie.service';
// import { LoginComponent } from './login/login.component';
// import { LoginOKComponent } from './login-ok/login-ok.component';
// import { LoginNoComponent } from './login-no/login-no.component';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
// import { DialogService } from './shared/dialog.service';


import { ModalModule } from 'ngx-bootstrap/modal';

import { TestComponent } from './test/test.component';
import { AuthGuard } from './shared/can-active-guard';
import { AuthService } from './shared/auth.service';


// import { ModalContentComponent } from './modal-content/modal-content.component';
import { SigninComponent } from './signin/signin.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './shared/modal-service';
import { UserAsyncDirective } from './validators/UserMobileDirective ';
import { SearchHomeComponent } from './search-home/search-home.component';
import { ChartsComponent } from './charts/charts.component';
import { UserChartsComponent } from './charts/user-charts/user-charts.component';
import { JobChartsComponent } from './charts/job-charts/job-charts.component';
import { ChartsModule } from './charts/ChartsModule';
import { MapChartComponent } from './charts/map-chart/map-chart.component';

/* 
移除模块 
    LoginOKComponent,
    LoginNoComponent,
    LoginComponent,
    ModalContentComponent,
    DialogService,c
    InformationTempleComponent,
    SearchComponent,

 */
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    
    NavbarComponent,
    FilterPipe,
    NopageComponent,
    RegisterComponent,
    RecommendComponent,
    HotJobsComponent,
    PersonalCenterComponent,
    PersonalizedRecommendationComponent,
    FooterComponent,    
    TestComponent,    
    SigninComponent,
    ModalComponent,
    SearchHomeComponent,
    UserAsyncDirective,
    ChartsC,
    MapChartComponentomponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PersonalCenterModule,
    ChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CookieModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    ProductService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    MycookieService,
    CanDeactivateGuard,    
    AuthGuard,
    AuthService,
    ModalService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SigninComponent,
    ModalComponent,
    RegisterComponent
  ]
})
export class AppModule {}
