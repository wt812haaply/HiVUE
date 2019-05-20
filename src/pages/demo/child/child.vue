<!-- 模板展示 -->
<template>
	<div>
    <h2>子</h2>
    <button @click="childCheck">给父的值</button>
  </div>
</template>
<!-- 逻辑处理 -->
<script>
  import fatherDemo from './father'
export default {
	name:'',
	data () {
		return{
      childInfo:{
        msg:'我是子的信息',
        num:'2222'
      }
		}
	},

	// 组件
	components:{
    fatherDemo
	},

	// 组件传值
	props:[''],

	// 事件方法
	methods: {
    childCheck () {
      console.log('1111')
	    this.$emit('child',this.childInfo.msg)
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
  button{
    background: #999;
    width: 100px;
    height: 40px;
  }
</style>
