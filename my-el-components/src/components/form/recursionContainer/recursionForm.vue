<template>
  <!-- 递归表单组件 -->
  <div id="recursionForm">
    <p style="margin-bottom:30px">递归表单</p>
    <recursion-children :searchForm="searchForm" @updFormData="updFormData"></recursion-children>
  </div>
</template>

<script>
import recursionChildren from "./recursionChildren";
let self;
export default {
  name: "recursionForm",
  components: {
    recursionChildren,
  },
  props: {
    formData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchForm: [],
    };
  },
  created() {
    self = this;
    self.searchForm = JSON.parse(JSON.stringify(self.formData));
  },
  methods: {
    // 返回值处理
    updFormData(id, data, indexIf) {
      if (indexIf === 1) {
        self.ergodicForm(id, self.searchForm, data);
      } else if (indexIf === 2) {
        self.searchForm.forEach((el, index) => {
          if (el.id == id) {
            self.searchForm[index].propertyValues = data[index].propertyValues;
          }
        });
      }
      console.log(self.searchForm);
    },
    ergodicForm(id, item, data) {
      item.forEach((el, index) => {
        if (el.id == id) {
          item[index].children = data;
        }
        if (el.children && el.children.length) {
          self.ergodicForm(id, item[index].children, data);
        }
      });
    },
  },
};
</script>
