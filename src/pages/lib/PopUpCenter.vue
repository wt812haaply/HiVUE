<template>
  <transition name="dialog-slide" appear>
    <div class="PopupCenter" v-if="open">
      <div class="wtt">
        <div class="cont">
          <slot name="banner"></slot>
          <div class="item">
            <slot name="title"></slot>
            <slot name="info"></slot>
          </div>

          <ul class="popBtn">
            <li @click="btnA">
              <slot name="btnA"></slot>
            </li>
            <li @click="btnB">
              <slot name="btnB"></slot>
            </li>
            <li @click="btnC">
              <slot name="btnC"></slot>
            </li>
          </ul>

          <div @click="oneBtn">
            <slot name="oneBtn"></slot>
          </div>

        </div>
        <div class="mask" @click="maskClose"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PopUpCenter',
  data() {
    return {
    }
  },
props: ['open'],
 methods: {
      btnA: function () {
        this.$emit('btnA')
      },
      btnB: function () {
        this.$emit('btnB')
      },
      btnC: function () {
        this.$emit('btnC')
      },
      maskClose(){
        this.$emit("closeCenterBtn")
      },
      oneBtn(){
        this.$emit("oneBtn")
      }
    }
}
</script>

<style scoped lang='scss'>
.dialog-slide-enter-active {
    animation: zoomIn1 1s;
  }
  .dialog-slide-leave-active {
    animation: zoomIn1 .5s reverse;
  }
  .dialog-slide-enter-active .yi23-dialog {
    animation: zoomIn 1s;
  }
  .dialog-slide-leave-active .yi23-dialog{
    animation: zoomIn .5s reverse;
  }
  @keyframes zoomIn1 {
    from {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
  }
  @keyframes zoomIn {
    from {
      transform: translate(-50%,-50%) scale(0);
    }

    50% {
      transform: translate(-50%,-50%) scale(0);
    }
  }




.PopupCenter {
  background: red;
}

.item {
  padding: 0 10px;
}
.wtt {
  @include center(300);
}

.wtt>.mask {
  background: rgba(0, 0, 0, .4);
}

ul.popBtn{
  width: 100%;
  display: flex;
  li{
    flex: 1;
    text-align: center;
    @include LineH(50)
  }
}

</style>
