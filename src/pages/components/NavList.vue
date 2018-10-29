<template>
	<div>
		<ul>
			<router-link
				tag="li"
				:to="item.url"
				v-for="(item,index) in links"
				:key="index"
        >
        <i class="iconSize" :class="calculate(index)"></i>
        <i>{{item.title}}</i>
			</router-link>

		</ul>
	</div>
</template>

<script>

export default {
	name: 'navList',

	data (){
		return {
      iconArray:['icon_home','icon_cart','icon_list','icon_earth','icon_heart'],
			links:[{
				id: '001',
				url: '/pages/links/One',
				title: '首页',
			},
			{
				id: '002',
				url: '/pages/links/Two',
				title: '选衣',
			},
			{
				id: '003',
				url: '/pages/links/Three',
				title: '衣箱',
			},
			{
				id: '004',
				url: '/pages/links/Four',
				title: '我的',
			},
			{
				id: '005',
				url: '/',
				title: '返回首页',
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
    calculate(index) {
      return this.iconArray[index]
    }

	},
	computed: {
    getUrl() {
      return this.imgData[this.$route.path];
    }
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
    line-height: 20px;
    padding: 4 * $unit 0  2 * $unit 0;
		//@include LineH(50);
    flex-wrap: wrap;
    i{
      width:100%;
      flex-wrap: wrap;
      display: flex;
      justify-content:center;
      line-height: 18 * $unit;
    }
	}
  .iconSize{
    font-size:16 * $unit;
  }
	ul{
		/deep/ li.navListActive:last-of-type{
			color: #222
		}
	}
</style>
