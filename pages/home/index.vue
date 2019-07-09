<template>
	<view>
		<view class="container">
			<view>
				<view class="topView topViewMargin">
					<view v-if="signType == 1" class="signIn">
						<view class="signBtn" @tap="signIn">签到</view>
					</view>
					<view v-if="signType == 2" class="signBack">
						<view class="signText">08:20已签到</view>
						<view class="signBtn" @tap="signBack">签退</view>
					</view>
					<view v-if="signType == 3" class="signOver">
						<view class="signText">08:20已签到</view>
						<view class="signText">10:20已签退</view>
					</view>
					<view class="checkAddress" @tap="signRecord">查看签到记录</view>
					<view class="iconfont icon-rightLine"></view>
					<view class="HK"></view>
				</view>
				<view class="topView" @tap="selectFn">
					<view class="iconfont icon-tuandui"></view>
					<view class="address">组别</view>
					<view class="checkAddress">{{selectName || "切换组别"}}</view>
					<view class="iconfont icon-rightLine"></view>
					<view class="HK"></view>
				</view>
			</view>
			<view class="foot">
				<view class="left-foot" @tap="home">
					<view class="iconfont icon-home isCheck"></view>
					<view>首页</view>
				</view>
				<view class="center-foot" @tap="scan">
					<view class="iconfont icon-saomiao"></view>
				</view>
				<view class="right-foot" @tap="my">
					<view class="iconfont icon-my"></view>
					<view>个人中心</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		data() {
			return {
				signType: 2
			}
		},
		onNavigationBarButtonTap: function (e) {
			console.log(JSON.stringify(e))
			if (e.index == 0) {
				uni.navigateTo({
					url: '/pages/contact/index'
				})
			} else {
				uni.navigateTo({
					url: '/pages/takePic/add'
				})
			}
		},
		computed: {
			...mapState('home',['selectName'])
		},
		onShow: function () {
			
		},
		methods: {
			signBack: function () {
				console.log('签退')
			},
			signIn: function () {
				console.log('签到')
			},
			signRecord: function () {
				console.log('记录')
			},
			selectFn: function () {
				uni.navigateTo({
					url: '/pages/home/select?status=single'
				})
			},
			scan: function () {
				console.log('scan')
			},
			my: function () {
				uni.redirectTo({
					url:'/pages/home/center',
				})
			}
		}
	}
</script>

<style>
	@import 'index.css'
</style>
