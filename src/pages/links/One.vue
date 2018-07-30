<template>
  <div class="appContainer">
    <div class="appHeader">
      首页
    </div>
    <div class="appContent">
      <div @click="openPopUp">打开popUp</div>
      <home-PopUp />
    </div>
    <div class="appFooter">
      <navList />
    </div>
  </div>
</template>
<script>
import navList from '@/pages/links/NavList'
import homePopUp from '@/pages/home/components/PopUp'
export default {
  name: 'one',
  data() {
    return {}
  },
  components: {
    navList,
    homePopUp,
  },
  methods: {
    openPopUp() {
      this.$store.state.popUpstatus = !this.$store.state.popUpstatus
    }
  },
  computeds: {
    oneGetPopUp() {
      this.$store.state.popUpstatus
    }
  }
}

</script>
<style scoped lang="scss">
.banner {
  @include imgP(200, 100);
}

</style>
