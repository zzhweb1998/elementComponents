<template>
  <!-- 登陆页面 -->
  <div id="loginComponent">
    <div class="lc-box">
      <div class="lc-content">
        <p>用户登陆</p>
        <el-form
          :model="loginInfo"
          status-icon
          :rules="loginRules"
          ref="loginInfo"
          label-width="60px"
          hide-required-asterisk
        >
          <el-form-item label="账号" prop="account">
            <el-input v-model="loginInfo.account" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="loginInfo.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="verification">
            <el-input
              v-model.number="loginInfo.verification"
              style="width: 60%"
            ></el-input>
            <verification-code @sendData="getCode"></verification-code>
          </el-form-item>
          <el-form-item label-width="200px">
            <el-button type="primary" @click="login('loginInfo')"
              >登陆</el-button
            >
            <el-button @click="dialogVisible = true">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-dialog
      title="用户注册"
      :visible.sync="dialogVisible"
      width="400px"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <el-form
        :model="registerInfo"
        status-icon
        :rules="registerRules"
        ref="registerInfo"
        label-width="60px"
        hide-required-asterisk
      >
        <el-form-item label="账号" prop="account">
          <el-input
            v-model="registerInfo.account"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="registerInfo.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="mail">
          <el-input v-model="registerInfo.mail"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">返回</el-button>
        <el-button type="primary" @click="register('registerInfo')"
          >注册</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>


<script>
import verificationCode from "../components/form/verificationContainer/verificationCode";
export default {
  components: {
    verificationCode, //验证码组件
  },
  data() {
    return {
      vCode: "", //验证码
      dialogVisible: false, //注册窗口是否显示
      loginInfo: {
        account: "", //账号
        password: "", //密码
        verification: "", //验证码
      }, //登陆信息
      registerInfo: {
        account: "", //账号
        password: "", //密码
        mail: "",
      }, //注册信息
      loginRules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 3,
            max: 11,
            message: "长度在 3 到 11 位的账号",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 11,
            message: "长度在 3 到 11 位的密码",
            trigger: "blur",
          },
        ],
        verification: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (value.toUpperCase() != this.vCode.toUpperCase()) {
                callback(new Error("验证码错误"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      }, //登陆路由验证
      registerRules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 3,
            max: 11,
            message: "长度在 3 到 11 位的账号",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 11,
            message: "长度在 3 到 11 位的密码",
            trigger: "blur",
          },
        ],
        mail: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
              if (!reg.test(value)) {
                callback(new Error("请输入正确的邮箱"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      }, //注册路由验证
    };
  },
  methods: {
    //在方法中获取验证码的数据
    //从子组件获取验证码，并将验证码返回到页面
    getCode(data) {
      this.vCode = data; //在data中定义一个 validCode:'',用来记录验证码。
    },
    //注册窗口关闭
    handleClose(done) {
      this.dialogVisible = false;
      this.registerInfo = {
        account: "",
        password: "",
        mail: "",
      };
    },
    //登陆
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.loginInfo);
          this.axios.post('/api/v1/user/login',{
            data:this.loginInfo
          }).then(res=>{
            console.log(res);
          })
        } else {
          return false;
        }
      });
    },
    //注册
    register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.registerInfo);
          this.axios.post('/api/v1/user/register',{
            data:this.registerInfo
          }).then(res=>{
            console.log(res);
          })
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
#loginComponent {
  width: 100%;
  height: 100%;
  background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601383367859&di=7a4442d529ec11a9f1e79f8f3e67d797&imgtype=0&src=http%3A%2F%2Fpic.vjshi.com%2F2018-09-17%2F20a9b2b7cf42a5c13453ba3692ca1c0c%2F00001.jpg%3Fx-oss-process%3Dstyle%2Fwatermark') no-repeat;
  background-size:cover;
}
.lc-box {
  position: relative;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 320px;
  color: #fff;
  border: 1px solid #999;
  border-radius: 20px;
  box-shadow: 0 0 10px #999;
  background: rgba(0,0,0,0.6);
  .lc-content {
    padding: 0 20px;
    p {
      font-size: 20px;
      padding: 20px;
    }
  }
  .el-form{
    /deep/ .el-form-item__label{
      color: #fff;
    }
  }
}
</style>