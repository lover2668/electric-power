<!--展示后端采集器采集的数据  总表/供电线路-->
<template>
	<el-container style="height: 100%;width:100%">
		<el-aside style="width: 200px;border:1px solid #000000">
			
		</el-aside>
		
		<el-container style="height: 100%;width:calc(100%-200px)">
			<el-header style="height: 8%">
				<SearchData></SearchData>
			</el-header>
			
			<el-main style="margin:0px;padding:0px; height:92%;width: 100%;">
				<div style="width:100%;">
					<PowerLine></PowerLine>
				</div>
				
				<div style="width:100%;border-top: 1px solid #000000;">
					<PowerData></PowerData>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import PowerLine from '../components/powerData/power-line.vue'
	import SearchData from '../components/powerData/search-data.vue'
	import PowerData from '../components/powerData/power-data.vue'
 	export default{
		components:{
			PowerLine,
			SearchData,
			PowerData
		}
	}
</script>

<style>
</style>
