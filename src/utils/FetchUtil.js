
import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL ='';  //暂时配置不用


/**
 *axios网络请求
 */
//事物ID
const Transaction = currentTime => {

  //uuid
  let s = [];
  let hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  let uuid = s.join("");

  //日期时间
  let date = new Date();
  currentTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  return currentTime + uuid;
};
let TransactionID = Transaction();


//获取ip
export const XClientIP = returnCitySN["cip"];
//获取token
export const token =  sessionStorage.getItem('token');

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */


 //http request 拦截器
 axios.interceptors.request.use(
   config => {

    //设置请求头信息
     config.headers = {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'TransactionID': TransactionID,
       'XClientIP': XClientIP,
       'token': token
     }

     return config;
   },
   error => {
     return Promise.reject(err);
   }
 );


 //http response 拦截器
 axios.interceptors.response.use(
   response => {
     if(response.data.code == '11111111'){
       router.push( path:"/login" )
     }
     return response;
   },
   error => {
     if(error.status == 401) {
       if(error.data.code == '999999999') {
         alert('无访问数据权限！')
         Remove();
       }
     return Promise.reject(error)
   }
 )

export function get(url,params={}){
  return new Promise((resolve,reject) => {
    if (params) {
      let paramsArray = [];
      //拼接参数
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('')
      } else {
        url += '&' + paramsArray.join('')
      }
    }

    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
           resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }
