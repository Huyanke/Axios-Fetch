<template>
	<div class="show-info">
			<h2>example2 自动生成截图框 固定比例 w : h => 4 : 3</h2>
			<div class="test">
		<vueCropper
						ref="cropper"
						:img="example3.img"
						:autoCrop="example3.autoCrop"
						:autoCropWidth="example3.autoCropWidth"
						:autoCropHeight="example3.autoCropHeight"
						:fixedBox="example3.fixedBox"
					></vueCropper>

		<button type="button" @click="get">DET</button>
		<img :src="pic" alt="rrr">
	</div>
	</div>
</template>


<script>
import VueCropper from 'vue-cropper'
export default {
	data () {
    return {
			example3: {
				// img: 'https://o90cnn3g2.qnssl.com/0C3ABE8D05322EAC3120DDB11F9D1F72.png',
				img: './static/logo.png',
				autoCrop: true,
				autoCropWidth: 200,
				autoCropHeight: 200,
				fixedBox: true
					},
				pic:'',
    }
  },
  methods: {
	    get() {
				this.$refs.cropper.getCropData((data) => {
				  // do something
				  // console.log(data)
						this.pic = data
				})

				this.$refs.cropper.getCropBlob((data) => {
			  // do something
			  // console.log(data)

			})
			}
  },
	components: {
		'VueCropper': VueCropper
	}
}
</script>
<style>
  * {
	  margin: 0;
		padding: 0;
	}
.test {
	width: 800px;
	height: 400px;
}
	.content {
		margin: auto;
		max-width: 800px;
		margin-bottom: 100px;
	}

	.test-button {
		display: flex;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-block;
		line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #c0ccda;
    color: #1f2d3d;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin:20px 10px 0px 0px;
    padding: 9px 15px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #50bfff;
    border-color: #50bfff;
    transition: all .2s ease;
		text-decoration: none;
		user-select: none;
	}

	.des {
		line-height: 30px;
	}

	code.language-html {
		padding: 10px 20px;
		margin: 10px 0px;
		display: block;
		background-color: #333;
		color: #fff;
		overflow-x: auto;
		font-family: Consolas, Monaco, Droid, Sans, Mono, Source, Code, Pro, Menlo, Lucida, Sans, Type, Writer, Ubuntu, Mono;
		border-radius: 5px;
		white-space: pre;
	}

	.show-info {
		margin-bottom: 50px;
	}

	.show-info h2 {
		line-height: 50px;
	}

	/*.title, .title:hover, .title-focus, .title:visited {
		color: black;
	}*/

	.title {
		display: block;
		text-decoration: none;
		text-align: center;
		line-height: 1.5;
		margin: 20px 0px;
		background-image: -webkit-linear-gradient(left,#3498db,#f47920 10%,#d71345 20%,#f7acbc 30%,#ffd400 40%,#3498db 50%,#f47920 60%,#d71345 70%,#f7acbc 80%,#ffd400 90%,#3498db);
    color: transparent;
    -webkit-background-clip: text;
    background-size: 200% 100%;
    animation: slide 5s infinite linear;
		font-size: 40px;
	}

	.test {
	  height: 500px;
	}

	.model {
		position: fixed;
		z-index: 10;
		/*width: 100vw;
		height: 100vh;*/
		width: 800px;
		height: 400px;
		overflow: auto;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.8);
	}

	.model-show {
		display: flex;
    justify-content: center;
    align-items: center;
		/*width: 100vw;
		height: 100vh;*/
		width: 800px;
		height: 400px;
	}

	.model img {
		user-select: none;
		background-position: 0px 0px, 10px 10px;
		background-size: 20px 20px;
    background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);
	}

	.c-item {
		display: block;
		padding: 10px 0;
		user-select: none;
	}

	@keyframes slide {
    0%  {
      background-position: 0 0;
    }
    100% {
      background-position: -100% 0;
    }
  }

</style>
