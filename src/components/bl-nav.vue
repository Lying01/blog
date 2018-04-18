<template>
  <div class="nav">
    <div class="avatar">
      <router-link to="/home">
      <el-tooltip class="item avatar" effect="dark" content="进入个人中心" placement="right">
        <img src=".././assets/logo.png"/>
      </el-tooltip>
      </router-link>
       <p>Lying</p>
    </div>
    <el-menu id="el-menu" default-active="1-1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">分&#160;&#160;&#160;类</span>
        </template>
        <el-menu-item-group>
          <router-link to="/home"><el-menu-item index="1-1-1">全部话题</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group title="热门">
          <span slot="title">热门</span>
          <router-link to="/home"><el-menu-item index="1-2-1">推荐</el-menu-item></router-link>
          <router-link to="/about"><el-menu-item index="1-2-2">最新文章</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group title="技术分类">
          <span slot="title">技术分类</span>
          <router-link to="/about"><el-menu-item index="1-3-1">前端</el-menu-item></router-link>
          <router-link to="/about"><el-menu-item index="1-3-2">数据库</el-menu-item></router-link>
          <router-link to="/about"><el-menu-item index="1-3-3">计算机基础</el-menu-item></router-link>
          <router-link to="/about"><el-menu-item index="1-3-4">移动开发</el-menu-item></router-link>
          <router-link to="/about"><el-menu-item index="1-3-5">网络安全</el-menu-item></router-link>
          <router-link to="/about"><el-menu-item index="1-3-6">人工智能</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span slot="title">发&#160;&#160;&#160;布</span>
        </template>
        <el-menu-item-group title="发布话题博客">
          <router-link to="/home"><el-menu-item index="2-1-1">推荐</el-menu-item></router-link>
          <router-link to="/about"><el-menu-item index="2-1-2">最新文章</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">留&#160;&#160;&#160;言</span>
        </template>
        <el-menu-item-group title="发布留言">
          <router-link to="/home"><el-menu-item index="3-1-1">留言板</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
  </el-menu>
    <el-popover
      ref="popover5"
      placement="top"
      width="160"
      v-model="visible2">
      <p>您确定要退出登录吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
        <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
      </div>
    </el-popover>

    <el-button id="outLog" v-popover:popover5>退出登录</el-button>
  </div>
</template>


<style lang="scss">
  $AvatarSize: 45px;
  $AvatarMargin: 50px;
  $BgColor : linear-gradient(#99CCCC, #99CCFF);

  .nav {
    width: 100%;
    overflow-x: hidden;
    overflow-y : auto;
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
  a{
    text-transform:none;
    text-decoration:none;
  }

  .el-menu-item,.el-submenu__title {
    &:hover {
      background-color: #f0f2f5;
    }
  }

    .el-menu-item.is-active{
      color: #333366;
    }

    #outLog{
      margin-top: 20px;
      background-color: #333333;
      color: #fff;
    }

    .el-button:focus, .el-button:hover {
      color: #000;
      border-color: #f0f0f0;
      background-color: #fff;
    }

    .el-button--primary {
      color: #fff;
      background-color: #000;
      border-color: #000;
    }

    .el-button--text{
      color: #000;
    }

    .el-menu-item.is-active{
      background-color: #666666;
      color: #fff;
    }
</style>

<script>
  export default {
    data () {
      return {
        isCollapse: false,
        screenW: document.body.clientWidth,
        visible2: false
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
          document.getElementById('outLog').style.display = 'inline-block'
        } else if (that.screenW <= 768) {
          that.isCollapse = true
          document.getElementById('outLog').style.display = 'none'
        }
      }
    }
  }
</script>
