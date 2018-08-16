
import axios from 'axios';

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

 //需要加header头，不需要可删除
 let headers = {headers:{
   'Accept': 'application/json',
   'Content-Type': 'application/json',
   'TransactionID': TransactionID,
   'XClientIP': XClientIP,
   'token': token
 }}



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

    axios.get(url,headers,{
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
     axios.post(url,data,headers)
          .then(response => {
           resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }
