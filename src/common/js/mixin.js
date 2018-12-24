export const testing = {
  data(){
    return {
      one:1,
      two:2,
      isTotal:''
    }
  },
  methods:{
    Total(){
      this.isTotal = this.one + this.two
    }
  }
}
