/*  
    *提示和等待加载
*/

export default class Tips {
  constructor() {
    this.isLoding = false;
  }

  /*
      *等待窗口
  */

  static loading( title = "加载中" ) {
    if (Tips.isLoading) {
      return;
    }
    Tips.isLoading = true;
    wx.showLoading({
      title: title,
      mask: true,
      success: () => {
        console.log('页面加载完成')
      }
    })
  }

  /*
      *加载完毕
  */
  static loaded() {
    if (Tips.isLoading) {
      Tips.isLoading = false;
      wx.hideLoading()
    }
  }
}

/*
    *定义静态变量
    *加载的状态
*/

Tips.isLoading = false;

