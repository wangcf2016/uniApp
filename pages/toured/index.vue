<template>
	<view>
		<view class="container">
			<view class="topView" @tap="choose">
				<view class="iconfont icon-dizhimore"></view>
				<view class="address">地点</view>
				<view class="checkAddress">{{selectName || "选择地点"}}</view>
				<view class="iconfont icon-rightLine"></view>
			</view>
			<view class="list">
				<view class="listHead">
					<view>任务周期</view>
					<view>频次</view>
					<view>指派人员</view>
				</view>
				<view class="listFor">
					<ul class="list_ul">
						<li v-for="(list, index) in listData" :key="index" :class="{'fontColor' : list.type == '3'}">
							<span class="iconfont" :class="{'icon-rightbg' : list.type == '1'}"></span>
							<view class="lineHeight">{{list.time}}</view>
							<view>{{list.num}}</view>
							<view>{{list.man}}</view>
						</li>
					</ul>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		data(){
			return {
			}
		},
		onNavigationBarButtonTap: function (e) {
			console.log(JSON.stringify(e))
		},
		computed: {
			...mapState('toured',['selectName', 'listData'])
		},
		methods:{
			choose: function () {
				uni.navigateTo({
					url: '/pages/toured/select?status=single'
				})
			}
		}
	}
</script>

<style>
	@import 'index.css';
</style>
