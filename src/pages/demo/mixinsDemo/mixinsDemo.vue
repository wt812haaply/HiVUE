<!-- 模板展示 -->
<template>
	<div>
    <!--mixins 混入-->
    <h3>{{text.msg}}</h3>

    <!--1-->
    <button @click="Total">点我1</button>
    {{isTotal}}

    <!--2 方法同1-->
    <button @click="getInfo">点我2</button>
    {{what}}
  </div>
</template>
<!-- 逻辑处理 -->
<script>
import { testMixin } from '@/mixins/mixintest'
export default {
	name:'',
	data () {
		return{
      what:''
    }
	},
  mixins: [ testMixin ],

	// 组件
	components:{
	},

	// 组件传值
	props:[],

	// 事件方法
	methods: {
    getInfo () {
      this.what = this.one + this.two
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
</style>
