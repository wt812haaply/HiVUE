<template>
  <div class="appContainer">
    <div class="appHeader">
      衣箱
    </div>
    <div class="appContent">

      <!-- 1 -->
      <div lang="en" @click="closeB">打开PopupCenter</div>
      <Popup-Center 
        @btnLeft="linksA" 
        @btnRight="linksB" 
        @closeCenterBtn="closeB" 
        @oneBtn="oneBtn" 
        :open="OpenPopupCenter">
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
        <div slot="btnA">left</div>
        <div slot="btnB">right</div>
        <!-- oneBtn  1个 -->
        <div slot="oneBtn">
          <div class="oneBtn">关闭</div>
        </div>
      </Popup-Center>
      <!-- 1 End-->

      
      <!-- 2 -->
      <div lang="en" @click="showPrompt">打开prompt</div>
      <Prompt 
        :open="OpenPrompt"
        :step="step" 
        @toastColse="ColsePrompt"
        >
        <p slot="prompt_info">{{ promptMsg }}</p>
      </Prompt>


      <!-- 3 -->
      <div lang="en" @click="PopupDown">打开PopupDown</div>
      <Popup-Down
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
      </Popup-Down>
      <!-- 3 End -->

      <!-- 4 -->
      <div lang="en" @click="PopupRight">打开PopupRight</div>

        <Popup-Right
          :open="OpenPopupRight"
          @closeRightBtn="closeRight"
        >
          <div>111</div>
          <div>222</div>
        </Popup-Right>

        
    </div>
    <div class="appFooter">
      <NavList />
    </div>
  </div>
</template>
<script>
import NavList from '@/pages/links/NavList'
import Prompt from '@/pages/lib/Prompt'
import PopUp from '@/pages/lib/PopUp'
import PopupCenter from '@/pages/lib/PopupCenter'
import PopupDown from '@/pages/lib/PopupDown'
import PopupRight from '@/pages/lib/PopupRight'
import PopupRight1 from '@/pages/lib/PopupRight1'
export default {
  name: 'three',
  data() {
    return {
      OpenPopupCenter: false,
      promptState:false,
      OpenPopupDwon:false,
      OpenPopupRight:false,
      promptMsg: '这里是错误提示！这里是错误提示！这里是错误提示！这里是错误提示！这里是错误提示！这里是错误提示！',


      OpenPrompt: false,
      step: 1000,
    }
  },
  methods: {
    // PopupCenter
    linksA() {
      console.log("left的按钮")
    },
    linksB() {
      console.log("right的按钮")
    },
    closeB() {
      this.OpenPopupCenter = !this.OpenPopupCenter
      console.log("------this.OpenPopupCenter------")
    },
    oneBtn() {
      console.log("-----oneBtn按钮关闭-----")
      this.closeB()
    },


    // prompt
    showPrompt () {
        this.OpenPrompt = true
    },
    ColsePrompt() {
        this.OpenPrompt = false
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
    NavList,
    PopUp,
    Prompt,

    PopupCenter,
    PopupDown,
    PopupRight,
    PopupRight1,
  }
}

</script>
<style scoped lang='scss'>
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


/* !
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

.prompt{
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
</style>
