<!-- 模板展示 -->
<template>
	<div class="two" ref="two">
	two - {{ cont.title }}
	<button @click="twoclick">阿牛</button>
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
			two:{
				msg:'我是two的信息',
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
		twoclick(event,refs){
			this.$emit("two",this.two.msg,this.$refs.two.className)
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
//		this.twoclick();
	},

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='scss'>
.two{
	border: 1px red solid;
}
button{
	margin-top: 40px;
	display: block;
	@include WH(373,40)
}
</style>
