import { setTitle } from '../common/js/utils';
// import store from '../store';
// import common from '@/common/js/common';
// import wxAuth from '@/common/js/class/wx';
// import loginLocal from '@/common/js/login';
// import loadJs from '@/utils/loadJs';
/**
 * Created by ahu on 2018/5/30
 */

export function afterEach(to, from) {
  // if (sa && sa.quick) {
  //   sa.quick('autoTrackSinglePage');
  // }
  if (to.meta && to.meta.title) {
    setTitle(to.meta.title);
  } else {
    setTitle('公用名称');
  }
}


//
//
// export function beforeEach(to, from, next) {
//   //本地token同步
//   let authorization = loginLocal.getToken();
//   if (authorization) {
//     store.commit('getToken', authorization);
//   }
//   if (from.meta.keepAlive) {
//     if (from.name == 'pdtListPage') {
//       let yNum = 0;
//       if (document.querySelector && document.querySelector('.yclosetCon')) {
//         yNum = document.querySelector('.yclosetCon').scrollTop;
//       }
//       from.meta.saved_position = { x: 0, y: yNum };
//     } else {
//       from.meta.saved_position = {
//         x: window.pageXOffset,
//         y: window.pageYOffset
//       };
//     }
//   }
//   if (!store.state.wxUrl.wxUrl) {
//     let url = document.URL;
//     if (/yi23\/Home\/$/.exec(url)) {
//       url = url + 'Index/index';
//     }
//     url = decodeURIComponent(url);
//     store.commit('setWxUrl', url);
//   }
//   /* 微信端授权，获取openid */
//   if (getClientType() == 3) {
//     let isOpenId = wxAuth.getToken();
//     if (!isOpenId) {
//       wxAuth.getOpenId(to.query.code, to.fullPath);
//     }
//   }
//   /* 微信端授权结束 */
//
//   let yi23_channel = to.query.yi23_channel;
//   let source = to.query.source;
//   if (yi23_channel) {
//     common.setCookie('yi23_channel', yi23_channel, '.95vintage.com');
//   }
//   if(Object.prototype.toString.call(source).slice(8,-1)=='Array'){
//     source=  source.filter(function (e) {
//       if(e != 'alipay_wallet'){
//         return e
//       }
//     })
//   }
//   if (source && source != 'alipay_wallet') {
//     common.setCookie('source', source, '.95vintage.com');
//   }
//
//   if (
//     to.name == 'pdtDetailPage' ||
//     to.name == 'ContractResultPage' ||
//     to.name == 'bookInfoPage' ||
//     to.name == 'bookExpressPage' ||
//     to.name == 'gownDetailPage'
//   ) {
//     loadJs.init();
//   }
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     console.log(to.matched.some(r => r.meta.requireAuth));
//     if (store.state.login && store.state.login.authorization) {
//       if (to.matched.some(r => r.meta.bigLoading))
//         store.commit('bigLoading', true);
//       next();
//     } else {
//       store.commit('bigLoading', false);
//       window.location.href =
//         '/yi23/Home/User/loginPage?redirect=' +
//         to.fullPath +
//         '&back=/yi23/Home' +
//         to.fullPath;
//     }
//   } else if (to.matched.some(r => r.meta.bigLoading)) {
//     store.commit('bigLoading', true);
//     next();
//   } else {
//     next();
//   }
// }
