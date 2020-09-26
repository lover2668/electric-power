<!--面包屑-->
<template>
	<div style="width:100%;height: 50px;line-height: 50px;padding-left: 30px;">
		<el-breadcrumb style="display: inline-block;font-size: 14px;">
			<el-breadcrumb-item :to="{ path: '/index' }">
				<font style="color: #58595a;"><i class="iconfont icon">&#xe622;</i>
					台区智慧运维系统
				</font>
			</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item)  in levelList" :key="item.path" v-if="item.meta.title" :to="item.redirect||item.path">
				<font style="color: #c1cbd8;">
					{{item.meta.title}}
				</font>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
	export default {
		name: 'Navbar',
		data() {
			return {
				levelList: []
			}
		},
		watch: {
			$route() {
				this.getBreadcrumb()
			}
		},
		created() {
			this.getBreadcrumb()
		},
		methods: {
			getBreadcrumb() {
				let matched = this.$route.matched.filter(item => item.meta.title)
				this.levelList = matched;
			},
		},
		watch: {
			$route(to, from) {
				this.getBreadcrumb()
			}
		},
		mounted() {
			this.getBreadcrumb()
		},
	}
</script>

<style scoped>
	@import "../../assets/icon/iconfont.css";

	.icon {
		margin-right: 10px;
	}
</style>
