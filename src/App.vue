<template>
  <div id="app">
    <transition>
      <router-view v-wechat-title="$route.meta.title"/>
    </transition> 
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {}
}

</script>
<style>
body {
  font-family: 'PingFang SC'
}

i {
  font-style: normal
}

.navListActive {
  color: red;
}

#app {
  background: #fff;
  height: 100%;
  font-size: 12px;
}
button{
  width: 100px;
  height: 40px;
  border:1px red solid;
  background: antiquewhite;
  color: #000;
  display: block;
  margin: 10px 0;
}
/*  组件动画
<transition 
  appear
  enter-active-class="animated slideOutDown" lang="结束的动画"
  leave-active-class="animated swing"    lang="点击后执行的动画"
  appear-active-class="animated flash" lang="入场动画"
>
</transition> 
 */


</style>
