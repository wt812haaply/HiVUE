<template>
  <div class="homeRecommend">
    <div class="recTitle">本周热门榜单<i class="">more</i></div>
    <div class="recCont">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in cont" :key="item.id">
          <div class="recContList">
            <div class="listLi">
              <div class="recIMG">
                <img :src="item.imgUrl" alt="">
              </div>
              <p>{{item.desc}}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      swiperOption: {
        slidesPerView: 3.5,
        slidesPerGroup: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  props:['cont']
}

</script>
<style scoped lang='scss'>
.homeRecommend {
  font-size: 12 * $unit;
  font-style: normal;
}

.recTitle {
  display: flex;
  justify-content: space-between;
  padding: 0 10 * $unit;
  line-height: 45 * $unit;
}
.recCont{
  /* padding-bottom: 20px; */
}
.recContList {
  margin: 0 10px;
  .listLi {
    display: flex;
    flex-wrap: wrap;
    width: 100 * $unit;
    .recIMG {
      @include imgP(300,375);
      padding-bottom: 125%;
    }
    p {
      text-align: center;
      display: block;
      width: 100%;
      @include LineH(40);
      font-size: 13 * $unit;
    }
  }
}


/deep/ .swiper-container {
  margin: 0;
  width: 100%;
}

/deep/ .swiper-container-horizontal>.swiper-pagination-progressbar {
  top: auto;
  bottom: 0;
  @include WH(355,2);
  left: 10px;
}

/deep/ .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: #ff544b;
}

/deep/ .swiper-pagination-progressbar {
  background: rgba(0, 0, 0, .05)
}

</style>
