<!-- 模板展示 -->
<template>
	<div>

      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>

      <div class="tabs-details">
        <slot></slot>
      </div>



	</div>
</template>

<!-- 逻辑处理 -->
<script>
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
	name:'tabs',
	data () {
		return{
			tabs: []
		}
	},

	// 组件
	components:{

	},

	// 组件传值
	props:[],

	// 事件方法
	methods: {
    selectTab: function(selectedTab) {
      console.log(selectedTab,'m')
	      this.tabs.forEach(tab => {
	        tab.isActive = (tab.name == selectedTab.name);
	      });
	    }
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
	created() {
    	this.tabs = this.$children;
  	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='scss'>
	.tabs{
		background: #efefef;
		display: flex;
		width: 100%;
		ul{
			display: flex;
			width: 100%;
			text-align: center;
			@include LineH(50)

			li{
				flex: 1;
			}
		}
	}
	.is-active{
		@include line(borderBottom)
	}
	a{
		display: block;
	}
</style>
