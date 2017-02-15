<template>
  <div class="kugou-play-index">
      <div class="play-index-bg"></div>
        <div class="play-overlay"></div>
      <div class="kugou-play-index-title">
        <img src="./goback.png" alt="" @click="historyGo">
        <span>{{$store.state.music.name}}</span>
      </div>
      <div class="kugou-play-lyrics">
        <img :src="$store.state.music.imgUrl" alt="">
        <div class="kugou-play-lyrics-context">
           <div class="kugou-play-lyrics-context-index">
             <span v-for="item in $store.state.music.lyrics.split('[')" :time="item.slice('0','5')" class="kugou-lyrics">{{item.slice('9',item.length)}}</span>
           </div>
        </div>
        <div class="kugou-player">
            <!--<span class="time-start">0{{String($store.state.music.timeIndex).replace('.',':')}}</span>-->
            <span class="time-start">{{$store.state.music.timeIndex.min}}:{{$store.state.music.timeIndex.sin}}</span>
            <div class="kugou-player-strip">
              <div class="kugou-player-strip-index"></div>
            </div>
            <span class="time-end">0{{$store.state.music.timeLength}}</span>
        </div>
      </div>

  </div>
</template>

<script>
  export default{
    data(){
      return {
        time:this.$store.state.music.timeIndex
      }
    },
    methods:{
      historyGo(){
        window.history.go(-1)
      },
    },
    mounted(){
       var dom = document.getElementsByClassName('play-index-bg')[0];
       dom.style.backgroundImage= 'url('+this.$store.state.music.imgUrl+')';
    }
  }
</script>

<style>
  .kugou-play-index{
    margin-top: 3.2143rem;
    margin-bottom: 4.2143rem;
    width: 100%;
    height: 100%;
  }
  .play-index-bg{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    -webkit-filter: blur(15px);
    position: absolute;
    top:0;
    left: 0;
  }
  .kugou-play-index-title{
    background:rgba(0,0,0,0);
    color: white;
    width: 100%;
    height: 3rem;
    text-align: center;
    height: 3rem;
    position: relative;
    z-index: 100;

  }
  .kugou-play-index-title img{
    width: 20px;
    vertical-align: middle;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .kugou-play-index-title span{
    font-family: 'Microsoft Yahei';
    display: inline-block;
    line-height: 3rem;
  }
  .play-overlay{
    background: rgba(0,0,0,.6);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .kugou-play-lyrics{
    min-width: 100%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;
    height:69%;
    max-width: 650px;
    color: #AFABAC;
  }
  .kugou-play-lyrics img{
    width: 10.7143rem;
    height: 10.7143rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .kugou-play-lyrics .kugou-play-lyrics-context{
    width: 100%;
    position: absolute;
    top:11.7143rem;
    left: 50%;
    transform: translateX(-50%);
    height: 55%;
    overflow: hidden;
  }
  .kugou-play-lyrics .kugou-play-lyrics-context .kugou-play-lyrics-context-index{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .kugou-play-lyrics .kugou-play-lyrics-context span{
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px;
  }
  .kugou-player{
    width: 100%;
    position: absolute;
    bottom: 0;

  }
  .kugou-player .kugou-player-strip{
     width: 70%;
     height: 6px;
     background-color: black;
     margin: 0 auto;
     position: relative;
  }
  .kugou-player .kugou-player-strip-index{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3195FD;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left: 0;
  }
  .kugou-player .time-start{
     position: absolute;
     left:10px;
     top:50%;
     transform: translateY(-50%);
  }
  .kugou-player .time-end{
    position: absolute;
    right:10px;
    top:50%;
    transform: translateY(-50%);
  }
  .lyrics-active{
    color: red;

  }
</style>
