<!-- 模板展示 -->
<template>
	<div>
		<accordion>
			<accordionItem title="title1">
				<div>1</div>
			</accordionItem>

			<accordionItem title="title2">
				<div>2</div>
			</accordionItem>

			<accordionItem title="title3">
				<div>3</div>
			</accordionItem>

			<accordionItem title="title4">
				<div>4</div>
			</accordionItem>
			<accordionItem title="title5">
				<div>5</div>
				<accordion>
					<accordionItem title="title51">
						<div>51</div>
					</accordionItem>

					<accordionItem title="title52">
						<div>52</div>
					</accordionItem>
					<accordionItem title="title53">
						<div>53</div>
					</accordionItem>
				</accordion>
			</accordionItem>
		</accordion>
	</div>
</template>

<!-- 逻辑处理 -->
<script>
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
import accordion from './accordion'
import accordionItem from './accordionItem'
export default {
	name:'',
	data () {
		return{

		}
	},

	// 组件
	components:{
		accordion,
		accordionItem
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
	
</style>