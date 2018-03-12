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
  constructor(private ps: ProductService) { 
    this.ps.getCarouselInformation().subscribe(date => {
      console.log(date);
      this.carouselinfors = date;
    });
    console.log("轮播组件数据");
    console.log(this.carouselinfors);
  }
  ngOnInit() {
  }
}
