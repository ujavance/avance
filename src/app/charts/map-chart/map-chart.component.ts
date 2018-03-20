import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css']
})
export class MapChartComponent implements OnInit {

  locations = [{
    salary: 31.9271,
    cityname: "上海",
    sum: 930,
    coord: [121.472644, 31.231706]
  }, {
    cityname: '北京',
    coord: [116.405285, 39.904989],
    salary: 19.4617,
    sum: 1354
  }, {
      cityname: '广东',
      sum: 300,
      salary: 10.4617,
    coord: [113.280637, 23.839463714285714]
  }];

  option = {
    series: [
      {
        name: '中国',
        type: 'map',
        mapType: 'china',
        label: {
          normal: {
            show: true,
            trigger: 'item',
            position: 'inside',
            formatter: function (a) {
              // console.log(a);
              return '所在城市\t\t' 
              + a.name
              + '\n职位数量\t\t' 
              + a.data.num
                + '\n薪资\t\t' 
              + a.value;
            }
          },
          emphasis: {
            show: false,
            color: '#fff',
            fontSize: 18,
            lineHeight: 18,
            backgroundColor: '#323',
            padding: [10, 5]
            // 文字提示框颜色
          }
        },
        itemStyle: {
          // 地图块颜色
          emphasis: {
            areaColor: '#f00',
            color: '#0f0',
            borderColor: '#f00'
          }
        },
        silent: true
      }
    ]
  };
  clear: any;
  echartsIntance:any;
  title = "各个城市的分析数据";
  subTitle = "根据招聘岗位分析所得";
  onChartInit(ec) {
    this.echartsIntance = ec;
  }
  constructor(
  ) {
    console.log(this.locations[0]);
    // let echarts = this.es.init;
    let currentLoc = 0;
    this.clear = setInterval( () => {
      // console.log(this.locations);
      
      let l = this.locations[currentLoc].coord;
      let name = this.locations[currentLoc].cityname;
      let value = this.locations[currentLoc].salary;
      let num = this.locations[currentLoc].sum;
      this.echartsIntance.setOption({
        series: [{
          center: l,
          zoom: 4,
          data: [
            {
              name: name,
              value: value,
              num: num,
              selected: true
            }
          ],
          animationDurationUpdate: 1000,
          animationEasingUpdate: 'cubicInOut'
        }]
      });
      currentLoc = (currentLoc + 1) % this.locations.length;
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.clear);
  }

  ngOnInit() {
  }

}
