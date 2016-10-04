//index.js
//获取应用实例
var common = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    text:'test'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../hello/hello'
    })
  },
  onLoad: function () {
    console.log('onLoad');
    common.commonTest();
    var that = this;
    that.setData({
      text: 'Set some data for updating view.'
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady: function() {
    // Do something when page ready.
    console.log("onReady");
  },
  onShow: function() {
    // Do something when page show.
    console.log("onShow");
  },
  onHide: function() {
    // Do something when page hide.
    console.log("onHide");
  },
  onUnload: function() {
    // Do something when page close.
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'click me.'
    })
  }
})
