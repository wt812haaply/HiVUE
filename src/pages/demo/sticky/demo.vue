<!-- 模板展示 -->
<template>
	<div>
		<div class="demoItem">
			<div>222</div>
		</div>

		<sticky>
			<div slot="topName">{{ demo.msg }}</div>
		</sticky>

		<div class="content">
       		<div lang="en">111</div>
    	</div>

	</div>
</template>

<!-- 逻辑处理 -->
<script>
import sticky from './one'
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
	name:'demo',
	data () {
		return{
			demo:{
				msg:'自动粘滞固定头部'
			}
		}
	},

	// 组件
	components:{
		sticky,
	},

	// 组件传值
	props:[],

	// 事件方法
	methods: {

	},

	// 计算属性
	computed: {

	},

	// 侦听属性
	watch:{

	},

	
	mounted(){

	},

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='scss'>
.demoItem{
	height: auto;
	background: #eee;
	> div{
		height: 500px;
	}
}
.content{
	height: 1500px;
	background: #C6FFE9;
}	
</style>