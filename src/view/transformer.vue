<!--变压器-->
<template>
	<el-container style="width:100%;height: 100%;">
		<el-aside style="border-right:1px solid #f6f7f7;width:200px">
			<Tree>
				
			</Tree>
		</el-aside>
		
		<el-main style="">
			<router-view>
				
			</router-view>
		</el-main>
	</el-container>
</template>

<script>
	import Tree from '../components/transformer/tree.vue'
	export default{
		components:{
			Tree
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
</style>
