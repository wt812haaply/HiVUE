<template>
  <div class="smallLoadingCenter">
    <div class="cont">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540551959983&di=3584e23f496f70df0cf78b5925f570bd&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01067e58edf49da8012049efa65a00.gif" alt="">
    </div>
    <div class="mask"></div>
  </div>
</template>
<script>
export default {
  name: 'smallLoading',
  data () {
    return {
    }
  },
  props: [],
  computed: {

  },
  watch:{

  },
  methods: {

  }
}
</script>
<style scoped lang='scss'>

.smallLoadingCenter{
  @include center(200);
  .mask{
    background: rgba(0,0,0,.7);
  }
}
.smallLoadingCenter >.cont{
  position: fixed;
  > img{
    display: block;
  }
}
</style>
