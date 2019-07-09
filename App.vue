<script>
	export default {
		onLaunch: function () {
			/* 5+环境锁定屏幕方向 */
			plus.screen.lockOrientation('portrait-primary'); //锁定
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/static/css/iconfont_use.css";
	page {
		background-color: #f7fcff;
	}
	.container {
	  font-size: 28rpx;
	  text-align: center;
		color: #333;
	}
	
	* {
	  transition: width 2s;
	  -moz-transition: width 2s;
	  -webkit-transition: width 2s;
	  -o-transition: width 2s;
	}
	
	/* font color */
	* {
	  color: #353535;
	}
</style>
