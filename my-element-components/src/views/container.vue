<template>
  <el-container>
    <el-aside>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
        active-text-color="#409EFF"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>Form组件</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/form/dynamicContainer">动态</el-menu-item>
            <el-menu-item index="/form/recursionContainer">递归</el-menu-item>
            <el-menu-item index="/form/enterForm">回车跳转</el-menu-item>
            <el-menu-item index="/form/verificationContainer">验证码</el-menu-item>
            <el-menu-item index="/form/imageContainer">图片</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>Table组件</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/table/customContainer">自定义</el-menu-item>
            <el-menu-item index="/table/CommonlyContainer">常用Table</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>Layout布局</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/layout/waterfallContainer">瀑布流</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>Api接口</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/test/test1">测试</el-menu-item>
            <el-menu-item index="/test/webSocket">聊天</el-menu-item>
            <el-menu-item index="/test/login">登录</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style lang="less" scoped>
.el-container {
  height: calc(100% - 60px);
  .el-aside {
    width: 220px !important;
    margin: 20px 0;
    border-right: 1px solid #ccc;
  }
  .el-main {
    height: 100%;
  }
}
</style>