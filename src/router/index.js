import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index'


import list from 'components/list/list.vue'
import xinge from 'components/list/xg'
import search from 'components/search/search'
Vue.use(Router)

const gd = {
  template: '<div><span>歌单</span></div>'
}
const phb = {
  template: '<div><span>排行榜</span></div>'
}
const gs = {
  template: '<div><span>歌手</span></div>'
}
const xg = {
  template: '<div><span>新歌</span></div>'
}
export default new Router({
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
              component:gd
            },{
              path:'/phb',
              component:phb
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
        }
      ]
    }
  ]
})
