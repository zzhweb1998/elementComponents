<template>
  <!-- 自定义表格组件 -->
  <div id="customTable">
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
      @selection-change="handleSelectionChange"
    >
      <!-- 多选 （@selection-change点击选中时调用该方法获取选中数据）-->
      <el-table-column type="selection" width="55"></el-table-column>

      <!-- 循环（根据listTable配置的表头循环遍历出来） -->
      <template v-for="(tItm, idx) in tableHeader">
        <el-table-column
          align="left"
          :key="idx"
          :prop="tItm.prop"
          :label="tItm.label"
          show-overflow-tooltip
          :width="tItm.width?tItm.width:''"
          :min-width="tItm.minWidth?tItm.minWidth:''"
        ></el-table-column>
      </template>

      <!-- 排序（设置prop和sortable，然后:default-sort配置排序方式） -->
      <el-table-column prop="date" label="日期" width="180" sortable>
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <!-- 弹出框（鼠标移上去回弹出信息框） -->
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <!-- 操作（编辑、删除、查看） -->
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>

      <!-- tag标记（可以根据标记筛选） -->
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tableHeader: [
        {
          label: "编码",
          prop: "codeNo",
          width: "80",
          minWidth: "80",
        },
        {
          label: "性别",
          prop: "sex",
          width: "60",
          minWidth: "60",
        },
      ],
      tableData: [
        {
          codeNo: "202001",
          sex: "男",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
        },
        {
          codeNo: "202002",
          sex: "男",
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司",
        },
        {
          codeNo: "202003",
          sex: "男",
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家",
        },
        {
          codeNo: "202004",
          sex: "男",
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司",
        },
      ],
    };
  },
  methods: {
    //查看
    handleClick(row) {
      console.log(row);
    },
    //编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    //删除
    handleDelete(index, row) {
      console.log(index, row);
    },
    //tag筛选
    filterTag(value, row) {
      return row.tag === value;
    },
    //多选框选择
    handleSelectionChange(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="less" scoped>
#customTable {
  .name-wrapper {
    display: inline-block !important;
  }
}
</style>