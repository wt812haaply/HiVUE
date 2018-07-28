<template>
  <transition name="fadeInRight">
    <slot></slot>
  </transition>
</template>


<style scoped lang='scss'>

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
