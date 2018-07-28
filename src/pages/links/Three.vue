<template>
  <div class="appContainer">
    <div class="appHeader">
      衣箱
    </div>
    <div class="appContent">

      <!-- 1 -->
      <div lang="en" @click="closeB">打开popUp</div>
      <PopUp 
        @btnLeft="linksA" 
        @btnRight="linksB" 
        @popUpClose="closeB" 
        @oneBtn="oneBtn" 
        :open="dialogOpen">
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
      </PopUp>

      
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
      <div lang="en" @click="FadeInUp">打开FadeInUp</div>
      <Fade-In-Up 
        @FadeInUpI="CloseFadeInUp"
        :open="OpenFadeInUp"
      >
        <div slot="title">title</div>
        <div slot="list">
          <div>dkfldkfldkfl</div>
          <div>dkfldkfldkfl</div>
          <div>dkfldkfldkfl</div>
          <div class="info">
            这里是文案，显示2行这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案
          </div>
          <div class="info">
            这里是文案，显示2行这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案
          </div>
          <div class="info">
            这里是文案，显示2行这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案
          </div>
          <div class="info">
            1这里是文案，显示2行这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案这里是文案
          </div>
        </div>

      </Fade-In-Up>
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
import FadeInUp from '@/pages/lib/FadeInUp'
export default {
  name: 'three',
  data() {
    return {
      dialogOpen: false,
      promptState:false,
      OpenFadeInUp:false,
      promptMsg: '这里是错误提示！这里是错误提示！这里是错误提示！这里是错误提示！这里是错误提示！这里是错误提示！',


      OpenPrompt: false,
      step: 1000,
    }
  },
  methods: {
    linksA() {
      console.log("left的按钮")
    },
    linksB() {
      console.log("right的按钮")
    },
    closeB() {
      this.dialogOpen = !this.dialogOpen
      console.log("------this.dialogOpen------")
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


    // FadeInUp
    FadeInUp(){
      this.OpenFadeInUp = !this.OpenFadeInUp
      console.log("------this.FadeInUpOpen------")
    },
    CloseFadeInUp() {
      this.FadeInUp();
    }
  },
  components: {
    NavList,
    PopUp,
    Prompt,
    FadeInUp
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

</style>
