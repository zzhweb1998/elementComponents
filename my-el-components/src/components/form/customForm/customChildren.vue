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
          <el-option
            :label="itm2.label"
            :value="itm2.value"
            v-for="(itm2,index2) in itm.children"
            :key="index2"
          ></el-option>
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
          <el-checkbox
            :label="itm2.label"
            :name="itm2.value"
            v-for="(itm2,index2) in itm.children"
            :key="index2"
          ></el-checkbox>
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
let self;
export default {
  props: {
    customData: {
      type: Object,
    },
    ruleCustom: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  data() {
    return {
      ruleForm: {},
      formData: {},
    };
  },
  created(){
    self = this;
    self.ruleForm = JSON.parse(JSON.stringify(self.ruleCustom))
    self.formData = JSON.parse(JSON.stringify(self.customData))
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(self.ruleForm);
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