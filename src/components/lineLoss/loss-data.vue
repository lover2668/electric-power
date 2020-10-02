<template>
	<el-scrollbar style="height: 100%;">
	  <el-table
		:data="tableData"
		style="width: 100%; white-space: nowrap;display:inline-block;"
		>
		<el-table-column
			fixed
			prop="date"
			label="日期"
			width="150">
		</el-table-column>
		<el-table-column
			fixed
			prop="name"
			label="线损率"
			width="150">
		</el-table-column>
		<el-table-column label="时间段">
			<el-table-column v-for="(item,i) in props" :prop="item.prop" :label="item.prop" :key="i" width="200">
				
			</el-table-column>
		</el-table-column>
	  </el-table>
	</el-scrollbar>
</template>

<script>
  export default {
    data() {
      return {
		tableData:[
			{
				date:'2020-05-06',
				name:'线损率',
				'0:00':0.1,
				'0:15':0.1,
				'0:30':0.1,
				'0:45':0.1,
				'1:00':0.1
			},
		],
		props:[
			{prop:'0:00'},
			{prop:'0:15'},
			{prop:'0:30'},
			{prop:'0:45'},
			{prop:'1:00'}
		],
      }
    }
  }
</script>
<style scoped>
	
</style>