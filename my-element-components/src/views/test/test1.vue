<template>
  <div id="test1">
    <el-button @click="search">查询</el-button>
    <el-button @click="create">创建</el-button>
    <el-button @click="update">修改</el-button>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    search() {
      this.axios.get("/api/v1/article/1").then((res) => {
        console.log(res);
      });
    },
    create() {
      this.axios
        .post("/api/v1/article", {
          data: {
            title: "学习koa2写接口1",
            author: "周志航",
            content: "Hello Koa2!",
            category: "nodejs",
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
    update() {
      this.axios
        .post("/api/v1/update", {
          data: {
            id: 1,
            data: {
              title: "学习koa2写接口1-update",
              author: "周志航",
              content: "Hello Koa2!",
              category: "nodejs",
            },
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>