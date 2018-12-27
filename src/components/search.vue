<template>
  <section id="search">
    <!-- 搜索框 -->
    <div class="search-bar">
      <input
        @keyup.enter="searching"
        type="text"
        v-model.trim="words"
        placeholder="搜索歌曲名称"
      >
    </div>
    <!-- 热搜词 -->
    <div
      class="search-hotword"
      v-show="showinghot"
    >
      <div class="title">
        热门搜索
      </div>
      <div class="content">
        <mt-button
          type="default"
          v-for="item,index in hots"
          :key="index"
        >{{item.first}}</mt-button>
      </div>
      <!-- 搜索历史 -->
      <div class="search-history">
        <ul>
          <li
            v-for="(item,index) in history"
            :key="index"
          >
            <a href="#">
              <div class="search-name">{{item}}</div><span class="iconfont icon-guanbi close"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 搜索结果 -->
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
      showinghot: true,
      words: "",
      history: []
    };
  },
  methods: {
    searching() {
      if (this.words == "") {
        this.showinghot = true;
      } else {
        this.showinghot = false;
        this.$axios.get(`/search/suggest?keywords=${this.words}`).then(res => {
          console.log(res);
        });
        if(this.history.length>6){
          this.history.
        }
        this.$store.commit("historyList", this.words);
        console.log(this.$store.state);
      }
    }
  },
  created() {
    this.history = this.$store.state.hisList;
    this.$axios.get("/search/hot").then(res => {
      // console.log(res);
      this.hots = res.data.result.hots;
    });
  },
  destroyed() {
    window.localStorage.setItem("historylist", JSON.stringify(this.history));
  }
};
</script>
<style>
</style>