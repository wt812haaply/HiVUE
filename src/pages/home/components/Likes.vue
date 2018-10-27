<template>
  <div class="HomeLikes">
    <div class="likesTitle font-m">猜你喜欢<i>more</i></div>
    <div class="likesCont">
      <ul class="likesContList">
        <li v-for="item in cont" :key="item.id" class="wt">
          <div class="likesIMG">
            <img v-lazy="item.listCon" alt="">
          </div>
          <div class="likesDesc">
            <div class="likesDescName">{{item.listCon.name}}</div>
            <div class="likesDescComment">{{item.listCon.comment}}条评论</div>
            <div class="likesDescMoney">￥{{item.listCon.money}}<i>{{item.listCon.addr}}</i></div>
            <div class="likesDescProjectName" v-if="item.listCon.desc">{{item.listCon.desc}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeLikes',
  data() {
    return {}
  },
  props: ['cont'],
}

</script>
<style scoped lang='scss'>
.HomeLikes {
  padding: 0 10px;
  font-size: 12 * $unit;
}

.likesTitle {
  display: flex;
  line-height: 60 * $unit;
  justify-content: space-between;
}

.likesCont {
  ul.likesContList {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .wt {
      @include line(borderBottom);
    }
    li {
      display: flex;
      width: 100%;
      height: auto;
      padding: 10px 0;
      .likesIMG {
        display: flex;
        @include imgP(100,100);
        @include WH(100, 100);
        padding-bottom: 0;
      } 
      .likesDesc {
        flex: 1;
        padding-left: 10px;
        font-size: 12 * $unit;
      }
    }
    li:first-of-type{
    	padding-top: 0;
    }
  }
}

.likesDesc {
  line-height: 33 * $unit;

  .likesDescName {
    font-size: 16 * $unit;
    @include Highline(1)
  }
  .likesDescComment {}
  .likesDescMoney {
    font-size: 18 * $unit;
    display: flex;
    justify-content: space-between;
    i {
      font-size: 12 * $unit;
    }
  }
  .likesDescProjectName {
    color: #ff544b;
    background: rgba(25, 84, 75, .05);
    padding: 5px;
    display: inline-block;
    margin: 16px 0 0 0;
    line-height: 22px;
    font-size: 10 * $unit;
  }
}

.likesDesc>.likesDescComment,
.likesDesc>.likesDescMoney {}

ul.likesContList .wt:last-of-type {
  @include line(noLine);
}

</style>
