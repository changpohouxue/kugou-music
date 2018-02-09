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
  
  currentList:[],
  //新歌默认list
  xgList:[],
  //搜索的音乐结果list
  searchList:'',
  searchFlag:false,
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
  rankList:[],
  singerList:[],
  singerListCont:'',
  singerListDetailCont:'',
  //排行榜list HASH
  rankListCont:'',
  pList:[],
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
