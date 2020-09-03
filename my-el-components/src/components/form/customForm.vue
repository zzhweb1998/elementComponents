<template>
  <!-- 自定义表单组件载体 -->
  <div id="customForm">
    <!-- 自定义表单组件 -->
    <custom-children :customData="formData"></custom-children>
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
      formData: {
        title: "自定义表单",  //表单标题
        width:400,  //表单宽度
        labelWid: "120px",  //label宽度  
        formList: [
          // 输入框（type为password（密码输入框）、number（数值输入框））
          {
            type: "number", //表单类型
            label: "活动名称", //label名称
            value: "", //绑定值 （多选value值为数组类型）
            placeholder: "", //默认提示文本
            children: [], //子选项（如：单选、多选和下拉框的选项）
            disabled: false, //是否禁止编辑
            rules: [
              { required: true, message: "请输入活动名称", trigger: "blur" },
              {
                min: 3,
                max: 5,
                message: "长度在 3 到 5 个字符",
                trigger: "blur",
              },
            ], //表单校验方式（required: true：是否必填）
          },
          //下拉选择框
          {
            type: "select", //表单类型
            label: "活动区域", //label名称
            value: "", //绑定值 （多选value值为数组类型）
            placeholder: "请选择活动区域", //默认提示文本
            children: [
              {
                label: "区域一",
                value: "shanghai",
              },
              {
                label: "区域二",
                value: "beijing",
              },
            ], //子选项（如：单选、多选和下拉框的选项）
            disabled: false, //是否禁止编辑
            rules: [
              { required: true, message: "请选择活动区域", trigger: "change" },
            ], //表单校验方式（required: true：是否必填）
          },
          //日期时间
          {
            type: "datetime", //表单类型
            label: "活动时间", //label名称
            value: "", //绑定值 （多选value值为数组类型）
            placeholder: "选择日期时间", //默认提示文本
            children: [], //子选项（如：单选、多选和下拉框的选项）
            disabled: false, //是否禁止编辑
            rules: [
              {
                required: true,
                message: "请选择日期",
                trigger: "change",
              },
            ], //表单校验方式（required: true：是否必填）
          },
          //多选框
          {
            type: "checkbox", //表单类型
            label: "活动性质", //label名称
            value: [], //绑定值 （多选value值为数组类型）
            placeholder: "", //默认提示文本
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
            ], //子选项（如：单选、多选和下拉框的选项）
            disabled: false, //是否禁止编辑
            rules: [
              {
                type: "array",
                required: true,
                message: "请至少选择一个活动性质",
                trigger: "change",
              },
            ], //表单校验方式（required: true：是否必填）
          },
          //单选框
          {
            type: "radio", //表单类型
            label: "特殊资源", //label名称
            value: "", //绑定值 （多选value值为数组类型）
            placeholder: "", //默认提示文本
            children: [
              {
                label: "线上品牌商赞助",
                value: "线上品牌商赞助",
              },
              {
                label: "线下场地免费",
                value: "线下场地免费",
              },
            ], //子选项（如：单选、多选和下拉框的选项）
            disabled: false, //是否禁止编辑
            rules: [
              { required: true, message: "请选择活动资源", trigger: "change" },
            ], //表单校验方式（required: true：是否必填）
          },
          //多文本框
          {
            type: "textarea", //表单类型
            label: "活动形式", //label名称
            value: "", //绑定值 （多选value值为数组类型）
            placeholder: "", //默认提示文本
            children: [], //子选项（如：单选、多选和下拉框的选项）
            disabled: false, //是否禁止编辑
            rules: [{ required: true, message: "请填写活动形式", trigger: "blur" }], //表单校验方式（required: true：是否必填）
          },
        ],
      }, // 表单配置清单
    };
  },
  created() {
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>