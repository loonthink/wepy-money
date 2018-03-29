/*
 **项目中的公共方法
 **作者zf
*/

/*
 **单纯处理时间戳
*/
export function dealNowDate(date) {
	let nowDate = new Date(date)
	let year = nowDate.getFullYear()
	let month = nowDate.getMonth() + 1
	let day = nowDate.getDate()
	return {
		year,
		month,
		day
	}
}

/*
 **处理数据中的时间戳
*/
export function dealTime(data) {
	/*
		*处理时间
	*/
	data.map((item, index) => {
		let date = new Date(item.time*1000)
		let month = date.getMonth() + 1
		let day = date.getDate()
		let week = date.getDay()
		item.time = `${month}月-${day}日`
		item.week = getWeek(week)
		let surplus = 0
		item.accounts.forEach((item, index) => {
			surplus += parseFloat(item.account)
			return surplus
		})
		item.surplus = surplus
	})
	return data
}

/*
	*星期的返回
*/
function getWeek(data) {
	switch (data) {
		case 1:
			return '星期一'
		case 2:
			return '星期二'
		case 3:
			return '星期三'
		case 4:
			return '星期四'
		case 5:
			return '星期五'
		case 6:
			return '星期六'
		case 7:
			return '星期七'
		default:
			return '星期错误'
	}
}