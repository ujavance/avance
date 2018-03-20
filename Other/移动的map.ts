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
                    trigger: 'item',
                    position: 'inside',
                    formatter: function (a) {
                        // console.log(a);
                        return '所在城市\t\t' + a.name + '\n职位数量\t\t' + a.value;
                    }
                },
                emphasis: {
                    show: false,
                    color: '#fff',
                    fontSize: 18,
                    lineHeight: 24,
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

var currentLoc = 0;
setInterval(function () {
    myChart.setOption({
        series: [{
            center: locations[currentLoc].coord,
            zoom: 4,
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