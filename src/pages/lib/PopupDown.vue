<!-- 模板展示 -->
<template>
  <transition name="prompt">
  	<div class="FadeInUp" v-if="open">
		<div class="FadeInUpCon">
			<div class="hah">
				<div @click="ClosePopupDown">
					<slot name="title"></slot>
				</div>
				<div class="list">
					<slot name="list"></slot>
				</div>
			</div>
		</div>
		<div class="FadeInUpMask" @click="ClosePopupDown"></div>
	</div>
	</transition>
</template>

<!-- 逻辑处理 -->
<script>
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
	name:'PopupDown',
	data () {
		return{

		}
	},

	// 组件
	components:{

	},

	props: ['open'],

	// 事件方法
	methods: {
		ClosePopupDown(){
	        this.$emit("PopupDownI")
	     }
	},

	// 计算属性
	computed: {

	},

	// 侦听属性
	watch:{

	},



	created(){

	}
}
</script>


<!-- 样式处理 -->
<style scoped lang='scss'>

  .prompt-enter-active {
    animation: fadeInUp .2s;
  }
  .prompt-leave-active {
    animation: fadeInUp .1s reverse;
  }
  @keyframes fadeInUp {
    from {
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }


.FadeInUp{
	position: fixed;
	bottom: -1px;
	@include LineH(50);
	width: 100%;
	height: 100%;
	& > &Con{
		background:#fff;
		width: 100%;
		height:300px;
		position: absolute;
		bottom: 0;
		z-index: 10;
		
		.FadeInUpBtn{
			@include LineH(40)
			background: #ff544b;
			text-align: center;
			width: 100%;
			position: fixed;
			bottom: 0;
		}
	}
	& > &Mask{
		@include mask
		background: rgba(0, 0, 0, .5);
	}
}


.hah{
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	.list{
		flex: 1;
		overflow: scroll;
	}
}

</style>