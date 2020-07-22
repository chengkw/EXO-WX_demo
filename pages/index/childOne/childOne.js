// Page({
//   data:{

//   },
//   click:function(){
//     wx.navigateBack({
//       delta:1
//     })
//   },
//   onLoad:function(options){
    // console.log(options.title)
    // var url = getApp().globalData.text
    // console.log(url)
    // wx.chooseImage({
    //   sourceType:['camera']
    // })

    // wx.getBackgroundAudioManager()

      // wx.startRecord({
      //   success: function(res) {},
      //   fail: function(res) {},
      //   complete: function(res) {},
      // })
      // wx.stopRecord()
//   }
// })


const innerAudioContext = wx.createInnerAudioContext()
// innerAudioContext.autoplay=true
innerAudioContext.volume = 0.5
innerAudioContext.src = '';

Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    orderInfo:[]
  }, 
  onLoad: function (){
    var that=this;
    wx.getStorage({
      key:'orderInfo',
      success:function(res) {
        console.log(res.data.list)
        innerAudioContext.src = res.data.list.audio
        that.setData({
          orderInfo:res.data.list
        })
      },
    })
  },
  // slider4change: function (a) {
  //   var a = a.detail.value
  //   console.log(a / 100)
  //   innerAudioContext.volume = a
  // },
  abc: function (e) {
    var aaa = e.target.dataset.aaa;
    switch (aaa) {
      case "1":
        console.log("1");
        innerAudioContext.play()
        break;
      case "2":
        console.log("2");
        innerAudioContext.pause()
        break;
      case "3":
        console.log("3");
        innerAudioContext.stop()
        break;
      case "4":
        console.log("4");
        innerAudioContext.seek(0)
        break;
      default:
        console.log("错误");
    }
  }
})