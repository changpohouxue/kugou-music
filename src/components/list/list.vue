<template>
  <div class="kugou-list">
    <ul>
      <li v-for="item in $store.state.list"   @click="getActive($event)">
          <router-link :to="item.url" class="kugou-list-li">{{item.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
       name:"home",
       data (){
          return {

          }
       },
       methods:{
          getActive(e){
              var list = document.getElementsByClassName('kugou-list-li')[0];
              list.className = list.className.replace('kugou-active',' ');
              e.target.setAttribute('class','kugou-active')
          }
       },
      mounted(){
          var list = document.getElementsByClassName('kugou-list-li')[0];
          list.setAttribute('class','kugou-list-li kugou-active');
      }
    }
</script>

<style>
  .kugou-list>ul{
    width: 100%;
    height: 3.2143rem;
    padding: 0 10px;
    position: fixed;
    top:3.2143rem;
    background: white;
    box-sizing: border-box;
    z-index: 99;
  }
  .kugou-list>ul li{
    float: left;
    width: 25%;
    list-style: none;
    text-align: center;
    font-family: 'Microsoft Yahei';
    box-shadow: 0 .1785rem .1785rem 0 #f4f4f4;
  }
  a{
    text-decoration: none;
    color: #555555;
    display: inline-block;
    width: 100%;
    padding:.7rem 0;
  }
  .kugou-active{
     border-bottom:4px solid #33A3F5;
  }

</style>
