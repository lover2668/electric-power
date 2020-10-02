<!--线损搜索数据-->
<template>
	<div>
		<div style="float:left;margin-left: 10px;">
			<font>请选择日期：</font>
			<el-date-picker
			      v-model="dateTime"
			      type="datetimerange"
			      range-separator="至"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期">
			    </el-date-picker>
		</div>
		<div style="float:left;margin-left: 10px;">
			<font>时间间隔  </font>
			<el-select v-model="value1" placeholder="请选择" style="width: 150px;">
				<el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1: '',
				value2: '',
				options1: [{
					value: '选项1',
					label: '15分钟'
				}, {
					value: '选项2',
					label: '30分钟'
				}],
				options2:[
					{
						value:'电流',
						label:'电流'
						
					},{
						value:'电压',
						label:'电压'
					},{
						value:'功率',
						label:'功率',
					}
				],
				searchData: {

				},
				pickerOptions: {
					shortcuts: [{
						text: '最近一周',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				dateTime: [],
				stepData: [],
				appoint: '',
			}
		},
		mounted() {
			console.log('执行运行')
			var startDate = new Date();
			var endDate = new Date();
			startDate.setTime(startDate.getTime() - 3600 * 1000 * 24 * 30);
			this.$set(this.dateTime, 0, startDate);
			this.$set(this.dateTime, 1, endDate);
			this.appoint = '1';

		},
		methods: {
			handleSeek() {
				// var handleSeekData = {};
				// if (this.searchData.value1 != "") {
				// 	//向对象添加属性
				// 	this.$set(handleSeekData, 'value1', this.searchData.value1);
				// }
				// if (this.searchData.value2 != "") {
				// 	this.$set(handleSeekData, 'value2', this.searchData.value2);
				// }
				// console.log(handleSeekData); //输出handleSeekData对象属性有哪些
				// console.log(Object.keys(handleSeekData).length); //输出handleSeekData对象的个数
				// this.$axios({
				// 	method: 'post',
				// 	url: this.COMMON.url + '',
				// 	data: handleSeekData
				// }).then(response => {

				// }).catch(error => { // 请求失败
				// 	console.log('请求失败');
				// 	console.log(error);
				// });
			},
			// 数字补0操作
			addZero(num) {
				return num < 10 ? '0' + num : num;
			},
			formatDateTime(date) {
				var time = new Date(Date.parse(date));
				var Y = time.getFullYear();
				var M = this.addZero(time.getMonth() + 1);
				var D = this.addZero(time.getDate());
				var text = Y + M + D;
				var num = text - 0;
				return num;
			},
			runStep() {
				this.getStep();
				this.getClassifyStep();
			},
			getStep() {
				console.log('dateTime');
				console.log(this.dateTime);
				if (this.dateTime != null) {
					let startTime = this.formatDateTime(this.dateTime[0]);
					let endTime = this.formatDateTime(this.dateTime[1]);
					console.log('startTime');
					console.log(startTime);
					console.log('endTime');
					console.log(endTime);
					if (this.changeTime(startTime, endTime)) {
						this.$axios({
							method: 'get',
							url: this.COMMON.url + '',
						}).then(response => {
							this.$set(this.stepData, 0, response.data.data)
						}).catch(error => { // 请求失败
							console.log('请求失败');
							console.log(error);
						});
						this.$axios({
							method: 'get',
							url: this.COMMON.url + '',
						}).then(response => {
							this.$set(this.stepData, 1, response.data.data);
						}).catch(error => { // 请求失败
							console.log('请求失败');
							console.log(error);
						});
						if (this.stepData[0] == 0) {
							this.$message({
								message: '该时间段没有该生态鸡的步数',
								type: 'warning'
							});
						} else if (this.stepData[1] == 0) {
							this.$message({
								message: '该时间段没有生态鸡的步数',
								type: 'warning'
							});
						}
						console.log('stepData')
						console.log(this.stepData);
						this.$emit('stepData', this.stepData);
					} else {
						this.$message({
							message: '开始时间大于结束时间，请重新选择！',
							type: 'warning'
						});
					}
				}
			},
			getClassifyStep() {
				if (this.dateTime != null && this.appoint != '') {
					let startTime = this.formatDateTime(this.dateTime[0]);
					let endTime = this.formatDateTime(this.dateTime[1]);
					console.log(startTime);
					console.log(endTime);
					this.$axios({
						method: 'get',
						url: this.COMMON.url + '',
					}).then(response => {
						console.log('response');
						console.log(response.data);
						var object = {
							classifyStep: response.data.data,
							appoint: this.appoint,
						}
						this.$emit('classifyStep', object);
					}).catch(error => { // 请求失败
						console.log('请求失败');
						console.log(error);
					});
				}
			},
			changeTime(startTime, endTime) {
				if (startTime <= endTime) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
</script>

<style>
</style>
