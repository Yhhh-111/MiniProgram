// components/steps/steps.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentStep: { //当前步骤 默认0
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    steps: [
      {
        text: '个人信息',
        // desc: '个人信息',
      },
      {
        text: '人脸识别',
        // desc: '人脸识别',
      },
      {
        text: '企业信息',
        // desc: '企业信息',
      },
      {
        text: '确认申请',
        // desc: '确认申请',
      },
    ],
    inactive: "#94D5FC",
    active: "#0C9EF9",
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
