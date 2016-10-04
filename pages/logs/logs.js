//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
   //事件处理函数
  container: function() {
    wx.navigateTo({
      url: '../hello/hello'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
