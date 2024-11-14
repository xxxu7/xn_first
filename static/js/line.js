
        // 折线图
    // 基于准备好的dom，初始化echarts实例
    var line = echarts.init(document.getElementById('line'));
    // 指定图表的配置项和数据
    lineOption = {
        // 标题
        title: {
            text: '近年来优质电影数目',
            left: 'center',
            textStyle:{
                color:'white'
            }
            },
    // 图例
    tooltip: {
        show: true,
    trigger: "axis",
    backgroundColor: "#1677FF",
                // {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
    formatter: "{b}：{c}"
            },
    xAxis: {
        type: 'category',
    data: ["2016","2015","2014","2013","2012","2011","2010","2009","2008","2007"]
            },
    yAxis: {
        type: 'value'
            },
    series: [{
        name: '电影数目',
    data: [3, 45, 65, 79, 61, 80, 86, 79, 79, 86],
    type: 'line'
            }]
        };
    line.setOption(lineOption);

