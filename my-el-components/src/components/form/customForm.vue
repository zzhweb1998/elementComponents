<template>
  <!-- 自定义组件载体 -->
  <div id="customForm">
    <!-- 自定义组件 -->
    <custom-children :customData="formData" :ruleCustom="ruleForm" :rules="rules"></custom-children>
  </div>
</template>

<script>
import customChildren from "./customForm/customChildren";

export default {
  name: "customForm",
  components: {
    customChildren,
  },
  data() {
    return {
      data: "",
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
    };
  },
  created() {},
};
</script>

<style lang="less" scoped>
</style>