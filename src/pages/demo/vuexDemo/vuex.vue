<template>
  <div>
    <div>vuex共享数据 ------ vuexDemo 测试</div>
    <ul style='margin-top:100px'>
      <!--
        getVxiaoshuoApi1 是store -- data -- four.js 里面的数据方法
      -->
      <li v-for="(item,index) in getVxiaoshuoApi1" :key="index">
        {{ item.author}} + {{index + 1}}
      </li>
    </ul>
    <button @click="testInfo">测试信息</button>
    <p>{{ vuexTestInfo }}</p>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'
export default {
  name: 'vuex',
  data() {
    return {
      vuexTestInfo:''
    }
  },
  methods: {
    testInfo(){
      console.log(this.$store.getters.getTestInfo,'/?////')
      this.vuexTestInfo = this.$store.getters.getTestInfo
    }
  },
  computed:{
    ...mapGetters([
      'getVxiaoshuoApi1',
      'getTestInfo'
    ])
  },
  components: {

  },

  created() {
    this.$store.dispatch('getVxiaoshuoApi1')
  }
}

</script>
<style scoped lang='scss'>


</style>
