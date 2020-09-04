<template>
  <!-- 分页组件载体 -->
  <div id="pagingContainer">
    <p style="margin-bottom:30px">验证码</p>
    <paging-component></paging-component>
  </div>
</template>

<script>
import pagingComponent from "../../components/table/pagingComponent";
export default {
  components: {
    pagingComponent,
  },
  data() {
    return {};
  },
};
</script>