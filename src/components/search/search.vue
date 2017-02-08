<template>
    <div class="kugou-child-search">
        <div class="kugou-child-search-title">
          <img src="./goback.png" alt="">
          <span>搜索</span>
        </div>
        <div class="search-input">
          <input type="text" placeholder="歌手/歌名/拼音">
          <span>搜索</span>
        </div>
    </div>
</template>

<script>
    export default{
      mounted(){
          this.$http.get('/search/api/v3/search/song?format=jsonp&keyword=%E6%88%91&page=1&pagesize=30&showtype=1&callback=kgJSONP106651651',{

          }).then(function(response){
              console.log(response);
          })
      }
    }
</script>

<style>
.kugou-child-search{
  width: 100%;
  box-shadow: 0 .1785rem .1785rem 0 #f4f4f4;
  color: #333;
  background: #fff;
  height: 3rem;
  position: fixed;
  top:3.2143rem;;
}
.kugou-child-search-title{
  text-align: center;
  height: 3rem;
  position: relative;
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
    padding: 10px 4px;
}
.search-input input{
   width: 78%;
   height: 1.6rem;
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
  height: 1.6rem;
  background: #2BA2FA;
  color: white;
  text-align: center;
  border-radius: 4px;
  line-height: 1.6rem;
  vertical-align: middle;
}
</style>
