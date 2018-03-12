import {Injectable} from '@angular/core';
import {Information} from '../recommend/information.component';
import {PersonalizedRecommendationComponent} from '../personalized-recommendation/personalized-recommendation.component';
import {HotJobsComponent} from '../hot-jobs/hot-jobs.component';
import {CarouselInformation} from '../bean/CarouselInformation';
import {JobSearchParams} from '../bean/JobSearchParams'; 
import { LoginParams } from '../bean/LoginParams'; 
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseInformation } from '../bean/ResponseInformation';
import { PersonalInformation } from '../bean/PersonalInformation';
import { PersonalJson } from '../bean/PersonalJson';
import { EventEmitter } from '@angular/core';
import { RegisterInfor } from '../bean/RegisterInfor';
import { SearchKey } from '../bean/SearchKey';
import { RegisterOrLogin } from '../bean/RegisterOrLogin';
import { PersonalEdit } from '../bean/PersonalEdit';

@Injectable()
export class ProductService {
  private infors: Information[];

  private carouselInfor: CarouselInformation[];

  /* 
    states: 个人中心页面返回的数据结果
    user: personal-information。component。ts和 navbar.ts
   */
  public resultEvent: EventEmitter<PersonalInformation> = new EventEmitter();

  /* 登录页面发出的信号 */
  public isLogin: EventEmitter<string> = new EventEmitter();

  constructor(
    private http: HttpClient
  ) {}
  /* 个人信息表单，下拉框选择项数据 */
  getPersonalEdit(){
    return this.http.get<PersonalEdit>('/sots/personalEdit');
  }
  /* 获得查询结果 */
  search(para: Object):Observable<Information> {
   /*  const paramSearch = this.encodeParams(para);
    console.log(' 查询参数： ' + paramSearch);
    this.http.post('/sots/information', { params: paramSearch }).subscribe();;  */
    return this.http.post<Information>('/sots/searchResult', para);
  }

  /* 获得查询关键字 */
  getSearchParams(): Observable<SearchKey> {
    return this.http.get<SearchKey>('/sots/searchKeyword');
  }

  /* 获得图表 */
  getGlyphicon() {
    return this.http.get('/sots/glyphicon');
  }
  /* 获得个人信息 */
  getPersonalInformation(): Observable<PersonalJson>{
    return this.http.get<PersonalJson>('/sots/getPersonalInformation');
  }
  /* 提交个人信息 */
  postPersonalInformation(params: PersonalInformation): Observable<Object>{
    return this.http.post<Object>('/sots/postPersonalInformation', params);
  }

  /* 提交登录信息 */
  getLoginInfor(param: LoginParams): Observable<ResponseInformation>{
    return this.http.post <ResponseInformation>('/sots/logIn', param);
  }
  /* 提交注册信息 */
  getRegisterInfor(param: RegisterInfor){
    return this.http.post<ResponseInformation>('/sots/registered', param);
  }
  /* 构建查询参数 */
  encodeParams(param: JobSearchParams) {
    return Object.keys(param).filter(key => param[key])
      .reduce((sum: HttpParams, key: string) => {
        if (key == 'skills') {
          for (let index = 0; index < param[key].length; index++) {
            if (param[key][index]["skillInfor"]) {
              sum = sum.set('skills'+index, param[key][index]["skillInfor"]); 
            }                   
            console.log(key + '***' + param[key][index]["skillInfor"]);    
          }          
        } else {
          sum = sum.set(key, param[key]);
        }
        return sum;
      }, new HttpParams()); 
  }
 
  /* 轮播数据 */
  getCarouselInformation(): Observable<CarouselInformation[]> {
    return this.http.get<CarouselInformation[]>('/sots/carouselData');  
  }
  /* 最热职业 */
  getHotJobs(): Observable<Information[]> {
    return this.http.get<Information[]>('/sots/hotJob');
  }
  /* 智能推荐信息 */
  getRecommendInformation(): Observable<Information[]> {
    return this.http.get<Information[]>('/sots/recommendInformation');
  }
 
  /* 猜你喜欢 */
  getPersonalizedRecommendation(): Observable<Information[]> {
    return this.http.get<Information[]>('/sots/recommendInformation');
  }

  getAllCategories(): string[] {
    return ['jjj', 'kkk', 'lll', 'yyy'];
  }
}
