<template>
	<div>
		<div>{{ yes }}</div>
	</div>
</template>

<script>
	export default {
		data () {
			return{
				yes:'我是b.vue里的数据，替换我',
			}
		},
		methods: {

		},
		mounted(){
	  	let this_ = this;
	  	this.bus.$on("change",function(msg){
	  		alert(msg)
	  		this_.yes = msg;
	  	})
	  }
	}
</script>
<style scoped lang='scss'>
	
</style>