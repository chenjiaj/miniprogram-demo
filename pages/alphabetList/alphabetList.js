Page({
  data:{
    list: [
      {alphabet: 'A', datas: ['asome','aentries','are here']},
      {alphabet: 'B', datas: ['bbsome','bebntries','bare here']},
      {alphabet: 'C', datas:  ['csome','centries','care here']},
      {alphabet: 'D', datas:  ['dsome','dentries','dare here']},
      {alphabet: 'E', datas:  ['esome','eentries','eare here']},
      {alphabet: 'F', datas:  ['fsome','fentries','are here']},
      {alphabet: 'G', datas:  ['gsome','gentries','gare here']},
      {alphabet: 'H', datas:  ['hsome','hentries','hare here']},
      {alphabet: 'I', datas:  ['isome','ientries','iare here']},
      {alphabet: 'J', datas:  ['jsome','jentries','jare here']},
      {alphabet: 'K', datas:  ['ksome','kentries','kare here']},
      {alphabet: 'L', datas:  ['lsome','lentries','lare here']},
      {alphabet: 'M', datas:  ['msome','mentries','mare here']},
      {alphabet: 'N', datas:  ['nsome','nentries','nare here']},
      {alphabet: 'O', datas:  ['osome','oentries','oare here']},
      {alphabet: 'P', datas:  ['psome','pentries','pare here']},
      {alphabet: 'Q', datas:  ['qsome','qentries','qare here']},
      {alphabet: 'R', datas:  ['rsome','rentries','rare here']},
      {alphabet: 'S', datas:  ['some','sentries','sare here']},
      {alphabet: 'T', datas:  ['tsome','tentries','tare here']},
      {alphabet: 'U', datas:  ['usome','uentries','uare here']},
      {alphabet: 'V', datas:  ['vsome','ventries','vare here']},
      {alphabet: 'W', datas:  ['wsome','wentries','ware here']},
      {alphabet: 'X', datas:  ['xsome','xentries','xare here']},
      {alphabet: 'Y', datas:  ['ysome','yentries','yare here']},
      {alphabet: 'Z', datas:  ['zsome','zentries','zare here']},
    ],
    alpha: '',
    windowHeight: ''
  },
  onLoad(options){
    try {
      const query = wx.createSelectorQuery()
      query.select('#alphanet-selector').boundingClientRect()
      query.exec((res)=>{
        const {top,height} = res[0];
        this.offsetTop = top;
        this.apHeight = height / (this.data.list.length || 1) ;
      })
      this.setData({windowHeight: res.windowHeight + 'px'})
    } catch (e) {
      
    }
  },
  handlerAlphaTap(e) {
    let moveY = e.touches[0].clientY;
    let {ap} = e.target.dataset;
    this.setData({alpha: ap});
    wx.showToast({
      title: ap,
      icon:'none',
      duration: 300
    })
  },
  handlerMove(e) {
    let {list} = this.data;
    let moveY = e.touches[0].clientY;
    let rY = moveY - this.offsetTop;
    console.log('moveY',moveY)
    if(rY >= 0) {
      let index = Math.ceil((rY - this.offsetTop)/ this.apHeight);
      console.log(index)
      if(0 <= index < list.length) {
        let nonwAp = list[index];
        if(nonwAp){
          nonwAp && this.setData({alpha: nonwAp.alphabet});
          wx.showToast({
            title: nonwAp.alphabet,
            icon:'none',
            duration: 300
          })
        }
      } 
    }
  }
})