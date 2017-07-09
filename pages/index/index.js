//index.js
//获取应用实例
var api_url = 'http://api.douban.com/v2/movie/top250';
Page({
  data: {
    title:'加载中',
    movies:[]
  },
  onLoad: function () {
    var that =this;
    wx.showToast({
      title:'加载中',
      icon:'loading',
      duration:10000
    });
    wx.request({
      url:api_url,
      data:{},
      header:{
        'content-type': 'json'
      },
      success:function (res) {
        wx.hideToast();
        var data = res.data;
        console.log(res.data);
        that.setData({
          title:data.title,
          movies:data.subjects,
          image:data
        });
      }
    });
  }
})
