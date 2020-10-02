<!--线损率折线图-->
<template>
	<div style="margin: 0px;padding:0px;">
		<div id="chartLineBox" style="width: 90%;height: 400px;text-align: center;"></div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		data() {
			return {
				chartLine: '',
				min: 0,
				dateName: '',
				display: false,
				date:'2020-09-29'
			}
		},
		mounted() {
			this.getData();
			
		},

		methods: {
			//初始化数据
			getData() {
				var time = new Date();
				this.chartLine = this.$echarts.init(document.getElementById('chartLineBox'));
				//this.chartLine = this.$echarts.init(document.getElementById('chartLineBox'), 'dark');
				// 指定图表的配置项和数据
				var option = {
					title: {
						text: this.date+'\n   线损数据'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['线损率']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: [ '00:00:00', 
								'00:15:00',
								'00:30:00', 
								'00:45:00', 
								'01:00:00'
						]
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '线损率',
							type: 'line',
							stack: '百分比',
							data: [0.98, 0.7, 0.5, 0.8, 0.99]
						}
					]
				};
				// 使用刚指定的配置项和数据显示图表。
				this.chartLine.setOption(option);
			},
		},
		beforeDestroy() {
			//组件销毁执行
			//清除定时器
			clearInterval(this.timer);
			console.log("beforeDestroy");
		},
		destroyed() {
			// 销毁监听事件
			//清除定时器
			//clearInterval(this.timer);
			console.log("destroyed");
		}
	}
</script>

<style>
</style>
