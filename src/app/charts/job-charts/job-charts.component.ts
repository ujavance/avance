import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-charts',
  templateUrl: './job-charts.component.html',
  styleUrls: ['./job-charts.component.css']
})
export class JobChartsComponent implements OnInit {

  timedata = [
    "03-05",
    "03-06",
    "03-07",
    "03-08",
    "03-09",
    "03-10",
    "03-11",
    "03-12",
    "03-13",
    "03-14",
    "03-15",
  ];
  jobnum = [
    116, 128, 102, 200, 204, 231, 222, 321, 343, 345
  ]
  // 纵坐标最大值
  ymax = 1000;
  /* 近十天招聘岗位数量 */
  option3 = {
    backgroundColor: '#293042',
    visualMap: [{
      show: false,
      type: 'continuous',
      seriesIndex: 0,
      min: 0,
      max: this.ymax
    }],
    title: {
      text: '近十天岗位招聘数量变化',
      subtext: '基于招聘网站分析所得',
      textStyle: {
        color: "#fff",
      },
      left:"center",
      top:10
    },
    tooltip: {
      trigger: 'axis',
      formatter: "日期 ：{b}<br/>招聘岗位： {c}"
    },
    xAxis: [{
      data: this.timedata,
      axisLine: {
        lineStyle: {
          color: '#6995aa'
        },
        onZero: true
      },
    }],
    yAxis: [{
      name: "（人）",
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#6995aa'
        },
        onZero: true
      },
    }],
    series: [{
      type: 'line',
      showSymbol: false,
      data: this.jobnum
    }]
  };
  
  /* 技能热度和需求量 */
  Xskill = [
    'Python',
    'Java',
    'Spring',
    'mysql',
    'oracle',
    'mybatis',
    'springmvc',
    'jquery', 'redis', 'css'];
  Yneed = [7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3];
  /* x轴 技能， Y轴 需要人数 */
  option4 = {
    backgroundColor: '#011c3a',
    title: {
      text: '岗位需求技能和岗位数量',
      subtext: '根据招聘信息分析所得',
      textStyle: {
        color: "#fff",
      },
      left: 'center',
      top: 10
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      data: this.Xskill,
      axisLine: {
        lineStyle: {
          color: '#0177d4'
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 14,
        interval: 0,
        rotate: 30
      }
    },
    yAxis: {
      name: "(个)",
      nameTextStyle: {
        color: '#fff',
        fontSize: 16
      },
      axisLine: {
        lineStyle: {
          color: '#0177d4'
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 16
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#0177d4'
        }
      }
    },
    series: [{
      type: 'bar',
      barWidth: 18,
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#00b0ff' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#7052f4' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        }
      },
      data: this.Yneed
    }]
  };

  skills = [
    { name: 'jsp', value: 1186, },
    { name: 'ajax', value: 1344 },
    {
      name: 'struts',
      value: 1360
    }, {
      name: 'css',
      value: 1590
    }, {
      name: 'html',
      value: 1602
    }, {
      name: 'jquery',
      value: 1871
    }, {
      name: 'tomcat',
      value: 2022
    }, {
      name: 'hibernate',
      value: 2143
    }, {
      name: 'javascript',
      value: 2167
    }, {
      name: 'redis',
      value: 2390
    }, {
      name: 'springmvc',
      value: 2570
    }, {
      name: 'sql',
      value: 2693
    }, {
      name: 'web',
      value: 2814
    }, {
      name: 'mybatis',
      value: 2900
    }, {
      name: 'linux',
      value: 2932
    }, {
      name: 'oracle',
      value: 3081
    }, {
      name: 'spring',
      value: 4485
    }, {
      name: 'mysql',
      value: 4992
    }, {
      name: 'java',
      value: 11395
    }];
  /*职位技能 -- 词云图 */
  option6 = {
    title: {
      text: '招聘技能',
      subtext: '根据招聘信息分析所得',
      textStyle: {
        color: "#011c3a",
      },
      left: 'center',
    },
    tooltip: {},
    series: [{
      type: 'wordCloud',
      gridSize: 20,
      sizeRange: [12, 50],
      rotationRange: [0, 0],
      shape: 'circle',
      textStyle: {
        normal: {
          color: function () {
            return 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')';
          }
        },
        emphasis: {
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      data: this.skills
    }]
  };

  /* 岗位薪资TOP */
  jobTopX = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370];
  jobTopY = ['大数据工程师', '原因2', '原因3', '原因4', '原因5', '原因6', '原因7', '原因8', '原因9', '原因10'];
  option7 = {
    backgroundColor: '#0f375f',
    title: [
      {
        text: "岗位薪资TOP10",
        subtext: "根据岗位薪资平均值计算所得",
        x: '40%',
        y: '5%',
        textStyle: {
          color: "#fff",
          fontSize: "14"
        }
      },
    ],
    grid: [
      { x: '20%', y: '20%' },
    ],
    tooltip: {
      formatter: '{b} ({c})'
    },
    xAxis: [
      {
        gridIndex: 0,
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        }, splitLine: { show: false }, axisLine: { show: false }
      },
    ],
    yAxis: [
      {
        gridIndex: 0, interval: 0, data: this.jobTopY.reverse(),
        axisTick: { show: false }, axisLabel: { show: true }, splitLine: { show: false },
        axisLine: { show: true, lineStyle: { color: "#eee" } },
      }
    ],
    series: [
      {
        name: 'name',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0, barWidth: '45%',
        itemStyle: { normal: { color: '#86c9f4' } },
        label: {
          normal: {
            show: true,
            position: "right",
            textStyle: {
              color: "#eee"
            }
          }
        },
        data: this.jobTopX.sort(),
      },
    ]
  };

  welfare = [
    { name: '五险一金', value: 1186, },
    { name: 'ajax', value: 1344 },
    {
      name: 'struts',
      value: 1360
    }, {
      name: 'css',
      value: 1590
    }, {
      name: 'html',
      value: 1602
    }, {
      name: 'jquery',
      value: 1871
    }, {
      name: 'tomcat',
      value: 2022
    }, {
      name: 'hibernate',
      value: 2143
    }, {
      name: 'javascript',
      value: 2167
    }, {
      name: 'redis',
      value: 2390
    }, {
      name: 'springmvc',
      value: 2570
    }, {
      name: 'sql',
      value: 2693
    }, {
      name: 'web',
      value: 2814
    }, {
      name: 'mybatis',
      value: 2900
    }, {
      name: 'linux',
      value: 2932
    }, {
      name: 'oracle',
      value: 3081
    }, {
      name: 'spring',
      value: 4485
    }, {
      name: 'mysql',
      value: 4992
    }, {
      name: 'java',
      value: 11395
    }];
  /*职位福利 --词云图 */
  option5 = {
    title: {
      text: "职位福利",
      subtext: '根据招聘信息分析所得',
      textStyle: {
        color: "#011c3a",
      },
      left: 'center',
    },
    tooltip: {},
    series: [{
      type: 'wordCloud',
      gridSize: 20,
      sizeRange: [12, 50],
      rotationRange: [0, 0],
      shape: 'circle',
      textStyle: {
        normal: {
          color: function () {
            return 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')';
          }
        },
        emphasis: {
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      data: this.welfare
    }]
  };
  
  /* 
      城市与平均工资
      注意 ：扇形部分面积 只能返回九个
   */
  city = ['西安', '郑州', '成都', '武汉', '杭州', '北京', '上海', '南京', '深圳'];
  citysalary = [
    {
      value: 600.58,
      name: '武汉'
    },
    {
      value: 1100.58,
      name: '杭州'
    },
    {
      value: 1200.58,
      name: '西安'
    },
    {
      value: 1300.58,
      name: '北京'
    },
    {
      value: 1400.58,
      name: '郑州'
    },
    {
      value: 1500.58,
      name: '成都'
    },
    {
      value: 1500.58,
      name: '上海'
    },
    {
      value: 1600.58,
      name: '南京'
    },
    {
      value: 1800,
      name: '深圳',
    },
    {
      value: 0,
      name: "",
      label: {
        show: false
      },
      labelLine: {
        show: false
      }
    },
    {
      value: 0,
      name: "",
      label: {
        show: false
      },
      labelLine: {
        show: false
      }
    },
    {
      value: 0,
      name: "",
      label: {
        show: false
      },
      labelLine: {
        show: false
      }
    },
    {
      value: 0,
      name: "",
      label: {
        show: false
      },
      labelLine: {
        show: false
      }
    },
    {
      value: 0,
      name: "",
      label: {
        show: false
      },
      labelLine: {
        show: false
      }
    },
    {
      value: 0,
      name: "",
      label: {
        show: false
      },
      labelLine: {
        show: false
      }
    },
    {
      value: 0,
      name: "",
      label: {
        show: false
      },
      labelLine: {
        show: false
      }
    },
    {
      value: 0,
      name: "",
      label: {
        show: false
      },
      labelLine: {
        show: false
      }
    },
    {
      value: 0,
      name: "",
      label: {
        show: false
      },
      labelLine: {
        show: false
      }
    }];
  option8 = {
    backgroundColor: '#0a1235',
    tooltip: {
      trigger: 'item',
      formatter: "{b} : <br/> {c}"
    },
    legend: {
      x: 'center',
      y: '15%',
      data: this.city,
      icon: 'circle',
      textStyle: {
        color: '#fff',
      }
    },
    calculable: true,
    series: [{
      name: 'kk',
      type: 'pie',
      //起始角度，支持范围[0, 360]
      startAngle: 0,
      //饼图的半径，数组的第一项是内半径，第二项是外半径
      radius: [41, 153.75],
      //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
      center: ['50%', '35%'],
      //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
      // 'radius' 面积展现数据的百分比，半径展现数据的大小。
      //  'area' 所有扇区面积相同，仅通过半径展现数据大小
      roseType: 'area',
      //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          formatter: '{c}'
        },
        emphasis: {
          show: true
        }
      },
      labelLine: {
        normal: {
          show: true,
          length2: 1,
        },
        emphasis: {
          show: true
        }
      },
      data: this.citysalary
    }]
  };

  /* 大数据岗位类型 */
  jobtype = [
    { name: 'jsp', value: 1186, },
    { name: 'ajax', value: 1344 },
    {
      name: 'struts',
      value: 1360
    }, {
      name: 'css',
      value: 1590
    }, {
      name: 'html',
      value: 1602
    }, {
      name: 'jquery',
      value: 1871
    }, {
      name: 'tomcat',
      value: 2022
    }, {
      name: 'hibernate',
      value: 2143
    }, {
      name: 'javascript',
      value: 2167
    }, {
      name: 'redis',
      value: 2390
    }, {
      name: 'springmvc',
      value: 2570
    }, {
      name: 'sql',
      value: 2693
    }, {
      name: 'web',
      value: 2814
    }, {
      name: 'mybatis',
      value: 2900
    }, {
      name: 'linux',
      value: 2932
    }, {
      name: 'oracle',
      value: 3081
    }, {
      name: 'spring',
      value: 4485
    }, {
      name: 'mysql',
      value: 4992
    }, {
      name: 'java',
      value: 11395
    }];
  /*大数据岗位类型 -- 词云图 */
  option9 = {
    title: {
      text: '大数据岗位类型',
      subtext: '根据招聘信息分析所得',
      textStyle: {
        color: "#011c3a",
      },
      left: 'center',
    },
    tooltip: {},
    series: [{
      type: 'wordCloud',
      gridSize: 20,
      sizeRange: [12, 50],
      rotationRange: [0, 0],
      shape: 'circle',
      textStyle: {
        normal: {
          color: function () {
            return 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')';
          }
        },
        emphasis: {
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      data: this.jobtype
    }]
  };

  /* 岗位TOP */
  jobNameNum = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370];
  jobName = ['大数据工程师', '原因2', '原因3', '原因4', '原因5', '原因6', '原因7', '原因8', '原因9', '原因10'];
  option10 = {
    backgroundColor: '#0f375f',
    title: [
      {
        text: "岗位TOP10",
        subtext: "根据招聘信息计算所得",
        x: '40%',
        y: '5%',
        textStyle: {
          color: "#fff",
          fontSize: "14"
        }
      },
    ],
    grid: [
      { x: '20%', y: '20%' },
    ],
    tooltip: {
      formatter: '{b} ({c})'
    },
    xAxis: [
      {
        gridIndex: 0,
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        }, splitLine: { show: false }, axisLine: { show: false }
      },
    ],
    yAxis: [
      {
        gridIndex: 0, interval: 0, data: this.jobName.reverse(),
        axisTick: { show: false }, axisLabel: { show: true }, splitLine: { show: false },
        axisLine: { show: true, lineStyle: { color: "#eee" } },
      }
    ],
    series: [
      {
        name: 'name',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0, barWidth: '45%',
        itemStyle: { normal: { color: '#86c9f4' } },
        label: {
          normal: {
            show: true,
            position: "right",
            textStyle: {
              color: "#eee"
            }
          }
        },
        data: this.jobNameNum.sort(),
      },
    ]
  };

  

  constructor() { }

  ngOnInit() {
  }
  randomData() {
    return Math.round(Math.random() * 1000);
  }

}
