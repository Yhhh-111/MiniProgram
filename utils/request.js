/**
 * Public methods of request  
 * Created by fyh on 20213/02/26.
 */
// 正式
const baseUrl = ''; // 请求接口URL
// const baseUrl = '; // 测试

// 请求接口
const request = (url, {
  method = 'GET',
  data = {},
  header = {
    'content-type': 'application/json;charset=UTF-8',
    'dataType': 'json',
    'Authorization': wx.getStorageSync('token') || ''
  }
} = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}${url}`, //域名接口地址
      method: method, //配置method方法
      data: method === 'GET' ? data : JSON.stringify(data), //如果是GET,GET自动让数据成为query String,其他方法需要让options.data转化为字符串
      header: header, //header中可以添加token值等
      success(res) { //接口调用成功的回调函数
        // 令牌失效
        if (res.statusCode === 401) {
          wx.showModal({
            title: '提示',
            content: '登录过期了，请重新授权',
            success: function () {
              wx.navigateTo({
                url: '/pages/oauth/oauth'
              });
            }
          });
        }

        // 成功结果
        if (res.statusCode === 200) {
          if (res.data && res.data.code === 0) {
            // 成功
          } else {
            // 其他情况
            wx.showModal({
              title: '提示',
              content: res.data.message
            });
          }
          return resolve(res.data);
        } else {
          return reject(res.data);
        }
      },
      fail(err) { //接口调用失败的回调函数
        return reject(err.data);
      },
      complete(com) { //接口调用结束的回调函数
        // 
      }
    });
  });
}

//get
const _get = (url, data = {}) => {
  return request(url, {
    method: 'GET',
    data
  });
}

//post
const _post = (url, data = {}) => {
  return request(url, {
    method: 'POST',
    data
  });
}

//delete
const _del = (url, data = {}) => {
  return request(url, {
    method: 'DELETE',
    data
  });
}

module.exports = {
  _get,
  _post,
  _del
}