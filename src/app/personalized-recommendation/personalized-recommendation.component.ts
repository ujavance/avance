import { Component, OnInit } from '@angular/core';
import {Information} from '../recommend/information.component';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-personalized-recommendation',
  templateUrl: './personalized-recommendation.component.html',
  styleUrls: ['./personalized-recommendation.component.css']
})
export class PersonalizedRecommendationComponent implements OnInit {

  infors: Information[];
  constructor(private productService: ProductService) { 
    /* 获得猜你喜欢推荐信息 */
    this.productService.getPersonalizedRecommendation().subscribe(
      data => {
        this.infors = data;
      }
    );
  }
  ngOnInit() {

  }

}
