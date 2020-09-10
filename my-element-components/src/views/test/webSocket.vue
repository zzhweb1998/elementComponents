<template>
  <!-- 基于webSocket聊天窗 -->
  <div id="web-socket">
    <div class="chat-box">
      <div class="chat-title">聊天窗口</div>
      <div class="chat-content">
        <ul>
          <li v-for="(item,index) in listData" :key="index">
            <div class="cc-left" v-if="item.status === 1">
              <p class="cc-title">{{item.name}} ---- {{item.time}}</p>
              <p class="cc-contnet">{{item.content}}</p>
            </div>
            <div class="cc-right" v-else>
              <p class="cc-title">{{item.name}} ---- {{item.time}}</p>
              <p class="cc-contnet">{{item.content}}</p>
            </div>
            <div style="clear:both"></div>
          </li>
        </ul>
      </div>
      <div class="chat-operation">
        <el-input type="textarea" :rows="3" placeholder v-model="textarea"></el-input>
        <el-button type="primary" plain @click="websocketsend">发送</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
      websock: "",
      listData: [
        {
          id: 1,
          status: 1,
          name: "xxx",
          time: "2020-09-10 15:35:59",
          content: "在吗",
        },
        {
          id: 2,
          status: 0,
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
      console.log('websocket连接成功');
    },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //数据接收
      console.log(e.data);
    },
    websocketsend(Data) {
      //数据发送
      let data = {
          id: 1,
          status: 1,
          name: "xxx",
          content:this.textarea,
          time: this.initDate()
      }
      this.websock.send(JSON.stringify(data));
    },
    websocketclose(e) {
      //关闭
      console.log("断开连接", e);
    },
    initDate(){
        let date = new Date()
        return date.getYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
    }
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