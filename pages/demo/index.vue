<template>
	<view>
		<view class="container">
			<view class="iconfont icon-we" style="font-size: 32rpx;"></view>
			<view>icon加载成功</view>
			<view>测试选择组件/单选或多选</view>
			<view @tap="goSingle">点我单选-{{singleName || '无选择'}}</view>
			<view @tap="goMore">点我多选-{{moreName || '无选择'}}</view>
			<view class="section">
            <view class="section__title">时间选择器</view>
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindDateChange">
					<view class="picker">
						当前选择: {{time}}
					</view>
				</picker>
			</view>
			<view class="section">
				<view class="section__title">日期选择器</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindTimeChange">
					<view class="picker">
						当前选择: {{date}}
					</view>
				</picker>
			</view>
			<view @tap="goPhone">拍照</view>
			<view>
				<button @tap="startRecord">开始录音</button>
				<button @tap="endRecord">停止录音</button>
				<button @tap="playVoice">播放录音</button>
			</view>
			<view @tap="goAddress">定位</view>
			<view>{{longitude}}</view>
			<view>{{latitude}}</view>
			<view @tap="goContact">前往联系人</view>
			<view @tap="goPicker">自定义Picker</view>
			<view @tap="goToured">蹲点任务列表</view>
		</view>
	</view>
</template>
<script>
	import { mapState } from 'vuex'
	
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();

	innerAudioContext.autoplay = false;
	export default {
		data() {
			return {
				date: '2016-09-01',
				time: '12:01',
				voicePath: '',
				longitude: '',
				latitude: ''
			}
		},
		onNavigationBarButtonTap: function (e) {
			console.log(JSON.stringify(e))
		},
		onLoad(){
			let self = this;
			recorderManager.onStop(function (res) {
				console.log('recorder stop' + JSON.stringify(res));
				self.voicePath = res.tempFilePath;
			});
		},
		computed: {
			...mapState('demo',['singleValue','singleName','moreValue','moreName'])
		},
		onShow: function () {
			console.log(this.singleName)
			console.log(this.moreName)
		},
		methods: {
			goSingle: function(){
				console.log(JSON.stringify(this.singleData))
				uni.navigateTo({
					url: '/pages/demo/select?status=single'
				})
			},
			goMore: function(){
				console.log(JSON.stringify(this.moreData))
				uni.navigateTo({
					url: '/pages/demo/select?status=more'
				})
			},
			bindDateChange: function (e) {
				console.log('picker发送选择改变，携带值为' + e.detail.value)
				this.time = e.detail.value
			},
			bindTimeChange: function (e) {
				console.log('picker发送选择改变，携带值为' + e.detail.value)
				this.date = e.detail.value
			},
			goPhone: function () {
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera', 'album'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res));
					}
				});
			},
			startRecord: function() {
				console.log('开始录音');

				recorderManager.start();
			},
			endRecord: function() {
				console.log('录音结束');
				recorderManager.stop();
			},
			playVoice: function() {
				console.log('播放录音');

				if (this.voicePath) {
					innerAudioContext.src = this.voicePath;
					innerAudioContext.play();
				}
			},
			goAddress: function () {
				var that = this;
				uni.getLocation({
					type: 'wgs84',
					success: function (res) {
						console.log(JSON.stringify(res))
						that.longitude = res.longitude;
						that.latitude = res.latitude;
					}
				});
			},
			goContact: function () {
				uni.navigateTo({
					url: '/pages/contact/index'
				})
			},
			goPicker: function () {
				uni.navigateTo({
					url: '/pages/demo/picker'
				})
			},
			goToured: function () {
				uni.navigateTo({
					url: '/pages/toured/index'
				})
			}
		}
	}
</script>

<style>
	.container > view{
		margin: 20rpx;
		padding: 10rpx;
		background-color: #999;
		color: #fff;
	}
</style>
