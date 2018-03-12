import { Component, OnInit } from '@angular/core';
import {Information} from '../../recommend/information.component';
import {ProductService} from '../../shared/product.service';

@Component({
  selector: 'app-matching-records',
  templateUrl: './matching-records.component.html',
  styleUrls: ['./matching-records.component.css']
})
export class MatchingRecordsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  title = '匹配记录';
  subTitle = '根据搜索推荐';
  infors: Information[];
  ngOnInit() {
    
    this.productService.getRecommendInformation().subscribe(
      data => { this.infors = data }
    );
  }

}
