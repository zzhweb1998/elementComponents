<template>
  <div id="test1">
    <el-button @click="search">查询</el-button>
    <el-button @click="create">创建</el-button>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    search() {
      this.axios.get("/api/v1/article/2").then((res) => {
        console.log(res);
      });
    },
    create() {
      this.axios
        .post("/api/v1/article", {
          data: {
            title: "学习koa2写接口4",
            author: "周志航",
            content: "Hello Koa2!",
            category: "nodejs",
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>