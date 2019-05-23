<template>
  <div>
    <div>vuex共享数据 ------ vuexDemo 测试</div>
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
      // 从vuex获取数据 给  this.vuexTestInfo
      this.vuexTestInfo = this.$store.getters.getTestInfo
    }
  },
  computed:{
  },
  components: {

  },

  created() {
  }
}

</script>
<style scoped lang='scss'>


</style>
