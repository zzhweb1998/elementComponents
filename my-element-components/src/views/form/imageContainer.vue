<template>
  <div id="imageContainer">
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
    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
#imageContainer {
  width: 500px;
}
</style>