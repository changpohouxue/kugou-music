<template>
    <div class="kugou-child-search">
        <div class="kugou-child-search-title">
          <img src="./goback.png" alt="" @click="historyGo">
          <span>搜索</span>
        </div>
        <div class="search-input">
          <input type="text" placeholder="歌手/歌名/拼音" v-model='searchCont' @keyup.enter="searchS(searchCont)">
          <span @click="searchS(searchCont)" >搜索</span>
        </div>
        <div class="kugou-rm">
            <span>{{searchTitle}}</span>
            <div class="kugou-rm-list">
              <ul>
                <li v-if="hotSeen" v-for="item in $store.state.searchList.info" @click="searchS(item.keyword)">{{item.keyword}}</li>
                <li v-if="searchSeen" v-for="item in $store.state.searchList.info" @click="searchGetUrl($event)" :hash="item.hash">{{item.filename}}</li>
              </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
      data(){
        return {
            searchTitle:'最近热门',
            searchCont:'',
            hotSeen:true,
            searchSeen:false
        }
      },
      methods:{
        historyGo(){
          window.history.go(-1)
        },
        searchS(key){
          if(key){
            this.searchCont = key;
          }
          this.hotSeen = false;
          this.searchSeen = true;
          var that = this;
          var cont = this.searchCont;
          var page = 1;
          this.$http.get('/search/api/v3/search/song?keyword='+cont+'&page='+page+'&pagesize=100&showtype=1',{

          }).then(function(response){
            that.searchTitle = '总共'+response.data.data.total+'条结果';
            that.$store.state.searchList = response.data.data;
          })
        },
        searchGetUrl(e){
            //歌曲信息
            this.$store.state.getMusic.hash = e.target.getAttribute('hash');
            this.$store.state.getMusic.name = e.target.innerHTML.replace(/(^\s*)|(\s*$)/g, "");
            this.$store.commit('getApi')
            this.$store.state.next.hash = e.target.nextSibling.getAttribute('hash');
            this.$store.state.next.name = e.target.nextSibling.innerHTML;

        }
      },
      mounted(){
          var that = this;
          this.$http.get('/search/api/v3/search/hot?plat=0&count=30',{

          }).then(function(response){
              that.$store.state.searchList = response.data.data;
          })
      }
    }
</script>

<style>
.kugou-child-search{
  width: 100%;

}
.kugou-child-search-title{
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
.kugou-child-search img{
  width: 20px;
  vertical-align: middle;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.kugou-child-search .kugou-child-search-title span{
  display: inline-block;
  line-height: 3rem;
}
.search-input{
    padding: 10px;
    margin-top: 6.4286rem;
}
.search-input input{
  width: 78%;
  height: 2rem;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  outline:none;
  font-size: 14px;
  box-sizing: border-box;
  vertical-align: middle;

}
.search-input span{
  display: inline-block;
  width: 20%;
  height: 2rem;
  background: #2BA2FA;
  color: white;
  text-align: center;
  border-radius: 4px;
  line-height: 2rem;
  vertical-align: middle;
}
.kugou-rm{
  padding: 10px;
  font-family: 'Microsoft Yahei';
  margin-bottom: 4.2143rem;
  overflow-y: auto;
}
.kugou-rm span{
    display: inline-block;
    color: #2CA3F5;
    font-size: .8571rem;

}
.kugou-rm .kugou-rm-list{
  border-top:1px solid #CCCCCC;
}
.kugou-rm .kugou-rm-list ul li{
  padding: 30px 0;
  border-bottom:1px solid #E5E5E5;
}
</style>
