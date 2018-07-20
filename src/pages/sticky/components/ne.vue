<template>
	<div>
		<div class="a-box" :style="myStyle">我是ne组件 -> {{ sneMsg }}</div>
	</div>
</template>

<script>
export default {
	name:'ne',
	data () {
		return{
			myStyle: {},
          	originalTop: 0,
		}
	},
	props: ['top','sneMsg','scrollY'],
	mounted() {
        this.originalTop = this.$el.getBoundingClientRect().top;
      },
	watch: {
		scrollY(newValue) {
		  const rect = this.$el.getBoundingClientRect();
		  const newTop = this.scrollY + +this.top - this.originalTop;

		  if (newTop > 0) {
		    this.$set(this.myStyle, 'top', `${newTop}px`);
		  } else {
		    this.$delete(this.myStyle, 'top');
		  }
		}
	}
}
</script>
<style scoped lang='scss'>
.a-box {
	display: inline-block;
	width: 100%;
	@include LineH(40);
	background: #fff;
	position: relative;
	min-height: 40 * $unit;
}
</style>