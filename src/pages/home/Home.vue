<template>
  <div class="appContainer">
    <div class="appHeader">
      <home-Header :headinfo="header" :haha="haha" />
    </div>

    <div class="appContent">
    <!-- <div></div> -->
    <!-- <transition name="animated" enter-active-class="animated bounceOutLeft" leave-active-class="animated bounceOutRight">
      <div class="homItem" v-show="headMsg">
        <div class="testImg">
          <img src="http://img.sccnn.com/bimg/338/50105.jpg" alt="">
        </div>
      </div>
    </transition> -->

    <home-Swiper :cont="swiperList" />
    <home-Icons :cont="iconList" />
    <home-Recommend :cont="recList" />
    <home-Likes :cont="likesList"  />
    <home-PopUp />

    </div>
    <div class="appFooter">
      <navList />
    </div>
  </div>

</template>
<!-- js -->
<script>
//组件
import navList from '@/pages/components/NavList'
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
import homeRecommend from './components/Recommend'
import homeLikes from './components/Likes'
import homePopUp from './components/PopUp'

//接口文件
import baidu  from '@/api/baidu'

export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeLikes,
    homePopUp,
    navList
  },
  data() {
    return {
      haha:'',
      show:false,
      headMsg:false,
      showPopUp:false,
      header:{
        left:'打开',
        right: '地址',
      },
      // swiper 数据
      swiperList: [{
        id: '0001',
        imgUrl: 'http://tu.yi23.net/posting/863-20180528_115204-1527479524727-1.jpg!750'
      }, {
        id: '0002',
        imgUrl: 'http://tu.yi23.net/posting/862-20180326_155937-1522051177207-1.jpg!750'
      }],

      //icons 数据
      iconList: [{
          id: '0001',
          imgUrl: 'http://tu.yi23.net/logservice/1269-20180327_113602-1522121762382-1.png',
          desc: '明星同款'
        },
        {
          id: '0002',
          imgUrl: 'http://tu.yi23.net/logservice/124-20180412_203145-1523536305424-1.png',
          desc: '春色萌动'
        },
        {
          id: '0003',
          imgUrl: 'http://tu.yi23.net/logservice/1269-20180327_113629-1522121789608-1.png',
          desc: '设计精选'
        },
        {
          id: '0004',
          imgUrl: 'http://tu.yi23.net/logservice/124-20180412_204549-1523537149334-1.png',
          desc: '温柔职场力量'
        },
        {
          id: '0005',
          imgUrl: 'http://tu.yi23.net/logservice/124-20180412_203929-1523536769086-1.png',
          desc: '约会换装'
        },
        {
          id: '0006',
          imgUrl: 'http://tu.yi23.net/logservice/1194-20180316_190752-1521198472264-1.png',
          desc: '时尚奢侈'
        },
        {
          id: '0007',
          imgUrl: 'http://tu.yi23.net/logservice/124-20180412_204651-1523537211208-1.png',
          desc: '搭配成套'
        },
        {
          id: '0008',
          imgUrl: 'http://tu.yi23.net/logservice/124-20180412_203047-1523536247233-1.png',
          desc: '运动类型'
        },
        {
          id: '0009',
          imgUrl: 'http://tu.yi23.net/logservice/124-20180412_203929-1523536769086-1.png',
          desc: '约会换装'
        }
      ],

      //rec 数据
      recList: [{
          id: '0001',
          imgUrl: 'http://tu.yi23.net/23919/249-20180510_190712-1525950432783-1.jpg!300',
          desc: '明星同款'
        },
        {
          id: '0002',
          imgUrl: 'http://tu.yi23.net/23916/249-20180510_190824-1525950504611-1.jpg!300',
          desc: '春色萌动'
        },
        {
          id: '0003',
          imgUrl: 'http://tu.yi23.net/23924/249-20180510_190326-1525950206190-1.jpg!300',
          desc: '设计精选'
        },
        {
          id: '0004',
          imgUrl: 'http://tu.yi23.net/23915/249-20180510_190958-1525950598984-1.jpg!300',
          desc: '温柔职场力量'
        },
        {
          id: '0005',
          imgUrl: 'http://tu.yi23.net/23927/249-20180510_190156-1525950116461-1.jpg!300',
          desc: '约会换装'
        },
        {
          id: '0006',
          imgUrl: 'http://tu.yi23.net/27545/249-20180510_173859-1525945139670-1.jpg!300',
          desc: '时尚奢侈'
        },
        {
          id: '0007',
          imgUrl: 'http://tu.yi23.net/27540/249-20180510_175331-1525946011322-1.jpg!300',
          desc: '搭配成套'
        },
        {
          id: '0008',
          imgUrl: 'http://tu.yi23.net/23906/249-20180510_193046-1525951846813-1.jpg!300',
          desc: '运动类型'
        }
      ],


      // Likes 数据
      likesList: [{
        id: '0001',
        listCon: {
          src: 'http://tu.yi23.net/Thumbs/41-20180629_105207-1530240727710-1.jpg!750',
          name: '好好-金色流苏礼服',
          comment: '1000',
          money: '281',
          addr: '北京',
          desc: 'BIZZCUTAulenti了说的客服',
        },
      }, {
        id: '0002',
        listCon: {
          src: 'http://tu.yi23.net/Thumbs/41-20180702_170259-1530522179742-1.jpg!750',
          name: '浅绿色抹胸礼服',
          comment: '10',
          money: '259',
          addr: '朝阳',
          desc: null,
        },
      }, {
        id: '0003',
        listCon: {
          src: 'http://tu.yi23.net/Thumbs/586-20180630_192956-1530358196975-1.jpg!750',
          name: '酒红色金色亮片娃娃领礼服酒红色金色亮片娃娃领\礼服',
          comment: '30',
          money: '300',
          addr: '北京',
          desc: null,
        },

      }, {
        id: '0004',
        listCon: {
          src: 'http://tu.yi23.net/Thumbs/586-20180630_192956-1530358196975-1.jpg!750',
          name: '酒红色金色亮片娃娃领礼服酒红色金色亮片娃娃领礼服',
          comment: '30',
          money: '300',
          addr: '北京',
          desc: '快结束了尽量减少来访记录设计费',
        },

      }, {
        id: '0005',
        listCon: {
          src: 'http://tu.yi23.net/Thumbs/586-20180630_192956-1530358196975-1.jpg!750',
          name: '酒红色金色亮片娃娃领礼服酒红色金色亮片娃娃领礼服',
          comment: '30',
          money: '300',
          addr: '北京',
          desc: null,
        },
      },{
        id: '0006',
        listCon: {
          src: 'http://tu.yi23.net/Thumbs/41-20180629_105207-1530240727710-1.jpg!750',
          name: '金色流苏礼服',
          comment: '1000',
          money: '281',
          addr: '北京',
          desc: 'BIZZCUTAulenti了说的客服',
        },
      }, {
        id: '0007',
        listCon: {
          src: 'http://tu.yi23.net/Thumbs/41-20180702_170259-1530522179742-1.jpg!750',
          name: '浅绿色抹胸礼服',
          comment: '10',
          money: '259',
          addr: '朝阳',
          desc: null,
        },
      }, {
        id: '0008',
        listCon: {
          src: 'http://tu.yi23.net/Thumbs/586-20180630_192956-1530358196975-1.jpg!750',
          name: '酒红色金色亮片娃娃领礼服酒红色金色亮片娃娃领\礼服',
          comment: '30',
          money: '300',
          addr: '北京',
          desc: null,
        },

      }, {
        id: '0009',
        listCon: {
          src: 'http://tu.yi23.net/Thumbs/586-20180630_192956-1530358196975-1.jpg!750',
          name: '酒红色金色亮片娃娃领礼服酒红色金色亮片娃娃领礼服',
          comment: '30',
          money: '300',
          addr: '北京',
          desc: '快结束了尽量减少来访记录设计费',
        },

      }, {
        id: '0010',
        listCon: {
          src: 'http://tu.yi23.net/Thumbs/586-20180630_192956-1530358196975-1.jpg!750',
          name: '酒红色金色亮片娃娃领礼服酒红色金色亮片娃娃领礼服',
          comment: '30',
          money: '300',
          addr: '北京',
          desc: null,
        },
      }]
    }
  },
  methods: {
    baidu(){
      baidu.baiduApi().then((res) =>{
        console.log(res)
        this.haha = res.key;
      })

      baidu.xiaoshuoApi().then((res) =>{
        console.log(res)
      })


    },

  },
  created(){
    this.baidu()
  },
}

</script>
<!-- sass -->
<style scoped lang='scss'>
#app > {
   @include layout(43,50)
}
.homItem {
  @include center(200);
  z-index: 9;
  .testImg {
    @include WH(200);
    padding-bottom: 92.3333%;
  }
}
.hhh{

}
</style>
