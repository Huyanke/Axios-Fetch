
# To start

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build

```
# about

vue中axios的封装

1. npm 安装  npm install axios --save

2. /src/utils/目录下建立一个FetchUtil.js

3. 在main.js 中引入

import {post,get} from './utils/目录下建立一个FetchUtil'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;

4. 在组件中引用
   POST

   onPost() {
    var Params = {"value": '1'}
     this.$post(URL_TODO,Params)
      .then((response) => {
        console.log(response)
      })
   }

   GET

   onGet(){

     get多个拼接
      var Params = '1'
      this.$get(`${URL_CHANNEL}?pageNum=`+Params+`&pageSize=`+1).then((response) => {
         console.log(response)
       })

      get 单个

      this.$get(URL_CHANNEL).then((response) => {
         console.log(response)
      })
   }


   # Browser support

   Modern browsers and IE 10+.

   # License
   [MIT](http://opensource.org/licenses/MIT)
