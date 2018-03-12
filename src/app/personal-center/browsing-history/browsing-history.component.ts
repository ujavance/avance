import { Component, OnInit } from '@angular/core';
import {Information} from '../../recommend/information.component';
import {ProductService} from '../../shared/product.service';

@Component({
  selector: 'app-browsing-history',
  templateUrl: './browsing-history.component.html',
  styleUrls: ['./browsing-history.component.css']
})
export class BrowsingHistoryComponent implements OnInit {

  constructor(private productService: ProductService) { }
  public title: string;
  public subTitle: string;
  public infors: Information[];
  ngOnInit() {
    this.title = '最近搜索';
    this.subTitle = '根据搜索推荐';
    this.productService.getRecommendInformation().subscribe(
      data => { this.infors = data}
    );
  }

}
