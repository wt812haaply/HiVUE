<template>
  <div class="homeIcons">
    <!-- slides -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in cont" :key="item.id">
        <div class="iconsList">
          <div class="listLi yes">
            <div class="iconIMG">
              <img :src="item.imgUrl" alt="">
            </div>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Icons',
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      },
    }
  },
  props: ['cont'],
  computed: {
  }
}

</script>
<style scoped lang='scss'>
.homeIcons {
  padding-top: 16px;
  display: block;
}

.iconsList {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .listLi {
    display: flex;
    flex-wrap: wrap;
    width: 89.75 * $unit;
    height: auto;
    padding: 0 2 *$unit;
    .iconIMG {
      @include imgP(100,100);
    }
    p {
      text-align: center;
      display: block;
      width: 100%;
      padding: 10px 0;
      font-size: 13 * $unit;
    }
  }
}

/deep/ .swiper-container-horizontal>.swiper-pagination-bullets {
  bottom: 0px;
  height: auto;
  line-height: 1 * $unit;
  position: relative;
}

/deep/ .swiper-pagination-bullet-active {
  background: #ff544b;
}

/deep/ .swiper-pagination-bullet {
  @include WH(20, 2) border-radius: 0px;
}

</style>
