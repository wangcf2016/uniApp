<template>
	<view>
		<view class="container">
			<view class="view-one">
				<view class="iconfont icon-edit"></view>
				<view>描述您遇到的故障</view>
			</view>
			<view class="view-two">
				<textarea maxlength="200" @blur="getTextareaFault" placeholder="请输入您所遇到的故障..."></textarea>
			</view>
			<view class="view-three">
				<view class="view-three-top">
					<view class="iconfont icon-tupian"></view>
					<view>添加图片</view>
				</view>
				<view class="view-three-list">
					<view class="view-three-list-for" v-if="imagesArr.length>0" v-for="(item, index) in imagesArr" :key="index">
						<image :src="item.url"></image>
					</view>
					<view v-if="imagesArr.length<6" class="view-three-list-index" @tap="addImage">
						<view class="iconfont icon-camera"></view>
						<view>上传图片</view>
					</view>
				</view>
			</view>
			<view class="view-yuyin">
				<view class="iconfont icon-audio"></view>
				<view>语音留言</view>
			</view>
			<view class="view-yuyin-content">
				<view class="iconfont icon-yuyinmsg"></view>
				<view @tap="voiceFn" class="view-yuyin-bg"></view>
				<view class="view-yuyin-text">48</view>
				<sub class="view-yuyin-sub">"</sub>
			</view>
			<view class="view-four">
				<view class="view-four-title">
					<view class="iconfont icon-dizhimore"></view>
					<sub>*</sub>
					<view>选择地点(必填)</view>
				</view>
				<view class="view-four-check">
					<view class="view-four-check-now">默认选择当前地址:</view>
					<view class="iconfont icon-didian"></view>
					<view class="view-four-check-text">{{selectName || '无人站A大门'}}</view>
					<view class="view-four-check-btn" @tap="selectAddress">重新选择</view>
				</view>
			</view>
			<view class="view-five">
				<textarea @blur="getTextareaAddress" placeholder="请输入更具体的位置描述..."></textarea>
			</view>
			<view class="view-six">
				<view class="iconfont icon-shandian"></view>
				<sub>*</sub>
				<view>紧急程度(必填)</view>
			</view>
			<view class="view-six-list">
				<view v-for="(list, id) in degreeArr" :key="id" @tap="chooseDeg(list)" :class="{'isCheck':list.choose}">{{list.text}}</view>
			</view>
			<view class="view-seven">
				<view class="iconfont icon-audio" @touchstart="startVoice" @touchend="chendVoice"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				textareaFault: '',
				textareaAddress: '',
				imagesArr: [
					{
						url: '../../static/images/login.png'
					},
					{
						url: '../../static/images/login.png'
					}
				],
				degreeArr:[
					{
						id: 1,
						choose: true,
						type: 1,
						text: '一般'
					},
					{
						id: 2,
						choose: false,
						type: 2,
						text: '严重'
					},
					{
						id: 3,
						choose: false,
						type: 3,
						text: '紧急'
					}
				]
			}
		},
		onNavigationBarButtonTap: function (e) {
			uni.navigateTo({
				url: '/pages/takePic/list'
			})
		},
		computed: {
			...mapState('takePic',['selectName'])
		},
		onLoad(query) {
		},
		methods:{
			getTextareaFault: function (e) {
				this.textareaFault = e.detail.value;
				console.log(this.textareaFault)
			},
			getTextareaAddress: function (e) {
				this.textareaAddress = e.detail.value;
				console.log(this.textareaAddress)
			},
			chooseDeg: function (data) {
				var that = this,
					id = data.id,
					degreeArr = that.degreeArr;
				for (var i = 0; i<degreeArr.length; i++) {
					if (id == degreeArr[i].id) {
						that.degreeArr[i].choose = true;
					} else {
						that.degreeArr[i].choose = false;
					}
				}
				console.log(JSON.stringify(that.degreeArr))
			},
			addImage: function () {
				this.imagesArr.push({
					url: '../../static/images/login.png'
				})
			},
			voiceFn: function () {
				console.log('点击了语音')
			},
			selectAddress: function () {
				uni.navigateTo({
					url: '/pages/takePic/select?status=single'
				})
			},
			startVoice: function () {
				console.log('长按了添加语音')
				uni.showToast({
					title: "logo",
					image: "../../static/images/login.png",
					duration: 30000,
					mask: true
				})
			},
			chendVoice: function () {
				console.log('松开发送')
				uni.hideToast();
			}
		}
	}
</script>

<style>
	@import 'index.css';
</style>
