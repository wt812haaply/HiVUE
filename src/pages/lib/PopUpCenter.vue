<template>
  <transition>
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
        this.$emit('btnLeft')
      },
      btnB: function () {
        this.$emit('btnRight')
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
