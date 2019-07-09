<template>
	<view>
		<view class="container">
			<view class="pageTop">
				<view class="bg-one">
					<view class="top-bg-a"></view>
					<view class="top-bg-b"></view>
					<image class="top-image" src="../../static/images/login.png"></image>
					<view class="title-one">郭琪琪</view>
					<view class="title-two">ID:Gqq123</view>
					<view class="top-conten-left">
						<view class="iconfont icon-lingdai"></view>
						<view>巡逻岗</view>
					</view>
					<view class="top-conten-right">
						<view class="iconfont icon-fang"></view>
						<view>西乡中心站</view>
					</view>
				</view>
				<view class="bg-two"></view>
			</view>
			<view class="pageCenter">
				<view @tap="goRecord('qiandao')">
					<view class="iconfont icon-qiandao"></view>
					<view>签到记录</view>
				</view>
				<span class="line-view"></span>
				<view @tap="goRecord('xunluo')">
					<view class="iconfont icon-xianlu"></view>
					<view>巡逻记录</view>
				</view>
				<span class="line-view"></span>
				<view @tap="goRecord('dundian')">
					<view class="iconfont icon-dizhi"></view>
					<view>蹲点记录</view>
				</view>
			</view>
			<view class="pageBottom">
				<view v-for="(item, index) in list" :key="index" @tap="goDetail(item.type)">
					<view class="iconfont" :class="item.icon"></view>
					<view>{{item.text}}</view>
				</view>
			</view>
			<view class="foot">
				<view class="left-foot" @tap="home">
					<view class="iconfont icon-home iconName"></view>
					<view>首页</view>
				</view>
				<view class="center-foot" @tap="scan">
					<view class="iconfont icon-saomiao"></view>
				</view>
				<view class="right-foot">
					<view class="iconfont icon-my isCheck"></view>
					<view>个人中心</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list:[
					{
						icon: "icon-xianlu",
						text: "巡检管理",
						type: "xunjian"
					},
					{
						icon: "icon-dizhibg",
						text: "蹲点管理",
						type: "dundian"
					},
					{
						icon: "icon-boxbg",
						text: "岗位设置",
						type: "gangwei"
					},
					{
						icon: "icon-camerafill",
						text: "随手拍",
						type: "suishou"
					},
					{
						icon: "icon-ditu",
						text: "坐标收集",
						type: "zuobiao"
					},
					{
						icon: "icon-suo",
						text: "修改密码",
						type: "xiugai"
					},
					{
						icon: "icon-we",
						text: "联系人",
						type: "lianxi"
					}
				]
			}
		},
		onNavigationBarButtonTap: function (e) {
			console.log(JSON.stringify(e))
		},
		computed: {
		},
		onShow: function () {
			
		},
		methods: {
			home: function () {
				uni.redirectTo({
					url: '/pages/home/index',
				})
			},
			goDetail: function (type) {
				switch (type) {
					case 'xunjian':
					console.log("去"+ type)
					break;
					case 'dundian':
					console.log("去"+ type)
					break;
					case 'gangwei':
					console.log("去"+ type)
					break;
					case 'suishou':
					console.log("去"+ type)
					break;
					case 'zuobiao':
					console.log("去"+ type)
					break;
					case 'xiugai':
					console.log("去"+ type)
					break;
					case 'lianxi':
					console.log("去"+ type)
					break;
					default:
					console.log("无对应路径")
					break;
				}
			},
			goRecord: function (type) {
				switch (type) {
					case 'qiandao':
					console.log("去"+ type)
					break;
					case 'xunluo':
					console.log("去"+ type)
					break;
					case 'dundian':
					console.log("去"+ type)
					break;
					default:
					console.log("无对应路径")
					break;
				}
			}
		}
	}
</script>

<style>
	@import 'index.css'
</style>
