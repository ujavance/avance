import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {


  compsize = [
    {
      name: '100-200',
      max: 6000
    }, {
      name: '200-300',
      max: 16000
    }, {
      name: '300-400',
      max: 30000
    }, {
      name: '400-450',
      max: 35000
    }, {
      name: '450以上',
      max: 50000
    }, {
      name: '低于100',
      max: 25000
    }];
  option0 = {
    // 雷达图
    title: {
      text: '雷达图'
    },
    tooltip: {},
    legend: {
      top: 20,
      itemWidth: 12,
      itemHeight: 12,
      data: ['预算分配（Allocated Budget）'],
      textStyle: {
        color: '#fff'
      }
    },
    radar: {
      radius: '60%',
      splitNumber: 8,
      axisLine: {
        lineStyle: {
          color: '#fff',
          opacity: .2
        }
      },
      splitLine: {
        lineStyle: {
          color: '#fff',
          opacity: .2
        }
      },
      splitArea: {
        areaStyle: {
          color: 'rgba(127,95,132,.3)',
          opacity: 1,
          shadowBlur: 45,
          shadowColor: 'rgba(0,0,0,.5)',
          shadowOffsetX: 0,
          shadowOffsetY: 15,
        }
      },
      indicator: this.compsize
    },
    series: [{
      name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',
      symbolSize: 0,
      areaStyle: {
        normal: {
          shadowBlur: 13,
          shadowColor: 'rgba(0,0,0,.2)',
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          opacity: 1
        }
      },
      data: [{
        value: [5000, 7000, 12000, 11000, 15000, 14000],
        name: '预算分配（Allocated Budget）',
      }]
    }],
    color: ['#ef4b4c', '#b1eadb'],
    backgroundColor: {
      type: 'radial',
      x: 0.4,
      y: 0.4,
      r: 0.35,
      colorStops: [{
        offset: 0,
        color: '#895355' // 0% 处的颜色
      }, {
        offset: .4,
        color: '#593640' // 100% 处的颜色
      }, {
        offset: 1,
        color: '#39273d' // 100% 处的颜色
      }],
      globalCoord: false // 缺省为 false
    }
  };

  /* 
    公司数量 与 城市
    X ： 城市
    Y ： 公司数量
  */
  userExper = [
    { value: 335, name: '北京' },
    { value: 310, name: '上海' },
    { value: 274, name: '深圳' },
    { value: 235, name: '南京' }
  ];
  option8 = {
    backgroundColor: '#2c242c',
    title: {
      text: '公司数量与城市',
      subtext: "根据公司信息计算所得",
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b} <br/> {c} ({d}%)"
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: '公司数量与城市',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: this.userExper.sort(function (a, b) { return a.value - b.value; }),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: '#ddd',
              fontSize: "16"
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: '#f00'
            },
            smooth: 0.2,
            length: 30,
            length2: 30
          }
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };

  /*   
    公司规模 和 人才需求量
  */
  Xskill = [
    '50-100',
    '100-200',
    '200-300',
    '300-400',
    '400-500',
    '500以上',];
  Yneed = [23.2, 25.6, 76.7, 20.0, 6.4, 3.3];
  /* x轴 公司规模 Y轴 人才需求量 */
  option3 = {
    backgroundColor: "#414B60",
    color: ['#ffd285', '#ff733f', '#ec4863'],
    title: {
      text: '公司规模和人才需求量',
      subtext: '根据招聘信息分析所得',
      x: 'center',
      top: 10,
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      top: "25%",
    },
    tooltip: {
      trigger: 'axis'
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: this.Xskill,
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          rotate: 40,
          textStyle: {
            color: '#fff'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        "axisLine": {
          lineStyle: {
            color: '#fff'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#666'
          }
        },
        "axisTick": {
          "show": false
        },
        axisLabel: {
          textStyle: {
            color: '#fff'
          }
        },
      }
    ],
    series: [
      {
        type: 'bar',
        barWidth: 18,
        data: this.Yneed,
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        }
      }
    ]
  };

  /* 
    招聘数量（Y轴）公司数量
    地点（折线） 城市
    薪水（X轴） 公司类型
    圆环图: 数量和薪水
    注意：只能返回三个城市
  */
  pinplace = ["上海", "南京", "深圳", "深"];
  xsalary = ['创业', '上市', '传统', '其他', '周五', '周六', '周日'];
  data4 = [
    { name: "上海", value: [90, 50, 39, 50, 120, 82, 80] },
    { name: "南京", value: [70, 50, 50, 87, 90, 80, 70] },
    { name: "深圳", value: [290, 200, 20, 132, 15, 200, 90] },
    { name: "深", value: [290, 200, 20, 132, 15, 200, 90] }
  ];
  datasalary = [
    { value: 335, name: '直接访问' },
    { value: 310, name: '邮件营销' },
    { value: 234, name: '联盟广告' },
    { value: 135, name: '视频广告' },
    { value: 1548, name: '搜索引擎' }
  ];
  datajobnumber = [
    { value: 335, name: '直接访问' },
    { value: 310, name: '邮件营销' },
    { value: 234, name: '联盟广告' },
    { value: 135, name: '视频广告' },
    { value: 1548, name: '搜索引擎' }
  ];
  option4 = {
    backgroundColor: "#404A59",
    color: ['#ffd285', '#ff733f', '#ec4863'],
    title: [{
      text: '公司城市分布',
      subtext: "根据公司信息计算所得",
      left: '1%',
      top: '3%',
      textStyle: {
        color: '#fff'
      }
    }, {
      text: '工资分布',
      left: '83%',
      top: '6%',
      textAlign: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    {
      text: '职位分布',
      left: '83%',
      top: '56%',
      textAlign: 'center',
      textStyle: {
        color: '#fff'
      }
    }
    ],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      x: 300,
      top: '7%',
      textStyle: {
        color: '#ffd285',
      },
      data: this.pinplace
    },
    grid: {
      left: '1%',
      right: '35%',
      top: '16%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      "axisLine": {
        lineStyle: {
          color: '#FF4500'
        }
      },
      "axisTick": {
        "show": false
      },
      axisLabel: {
        rotate: 50,
        textStyle: {
          color: '#fff'
        }
      },
      boundaryGap: false,
      data: this.xsalary,
    },
    yAxis: {
      "axisLine": {
        lineStyle: {
          color: '#fff'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#fff'
        }
      },
      "axisTick": {
        "show": false
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      type: 'value'
    },
    series: [
      {
        name: this.data4[0].name,
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: this.data4[0].value
      }, {
        name: this.data4[1].name,
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: this.data4[1].value
      }, {
        name: this.data4[2].name,
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: this.data4[2].value
      },
      // 右侧圆环图
      {
        name: 'tt',
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // 位置
        center: ['83%', '30%'],
        type: 'pie',
        radius: ['25%', '30%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: true,
            position: 'outside'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: true,
            length: 6,
            length2: 6
          }
        },
        data: this.datasalary
      },
      // 以上构成一个扇形图片
      {
        name: 'tt',
        // 位置
        center: ['83%', '80%'],
        type: 'pie',
        radius: ['25%', '30%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true,
            textStyle: {
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: true,
            length: 6,
            length2: 6
          }
        },
        data: this.datajobnumber
      }]
  }

  /* 
    公司性质占比
    类型 ：环状图
  */
  /* 
    scale 文字缩放比例
    jobnumber 职位数量
   */
  scale = 1;
  jobnumber = [
    {
      value: 158,
      name: '上市公司'
    }, {
      value: 41,
      name: '创业公司'
    }, {
      value: 64,
      name: '互联网行业'
    }, {
      value: 37,
      name: '其他'
    }]
  rich = {
    yellow: {
      color: "#ffc72b",
      fontSize: 30 * this.scale,
      padding: [5, 4],
      align: 'center'
    },
    total: {
      color: "#ffc72b",
      fontSize: 40 * this.scale,
      align: 'center'
    },
    white: {
      color: "#fff",
      align: 'center',
      fontSize: 14 * this.scale,
      padding: [21, 0]
    },
    blue: {
      color: '#49dff0',
      fontSize: 16 * this.scale,
      align: 'center'
    },
    hr: {
      borderColor: '#0b5263',
      width: '100%',
      borderWidth: 1,
      height: 0,
    }
  } 
  option6 = {
    backgroundColor: '#55525d',
    title: {
      text: '公司总数类型',
      subtext:"根据公司信息计算所得",
      left: 'center',
      top: 'center',
      padding: [24, 0],
      textStyle: {
        color: '#fff',
        fontSize: 18 * this.scale,
        align: 'center'
      }
    },
    series: [{
      name: '总考生数量',
      type: 'pie',
      radius: ['42%', '50%'],
      hoverAnimation: false,
      color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
      label: {
        normal: {
          formatter: function (params, ticket, callback) {
            return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + params.percent + '%}';
          },
          rich: this.rich
        },
      },
      labelLine: {
        normal: {
          length: 55 * this.scale,
          length2: 0,
          lineStyle: {
            color: '#0b5263'
          }
        }
      },
      data: this.jobnumber
    }]
  };

  // 公司行业占比
  majortype = [
    { value: 335, name: '直接访问' },
    { value: 310, name: '邮件营销' },
    { value: 274, name: '联盟广告' },
    { value: 235, name: '视频广告' },
    { value: 400, name: '搜索引擎' }
  ];
  option7 = {
    backgroundColor: '#2c343c',
    title: {
      text: '公司行业分析',
      subtext: "根据公司信息计算所得",
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b} <br/> {c} ({d}%)",
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: '公司行业',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: this.majortype.sort(function (a, b) { return a.value - b.value }),
        roseType: 'angle',
        label: {
          normal: {
            textStyle: {
              // color: 'rgba(255, 255, 255, 0.3)'
              color: '#ddd'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            // color: '#c23531',
            color: "#ddd",
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  ngOnInit() { }
  constructor() { }

}
