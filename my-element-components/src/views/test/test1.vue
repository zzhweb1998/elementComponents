<template>
  <div id="test1">
    <el-button @click="search">查询</el-button>
    <el-button @click="listAll">所有</el-button>
    <el-button @click="create">创建</el-button>
    <el-button @click="update">修改</el-button>
    <el-button @click="del">删除</el-button>
    <el-button @click="pagQuery">分页查询</el-button>
    <el-button @click="fuzzyQuery">模糊查询</el-button>
    <el-button @click="orderData">排序</el-button>
    <el-button @click="assignQuery">指定查询</el-button>
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
            title: "学习koa2写接口3",
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
              title: "学习koa2写接口1-update2",
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

    listAll() {
      this.axios.get("/api/v1/listAll").then((res) => {
        console.log(res);
      });
    },

    del() {
      this.axios.get("/api/v1/delete/" + 3).then((res) => {
        console.log(res);
      });
    },

    pagQuery() {
      this.axios
        .post("/api/v1/pagQuery", {
          limit: 2,
          page: 1,
        })
        .then((res) => {
          console.log(res);
        });
    },

    fuzzyQuery() {
      this.axios
        .post("/api/v1/fuzzyQuery", {
          data: {
            title: "接口",
          },
          limit: 2,
          page: 1,
        })
        .then((res) => {
          console.log(res);
        });
    },

    orderData() {
      this.axios
        .post("/api/v1/orderData", {
          order: 0,
        })
        .then((res) => {
          console.log(res);
        });
    },

    assignQuery(){
      this.axios
        .get("/api/v1/assignQuery")
        .then((res) => {
          console.log(res);
        });
    }

    
  },
};
</script>