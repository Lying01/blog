<template>
  <el-container>
    <el-header style="height: auto"><bl-header></bl-header></el-header>
    <el-container>
      <el-aside width="200px">
        <img src="./assets/logo.png" width="150px"/>
        <p>Lying</p>
        <el-menu>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <bl-carousel></bl-carousel>
        <el-table :data="tableData">
          <el-table-column prop="date">
          </el-table-column>
          <el-table-column prop="name">
          </el-table-column>
          <el-table-column prop="address">
          </el-table-column>
        </el-table>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import blHeader from './components/bl-header.vue'
import blCarousel from './components/bl-carousel.vue'
export default {
  name: 'App',
  data () {
    return {
      tableData: Array(20).fill({
        date: '2018-02-02',
        name: '陈猪头',
        address: '广东省珠海市香洲区吉大新村'
      }),
      msg: 'hello'
    }
  },
  computed: {
  },
  methods: {
      click () {
//          item = as ;
      }
  },
  components: {
    blHeader,
    blCarousel
  }
}
</script>

<style lang="scss">
  .el-header, .el-footer {
    font-size: 3em;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-aside {
    color: #333;
    text-align: center;
    /*line-height: 200px;*/
  }

  .el-main {
    background-color: #6699CC;
    color: #CCFFFF;
    text-align: center;
    height: 100%;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }


</style>
