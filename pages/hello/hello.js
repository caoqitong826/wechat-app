//hello.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello pages'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('hello onLoad')
  }
})
