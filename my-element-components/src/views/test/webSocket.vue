<template>
  <!-- 基于webSocket聊天窗 -->
  <div id="web-socket">
    <div sel_box>
      <el-button @click="selUser(1,'1号')" :disabled="chatData.sender_id===1">1号</el-button>
      <el-button @click="selUser(2,'2号')" :disabled="chatData.sender_id===2">2号</el-button>
      <el-button @click="selUser(3,'3号')" :disabled="chatData.sender_id===3">3号</el-button>
    </div>
    <div class="chat-box" v-if="chatData.sender_id&&chatData.receive_id">
      <div class="chat-title">和{{chatData.receive_name}}的聊天窗口</div>
      <div class="chat-content">
        <ul>
          <li v-for="(item,index) in listData" :key="index">
            <div class="cc-right" v-if="item.sender_id === chatData.sender_id">
              <p class="cc-title">{{item.sender_name}} ---- {{item.time}}</p>
              <p class="cc-contnet">{{item.content}}</p>
            </div>
            <div class="cc-left" v-else>
              <p class="cc-title">{{item.sender_name}} ---- {{item.time}}</p>
              <p class="cc-contnet">{{item.content}}</p>
            </div>
            <div style="clear:both"></div>
          </li>
        </ul>
      </div>
      <div class="chat-operation">
        <el-input
          type="textarea"
          :rows="3"
          placeholder
          v-model="chatData.textarea"
          @keydown.enter.native="websocketsend"
        ></el-input>
        <el-button type="primary" plain @click="websocketsend">发送</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      websock: "",
      chatData: {
        sender_id: 1,
        sender_name: "1号",
        receive_id: null,
        receive_name: "",
        textarea: "",
      },
      listData: [
        {
          sender_id: 2,
          sender_name: "xxx",
          receive_id: 1,
          receive_name: "yyy",
          time: "2020-09-10 15:35:59",
          content: "在吗",
        },
        {
          sender_id: 1,
          receive_id: 2,
          name: "yyy",
          time: "2020-09-10 15:36:09",
          content: "在啊",
        },
      ],
    };
  },
  created() {
    this.initWebSocket();
  },
  methods: {
    initWebSocket() {
      //初始化weosocket
      const wsuri = "ws://localhost:3000";
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      console.log("websocket连接成功");
    },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //数据接收
      console.log(JSON.parse(e.data));
      this.listData.push(JSON.parse(e.data));
    },
    websocketsend(Data) {
      //数据发送
      let data = {
        sender_id: this.chatData.sender_id,
        receive_id: this.chatData.receive_id,
        sender_name: this.chatData.sender_name,
        receive_name: this.chatData.receive_name,
        time: this.initDate(),
        content: this.chatData.textarea,
      };
      this.websock.send(JSON.stringify(data));
      this.chatData.textarea = "";
    },
    websocketclose(e) {
      //关闭
      console.log("断开连接", e);
    },
    //初始化时间格式
    initDate() {
      let date = new Date();
      return (
        date.getYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds()
      );
    },
    // 选择聊天用户
    selUser(index, name) {
      this.listData = [];
      this.chatData.receive_id = index;
      this.chatData.receive_name = name;
    },
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
  },
};
</script>

<style lang="less" scoped>
#web-socket {
  width: 100%;
  height: 100%;
  li {
    list-style: none;
    width: 100%;
  }
  .chat-box {
    width: 500px;
    height: 600px;
    margin: 50px auto;
    border: 1px solid #999;
    background: #fefefe;
    .chat-title {
      height: 50px;
      line-height: 50px;
      text-indent: 10px;
      font-size: 18px;
      border-bottom: 1px solid #ccc;
    }
    .chat-content {
      margin: 25px;
      height: 350px;
      border: 1px solid #ccc;
      background: #fff;
      overflow: hidden;
      ul {
        height: 100%;
        li {
          height: auto;
        }
      }
      .cc-left {
        float: left;
        margin: 10px;
        padding: 5px 10px;
        border: 1px solid #ccc;
      }
      .cc-right {
        float: right;
        margin: 10px;
        padding: 5px 10px;
        background: #b3d8ff;
      }
      .cc-title {
        font-size: 14px;
        color: #999;
      }
      .cc-contnet {
        font-size: 18px;
        color: #333;
        text-indent: 10px;
      }
    }
    .chat-operation {
      border-top: 1px solid #ccc;
      .el-textarea {
        /deep/ .el-textarea__inner:focus {
          border: 1px solid #dcdfe6;
        }
      }
      .el-button {
        float: right;
        margin-right: 5px;
        margin-top: 5px;
      }
    }
  }
}
</style>