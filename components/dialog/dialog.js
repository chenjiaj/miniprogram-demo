// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancel(){
      this.hideDialog();
      this.triggerEvent('cancel')
    },
    confirm(){
      this.triggerEvent('confirm')
    },
    hideDialog(){
      this.setData({
        show: false
      },()=>{
        this.triggerEvent('hideComplete')
      })
    },
    showDialog(){
      this.setData({
        show: true
      },()=>{
        this.triggerEvent('showComplete')
      })
    }
  }
})
