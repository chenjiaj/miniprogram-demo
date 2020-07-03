// components/alphabet-list/alphabet-list.js
/**
 * list格式
 * [{alphabet: 'A', datas: ['asome','aentries','are here']},
      {alphabet: 'B', datas: ['bbsome','bebntries','bare here']},
      {alphabet: 'C', datas:  ['csome','centries','care here']},
      {alphabet: 'D', datas:  ['dsome','dentries','dare here']},]
 * alphabet 是字母索引
 * datas是一个数组，数组里边的可以是字符串也可以是对象，根据aphabet-item的格式决定，alphabet-item可以有多个，根据不同使用传入对应的
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [],
    },
    height: {
      type: String,
      value: "100vh",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    alpha: "",
    windowHeight: "",
  },

  ready() {
    this.queryMultipleNodes();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    queryMultipleNodes() {
      const query = this.createSelectorQuery();
      query.select("#alphanet-selector").boundingClientRect();
      query.select("#alphabet-list-wrapper").boundingClientRect();
      query.exec((res) => {
        this.upTop = 0;
        if (res[1]) {
          const { top = 0 } = res[1];
          this.upTop = top;
        }

        if (res[0]) {
          const { top, height } = res[0];
          this.offsetTop = top - this.upTop;
          this.apHeight = height / (this.data.list.length || 1);
        }
      });
    },
    handlerAlphaTap(e) {
      this.queryMultipleNodes();
      let { ap } = e.target.dataset;
      this.setData({ alpha: ap });
      wx.showToast({
        title: ap,
        icon: "none",
        duration: 300,
      });
    },
    handlerMove(e) {
      let { list } = this.data;
      let moveY = e.touches[0].clientY;
      let rY = moveY - this.upTop;
      if (rY >= 0) {
        let index = Math.ceil((rY - this.offsetTop) / this.apHeight);
        if (0 <= index < list.length) {
          let nonwAp = list[index];
          if (nonwAp && nonwAp.alphabet) {
            this.setData({ alpha: nonwAp.alphabet });
            wx.showToast({
              title: nonwAp.alphabet,
              icon: "none",
              duration: 300,
            });
          }
        }
      }
    },
    alhabetTab(e){
      this.triggerEvent('alhabetTab', e.detail);
    }
  },
});
