import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const state = {
  //音乐是否缓存完毕 load动画
  playStat:{
    load:true,
    seen:false,
    seenT:false
  },
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
  //新歌默认list
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
  //搜索的音乐结果list
  searchList:'',
  //播放的音乐信息
  music:{
    url:'',         //歌曲地址
    imgUrl:'',      //图片
    name:'',        //歌手名字
    musicName:'',  //音乐名字
    lyrics:'',     //歌词
    state:false,   //是否缓存完毕可以正常播放 判断load
    timeLength:'', //歌曲总时长
    timeIndex:{
      min:'00',
      sin:'00'
    }   //当前播放到的时常
  },
  //下一首
  next:{
     name:'',
     hash:''
  },
  //要搜索的hash和name
  getMusic:{
    name:'',
    hash:''
  },
  //排行榜list
  rankList:[
    {
      url:'/rank/6666',
      name:'酷狗飙升榜',
      img:'http://imge.kugou.com/mcommon/400/20150717/20150717100030907982.png'
    },{
      url:'/rank/8888',
      name:'酷狗TOP500',
      img:'http://imge.kugou.com/mcommon/400/20150717/20150717100046499341.png'
    },{
      url:'/rank/23784',
      name:'网络红歌榜',
      img:'http://imge.kugou.com/mcommon/400/20150818/20150818104300762763.png'
    },{
      url:'/rank/24971',
      name:'DJ热歌榜',
      img:'http://imge.kugou.com/mcommon/400/20160119/20160119114653428408.png'
    },{
      url:'/rank/27',
      name:'华语新歌榜',
      img:'http://imge.kugou.com/mcommon/400/20150717/20150717100103282211.png'
    },{
      url:'/rank/28',
      name:'欧美新歌榜',
      img:'http://imge.kugou.com/mcommon/400/20150717/20150717100117648320.png'
    },{
      url:'/rank/24045',
      name:'韩国新歌榜',
      img:'http://imge.kugou.com/mcommon/400/20170207/20170207104015555457.png'
    },{
      url:'/rank/22050',
      name:'粤语新歌榜',
      img:'http://imge.kugou.com/mcommon/400/20150717/20150717100200275675.png'
    },{
      url:'/rank/28653',
      name:'原创新歌榜',
      img:'http://imge.kugou.com/mcommon/400/20161013/20161013110348466009.png'
    },{
      url:'/rank/29606',
      name:'歌手2017榜',
      img:'http://imge.kugou.com/mcommon/400/20170204/20170204152817352959.png'
    }
  ],
  //排行榜list HASH
  rankListCont:'',
  pList:[
    {
      url:'/plist/121967',
      name:'百首华语动听回忆',
      img:'http://imge.kugou.com/soft/collection/400/20170122/20170122231850395461.jpg'
    },{
      url:'/plist/8888',
      name:'让人无奈的伤感情歌',
      img:'http://imge.kugou.com/soft/collection/400/20160325/20160325231009182541.jpg'
    },{
      url:'/plist/23784',
      name:'长相思兮长相忆',
      img:'http://imge.kugou.com/soft/collection/400/20170208/20170208152134159490.jpg'
    },{
      url:'/plist/24971',
      name:'华语乐坛最具辨识度男声',
      img:'http://imge.kugou.com/soft/collection/400/20170206/20170206175326555213.jpg'
    },{
      url:'/plist/27',
      name:'民谣男嗓，温暖心灵',
      img:'http://imge.kugou.com/soft/collection/400/20170204/20170204181103731629.jpg'
    },{
      url:'/plist/28',
      name:'专治节后综合症的励志好歌',
      img:'http://imge.kugou.com/soft/collection/400/20170105/20170105191649262796.jpg'
    },{
      url:'/plist/24045',
      name:'曾经烂大街的外语“神”曲',
      img:'http://imge.kugou.com/soft/collection/400/20150512/20150512103240551452.jpg'
    },{
      url:'/plist/22050',
      name:'致同桌的你',
      img:'http://imge.kugou.com/soft/collection/400/20140507/20140507092632667275.jpg'
    },{
      url:'/plist/28653',
      name:'烂大街的网络情歌',
      img:'http://imge.kugou.com/soft/collection/400/20170201/20170201013152709563.jpg'
    },{
      url:'/plist/29606',
      name:'不得不收藏的网络女声',
      img:'http://imge.kugou.com/soft/collection/400/20170201/20170201000212919747.jpg'
    }
  ],
  pListCont:'',


};
const mutations = {
  getApi(state){
    state.playStat.load = true;
    state.playStat.seen = false;
    state.playStat.seenT = false;
    state.music.timeIndex.min = '00';
    state.music.timeIndex.sin = '00';
    Axios.get('/api/app/i/getSongInfo.php?cmd=playInfo&hash='+state.getMusic.hash+'&from=mkugou',{

      }).then(function(response){
        var data = response.data;
        console.log(data);
        state.music.url = data.url;
        state.music.imgUrl = data.imgUrl.replace('{size}','200');
        //fen
        var min = parseInt(parseInt(data.timeLength) / 60);
        //s秒
        var s = ((parseInt(data.timeLength) / 60 - min) * 60).toFixed(0);
        if(s.length < 2){
          s = '0' + s;
        }
        state.music.timeLength =min +':' + s;
        state.music.name = state.getMusic.name;
      });
    Axios.get('/api/app/i/krc.php?cmd=100&keyword='+state.getMusic.name+'&hash='+state.getMusic.hash+'&timelength=329000&d=0.4067039370406582',{

    }).then(function(response){
      var data = response.data;
      state.music.lyrics = data;
    })
  }



};
const actions = {

};
export default new Vuex.Store({
    state,
    mutations,
    actions
});
