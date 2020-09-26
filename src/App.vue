<template>
  <div id="app" :style="bodyStyle">
	  <router-view></router-view>
  </div>
</template>

<script>
	//let centerdata=require("./test/DataCenter.js")
	export default {
		data(){
			return{
				bodyStyle:{
					width:'100%',
					height:'100%',
					margin:'0px',
					padding:'0px',
					
				},
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

<style>
	*{
		font-family: 微软雅黑;
		maring:0px;
		padding:0px
	}
	#app{
		overflow: hidden;
	}
	 ::-webkit-scrollbar {
	     width: 0 !important;
	   }
	   ::-webkit-scrollbar {
	     width: 0 !important;height: 0;
	   }
</style>
