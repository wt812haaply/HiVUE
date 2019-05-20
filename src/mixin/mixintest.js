export const testMixin = {
  data(){
    return {
      text:{
        msg:'textMixin2'
      },
      one:1,
      two:2,
      isTotal:'' //页面要用的属性
    }
  },
  methods:{
    Total(){
      this.isTotal = this.one + this.two
    }
  },
  // 接口数据
  created(){
    console.log('testMixin')
  },
}
