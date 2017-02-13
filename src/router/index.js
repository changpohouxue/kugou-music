import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index'


import list from 'components/list/list.vue'
import xinge from 'components/list/xg'
import search from 'components/search/search'
import rank from 'components/rank/rank'
import rankList from 'components/rank/rank_list'
import pList from 'components/plist/plist'
import pListCont from 'components/plist/plist_cont'
import playIndex from 'components/play_index/play_index'
Vue.use(Router)

const gd = {
  template: '<div><span>歌单</span></div>'
}
const gs = {
  template: '<div><span>歌手</span></div>'
}
const xg = {
  template: '<div><span>新歌</span></div>'
}
const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: index,
      children:[
        {
          path:'/',
          component:list,
          children:[
            {
              path:'/',
              component:xinge
            },
            {
              path:'/gd',
              component:pList
            },{
              path:'/phb',
              component:rank,
            },{
              path:'/gs',
              component:gs
            },{
              path:'/xg',
              component:xinge
            }
          ]
        },
        {
          name:'搜索',
          path:'/search',
          component:search
        },{
          name:'排行榜',
          path:'/rank/:id',
          component:rankList
        },{
          name:'歌单',
          path:'/plist/:id',
          component:pListCont
        },{
          name:'歌词',
          path:'/playIndex',
          component:playIndex
        }
      ]
    }
  ]
});
export default router;
