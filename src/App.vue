<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <header id="header">
      <ul>
        <li class="active"><a href="#">推荐音乐</a></li>
        <li><a href="#">热歌榜</a></li>
        <li><a href="#">搜索</a></li>
      </ul>
    </header>
    <router-view></router-view>
    <!-- 底部版权信息 -->
    <footer id="footer">
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
