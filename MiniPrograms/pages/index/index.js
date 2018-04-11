const app = getApp();

Page({
  data: {
    Switch: false,
    date: '2016-04-11'
  },
  onLoad: function () {
    var self = this;
    app.ref.on('value', function (snapshot) {
      self.setData({
        Switch: snapshot.val() === "1" ? true : false
      });
    });
  },
  onReady: function () {

  },
  gotoAdd: function() {
    wx.navigateTo({
      url: '../add/add',
      success: function() {
        wx.showToast({title: '123'});
      },
      fail: function() {
        wx.showToast({title: '456'});
      },
      complete: function() {
        wx.showToast({title: '789'});
      }
    })
  },
  switchChange: function(e) {
    app.ref.set(e.detail.value ? "1" : "0");
  },
  bindDateChange: function(e) {
     this.setData({
       date: e.detail.value
     })
   },
});
