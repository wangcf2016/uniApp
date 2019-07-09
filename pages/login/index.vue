<template>
  <div class="container">
    <div class="iconTop">
			<image src="../../static/images/login.png"></image>
		</div>
		<div class="loginForm">
			<input class="inputName" placeholder="用户名" type="text" @blur="getName" />
			<input class="inputPassword" placeholder="密码" type="text" @blur="getPassword" />
		</div>
		<div class="loginBtn" @tap="loginFn">登录</div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
		return {
			name: '',
			password: ''
		}
  },
  components: {
  },
  computed: {
  },
  methods: {
		getName: function (e) {
			this.name = e.detail.value;
		},
		getPassword: function (e) {
			this.password = e.detail.value;
		},
    loginFn: function () {
			var that = this;
			var param = {
				name: that.name,
				password: that.password
			};
			this.login(param)
			uni.navigateTo({
				url: '/pages/demo/index'
			})
		},
		...mapActions('login', ['login']),

  }
}
</script>

<style>
	page{
		background-color: #4992f5;
	}
	.iconTop{
		margin-top: 150rpx;
	}
	.iconTop>image{
		width: 250rpx;
		height: 250rpx;
	}
	.loginForm{
		width: 80%;
		background-color: #fff;
		margin: 30rpx auto;
		text-align: left;
		padding: 10rpx;
		border-radius: 10rpx;
	}
	.inputName{
		border-bottom: 1rpx solid #e5e5e5;
		padding: 10rpx;
	}
	.inputPassword{
		padding: 10rpx;
	}
  .loginBtn{
  	background: linear-gradient(to left, #ffb700, #ffd763);
		color: #fff;
		width: 80%;
		margin: 20rpx auto;
		padding: 20rpx 10rpx;
		border-radius: 10rpx;
  }
</style>
