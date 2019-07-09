<template>
	<view>
		<view class="page-section" v-if="type == 'more'">
			<view class="uni-list">
				<checkbox-group @change="checkboxChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
						<view>
							<checkbox color="#ffb600" style="color:#000" :value="item.value" :checked="item.checked" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</checkbox-group>
			</view>
		</view>
		<view v-else class="page-section">
			<view class="uni-list">
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
						<view>
							<radio color="#ffb600" :value="item.value" :checked="item.checked" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</radio-group>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'select',
		props: {
			type: '',   //single单选、more多选
			items: []
		},
		data(){
			return {
				
			}
		},
		methods: {
			checkboxChange: function (e) {
				var that = this,
				    items = that.items,
						values = e.target.value,
						str = '';
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							items[i].checked = true;
							str += items[i].name + ' '
							break
						}
					}
				}
				console.log('选择的value==' + e.target.value)
				that.$emit('selectMore',{
					value: e.target.value,
					name: str
				})
			},
			radioChange: function (e) {
				var that = this,
				    items = that.items,
				    name = '';
				for (var i = 0, len = items.length; i < len; ++i) {
					items[i].checked = items[i].value == e.target.value
					if (items[i].value == e.target.value) {
						name = items[i].name;
					}
				}
				that.items = items
				console.log('选择的value==' + e.target.value)
				that.$emit('selectSingle',{
					value: e.target.value,
					name: name
				})
			}
		}
	}
</script>

<style>
	@import "../../static/css/uni.css";
	.uni-list-cell {
		justify-content: flex-start
	}
</style>
