<template>
	<view>
		<view class="container">
			<view class="list-top-warp">
				<view class="list-top">
					<view v-for="(item, index) in tabArr" :key="index" @tap="tabFn(item.id)" :class="{'chooseTab':item.choose}">{{item.text}}</view>
				</view>
			</view>
			<view class="list-center-warp">
				<view class="list-center">
					<scroll-view class="index-bd" scroll-y>
						<view class="list-center-for" v-for="(list, index) in list" :key="index" @tap="toDetail(list)">
							<view class="list-center-for-top">
								<view class="iconfont icon-didian"></view>
								<view class="list-center-for-text">{{list.address}}</view>
								<view :class="[list.type == '1' ? 'list-center-for-type1':'list-center-for-type2']">{{list.typeText}}</view>
							</view>
							<view class="list-center-for-bottom">
								<view>
									<view class="list-center-for-bottom-round"></view>
									<view class="list-center-for-bottom-text">上报时间</view>
									<view class="list-center-for-bottom-textRight">{{list.time}}</view>
								</view>
								<view>
									<view class="list-center-for-bottom-round"></view>
									<view class="list-center-for-bottom-text">上报人</view>
									<view class="list-center-for-bottom-textRight">{{list.name}}</view>
								</view>
							</view>
							<view class="dot-left"></view>
							<view class="dot-right"></view>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="list-bottom" @tap="addTakePic">
				<view class="iconfont icon-jia"></view>
				<view class="bottomText">新增随手拍</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				tabArr:[
					{
						id:1,
						choose: true,
						text:'待处理'
					},
					{
						id:2,
						choose: false,
						text:'处理中'
					},
					{
						id:3,
						choose: false,
						text:'已完成'
					}
				],
				list:[
					{
						id:1,
						address:'无人站A',
						type: '1',
						typeText: '一般',
						time: '2018-07-01 17:35',
						name: '王伟冬'
					},
					{
						id:1,
						address:'无人站A',
						type: '2',
						typeText: '较严重',
						time: '2018-07-01 17:35',
						name: '王伟冬'
					},
					{
						id:1,
						address:'无人站A',
						type: '1',
						typeText: '一般',
						time: '2018-07-01 17:35',
						name: '王伟冬'
					},{
						id:1,
						address:'无人站A',
						type: '2',
						typeText: '较严重',
						time: '2018-07-01 17:35',
						name: '王伟冬'
					},
					{
						id:1,
						address:'无人站A',
						type: '3',
						typeText: '严重',
						time: '2018-07-01 17:35',
						name: '王伟冬'
					},
					{
						id:1,
						address:'无人站A',
						type: '4',
						typeText: '特别严重',
						time: '2018-07-01 17:35',
						name: '王伟冬'
					}
				]
			}
		},
		onReachBottom: function () {
			console.log('到底刷新')
		},
		methods:{
			tabFn: function (id) {
				var that = this,
					tabArr = that.tabArr;
				for (var i = 0; i<tabArr.length; i++) {
					if (id == tabArr[i].id) {
						that.tabArr[i].choose = true;
					} else {
						that.tabArr[i].choose = false;
					}
				}
			},
			toDetail: function (data) {
				console.log(JSON.stringify(data))
				uni.navigateTo({
					url: '/pages/takePic/detail?type=' + data.type + '&&id=' + data.id
				})
			},
			addTakePic: function () {
				console.log('新增')
			}
		}
	}
</script>

<style>
	@import 'index.css';
</style>
