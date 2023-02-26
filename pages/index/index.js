//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name: "", 
    type: "",
    idNum: "",
    tel: "",
    numCode: "",
    msgCode: "",
    bankCardType: "",
    bankCardNum: "",
    bankAddr: "",
    marryStatus: "",

  },
  success(e) {
    console.log("img" , e) ;
  } ,
  /**
   * 上传身份证
   */
  uploadImg(evt) {
    wx.chooseImage({
      success(res) {
        console.log('success') ;
        // https://api.weixin.qq.com/cv/ocr/idcard?img_url=ENCODE_URL&&access_token==ACCESS_TOCKEN
        wx.request({
          url: 'https://api.weixin.qq.com/cv/ocr/idcard?&access_token='
        })
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
   * 获取数字验证码
   * @param {获取} evt 
   */
  getNumCode(evt) {
    console.log("获取数字验证码: ", evt)
  },

  /**
   * 获取短信验证码
   * @param {*} evt 
   */
  getMsgCode(evt) {
    console.log("获取短信验证码: ", evt)
  },

  /**
   * 下一步
   */
  nextStep: function() {
    // 提交接口，后跳转
    wx.navigateTo({
      url: '../face/face'
    })
  },
})
