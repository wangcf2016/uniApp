<template>
	<view class="content">
		<indexlist :iscull="false" :showtext="'name'" :title="'标准格式indexlist'" :py="'pinyin'" :list="data0" @result="indexlist0" ref="indexlist0"></indexlist>
		<indexlist :iscull="true" :showtext="'name'" :title="'非标准格式indexlist'" :py="'pinyin'" :list="data1" @result="indexlist1" ref="indexlist1"></indexlist>
		<view class="index-i">
			<button @tap="indexlist0Show">打开标准格式 indexlist 选择器</button>
			返回的值: name:{{indexlist0result.name}} pinyin:{{indexlist0result.pinyin}}
		</view>
		<view class="index-i">
			<button @tap="indexlist1Show">打开非标准格式 indexlist 选择器</button>
			返回的值: name:{{indexlist1result.name}} pinyin:{{indexlist1result.pinyin}} id:{{indexlist1result.id}}
		</view>
	</view>
</template>

<script>
	import indexlist from "../../components/indexlist/index.vue"
	export default {
		data() {
			return {
				data0: {
					B: [{
						name: '版本',
						pinyin: 'bb'
					}, {
						name: '爸爸',
						pinyin: 'bb'
					}],
					A: [{
						name: '啊啊',
						pinyin: 'aa'
					}, {
						name: '啊啊a啊',
						pinyin: 'aaaa'
					}],
				},
				data1: [, {
					id: '1',
					name: '版本',
					pinyin: 'bb'
				},{
					id: '2',
					name: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
					pinyin: 'AAA'
				},{
					name: '阿尔法',
					pinyin: 'aef'
				}, {
					name: '贝多芬',
					pinyin: 'bdf'
				}, {
					name: '版本',
					pinyin: 'bb'
				}, {
					name: '阿尔法',
					pinyin: 'aef'
				}, {
					name: '贝多芬',
					pinyin: 'bdf'
				}, {
					name: '版本',
					pinyin: 'bb'
				}, {
					name: '阿尔法',
					pinyin: 'aef'
				}, {
					name: '贝多芬',
					pinyin: 'bdf'
				}, {
					name: '版本',
					pinyin: 'bb'
				}, {
					name: '阿尔法',
					pinyin: 'aef'
				}, {
					name: '贝多芬',
					pinyin: 'bdf'
				}, {
					name: '版本',
					pinyin: 'bb'
				}, {
					name: '阿尔法',
					pinyin: 'aef'
				}, {
					name: '贝多芬',
					pinyin: 'bdf'
				}, {
					name: '版本',
					pinyin: 'bb'
				}, {
					name: '阿尔法',
					pinyin: 'aef'
				}, {
					name: '贝多芬',
					pinyin: 'bdf'
				}, {
					name: '版本',
					pinyin: 'bb'
				}, {
					name: '阿尔法',
					pinyin: 'aef'
				}, {
					name: '贝多芬',
					pinyin: 'bdf'
				}, {
					name: '版本',
					pinyin: 'bb'
				}, {
					name: '阿尔法',
					pinyin: 'aef'
				}, {
					name: '贝多芬',
					pinyin: 'bdf'
				}, {
					name: '版本',
					pinyin: 'bb'
				}, {
					name: '阿尔法',
					pinyin: 'aef'
				}, {
					name: '贝多芬',
					pinyin: 'bdf'
				}, {
					name: '版本',
					pinyin: 'bb'
				}, {
					name: '阿尔法',
					pinyin: 'aef'
				}, {
					name: '贝多芬',
					pinyin: 'bdf'
				}, {
					name: '测定法',
					pinyin: 'cdf'
				}, ],
				indexlist0result: [],
				indexlist1result: [],
			}
		},
		methods: {
			indexlist0Show(e) { //显示标准格式选择器
				this.$refs.indexlist0.show();
			},
			indexlist1Show(e) { //显示非标准选择器
				this.$refs.indexlist1.show();
			},
			indexlist0(e) { //indexlist0的回调
				this.indexlist0result = e
				console.log('indexlist0返回的数据:', e)
			},
			indexlist1(e) { //indexlist1的回调
				this.indexlist1result = e
				console.log('indexlist1返回的数据:', e)
			},
		},
		components: {
			indexlist
		},
	}
</script>

<style>
	.content {
		flex: 1;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.title {
		font-size: 36px;
		color: #8f8f94;
	}
	.index-i{
		flex: 1;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 20px;
		
	}
</style>
