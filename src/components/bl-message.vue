<template>
  <div id="message">
    <el-row>
      <el-col :span="4" :offset="1">
        <el-card :body-style="{ padding: '0px' }" style="margin-bottom: 30px">
          <img src="../../static/add.jpg" class="image" style="height: 210px">
          <div style="padding: 14px;">
            <span style="font-size:16px;padding-left: 50px">点击此处<br/></span>
            <span style="padding-left: 40px">添加建议</span>
            <div class="bottom clearfix">
              <time class="time">{{currentDate}}</time>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" v-for="(o) in 10" :key="o" :offset="1">
        <el-card :body-style="{ padding: '0px' }" style="margin-bottom: 30px">
          <img src="../../static/logo.png" class="image">
          <div style="padding: 14px;">
            <span style="font-size: 16px">我个人建议贵社区添加XXX功能，这样能方便....</span>
            <div class="bottom clearfix">
              <time class="time">2018-4-2</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  #message{
    padding: 20px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

<script>
  export default {
    data () {
      return {
        currentDate: new Date()
      }
    }
  }
</script>
