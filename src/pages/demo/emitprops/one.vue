<!-- 模板展示 -->
<template>
	<div class="one" ref="one">
		one - {{cont.msg}}
		<button @click="oneclick">点击按钮</button>
	</div>
</template>

<!-- 逻辑处理 -->
<script>
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
	name:'',
	data () {
		return{
			one:{
				msg:'我是one的信息'
			}
		}
	},

	// 组件
	components:{
	},

	// 组件传值
	props:['cont'],

	// 事件方法
	methods: {
		oneclick(event,ref){
			// console.log('1')
			this.$emit('one',this.one.msg,this.$refs.one.className)
		}
	},

	// 计算属性
	computed: {

	},

	// 侦听属性
	watch:{

	},

	//一进页面先执行
	mounted(){
//		this.oneclick()
	},

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='scss'>
  .one{
    border: 1px blue solid;
  }
button{
	margin-top: 40px;
	display: block;
	@include WH(373,40)
}
</style>
