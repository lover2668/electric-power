<!--添加前端收集器-->
<template>
	<div>
		<el-form ref="addDevice" :model="addDevice" label-width="110px" size="mini" label-position="left">
			<div class="divSty">
				<el-form-item label="供电单位">
					<el-input v-model="addDevice.value1"></el-input>
				</el-form-item>
			</div>
			<div class="divSty">
				<el-form-item label="终端地址码">
					<el-input v-model="addDevice.value2"></el-input>
				</el-form-item>
			</div>
			<div class="divSty">
				<el-form-item label="终端资产编号">
					<el-input v-model="addDevice.value3"></el-input>
				</el-form-item>
			</div>
			<div class="divSty">
				<el-form-item label="出厂编号">
					<el-input v-model="addDevice.value4"></el-input>
				</el-form-item>
			</div>
			<div class="divSty">
				<el-form-item label="采集方式">
					<el-autocomplete class="inline-input" v-model="addDevice.state1" :fetch-suggestions="querySearch" placeholder="请输入内容"
					 @select="handleSelect" style="width:290px"></el-autocomplete>
				</el-form-item>
			</div>
			<div class="divSty">
				<el-form-item label="终端型号">
					<el-autocomplete class="inline-input" v-model="addDevice.state2" :fetch-suggestions="querySearch" placeholder="请输入内容"
					 @select="handleSelect" style="width:290px"></el-autocomplete>
				</el-form-item>
			</div>
			<div class="divSty">
				<el-form-item label="通迅规约">
					<el-input v-model="addDevice.value7"></el-input>
				</el-form-item>
			</div>
			<div class="divSty">
				<el-form-item label="是否外接扬声器">
					<el-input v-model="addDevice.value8"></el-input>
				</el-form-item>
			</div>
			<div class="divSty">
				<el-form-item label="额定电压">
					<el-input v-model="addDevice.value9"></el-input>
				</el-form-item>
			</div>
			<div class="divSty">
				<el-form-item label="通迅规约">
					<el-input v-model="addDevice.value10"></el-input>
				</el-form-item>
			</div>
			<div class="divSty">
				<el-form-item label="是否保电">
					 <el-select v-model="addDevice.select" placeholder="请选择">
					    <el-option value='是' label="1"></el-option>
						<el-option value='否' label="0"></el-option>
					  </el-select>
				</el-form-item>
			</div>
			<div class="divSty">
				<el-form-item label="状态">
					<el-input v-model="addDevice.value12"></el-input>
				</el-form-item>
			</div>
			<div class="divSty">
				<el-form-item label="终端类型">
					<el-autocomplete class="inline-input" v-model="addDevice.state1" :fetch-suggestions="querySearch" placeholder="请输入内容"
					 @select="handleSelect" style="width:290px"></el-autocomplete>
				</el-form-item>
			</div>
			<div style="clear:both"></div>
			<div style="height:40px;width:260px;margin-left:auto;margin-top: 20px;">
				<el-button type="primary" @click="submitForm('addDevice')" size="mini">添加</el-button>
				<el-button @click="resetForm('addDevice')" size="mini">重置</el-button>
				<el-button @click="hideAddFront" size="mini">取消</el-button>
			</div>

		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				addDevice: {},
				 restaurants: [
					  { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
					   { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
					   { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
					   { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
					   { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" }
				 ],
			}
		},
		methods: {
			hideAddFront() {
				this.$emit("toFrontCollector", false);
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						var data={};
						this.$axios({
							method: 'post',
							url: this.COMMON.url + '',
							data:data
						}).then(response => {
							console.log('数据请求成功');
							this.$emit("toFrontCollector", false);
						}).catch(error => { // 请求失败
							console.log('请求失败');
							console.log(error);
						});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			//筛选
			querySearch(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return (restaurant) => {
					return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			handleSelect(item) {
				console.log(item);
			}
		}
	}
</script>

<style scoped="scoped">
	.divSty {
		float: left;
		margin-left: 30px;
		margin-top: 10px;
		width: 400px;
		/* border:1px solid #000000 */
	}
</style>
