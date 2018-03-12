import { Component, OnInit } from '@angular/core';
import { Information} from './information.component';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  constructor(private productService: ProductService) { }
  title = '智能推荐';
  subTitle = '根据大数据推荐';
  infors: Information[];

  ngOnInit() {
    
    this.productService.getRecommendInformation().subscribe( date => {
      this.infors = date;
    });
  }

}
