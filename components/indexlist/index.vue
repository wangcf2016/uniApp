<template xlang="wxml" minapp="mpvue">
	<view class="indexlist" v-if="indexlistshow">
		<view class="indexlist-m" :class="{indexlistfadein:indexlistshow,indexlistfadeout:indexlisthide}"></view>
		<view class="indexlist-c" :class="{indexlistshow:indexlistshow,indexlisthide:indexlisthide}">
			<view class="header">
				<view class="header-i"></view>
				<view class="header-title">{{title}}</view>
				<view class="header-i" @tap="hide" hover-class="hover-c">关闭</view>
			</view>
			<view class="sh">
				<input @input="bindKeyInput" placeholder="请输入拼音首字母或名称筛选" />
			</view>
			<view class="indexlist-c-b">
				<scroll-view :scroll-y="true" :scroll-into-view="toIndex" v-if="searchVal == ''">
					<block v-for="(v,i) in listv" :key="i">
						<view class="c-b-index" :id="i">{{i}}</view>
						<block v-for="(v2,i2) in v" :key="i2">
							<view class="c-b-text" :data-d="v2" @tap="result">{{v2[showtext]}}</view>
						</block>
					</block>
				</scroll-view>
				<scroll-view :scroll-y="true" v-if="searchVal != ''">
					<block v-for="(v,i) in listsv" :key="i">
						<view class="c-b-text" :data-d="v" @tap="result">{{v[showtext]}}</view>
					</block>
				</scroll-view>
				<view class="b-index" @touchmove="imove" @touchstart="istart" @touchend="iend" v-if="searchVal == ''">
					<block v-for="(v,i) in index" :key="i">
						<view class="b-index-text" :data-i="v" >{{v}}</view>
					</block>
				</view>
				<view class="show-index" v-if="showToIndex">{{toIndex}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "indexlist",
		props: {
			title:{ // 选择器名字
				type:String,
				default:"选择器"
			},
			py:{//拼音字段名
				type:String,
				default:"pinyin"
			},
			iscull:{ // 是否处理数据
				type:Boolean,
				default:false
			},
			showtext:{ // 显示出来的字段名
				type:String,
				default:'name'
			},
			list: { // 数据列表
				type: Object,
				default: function () {
					return []
				}
			},
		},
		data() {
			return {
				indexlistshow:false,
				indexlisthide:false,
				index: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
				listv:[],
				listsv:[],
				toIndex:'',
				searchVal:'',
				showToIndex:false,
			}
		},
		created:function(){
			let that = this;
			// 是否处理数据
			if(that.iscull){
				that.listv = that.cull(that.list);
				that.lists = that.list;
			}else{
				that.listv = that.objKeySort(that.list);
				that.lists = that.uncull(that.list);
			}
		},
		onLoad:function(){
			let that = this;
		},
		methods: {
			$: function (id, cb) {
				let query = uni.createSelectorQuery();
				// query.selectAll(id).boundingClientRect(function (rect) {
				// })
				query.selectAll(id).fields({
					id: true,
					dataset: true,
					size: true,
					scrollOffset: true,
					properties: ['scrollX', 'scrollY', 'hidden', 'src', 'class'],
					computedStyle: [
						'top',
						'right',
						'bottom',
						'left',
						'marginTop',
						'marginRight',
						'marginBottom',
						'marginLeft',
						'paddingTop',
						'paddingRight',
						'paddingBottom',
						'paddingLeft',
						'backgroundColor',
						'color',
						'fontSize',
						'transform',
					]
				}).exec(function (res) {
					cb(res)
				})
			},
			heraderHeight:0,
			indexHeight:0,
			iheight:0,
			toIndexOld:'',
			lists:[],
			show(e) { 
				let that = this;
				that.indexlistshow = true;
				// 获取节点信息
				setTimeout(() => {
					that.$('.header,.sh,.b-index',function(d){
						that.heraderHeight = d[0][0].height+d[0][1].height;
						that.indexHeight = d[0][2].height;
						that.iheight = that.indexHeight / that.index.length;
					})
				}, 300);
			},
			hide(e) { 
				let that = this;
				that.indexlisthide = true
				setTimeout(() => {
					that.indexlisthide = false;
					that.indexlistshow = false;
					that.toIndex = 'A';
					that.searchVal = '';
				}, 280);
			},
			result(e){
				this.$emit("result", e.currentTarget.dataset.d);
				this.hide();
			},
			imove(e){
				let i = Math.floor((e.clientY - this.heraderHeight) / this.iheight);
				if(this.toIndexOld != this.index[i]){
					this.toIndexOld = this.index[i];
					this.inerto(i)
				}
			},
			istart(e){
				let i = Math.floor((e.clientY - this.heraderHeight) / this.iheight);
				this.toIndexOld = this.index[i];
				this.showToIndex = true;
				this.inerto(i)
			},
			iend(e){
				this.showToIndex = false;
			},
			// 跳转
			inerto(e){
				this.toIndex = this.index[e];
			},
			//排序的函数
            objKeySort(arys){ 
                //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
				let newkey = Object.keys(arys).sort();
                let newObj = {}; //创建一个新的对象，用于存放排好序的键值对
                for(var i = 0; i < newkey.length; i++) {
                    //遍历newkey数组
                    newObj[newkey[i]] = arys[newkey[i]];
                    //向新创建的对象中按照排好的顺序依次增加键值对
				}
                return newObj; //返回排好序的新对象
            },
			// 按字段名分类数据
			cull(d){
				let that = this;
				let map = {};
				if(d.length <= 0){
					return false
				}
				d.forEach((v,i) => {
					let first = v[that.py].substring(0,1).toUpperCase()
					if(!map[first]){
						let arrtmp = [];
						arrtmp.push(v)
						map[first] = arrtmp;
					}else{
						map[first].push(v)
					}
				});
				return that.objKeySort(map)
			},
			// 把按字段分类的还原成普通数据
			uncull(d){
				let that = this;
				let map = [];
				for (const key in d) {
					if (d.hasOwnProperty(key)) {
						d[key].forEach((v,i)=>{
							map.push(v);
						})
					}
				}
				return map
			},
			// 搜索
			bindKeyInput(e){
				this.searchVal = e.detail.value;
				this.filter(e.detail.value)
			},
			filter(sval){
				let that = this;
				that.listsv = that.lists.filter((val)=>{
					let py = val[that.py].toUpperCase();
					let mt = sval.toUpperCase()
					return py.match(mt) || val[that.showtext].match(sval)
				});
			}
		},
		watch:{
			list(n,o){
				let that = this;
				// 是否处理数据
				if(that.iscull){
					that.listv = that.cull(n)
					that.lists = n;
				}else{
					that.listv = that.objKeySort(n);
					that.lists = that.uncull(n);
				}
			}
		}
	}
</script>

<style>
	@import "../../static/css/indexlist.css";
</style>
