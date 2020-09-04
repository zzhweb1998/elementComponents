<template>
  <!-- 诊断模板组件 -->
  <div id="diagnosisFormBox">
    <div v-for="(item,index) in diagnosisInfo" :key="index" class="item-parent">
      <!-- 标题行 -->
      <div class="titleForm" v-if="item.uiTypeKey==='TITLE'">
        <p :class="{'titleFrist':!item.parent}">{{item.name}}</p>
      </div>
      <!-- 多行文本框 -->
      <div class="textareaForm" v-if="item.uiTypeKey==='MULTI_TEXT'">
        <span>{{item.name}}</span>
        <el-input
          type="textarea"
          :rows="2"
          placeholder
          v-model="item.propertyValues"
          style="width:90%"
          @change="updFormData(item.id,diagnosisInfo,0)"
        ></el-input>
      </div>
      <!-- 输入框 -->
      <div class="inputForm" v-if="item.uiTypeKey==='Input'">
        <span>{{item.name}}</span>
        <el-input
          clearable
          placeholder
          v-model="item.propertyValues"
          size="mini"
          style="width:90%"
          @change="updFormData(item.id,diagnosisInfo,0)"
        ></el-input>
      </div>
      <!-- 单选框 -->
      <div class="radioForm" v-if="item.uiTypeKey==='RADIO'">
        <el-radio
          :label="true"
          v-model="item.propertyValues"
          @change="updFormData(item.id,diagnosisInfo,0)"
        >{{item.name}}</el-radio>
      </div>
      <!-- 复选框 -->
      <div class="checkboxForm" v-if="item.uiTypeKey==='CHECKBOX'">
        <el-checkbox
          v-model="item.propertyValues"
          @change="updFormData(item.id,diagnosisInfo,0)"
        >{{item.name}}</el-checkbox>
      </div>

      <div
        v-if="(item.children && item.children.length !== 0) && item.uiTypeKey!=='MULTI_TEXT'"
        class="item-children"
      >
        <recursion-children
          :searchForm="item.children"
          @updFormData="updFormData"
          v-if="(item.uiTypeKey==='CHECKBOX' || item.uiTypeKey==='RADIO')?item.propertyValues:true"
        ></recursion-children>
      </div>
    </div>
  </div>
</template>
<script>
let self;
export default {
  name: "recursionChildren",
  props: {
    searchForm: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      diagnosisInfo: JSON.parse(JSON.stringify(this.searchForm)),
      radio: false,
    };
  },
  watch: {
    searchForm: {
      handler: function (newVal, oldVal) {
        this.diagnosisInfo = JSON.parse(JSON.stringify(this.searchForm));
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    self = this;
  },
  methods: {
    //修改数据递归向上传递回父组件处理
    updFormData(id, data, indexIf) {
      if (indexIf === 0) {
        let parId = null;
        data.forEach((el, index) => {
          if (el.id == id) {
            if (el.parent) {
              parId = el.parent.id;
            }
          } else {
            if (el.uiTypeKey == "RADIO") {
              data[index].propertyValues = false;
            }
          }
        });
        if (parId != null) {
          this.$emit("updFormData", parId, data, 1);
        } else {
          this.$emit("updFormData", id, data, 2);
        }
      } else if (indexIf === 2) {
        this.$emit("updFormData", id, data, 2);
      } else if (indexIf === 1) {
        this.$emit("updFormData", id, data, 1);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.textareaForm {
  width: 98%;
  margin: 5px auto;
  span {
    float: left;
    width: 10%;
    font-size: 14px;
    color: #666;
    text-align: right;
  }
}
.inputForm {
  width: 98%;
  margin: 5px auto;
  span {
    display: inline-block;
    width: 10%;
    font-size: 14px;
    color: #666;
    text-align: right;
  }
}
.radioForm {
  width: 98%;
  margin: 5px auto;
}
.checkboxForm {
  width: 98%;
  margin: 5px auto;
}
.titleForm {
  width: 98%;
  margin: 5px auto;
  p {
    font-size: 14px;
    color: #666;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .titleFrist {
    font-size: 15px;
    font-weight: 600;
    color: #333;
  }
}
.item-parent {
  margin-left: 10px;
  .item-children {
    margin-left: 60px;
  }
}
</style>