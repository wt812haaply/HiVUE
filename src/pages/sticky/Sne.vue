<template>
	<div>
<div class="boxA"></div>
<div class="boxB"></div>
<!--    <sticky-top 
   		top="0" 
   		>
   	</sticky-top> -->
    <stickytop top="0" :sneMsg="msg" :scroll-y="scrollY"></stickytop>

	<div lang="en" style="height:1600px;">dfdfsdf</div>
	</div>
</template>

<script>
import stickytop  from './components/ne'
export default {
	data(){
		return {
			scrollY: null,
      		msg:'数据是由Sne提供的'
		}
	},
  components:{
    stickytop,
  },
	mounted() {
	    window.addEventListener('scroll', (event) => {
	      this.scrollY = Math.round(window.scrollY);
	    });
	}
}
</script>

<style scoped lang='scss'>
.boxA{
	width: 100%;
	@include LineH(100);
	@include line(borderBottom);
}
.boxB{
	@extend .boxA
}	
div > .boxA{
	background: blue;
}
div > .boxB{
	background: green;
}
[lang|=en]{
	background: #eee;
}
</style>