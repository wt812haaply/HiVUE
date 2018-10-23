<!-- 模板展示 -->
<template>
	<div>
		<h2>下面是</h2>
		<hr>
		<p lang="en">one的信息</p>
		<p>{{get.onemsg }}</p>
		<p>{{ get.oneclass}}</p>
		<hr>
		<p lang="en">two的信息</p>
		<p>{{get.twomsg }}</p>
		<p>{{ get.twoclass}}</p>

		<br>
		<one @one="getOen" :cont="demo"></one>
		<br>
		<two @two="getTwo" :cont="demo"></two>
	</div>
</template>

<!-- 逻辑处理 -->
<script>
import one from './one'
import two from './two'
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
	name:'',
	data () {
		return{
			demo:{
				msg:'demo的信息',
				title:'demo的title',
			},
			get:{
				onemsg:'',
				oneclass:'',
				twomsg:'',
				twoclass:'',
			}
		}
	},

	// 组件
	components:{
		one,
		two
	},

	// 组件传值
	props:[],

	// 事件方法
	methods: {
		// 获取One信息
		getOen(data,className){
			console.log(data,className)
			this.get.onemsg = data;
			this.get.oneclass = className
		},

		//
		getTwo(data,className){
			console.log(data,className)
			this.get.twomsg = data;
			this.get.twoclass = className;
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

	},

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='scss'>
	br{
		@include LineH(40);
	}
	[lang|=en]{
		color: red;
		@include LineH(40)
	}
</style>
