Component({
    properties: {
      /**  */
      num:{
        type: Number,
        value: 0
      },
      min:{
        type: Number,
        value: 1,
      },
      max: {
        type: Number,
        value: 1000000000000000000000000,
      }
    },
  
    methods:{
      /**
       * 减少
       */
      reduce(){
        const {num, min}= this.data;
        if(num <= min){
          return;
        }
  
        this.setData({
          num: num - 1
        });
  
        this.triggerEvent('change', {
          num: num - 1
        });
      },
      /**
       * 增加
       */
      add(){
        const {num, max}= this.data;
        if(num >= max){
          return;
        }
        this.setData({
          num: num + 1,
        });
  
        this.triggerEvent('change', {
          num: num + 1
        });
      },
      /**
       * 改变表单
       * @param e 
       */
      inputBlur(e){
        const {num,min,max} = this.data;
        const value = Number(e.detail.value);
        let newNum = value;
        if(isNaN(value)){
          newNum = num;
        } else if(value < min){
          newNum = min;
        }else if(value > max){
          newNum = max;
        }
  
        this.setData({
          num: newNum,
        });
  
        this.triggerEvent('change', {
          num: newNum
        });
      }
    }
  })