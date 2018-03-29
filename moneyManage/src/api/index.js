export default function request(url, data={}, method="get") {
	return new Promise( (resolve, reject) => {
		wx.request({
			url: url,
			data: data,
			method: method,
			success(data) {
				resolve(data.data)
			},
			fail(err) {
				reject(`${url}--接口错误`)
			}
		})
	})
}