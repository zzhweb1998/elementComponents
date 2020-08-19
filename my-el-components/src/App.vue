<template>
  <div id="app">
    <el-container>
      <el-header>
        <span>My-Element-Components</span>
      </el-header>
      <container></container>
    </el-container>
  </div>
</template>

<script>
import container from './components/container.vue'

export default {
  name: "App",
  components: {
    container
  },
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
}
.el-container {
  height: 100%;
  .el-header {
    font-size: 22px;
    line-height: 50px;
    font-weight: 600;
    color: #1989fa;
    border-bottom:1px solid #ccc;
  }
}
</style>
