<!-- 模板展示 -->
<template>
  <div>
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
      {{getop()}}

  </div>
</template>

<!-- 逻辑处理 -->
<script>

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
        pop:'',
      }
    },

    // 组件
    components:{

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
      }




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
      let arr1 = [1,24,5,6,78,9,21,2,1,2,1,4,32,536,47,89,0,43,25,14]
      this.getArrSort(arr1)
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
    margin-top:20 * $unit ;
    color:rgba(0,0,0,.5)
  }
</style>
