<template>
    <div class="kugou-header">

               <router-link to="/" class="kugou-header-logo">
                 <img src="./logo.png" alt="">
               </router-link>
                 <div>
                   <span>下载酷狗</span>
                 </div>
             <router-link to="/search" class="kugou-header-search" @click="seachC">
               <img src="./search.png" alt="">
             </router-link>


    </div>
</template>

<script>
  export default{
      name:"kugou-header",
      data (){
          return {
              title:'酷狗'
          }
      },
      methods:{
        seachC(){
          alert(1);
        }
      }
  }
</script>

<style>
  .kugou-header{
    width: 100%;
    height: 3.2143rem;
    background: #2CA2F9;
    padding-top: .0357rem;
    display: flex;
    justify-content:space-between;
    position: relative;
    position: fixed;
    top:0;
    left: 0;
    z-index: 99;
    font-family: 'Microsoft Yahei';
  }

  .kugou-header .kugou-header-logo{
    display: inline-block;
    width: 7.286rem;
    height: 1.7143rem;
    position: absolute;
    top:50%;
    left: .7143rem;
    transform: translateY(-50%);
  }
  .kugou-header  .kugou-header-logo img{
    width: 100%;
  }

  .kugou-header>div span{
    display: block;
    width: 5.7143rem;
    height: 1.7143rem;
    line-height: 1.7143rem;
    border: 1px solid #fff;
    border-radius: .3571rem;
    text-align: center;
    color: #fff;
    font-size: .8571rem;
    position: absolute;
    top:50%;
    left:8.8rem;
    transform: translateY(-50%);

  }
  .kugou-header .kugou-header-search{
      width: 1.2143rem;
      height: 1.2143rem;
      position: absolute;
      top: 1rem;
      right: .7143rem;
      cursor: pointer;
      position: absolute;
      top:50%;
      transform: translateY(-50%);
  }
  .kugou-header .kugou-header-search img{
    width: 100%;
    height: 100%;
  }
</style>
