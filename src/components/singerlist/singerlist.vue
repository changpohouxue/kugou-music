<template>
  <div class="rank">
    <ul>
      <li v-for="item in $store.state.singerList">
        <router-link :to="item.url">
          <span>{{item.classname}}</span>
          <img src="./arrow_icon.png" alt="" class="rank-next">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
	mounted(){
 
      this.$http.get('/api/singer/class&json=true',{
      }).then(function(response){
 
        var data = response.body;
        
        this.data = data;
        this.$store.state.singerList = [];
        
        for (var index in data.list){
          var obj = {};
          
          obj.classname = data.list[index].classname;
          obj.url = '/singerlist/'+ data.list[index].classid;
          this.$store.state.singerList.push(obj);
        }
      });
    }
}
</script>

<style>
  .rank{
    margin-top: 6.4286rem;
    margin-bottom: 4.2143rem;
  }
  .rank ul{
    padding: 4px 10px;
  }
  .rank ul li{
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #E5E5E5;
    font-family: 'Microsoft Yahei';
    position: relative;
  }
  .rank ul li .rank-logo{
    width: 5.3751rem;
    height: 5.3751rem;
    vertical-align: middle;
  }
  .rank ul li span{
    display: inline-block;
    vertical-align: middle;
    margin-left: 1rem;
    width: 10rem;
  }
  .rank ul li .rank-next{
    position: absolute;
    right: 0;
    top:50%;
    transform: translateY(-50%);
  }
</style>
