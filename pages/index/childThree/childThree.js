function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({
  data: {
    // toView: 'red',
    // scrollTop: 100,
    orderInfo1: [],
    src: '',
    danmuList: [
      {
        text: '',
        color: '#ff0000',
        time: 1
      },
      {
        text: '',
        color: '#ff00ff',
        time: 3
      }
    ],
    msg:[]
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
    this.setData({
      texts: e.detail.value
    })
    // console.log(this.inputValue)
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
    this.inputValue=''
    var list=this.data.msg;
    list.push({
      msg: this.data.texts
    })
    this.setData({
      msg:list,
      // inputValue:''
    })
    // console.log(this.data.msg)
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'orderInfo1',
      success: function (res) {
        // console.log(res.data.list)
        // innerAudioContext.src = res.data.list.video
        that.setData({
          orderInfo1: res.data.list
        })
        // console.log(res.data.list)
      },
    })
  },
})