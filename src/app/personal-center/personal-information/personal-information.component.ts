import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { PersonalInformation } from '../../bean/PersonalInformation';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  personInfor: PersonalInformation;
  constructor(
    private ps: ProductService
  ) { 
    /* 
      来源：
      使用：
     */
    this.ps.resultEvent.subscribe(
      data => {
        console.log('收到从Navbar传来的数据。');
        console.log(data);
        this.personInfor = data['result'];
      }
    )
    /* 获取个人信息  */
    this.ps.getPersonalInformation().subscribe(
      data => {
        console.log('获取个人信息 ');
        console.log(data);
      }
    )
  }

  ngOnInit() {}

}
