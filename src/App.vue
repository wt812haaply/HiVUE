<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
  }
}
</script>

<style>
body{
  background: #fff;
  font-family: 'PingFang SC'
}
i{
	font-style: normal
}
  .navListActive{
    color: red;
  }
  #app{
    height: 100%;
  }
</style>