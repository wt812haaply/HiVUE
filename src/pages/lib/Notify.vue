<template>
  <transition 
    name="notify" 
    @after-enter="showNotify" 
  >

  <div class="notify" v-if="open">
    <slot name="notifyInfo"></slot>
  </div>
</transition>
</template>
<script>
export default {
  name: 'Notify',
  data () {
    return {
      timer: '',
      // currentMsg:this.value
    }
  },
  props: ['open'],
  computed: {
    getStep () {
      if (this.step) {
        return this.step
      } else {
        return 3000
      }
    }
  },
  watch:{
    // currentMsg(val) {
    //   this.$emit('input',val)
    // },
    // value(val) {
    //   this.currentMsg = val
    // }
  },
  methods: {
    showNotify: function () {
      this.$emit('show')
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.$emit('ColseNotify')
        // this.currentMsg=''
      }, this.getStep)
    },
    promptHide: function () {
      this.$emit('hide')
    }
  }
}
</script>
<style scoped lang='scss'>
.notify{
  position: absolute;
  width: 100%;
  bottom: 0;
  @include LineH(50);
  background: red;
  font-size: 12 * $unit;
}
  .notify-enter-active {
    animation: fadeIns 1s;
  }
  .notify-leave-active {
    animation: fadeIns .5s reverse;
  }
  @keyframes fadeIns {
    from {
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
