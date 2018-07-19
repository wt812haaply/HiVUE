// by js

/*
 * @desc 是否为对象
 * @return {Boolean}
 */

/*
export function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}
*/
/*
 * @desc 获取操作系统类型
 * @return {Number}
 */

/*
export function getClientType() {
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
}
*/



// export function _IsIOS() {
//   var ua = navigator.userAgent.toLowerCase();
//   if (ua.match(/iPhone\sOS/i) == 'iphone os') {
//     return true;
//   } else {
//     return false;
//   }
// }

// export function _IsAndroid() {
//   var ua = navigator.userAgent.toLowerCase();
//   if (ua.match(/Android/i) == 'android') {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// /*
//  * @desc 根据name读取cookie
//  * @param {String} name
//  * @return {String}
//  */
//
// export function getCookie(name) {
//   let arr = document.cookie.replace(/\s/g, '').split(';');
//   for (let i = 0; i < arr.length; i++) {
//     let tempArr = arr[i].split('=');
//     if (tempArr[0] == name) {
//       return decodeURIComponent(tempArr[1]);
//     }
//   }
//   return '';
// }
//
// /*
//  * @desc 设置cookie
//  * @param {String} name
//  * @param {String} value
//  * @param {Number} days
//  */
//
// export function setCookie(name, value, days) {
//   var date = new Date();
//   date.setDate(date.getDate() + days);
//   document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + date;
// }
//
// /*
//  *
//  *@dec 删除cookie
//  *@param {String} name
//  *
//  */
// export function removeCookie(name) {
//   //设置已过期,系统会立刻删除cookie
//   setCookie(name, '1', -1);
// }
//
// /*
//  *@dec 判断`obj`是否为空
//  *@param {Object} object
//  *@return {Boolean}
//  */
// export function isEmptyObject(obj) {
//   if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
//   return !Object.keys(obj).length;
// }


/*
 * 标题设置处理
 * */
export function setTitle(title) {
  document.title = title;
  var mobile = navigator.userAgent.toLowerCase();
  if (
    /iphone|ipad|ipod/.test(mobile) &&
    mobile.indexOf('yi23-ios-client') == -1
  ) {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    // iframe.setAttribute('src', '//yimg.yi23.net/webimg/web/images/20180619/iconWee.png')
    var iframeCallback = function() {
      setTimeout(function() {
        iframe.removeEventListener('load', iframeCallback);
        document.body.removeChild(iframe);
      }, 0);
    };
    iframe.addEventListener('load', iframeCallback);
    setTimeout(function() {
      document.body.appendChild(iframe);
    }, 10);
  }
}
// export function getEnv() {
//   // let hosts= document.location.host
//   if(process.env.NODE_ENV=='production'){
//       return 'w_'
//   }else{
//     return 't_'
//   }
// }
// export function getEnvV() {
//   let hosts= document.location.host
//   // if(hosts=='www.95vintage.com'){
//   if(process.env.NODE_ENV=='production'){
//     return 'product'
//   }else{
//     return 'dev'
//   }
// }
// // 给Date对象添加getYMD方法，获取字符串形式的年月日
// Date.prototype.getYMD = function() {
//   function fz(num) {
//     if (num < 10) {
//       num = '0' + num;
//     }
//     return num;
//   }
//   return [this.getFullYear(), fz(this.getMonth() + 1), fz(this.getDate())].join(
//     '-'
//   );
// };
// String.prototype.getDate = function() {
//   var strArr = this.split('-');
//   return new Date(strArr[0], strArr[1] - 1, strArr[2]);
// };
// export function getDays(start, end) {
//   var st = start.getDate();
//   var et = end.getDate();
//
//   var retArr = [];
//
//   // 获取开始日期的年，月，日
//   var yyyy = st.getFullYear(),
//     mm = st.getMonth(),
//     dd = st.getDate();
//   console.log(dd);
//   // 循环
//   while (st.getTime() != et.getTime()) {
//     retArr.push(st.getYMD());
//     dd = dd + 1;
//     // 使用dd++进行天数的自增
//     st = new Date(yyyy, mm, dd);
//   }
//
//   // 将结束日期的天放进数组
//   retArr.push(et.getYMD());
//   return retArr;
// }
