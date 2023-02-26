// pages/face/face.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proChecked: false
  },

  /**
   * 人脸识别
   * @param {*} evt 
   */
  faceCheck(evt) {
    // 先判断使用设备是否支持人脸识别
    wx.checkIsSupportSoterAuthentication({
      success(res) {
        console.log('判断是否支持人脸识别功能：', res)
        // 人脸识别，调用
        
      },
      fail(res) {
        console.log('判断是否支持人脸识别功能错误回调：', res)
        wx.showModal({title: '提示', content: '该设备不支持人脸识别功能'})
      }
    })
  },

  /**
   * 勾选协议
   * @param {*} options 
   */
  proCheck(evt) {
    this.setData({
      proChecked: !this.data.proChecked
    });
    console.log(evt)
  },

  /**
   * 上一步
   * @param {*} options 
   */
  pretStep(evt) {
    wx.navigateTo({
      url: '../index/index'
    })
  },

  /**
   * 开始识别
   * @param {*} options 
   */
  nextStep(evt) {
    console.log("开始识别")
    // 人脸识别成功，后跳转
    wx.navigateTo({
      url: '../company/company'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.faceCheck()
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