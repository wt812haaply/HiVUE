<template>
	<div>
		<ul>
			<router-link 
				tag="li"
				:to="item.url" 
				v-for="(item,index) in links" 
				:key="index">
					{{item.title}}
			</router-link>
		</ul>
	</div>
</template>

<script>
	
export default {
	name: 'navList',
	data (){
		return {
			links:[{
				id: '001',
				url: '/pages/links/One',
				title: '首页'
			},
			{
				id: '002',
				url: '/pages/links/Two',
				title: '选衣'
			},
			{
				id: '003',
				url: '/pages/links/Three',
				title: '衣箱'
			},
			{
				id: '004',
				url: '/pages/links/Four',
				title: '我的'
			},
			{
				id: '005',
				url: '/',
				title: '首页'
			}]
		}
	},
	// methods: {
	// 	goHome(){
	// 		this.$router.push({
	// 			path: '/',
	// 		})
	// 	}
	// },
	methods:{	
	},
	computed: {
	}
}
</script>

<style scoped lang='scss'>
	div{
		font-size:14 * $unit;
	}
	ul{
		background: #fff;
	}
	ul,li{
		display: flex;
		flex: 1;
		align-content: center;
		justify-content: center;
		@include LineH(50);

	}
	ul{
		/deep/ li.navListActive:last-of-type{
			color: #222
		}
	}
</style>