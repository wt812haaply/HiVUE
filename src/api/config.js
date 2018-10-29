let host;
let host_leaf;

if (process.env.NODE_ENV == 'development') {
  host = '/openapi';
  host_leaf = '/satinApi';
} else if (process.env.NODE_ENV == 'dev') {
  host = 'http://baike.baidu.com/api/openapi';
  host_leaf = 'https://www.apiopen.top';
} else {
  host = 'http://baike.baidu.com/api/openapi';
  host_leaf = 'https://www.apiopen.top';
}

export default {
  baiduApi:`${host}/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=%E9%93%B6%E9%AD%82&bk_length=600`,
  xiaoshuo: `${host_leaf}/satinApi`,
  info: `${host_leaf}/novelApi`,
}

