<template>
  <div>
    <div class="mnm"></div>
    <BB :cont="contB" />
    <div ref="hello" class="ab" @click="aaclick" >按钮</div>
    <div style="height:3000px;">111</div>
  </div>
</template>
<script>
import BB from '@/pages/xiding/BB'
export default {
  name: 'app',
  data(){
    return {
      contB:'',
    }
  },
  components:{
    BB
  },
  methods: {
    aaclick(){
      this.contB = this.$refs.hello.className;
      // console.log(this.contB)
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
div{
  @include LineH(60);
}

</style>
