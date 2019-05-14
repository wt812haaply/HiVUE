<template>
	<div>
		<div @click="headMsg">点我下面的文案会替换</div>
		<Bb></Bb>
    <router-link tag="div" to="item">
      去item
    </router-link>
	</div>
</template>

<script>
import Bb from './b'
	export default {
		data () {
			return{
				headSS:'我是a.vue里的数据',
			}
		},
		components:{
			Bb,
		},
		methods:{
			headMsg(){
				this.bus.$emit("change",this.headSS);
				console.log(this.headSS)
			}
		}
	}
</script>
<style scoped lang='scss'>
div{
	@include LineH(40);
	background: #eee;
	@include line(borderBottom);
}	
</style>
