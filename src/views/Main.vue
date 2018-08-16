<template>
	<div>

		  <el-button type="primary" @click="onGet" >获取GET</el-button>
		 	<el-button type="primary" @click="onPost" >获取POST</el-button>
	    <br>
			<img src="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3" alt="">

	</div>
</template>

<script>
import { URL_TODO, URL_CHANNEL} from "../constant/URIConfig";

export default {
	data() {
		return {
		
		}
	},
	methods: {

	},
	methods: {
		onPost() {
			 var Params = {"todoStatus": '1'}
			this.$post(URL_TODO,Params)
			 .then((response) => {
				 console.log(response)
			 })
		},
		onGet(){
			 var Params = '1'
			 this.$get(`${URL_CHANNEL}?pageNum=`+Params+`&pageSize=`+1).then((response) => {
					console.log(response)
				})
		},
	}
}

</script>

<style>
  img {
  	width: 100%;
  }
</style>
