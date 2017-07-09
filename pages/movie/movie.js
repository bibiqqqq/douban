var api_url = "http://api.douban.com/v2/movie/subject/"; // pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: api_url+options.id, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        that.setData({
          movie:res.data
        });
      }
    })

  }


})
