<!--展示前端收集器-->
<template>
	<el-container>
		<el-header style="height:90px;line-height:80px;">
			<div style="float: left;height: 80px;line-height:70px;">
				<el-form ref="seekData" :model="seekData1" v-if="this.value=='选项1'">
					<div class="search_box">
						<el-input type="text" placeholder="1" v-model="seekData1.val1" calss="search_input" clearable style="width:150px;margin-right: 10px;"></el-input>
						<el-input type="text" placeholder="1" v-model="seekData1.val2" calss="search_input" clearable style="width:150px;margin-right: 10px;"></el-input>
					</div>
				</el-form>
			</div>
			<div style="height: 80px;line-height: 80px;margin-right:10px;float:left">
				<el-button type="success" icon="el-icon-search" @click="handleSeek()">搜索</el-button>
			</div>
			<div style="float:left;height: 80px;line-height:80px;">
				<el-button type="primary" @click="showAddFrontCollector=true">
					<font class="font1">
						<i class="el-icon-circle-plus-outline"></i>
						添加采集器
					</font>
				</el-button>
			</div>
		</el-header>
		<el-main v-loading="loading" style="padding-top:0px;margin:0px">
			<el-table :data="tableData" style="width: 100%;font-size: 14px;" border>
				<!--设置列标-->
				<el-table-column type="index" width="50">
				</el-table-column>
				<el-table-column type="expand">
					<template slot-scope="props">
						<el-form label-position="left" inline class="demo-table-expand" label-width="120px">
							<el-form-item label="供电单位">
								<span>{{ props.row.value1 }}</span>
							</el-form-item>
							<el-form-item label="供电线路">
								<span>{{ props.row.value2 }}</span>
							</el-form-item>
							<el-form-item label="台区名称">
								<span>{{ props.row.value3 }}</span>
							</el-form-item>
							<el-form-item label="终端资产编号">
								<span>{{ props.row.value4 }}</span>
							</el-form-item>
							<el-form-item label="终端型号">
								<span>{{ props.row.value5 }}</span>
							</el-form-item>
							<el-form-item label="通讯规约">
								<span>{{ props.row.value6 }}</span>
							</el-form-item>
							<el-form-item label="终端通讯地址">
								<span>{{ props.row.value7 }}</span>
							</el-form-item>
							<el-form-item label="SIM卡号">
								<span>{{ props.row.value8 }}</span>
							</el-form-item>
							<el-form-item label="额定电压">
								<span>{{ props.row.value9 }}</span>
							</el-form-item>
							<el-form-item label="采集点地址">
								<span>{{ props.row.value10 }}</span>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column>
				<el-table-column prop="value1" label="供电单位" width="200">
				</el-table-column>
				<el-table-column prop="value2" label="供电线路" width="200">
				</el-table-column>
				<el-table-column prop="value3" label="台区名称" width="300">
				</el-table-column>
				</el-table-column>
				<el-table-column prop="value9" label="额定电压" width="80">
				</el-table-column>
				<el-table-column prop="value10" label="采集点地址" width="100">
				</el-table-column>
				<el-table-column prop="value10" label="状态" width="100">
					<template slot-scope="scope">
					        <el-tag
								effect="dark"
								:type="scope.row.value11 === '在线' ? 'success' : 'danger'"
								disable-transitions
								style="width: 70px;text-align: center;"
								>
								{{scope.row.value11}}
							</el-tag>
					      </template>
				</el-table-column>

				<el-table-column label="操作" show-overflow-tooltip>
					<template slot-scope="scope">
						<!-- <el-button type="success" size="mini" style="margin-left:5px;margin-right: 5px;" @click="handleUpdata(scope.$index, scope.row)">
							<font class="font1">安装</font>
						</el-button> -->
						
						<el-button type="primary" size="mini" style="margin-left:5px;margin-right: 5px;" @click="handleUpdata(scope.$index, scope.row)">
							<font class="font1">修改</font>
						</el-button>
						
						<el-popover placement="top" width="160" :model="visible" :ref="'popover-${scope.$index}'">
							<p>删除后无法恢复，是否确认删除？</p>
							<div style="text-align: center; margin: 0">
								<el-button type="primary" size="mini" @click="handleDelete(scope.$index, scope.row)">确定</el-button>
							</div>
							<el-button slot="reference" size="mini" type="danger">
								<font class="font1">拆除</font>
							</el-button>
						</el-popover>
						
					</template>

				</el-table-column>
			</el-table>

			<!--分页-->
			<div style="width:420px;float: left;margin-top: 25px;">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
				 :page-sizes="[6,10, 15, 20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"
				 style="">
				</el-pagination>
			</div>

			<!--添加前端采集器-->
			<el-dialog title="添加前端采集器" :visible.sync="showAddFrontCollector" width="70%" :close-on-click-modal='false' center>
				<AddFrontCollector @toFrontCollector="hideAddFront">

				</AddFrontCollector>
			</el-dialog>
			
			<el-dialog title="修改前端采集器数据" :visible.sync="showUpdataFrontCollector" width="70%" :close-on-click-modal='false' center>
				<UpdataFrontCollector :collectorData="collectorData" @toFrontCollector="hideUpdataFront">
			
				</UpdataFrontCollector>
			</el-dialog>
		</el-main>
	</el-container>
</template>


<script>
	import AddFrontCollector from '../components/frontCollector/add-front-collector.vue'
	import UpdataFrontCollector from '../components/frontCollector/updata-front-collector.vue'
	export default {
		components: {
			AddFrontCollector,
			UpdataFrontCollector
		},
		data() {
			return {
				visible:false,
				value: '选项1',
				tableData: [{
					value1: '盘龙供电所',
					value2: '公司供电',
					value3: '电网_10kV铁光线长马沟村1#公变',
					value4: 'Ks201812022334',
					value5: '201812022334',
					value6: '无',
					value7: '11111',
					value8: '13980956261',
					value9: '5V',
					value10: '长马沟村',
					value11:'在线'
				}, {
					value1: '盘龙供电所',
					value2: '公司供电',
					value3: '电网_10kV铁光线长马沟村1#公变',
					value4: 'Ks201812022334',
					value5: '201812022334',
					value6: '无',
					value7: '11111',
					value8: '13980956261',
					value9: '5V',
					value10: '长马沟村',
					value11:'离线'
				}],
				collectorData:{},//存放需要修改的数据
				seekData1: {}, //前端采集器的搜索条件
				showAddFrontCollector: false, //是否显示添加前端采集器
				showUpdataFrontCollector:false,//是否显示修改前端采集器
				loading: false,//是否显示加载动画
				currentPage: 1, //当前第几页
				pageSize: 10, //每一页多少条数据
				total: 10, //一共多少条
			}
		},
		mounted: function() {
			// window.setInterval(() => {
			// 	setTimeout(this.getCollectorInfo(1,10), 0)
			// }, 50000)

		},

		methods: {
			
			//隐藏添加数据界面
			hideAddFront(value) {
				this.showAddFrontCollector = value;
				this.getCollectorInfo(1, 10);
			},
			//隐藏修改数据界面
			hideUpdataFront(value){
				this.showUpdataFrontCollector=value;
				this.getCollectorInfo(1, 10);
			},
			//数据加载动画
			handleLoading(num) {
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
				}, num);
			},
			handleClose() {
				console.log('关闭')
				this.displayStep = false;
			},
			//修改设备信息
			handleUpdata(index,row){
				this.showUpdataFrontCollector=true;
				//根据index，从tableData中获取当前需要操作的数据获
				//var updataData = that.tableData.list[index];
				//this.collectorData=
			},
			//删除设备
			handleDelete(index, row) {
				//根据index，从tableData中获取当前需要操作的数据获
				//var deleteData = that.tableData.list[index];
				//在数据中拿到向后台接口发送请求的数据
				var num={}
				console.log('执行删除');
				this.visible=false;
				this.$axios({
					method: 'post',
					url: this.COMMON.url + '',
					data:num
				}).then(response => {
					console.log('请求成功');
					//成功后调用getCollectorInfo函数，重新请求数据
					this.getCollectorInfo(this.currentPage, this.pageSize);
				}).catch(error => { // 请求失败
					console.log('请求失败');
					console.log(error);
				});
			},
			//遍历对象
			traverseObject(object){
				console.log('遍历');
				var seekData={};
				for(var prop in object){
					//console.log(object[prop]);输出对象属性的值
					//console.log(prop);输出对象属性的名称
					if(object[prop]!=''){
						this.$set(seekData, prop, object[prop]);
					};
				}
				console.log(seekData);
				return seekData;
			},
			//筛选
			handleSeek() {
				var seekData = {};
				//根据查看的数据进行搜索
					//前端采集器
					//利用循环判断搜索条件是否为空，如果都为空就提示选择筛选数据
					//如果至少有一个不为空，那么就把不为空的数据赋给**seekData**作为筛选条件向后台发送请求
					//JSON.stringify(seekData)=='{}'   判断对象是否为空
					//Object.keys(xxx).length==0
				seekData=this.traverseObject(this.seekData1);
				if(JSON.stringify(seekData)!='{}'){
					this.$axios({
						method: 'post',
						url: this.COMMON.url + '',
						data: seekData
					}).then(response => {
						//从response中拿到筛选后的数据再赋给tableData
						//this.tableData=
					}).catch(error => { // 请求失败
						console.log('请求失败');
						console.log(error);
					});
				}else{
					console.log('清输入条件进行查询');
				}
			},

			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.tableData.pageNum = 1;
				this.tableData.pageSize = val;
				this.getCollectorInfo(1, val)
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.tableData.pageNum = val;
				var num = this.tableData.pageSize;
				console.log(num);
				this.getCollectorInfo(val, num)
			},

			//根据页数获取数据
			//根据**第几页(page)**和**每页多少条(num)**进行请求，获取设备信息
			getCollectorInfo(page, num) {
				if(this.value=='选项1'){
					let postData = {
						
					};//向接口发送的数据
					this.$axios({
						method: 'post',
						url: this.COMMON.url + '',
						data: postData
					}).then(response => { // 请求成功
						console.log(response.data.data);
						//根据我们请求时向后台发送的数据的第几页，为currentPage进行赋值
						//this.currentPage = page;
						//从response中获取到需要展示在表格中的数据，在赋给tableData
						//再拿到pageSize、total的值
						//this.pageSize=
						//this.total=
						//this.tableData=
						//记住清空data()中tableData的值，不清空也可以
					}).catch(error => { // 请求失败
						console.log('请求失败');
						console.log(error);
					})
				}else if(this.value=='选项2'){
					let postData = {
						
					};//向接口发送的数据
					this.$axios({
						method: 'post',
						url: this.COMMON.url + '',
						data: postData
					}).then(response => { // 请求成功
						console.log(response.data.data);
						//根据我们请求时向后台发送的数据的第几页，为currentPage进行赋值
						//this.currentPage = page;
						//从response中获取到需要展示在表格中的数据，在赋给tableData
						//再拿到pageSize、total的值
						//this.pageSize=
						//this.total=
						//this.tableData=
						//记住清空data()中tableData的值，不清空也可以
					}).catch(error => { // 请求失败
						console.log('请求失败');
						console.log(error);
					})
				}else if(this.value=='选项3'){
					let postData = {
						
					};//向接口发送的数据
					this.$axios({
						method: 'post',
						url: this.COMMON.url + '',
						data: postData
					}).then(response => { // 请求成功
						console.log(response.data.data);
						//根据我们请求时向后台发送的数据的第几页，为currentPage进行赋值
						//this.currentPage = page;
						//从response中获取到需要展示在表格中的数据，在赋给tableData
						//再拿到pageSize、total的值
						//this.pageSize=
						//this.total=
						//this.tableData=
						//记住清空data()中tableData的值，不清空也可以
					}).catch(error => { // 请求失败
						console.log('请求失败');
						console.log(error);
					})
				}
				
			},
		},
		watch:{
			
		}
	}
</script>

<style scoped="scoped">
	.item .el-form-item__label {
		color: #909399;
		font-size: 14px;
		font-weight: 700;
	}

	.font1 {
		font-size: 14px;
	}

	.demo-table-expand {
		font-size: 0;
	}

	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}

	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}

	.search_box {
		float: left;
		width: 100%;
		margin-right: 3%;
		/* border: 1px solid #000000; */
		padding-top: 5px;
		padding-bottom: 5px;
	}

	.search_input {
		float: left;
	}
</style>
