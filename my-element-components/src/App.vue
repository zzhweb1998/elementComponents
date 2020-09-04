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
import container from './views/container.vue'
export default {
  name: "app",
  components: {
    container
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
