<template>
  <!-- 图片上传 -->
  <div id="imageUpload">
    <ul>
      <li
        class="list-image"
        v-for="(itm,index) in imageArr"
        :key="index"
      >
        <el-image v-if="index < showIndex" :src="'http://localhost:3000/images/'+itm.url"></el-image>
        <div class="blank-box">
          <i class="el-icon-zoom-in blank-icon" @click="handlePictureCardPreview(itm.url)"></i>
          <i class="el-icon-delete blank-icon" @click="handleRemove(index)"></i>
        </div>
      </li>
    </ul>
    <el-upload
      class="avatar-uploader"
      action="/api/v1/upload/image"
      :show-file-list="false"
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
      :multiple="true"
      v-if="imageArr.length < showIndex"
    >
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div class="imageDialog" v-if="dialogVisible" @click="dialogVisible = false" >
      <img :src="dialogImageUrl" alt/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    imageArr:{
      type:Array,
    },
    showIndex:{
      type:Number
    }
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    //移除图片
    handleRemove(index) {
      this.imageArr.splice(index,1)
    },
    //放大图片
    handlePictureCardPreview(fileUrl) {
      this.dialogImageUrl = "http://localhost:3000/images/" + fileUrl;
      this.dialogVisible = true;
    },
    //图片上传成功
    handleSuccess(res, file) {
      if (this.imageArr.length + file.response.data.length < this.showIndex + 1) {
        file.response.data.forEach((el) => {
          this.imageArr.push(el);
        });
      } else {
        this.$message.error("上传图片数量不能超过" + this.showIndex + "张");
      }
    },
    //图片上传前
    beforeUpload(file) {
      console.log(file);
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt6M = file.size / 1024 / 1024 < 6;
      const isNum = this.imageArr.length < this.showIndex + 1;
      if (!isJPG && !isPNG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt6M) {
        this.$message.error("上传头像图片大小不能超过 6MB!");
      }
      if (!isNum) {
        this.$message.error("上传图片数量不能超过" + this.showIndex + "张");
      }
      return isJPG && isLt6M && isNum;
    },
  },
};
</script>

<style lang="less" scoped>
#imageUpload {
  .list-image {
    width: 125px;
    height: 125px;
    position: relative;
    list-style-type: none;
    margin: 10px;
    float: left;
    cursor: pointer;
    &:hover {
      .blank-box {
        display: block;
      }
    }
    .el-image {
      width: 100%;
      height: 100%;
    }
    .blank-box {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      z-index: 10;
      .blank-icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #ddd;
        font-size: 20px;
      }
      .el-icon-zoom-in{
        left: 30%;
      }
      .el-icon-delete{
        left: 50%;
      }
    }
  }
  .imageDialog{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    z-index: 9998;
    img{
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: auto;
    }
  }
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: 10px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 125px;
  height: 125px;
  line-height: 125px;
  text-align: center;
}
</style>