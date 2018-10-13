<template>
  <div class="appContainer">
    <div class="appHeader">
      选衣
    </div>
    <div class="appContent">
      <div class="Two">
        <div class="left">
          <div class="leftImg">
            <img :src="getUrl" alt="">
          </div>
          <ul class="leftUl">
            <router-link tag="li" v-for="(item,index) in nav" :to="{path: '/pages/links/Two/' + item.tag}" :key="index">
              {{item.title}}
            </router-link>
          </ul>
        </div>
        <div class="right">
          <!-- {{imgData}} -->
          {{getUrl}}
          <router-view/>
        </div>
      </div>
    </div>
    <div class="appFooter">
      <navList />
    </div>
  </div>
</template>
<script>
import navList from '@/pages/links/NavList'
export default {
  name: 'two',
  data() {
    return {
      nav: [{
          title: '第一个导航',
          tag: 'TwoA'
        },
        {
          title: '第二个导航',
          tag: 'TwoB'
        }
      ],
      imgData: {
        '/pages/links/Two/TwoA': require('../../assets/test1.jpg'),
        '/pages/links/Two/TwoB': require('../../assets/test2.jpg'),
      },
    }
  },
  computed: {
    getUrl() {
      return this.imgData[this.$route.path];
    }
  },
  created() {
    // this.imgData = this.$route.path;
    console.log(this.$route.path);
  },
  components: {
    navList,
  },

}

</script>
<style scoped lang='scss'>
#app > {
   @include layout(43,50)
}
.Two {
  display: flex;
  justify-content: space-between;
}

.left,
.right {}

.navListActive {
  background: blue;
  color: #fff;
}

.leftImg {
  @include WH(100);
  background: red;
  @include imgP(100, 100)
}

ul.leftUl {
  li {
    @include LineH(50);
  }
}

</style>
