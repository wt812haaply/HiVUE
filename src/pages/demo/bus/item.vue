<template>
	<div>
  <h2>我是父</h2>
    <p>itema里面的数据，在itemb里面展示</p>
    <div>
      <!--子1-->
      <item-A :open="status"  @one="click1" @two="click2"></item-A>
      <!--子2-->
      <item-B></item-B>
    </div>
	</div>
</template>

<script>
  import itemA from './itema'
  import itemB from './itemb'
	export default {
		data () {
			return{
        status:true,
      }
		},
		components:{
      itemA,
      itemB
    },
		methods:{
      click1(){},
      click2(){
        console.log('我的数据是父的----2')
      }
    },
    created(){
    }
	}
</script>
<style scoped lang='scss'>
div{
  line-height: 30px;
}
p{
  font-size:12px;
  margin-bottom: 40px;
}
</style>
