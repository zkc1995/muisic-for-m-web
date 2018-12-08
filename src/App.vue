<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <header id="header">
      <ul>
        <li :class="{active:$route.path==='/index'}"><router-link to="/index">推荐音乐</router-link></li>
        <li :class="{active:$route.path==='/hotSongs'}"><router-link to="/hotSongs">热歌榜</router-link></li>
        <li :class="{active:$route.path==='/search'}"><router-link to="/search">搜索</router-link></li>
      </ul>
    </header>
    <router-view></router-view>
    <!-- 底部版权信息 -->
    <footer id="footer" v-show="$route.path!='/search'">
      皮皮版权所有©2018
    </footer>
  </div>
</template>

<script>


export default {
  name: "app"
};
</script>

<style>
</style>
