<template>
  <!-- 常用表格组件载体 -->
  <div id="commonlyContainer">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="常用表格1" name="first">
        <div class="cc-box">
          <!-- 常用表格1 -->
          <commonly-table1></commonly-table1>
        </div>
      </el-tab-pane>
      <el-tab-pane label="常用表格2" name="second">
        <div class="cc-box">
          <!-- 常用表格2 -->
        </div>
      </el-tab-pane>
      <el-tab-pane label="常用表格2" name="third">
        <div class="cc-box">
          <!-- 常用表格3 -->
        </div>
      </el-tab-pane>
      <el-tab-pane label="常用表格3" name="fourth">
        <div class="cc-box">
          <!-- 常用表格4 -->
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import commonlyTable1 from "../../components/table/commonlyTable1";
export default {
  components: {
    commonlyTable1,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
#commonlyContainer {
  height: 100%;
}
</style>