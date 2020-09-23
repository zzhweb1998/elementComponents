<template>
  <div id="imageContainer">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input type="number" v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="商品类型">
        <el-select v-model="form.category" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload
          action="/api/v1/upload"
          ref="upload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :multiple="true"
          :auto-upload="false"
          :limit="4"
          :file-list="form.imgList"
          :on-change="addImg"
          :on-exceed="exceedImg"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <image-upload :imageArr="imageArr" :showIndex="showIndex" />
  </div>
</template>

<script>
import imageUpload from "../../components/form/imageUpload";
export default {
  components: {
    imageUpload,
  },
  data() {
    return {
      //图片组件传值
      imageArr: [
      ],//存储图片数据
      showIndex: 6,//图片显示数量
      
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        id: 0,
        name: "",
        content: "",
        price: 0,
        category: "",
        imgList: [],
      },
      options: [
        {
          label: "家电",
          value: "家电",
        },
        {
          label: "服饰",
          value: "服饰",
        },
        {
          label: "数码",
          value: "数码",
        },
      ],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    addImg(file, fileList) {
      this.form.imgList = fileList;
    },
    exceedImg() {
      this.$message({
        message: "文件超出数量",
        type: "warning",
      });
    },
    onSubmit() {
      // this.$refs.upload.submit()
      let goodsInfo = {
        id: this.form.id,
        name: this.form.name,
        price: this.form.price,
        content: this.form.content,
        category: this.form.category,
        image: "",
      };
      const formData = new FormData();

      for (let i = 0; i < this.form.imgList.length; i++) {
        console.log(this.form.imgList[i].raw);
        formData.append("files", this.form.imgList[i].raw);
      }
      this.axios
        .post("/api/v1/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: goodsInfo,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="less" scoped>
#imageContainer {
  width: 500px;
}
</style>