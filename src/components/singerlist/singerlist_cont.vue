<template>
  <div class="rank-list">
    <div class="rank-list-title">
      <img src="./goback.png" alt="" @click="historyGo">
      <span>{{rankTitle}}</span>
    </div>
 
    <div class="rank-list-cont">
      <ul>
        <li v-for="(item,index) in $store.state.singerListCont">
        
         <router-link :to="item.url">
          <img :src="item.imgurl" class="rank-logo" alt="">
          <span>{{item.singername}}</span>
          <img src="./arrow_icon.png" alt="" class="rank-next">
        </router-link>
         
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
      }
    },
    mounted(){
      this.rankIdi = this.$route.params.id;
      this.$http.get('/api/singer/list/'+this.rankIdi+'?page=2&json=true',{
      }).then(function(response){
        var data = response.body;
        this.data = data;
        this.rankTitle = data.classname;
        
       this.$store.state.singerListCont = [];
        
        for( var index in  data.singers.list.info){
            var obj = {};
            obj.url = '/singerlistdetail/'+ data.singers.list.info[index].singerid
            obj.imgurl = data.singers.list.info[index].imgurl.replace('{size}',200);
            obj.singername = data.singers.list.info[index].singername;
            obj.singerid = data.singers.list.info[index].singerid;
            this.$store.state.singerListCont.push(obj);
        }
      });

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
