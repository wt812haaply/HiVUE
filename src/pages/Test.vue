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
export default{
	name:'test',
	data () {
		return{
			testList:[
			{
				id:'000',
				url:'demo/father/',
				name:'父传子',
				tag:'father'
			},
      {
        id:'001',
        url:'demo/child/',
        name:'子传父',
        tag:'father'
      },
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
				id: '005',
				url: 'demo/splitOrjoin/',
				name: 'split、join应用',
				tag: 'split'
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
			},
			{
				id: '008',
				url: 'demo/sticky/',
				name: 'sticky吸顶',
				tag: 'demo'
			},
      {
        id:'009',
        url:'demo/mixinsDemo/',
        name:'mixins',
        tag:'mixinsDemo'
      },
			{
				id: '010',
				url: 'demo/scroller/',
				name: '下拉刷新',
				tag: 'demo'
			},
      {
        id:'0011',
        url:'demo/testDemo/',
        name:'测试',
        tag:'test'
      },
      {
        id:'0012',
        url:'demo/vuexDemo/',
        name:'vuex测试',
        tag:'vuexText'
      },
      {
        id:'0013',
        url:'demo/vuexDemo/',
        name:'vuexData测试',
        tag:'vuexData'
      }
			]
		}
	},
  methods: {

  },
  // 接口数据
  created(){

  },
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
