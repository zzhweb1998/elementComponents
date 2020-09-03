<template>
  <!-- 递归表单组件载体 -->
  <div id="recursionContainer">
    <!-- 递归表单组件 -->
    <recursion-form></recursion-form>
  </div>
</template>

<script>
import recursionForm from "./recursionContainer/recursionForm";

export default {
  name: "recursionContainer",
  components: {
    recursionForm,
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