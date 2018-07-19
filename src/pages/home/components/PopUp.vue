<template>
    <transition>
      <div class="homePopUp" v-show="getpopUpStatus" @click="closePopUp">
        <div class="cont">
          <div class="contImg">
            <img src="http://img.sccnn.com/bimg/338/50105.jpg" alt="">
          </div>
        </div>
        <div class="mask"></div>
      </div>
    </transition>
</template>
<script>
export default {
  name: 'HomePopUp',
  data() {
    return {
    }
  },
  methods:{
    closePopUp(){
      this.$store.state.popUpstatus = !this.$store.state.popUpstatus
    }
  },
  computed:{
    getpopUpStatus(){
      return this.$store.state.popUpstatus
    }
  }
}

</script>
<style scoped lang='scss'>
.homePopUp {
  @include center(200);
  .mask{
    background: rgba(0,0,0,.7);
  }
  .contImg{
    @include imgP(200,200);
  }
}

</style>
