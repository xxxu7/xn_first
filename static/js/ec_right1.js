
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('r1'));

    // 指定图表的配置项和数据
    var option = {
        title: {
        text: '观看人数top10'  // 柱状图标题，位于柱状图左上角。
            },
    tooltip: { },
    legend: {
        data:['电影名']  // 此处数据无关紧要，不知道什么原因。
            },
    xAxis: {
        data: ["肖申克的救赎","这个杀手不太冷","盗梦空间","阿甘正传","三傻大闹宝莱坞","让子弹飞","泰坦尼克号","千与千寻","海上钢琴师","少年派的奇幻漂流"],  // x轴数据。

    axisTick: {
        show: false
        },
    axisLine: {
        show: true,
        },
    axisLabel: {
        interval: 0,
    rotate: 45,
            
        },
            },
    yAxis: {
        axisLabel:
    {
        formatter: function (value) {
                    // Function formatter
                    if(value!=0) return value/10000 + 'W'
    else return 0
                }
                }
            },

    series: [{
        name: '观看人数',  // 柱状图名字，位于柱状图的正上方。
    type: 'bar',  // 柱状图。
    data: [688378, 657725, 638592, 577180, 546909, 532849, 532064, 521900, 498660, 486409]  // 此处数据，与x轴的数据一一对应。
            }]
        };

    myChart.setOption(option);