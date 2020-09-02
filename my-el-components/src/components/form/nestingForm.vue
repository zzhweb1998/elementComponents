<template>
  <!-- 自定义嵌套组件载体 -->
  <div id="customForm">
    <!-- 自定义组件 -->
    <custom-children></custom-children>
  </div>
</template>

<script>
import customChildren from "./customForm/customChildren";

export default {
  name: "customForm",
  components: {
    customChildren,
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