const request = function (obj) {
	console.log(JSON.stringify(obj))
	uni.request({
		url: obj.url,
		data: obj.data,
		success: (res) => {
			if (res.data.msg == "OK" || res.data.code == "200") {
				obj.success(res.data);
			} else {
				uni.showModal({
					content: res.data.msg,
					showCancel:false
				})
			}
		},
		fail: (err) => {
			uni.showModal({
				content:"请求失败!",
				showCancel:false
			})
		}
	})
}
 export default request