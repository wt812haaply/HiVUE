<template>
  <div class="appContainer">
    <div class="appHeader">
      衣箱
      <i @click="testLinks">Test</i>
    </div>
    <div class="appContent">

      <div class="hha" @click="$router.push('/pages/links/Four')">返回首页</div>

      <!-- 1 PopupCenter-->
      <div lang="en" @click="closeB">打开PopupCenter</div>
      <popup-Center
        @btnA="linksA"
        @btnB="linksB"
        @btnC="linksC"
        @closeCenterBtn="closeB"
        @oneBtn="oneBtn"
        :open="OpenPopupCenter"
        v-show="stepTip.mask"
      >
        <div slot="banner">
          <div class="banner">
            <img src="http://tu.yi23.net/collections/863-20180528_184712-1527504432586-1.jpg" alt="">
          </div>
        </div>
        <!-- title -->
        <div slot="title">
          <div class="title">
            标题在这里
          </div>
        </div>
        <!-- info -->
        <div slot="info">
          <div class="info">
            这里是文案，显示2行这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案
          </div>
        </div>
        <!-- 按钮 2个 -->
        <div slot="btnA">btnA</div>
        <div slot="btnB">btnB</div>
        <div slot="btnC">btnC</div>
        <!-- oneBtn  1个 -->
        <div slot="oneBtn">
          <div class="oneBtn">关闭</div>
        </div>
      </popup-Center>
      <!-- 1 End-->


      <!-- 2 notify-->
      <div lang="en" @click="showNotify">打开Notify</div>
      <notify
        :open="OpenNotify"
        :step="step"
        @ColseNotify="ColseNotify"
        >
        <p slot="notifyInfo">{{ NotifyMsg }}</p>
      </notify>


      <!-- 3 PopupDown-->
      <div lang="en" @click="PopupDown">打开PopupDown</div>
      <popup-Down
        @PopupDownI="ClosePopupDown"
        :open="OpenPopupDwon"
      >
        <div slot="title">
          <div class="title">title <i>x</i></div>
        </div>
        <div slot="list">
          <div>dkfldkfldkfl</div>
          <ul class="listUl">
              <li>111111</li>
              <li>222</li>
              <li>333</li>
              <li>4444</li>
              <li>222</li>
              <li>333</li>
              <li>4444</li>
              <li>222</li>
              <li>333</li>
              <li>last--4444</li>
          </ul>
        </div>
      </popup-Down>
      <!-- 3 End -->

      <!-- 4 PopupRight -->
      <div lang="en" @click="PopupRight">打开PopupRight</div>

        <popup-Right
          :open="OpenPopupRight"
          @closeRightBtn="closeRight"
        >
          <div class="popupRight">
            <div>111</div>
            sdsdsdsd
          </div>
        </popup-Right>


    </div>
    <div class="appFooter">
      <navList />
    </div>
  </div>
</template>
<script>
import navList from '@/pages/components/NavList'
import popupCenter from '@/pages/lib/PopupCenter'
import popupDown from '@/pages/lib/PopupDown'
import popupRight from '@/pages/lib/PopupRight'
import notify from '@/pages/lib/Notify'

//引用方法地址
import utils  from '@/common/js/utils.js'
export default {
  name: 'three',
  data() {
    return {
      // OpenPopupCenter: false,
      OpenPopupCenter: true,
      promptState:false,
      OpenPopupDwon:false,
      OpenPopupRight:false,
      NotifyMsg: '这里是错误提示！这里是错误提示！这里是错误提示！这里是错误提示！这里是错误提示！这里是错误提示！',


      OpenNotify: false,
      step: 1000,
      stepTip: {
        one:true,
        two:false,
        three:false,
        mask:true,
      },
    }
  },
  methods: {
//    getLocalStorage(){
//      let once = localStorage.getItem("indexTips")
//      if(!once){
//        localStorage.setItem("indexTips",1)
//        this.stepTip.mask = !this.stepTip.mask;
//        console.log(this.stepTip.mask)
//      }
//      else {
//        this.stepTip.mask = !this.stepTip.mask;
//        console.log(this.stepTip.mask)
//      }
//    },


    // testlinks
    testLinks(){
      this.$router.push({
        path: '/pages/Test'
      })
    },
    // PopupCenter
    linksA() {
      console.log("btnA的按钮")
    },
    linksB() {
      console.log("btnB的按钮")
    },
    linksC() {
      console.log("btnC的按钮")
    },
    closeB() {
      this.OpenPopupCenter = !this.OpenPopupCenter
      console.log("------this.OpenPopupCenter------")
    },
    oneBtn() {
      console.log("-----oneBtn按钮关闭-----")
      this.closeB()

    },


    // notify
    showNotify () {
        this.OpenNotify = true
    },
    ColseNotify() {
        this.OpenNotify = false
    },


    // PopupDown
    PopupDown(){
      this.OpenPopupDwon = !this.OpenPopupDwon
      console.log("------this.PopupDown true------")
    },
    ClosePopupDown() {
      this.PopupDown();
      console.log("------this.OpenPopupDwon false------")
    },

    // PopupRight
    PopupRight(){
      this.OpenPopupRight = !this.OpenPopupRight
    },
    closeRight(){
      this.PopupRight()
    }
  },
  components: {
    navList,
    popupCenter,
    popupDown,
    popupRight,
    notify
  },

  created() {

    //公用方法
    let once =  utils.messageStatus()
    if(once){
      this.stepTip.mask = true;
    }else {
      this.stepTip.mask = false;
    }
    //end

  }
}

</script>
<style scoped lang='scss'>
#app > {
   @include layout(43,50)
}
.hha{
  line-height: 31px;
  font-size:24px;
  color: #333;
}
.banner {
  background: blue;
  color: #fff;
  @include imgP(750, 360)
}

.title {
  text-align: center;
  font-size: 30 * $unit;
  @include LineH(80);
}

.info {
  font-size: 14 * $unit;
  color: green;
  line-height: 19 * $unit;
  @include Highline(2);
  margin-bottom: 10px;
}

.oneBtn {
  flex: 1;
  @include LineH(50);
  text-align: center;
  margin-bottom: 10px;
}

.menuA {
  background: red
}

.menuB {
  background: blue;
}


/*
	deep 优先 清楚ul.popBtn 的样式
/deep/ ul.popBtn{
  width: 100%;
  display: flex;
  background: red;
  height: 0;
  li{
    flex: 1;
    text-align: center;
    @include LineH(0)
  }
}
*/

.notify{
  p{
    padding: 0 50 * $unit 0 10px;
    @include Highline(1);
    color: #fff;
  }
}

/* 忽略style */
div[lang|=en]{
  @include LineH(50);
}



/* popupDown */
.title{
  color: red;
  @include LineH(40)
  text-align: left;
  font-size: 14 * $unit;
  background:#A8FF1A;
  display: flex;

  i{
    text-align: right;
    flex: 1;
    padding-right: 12px;
  }
}
ul.listUl{
  li{
    color: blue;
    @include LineH(50)
    background: pink;
  }
}
.popupRight{
  height: 1500px;
  position: absolute;
  width: 100%;
  background: red;
}
.appHeader i{
  right: 0;
  position: absolute;
  float: right;
}

</style>
