import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  list:[
    {
      url:'xg',
      name:'新歌'
    },{
      url:'phb',
      name:'排行榜'
    },{
      url:'gd',
      name:'歌单'
    },{
      url:'gs',
      name:'歌手'
    }
  ],
  xgList:[
    {
      name:'赵杰 - 成都(Live)',
      hash:'32EF5D79A20F366EC9E55A9200050D8A'
    },{
      name:'张杰 - 很奇怪我爱你(Live)',
      hash:'36429111B2D2E90A9EC3E02D3347FDF5'
    },{
      name:'刘维 - 撩妹儿【疯岳撬佳人片尾曲】',
      hash:'FFA9BB4E15E47103A10E0AE22CEF92A1'
    },{
      name:'霍尊、平安 - 至少还有你(Live)',
      hash:'5239903856F25A24B7E7830F846AAC8B'
    },{
      name:'谭晶 - 唐韵【大唐荣耀片尾曲】',
      hash:'2F131F523E32BDF4C60608392745F79E'
    },{
      name:'陈鸿宇、苏紫旭、刘昊霖、寒洛 - 别送我【乘风破浪插曲】',
      hash:'9C03E9D6DFEE557898BEC8CEC7D52E8A'
    },{
      name:'李炜 - 剑魂【射雕英雄传插曲】',
      hash:'5F0518C72CEC704CA52287AEB360AD44'
    },{
      name:'李玟 - 18',
      hash:'B4404B806D9DB4D4542981B98AD5A35D'
    },{
      name:'马可 - 思美人兮【思美人主题曲】',
      hash:'DE8A2DC831B8842B6697A1973648BDA5'
    },{
      name:'汪苏泷 - 江湖天下【射雕英雄传插曲】',
      hash:'B8EA7542D32D9C94648E8D4FFFCD4067'
    },{
      name:'刺客先生 - 英雄【刺客列传2宣传曲】',
      hash:'03685175875DD07363320CB81A6D2C07'
    }
  ],
  music:{
    url:'',
    imgUrl:'',
    name:'',
    musicName:''
  }


};
const mutations = {


};

export default new Vuex.Store({
    state,
    mutations
});
