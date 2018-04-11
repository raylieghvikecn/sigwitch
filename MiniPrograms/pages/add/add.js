//index.js
//获取应用实例
const app = getApp();

Page({
	onLoad: function () {

	},
	onReady: function () {

	},
	data: {
		date: '2018-04-11'
	},
	bindDateChange: function() {
		this.setData({
			date: e.detail.value
		});
	}
});
