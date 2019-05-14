<template>
  <div>
    我是子2
    <p>{{getOneInfo.msg}}</p>
    <p>{{getOneInfo.text}}</p>
    <br>
    <p>这个是vuex数据共享给的 => {{vuexTestInfo}}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return{
        vuexTestInfo:'',
        getOneInfo:'',
        childrenTwoInfo:{
          msg:'子2的信息'
        }
      }
    },
    components:{},
    methods:{},
    mounted(){
      this.bus.$on('oneinfo', (params) => { //获取传递的参数并进行操作
        this.getOneInfo = params
        console.log(params,'params')
      })
    },
    computed:{
      ...mapGetters([
        //'getVxiaoshuoApi1',
        'getTestInfo'
      ])
    },
    created() {
      //this.$store.dispatch('getVxiaoshuoApi1') //接受接口数据
      this.vuexTestInfo = this.$store.getters.getTestInfo
    }
  }
</script>
<style scoped lang='scss'>
  div{
    border: 1px blue solid;
    padding: 20px;
    margin-top: 10px;
  }
</style>
