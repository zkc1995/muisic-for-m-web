<template>
  <section id="search">
    <div class="search-bar">
      <input
        @input="searching"
        type="text"
        v-model.trim="words"
        placeholder="搜索歌曲名称"
      >
    </div>
    <div
      class="search-hotword"
      v-show="showinghot"
    >
      <div class="title">
        热门搜索
      </div>
      <div
        class="content"
        v-loading="loading"
      >
        <el-button
          v-for="item,index in hots"
          round
          :key="index"
        >{{item.first}}</el-button>
      </div>
      <div class="search-history">
        <ul>
          <li>
            <span class="el-icon-time history"></span>
            <a href="#">
              <div class="search-name">张杰</div><span class="el-icon-close close"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="search-result">
      <ul style="display:none">
        <li>
          <a href="#">
            <div class="song-info">
              <div class="song-title">我的爱对你说</div>
              <div class="song-artist">好妹妹</div>
            </div>
            <div class="song-play"><span class="el-icon-caret-right"></span></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="song-info">
              <div class="song-title">我的爱对你说</div>
              <div class="song-artist">好妹妹</div>
            </div>
            <div class="song-play"><span>▶</span></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="song-info">
              <div class="song-title">我的爱对你说</div>
              <div class="song-artist">好妹妹</div>
            </div>
            <div class="song-play"><span>▶</span></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="song-info">
              <div class="song-title">我的爱对你说</div>
              <div class="song-artist">好妹妹</div>
            </div>
            <div class="song-play"><span>▶</span></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="song-info">
              <div class="song-title">我的爱对你说</div>
              <div class="song-artist">好妹妹</div>
            </div>
            <div class="song-play"><span>▶</span></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="song-info">
              <div class="song-title">我的爱对你说</div>
              <div class="song-artist">好妹妹</div>
            </div>
            <div class="song-play"><span>▶</span></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="song-info">
              <div class="song-title">我的爱对你说</div>
              <div class="song-artist">好妹妹</div>
            </div>
            <div class="song-play"><span>▶</span></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="song-info">
              <div class="song-title">我的爱对你说</div>
              <div class="song-artist">好妹妹</div>
            </div>
            <div class="song-play"><span>▶</span></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="song-info">
              <div class="song-title">我的爱对你说</div>
              <div class="song-artist">好妹妹</div>
            </div>
            <div class="song-play"><span>▶</span></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="song-info">
              <div class="song-title">我的爱对你说</div>
              <div class="song-artist">好妹妹</div>
            </div>
            <div class="song-play"><span>▶</span></div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "search",
  data: function() {
    return {
      hots: [],
      loading: true,
      showinghot: true,
      words: ""
    };
  },
  methods: {
    searching() {
      if (this.words == "") {
        this.showinghot = true;
      } else {
        this.showinghot = false;
        this.$axios.get(`/search/suggest?keywords=${this.words}`).then(res=>{
            console.log(res);
        });
        // this.$store.commit('historyList',this.words)
      }
    }
  },
  created() {
    this.$axios.get("/search/hot").then(res => {
      // console.log(res);
      this.hots = res.data.result.hots;
      this.loading = false;
    });
  }
};
</script>
<style>
</style>