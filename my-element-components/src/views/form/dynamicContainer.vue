<template>
  <!-- 动态表单组件载体 -->
  <div id="dynamicContainer">
    <!-- 动态表单组件 -->
    <dynamic-form :dynamicData="formData"></dynamic-form>
  </div>
</template>

<script>
import dynamicForm from "../../components/form/dynamicContainer/dynamicForm";

export default {
  name: "dynamicContainer",
  components: {
    dynamicForm,
  },
  data() {
    return {
      formData: {
        title: "动态表单", //表单标题
        width: 400, //表单宽度
        labelWid: "120px", //label宽度
        formList: [
          // 输入框
          {
            type: "input", //表单类型
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
          // 输入框（type为password（密码输入框）、number（数值输入框））
          {
            type: "number", //表单类型
            label: "活动数量", //label名称
            value: "", //绑定值 （多选value值为数组类型）
            placeholder: "", //默认提示文本
            children: [], //子选项（如：单选、多选和下拉框的选项）
            disabled: false, //是否禁止编辑
            rules: [
              { required: true, message: "请输入活动数量", trigger: "blur" },
              {
                validator: (rule, value, callback) => {
                  if (!value) {
                    return callback(new Error("输入不可以为空"));
                  }
                  setTimeout(() => {
                    if (!Number(value)) {
                      callback(new Error("请输入大于0的整数"));
                    } else {
                      const re = /^[1-9][0-9]*$/;
                      const rsCheck = re.test(value);
                      if (!rsCheck) {
                        callback(new Error("请输入大于0的整数"));
                      } else {
                        callback();
                      }
                    }
                  }, 0);
                },
                trigger: "blur",
              },
              { max:3, message: "请输入小于1000", trigger: "blur" },
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
            rules: [
              { required: true, message: "请填写活动形式", trigger: "blur" },
            ], //表单校验方式（required: true：是否必填）
          },
        ],
      }, // 表单配置清单
    };
    // 判断手机好吗
    var validatePhone = (rule, value, callback) => {
      const reg = /^[1][3-9][0-9]{9}$/;
      if (value == "" || value == undefined || value == null) {
        callback();
      } else {
        if (!reg.test(value) && value != "") {
          callback(new Error("请输入正确的电话号码"));
        } else {
          callback();
        }
      }
    };
    //判断身份证
    var validateIdNo = (rule, value, callback) => {
      const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (value == "" || value == undefined || value == null) {
        callback();
      } else {
        if (!reg.test(value) && value != "") {
          callback(new Error("请输入正确的身份证号码"));
        } else {
          callback();
        }
      }
    };
    //判断邮箱
    validateEMail = (rule, value, callback) => {
      const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
      if (value == "" || value == undefined || value == null) {
        callback();
      } else {
        if (!reg.test(value)) {
          callback(new Error("请输入正确的邮箱"));
        } else {
          callback();
        }
      }
    };
    //判断整数
    var isInteger = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("输入不可以为空"));
      }
      setTimeout(() => {
        if (!Number(value)) {
          callback(new Error("请输入正整数"));
        } else {
          const re = /^[0-9]*[1-9][0-9]*$/;
          const rsCheck = re.test(value);
          if (!rsCheck) {
            callback(new Error("请输入正整数"));
          } else {
            callback();
          }
        }
      }, 0);
    };
    //判断两位小数
    var validateValidity = (rule, value, callback) => {
      if (
        !/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(
          value
        )
      ) {
        callback(new Error("最多两位小数！！！"));
      } else {
        callback();
      }
    };
    //判断账号
    var validateCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入账号"));
      }
      if (!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/.test(value)) {
        callback(new Error("账号必须为6-20位字母和数字组合"));
      } else {
        callback();
      }
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
#dynamicContainer {
  width: 600px;
  margin: 10px auto;
}
</style>