const Common = {

  /*
  * @求和
  */
  getSummation(a,b){
    return a+b;
  },


  /*
  * @desc 获取操作系统类型
  * @return {Number}
  */
  getClientType(){
    // 1 ios, 2 android, 3 wechart, 4 alipay
    const ua = window.navigator.userAgent.toLowerCase();
    const ios = ua.match(/yi23-ios-client/);
    const android = ua.match(/yi23-android-client/);
    const wechat = ua.match(/micromessenger/);
    const alipay = ua.match(/alipayclient/);
    if (ios) {
      return 1;
    } else if (android) {
      return 2;
    } else if (wechat) {
      return 3;
    } else if (alipay) {
      return 4;
    } else {
      return 0;
    }
  },


  /*
   * @localStorage
   */
  // getLocalStorage(){
  //   const once = localStorage.getItem("indexTips")
  //   if(!once){
  //     localStorage.setItem("indexTips",1)
  //     this.stepTip.mask = !this.stepTip.mask;
  //     console.log(this.stepTip.mask)
  //   }
  //   else {
  //     this.stepTip.mask = !this.stepTip.mask;
  //     console.log(this.stepTip.mask)
  //   }
  // },



}
export default Common
