<!-- 模板展示 -->
<template>
  <div>
    <div v-html="txt"></div>
    <br>
    <div v-html="newTxt"></div>
    <br>
    <hr>
    <div> {{ _arrayOne }}</div>
    <div> {{ _arrayJoin }}</div>
    <div>{{_array }}</div>
    <div>
      <ul>
        <li v-for="item in _array">{{ item }}</li>
      </ul>
    </div>
    <br>
    <div>
      <div @click="_arrayTwo">点击出现遍历数组</div>
      <ul>
        <li v-for="item in testArryTwo">{{ item }}</li>
      </ul>

    </div>
    <h2>{{ arrayTitle }}</h2>
    <div v-html="_getArryaAnyOne"></div>

    <div>

    </div>


  </div>
</template>
<!-- 逻辑处理 -->
<script>
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
  name: '',
  data() {
    return {
      txt:'123#456#789',
      test:{
        id:'001',
        array:'大摆型,修身,绑带,V领,无袖,齐地,设计感,新品',
        info:'title方法将检索字符串<br>的发送到发送到发送到发放水电费<br>水电费水电费水电费水电费的发费水电费'
      },
      testArryTwo:[''],
      arrayTitle:'',
    }
  },

  methods: {

    _arrayTwo(){
        console.log('111')
        this.testArryTwo = this.test.array.split(',')
    }
  },
  computed: {

    _arrayOne(){
      let array = this.test.array
    },
    _arrayJoin(){
      let array = this.test.array
      return array.split(',').join('+')
    },

    _array(){
      let array = this.test.array.split(',');
      return array
    },

    _getArryaAnyOne(){
      let info = this.test.info.split('<br>');
      for(var i=0;i<info.length; i++){
        this.arrayTitle = info[0]
      }
      return  this.test.info.split('<br>').join('<br>')
    },
    newTxt(){
      let txtn = this.txt.split('#')
      for(var i=0; i<txtn.length; i++){
//        console.log(txtn[i])
        let redTxt = '<span>' + txtn[0] + '</span>' + '<span style="color:#ff544b">' + txtn[1] + '</span>' + '<span>' + txtn[2] + '</span>';
        return redTxt
      }
    },

  },
  // 组件
  components: {

  },
  watch: {

  },
  //一进页面先执行
  mounted(){
  },
  props: [],

}
</script>
<!-- 样式处理 -->
<style scoped lang='scss'>
div{
	font-size: 12px;
	line-height: 20px;
}
</style>
