<template>
    <transition name="fadeInRight">
    <div class="PopupRight" v-if="open">
      <div class="rightCont">
        <div class="cont1">
            <slot></slot>
        </div>
        <div class="mask" @click="maskClose"></div>
      </div>
    </div>
    </transition>
</template>

<script>
export default {
  name: 'PopupRight',
  data() {
    return {
    }
  },
props: ['open'],
 methods: {
      maskClose(){
        this.$emit("closeRightBtn")
      },
    }
}
</script>

<style scoped lang='scss'>

.rightCont {
}
.rightCont > .mask {
  @include mask
  background: rgba(0, 0, 0, .5);
}

.rightCont > .cont1{
  width: 80%;
  height: 100%;
  background: green;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  float: right;
  overflow: scroll;
}

.PopupRight{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}



@keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInRight-enter-active {
    animation: fadeInRight .2s;
  }
  .fadeInRight-leave-active {
    animation: fadeInRight .1s reverse;
  }


</style>
