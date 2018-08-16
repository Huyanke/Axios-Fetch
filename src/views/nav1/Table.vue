<template>
  <div class="">
  	<input type="text" name="" value="" v-model="msg">
    <button @click="push">PUSH</button>
    <ul>
       <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '111',
      list: [0,1,2,3,4,5,6,7,8,9,10]
    }
  },
  methods: {
        push (){
    
            this.list.push(11);
            this.$nextTick(function(){
              console.log('数据已经更新')
            });
            this.$nextTick(function(){
              console.log('v-for渲染已经完成')
            })
          }
        }
}
</script>

<style lang="css">
</style>
