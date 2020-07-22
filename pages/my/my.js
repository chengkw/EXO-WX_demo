// function abc() {
//   console.log(123456789)
// }

// module.exports = {
//   abc: abc
// };
// var myurl ='';
Page({
  data: {
    num:0,
    numImg:0,
    nums:0,
    numss:0,
    list: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2063044047,1081552908&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1153274247,1919457141&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2103958053,2924414746&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2653913550,3128432763&fm=11&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1105423251,2347881305&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3971095649,1512092408&fm=27&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3829128285,3135653589&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=983643241,2536753320&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1243332487,3480205047&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2825774602,2313638686&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=654678304,2301285114&fm=27&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2917406874,2788814975&fm=27&gp=0.jpg']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(this.move, 3000)
  },
  shuaTwo:function(){
    this.setData({
      numss:1
    })
  },
  move() {
    if (this.data.numImg > 10) {
      this.setData({
        numImg: 0
      })
    } else {
      this.setData({
        numImg: ++this.data.numImg
      })
    }
  },
  shua:function(){
    this.setData({
      num:1
    })
  },
  // loopclick:function(e){
  //   // console.log(e)
  //   this.setData({
  //     nums:e.target.dataset.index
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
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
    
  },
    // click:function(){
    // wx.request({
    //   url:myurl+'/redis/json.php',
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
  //   wx.showToast({
  //     title: 'aaa',
  //   })
  // }
})