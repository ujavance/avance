import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-charts',
  templateUrl: './user-charts.component.html',
  styleUrls: ['./user-charts.component.css']
})
export class UserChartsComponent implements OnInit {
  
  /* 
    求职者最喜爱城市
   */
  userFavCity = [
    { value: 335, name: '北京' },
    { value: 310, name: '杭州' },
    { value: 234, name: '深圳' },
    { value: 135, name: '上海' },
    { value: 1548, name: '广东' }
  ];
  option1 = {
    backgroundColor: "#414B60",
    title: {
      text: '求职者最喜爱城市',
      subtext: '根据搜索分析所得',
      left:'center',
      top: 20,
      textStyle: {
        color: '#fff'
      },      
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b}<br/> {c} ({d}%)"
    },
    // legend: {
    //   orient: 'vertical',
    //   x: 'left',
    //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    // },
    calculable: true,
    series: [
      {
        name: 'tt',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: this.userFavCity,
        label: {
          normal: {
            textStyle: {
              fontSize: "16"
            }
          }
        },
      }
    ]
  };
  
  /* 
    最受求职者欢迎的岗位
    x 岗位
    y 数量
  */
  xJob = ['数据分析师', '数据挖掘师', '数据产品经理', '数据研发工程师', '大数据可视化工程师', '大数据专家', '大数据研究员'];
  yJobNum = [1100, 1001, 500, 1000, 1002, 1300, 1050];
  option112 = {
    backgroundColor: "#414B60",
    title: {
      text: '最受求职者欢迎的岗位',
      subtext: '根据用户搜索分析所得',
      // top: 20,
      padding: 20,
      textStyle: {
        color: '#fff'
      },
      x: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    // legend: {
    //   data: ['最高气温'],
    //   x: 'left',
    // },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.xJob,
      "axisLine": {
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        interval: 0,
        rotate: 25,
        textStyle: {
          color: '#fff'
        }
      }
    },
    yAxis: {
      type: 'value',
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
        formatter: '{value}',
        textStyle: {
          color: '#fff'
        }
      }
    },
    series: [
      {
        name: '最高次数',
        type: 'line',
        data: this.yJobNum,
        lineStyle: {
          color: '#49dff0'
        },
        markPoint: {
          itemStyle:{
              normal:{
                color:'#49dff0'
              }
          },
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        // markLine: {
        //   data: [
        //     { type: 'average', name: '平均值' }
        //   ]
        // }
      }
    ]
  };
  option2 = {
    backgroundColor: '#293042',
    tooltip: {
      show: true,
      trigger: 'item'
    },
    title: {
      text: "最受求职者欢迎的岗位",
      subtext: "根据搜索分析所得",
      x: 'center',
      top: 10,
      textStyle: {
        color: "#fff"
      }
    },
    grid: {
      left: '4%',
      top: '25%',
      bottom: '1%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#6995aa'
        },
        onZero: true
      },
      axisLabel: {
        fontSize: 11,
        color: '#A5CADB',
        interval: 0,
        rotate: 25
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dotted',
          color: '#1978D9'
        }
      },
      data: this.xJob
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#6995aa'
        },
        onZero: false
      },
      axisLabel: {
        fontSize: 11,
        color: '#A5CADB'
      },
      splitLine: {
        lineStyle: {
          type: 'dotted',
          color: '#1978D9'
        }
      },
      scale: true
    },
    series: [{
      name: '第一产业',
      smooth: true,
      type: 'line',
      symbolSize: 5,
      symbol: 'circle',
      itemStyle: {
        normal: {
          label: {
            formatter: function (params) {
              return 100 - params.value;
            },
            fontSize: 40,
            padding: [90, 0, 0, 0],
            color: '#fff',
            textStyle: {
              baseline: 'top'
            }
          },
          color: '#ffea00',
          borderColor: 'rgba(255, 234, 0, 0.5)',
          borderWidth: 10
        }
      },
      data: this.yJobNum
    }]
  };
  /* 
      用户工作经验
      X ： 
    */
  userExper = [
    { value: 335, name: '本科' },
    { value: 310, name: '硕士' },
    { value: 274, name: '博士' },
    { value: 235, name: '其他' }
  ];
  option11 = {
    backgroundColor: '#2c343c',
    title: {
      text: ' 用户工作经验',
      subtext: '根据个人信息分析所得',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#fff'
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
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: this.userExper.sort(function (a, b) { return a.value - b.value; }),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: '#eee',
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
    求职者年龄分布图
    X 年龄阶段
    Y 数量
  */
  xAge = ['20-25', '25-30', '30-35', '35-40', '40-45', '其他'];
  yNum = [100, 180, 150, 80, 70, 30];
  option4 = {
    backgroundColor: "#0f375f",
    title: {
      text: '求职者年龄分布图',
      subtext: "根据注册信息分析所得",
      left: 'center',
      top:10,
      textStyle: {
        color: '#fff'
      },
      x: 'center'
    },
    color: ["#036BC8", "#4A95FF", "#5EBEFC", "#2EF7F3", "#FFFFFF"],
    tooltip: {
      trigger: 'axis',
      formatter: "年龄区间： {b}<br/> 数量：{c} "
    },
    xAxis: {
      type: 'category',
      // 突破Y轴最大值
      boundaryGap: false,
      data: this.xAge,
      axisLine: { show: true, lineStyle: { color: '#6173A3' } },
      axisLabel: {
        formatter: '{value} 岁',
        interval: 0,
        rotate: 40,
        textStyle: {
          color: '#fff'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: true, lineStyle: { color: '#6173A3' } },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#6173A3'
        }
      },
      axisTick: {
        "show": false
      },
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          color: '#fff'
        }
      }
    },
    series: [{
      name: '',
      type: 'line',
      data: this.yNum,
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: {
        normal: {
          color: '#036BC8',
          type: 'dashed'
        }
      },
      // markPoint: {
      //   data: [
      //     { type: 'max', name: '最大值' },
      //     { type: 'min', name: '最小值' }
      //   ]
      // },
      itemStyle: {
        normal: {
          borderWidth: 3,
          borderColor: '#f00',
          color: '#fff'
        }
      }
    }]
  };

  /* 
    用户学历占比
    X ： 
    
  */
  userEdu = [
    { value: 335, name: '本科' },
    { value: 310, name: '硕士' },
    { value: 274, name: '博士' },
    { value: 235, name: '其他' }
  ];
  option5 = {
    backgroundColor: "#414B60",
    title: {
      text: ' 用户学历占比',
      subtext:'根据用户提交表单分析所得',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#fff'
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
        name: 'tt',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: this.userEdu.sort(function (a, b) { return a.value - b.value; }),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: '#eee',
              fontSize: "16"
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
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  };



  constructor() { }
  ngOnInit() {}
}
