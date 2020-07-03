// pages/dialog-demo/dialog-demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.dialog = this.selectComponent("#dialog"); //组件的id
  },

  open(){
    this.dialog.showDialog();
  },

  dialogConfirm(){
    this.dialog.hideDialog();
  }
  
})