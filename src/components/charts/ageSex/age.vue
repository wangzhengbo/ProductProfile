<template>
<div id="age-chart-container" class="chart-container"></div>
</template>
<script type="text/babel">
    import { mapGetters } from 'vuex'
    import {colorsFunc} from '../../../colors'
    var echarts = require('echarts');

    export default {
          name: 'mallBehavior',
        data() {
            return {
               labelPosition: 'right',
               activeNames: ['1']
            }
        },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                product_datas: 'product_datas'
            })
        },
        created () {
            //this.$store.dispatch('getHomeInfo')
        },
        mounted() {
           var myChart = echarts.init(document.getElementById('age-chart-container'));
           let option = {
            title:{
                text: '用户年龄分布',
                x:'center'
            },
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : this.product_datas.ageSex.age.legend,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        interval: 0,

                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'用户年龄分布',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            color: colorsFunc
                        }
                    },
                    barWidth: '60%',
                    data: this.product_datas.ageSex.age.data
                }
            ]
        };

             // 绘制图表
            myChart.setOption(option);
        }
    }
</script>
