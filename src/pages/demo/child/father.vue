<!-- 模板展示 -->
<template>
	<div>
    <h3>我是父------>{{fatherInfo.msg}}</h3>
    <hr/>
    <child-demo @child="getChild"></child-demo>
  </div>
</template>

<!-- 逻辑处理 -->
<script>
import childDemo from './child'
export default {
	name:'',
	data () {
		return{
		  fatherInfo: {
		    msg:''
      }
    }
	},

	// 组件
	components:{
    childDemo
	},

	// 组件传值
	props:[],

	// 事件方法
	methods: {
    getChild(data) {
      this.fatherInfo.msg = data
      console.log(data,'data')
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
<style scoped lang='scss'></style>
