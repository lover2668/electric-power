<!--台变的线损率-->
<template>
	<el-container style="height: 100%;width:100%">
		<el-aside style="width: 200px;border:1px solid #000000">
			
		</el-aside>
		
		<el-container style="height: 100%;width:calc(100%-200px)">
			<el-header style="height: 8%">
				<SearchData></SearchData>
			</el-header>
			
			<el-main style="margin:0px;padding:0px; height:100%;width: calc(100%-200px);">
				<div style="width:100%;">
					<LossLine></LossLine>
				</div>
				
				<div style="width:100%;border-top: 1px solid #000000;">
					<LossData></LossData>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import LossLine from '../components/lineLoss/loss-line.vue'
	import SearchData from '../components/lineLoss/search-data.vue'
	import LossData from '../components/lineLoss/loss-data.vue'
 	export default{
		components:{
			LossLine,
			SearchData,
			LossData
		}
	}
</script>

<style>
</style>
