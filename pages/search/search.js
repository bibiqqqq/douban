var api_url = "http://api.douban.com/v2/movie/search"; // pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      movie: []

    },
    search: function(e) {
      if (!e.detail.value) {
        return;
      }
      wx.showToast({
        title: "加载中...",
        icon: "loading",
        duration: 10000
      });
      var that =this;
      wx.request({
          url: api_url + "?q=" + e.detail.value,
          data: {},
          header: {
            'content-type': 'json'
          },
          success: function(res) {
            wx.hideToast();
            that.setData({
              movies: res.data.subjects,
            });
          }
    });
}

})
