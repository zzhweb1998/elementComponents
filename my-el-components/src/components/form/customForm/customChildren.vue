<template>
  <!-- 自定义组件 -->
  <div id="customChildren">
    <p>{{formData.formTitle}}</p>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        :label="itm.label"
        :prop="itm.prop"
        v-for="(itm,index) in formData.formArr"
        :key="index"
      >
      <!-- input输入框 -->
        <el-input v-model="ruleForm[itm.value]" v-if="itm.type=='input'"></el-input>
        <!-- select选择框 -->
        <el-select
          v-model="ruleForm[itm.value]"
          :placeholder="itm.placeholder"
          v-if="itm.type=='select'"
        >
          <el-option :label="itm2.label" :value="itm2.value" v-for="(itm2,index2) in itm.children" :key="index2"></el-option>
        </el-select>
        <!-- datetime日期时间 -->
        <el-date-picker
          v-model="ruleForm[itm.value]"
          type="datetime"
          :placeholder="itm.placeholder"
          v-if="itm.type=='datetime'"
        ></el-date-picker>
        <!-- switch滑块 -->
        <el-switch v-model="ruleForm[itm.value]" v-if="itm.type=='switch'"></el-switch>
        <!-- checkbox多选框 -->
        <el-checkbox-group v-model="ruleForm[itm.value]" v-if="itm.type=='checkbox'">
          <el-checkbox :label="itm2.label" :name="itm2.value" v-for="(itm2,index2) in itm.children" :key="index2"></el-checkbox>
        </el-checkbox-group>
        <!-- radio单选框 -->
        <el-radio-group v-model="ruleForm[itm.value]" v-if="itm.type=='radio'">
          <el-radio :label="itm2.label" v-for="(itm2,index2) in itm.children" :key="index2"></el-radio>
        </el-radio-group>
        <!-- textarea多文本框 -->
        <el-input type="textarea" v-model="ruleForm[itm.value]" v-if="itm.type=='textarea'"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date: [
          {
            type: "datetime",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      formData: {
        formTitle: "表单标题",
        formArr: [
          {
            type: "input",
            value: "name",
            label: "活动名称",
            prop: "name",
            placeholder: "",
            children: [],
          },
          {
            type: "select",
            value: "region",
            label: "活动区域",
            prop: "region",
            placeholder: "请选择活动区域",
            children: [
              {
                label: "区域一",
                value: "shanghai",
              },
              {
                label: "区域二",
                value: "beijing",
              },
            ],
          },
          {
            type: "datetime",
            value: "date",
            label: "活动时间",
            prop: "date",
            placeholder: "选择日期时间",
            children: [],
          },
          {
            type: "switch",
            value: "delivery",
            label: "即时配送",
            prop: "delivery",
            placeholder: "",
            children: [],
          },
          {
            type: "checkbox",
            value: "type",
            label: "活动性质",
            prop: "type",
            placeholder: "",
            children: [
              {
                label: "美食/餐厅线上活动",
                value: "type",
              },
              {
                label: "地推活动",
                value: "type",
              },
              {
                label: "线下主题活动",
                value: "type",
              },
              {
                label: "单纯品牌曝光",
                value: "type",
              },
            ],
          },
          {
            type: "radio",
            value: "resource",
            label: "特殊资源",
            prop: "resource",
            placeholder: "",
            children: [
              {
                label: "线上品牌商赞助",
                value: "线上品牌商赞助",
              },
              {
                label: "线下场地免费",
                value: "线下场地免费",
              },
            ],
          },
          {
            type: "textarea",
            value: "desc",
            label: "活动形式",
            prop: "desc",
            placeholder: "",
            children: [],
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>


<style lang="less" scoped>
#customChildren {
  width: 500px;
  .el-form {
    .el-form-item {
      .el-select {
        width: 100%;
      }
      /deep/ .el-date-editor--datetime {
        width: 100%;
      }
      .el-checkbox-group {
        .el-checkbox {
          width: auto;
        }
      }
      .el-radio-group {
        .el-radio {
          width: auto;
        }
      }
    }
  }
}
</style>