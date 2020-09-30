<template>
  <!-- 发布商品 -->
  <div id="releaseGoods">
    <el-button type="primary" @click="dialogVisible = true">发布商品</el-button>

    <el-dialog
      title="商品信息编辑"
      :visible.sync="dialogVisible"
      width="450px"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        hide-required-asterisk
        label-width="80px"
      >
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品描述" prop="content">
          <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input type="number" v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="商品类型" prop="category">
          <el-select v-model="form.category" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品图片" prop="imgList">
          <image-upload :imageArr="form.imgList" :showIndex="showIndex" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="release">发布</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import imageUpload from "../imageUpload";
export default {
  components: {
    imageUpload,
  },
  data() {
    return {
      //图片组件传值
      showIndex: 1, //图片显示数量
      dialogVisible: false,
      form: {
        id: 0,
        name: "",
        content: "",
        price: 0,
        category: "",
        imgList: [],
      },
      options: [
        {
          label: "家电",
          value: "家电",
        },
        {
          label: "服饰",
          value: "服饰",
        },
        {
          label: "数码",
          value: "数码",
        },
      ],
      rules: {
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        content: [
          { required: true, message: "请输入商品详情", trigger: "blur" },
        ],
        price: [
          { required: true, message: "请输入商品价格", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (
                !/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(
                  value
                )
              ) {
                callback(new Error("最多两位小数！！！"));
              } else if (value < 0 || value === 0) {
                callback(new Error("请输入大于0的值"));
              } else {
                callback();
              }
            },
          },
        ],
        category: [
          { required: true, message: "请选择商品类型", trigger: "blur" },
        ],
        imgList: [
          { required: true, message: "请上传商品图片", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
      this.$refs['form'].resetFields();
    },
    //发布商品
    release() {
      console.log(this.imageArr);
      this.$refs['form'].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
//去掉type=number的上下箭头
/deep/ input::-webkit-outer-spin-button,
/deep/ input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
/deep/ input[type="number"] {
  -moz-appearance: textfield;
}
</style>