<template>
	<div>
		<div style="width: 100%; height: 50px; background: RED"></div>
		<Xiding></Xiding>
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
				id:'001',
				url:'sticky/',
				name:'sticky',
				tag:'Sne'
			},
			{
				id:'002',
				url:'links/',
				name:'links',
				tag:'One'	
			},
			{
				id:'003',
				url:'bus/',
				name:'bus',
				tag:'a'

			},
			{
				id: '004',
				url: 'xiding/',
				name: 'xiding',
				tag: 'xiding'
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