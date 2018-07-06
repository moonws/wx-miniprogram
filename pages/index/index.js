// pages/index/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [
      {
        id: 1,
        title: "直采本地甜香瓜  2至3个/份  约2至2.5斤",
        subtitle: '2至3个',
        resaleTime:'预售时间：6月23日-6月24日',
        acceptTime: '提货时间：6月25日',
        soldNum: '300',
        repertoryNum: '9000',
        discountPrice: '90.99',
        price: '19.99',
        isSellout:false,
        headImg:'http://apimagev.frxs.cn/productAdImg/20180620/100percent_aa4e3674-34c8-41c0-9342-5678d14b51e51529487868814.jpg',
        alreadySold: ['大王', '涛哥', '莎莎']
      }, {
        id: 200,
        title: '基地直采本地青丝瓜 约1.4至1.6斤/份',
        subtitle: '1份',
        resaleTime:'预售时间：6月24日-6月25日',
        acceptTime: '提货时间：6月25日',
        soldNum: '12',
        repertoryNum: '9000',
        price: '90.99',
        discountPrice: '19.99',
  headImg:'http://apimagev.frxs.cn/productAdImg/20180623/100percent_513862c3-f7c2-4445-9941-3df979ca071c1529719196513.jpg',
        alreadySold: ['小王', '涛哥', '黄大爷']

      },
      {
        id: 3,
        title: '界界乐原味乳酸菌  100ml/瓶  4瓶/组',
        subtitle: '1组',
        resaleTime:'预售时间：6月24日-6月25日',
        acceptTime: '提货时间：6月25日',
        soldNum: '11',
        repertoryNum: '9000',
        price: '910.99',
        discountPrice: '199.99',
        headImg: 'http://apimagev.frxs.cn/productAdImg/20180622/100percent_0061ab87-03de-4b40-bbb3-0a7054dd36bb1529661129123.jpg',
        alreadySold: ['小王', '涛哥', '黄大爷']

      },
       {
        id: 4,
        title: '界界乐原味乳酸菌  100ml/瓶  3瓶/组',
        subtitle: '1组',
        resaleTime: '预售时间：6月24日-6月25日',
        acceptTime: '提货时间：6月25日',
        soldNum: '11',
        repertoryNum: '9000',
        price: '610.99',
        discountPrice: '169.99',
        headImg:'http://apimagev.frxs.cn/productAdImg/20180622/100percent_0061ab87-03de-4b40-bbb3-0a7054dd36bb1529661129123.jpg',
        alreadySold: ['小王', '涛哥', '黄大爷']

      }
    ]
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

  },
  
  suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  goCat: function (e) {
    var kind = e.target.id
    console.log(kind);
    wx.showToast({
      title: '成功'+kind,
      icon: 'success',
      duration: 2000
    })
  },
  goDetail: function (e) {
    console.log(e);
    //// pages/index/orderDetails.js

    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../index/shop_detail?id=' + id
    })
  },
})
