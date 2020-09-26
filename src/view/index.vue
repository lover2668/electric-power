<template>
	<el-container style="margin:0px;width: 100%;height:100%">
	  <el-header style="height:8%;margin:0px;padding: 0px;border-bottom:2px solid #58595a;">
		  <Title></Title>
	  </el-header>
	  <el-container style="height:calc(100% - 8%);">
	    <el-aside style="width:200px;height: 100%;border-right:1px solid #000000">
			<NavMenu></NavMenu>
		</el-aside>
	   <el-container style="height: 100%;width: calc(100% - 230px);">
	      <el-header style="border-bottom:2px solid #f6f7f7;height:50px;margin:0px;padding:0px">
	   			<NavBreadcrumb></NavBreadcrumb>
	   	  </el-header>
	      <el-main  style="margin:0px;padding: 0px;">
			  <router-view>
				
			  </router-view>
	   	  </el-main>
	   </el-container>
	  </el-container>
	</el-container>
	<!-- <div style="width: 100%;height:100%;box-sizing: border-box;">
		<div style="border:1px solid #000000;width: 100%;height: 80px;">
			<Title></Title>
		</div>
		
		<div style="width: 100%;height:calc(100%-80px);border:1px solid yellow;overflow: hidden;">
			<div style="border:1px solid #000000;height: 100%;width: 200px;float: left;">
				<NavMenu></NavMenu>
			</div>
			
			<div style="width: calc(100%-200px);float: left;height: 100%;border:1px solid #000000">
				<div style="height: 50px;width: 100%;">
					<NavBreadcrumb></NavBreadcrumb>
				</div>
				
				<div style="height: calc(100%-50px);width:100%">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div> -->
	<!-- <div style="width: 100%;height:100%;box-sizing: border-box;border:1px solid #000000">
		<el-row style="height:80px;border:1px solid #000000">
			
		</el-row>
		<el-row style="height:100%;border: 1px solid yellow;">
			<el-col :span="12" style="">
				<p>123</p>
			</el-col>
			<el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
	</div> -->
</template>

<script>
	import NavMenu from '../components/index/nav-menu.vue'
	import Demo1 from '../test/demo1.vue'
	import NavBreadcrumb from '../components/index/nav-breadcrumb.vue'
	import Title from '../components/index/title.vue'
	export default{
		components:{
			NavMenu,
			NavBreadcrumb,
			Title,
			Demo1
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	
</style>
