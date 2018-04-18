<template>
  <div class="listContent">
    <div class="list">
      <!--文章列表与热点栏-->
          <div class="listAll">
            <div class="secDiv">
              <div v-for="item in tableData" :key="item">
                <img src="../assets/3.jpg">
                <div class='textDiv'>
                  <a class="line-limit-length">{{item.title}}</a>
                  <div class='stuff'>
                    <span>回复：{{item.replay}}</span>
                    <span>创建于：{{item.date}}</span>
                    <span>阅读数：10000</span>
                    <div class="share">
                      <el-tooltip class="item" effect="dark" content="收藏(给个小星星吗)" placement="top-end">
                        <i class="el-icon-star-off"></i>
                      </el-tooltip>
                      <el-tooltip class="item" effect="dark" content="分享(好东西要众乐乐哟)" placement="bottom-start">
                        <i class="el-icon-share"></i>
                      </el-tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <bl-sidebar></bl-sidebar>
    </div>
    <!--todo 屏幕小于520px时，导航条换样式-->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="4"
        layout="prev, pager, next"
        :total="20">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import blSidebar from './bl-sidebar.vue'
  export default {
    data () {
      const item = {
        date: '2016-05-02',
        title: 'mac上面item2使用rz或者sz上传现在的时候不显示进度,大家有什么好的解决方式吗?在线等',
        read: 100,
        replay: 34
      }
      return {
        tableData: Array(8).fill(item)
      }
    },
    components: {
      blSidebar
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>

<style lang="scss">
  $listCenter: center; /*居中*/
  $listColor: #8c939d; /*主体颜色*/
  $listHoverColor: #000; /*鼠标经过颜色*/
  $componentSpace: 30px; /*各组件间距*/
  $shadow: 0 2px 5px rgba(146,146,146,0.3);

  .listContent {
    /*text-align: $listCenter;*/
    text-align: center;
  }

  .el-pagination button:hover {
    /*color: $listHoverColor;*/
    color: #000;
    background-color: inherit;
  }


  .el-pager li{
    & {
      color: #8c939d;
      background-color: inherit;
    }
    &.active {
      color: #000;
    }
    &:hover {
      color: $listHoverColor;
    }
  }

  .block {
    margin-top: $componentSpace;
    float: left;
    width: 100%;
  }

  .listAll{
    display: inline-block;
    width: 80%;
  }

  .secDiv {
    display: flex;
    flex-direction: column;
    font-size: 1em;
    font-family: SimHei;
    padding: 15px;
  }

  .secDiv > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
    padding: 20px;
    background: #f0f0f0;
    border-radius: 10px;
    box-shadow: $shadow;
    -moz-box-shadow: $shadow;
    -webkit-box-shadow: $shadow;
  }

  .secDiv > div img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }

  .textDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }

  .textDiv a {
    width: 90%;
    color: black;
    font-size: 1em;
    text-align: left;
  }

  .line-limit-length{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .textDiv a:visited {
    color: grey;
  }

  .stuff {
    font-size: 17px;
    margin-top: 12px;
    color: #8492A6;
    width: 95%;
  }

  .stuff span {
    margin-right: 30px;
    float: left;
  }

  .el-pagination button.disabled, .el-pagination .btn-next{
    background-color: inherit;
  }

  .share{
    display: inline-block;
    float: right;
    margin-right: 3%;
  }

  /*iphone: w < 768px  pad: w >= 768  && w< 992*/
  @media screen and (max-width: 1024px){
    .secDiv > div img {
      display: none;
    }
    .listAll{
      float: left;
      display: inline-block;
      width: 100%;
    }
    .line-limit-length{
      overflow: auto;
      text-overflow: clip;
      white-space: normal;
    }
    .textDiv{
      display: inline-block;
    }
    .stuff span{
      display: block;
      float: left;
    }
  }
</style>
