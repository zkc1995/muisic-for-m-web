<template>
  <div>
    <!-- 推荐音乐 -->
    <!-- 推荐歌单 -->
    <section id="recommend">
      <div class="title">
        <h2>推荐歌单</h2>
      </div>
      <div class="content" v-loading="loading">
        <ul>
          <li v-for="item,index in firstList" :key="item.id">
            <a href="#">
              <div>
                <img
                  :src="item.picUrl"
                  alt=""
                >
                <span class="listen-num"><span class="el-icon-service" ></span>{{item.playCount}}万</span>
              </div>
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
        <ul>
          <li v-for="item,index in secList" :key="item.id">
            <a href="#">
              <div>
                <img
                  :src="item.picUrl"
                  alt=""
                >
                <span class="listen-num"><span class="el-icon-service"></span>{{item.playCount}}万</span>
              </div>
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <!-- 最新音乐 -->
    <section id="newsongs">
      <div class="title">
        <h2>最新音乐</h2>
      </div>
      <div class="content" v-loading="load">
        <ul>
          <li v-for="item,index in newSongs" :key="item.id">
            <a href="#">
              <div class="song-info">
                <div class="song-title">{{item.name}}</div>
                <div class="song-artist">{{item.song.artists[0].name}}</div>
              </div>
              <div class="song-play"><span class="el-icon-caret-right"></span></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <!-- /推荐音乐 -->
  </div>
</template>
<script>
export default {
  name: "recommend",
  data: function() {
    return {
      firstList: [],
      secList: [],
      newSongs:[],
      artistName: [],
      loading:true,
      load:true
    };
  },
  created() {
    this.$axios.get("/personalized").then(result => {
      // console.log(result);
      for(let i=0;i<3;i++){
          this.firstList.push(result.data.result[i]);
          this.firstList[i].playCount=Math.floor(result.data.result[i].playCount/10000)
      }
      for(let i=0;i<3;i++){
          this.secList.push(result.data.result[i+3]);
          this.secList[i].playCount=Math.floor(result.data.result[i+3].playCount/10000)
      }
      this.loading = false
    //   console.log(this.firstList);
    });
    this.$axios.get('/personalized/newsong').then(result=>{
      // console.log(result);
      this.newSongs = result.data.result;
      this.load = false;
    })
  }
};
</script>
<style>
</style>