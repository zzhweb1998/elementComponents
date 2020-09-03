<template>
  <!-- 递归表单组件载体 -->
  <div id="recursionForm">
    <!-- 递归表单组件 -->
    <recursion-children></recursion-children>
  </div>
</template>

<script>
import recursionChildren from "./recursionForm/recursionChildren";

export default {
  name: "recursionForm",
  components: {
    recursionChildren,
  },
  data() {
    return {
      data: "",
    };
  },
  created(){},
};
</script>

<style lang="less" scoped>

</style>