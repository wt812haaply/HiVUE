<!-- 模板展示 -->
<template>
  <div>
    <!--<smallLoading/>-->

    <!--求和-->
    <template>
      <h1 @click="summation()">click</h1>
      <div>{{ ret }}</div>
    </template>

    <template>
      <!--filter-->
      <div>{{ evenNumbers }}</div>

      <ul>
        <li v-for="item in even(numbers)">{{ item }}</li>
      </ul>
      <br>
    </template>




    <template>
      <h2>去重</h2>
      <p>{{Arr}}</p>
      <div>
        {{ removalArray(Arr) }}
      </div>
    </template>

    <template>
      <h2>去掉数组中不符合项</h2>
      <p>{{Arr}}</p>
      <div>
        {{ noConformity(Arr) }}
      </div>
    </template>

    <template>
      <h2>过滤不符合项</h2>
      <p>{{stringArr}}</p>
      <div>
        {{filterNoConformity(stringArr,'2')}}
      </div>
    </template>

    <template>
      <h2>遍历数组</h2>
      <ul>
        <li v-for="item in arrayString">{{ item }}</li>
      </ul>
    </template>

    <template>
      <h2>数组排序</h2>
      <div>
        {{arrOne}}
      </div>
    </template>

    <template>
      <h2>获取arrOne数据 再去重</h2>
      <p>{{arrOne}}</p>
      <div>{{getop()}}</div>
    </template>





  </div>
</template>

<!-- 逻辑处理 -->
<script>

  //引用方法地址
  import utils  from '@/common/js/utils.js'
  import smallLoading from '../../components/smallLoading'


  export default {
    name:'',
    data () {
      return{
        numbers: [ 1, 2, 3, 4, 5 ],

        Arr:[-1,-2,1, 2, 1.02, 23, 2, 3, 4, 5, 5, 6, 7, 7,8,8,0,8,6,3,4,56,2],
        ArrB:[],
        stringArr:['10','12','23','44','42'],
        arrayString:['aaa','bbb','ccc','ddd','eee','aabb','bbcc'],
        arrOne:'',
        ret:''
      }

    },

    // 组件
    components:{
     smallLoading,
    },

    // 组件传值
    props:[],

    // 事件方法
    methods: {



      even (numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 0
        })
      },


      /*
      * filter
      */

      // 去重
      removalArray(Arr){
        let newArray = Arr.filter((x, index,self)=>self.indexOf(x)===index)
        return newArray
      },

      // 去掉数组中不符合项 > 30
      noConformity(Arr){
        let newArr = Arr.filter(item => item>5)
        return newArr
      },

      // 过滤不符合项
      filterNoConformity(stringArr,txt){
        let newArr2 = stringArr.filter(item => item.indexOf(txt)<0)
        return newArr2
      },

      // sort 排序
      getArrSort(info){
        this.arrOne = info.sort(function (a,b) {
          return a-b
        })
      },

      //获取arrOne的值 在去重
      getop(){
        let op = this.arrOne;
        return op.filter((x, index,self)=>self.indexOf(x)===index)
      },

      //点击求和
      summation(){
        //引用公用方法getName
        this.ret = utils.getSummation(1,10)
        console.log(utils.getSummation(1,10))
      },

      whatThis(){
        // 1 ios, 2 android, 3 wechart, 4 alipay
        let clientType = utils.getClientType();
        if(clientType == 1){
          console.log('ios')
        } else if( clientType == 2){
          console.log('android')
        } else if(clientType == 3){
          console.log('wechat')
        } else if( clientType == 4){
          console.log('alipay')
        }

      },

    },

    // 计算属性
    computed: {
      // sort 排序
//      issort(){
//        let Arr = this.Arr;
//        return Arr.sort(function (a,b) {
//          return a - b;
//        })
//      },

      // 过滤使用
      evenNumbers(){
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      },

    },

    // 侦听属性
    watch: {

    },

    //一进页面先执行
    mounted(){

    },

    // 接口数据
    created(){
      let arr1 = [1,24,5,-1,-22,126,78,9,21,2,1,2,1,4,325,14]
      this.getArrSort(arr1)
      this.whatThis()

    },
  }
</script>


<!-- 样式处理 -->
<style scoped lang='scss'>

  p{
    font-size: 12 * $unit;
    line-height: 2;
  }
  h2{
    font-size:14 * $unit;
    margin-top:20 * $unit;
    color:rgba(0,0,0,.5)
  }
</style>
