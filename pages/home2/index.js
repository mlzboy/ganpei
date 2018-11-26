//index.js
//获取应用实例
var app = getApp();
var mtabW;
Page({
  data: {
    offset: 108,
    current_idx: 1,
    width: 30
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tabClick: function (e) {
    var that = this;
    var _idx = e.target.id;
    var _offset = 0;
    var _width = 0;
    switch (_idx) {
      case "1":
        _width = 30;
        _offset = 108;
        break;
      case "2":
        _width = 30;
        _offset = 230 + 38*3;
        break;
      case "3":
        _width = 30;
        _offset = 240 * 2 + 38*2+24+5;
        break;
      case "4":
        _width = 30;
        _offset = 240 * 3 + 38*3-9;
        break;
    }
    //var _offset = 240*(_idx-1);

    this.setData({
      offset: _offset,
      current_idx: _idx,
      width: _width,
    });
    console.log("current_idx", _idx);
    console.log("offset", _offset);
  }

})
