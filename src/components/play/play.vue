<template>
    <div class="kugou-play">
      <img :src="$store.state.music.imgUrl" class="gs-img" alt="">
      <span>{{$store.state.music.name}}</span>
      <div class="kugou-play-img">
        <!--<img src="./loading.png" alt="" class="pause kugou-loading"  @click="playpause($event)">-->
        <img src="./pause_icon.png" alt="" class="pause" v-if="seen" @click="pause()">
        <img src="./play_icon.png" alt="" class="pause"  v-if="seenT" @click="play()">
      </div>

      <img src="./next_icon.png" alt="" class="next" @click="next">
      <audio :src="$store.state.music.url" autoplay id="audio"></audio>
    </div>
</template>

<script>
  export default{
     data(){
       return{
          seen:true,
          seenT:false
       }
     },
    methods:{
      play(){
          var audio = document.getElementById('audio');
          this.seen = !this.seen;
          this.seenT = !this.seenT;
          audio.play();
      },
      pause(){
          var audio = document.getElementById('audio');
          this.seen = !this.seen;
          this.seenT = !this.seenT;
          audio.pause();
      },
      next(){

      }
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
  margin-top: 0.23215rem;
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

</style>
