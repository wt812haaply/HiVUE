<!-- 模板展示 -->
<template>
	<div>
		<div v-show="isActive"><slot></slot></div>
	</div>
</template>

<!-- 逻辑处理 -->
<script>
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
	name:'tab',
	data () {
		return{
			isActive: false
		}
	},

	// 组件
	components:{

	},

	// 组件传值
	props: {
    name: { required: true },
    selected: { default: false }
  },

	// 事件方法
	methods: {

	},

	// 计算属性
	computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g , '-');
    }
  },

	// 侦听属性
	watch:{

	},

	
	mounted() {
    this.isActive = this.selected;
  },

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='scss'>
	
</style>