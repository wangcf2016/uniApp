<template>
	<view>
		<view class="container">
			<view class="view-one">
				<view class="iconfont icon-edit"></view>
				<view>故障情况</view>
			</view>
			<view class="view-two">
				<textarea class="detail-textarea" disabled="true" :placeholder="textValue" placeholder-style="color:#333"></textarea>
			</view>
			<view class="view-three">
				<view class="view-three-top">
					<view class="iconfont icon-tupian"></view>
					<view>实拍图片</view>
				</view>
				<view class="view-three-list">
					<view class="view-three-list-for" v-if="imagesArr.length>0" v-for="(item, index) in imagesArr" :key="index">
						<image :src="item.url"></image>
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
					<view class="iconfont icon-didian"></view>
					<view>故障地点</view>
				</view>
				<view class="view-four-check">
					<view class="view-four-check-now">默认选择当前地址:</view>
					<view class="iconfont icon-didian"></view>
					<view class="view-four-check-text">{{selectName || '无人站A大门'}}</view>
				</view>
			</view>
			<view class="view-five">
				<textarea disabled="true" :placeholder="textValue" placeholder-style="color:#333"></textarea>
			</view>
			<view class="view-six">
				<view class="iconfont icon-task"></view>
				<view>相关情况</view>
			</view>
			<view class="view-eight-detail">
				<view class="view-eight-detail-warp">
					<view class="view-eight-detail-warp-list">
						<view>
							<view class="record-labal">紧急程度:</view>
							<view class="record-labal-text1">紧急</view>
						</view>
						<view>
							<view class="record-labal">上报人:</view>
							<view class="record-labal-text2">张大山</view>
						</view>
						<view v-if="type == '1'">
							<view class="record-labal">状态:</view>
							<view class="record-labal-text3">已完成</view>
						</view>
						<view v-if="type !== '1'">
							<view class="record-labal">状态:</view>
							<view class="record-labal-text1">待处理</view>
						</view>
						<view v-if="type !== '1'">
							<view class="record-labal">分析报告:</view>
							<view class="record-labal-text1">未上传</view>
						</view>
					</view>
					<view v-if="type == '1'" class="view-eight-detail-warp-for" v-for="(item, index) in recordData" :key="index">
						<view class="view-eight-detail-warp-for-left">
							<view class="detail-round"></view>
							<view class="detail-dottedLine" :class="{'boederNone':index == recordData.length-1}"></view>
						</view>
						<view class="view-eight-detail-warp-for-right">
							<view>
								<view class="record-labal-detail">{{item.time}}</view>
							</view>
							<view>
								<view>
									<view class="record-labal-detail">反馈人:</view>
									<view>{{item.typeText}}</view>
								</view>
							</view>
							<view>
								<view>
									<view class="record-labal-detail">说明:</view>
									<view>{{item.msg}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="type !== '1'" class="view-nine-detail">
				<view class="iconfont icon-msg"></view>
				<view>相关情况</view>
			</view>
			<view v-if="type !== '1'" class="view-two">
				<textarea maxlength="200" @blur="getTextareaMsg" placeholder="请输入反馈信息..."></textarea>
			</view>
			<view class="view-seven-detail">
				<view v-if="type == '1'" class="view-seven-btn" @tap="downLoadData">下载异常反馈报告</view>
				<view v-else class="view-seven-btn" @tap="submitData">提交反馈</view>
			</view>
		</view>
	</view>
</template>

<script>
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
				recordData:[
					{
						id:1,
						time: '2018-08-08 12:15',
						typeText: '已完成处理',
						msg: '问题提交给XXX处理'
					},
					{
						id:2,
						time: '2018-08-08 12:15',
						typeText: '已完成处理',
						msg: '问题提交给XXX处理'
					}
				],
				type: '',
				id: '',
				textValue: '无人站XXX损坏',
				textareaMsg: ''
			}
		},
		onNavigationBarButtonTap: function (e) {
			uni.navigateTo({
				url: '/pages/takePic/list'
			})
		},
		computed: {
		},
		onLoad(query) {
			console.log(JSON.stringify(query))
			var that = this;
			that.type = query.type;
			that.id = query.id;
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
			voiceFn: function () {
				console.log('点击了语音')
			},
			downLoadData: function () {
				console.log('下载')
			},
			submitData: function () {
				console.log('提交')
			},
			getTextareaMsg: function (e) {
				this.textareaMsg = e.detail.value;
				console.log(this.textareaMsg)
			}
		}
	}
</script>

<style>
	@import 'index.css';
</style>
