<template>
    <div class="kugou-play">
      <router-link to="/playIndex" class="play-index-router">
        <img :src="$store.state.music.imgUrl" class="gs-img" alt="">
        <span>{{$store.state.music.name}}</span>
      </router-link>
      <div class="kugou-play-img">
        <img src="./loading.png" alt="" class="pause kugou-loading" v-if="$store.state.playStat.load" @click="playpause($event)">
        <img src="./pause_icon.png" alt="" class="pause" v-if="$store.state.playStat.seen" @click="pause()">
        <img src="./play_icon.png" alt="" class="pause"  v-if="$store.state.playStat.seenT" @click="play()">
      </div>

      <img src="./next_icon.png" alt="" class="next" @click="next">
      <audio :src="$store.state.music.url" autoplay @canplaythrough="buffersEnd()" id="audio"></audio>
    </div>
</template>

<script>
  export default{
     data(){
       return{
            setInt:'',

       }
     },
    methods:{
      buffersEnd(){
        this.$store.state.playStat.load = false;
        this.$store.state.playStat.seen = true;
        this.$store.state.music.state = true;
        clearInterval(this.setInt);
        this.timeIndex();

      },
      timeIndex(){
        var that = this;
        that.setInt = setInterval(function(){
           that.timeRight(function(){
             clearInterval(that.setInt);
             that.next();
           })
        },1000);

      },
      timeRight(call){
        var dom = document.getElementsByClassName('kugou-player-strip-index')[0];
        var lyrics = document.getElementsByClassName('kugou-play-lyrics-context-index')[0];
        var lyricsPar = document.getElementsByClassName('kugou-play-lyrics-context')[0];
        var span = document.getElementsByClassName('kugou-lyrics');
        if(span.length > 0){
          var lyricsParHeight = lyricsPar.offsetHeight;
          parseInt(this.$store.state.music.timeIndex.sin++);
          //分秒
          if(parseInt(this.$store.state.music.timeIndex.sin) < 10){
            this.$store.state.music.timeIndex.sin = '0' + this.$store.state.music.timeIndex.sin;
          }
          if(parseInt(this.$store.state.music.timeIndex.sin) > 59){
            this.$store.state.music.timeIndex.sin = '00';
            parseInt(this.$store.state.music.timeIndex.min++);
            if(parseInt(this.$store.state.music.timeIndex.min) < 10){
              this.$store.state.music.timeIndex.min = '0' + this.$store.state.music.timeIndex.min;
            }
          }

          for(var i = 0;i<span.length;i++){

            if((this.$store.state.music.timeIndex.min +':'+ this.$store.state.music.timeIndex.sin) == span[i].getAttribute('time')){
              span[i].previousSibling.setAttribute('class','kugou-lyrics');
              span[i].setAttribute('class','kugou-lyrics lyrics-active');
              var scroTop = span[i].offsetTop;
              lyrics.style.top = -(scroTop / lyricsParHeight * 100)+20+'%';
            }
          }
          if(parseInt(this.$store.state.music.timeIndex.min + this.$store.state.music.timeIndex.sin)==parseInt(this.$store.state.music.timeLength.replace(':',''))){ //播放结束
            call();
            this.$store.state.music.timeIndex.min = '00';
            this.$store.state.music.timeIndex.sin = '00';
          }
          dom.style.left = (parseInt(this.$store.state.music.timeIndex.min + this.$store.state.music.timeIndex.sin)) / parseInt(this.$store.state.music.timeLength.replace(':','')) * 100+'%'; //滚动
        }


      },
      play(){
          var audio = document.getElementById('audio');
          this.$store.state.playStat.seen = !this.$store.state.playStat.seen;
          this.$store.state.playStat.seenT = !this.$store.state.playStat.seenT;
          audio.play();
          this.timeIndex();
      },
      pause(){
        clearInterval(this.setInt);
        var audio = document.getElementById('audio');
        this.$store.state.playStat.seen = !this.$store.state.playStat.seen;
        this.$store.state.playStat.seenT = !this.$store.state.playStat.seenT;
        audio.pause();
      },
      next(){
        var hash = this.$store.state.next.hash;
        var name = this.$store.state.next.name;
        this.$store.state.music.timeIndex.min = '00';
        this.$store.state.music.timeIndex.sin = '00';
        var lyrics = document.getElementsByClassName('kugou-play-lyrics-context-index')[0];
        lyrics.style.top = 0;
        clearInterval(this.setInt);
        this.$http.get('/api/app/i/getSongInfo.php?cmd=playInfo&hash='+hash+'&from=mkugou',{

        }).then(function(response){
          var data = response.data;
          this.$store.state.music.url = data.url;
          this.$store.state.music.imgUrl = data.imgUrl.replace('{size}','200');
          this.$store.state.music.name = name;
          var min = parseInt(parseInt(data.timeLength) / 60);
          //s秒
          var s = ((parseInt(data.timeLength) / 60 - min) * 60).toFixed(0);
          if(s.length < 2){
            s = '0' + s;
          }
          this.$store.state.music.timeLength =min +':' + s;
        });
        this.$http.get('/api/app/i/krc.php?cmd=100&keyword='+name+'&hash='+hash+'&timelength=329000&d=0.4067039370406582',{

        }).then(function(response){
          var data = response.data;
          this.$store.state.music.lyrics = data;
        })
      }
    },
    mounted(){

    }
  }
</script>

<style>
.kugou-play{
  width: 100%;
  height: 4.2143rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,.9);
  color: #fff;
  font-size: 0;
}
.kugou-play .gs-img{
  display: inline-block;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 4px;
  vertical-align: middle;
  margin-top: 0.28rem;
  margin-left: 0.2rem;
}
.kugou-play span{
  color: white;
  display: inline-block;
  width: 8rem;
  font-size: 15px;
  vertical-align: middle;
  margin-left: 0.2rem;
}
.kugou-play-img{
  display: inline-block;
  position: relative;

}
.kugou-play-img img{
  position: absolute;
  top:50%;
  transform: translateY(-50%);
}
.kugou-play .kugou-loading{
  animation: loads 1.5s infinite linear;
}
.kugou-play .next{
  vertical-align: middle;
  margin-left: 2rem;
}
@keyframes loads{
  0%{
    transform:rotate(0deg);
    transform:rotate(0deg)
  }
  100%{
    -webkit-transform:rotate(360deg);
    transform:rotate(360deg)
  }
}
.play-index-router{
  width: auto;
  height: 100%;
  padding: 0;
}
</style>
