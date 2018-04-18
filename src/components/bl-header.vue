<template>
  <div class="head">
    <img src='../assets/logo.png' title='广科IT交流社区'>
    <el-autocomplete popper-class="my-autocomplete" custom-item="my-remote" v-model="state" :fetch-suggestions="querySearch" placeholder="搜索主题、帖子、用户或分类" icon="close" :on-icon-click="handleIconClick">
    </el-autocomplete>
  </div>
</template>

<script>
export default{
  name: 'bl-header',
  data () {
      return {}
  }
}
</script>
<style lang="scss">
  .my-autocomplete {
    li {
      line-height: normal !important;
      padding: 7px !important;

      .name {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .addr {
        font-size: 12px;
        color: #b4b4b4;
      }

      .highlighted .addr {
        color: #ddd;
      }
    }
    .ems {
      font-size: 12px;
      color: #b4b4b4;
    }
  }

  $IconW : 40px;
  $IconH : 40px;
  $HeadHeight : 50px;
  $IconPd : 35px;

  .head {
    display: inline-block;
    padding-left: $IconPd;
    height: $HeadHeight;
    background: #333333;
    img {
      margin-top: 5px;
      width: $IconW;
      height: $IconH;
    }
    input{
      display: inline-block;
      margin: 0;
      padding: 0 20px;
      line-height: 50px;
      width: 250px;
    }
  }

  .el-autocomplete{
    vertical-align: top;
    margin-top: 5px;
    margin-left: 10%;
  }
  @media screen and (max-width: 450px) {
    .head{
      padding-left: 15px;
    }
  }
  @media screen and (max-width: 415px) {
    .el-autocomplete{
      margin-left: 0;
    }
    .head{
      padding-left: 5px;
    }
  }
</style>
