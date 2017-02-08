<template>
  <div class="index">
      <kugouHeader></kugouHeader>
      <router-view></router-view>
      <play></play>
  </div>
</template>

<script>
import kugouHeader from './header/header'
import play from './play/play'
export default {
  name: 'index',
  data () {
    return {

    }
  },
  components: {
    kugouHeader,play
  },
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #42b983;
}
</style>
