<template>
  <div class="newList">
    <div class="newsItem">
      <h3 class="catListTitle">公告</h3>
      <div id="blog-news">
          <p>论坛是我家，和谐文明靠大家。</p>
        </div>
    </div>
  <div class="newsItem">
    <h3 class="catListTitle">阅读排行榜</h3>
    <div id="ranking-read">
      <p>《【毕设】基于vue.js的广科IT技术交流社区》</p>
      <p>《【毕设】基于vue.js的广科IT技术交流社区》</p>
      <p>《【毕设】基于vue.js的广科IT技术交流社区》</p>
    </div>
  </div>
    <div class="newsItem">
      <h3 class="catListTitle">评论排行榜</h3>
      <div id="ranking-comment">
        <p>《【毕设】基于vue.js的广科IT技术交流社区》</p>
        <p>《【毕设】基于vue.js的广科IT技术交流社区》</p>
        <p>《【毕设】基于vue.js的广科IT技术交流社区》</p>
        <p>《【毕设】基于vue.js的广科IT技术交流社区》</p>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="scss">
  $shadow: 0 2px 5px rgba(146,146,146,0.3);
  a{transition: all 0.5s !important;}
  a:hover{ text-decoration: none !important;}
  .newsItem{
    border-radius:6px;
    background-color: #f0f0f0;
    padding: 0 0 20px;
    box-shadow: $shadow;
    -moz-box-shadow: $shadow;
    -webkit-box-shadow: $shadow;
  }
  .catListTitle {
    font-size: 16px;
    padding: 10px 20px;
    background-color: #169fe6;
    color: #fff;
    font-weight: normal;
    border: 1px solid #169fe6;
  }
  .newList {
    margin-top: 10px;
    float: right;
    display: inline-block;
    width: 15%;
    /*height: 800px;*/
    border-radius: 10px;
    margin-right: 15px;
  }

  .newList p{
    font-size: 14px;
  }

  #blog-news, #ranking-read, #ranking-comment{
    padding: 0 10px 0;
  }

  .catListTitle{
    border-radius: 6px 6px 0px 0px;
    background-color: #26292C;
    border-color: #26292C;
  }
  /*iphone: w < 768px  pad: w >= 768  && w< 992*/
  @media screen and (max-width: 1024px) {
    .newList {
      display: none;
    }
  }
</style>
