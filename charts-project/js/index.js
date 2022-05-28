// 监控区域模块制作
(function () {
    $(".monitor .tabs").on("click", "a", function () {
        $(this)
            .addClass("active")
            .siblings("a")
            .removeClass("active");

        // console.log($(this).index());
        //   选取对应索引号的content
        $(".monitor .content")
            .eq($(this).index())
            .show()
            .siblings(".content")
            .hide();
    });
    // 1. 先克隆marquee里面所有的行（row）
    $(".marquee-view .marquee").each(function () {
        // console.log($(this));
        var rows = $(this)
            .children()
            .clone();
        $(this).append(rows);
    });
})();
// 点位分布统计模块
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    // 2. 指定配置项和数据
    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 注意颜色写的位置
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [
            {
                name: "点位统计",
                type: "pie",
                // 如果radius是百分比则必须加引号
                radius: ["10%", "70%"],
                center: ["50%", "50%"],
                roseType: "radius",
                data: [
                    {value: 20, name: "云南"},
                    {value: 26, name: "北京"},
                    {value: 24, name: "山东"},
                    {value: 25, name: "河北"},
                    {value: 20, name: "江苏"},
                    {value: 25, name: "浙江"},
                    {value: 30, name: "四川"},
                    {value: 42, name: "湖北"}
                ],
                // 修饰饼形图文字相关的样式 label对象
                label: {
                    fontSize: 10
                },
                // 修饰引导线样式
                labelLine: {
                    // 连接到图形的线长度
                    length: 6,
                    // 连接到文字的线长度
                    length2: 8
                }
            }
        ]
    };

    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();

//用户数据区域
(function () {
    const item = {
        name: '',
        value: 1200,
        itemStyle: {
            color: '#254065'
        },
        emphasis: {
            disabled: false
        },
        // 工具提示隐藏
        tooltip: {
            show: false
        },
    }
// 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar"));
// 2. 指定配置和数据
    var option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1,
            [
                {offset: 0, color: '#00fffb'}, // 0 起始颜色
                {offset: 1, color: '#0061ce'}  // 1 结束颜色
            ]
        ),
        // 工具提示
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
            trigger: 'axis',
            // 轴触发提示才有效
            // axisPointer: {
            //     // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果
            //     type: 'shadow'
            // }
        },
        // 图表边界控制
        grid: {
            // 距离 上右下左 的距离
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            // 是否包含文本
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        // 控制x轴
        xAxis: [
            {
                // 使用类目，必须有data属性
                type: 'category',
                // 使用 data 中的数据设为刻度文字
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                // 刻度设置
                axisTick: {
                    // true意思：图形在刻度中间
                    // false意思：图形在刻度之间
                    alignWithLabel: false,
                    show: false
                },
                // x坐标轴文字标签样式设置
                axisLabel: {
                    color: '#4c9bfd'
                },
                // x坐标轴颜色设置
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                        // width:8,  x轴线的粗细
                        // opcity: 0,   如果不想显示x轴线 则改为 0
                    }
                }
            }
        ],
        // 控制y轴
        yAxis: [
            {
                // 使用数据的值设为刻度文字
                type: 'value',
                axisTick: {
                    // true意思：图形在刻度中间
                    // false意思：图形在刻度之间
                    alignWithLabel: false,
                    show: false
                },
                // x坐标轴文字标签样式设置
                axisLabel: {
                    color: '#4c9bfd'
                },
                // x坐标轴颜色设置
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                        // width:8,  x轴线的粗细
                        // opcity: 0,   如果不想显示x轴线 则改为 0
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            },

        ],
        // 控制x轴
        series: [
            {
                // 图表数据名称
                name: '用户统计',
                // 图表类型
                type: 'bar',
                // 柱子宽度
                barWidth: '60%',
                // 数据
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }
        ]
    };

    // 3. 把配置给实例对象
    myChart.setOption(option);
})();
// 订单功能
(function () {
    // 1. 准备数据
    var data = {
        day365: {orders: '20,301,987', amount: '99834'},
        day90: {orders: '301,987', amount: '9834'},
        day30: {orders: '1,987', amount: '3834'},
        day1: {orders: '987', amount: '834'}
    }
    // 获取显示 订单数量 容器
    var $h4Orders = $('.order h4:eq(0)')
    // 获取显示 金额数量 容器
    var $h4Amount = $('.order h4:eq(1)')
    $('.order').on('click', '.filter a', function () {
        // 2. 点击切换激活样式
        $(this).addClass('active').siblings().removeClass('active')
        // 3. 点击切换数据
        var currdata = data[this.dataset.key]
        $h4Orders.html(currdata.orders)
        $h4Amount.html(currdata.amount)
    })
    // 4. 开启定时器切换数据
    var index = 0
    var $allTab = $('.order .filter a')
    setInterval(function () {
        index++
        if (index >= 4) index = 0
        $allTab.eq(index).click()
    }, 5000)
})();
// 销售统计模块
(function () {
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line"));
    // 2. 指定配置和数据
    var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: "axis"
        },
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },

        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [{
            name: '预期销售额',
            data: data.year[0],
            type: 'line',
            smooth: true,
            itemStyle: {
                color: '#00f2f1'
            }
        }, {
            name: '实际销售额',
            data: data.year[1],
            type: 'line',
            smooth: true,
            itemStyle: {
                color: '#ed3f35'
            }
        }]

    };

    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
    // 切换
    $('.sales').on('click', '.caption a', function () {
        // 样式
        $(this).addClass('active').siblings().removeClass('active')
        // currData 当前对应的数据
        // this.dataset.type 标签上的data-type属性值，对应data中的属性
        var currData = data[this.dataset.type]
        // 修改图表1的数据
        option.series[0].data = currData[0]
        // 修改图表2的数据
        option.series[1].data = currData[1]
        // 重新设置数据  让图标重新渲染
        myChart.setOption(option)
    })
    var as = $(".sales .caption a");
    var index = 0;
    var timer = setInterval(function () {
        index++;
        if (index >= 4) index = 0;
        as.eq(index).click();
    }, 1000);
    // 鼠标经过sales，关闭定时器，离开开启定时器
    $(".sales").hover(
        function () {
            clearInterval(timer);
        },
        function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;
                if (index >= 4) index = 0;
                as.eq(index).click();
            }, 1000);
        }
    );
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();

// 雷达区域
(function () {
    var myChart = echarts.init(document.querySelector(".radar"));
    const dataBJ = [
        [90, 19, 56, 11, 34]

    ];

    const lineStyle = {
        normal: {
            color: '#fff',
            // width: 1
        }
    };
    option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ["30%", "10%"]
        },

        radar: {
            indicator: [
                {name: '机场', max: 100},
                {name: '商场', max: 100},
                {name: '火车站', max: 100},
                {name: '汽车站', max: 100},
                {name: '地铁', max: 100}
            ],
            name: {
                // 修饰雷达图文本颜色
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            radius: '45%',
            shape: 'circle',
            splitNumber: 4,
            axisName: {
                color: 'rgb(238, 197, 102)'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)',
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [
            {
                name: 'Beijing',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                symbol: 'circle',
                itemStyle: {
                    color: '#fff'
                },
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
                },

                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                },

            },

        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();

//饼形图
(function () {
    const myChart = echarts.init(document.querySelector('.geo'))
    option = {
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['130%', '150%'],
                center: ['48%', '80%'],
                avoidLabelOverlap: false,

                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                startAngle: 180,
                hoverOffset: 0,
                data: [

                    {
                        value: 100,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                0,
                                0,
                                0,
                                1,
                                [
                                    {offset: 0, color: "#00c9e0"}, // 0 起始颜色
                                    {offset: 1, color: "#005fc1"} // 1 结束颜色
                                ]
                            )
                        }
                    },
                    {value: 100, itemStyle: {color: '#12274d'}},
                    {
                        value: 200,
                        itemStyle: {
                            color: 'transparent'
                        }
                    },

                ]
            }
        ]
    }
    myChart.setOption(option)
})();

//热力榜区域
(function () {
    const hotData = [
        {
            city: '北京',  // 城市
            sales: '25, 179',  // 销售额
            flag: true, //  上升还是下降
            brands: [   //  品牌种类数据
                {name: '可爱多', num: '9,086', flag: true},
                {name: '娃哈哈', num: '8,341', flag: true},
                {name: '喜之郎', num: '7,407', flag: false},
                {name: '八喜', num: '6,080', flag: false},
                {name: '小洋人', num: '6,724', flag: false},
                {name: '好多鱼', num: '2,170', flag: true},
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                {name: '可爱多', num: '3,457', flag: false},
                {name: '娃哈哈', num: '2,124', flag: true},
                {name: '喜之郎', num: '8,907', flag: false},
                {name: '八喜', num: '6,080', flag: true},
                {name: '小洋人', num: '1,724', flag: false},
                {name: '好多鱼', num: '1,170', flag: false},
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                {name: '可爱多', num: '2,345', flag: true},
                {name: '娃哈哈', num: '7,109', flag: true},
                {name: '喜之郎', num: '3,701', flag: false},
                {name: '八喜', num: '6,080', flag: false},
                {name: '小洋人', num: '2,724', flag: false},
                {name: '好多鱼', num: '2,998', flag: true},
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                {name: '可爱多', num: '2,156', flag: false},
                {name: '娃哈哈', num: '2,456', flag: true},
                {name: '喜之郎', num: '9,737', flag: true},
                {name: '八喜', num: '2,080', flag: true},
                {name: '小洋人', num: '8,724', flag: true},
                {name: '好多鱼', num: '1,770', flag: false},
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                {name: '可爱多', num: '9,567', flag: true},
                {name: '娃哈哈', num: '2,345', flag: false},
                {name: '喜之郎', num: '9,037', flag: false},
                {name: '八喜', num: '1,080', flag: true},
                {name: '小洋人', num: '4,724', flag: false},
                {name: '好多鱼', num: '9,999', flag: true},
            ]
        }
    ]
    let supHTML = ''
    $.each(hotData, function (index, item) {
        supHTML += `<li> <span>${item.city}</span><span>${item.sales}<s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`
    })
    $(".sup").html(supHTML)

    $(".province .sup").on("mouseenter", "li", function () {
        $(this).addClass("active").siblings().removeClass()
        console.log(hotData[$(this).index()])
        let subHTML = "";
        $.each(hotData[$(this).index()].brands, function (index, item) {
            subHTML += `<li><span>${item.name}</span><span>${item.num} <s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`
        })
        $(".sub").html(subHTML)
    })

    // 所有的LI
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= 5) index = 0;
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
    }, 2000);

    $(".province .sup").hover(
        // 鼠标经过事件
        function() {
            clearInterval(timer);
        },
        // 鼠标离开事件
        function() {
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                if (index >= 5) index = 0;
                // lis.eq(index).mouseenter();
                render(lis.eq(index));
            }, 2000);
        }
    );
})();



