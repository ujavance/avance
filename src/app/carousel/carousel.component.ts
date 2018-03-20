import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import { CarouselInformation } from '../bean/CarouselInformation';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carouselinfors: CarouselInformation[];
  /* 显示一张图片占位  */
  isshowcarousel = true;
  constructor(private ps: ProductService) {
    this.ps.getCarouselInformation().subscribe(date => {
      console.log(date);
      /* 去除占位图片 */
      this.isshowcarousel = false;
      this.carouselinfors = date;
    });
    console.log("轮播组件数据");
    console.log(this.carouselinfors);
  }
  ngOnInit() {}
}
