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
				<el-menu-item-group v-for="(val1,index1) in datas" :key="val1.key" :index="'1-'+index1">
					<template slot="title">{{val1.name}}</template>
					<el-submenu v-for="(val2,index2) in val1.data" :key="val2.key" :index="'1-'+index1+'-'+index2">
						<template slot="title">{{val2.powerDepartment}}</template>
							<el-menu-item v-for="(val3,index3) in val2.data" :key="val3.key" :index="'1-'+index1+'-'+index2+'-'+index3">
								{{val3.potentialTransformer}}
							</el-menu-item>
					</el-submenu>
				</el-menu-item-group>
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
					<el-menu-item-group>
						<template slot="title">供电所1</template>
						<el-submenu index="2-1-1">
							<template slot="title">变压器1</template>
							<el-menu-item-group>
								<template slot="title">巡查机器人</template>
								<el-menu-item index="2-1-1-1">管理单元1</el-menu-item>
								<el-menu-item index="2-1-1-2">管理单元2</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu-item-group>
				</el-submenu>
				<el-menu-item index="2-2">管理单元查询</el-menu-item>
			</el-submenu>
			<el-menu-item index="3">
				<i class="el-icon-location"></i>
				报警记录
			</el-menu-item>
			
			<el-submenu index="4">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>档案管理</span>
				</template>
				<el-menu-item :index="'/index/front-collector'">
					前端采集器
				</el-menu-item>
				<el-menu-item :index="'/index/-collector'">
					后端采集器
				</el-menu-item>
				<el-menu-item :index="'/index/transformer'">
					变压器
				</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: this.$route.path,
				datas: [{
						name: '供电所1',
						data: [{
								powerDepartment: '供电线路1',
								data: [{
										potentialTransformer: '台变1'
									},
									{
										potentialTransformer: '台变2'
									},
									{
										potentialTransformer: '台变3'
									},
								],
							},
							{
								powerDepartment: '供电线路2'
							},
							{
								powerDepartment: '供电线路3'
							},
						],
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
