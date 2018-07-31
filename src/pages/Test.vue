<template>
	<div>
		<ul>
		    <router-link 
		    	:to="{path: '/pages/' + item.url + item.tag}"
		    	tag="li"
		    	v-for="(item,index) in testList" 
		    	:key="item.id"
		    	> 
		    	{{ item.name}}
			</router-link>
		</ul>
	</div>
</template>
<script>
import Xiding from '@/pages/xiding/xiding'
export default{
	name:'test',
	data () {
		return{
			testList:[
			{
				id:'002',
				url:'links/',
				name:'links',
				tag:'One'	
			},
			{
				id:'003',
				url:'demo/bus/',
				name:'bus传值',
				tag:'a'

			},
			{
				id: '004',
				url: 'demo/xiding/',
				name: '吸顶',
				tag: 'xiding'
			},
			{
				id: '005',
				url: 'demo/js/',
				name: 'split、join应用',
				tag: 'js'
			},
			{
				id: '006',
				url: 'demo/accordion/',
				name: '手风琴',
				tag: 'demo'
			},
			{
				id: '007',
				url: 'demo/tabs/',
				name: 'tabs',
				tag: 'demo'
			}]
		}
	},
	components:{
		Xiding
	}
}
</script>
<style scoped lang='scss'>
div{
	font-size:20 * $unit;
	margin-top: 50 * $unit;
}
ul{
	text-transform: capitalize;
	@include LineH(40);
	text-align: center;
}
</style>