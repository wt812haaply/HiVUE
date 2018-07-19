<template>
  <div class="appContainer">
    <div class="appHeader">
      首页
    </div>
    <div class="appContent">
      <div @click="openPopUp">popUp点击打开</div>
      <Home-PopUp />
      <PopUp>
        <div slot="banner">
          <div class="banner">
            <img src="https://yimg.yi23.net/products/20310/167-20180212_140532-1518415532788-1.jpg!840" alt="">
          </div>
          <div>111</div>
        </div>
        <div slot="info">
          <div class="info">
            222
          </div>
        </div>
        <div slot="desc">
          333
        </div>
      </PopUp>
    </div>
    <div class="appFooter">
      <NavList />
    </div>
  </div>
</template>
<script>
import NavList from '@/pages/links/NavList'
import HomePopUp from '@/pages/home/components/PopUp'
import PopUp from '@/pages/lib/PopUp'
export default {
  name: 'one',
  data() {
    return {}
  },
  components: {
    NavList,
    HomePopUp,
    PopUp
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
