import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'
Vue.use(VueResource)
Vue.use(axios)
import store from './vuex/state'
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
function accAdd(arg1,arg2){
  var r1,r2,m;
  try{
    r1=arg1.toString().split(".")[1].length
  }catch(e){
    r1=0}  try{
    r2=arg2.toString().split(".")[1].length}catch(e){r2=0}  m=Math.pow(10,Math.max(r1,r2))
  return (arg1*m+arg2*m)/m
}
Number.prototype.add = function (arg){
  return accAdd(arg,this);
};
