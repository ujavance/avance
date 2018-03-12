option = {
    title: {
        text: '多雷达图',
        x:'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'left',
        data:['某软件','某主食手机','某水果手机','降水量','蒸发量']
    },
    radar: [
        {
            indicator: [
                {text: '品牌', max: 100},
                {text: '内容', max: 100},
                {text: '可用性', max: 100},
                {text: '功能', max: 100}
            ],
            center: ['25%','40%'],
            radius: 80
        },
        {
            indicator: [
                {text: '外观', max: 100},
                {text: '拍照', max: 100},
                {text: '系统', max: 100},
                {text: '性能', max: 100},
                {text: '屏幕', max: 100}
            ],
            radius: 80,
            center: ['50%','60%'],
        },
        {
            indicator: (function (){
                var res = [];
                for (var i = 1; i <= 12; i++) {
                    res.push({text:i+'月',max:100});
                }
                return res;
            })(),
            center: ['75%','40%'],
            radius: 80
        }
    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        color:"#a00"
                        
                    }
                    
                }
                
            },
            data: [
                {
                    value: [60,73,85,40],
                    name: '某软件'
                }
            ]
        },
        {
            type: 'radar',
            radarIndex: 1,
            areaStyle: {
                normal: {
                    color:"#999"
                }
            },
            lineStyle: {
                normal: {
                    color:"#666"
                }
            },
            data: [
                {
                    value: [85, 90, 90, 95, 95],
                    name: '某主食手机'
                }
            ]
        },
        {
            type: 'radar',
            radarIndex: 2,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    name: '降水量',
                    value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
                }
            ]
        }
    ]
};
