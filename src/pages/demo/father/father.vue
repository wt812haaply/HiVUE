<!-- 模板展示 -->
<template>
	<div>
    <h2>父</h2>
    <child-Item :info="fatherInfo"></child-Item>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
  import childItem from './child'
export default {
	name:'',
	data () {
		return{
		  fatherInfo:{
		    msg:'',
        num:'1000'
      }
    }
	},

	// 组件
	components:{
    childItem
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

	//一进页面先执行
	mounted(){

	},

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='scss'></style>
