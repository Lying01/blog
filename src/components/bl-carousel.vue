<template>
  <div class="block">
    <div class="el-carousel__summary">
      <p>fawf</p>
    </div>
    <el-carousel height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default{
    name: 'bl-carousel',
    data () {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  .el-carousel__item:nth-child(2n) {
    background: url("../assets/3.jpg") no-repeat center;
    background-size:auto 100%;
    -moz-background-size:100% 100%;
  }
</style>
