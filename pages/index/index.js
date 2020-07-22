var urls ='http://www.suyan.com:90/weixin';
Page({
  data: {
    num:0,
    lunbo: ['https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=8c4506438f13632701e0ca61f0e6cb89/d8f9d72a6059252d49b0879b319b033b5ab5b98e.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2096341187,1177463500&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4286233618,1920832995&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=613737111,1934851123&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=458980062,1362941785&fm=27&gp=0.jpg', 'http://img1.imgtn.bdimg.com/it/u=2617063935,2543552954&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2811719864,1144706969&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3135203782,2877182502&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2536669667,3376523904&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4065622944,3702618773&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=147603465,308045139&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=404700685,1584750696&fm=27&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2726748288,2184555966&fm=27&gp=0.jpg'],
    movies: [
      {
        title: '单曲',
        date:[
          { img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1794066838,1858805389&fm=27&gp=0.jpg', id: 1, title: '《我是证人》片头曲', text: '《勋章》', audio:'http://www.chengkw.top/201801.mp3'},
          { img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2247793879,3807768282&fm=27&gp=0.jpg', id: 2, title: '《前任2:备胎反击战》主题曲', text: '《一个人》', audio: 'http://www.chengkw.top/201802.mp3' },
          { img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001MB5Yo21ab3b.jpg?max_age=2592000', id: 3, title: '《开学第一课》主题曲', text: '《第一课》', audio:'http://www.chengkw.top/201803.mp3'},
          { img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000lXXmD0eNyaz.jpg?max_age=2592000', id: 4, title: '《老炮儿》电影推广曲', text: '《花房姑娘》', audio:'http://www.chengkw.top/201804.mp3'},
          { img: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000YSfT14MIqfU.jpg?max_age=2592000', id: 5, title: '《没关系,是爱情啊》主题曲', text: '《The Best Luck》纯音乐', audio:'http://www.chengkw.top/201805.mp3'},
          { img: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=ad2fdbfbea50352aa56c2d5a322a9097/a2cc7cd98d1001e9aeddc043bb0e7bec55e7979d.jpg', id: 6, title: '《重返20岁》主题曲', text: '《我们的明天》', audio:'http://www.chengkw.top/201806.mp3'},
          { img: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=56100dfc9aef76c6c4dff379fc7f969f/9358d109b3de9c82629526526681800a18d8437f.jpg', id: 7, title: '《求婚大作战》插曲', text: '《祈愿》', audio:'http://www.chengkw.top/201807.mp3'}
        ]
      },
      {
        title: '专辑',
        date: [
          { img: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=e49f0aeab212c8fca0fefe9f9d6af920/d043ad4bd11373f014161755af0f4bfbfaed04ca.jpg', id: 1, title: 'COUNTDOWN', text: '2018', context: [{ name: 'COUNTDOWN', language: '日语', singer: 'EXO', numb: '10首', time: '2018-01-31', style: 'J-Pop，Dance-Pop', company: 'SM ENTERTAINMENT', area: '日本', imgs:'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=0ede695255df8db1a8237436684ab631/241f95cad1c8a7869ba922c46c09c93d71cf507c.jpg'}]},
          { img: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=671d72989322720e6fc3eaa81aa26123/14ce36d3d539b6005419d84de250352ac75cb771.jpg', id: 2, title: 'Universe', text: '2017', context: [{ name: 'Universe', language: '韩语，中文', singer: 'EXO', numb: '8首', time: '2017-12-26', style: '流行', company: 'SM ENTERTAINMENT', area: '韩国', imgs:'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=b6f8102215178a82da3177f2976a18e8/e824b899a9014c085ad8c24b017b02087af4f479.jpg'}]},
          { img: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=c4776d0177f40ad115e4c3e0602c1151/6a63f6246b600c33494884f1164c510fd9f9a1d2.jpg', id: 4, title: 'THE POWER OF MUSIC', text: '2017', context: [{ name: 'THE POWER OF MUSIC', language: '中文，韩语', singer: 'EXO', numb: '4首', time: '2017-09-05', style: 'K-Pop，Mandarin Pop', company: 'SM ENTERTAINMENT', area: '中国，韩国', imgs:'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=af36b1c0f0edab64607f4592965fc4a6/377adab44aed2e7380ed49278c01a18b87d6fab1.jpg'}]},
          { img: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=912f2f2faec27d1ea5263fc72cd4adaf/aa64034f78f0f736ead3d18a0055b319ebc4130f.jpg', id: 6, title: 'THE WAR', text: '2017', context: [{ name: 'THE WAR', language: '中文，韩语', singer: 'EXO', numb: '9首', time: '2017-07-18', style: 'Teenpop，K-Pop，Dance-Pop', company: 'SM ENTERTAINMENT', area: '中国，韩国', imgs:'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=04feb1eb45c2d562e605d8bf8678fb8a/72f082025aafa40ff63dd156a164034f79f01945.jpg'}] },
          { img: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=1171d3199122720e7bcee6f94cca0a3a/11385343fbf2b2118b95f335c38065380cd78e15.jpg', id: 7, title: 'FOR LIFE', text: '2016', context: [{ name: 'FOR LIFE', language: '中文，韩语', singer: 'EXO', numb: '5首', time: '2016-12-18', style: 'K-Pop，Mandarin Pop', company: 'SM ENTERTAINMENT', area: '中国，韩国', imgs:'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D95%2C0%2C1089%2C719%3Bc0%3Dbaike150%2C5%2C5%2C150%2C50/sign=36d5177771cb0a46916dd179565ac308/1f178a82b9014a90cc25b330a3773912b31bee20.jpg'}]},
          { img: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=70ba00e9d2b44aed594ebae7841d876a/503d269759ee3d6da35984684b166d224e4adef2.jpg', id: 8, title: 'LOTTO', text: '2016', context: [{ name: 'LOTTO', language: '中文，韩语', singer: 'EXO', numb: '13首', time: '2016-08-18', style: 'R&B，电子音乐，K-Pop，progressive', company: 'SM ENTERTAINMENT', area: '中国，韩国', imgs:'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=b010aca519dfa9ece9235e4503b99c66/7acb0a46f21fbe0929a00dad63600c338644ad89.jpg'}]},
          { img: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=db84590fe124b899de3c7d3b59071d59/9922720e0cf3d7ca88774c79fa1fbe096b63a938.jpg', id: 11, title: 'EX’ACT', text: '2016', context: [{ name: 'EX’ACT', language: '中文，韩语', singer: 'EXO', numb: '9首', time: '2016-06-09', style: 'R&B，电子音乐，POP，progressive', company: 'SM ENTERTAINMENT', area: '中国，韩国', imgs:'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=2a63080c44086e067ea5371963611091/6c224f4a20a446239b0d315f9022720e0df3d7cc.jpg'}]},
          { img: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=2803961e32fae6cd0cb4af6238b30f9e/f703738da97739120c33f248ff198618367ae286.jpg', id: 12, title: 'SING FOR YOU', text: '2015', context: [{ name: 'SING FOR YOU', language: '中文，韩语', singer: 'EXO', numb: '5首', time: '2015-12-10', style: '流行，R&B', company: 'SM ENTERTAINMENT', area: '中国，韩国', imgs:'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D87%2C0%2C1024%2C675%3Bc0%3Dbaike116%2C5%2C5%2C116%2C38/sign=74367bf40a087bf469a30da9cfeb6000/aa18972bd40735fa8f6e0a0696510fb30e2408f6.jpg'}] },
          { img: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=53e46faccdfcc3ceb4c0cd30a547d6b7/ac4bd11373f082024e5b72b14efbfbedaa641b76.jpg', id: 14, title: 'LOVE ME RIGHT', text: '2015', context: [{ name: 'LOVE ME RIGHT', language: '中文，韩语', singer: 'EXO', numb: '14首', time: '2015-06-03', style: '流行，K-pop', company: 'SM ENTERTAINMENT', area: '中国，韩国', imgs:'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=52d9d3462bdda3cc1fe9b07260805264/bd315c6034a85edf945eb4fa4c540923dc54751c.jpg'}] },
          { img: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=d002995b0f7b02080cc93be255d8f25f/f31fbe096b63f624d56488fd8244ebf81a4ca317.jpg', id: 17, title: 'EXODUS', text: '2015', context: [{ name: 'EXODUS', language: '中文，韩语', singer: 'EXO', numb: '10首', time: '2015-03-30', style: '韩国流行音乐，Dance-pop，Teen pop，嘻哈音乐，R&B，民谣，碎拍', company: 'SM ENTERTAINMENT', area: '中国，韩国', imgs: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=188e33116981800a7ae8815cd05c589f/c2cec3fdfc0392451f5e2b918294a4c27c1e2541.jpg'}] },
          { img: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=5a0f35116109c93d07f20af4a83df8bb/962bd40735fae6cde891d47e09b30f2442a70f83.jpg', id: 18, title: 'EXOLOGY CHAPTER 1 : THE LOST PLANET', text: '2014', context: [{ name: 'EXOLOGY CHAPTER 1 : THE LOST PLANET', language: '韩语', singer: 'EXO', numb: '36首 ', time: '2014-12-19', style: '流行', company: 'SM ENTERTAINMENT', area: '韩国', imgs:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=345637972,450425132&fm=27&gp=0.jpg'}]},
          { img: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=3dbefa1a51ee3d6d36cb8f99227f0647/500fd9f9d72a605949ae08a72034349b023bbad5.jpg', id: 20, title: '중독 (Overdose)', text: '2014', context: [{ name: '중독 (Overdose)', language: '中文，韩语', singer: 'EXO', numb: '5首', time: '2014-05-07', style: '流行，R&B，HipHop', company: 'SM ENTERTAINMENT', area: '中国，韩国', imgs:'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=096a60eaa4efce1bfe26c098ce3898bb/32fa828ba61ea8d3649a5718940a304e251f5875.jpg'}]},
          { img: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=9511f3bee4cd7b89e96c3e8038244291/728da9773912b31bf1473e5d8418367adab4e19f.jpg', id: 22, title: '12월의 기적', text: '2013', context: [{ name: '12월의 기적', language: '中文，韩语', singer: 'EXO', numb: '5首', time: '2013-12-09', style: '流行，圣诞音乐，R&B', company: 'SM ENTERTAINMENT', area: '中国，韩国', imgs:'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=f1db3d682a34349b600b66d7a8837eab/7e3e6709c93d70cfef31767ffadcd100bba12bfd.jpg'}]},
          { img: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=a99d3285dbb44aed594ebae7841d876a/503d269759ee3d6d7a7eb60442166d224e4ade40.jpg', id: 24, title: '으르렁 (Kiss Ver.)', text: '2013', context: [{ name: '으르렁 (Kiss Ver.)', language: '中文，韩语', singer: 'EXO', numb: '14首', time: '2013-08-05', style: '流行，Urban，R&B', company: 'SM ENTERTAINMENT', area: '中国，韩国', imgs:'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=9a3fe6bfd73f8794c7f2407cb3726591/6c224f4a20a44623018da0659b22720e0cf3d775.jpg'}] },
          { img: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=e969eddf0823dd542173a36be608b3df/bba1cd11728b47109b686c77c2cec3fdfd0323c1.jpg', id: 25, title: 'XOXO (Kiss Ver.)', text: '2013', context: [{ name: 'MAMA', language: '中文，韩语', singer: 'EXO', numb: '12首', time: '2012-06-22', style: '韩国流行音乐，Teen pop，嘻哈音乐', company: 'S.M.Entertainment', area: '中国，韩国', imgs:'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C4%2C1550%2C1023%3Bc0%3Dbaike180%2C5%2C5%2C180%2C60/sign=ef8ad9b41730e924dbebc67171384232/0824ab18972bd407dd78174173899e510eb309cb.jpg'}]},
          { img: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D137/sign=eac16b8c8701a18bf0eb164ca92e0761/b3fb43166d224f4a41b19eb309f790529822d162.jpg', id: 27, title: 'MAMA', text: '2012', context: [{ name: 'MAMA', language: '中文，韩语', singer: 'EXO', numb: '6首', time: '2012-06-22', style: 'K-Pop，R&B，巴洛克流行', company: 'S.M.Entertainment', area: '韩国', imgs:'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=c43a8ab3720e0cf3b4fa46a96b2f997a/faf2b2119313b07e9ee877a90cd7912397dd8c3d.jpg'}]},
        ]
      },
      {
        title: 'MV',
        date: [
          { img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=446945329,3952467799&fm=27&gp=0.jpg', id: 1, title: 'EXO', text: '《history》', video:'http://www.chengkw.top/2018a.mkv'},
          { img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=325303626,3955016356&fm=27&gp=0.jpg', id: 2, title: 'EXO', text: '《上瘾》', video:'http://www.chengkw.top/2018b.mkv'},
          { img: 'http://puui.qpic.cn/qqvideo_ori/0/f0020m2dloj_496_280/0', id: 3, title: 'EXO', text: '《Lucky One》', video:'http://www.chengkw.top/2018c.mkv'},
          { img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2637454466,1673254567&fm=27&gp=0.jpg', id: 4, title: 'EXO', text: '《狼与美女》', video:'http://www.chengkw.top/2018d.mkv'},
          { img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3388612341,3575567160&fm=27&gp=0.jpg', id: 5, title: 'EXO', text: '《咆哮》', video:'http://www.chengkw.top/2018e.mkv'},
          { img: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=c6a3dda23ff33a878a600848a7357b5d/55e736d12f2eb93888ca2460d0628535e4dd6ff8.jpg', id: 6, title: 'EXO', text: '《LOVE ME RIGHT》', video:'http://www.chengkw.top/2018f.mkv'},
          { img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2251213839,945423309&fm=27&gp=0.jpg', id: 7, title: 'EXO', text: '《CALL ME BABY》', video:'http://www.chengkw.top/2018g.mkv'},
          { img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2070959801,1082325554&fm=27&gp=0.jpg', id: 9, title: 'EXO', text: '《十二月的奇迹》', video:'http://www.chengkw.top/2018h.mkv'},
          { img: 'http://puui.qpic.cn/qqvideo_ori/0/k00185yonfc_496_280/0', id: 11, title: 'EXO', text: '《LIGHTSABER (光剑)》', video:'http://www.chengkw.top/2018i.mkv'},
          { img: 'http://puui.qpic.cn/qqvideo_ori/0/f0019tw4irb_496_280/0', id: 13, title: 'EXO', text: '《Sing For You (为你而唱)》', video:'http://www.chengkw.top/2018j.mkv'},
        ]
      }
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    list:[],
    headText:[],
    // user:[],
    Imgs:'',
    Names:''
  },
  onLoad:function(options){
    // this.setData({
    //   headText: options.headText
    // })
    // var headText = this.dat a.headText;
    // var that = this;
    // wx.request({
    //   url: urls+'/index.php',
    //   method:"GET",
    //   success:function(res){
    //     that.setData({
    //       headText: res.data
    //     })
    //   }
    // })
    var that = this
    wx.getUserInfo({
      success:function(res){
        // var Info = that.data.user
        // Info.push({
        //   user: res.userInfo
        // })
        // console.log(res.userInfo.nickName)
        that.setData({
          Names: res.userInfo.nickName,
          Imgs:res.userInfo.avatarUrl
        })
        console.log(that.data.Imgs)
        wx.showModal({
          title: '欢迎 ' + that.data.Names
        })
      }
    })
  },
  onShareAppMessage:function(){
    return{
      title:this.data.nickName,
      path:'/'
    }
  },
  click:function(e){
    this.setData({
      num: e.target.dataset.index
    })
    // if (e.target.dataset.index==1){
    //   button.style.display='none'
    // }
  },
  lianjie:function(e){
    var orderInfo = e.target.dataset;
    wx.setStorage({
      key: 'orderInfo',
      data: orderInfo,
      success:function(res){
        wx.navigateTo({
          url: '/pages/index/childOne/childOne'
        })
      }
    })
    // console.log(orderInfo)
  },
  lianjie1: function (e) {
    var orderInfo2 = e.target.dataset;
    wx.setStorage({
      key: 'orderInfo2',
      data: orderInfo2,
      success: function (res) {
        wx.navigateTo({
          url: '/pages/index/childTwo/childTwo'
        })
      }
    })
    // console.log(orderInfo)
  },
  lianjie2: function (e) {
    var orderInfo1 = e.target.dataset;
    wx.setStorage({
      key: 'orderInfo1',
      data: orderInfo1,
      success: function (res) {
        wx.navigateTo({
          url: '/pages/index/childThree/childThree'
        })
      }
    })
    // console.log(orderInfo)
  },

    // 提示弹窗
    // wx.showToast({
    //   title: '成功',
    //   icon: 'succes',
    //   duration: 1000,
    //   mask: true
    // })
    // 模态弹窗
    // wx.showModal({
    //   title: '提示',
    //   content: '你喜欢EXO吗',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    // 操作菜单
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success: function (res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail: function (res) {
    //     console.log(res.errMsg)
    //   }
    // })
  
  // index_li:function(){
    
  // }
  // onPullDownRefresh:function(){
  //   console.log(123)
  // },
  // onReachBottom:function(){
  //   console.log(456)
  // }
  // click:function(e){
  //   wx.navigateTo({
  //     url: 'childOne/childOne',
  //   })
  // }
})