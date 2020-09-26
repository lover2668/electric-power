<!--展示采集器采集的数据-->
<template>
	<div>
		<p>前端采集器采集数据 总表/供电线路</p>
		<font>{{val}}</font>
		<el-button @click="change">改变</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				val:this.COMMON.sz,
			}
		},
		methods:{
			change(){
				console.log('执行');
				this.COMMON.sz=this.COMMON.sz+1;
				this.val=this.COMMON.sz;
				console.log(this.COMMON.sz)
			}
		},
		watch:{
			'COMMON.sz':{
				handler(){
					console.log('监听');
					this.val=this.COMMON.sz;
				},
				deep: true
			}
		}
	}
</script>

<style>
</style>
