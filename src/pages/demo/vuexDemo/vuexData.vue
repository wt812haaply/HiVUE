<template>
  <div>
    <div>vuex共享数据 ------ vuexDemo 测试</div>
    <ul style='margin-top:100px'>
      <!--
        getVxiaoshuoApi1 是store -- data -- four.js 里面的数据方法
      -->
      <li v-for="(item,index) in getData" :key="index">
        {{ item.author}}
      </li>

    </ul>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'
export default {
  name: 'vuex',
  data() {
    return {}
  },
  methods: {},
  computed:{
    ...mapGetters([
      'getData'
    ])
  },
  components: {

  },

  created() {
    this.$store.dispatch('getData')
  }
}

</script>
<style scoped lang='scss'>

li{
  line-height: 2;
}
</style>
