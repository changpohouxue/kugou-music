<template>
  <div class="kugou-xg">
    <img src="./banner.jpg" alt="">
    <div class="kugou-xg-list">
      <ul>
        <li v-for="item in $store.state.xgList"  >
            <span :hash = item.hash @click="getUrl">{{item.name}}</span>
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
            var hash = e.target.getAttribute('hash');
            var name = e.target.innerHTML;
            this.$http.get('/api/app/i/getSongInfo.php?cmd=playInfo&hash='+hash+'&from=mkugou',{

            }).then(function(response){
              var data = response.data;
              this.$store.state.music.url = data.url;
              this.$store.state.music.imgUrl = data.imgUrl.replace('{size}','200');
              this.$store.state.music.name = name;

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
  }
  .kugou-xg ul li span{
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 20px 0;
  }
</style>
