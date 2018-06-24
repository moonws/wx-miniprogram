// pages/index/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    currentTab: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgData: [
      {
        "imgUrl": "../../img/xianggua_detail1.png",
        "id": "1"
      }, {
        "imgUrl": '../../img/xianggua_detail2.png',
        "id": "2"

      }, {
        "imgUrl": '../../img/xianggua_detail3.png',
        "id": "3"

      }
    ],

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var id = options.id;
    this.setData({
      id:id
    });
    wx.showToast({
      title: '获取到的id=' + id,
      icon: 'success',
      duration: 2000
    })

  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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