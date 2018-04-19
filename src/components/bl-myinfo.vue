<template>
  <div class="myInfo">
    <div class="info">
      <div id="avatar">
        <img src="../../static/logo.png">
      </div>
      <p>Lying</p>
    </div>
    <div class="baseInfo">
      <div class="infoTitle">
        <i class="el-icon-caret-right"></i>
        <p>基本信息</p>
      </div>
      <div class="infoLeft">
        <p>Email:</p>
        <p>个人简介:</p>
        <p>积分:</p>
      </div>
      <div class="infoRight">
        <p>592575845@qq.com</p>
        <p>这个人很懒，什么都没有写。</p>
        <p>100</p>
      </div>
    </div>
    <div class="baseInfo">
      <div class="infoTitle">
        <i class="el-icon-caret-right"></i>
        <p>我的收藏</p>
      </div>
      <bl-list></bl-list>
    </div>
  </div>
</template>
<script>
  import blList from './bl-list.vue'
  export default {
    components: {
      blList
    }
  }
</script>
<style lang="scss" scope>
  .myInfo{
    text-align: center;
    margin-top: 20px;
  }
  .info{
    border-bottom: 1px solid #666666;
  }
  #avatar{
    img{
      width: 50px;
      height: 50px;
    }
  }
  .baseInfo{
    padding-top: 20px;
    margin: 0 auto;
    width: 70%;
  }
  .infoTitle{
    text-align: left;
    p{
      display: inline-block;
    }
  }
  .infoLeft{
    text-align: left;
    display: inline-block;
    width: 20%;
  }
  .infoRight{
    text-align: center;
    display: inline-block;
    width: 70%;
  }
</style>
