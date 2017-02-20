<template>
    <div class="rank-list">
        <div class="rank-list-title">
          <img src="./goback.png" alt="" @click="historyGo">
          <span>{{rankTitle}}</span>
        </div>
        <div class="rank-banner">
          <img :src="rankBanner" alt="">
        </div>
        <div class="rank-list-cont">
          <ul>
            <li v-for="(item,index) in $store.state.rankListCont" :hash="item.hash" @click="getUrl($event)">
              <span v-bind:class="[index == 0 ? 'one' : 'rank-index',index == 1 ? 'two' : '',index == 2 ? 'three' : '']" >{{ index+1}}</span>
             {{item.filename}}
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
  export default{
    data(){
      return {
        rankId:'',
        rankTitle:'',
        rankBanner:'',
        data:''
      }
    },
    methods:{
      historyGo(){
        window.history.go(-1)
      },
      getUrl(e){
        //歌曲信息
        this.$store.state.getMusic.hash = e.target.getAttribute('hash');
        this.$store.state.getMusic.name = e.target.innerHTML.replace(/(^\s*)|(\s*$)/g, "");
        this.$store.commit('getApi')
        this.$store.state.next.hash = e.target.nextSibling.getAttribute('hash');
        this.$store.state.next.name = e.target.nextSibling.innerHTML;

      }
    },
    mounted(){
      this.rankIdi = this.$route.params.id;

      this.$http.get('/api/rank/info/?rankid='+this.rankIdi+'&page=3&json=true',{

      }).then(function(response){
          var data = response.data;
          this.data = data;
          this.rankTitle = data.info.rankname;
          this.rankBanner = data.info.banner7url.replace('{size}',400);
          this.$store.state.rankListCont = data.songs.list;
      })
    }
  }
</script>

<style>
.rank-list{
  margin-top: 3.2143rem;
  margin-bottom: 4.2143rem;
}
.rank-list .rank-list-title{
  background: #fff;
  box-shadow: 0 .1785rem .1785rem 0 #f4f4f4;
  color: #333;
  width: 100%;
  height: 3rem;
  text-align: center;
  height: 3rem;
  position: relative;
  position: fixed;
  top:3.2143rem;;
}
.rank-list .rank-list-title img{
  width: 20px;
  vertical-align: middle;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.rank-list .rank-list-title span{
  font-family: 'Microsoft Yahei';
  display: inline-block;
  line-height: 3rem;
}
.rank-banner{
  margin-top: 3rem;
  height: 12.5rem;
}
.rank-banner img{
  width: 100%;
  height: 150%;
}
  .rank-list-cont{
    margin-top: 6.5rem;
    padding:4px 10px
  }
.rank-list-cont ul li{
    font-family: 'Microsoft Yahei';
    border-bottom: 1px solid #eeeeee;
    padding: 20px 0;
}
.rank-list-cont ul li .rank-index{
  padding: 0 .5rem;
  color: #999999;

}

.one,.two,.three{
  padding: 0 .5rem;
  border-radius:0.5rem;
  color: white!important;

}
  .one{
    background-color: red;
  }
  .two{
    background-color: #FF7200;
  }
  .three{
    background-color: #F8B300;
  }
</style>
