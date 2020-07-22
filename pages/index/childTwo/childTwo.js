// var abc = require('../../my/my.js');
// import drawQrcode from '../../../utils/weapp.qrcode.min.js';
// var timer;
// function Countdown() {
//   timer = setTimeout(function () {

//   }, 1000);
// };
Page({
  data: {
    num:0,
    orderInfo2: []
  },
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'orderInfo2',
      success: function (res) {
        // console.log(res.data.list)
        that.setData({
          orderInfo2: res.data.list
        })
        // console.log(res.data.list)
      },
    })

    // 地图
    // wx.getLocation({
    //   success: function (res) {
    //     console.log(res.latitude)
    //     console.log(res.longitude)
    //   },
    // })
    // 二维码
    // drawQrcode({
    //   width: 200,
    //   height: 200,
    //   canvasId: 'mycan',
    //   text: 'https://github.com/yingye',
    //   typeNumber:'1',
    // })
  },
  click:function(){
    this.setData({
      num:1
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
