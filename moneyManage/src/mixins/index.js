import wepy from 'wepy'
import { dealNowDate } from '@/utils'

export default class Index extends wepy.mixin {
	data = {
		now: ''
	}

	methods = {
		bindDateChange(e) {
			let chooseDate = e.detail.value
			let dateArray = chooseDate.split('-')
			this.now = {
				year: dateArray[0],
				month: dateArray[1]
			}

			this.now = `${dateArray[0]}年-${dateArray[1]}月`

			this.$apply()
		}
	}

	onLoad() {
		console.log(this.$root.$wxpage.route)
		let time = new Date().getTime()
		let nowDate = dealNowDate(time)
		this.now = `${nowDate.year}年-${nowDate.month}月`
		this.$apply()
	}
}