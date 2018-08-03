<template>
  <div class="appContainer">
    <div class="appHeader">
      我的
    </div>
    <div class="appContent">
      <div style="height:1500px">1111</div>
    </div>
    <div class="appFooter">
      <navList />
    </div>
  </div>
</template>
<script>
import navList from '@/pages/links/NavList'
export default ({
  name: 'four',
  data() {
    return {}
  },
  components: {
    navList
  }
})
</script>
<style scoped lang='scss'>
#app > {
   @include layout(43,50)
}

</style>
