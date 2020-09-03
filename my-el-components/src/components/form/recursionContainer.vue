<template>
  <!-- 递归表单组件载体 -->
  <div id="recursionContainer">
    <!-- 递归表单组件 -->
    <recursion-form :formData="formData"></recursion-form>
  </div>
</template>

<script>
import recursionForm from "./recursionContainer/recursionForm";

export default {
  name: "recursionContainer",
  components: {
    recursionForm,
  },
  data() {
    return {
      formData: [
        {
          id: 202001,
          uiTypeKey: "TITLE",
          name: "输入框",
          propertyValues: "",
          placeholder: "",
          children: [
            {
              id: 20200101,
              uiTypeKey: "Input",
              name: "label：",
              propertyValues: "",
              placeholder: "",
              parent: {
                id: 202001,
                uiTypeKey: "TITLE",
              },
              children: [],
            },
          ],
        },
        {
          id: 202002,
          uiTypeKey: "TITLE",
          name: "多文本框",
          propertyValues: "",
          placeholder: "",
          children: [
            {
              id: 20200201,
              uiTypeKey: "MULTI_TEXT",
              name: "label：",
              propertyValues: "",
              placeholder: "",
              parent: {
                id: 202002,
                uiTypeKey: "TITLE",
              },
              children: [],
            },
          ],
        },
        {
          id: 202003,
          uiTypeKey: "TITLE",
          name: "单选框",
          propertyValues: "",
          placeholder: "",
          children: [
            {
              id: 20200301,
              uiTypeKey: "RADIO",
              name: "label1",
              propertyValues: false,
              placeholder: "",
              parent: {
                id: 202003,
                uiTypeKey: "TITLE",
              },
              children: [],
            },
            {
              id: 20200302,
              uiTypeKey: "RADIO",
              name: "label2",
              propertyValues: false,
              placeholder: "",
              parent: {
                id: 202003,
                uiTypeKey: "TITLE",
              },
              children: [],
            },
            {
              id: 20200303,
              uiTypeKey: "RADIO",
              name: "label3",
              propertyValues: false,
              placeholder: "",
              parent: {
                id: 202003,
                uiTypeKey: "TITLE",
              },
              children: [],
            },
            {
              id: 20200304,
              uiTypeKey: "RADIO",
              name: "label4",
              propertyValues: false,
              placeholder: "",
              parent: {
                id: 202003,
                uiTypeKey: "TITLE",
              },
              children: [],
            },
          ],
        },
        {
          id: 202004,
          uiTypeKey: "TITLE",
          name: "多选框",
          propertyValues: "",
          placeholder: "",
          children: [
            {
              id: 20200401,
              uiTypeKey: "CHECKBOX",
              name: "label1",
              propertyValues: false,
              placeholder: "",
              parent: {
                id: 202004,
                uiTypeKey: "TITLE",
              },
              children: [],
            },
            {
              id: 20200402,
              uiTypeKey: "CHECKBOX",
              name: "label2",
              propertyValues: false,
              placeholder: "",
              parent: {
                id: 202004,
                uiTypeKey: "TITLE",
              },
              children: [],
            },
            {
              id: 20200403,
              uiTypeKey: "CHECKBOX",
              name: "label3",
              propertyValues: false,
              placeholder: "",
              parent: {
                id: 202004,
                uiTypeKey: "TITLE",
              },
              children: [],
            },
            {
              id: 20200404,
              uiTypeKey: "CHECKBOX",
              name: "label4",
              propertyValues: false,
              placeholder: "",
              parent: {
                id: 202004,
                uiTypeKey: "TITLE",
              },
              children: [],
            },
          ],
        },
      ],
    };
  },
  created() {},
};
</script>

<style lang="less" scoped>
#recursionContainer{
  width: 500px;
}
</style>