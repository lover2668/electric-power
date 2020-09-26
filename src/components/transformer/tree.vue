<!--变压器树型结构-->
<template>
	<div>
		<el-input
		  placeholder="输入关键字进行过滤"
		  v-model="filterText"
		  style="margin-bottom: 7px;"
		  >
		</el-input>
		
		<el-tree
		  class="filter-tree"
		  :data="data"
		  :props="defaultProps"
		  default-expand-all
		  :filter-node-method="filterNode"
		  ref="tree"
		  style="font-size: 14px;"
		>
		   <span class="custom-tree-node" slot-scope="{ node, data }">
				<el-button
				  type="text"
				  size="mini"
				  @click="showcollector(node,data)">
				  {{ node.label }}
				</el-button>
			</span>
		</el-tree>
	</div>
</template>

<script>
export default {
	watch: {
	  filterText(val) {
	    this.$refs.tree.filter(val);
	  }
	},
    methods: {
	  showcollector(node,data){
		// console.log('我被点击了');
		// console.log('node');
		// console.log(node.label);
		console.log('data');
		console.log(data);
		if(!data.children){
			console.log('执行')
			this.$router.push('/index/transformer/' + this.gongdianjuid + '/' + data.label)
		}
	  },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },

    data() {
      return {
		gongdianjuid:this.$route.params.gongdianjuid,
        filterText: '',
        data: [{
            id: 4,
            label: '变压器编号1',
            children: [{
              id: 9,
              label: '前端采集器',
			  children: [{
			    id: 9,
			    label: 'qd111111'
			  }, {
			    id: 10,
			    label: 'qd222222'
			  }]
            }, {
              id: 10,
              label: '后端采集器',
			  children: [{
			    id: 9,
			    label: 'qd111111'
			  }, {
			    id: 10,
			    label: 'qd222222'
			  }]
            }]
          },
		  {
		    id:5 ,
		    label: '变压器编号2',
		    children: [{
		      id: 9,
		      label: '前端采集器',
		      children: [{
		        id: 9,
		        label: 'qd111111'
		      }, {
		        id: 10,
		        label: 'qd222222'
		      }]
		    }, {
		      id: 10,
		      label: '后端采集器',
		      children: [{
		        id: 9,
		        label: 'qd111111'
		      }, {
		        id: 10,
		        label: 'qd222222'
		      }]
		    }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>

<style>
</style>
