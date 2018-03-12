import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import
  * as $
  from
  'jquery';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  option0: any;
  
  
  randomData() {
  return Math.round(Math.random() * 1000);
}
  constructor(
    private ps: ProductService 
  ) { 
    this.ps.getGlyphicon().subscribe(
      data => {
        this.option0 = data;        
      }
    )
    
    
  }
  ngOnInit() {
    /* 跳到指定锚点 */
    // $('#ulNav').on('click', 'li', function (e) {
    //   var target = e.target;
    //   var id = $(target).data("to");
    //   // console.log(target);
    //   // console.log(id);
    //   console.log(id);
    //   $('html,body').animate({ scrollTop: $('#' + id).offset().top }, 800);
    // });
    /* 滚动判断 */
    // $(window).scroll(function () {
    //   var windowHeight = $(window).height();        //获取浏览器窗口高度
    //   var documentHeight = $(document).height();        //获取文档高度
    //   var temp = windowHeight - documentHeight;
    //   // console.log('document' + documentHeight + ' window ' + windowHeight + ' temp ' + temp);
    //   // if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
    //   //   alert("滚动条已经到达底部为" + $(document).scrollTop());
    //   // }

    //   // var sc = $(window).scrollTop();
    //   // var rwidth = $(window).width() + $(document).scrollLeft();
    //   // var rheight = $(window).height() + $(document).scrollTop();
    //   // if (sc > 0) {
    //   //   $("#goTop").css("display", "block");
    //   //   $("#goTop").css("left", (rwidth - 80) + "px");
    //   //   $("#goTop").css("top", (rheight - 120) + "px");
    //   // } else {
    //   //   $("#goTop").css("display", "none");
    //   // }
    // });
  }

}
