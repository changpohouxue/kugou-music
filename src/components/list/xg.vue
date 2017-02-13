<template>
  <div class="kugou-xg">
    <img src="./banner.jpg" alt="">
    <div class="kugou-xg-list">
      <ul>
        <li v-for="item in $store.state.xgList"  :hash = item.hash @click="getUrl">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

    export default {
        name:'新歌list',
        data(){
          return {

          }
        },
        methods:{
          getUrl(e){
            //歌曲信息
            this.$store.state.playStat.load = true;
            this.$store.state.playStat.seen = false;
            this.$store.state.playStat.seenT = false;
            var hash = e.target.getAttribute('hash');
            var name = e.target.innerHTML.replace(/(^\s*)|(\s*$)/g, "");
            this.$store.state.next.hash = e.target.nextSibling.getAttribute('hash');
            this.$store.state.next.name = e.target.nextSibling.innerHTML;
            this.$http.get('/api/app/i/getSongInfo.php?cmd=playInfo&hash='+hash+'&from=mkugou',{

            }).then(function(response){
              var data = response.data;
              this.$store.state.music.url = data.url;
              this.$store.state.music.imgUrl = data.imgUrl.replace('{size}','200');
              //fen
              var min = parseInt(parseInt(data.timeLength) / 60);
              //s秒
              var s = ((parseInt(data.timeLength) / 60 - min) * 60).toFixed(0);
              if(s.length < 2){
                s = '0' + s;
              }
              this.$store.state.music.timeLength =min +':' + s;
              this.$store.state.music.name = name;

            });
            //歌词
            this.$http.get('/api/app/i/krc.php?cmd=100&keyword='+name+'&hash='+hash+'&timelength=329000&d=0.4067039370406582',{

            }).then(function(response){
              var data = response.data;
              this.$store.state.music.lyrics = data;
            })
          }
        }
    }
</script>

<style>
  .kugou-xg{
    margin-top: 6.4286rem;
    margin-bottom:4.2143rem;
  }
  .kugou-xg img{
    width: 100%;
  }
  .kugou-xg ul{
    padding: 0 10px;
  }
  .kugou-xg ul li{
    width: 100%;
    font-family: 'Microsoft Yahei';
    border-bottom: 1px solid #eee;
    font-size: 1rem;
    padding: 20px 0;
  }
</style>
