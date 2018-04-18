<template>
  <div>
    <!--<div class="el-carousel__summary">-->
      <!--<p>fawf</p>-->
    <!--</div>-->
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="el-carousel__summary">
          <p>《【毕设】基于vue.js的广科IT技术交流社区》</p>
        </div>
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
<style lang="scss">
  /*.el-carousel__container{*/
    /*height: 350px;*/
  /*}*/
  @media screen and (max-width: 992px){
    /*.el-carousel__container{*/
      /*height: 200px;*/
    /*}*/
    .el-carousel{
      height: 200px;
    }
    .el-carousel__item{
      height: 200px;
    }
    .el-carousel__summary p {
      margin: 5px;
      font-size: 16px;
    }
  }
  $carousel_photo1 : url("../assets/3.jpg") no-repeat center;
  $carousel_photo2 : url("../assets/5.jpg") no-repeat center;

  .el-carousel__item:nth-child(2n) {
    background : $carousel_photo1 {
      size: auto 100%;
    }
    -moz-background-size:100% 100%;
  }

  .el-carousel__item:nth-child(2n-1) {
    background: $carousel_photo2;
    background-size:auto 100%;
    -moz-background-size:100% 100%;
  }

  .el-carousel__summary {
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    opacity: 0.4;
    padding:10px;
  }

  .el-carousel__summary p{
    color: #FFF;
    text-align: center;
  }

  @media \0screen\,screen\9 {/* 只支持IE6、7、8 */
    .el-carousel__summary{
      background-color:#000000;
      filter:Alpha(opacity=50);
      position: static; /* IE6、7、8只能设置position:static(默认属性) ，否则会导致子元素继承Alpha值 */
      *zoom:1; /* 激活IE6、7的haslayout属性，让它读懂Alpha */
    }
    .el-carousel__summary p{
      position: relative;/* 设置子元素为相对定位，可让子元素不继承Alpha值 */
    }
  }

</style>
