<template>
	<div style="overflow: scroll;">
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
		fixed
		prop="date"
		label="日期"
		width="150">
    </el-table-column>
    <el-table-column
    	fixed
    	prop="name"
    	label="相线"
    	width="150">
    </el-table-column>
	<el-table-column label="时间段">
		<el-table-column v-for="(item,i) in props" :prop="item.prop" :label="item.prop" :key="i" width="200">
			
		</el-table-column>
	</el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
		tableData:[
			{
				date:'2020-05-06',
				name:'A相电流',
				'0:15':10,
				'0:30':10,
				'0:45':10,
				'1:00':10,
				'1:15':10,
				'1:30':10,
				'1:45':10,
				'2:00':10,
				'2:15':10,
				'2:30':10,
				'2:45':10,
				'3:00':10
			},
			{
				date:'2020-05-06',
				name:'B相电流',
				'0:15':10,
				'0:30':10,
				'0:45':10,
				'1:00':10,
				'1:15':10,
				'1:30':10,
				'1:45':10,
				'2:00':10,
				'2:15':10,
				'2:30':10,
				'2:45':10,
				'3:00':10
			},
			{
				date:'2020-05-06',
				name:'C相电流',
				'0:15':10,
				'0:30':10,
				'0:45':10,
				'1:00':10,
				'1:15':10,
				'1:30':10,
				'1:45':10,
				'2:00':10,
				'2:15':10,
				'2:30':10,
				'2:45':10,
				'3:00':10
			}
		],
		props:[
			{prop:'0:15'},
			{prop:'0:30'},
			{prop:'0:45'},
			{prop:'1:00'},
			{prop:'1:15'},
			{prop:'1:30'},
			{prop:'1:45'},
			{prop:'2:00'},
			{prop:'2:15'},
			{prop:'2:30'},
			{prop:'2:45'},
			{prop:'3:00'},
		],
      }
    }
  }
</script>