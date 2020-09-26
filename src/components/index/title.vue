<!--标题-->
<template>
	<div style="height:100%;width:100%">
		<div style="width:260px;margin-left: 40px;float:left;margin-top: 13px;height: 50px;line-height: 50px;">
			<font style="font-size: 32px;color: #58595a;">
				台区智慧运维系统
			</font>
		</div>
		<div style="height: 50px;width: 400px;float:right">
			<el-badge :value="num" class="item">
			  <div style="width:80px;height: 30px;"> 
				<el-link type="warning">
					<font style="font-size: 18px;">报警信息</font>
				</el-link>
				</div>
			</el-badge>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				num:3
			}
		},
		mounted() {
			
		},
		methods:{
			
		},
		watch:{
			
		}
	}
</script>

<style scoped="scoped">
	.item {
	  margin-top: 10px;
	  margin-right: 40px;
	}
</style>
