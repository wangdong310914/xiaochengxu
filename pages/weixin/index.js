// pages/index/index.js
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    array: [
      {
        mode: "scaleToFill",
        image: "../../public/icons/call1.png",
        info: "你好",
        time: (new Date()).toLocaleTimeString()
      }, {
        mode: "scaleToFill",
        image: "../../public/icons/call2.png",
        info: "我好困",
        time: (new Date()).toLocaleTimeString()
      }, {
        mode: "scaleToFill",
        image: "../../public/icons/call1.png",
        info: "me too",
        time: (new Date()).toLocaleTimeString()
      }, {
        mode: "scaleToFill",
        image: "../../public/icons/call2.png",
        info: "好好学习",
        time: (new Date()).toLocaleTimeString()
      }, {
        mode: "scaleToFill",
        image: "../../public/icons/call1.png",
        info: "me too",
        time: (new Date()).toLocaleTimeString()
      }, {
        mode: "scaleToFill",
        image: "../../public/icons/call2.png",
        info: "好好学习",
        time: (new Date()).toLocaleTimeString()
      }, {
        mode: "scaleToFill",
        image: "../../public/icons/call1.png",
        info: "me too",
        time: (new Date()).toLocaleTimeString()
      }, {
        mode: "scaleToFill",
        image: "../../public/icons/call2.png",
        info: "好好学习",
        time: (new Date()).toLocaleTimeString()
      }, {
        mode: "scaleToFill",
        image: "../../public/icons/call1.png",
        info: "me too",
        time: (new Date()).toLocaleTimeString()
      }, {
        mode: "scaleToFill",
        image: "../../public/icons/call2.png",
        info: "好好学习",
        time: (new Date()).toLocaleTimeString()
      }
    ]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});