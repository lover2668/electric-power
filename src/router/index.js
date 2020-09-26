//引入路由
import Vue from 'vue';
import Router from "vue-router"
Vue.use(Router);

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

import Index from '../view/index.vue'
import Login from '../view/login.vue'

import FrontCollector from '../view/front-collector.vue' //前端采集器信息
import RearCollector from '../view/rear-collector.vue'  //后端采集器信息
import Transformer from '../view/transformer.vue'  //变压器信息

import Warnings from '../view/warnings.vue'//警告信息界面

import Test from '../components/transformer/tree.vue'  //变压器信息

import ShowData from '../view/show-data.vue'  //数据信息（电流、电压）
import ShowData2 from '../view/show-data2.vue'  //后端采集器信息


import LineLoss from '../view/line-loss.vue' //线损率


export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: '/',
		redirect: '/index',
		//redirect   表示当路径使用到‘/’是，就自动跳转到路径为‘/login’
	}, {
		path: '/index',
		name: 'Index',
		component: Index,
		children: [{
				path: '/index/front-collector',
				name: 'FrontCollector',
				meta: {
					title: '档案管理 / 前端采集器'
				},
				component: FrontCollector
			},{
				path: '/index/rear-collector',
				name: 'RearCollector',
				meta: {
					title: '档案管理 / 后端采集器'
				},
				component: RearCollector
			},{
				path: '/index/transformer',
				name: 'Transformer',
				component: Transformer,
				meta: {
					title: "档案管理 / 变压器"
				}
			},{
				path: '/index/warnings',
				name: 'Warnings',
				component: Warnings,
				meta: {
					title: "警告信息"
				}
			},{
				path: '/index/test',
				name: 'Test',
				component: Test,
				meta: {
					title: "测试组件"
				}
			},{
				path: '/index/showdata/:id',
				name: 'ShowData',
				component: ShowData,
				meta: {
					title: "运行检测 / 单元区"
				}
			},{
				path: '/index/lineloss/:id',
				name: 'LineLoss',
				component: LineLoss,
				meta: {
					title: "线损检测 / 供电局 / 供电所 / 台变 / 线损率"
				}
			},
		]
	}]
})
