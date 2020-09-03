<template>
  <!-- 动态表单组件 -->
  <div id="dynamicForm" :style="'width:'+formData.width+'px'">
    <p>{{formData.title}}</p>
    <el-form
      :model="formData"
      ref="ruleForm"
      :label-width="formData.labelWid"
      class="demo-ruleForm"
    >
      <div class="formBox" v-for="(itm,index) in formData.formList" :key="index">
        <!-- input输入框 -->
        <el-form-item
          :label="itm.label"
          :prop="'formList.'+index+'.value'"
          :key="index"
          v-if="itm.type=='input'"
          :rules="itm.rules"
        >
          <el-input v-model="itm.value" :placeholder="itm.placeholder" :disabled="itm.disabled"></el-input>
        </el-form-item>

        <!-- password密码输入框 -->
        <el-form-item
          :label="itm.label"
          :prop="'formList.'+index+'.value'"
          :key="index"
          v-if="itm.type=='password'"
          :rules="itm.rules"
        >
          <el-input
            v-model="itm.value"
            :placeholder="itm.placeholder"
            :disabled="itm.disabled"
            show-password
          ></el-input>
        </el-form-item>

        <!-- number数值输入框 -->
        <el-form-item
          :label="itm.label"
          :prop="'formList.'+index+'.value'"
          :key="index"
          v-if="itm.type=='number'"
          :rules="itm.rules"
        >
          <el-input
            type="number"
            v-model="itm.value"
            :placeholder="itm.placeholder"
            :disabled="itm.disabled"
          ></el-input>
        </el-form-item>

        <!-- select选择框 -->
        <el-form-item
          :label="itm.label"
          :prop="'formList.'+index+'.value'"
          :key="index"
          v-if="itm.type=='select'"
          :rules="itm.rules"
        >
          <el-select v-model="itm.value" :placeholder="itm.placeholder" :disabled="itm.disabled">
            <el-option
              :label="itm2.label"
              :value="itm2.value"
              v-for="(itm2,index2) in itm.children"
              :key="index2"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- datetime日期时间 -->
        <el-form-item
          :label="itm.label"
          :prop="'formList.'+index+'.value'"
          :key="index"
          v-if="itm.type=='datetime'"
          :rules="itm.rules"
        >
          <el-date-picker
            v-model="itm.value"
            type="datetime"
            :placeholder="itm.placeholder"
            :disabled="itm.disabled"
          ></el-date-picker>
        </el-form-item>

        <!-- checkbox多选框 -->
        <el-form-item
          :label="itm.label"
          :prop="'formList.'+index+'.value'"
          :key="index"
          v-if="itm.type=='checkbox'"
          :rules="itm.rules"
        >
          <el-checkbox-group v-model="itm.value" :disabled="itm.disabled">
            <el-checkbox
              v-for="(itm2,index2) in itm.children"
              :key="index2"
              :label="itm2.label"
              :name="itm2.value"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <!-- radio单选框 -->
        <el-form-item
          :label="itm.label"
          :prop="'formList.'+index+'.value'"
          :key="index"
          v-if="itm.type=='radio'"
          :rules="itm.rules"
        >
          <el-radio-group v-model="itm.value" :disabled="itm.disabled">
            <el-radio :label="itm2.label" v-for="(itm2,index2) in itm.children" :key="index2"></el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- textarea多文本框 -->
        <el-form-item
          :label="itm.label"
          :prop="'formList.'+index+'.value'"
          :key="index"
          v-if="itm.type=='textarea'"
          :rules="itm.rules"
        >
          <el-input
            type="textarea"
            v-model="itm.value"
            :placeholder="itm.placeholder"
            :disabled="itm.disabled"
          ></el-input>
        </el-form-item>
      </div>

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
    dynamicData: {
      type: Object,
    },
  },
  data() {
    return {
      formData: {},
    };
  },
  created() {
    self = this;
    self.formData = JSON.parse(JSON.stringify(self.dynamicData));
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(self.formData);
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
#dynamicForm {
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
      //去掉type=number的上下箭头
      /deep/ input::-webkit-outer-spin-button,
      /deep/ input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      /deep/ input[type="number"] {
        -moz-appearance: textfield;
      }
    }
  }
}
</style>