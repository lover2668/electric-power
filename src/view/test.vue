<!--测试组件-->
<template>
	<div>
		<RoolText></RoolText>
	</div>
</template>

<script>
	import RoolText from '../components/transformer/tree.vue'
	export default {
		components: {
			RoolText
		},
		data() {
			return {
				data1: ['连雨不知春去',
       '一晴方觉夏深' ]
			}
		},
	}
</script>

<style>
</style>
