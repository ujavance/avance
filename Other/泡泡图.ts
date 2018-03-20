function random() {
    var r = Math.round(Math.random() * 100);
    return (r * (r % 2 == 0 ? 1 : 2));
}


function randomDataArray() {
    var d = [];
    var len = 20;
    var j = 10;
    while (len--) {
        d.push([
            random(),
            random(),
            j,
            "Good" + j
        ]);
        j += 10;
    }
    return d;
}


option = {
    legend: {
        data: ['scatter1', 'scatter2']
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataZoom: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    xAxis: [
        {
            type: 'value',
            splitNumber: 4,
            scale: true
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitNumber: 4,
            scale: true
        }
    ],
    series: [
        {
            name: 'scatter1',
            type: 'scatter',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: function (a) {
                            // console.log(a);
                            return a.data[3];
                        }
                    }
                }
            },
            symbolSize: function (value) {
                return Math.round(value[2] / 2);
            },
            data: randomDataArray()
        }
    ]
}; 