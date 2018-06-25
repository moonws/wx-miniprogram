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
    productList: [
      {
        id: 1,
        title: "直采本地甜香瓜  2至3个/份  约2至2.5斤",
        subtitle: '隔着屏幕闻着香味，百吃不厌的香瓜。基地直采',
        resaleTime: '预售时间：6月23日-6月24日',
        acceptTime: '提货时间：6月25日',
        soldNum: '300',
        repertoryNum: '9000',
        discountPrice: '8.8',
        price: '18.8',
        isSellout: false,
        deadTimeDes:"距离本商品结束还剩：",
        deadTime:"00：14：13",
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
        fansDes:"关注人数:",
        fansNum:31153,
        }],
        num:1,
        // 使用data数据对象设置样式名  
        minusStatus: 'disabled',
        goodsDetail:[
          {des:"供应商：",value:"菓然水果"},
          { des: "品牌：", value: "无" },
          { des: "规格：", value: "2至3个" },
          { des: "产地：", value: "中国" },
        ],
        imagesDes: "强烈推荐：隔着屏幕闻着香味，百吃不厌的香瓜。基地直采，绿色种植甜香瓜，顾名思义又甜又香的瓜，厚实甜美的果肉，浓郁鲜美的香气，十分爽口，口感倍儿爽。吃出儿时的味道，带你回到小时候。",
        place:"中国",
        imagesUrl:[
          { id: 1, imgUrl: "../../img/xg_imgDetail_01.png"},
          { id: 2, imgUrl: "../../img/xg_imgDetail_02.png" },
          { id: 3, imgUrl: "../../img/xg_imgDetail_03.png" }, 
          { id: 4, imgUrl: "../../img/xg_imgDetail_04.png" },
          { id: 5, imgUrl: "../../img/xg_imgDetail_05.png" },
          { id: 6, imgUrl: "../../img/xg_imgDetail_06.png" },
          { id: 7, imgUrl: "../../img/xg_imgDetail_07.png" },
          { id: 8, imgUrl: "../../img/xg_imgDetail_08.png" },
          { id: 9, imgUrl: "../../img/xg_imgDetail_09.png" }
        ]

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
  
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num
    });
  }  
})