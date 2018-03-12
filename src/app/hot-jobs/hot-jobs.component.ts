import { Component, OnInit } from '@angular/core';
import {Information} from '../recommend/information.component';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-hot-jobs',
  templateUrl: './hot-jobs.component.html',
  styleUrls: ['./hot-jobs.component.css']
})
export class HotJobsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  title = '最热职位';
  subTitle = '根据搜索推荐';
  infors: Information[];
  ngOnInit() {    
    this.productService.getHotJobs().subscribe( date => {
      this.infors = date;
    });
  }

}
