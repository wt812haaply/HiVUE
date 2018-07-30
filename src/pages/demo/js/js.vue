<!-- 模板展示 -->
<template>
  <div>
    <p> 默认数据 => ：<br>{{ Amsg}} </p>
    <br>
    <div>join后的数据=> ：<br>{{ mm }}</div>
    <br>
    <p @click="clickp">点击split转换成数组</p>
    <ul>
      <li v-for="item in ppp"> {{ item }}</li>
    </ul>
    <br>
    <!--  -->
    <p>computed=> ：后的数据格式</p>
    <ul>
      <li v-for="item in oo">{{ item }}</li>
    </ul>
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
      Amsg: '大摆型,修身,绑带,V领,无袖,齐地,设计感,新品',
      ppp: [''],
    }
  },

  methods: {
    clickp() {
      this.ppp = this.Amsg.split(',')
      console.log(this.ppp)
    }
  },
  computed: {
    mm() {
      return this.Amsg.split(',').join(' + ')
    },
    oo() {
      return this.Amsg.split(',')
    }
  },

  // 组件
  components: {

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
