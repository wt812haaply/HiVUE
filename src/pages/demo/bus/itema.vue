<template>
  <div v-if="open">
    我是子1
    <template>
      <p @click="oneClick">第一个点击</p>
      <p @click="twoClick">第二个点击看console.log</p>
    </template>
  </div>
</template>

<script>
  export default {
    data () {
      return{
        status:false,
        childrenOneInfo:{
          msg:'子1的信息给 => 子2显示',
          text: '随便的文本信息'
        }
      }
    },
    props: ['open'],
    components:{},
    methods:{
      oneClick() {
        this.$emit('one')
        this.bus.$emit('oneinfo',this.childrenOneInfo)
      },
      twoClick(){
        this.$emit('two')
      }
    }
  }
</script>
<style scoped lang='scss'>
  div{
    border: 1px red solid;
    padding: 20px
  }
</style>
