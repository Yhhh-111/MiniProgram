// pages/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    idNum: "",
    bankAddr: "",
    companyName: "",
    type: "",
    creditCode: "",
    tel: "",
    proChecked: false,
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
      url: '../company/company'
    })
  },

  /**
   * 提交
   * @param {*} options 
   */
  submit(evt) {
    console.log("提交")
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