<!--电量折线图-->
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
				date:'2020-09-29',
				nameData:['A相电流', 'B相电流','C相电流']
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
						text: this.date+'\n   电力数据'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: this.nameData
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
								'01:00:00', 
								'01:15:00', 
								'01:30:00',
						]
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: this.nameData[0],
							type: 'line',
							stack: '百分比',
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: this.nameData[1],
							type: 'line',
							stack: '百分比',
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: this.nameData[2],
							type: 'line',
							stack: '百分比',
							data: [100, 120, 130, 140, 150, 330, 310]
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
