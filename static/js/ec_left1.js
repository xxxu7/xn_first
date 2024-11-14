
        // 环形图
    var pieHuan = echarts.init(document.getElementById('l1'));
    pieHuanOption = {
        // 标题
        title: {
        text: '电影种类环形图'
            },
    // 图例
    tooltip: {
        show: true,
    trigger: "item",
        backgroundColor: "##EEEEEE",
                // {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
    formatter: "{a}：{b}<br />{c}条({d}%)"
            },
    // 不同区域的颜色

    series: [
    {
        name: '电影类型',
    type: 'pie',
    // 数组的第一项是内半径，第二项是外半径；可以设置不同的内外半径显示成圆环图
    radius: ['30%', '50%'],
    // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标；设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
    center: ['50%', '50%'],
    itemStyle: {
        // 显示图例
        normal: {
        label: {
        show: false
                            },
    labelLine: {
        show: false
                            },
    color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);},
                        },
    emphasis: {
        label: {
        // 标签内容是否高亮
        show: true,
    textStyle: {
        fontSize: '30',
    fontWeight: 'bold'
                                }
                            }
                        }
                    },

    data: [
    {name:"喜剧", value:3959},
    {name:"动作", value:2410},
    {name:"犯罪", value:1705},
    {name:"奇幻", value:1094},
    {name:"剧情", value:7947},
    {name:"冒险", value:1346},
    {name:"家庭", value:821},
    {name:"爱情", value:3087},
    {name:"同性", value:347},
    {name:"音乐", value:376},
    {name:"儿童", value:93},
    {name:"惊悚", value:2283},
    {name:"科幻", value:907},
    {name:"情色", value:126},
    {name:"动画", value:1013},
    {name:"歌舞", value:236},
    {name:"荒诞", value:5},
    {name:"历史", value:521},
    {name:"战争", value:598},
    {name:"悬疑", value:1224},
    {name:"传记", value:495},
    {name:"西部", value:113},
    {name:"恐怖", value:1074},
    {name:"武侠", value:152},
    {name:"古装", value:240},
    {name:"灾难", value:94},
    {name:"运动", value:202},
    {name:"黑色电影", value:54},
    {name:"惊栗", value:7},
    {name:"鬼怪", value:8},
    {name:"悬念", value:5},
    {name:"戏剧", value:1},
    {name:"戏曲", value:20},
    {name:"舞台艺术", value:13},
    {name:"纪录片", value:4},
    {name:"成人", value:8},
    {name:"脱口秀", value:9},
    {name:"短片", value:3},
    {name:"真人秀", value:4},
    ],
                    
                }
    ]
        };
    pieHuan.setOption(pieHuanOption);
