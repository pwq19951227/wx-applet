//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    tiantan: ['http://b178.photo.store.qq.com/psb?/V10p8KYU0u6e0t/yxwVk1JQMH9sc7dhxgaAI1I8I4Oqk7uVGVb5qdV.MeI!/b/dLIAAAAAAAAA&bo=VAY4BCATwAwFCbs!&rf=viewer_4', 'http://b287.photo.store.qq.com/psb?/V10p8KYU0u6e0t/XowmWYl*Fiq1eAbV9FuPncCrJ1KxNmQ.bnxL5PKgX50!/b/dB8BAAAAAAAA&bo=VAY4BCATwAwFOYs!&rf=viewer_4', 'http://b288.photo.store.qq.com/psb?/V10p8KYU0u6e0t/DlVK*2l3qtI4umKrsDP8AM0Ea*oJZCXotADhjLmXU2U!/b/dCABAAAAAAAA&bo=VAY4BCATwAwFKZs!&rf=viewer_4'],
    ybyc: [ "http://b365.photo.store.qq.com/psb?/V10p8KYU4ZN0cx/CaffysHhGqhX1G8ZtCjYrNBNxn3rqvk6rRs..5D2ASk!/b/dG0BAAAAAAAA&bo=OASgBYANABIRCTg!&rf=viewer_4", "http://b365.photo.store.qq.com/psb?/V10p8KYU4ZN0cx/l3Scy.oaxvVpHZoruvyw.NWprXPNsDn2pio2KH989BA!/b/dG0BAAAAAAAA&bo=OASgBYANABIRCTg!&rf=viewer_4", "http://b365.photo.store.qq.com/psb?/V10p8KYU4ZN0cx/omHfqgO2R3ZN5A0Fti5Ak8ihkOKrx5ALS5Bwez*HdsA!/b/dG0BAAAAAAAA&bo=VAY4BCATwAwRGb8!&rf=viewer_4", "http://b366.photo.store.qq.com/psb?/V10p8KYU4ZN0cx/q69jITlazvKmXl6QnxrRqvRl47thQ7mylU0LjTa9aSY!/b/dG4BAAAAAAAA&bo=VAY4BCATwAwRCa8!&rf=viewer_4"],
    ybyd: ["http://b288.photo.store.qq.com/psb?/V10p8KYU1n0AYf/yThaU3GKrJhapQ8WII7EGdh97ovYlkfyb85GdKXBHjk!/b/dCABAAAAAAAA&bo=VAY4BCATwAwFCbs!&rf=viewer_4", "http://b246.photo.store.qq.com/psb?/V10p8KYU1n0AYf/AtEOc*UoyIvJrV.NY3ymkT4sMkVQ*AIcYlE3U3V1AHo!/b/dPYAAAAAAAAA&bo=VAY4BCATwAwFCbs!&rf=viewer_4", "http://b287.photo.store.qq.com/psb?/V10p8KYU1n0AYf/zckJVBGnkIi3*vIGFdDghhLRm6e7kPgEkGXKo3Ja1Ws!/b/dB8BAAAAAAAA&bo=VAY4BCATwAwFCbs!&rf=viewer_4", "http://b287.photo.store.qq.com/psb?/V10p8KYU1n0AYf/KLk*6aTim9WPtVxtkivAgKQbdQNH2eluRDrOAJVSdxs!/b/dB8BAAAAAAAA&bo=9gU4BPgRuAwFCbg!&rf=viewer_4", "http://b178.photo.store.qq.com/psb?/V10p8KYU1n0AYf/3wuKHkPNVNXtR.3clh*ZTP4aLXF8dnWEJlQ8Q2eTQi4!/b/dLIAAAAAAAAA&bo=VAY4BCATwAwFCbs!&rf=viewer_4"],
    houhai: ["http://b288.photo.store.qq.com/psb?/V10p8KYU0SdnCV/KgJuVpJunLGGNrH7On1pdFkMnlbY5IauJfvNutL4q9I!/b/dCABAAAAAAAA&bo=VAY4BCATwAwFCbs!&rf=viewer_4", "http://b287.photo.store.qq.com/psb?/V10p8KYU0SdnCV/2J4o4l0QADCHvCRFgPl97P6y2uiqou1UPvvuRS8PnVc!/b/dB8BAAAAAAAA&bo=VAY4BCATwAwFOYs!&rf=viewer_4",
"http://b287.photo.store.qq.com/psb?/V10p8KYU0SdnCV/Ck3.FPCaHgFART57R5qD8JP2viqiGV6yOQoF.W1f3Rw!/b/dB8BAAAAAAAA&bo=VAY4BCATwAwFOYs!&rf=viewer_4"
    ],
    qhd: ["http://b281.photo.store.qq.com/psb?/V10p8KYU0sr1I0/Gl96sO*3xhaUh1A4CFgyXbw8l4TR.95mjGy8GNLiGgM!/b/dBkBAAAAAAAA&bo=VAY4BCATwAwRCa8!&rf=viewer_4", "http://b281.photo.store.qq.com/psb?/V10p8KYU0sr1I0/dmVCz3Bk7QuxXEw0MYU7e3TuiQbzugQg7ceCEZ2IaWs!/b/dBkBAAAAAAAA&bo=VAY4BCATwAwRCa8!&rf=viewer_4", "http://b280.photo.store.qq.com/psb?/V10p8KYU0sr1I0/Rsi6TJAUqkmTzCs7uGVNsw7yvMnpfqbzBPDZufqm1VE!/b/dBgBAAAAAAAA&bo=VAY4BCATwAwROZ8!&rf=viewer_4", "http://b288.photo.store.qq.com/psb?/V10p8KYU0sr1I0/cGUDXkPCldtF*6p74XBDQWx3Vt5J08lcJF.sm.rF12E!/b/dCABAAAAAAAA&bo=VAY4BCATwAwRCa8!&rf=viewer_4"],
    xs: ["http://b174.photo.store.qq.com/psb?/V10p8KYU2U0cdA/.7WVDmSX0wkd85BgjsOexwBEN*QdN2K9iv1dXO50qKM!/b/dK4AAAAAAAAA&bo=EQY4BHgQdAsFCRY!&rf=viewer_4","http://b177.photo.store.qq.com/psb?/V10p8KYU2U0cdA/SmEO8i7N9yuO0V.4XZfLIOYUoLgAjxt6ALg4KFQROjk!/b/dLEAAAAAAAAA&bo=VAY4BCATwAwFKZs!&rf=viewer_4", "http://b177.photo.store.qq.com/psb?/V10p8KYU2U0cdA/cKIjRz5qY8*5g5ZYM1wGe.E6iaOWMvdkMcCn1GO.vQk!/b/dLEAAAAAAAAA&bo=VAY4BCATwAwFKZs!&rf=viewer_4", "http://b173.photo.store.qq.com/psb?/V10p8KYU2U0cdA/RHBKPLdq3xK7Kuop3JQdpmhX.pHvxWp6yPzSkC3bupA!/b/dK0AAAAAAAAA&bo=VAY4BCATwAwFOYs!&rf=viewer_4"]
  },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.tiantan;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  previewImg2: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.ybyc;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  previewImg3: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.ybyd;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  previewImg4: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.houhai;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  previewImg5: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.qhd;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  previewImg6: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.xs;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})
