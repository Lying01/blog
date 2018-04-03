<template>
  <div class="nav">
    <div class="avatar">
      <img src=".././assets/logo.png"/>
       <p>Lying</p>
    </div>
    <el-menu id="el-menu" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
  </el-menu>
  </div>
</template>


<style lang="scss">
  $AvatarSize: 45px;
  $AvatarMargin: 50px;

  .nav {
    width: 100%;
  }

  .avatar {
    img {
    width: $AvatarSize;
    height: $AvatarSize;
    margin-top: $AvatarMargin;
    }
    p {
      width: 100%;
      font-size: 18px;
      margin-bottom:30px;
    }
  }

  #el-menu{
    margin-top: 20px;
    &>*{
      width: 100%;
    }
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }

  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background-color: #26292C;
    border-color: #6f7180;
    -webkit-box-shadow: -1px 0 0 0 #6f7180;
    box-shadow: -1px 0 0 0 #6f7180;
  }

  .el-radio-button__inner {
    font-size: 0px;
    padding: 10px 12px;
  }

  .el-menu-item.is-active{
    color: #000;
  }

  /*pad: w >= 768  && w< 992*/
  @media screen and (max-width: 992px) and (min-width: 768px) {
    .el-container{
      width:100%;
      background-color: blue;
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        isCollapse: false,
        screenW: document.body.clientWidth
//        isMenuPopup: false
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    mounted () {
      const that = this
      // reisze 事件在 vue mounted 的时候 挂载它的方法
      window.onresize = () => {
        return (() => {
          window.screenW = document.body.clientWidth
          that.screenW = window.screenW
        })()
      }
    },
    watch: {
//      监听属性screenW的变化
      screenW (val) {
        const that = this
        this.screenW = val
        console.log('屏幕总宽2:' + this.screenW)
        console.log('是否为折叠弹出式菜单:' + this.isCollapse)
        this.isCollapse = true
        console.log('是否为折叠弹出式菜单:' + this.isCollapse)

//        根据屏幕大小设置是否展示折叠弹出式菜单
//         @media screen and (max-width: 992px) and (min-width: 768px)
        if (that.screenW > 768) {
          that.isCollapse = false
        } else if (that.screenW <= 768) {
          that.isCollapse = true
        }
      }
    }
  }
</script>
