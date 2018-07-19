<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"/>
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
  background: #fff;
  font-family: 'PingFang SC'
}

i {
  font-style: normal
}

.navListActive {
  color: red;
}

#app {
  height: 100%;
}
</style>
