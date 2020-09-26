<template>
	<div>
		<el-menu 
			default-active="2" 
			class="el-menu-vertical-demo" 
			@open="handleOpen" 
			@close="handleClose"
			:default-active="activeIndex"
			style="height: 100%;border:0px"
			router
		>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>线损监测</span>
				</template>
			</el-submenu>
			
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>运行监测</span>
				</template>
				<el-submenu index="2-1">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>数据监测</span>
					</template>
					<el-submenu v-for="(item,i) in datas" :index="'1'+i" :key="i">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>{{item.office}}</span>
						</template>
						<el-menu-item v-for="(item2,n) in item.option" :index="'/index/showdata/'+n" :key="n">
							{{item2.place}}
						</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="2-2">管理单元查询</el-menu-item>
			</el-submenu>
			<el-menu-item :index="'/index/warnings'">
				<i class="el-icon-location"></i>
				报警记录
			</el-menu-item>
			
			<el-submenu index="4">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>档案管理</span>
				</template>
					<el-menu-item :index="'/index/front-collector'">
						机器人（总表）
					</el-menu-item>
					<el-menu-item :index="'/index/rear-collector'">
						管理单元（后端采集器）
					</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item :index="'/index/test'">
				<i class="el-icon-location"></i>
				demo
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				xx:1,
				activeIndex: this.$route.path,
				datas: [
					{
						office:'供电局',
						option:[
							{place:'供电所1'},
							{place:'供电所2'},
							{place:'供电所3'}
						]
						
					}
				],
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
</style>
