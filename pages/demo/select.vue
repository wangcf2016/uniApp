<template>
	<view>
		<select-compnent :type="type" :items="items" @selectSingle="selectSingle" @selectMore="selectMore"></select-compnent>
	</view>
</template>
<script>
	import select from '../../components/select/index.vue';
	import { mapActions } from 'vuex';
	export default {
		data() {
			return {
				type: '',
				items: [{
						value: 'USA',
						name: '美国'
					},
					{
						value: 'CHN',
						name: '中国',
					},
					{
						value: 'BRA',
						name: '巴西'
					},
					{
						value: 'JPN',
						name: '日本'
					},
					{
						value: 'ENG',
						name: '英国'
					},
					{
						value: 'FRA',
						name: '法国'
					}
				],
				selectData:{}
			}
		},
		components:{
			'select-compnent': select
		},
		onLoad(query) {
			console.log(JSON.stringify(query))
			var that = this;
			that.type = query.status;
		},
		onNavigationBarButtonTap: function (e) {
			var data = this.selectData;
			if (this.type == 'single') {
				this.singleSelect(data)
			} else {
				this.moreSelect(data)
			}
			uni.navigateBack({
				delta: 1
			})
		},
		methods:{
			selectSingle: function (data) {
				this.selectData = data;
			},
			selectMore: function (data) {
				this.selectData = data;
			},
			...mapActions('demo',['singleSelect', 'moreSelect'])
		}
	}
</script>

<style>

</style>
