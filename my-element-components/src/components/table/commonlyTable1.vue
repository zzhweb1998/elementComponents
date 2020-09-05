<template>
  <div id="commonlyTable1">
    <el-table
      size="mini"
      :stripe="true"
      border
      ref="tables"
      :data="listData"
      style="width: 100%;"
      height="100%"
      highlight-current-row
    >
      <el-table-column align="center" type="selection" width="55"></el-table-column>
      <template v-for="(tItm, idx) in listTable">
        <el-table-column
          align="left"
          :key="idx"
          :prop="tItm.prop"
          :label="tItm.label"
          show-overflow-tooltip
          :width="tItm.width?tItm.width:''"
        ></el-table-column>
      </template>
      <el-table-column align="left" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
          >编辑</el-button>
          <el-button
            type="text"
            size="small"
            :disabled="scope.row.enabled"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //表头数据
      listTable: [
        {
          label: "编码",
          prop: "codeNo",
        },
        {
          label: "姓名",
          prop: "name",
        },
        {
          label: "性别",
          prop: "sex",
        },
        {
          label: "年龄",
          prop: "age",
        },
        {
          label: "手机号",
          prop: "phone",
        },
        {
          label: "地址",
          prop: "address",
        },
        {
          label: "邮箱",
          prop: "email",
        },
      ],
      //列表数据
      listData: [
        {
          codeNo: "20200101",
          name: "周先生",
          sex: "男",
          age: "22",
          phone: "134xxxxxxxx",
          address: "广东省广州市海珠区xxx街道xxx号",
          email: "xxx@qq.com",
        },
      ],
    };
  },
};
</script>