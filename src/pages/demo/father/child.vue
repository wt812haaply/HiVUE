<!-- 模板展示 -->
<template>
	<div>
    <h2>子----> {{info.num}}</h2>
  </div>
</template>
<!-- 逻辑处理 -->
<script>
export default {
	name:'',
	data () {
		return{
		}
	},

	// 组件
	components:{
	},

	// 组件传值
	props:['info'],

	// 事件方法
	methods: {
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
</style>
