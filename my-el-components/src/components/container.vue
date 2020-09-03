<template>
  <el-container>
    <el-aside>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
        active-text-color="#409EFF"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>表单组件</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/customForm">自定义表单</el-menu-item>
            <el-menu-item index="/recursionForm">递归表单</el-menu-item>
            <el-menu-item index="/enterForm">回车跳转表单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航二</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航三</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项1</el-menu-item>
            </el-submenu>
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
  data(){
    return{
      
    }
  },
  methods:{
    handleOpen(){

    },
    handleClose(){

    },
  }
}
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