<!-- 模板展示 -->
<template>
	<div class="container">
  <tabs>
    <tab name="Services" :selected="true">
      <ul>
        <li>a</li>
      </ul>
    </tab>
    <tab name="About">
      <p>b</p>  
    </tab>
    <tab name="Contact">
      <p>c</p>  
    </tab>
  </tabs>

	</div>
</template>

<!-- 逻辑处理 -->
<script>
import tabs from './tabs'
import tab from './tab'
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
	name:'Tabs',
	data () {
		return{

		}
	},

	// 组件
	components:{
		tabs,
		tab
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
	:root {
  padding-top: 40px;
}


</style>