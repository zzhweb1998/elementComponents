<template>
  <!-- 验证码组件载体 -->
  <div id="verificationCode">
    <p style="margin-bottom:30px">验证码</p>
    <verification-code @sendData="getCode"></verification-code>
  </div>
</template>

<script>
import verificationCode from "../../components/form/verificationContainer/verificationCode";

export default {
  components: {
    verificationCode,
  },
  data() {
    return {
      vCode: "",
    };
  },
  methods: {
    //在方法中获取验证码的数据
    //从子组件获取验证码，并将验证码返回到页面
    getCode(data) {
      console.log(data);
      this.vCode = data; //在data中定义一个 validCode:'',用来记录验证码。
    },
  },
};
</script>

<style lang="less" scoped>
#verificationCode {
  width: 500px;
}
</style>