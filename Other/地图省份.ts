function randomData() {
    return Math.round(Math.random() * 1000);
}

option = {
    title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
    },

    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['iphone3']
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],           // 文本，默认为数值文本
        inRange: {
            color: ['#c2e9fb', '#ff0844']
        },
        calculable: true
    },
    series: [
        {
            name: 'iphone3',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#000'
                    }
                },
                emphasis: {
                    show: true
                }
            },
            data: [
                { name: '北京', value: randomData() },
                { name: '天津', value: randomData() },
                { name: '上海', value: randomData() },
                { name: '重庆', value: randomData() },
                { name: '河北', value: randomData() },
                { name: '河南', value: randomData() },
                { name: '云南', value: randomData() },
                { name: '辽宁', value: randomData() },
                { name: '黑龙江', value: randomData() },
                { name: '湖南', value: randomData() },
                { name: '安徽', value: randomData() },
                { name: '山东', value: randomData() },
                { name: '新疆', value: randomData() },
                { name: '江苏', value: randomData() },
                { name: '浙江', value: randomData() },
                { name: '江西', value: randomData() },
                { name: '湖北', value: randomData() },
                { name: '广西', value: randomData() },
                { name: '甘肃', value: randomData() },
                { name: '山西', value: randomData() },
                { name: '内蒙古', value: randomData() },
                { name: '陕西', value: randomData() },
                { name: '吉林', value: randomData() },
                { name: '福建', value: randomData() },
                { name: '贵州', value: randomData() },
                { name: '广东', value: randomData() },
                { name: '青海', value: randomData() },
                { name: '西藏', value: randomData() },
                { name: '四川', value: randomData() },
                { name: '宁夏', value: randomData() },
                { name: '海南', value: randomData() },
                { name: '台湾', value: randomData() },
                { name: '香港', value: randomData() },
                { name: '澳门', value: randomData() }
            ],
        }
    ]
};






















var locations = [{
    name: '上海',
    value: 100,
    coord: [121.472644, 31.231706]
}, {
    name: '北京',
    value: 200,
    coord: [116.405285, 39.904989]
}, {
    name: '广东',
    value: 300,
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
                },
                emphasis: {
                    show: true
                }
            }
        }
    ]
};

var currentLoc = 0;
setInterval(function () {
    myChart.setOption({
        series: [{
            center: locations[currentLoc].coord,
            zoom: 4,
            label: {
                normal: {
                    show: true,
                    position: 'bottom',

                    formatter: function (a) {
                        // console.log(a);
                        return '招聘职位' + a.value;
                    }
                },
                emphasis: {
                    show: false,
                    color: '#fff',
                    fontSize: 18,
                    position: 'top',
                    distance: 200,
                    rotate: 100
                    // 文字提示框颜色
                }
            },
            itemStyle: {
                // 地图块颜色
                emphasis: {
                    areaColor: '#00f',
                    color: '#0f0',
                    borderColor: '#f00'
                }
            },
            data: [
                {
                    name: locations[currentLoc].name,
                    value: locations[currentLoc].value,
                    selected: true
                }
            ],
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'cubicInOut'
        }]
    });
    currentLoc = (currentLoc + 1) % locations.length;
}, 2000);