<template>
  <div id="timer">
    <p>{{ date | dateInit }}</p>
    <div>
      <canvas id="myCanvas" width="220" height="220" ref="myCanvas"></canvas>
    </div>
  </div>
</template>

<script>
let self;
let myCanvas;
let pen;
export default {
  data() {
    return {
      date: new Date(),
      timer: null,
    };
  },
  filters: {
    //时间格式过滤器
    dateInit(date) {
      let obj = {
        Y: date.getFullYear(),
        M: date.getMonth() + 1,
        D: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
      };
      for (let key in obj) {
        if (obj[key] < 10) {
          obj[key] = "0" + obj[key];
        }
      }
      return (
        obj.Y +
        "-" +
        obj.M +
        "-" +
        obj.D +
        " " +
        obj.h +
        ":" +
        obj.m +
        ":" +
        obj.s
      );
    },
  },
  mounted() {
    self = this; // 声明一个变量指向Vue实例this，保证作用域一致
    self.timer = setInterval(() => {
      self.date = new Date(); // 修改数据date
    }, 1000);
    self.setCanvas();
  },
  methods: {
    setCanvas() {
      // 1、获取画布节点
      myCanvas = this.$refs.myCanvas;
      // 2、通过画布节点区获取画笔
      pen = myCanvas.getContext("2d");
      pen.translate(110, 110); //把画布的中心点设为画布的0，0点
      self.scale();
      setInterval(() => {
        self.scale();
      }, 1000);
    },
    //整个时钟封装函数
    scale() {
      pen.clearRect(-200, -200, myCanvas.width, myCanvas.height); //每一次都清空一下画布
      //时钟圆的样式
      pen.save();
      pen.strokeStyle = "#eee";
      pen.lineWidth = "3";
      pen.beginPath();
      pen.arc(0, 0, 80, 0, (360 * Math.PI) / 180);
      pen.fillStyle = "#eee";
      pen.fill();
      pen.stroke();
      pen.restore();

      //绘制刻度的样式
      pen.save();
      pen.strokeStyle = "#CdCDdd";
      pen.lineCap = "square";
      pen.beginPath();
      for (let i = 0; i < 60; i++) {
        //一共循环60次，也就是60分钟，画60个刻度
        if (i % 15 == 0) {
          //整点刻度
          pen.moveTo(0, -60);
          pen.lineTo(0, -70);
          pen.lineWidth = "6";
        } else if (i % 5 == 0) {
          pen.moveTo(0, -65);
          pen.lineTo(0, -70);
          pen.lineWidth = "4";
        }
        pen.rotate((6 * Math.PI) / 180); //每次旋转的角度6°=360°/60
      }
      pen.stroke();
      pen.restore();

      //日期对象
      let dt = new Date();
      let hour = dt.getHours(); //获取小时 北京时间
      let minute = dt.getMinutes(); //获取分
      let second = dt.getSeconds(); //获取秒

      //时针
      pen.save();
      //样式
      pen.strokeStyle = "#111";
      pen.lineWidth = `6`;
      pen.lineCap = "round";
      //旋转的弧度 = （当前时间的小时数-12+当前分钟数/60）*6° * Math.PI / 180
      pen.rotate(((hour - 12 + minute / 60) * 30 * Math.PI) / 180);
      pen.beginPath();
      //图形的绘制
      pen.moveTo(0, 0);
      pen.lineTo(0, -40);
      pen.stroke();
      pen.restore();

      //分针
      pen.save();
      //样式
      pen.strokeStyle = "#111";
      pen.lineWidth = `6`;
      pen.lineCap = "round";
      //旋转的弧度 = （当前时间的秒数+当前分钟数/60）*6° * Math.PI / 180
      pen.rotate(((minute + second / 60) * 6 * Math.PI) / 180);
      pen.beginPath();
      //图形的绘制
      pen.moveTo(0, 0);
      pen.lineTo(0, -52);
      pen.stroke();
      pen.restore();

      //秒针
      pen.save();
      //样式
      pen.lineWidth = 3;
      pen.strokeStyle = "#1874CD";
      pen.lineCap = "round";
      pen.rotate((second * 6 * Math.PI) / 180); //旋转的弧度 = 当前时间的秒数*6° * Math.PI / 180
      pen.beginPath();
      //图形的绘制
      pen.moveTo(0, 20);
      pen.lineTo(0, -70);
      pen.stroke();
      pen.restore();

      //指针中心点
      pen.save();
      pen.strokeStyle = "#1874CD";
      pen.beginPath();
      pen.arc(0, 0, 6, 0, 2 * Math.PI);
      pen.fillStyle = "#1874CD";
      pen.fill();
      pen.stroke();
      pen.restore();
    },
  },
  beforeDestroy() {
    if (self.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
};
</script>

<style lang="less" scoped>
</style>