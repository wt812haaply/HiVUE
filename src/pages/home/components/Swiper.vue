<template>
  <div class="homeBanner">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide class="slideIMG" v-for="item in cont" :key="item.id">
        <img :src="item.imgUrl" alt="" @click="oneClick">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      content: 'Swiper',
      swiperOption: {
        spaceBetween: 10,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          bulletElement: 'li',
          clickable: true
        }
      },
    }
  },
  props:['cont'],
  methods:{
    oneClick(){
      this.$router.push({
        path: '/pages/links/One'
      })
    }
  }
}

</script>
<!-- sass -->
<style scoped lang='scss'>
.homeBanner {
  background: #eee;
}
.slideIMG {
  display: flex;
  @include imgP(750,384);
}

/deep/ .swiper-pagination-bullet {
  background: #fff;
  @include WH(4)
}

.swiper-container-horizontal>.swiper-pagination-bullets {
  bottom: 6px;
}

</style>
