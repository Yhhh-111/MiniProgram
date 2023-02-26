// pages/company/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyName: "",
    type: "",
    creditCode: "",
  },

  /**
   * 上传营业执照
   */
  uploadImg(evt) {
    console.log("上传照片: ", evt);
    wx.chooseImage({
      success(res) {
        console.log('success')
      },
      fail(err) {
        console.log('fail')
      },
      complete(res) {
        console.log('complete')
      },
    })
  },

    /**
   * 上一步
   * @param {*} options 
   */
  pretStep(evt) {
    wx.navigateTo({
      url: '../face/face'
    })
  },

  /**
   * 下一步
   * @param {*} options 
   */
  nextStep(evt) {
    // 提交成功，后跳转
    wx.navigateTo({
      url: '../apply/apply'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

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

  }
})