Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的初始数据
   */
  data: {
    isFocus:true,
    inputValue:'',
    codes:["","","","","",""]
  },
  /**
  * 组件的属性列表
  */
  properties: {
    maxLenForOne:{
      type:Number,
      value: 1
    },
    inputNum:{
      type:Number,
      value: 6
    },
    inputType: {
      type: String,
      value: "text",
    },
    toUpperCase: {
      type: Boolean,
      value: false,
    },
    notEmptyString: {
      type: Boolean,
      value: true,
    }
  },
  attached() {
    this.setData({
      codes: Array.from({length:this.data.inputNum},()=>'')
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击输入框
     */
    openKeyboard: function () {
      this.setData({
        isFocus: true
      })
    },
    /**
     * 监听键盘输入
     */
    listenKeyInput: function (e) {
      const {inputNum,maxLenForOne,toUpperCase,notEmptyString} = this.data;
      const maxLen = inputNum * maxLenForOne;
      let text = e.detail.value;
      if(toUpperCase){
        text = text.toUpperCase();
      }
      if(notEmptyString){
        text = text.replace(' ','');
      }
      let textLength = text.length;
      let codeArray = Array.from({length:this.data.inputNum},()=>'');
      for (var i = 0; i < inputNum ; i++ ){
        var code = text.substr(i*maxLenForOne, maxLenForOne) || '';
        codeArray[i] = (code);
      } 
      this.setData({
        codes: codeArray
      })
      const inputValue = codeArray.join('');
      this.triggerEvent('change',inputValue);
      if (textLength >= maxLen) {
        this.setData({
          isFocus: false
        })
        this.triggerEvent('compelte',codeArray.join(''))
      }
      this.setData({
        inputValue: inputValue
      })
    }
  }
  
})
