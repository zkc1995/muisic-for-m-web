<template>
  <section id="hotsongs"  v-loading="loading">
      <ul>
        <li
          v-for="item,index in hotSongList"
          :key="item.id"
        >
          <div class="range-num">{{index+1}}</div>
          <a href="#">
            <div class="song-info">
              <div class="song-title">{{item.name}}</div>
              <div class="song-artist">{{item.ar[0].name}}</div>
            </div>
            <div class="song-play"><span class="el-icon-caret-right"></span></div>
          </a>
        </li>
      </ul>
  </section>
</template>
<script>
export default {
  name: "hotSongs",
  data: function() {
    return {
      hotSongList: [],
      loading: true
    };
  },
  created() {
    this.$axios.get("/top/list?idx=1").then(result => {
      // console.log(result);
      let list = result.data.playlist.tracks;
      for (let i = 0; i < 20; i++) {
        this.hotSongList.push(list[i]);
      }
      this.loading = false;
      // console.log(this.hotSongList);
    });
  }
};
</script>
<style>
</style>
