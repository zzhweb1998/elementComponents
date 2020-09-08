<template>
<!-- 瀑布流组件 -->
  <div class="infinite-list-wrapper" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
    <div class="waterfallLayout" :style="{width:((listData.lWidth+10) * listData.size)+'px'}">
      <ul v-for="(item,index) in ulData" :key="index" :style="{width:listData.lWidth+'px'}">
        <li
          v-for="(item2,index2) in item"
          :key="index2"
          :style="{height:item2.lHeight+'px'}"
        >
          <img :src="item2.url" alt="" :width="listData.lWidth-40" :height="listData.lWidth-80">
          <p>{{item2.title}}</p>
          <p>{{item2.content}}</p>
          <p>{{item2.date}}</p>
        </li>
      </ul>
      <div class="clear"></div>
      <p v-if="!noMore">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    listData:{
      type:Object
    }
  },
  data() {
    return {
      ulData: [], //存放列数组
      index: 0, //记录以获取数组长度
      loading: false,
    };
  },
  computed: {
    //判断是否加载完
    noMore() {
      return this.index >= this.listData.listArr.length - 1;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  created() {
    // 配置列数组
    for (let i = 0; i < this.listData.size; i++) {
      this.ulData.push([]);
    }
    this.index = this.listData.size * 6;
    this.loadData(0);
  },
  methods: {
    //参数处理，把参数按循序插入列数组
    loadData(index) {
      let i = index;
      if (index !== 0) {
        this.index = this.index + this.listData.size*3;
        if(this.index>this.listData.listArr.length - 1){
          this.index=this.listData.listArr.length - 1
        }
      }
      for (; i < this.index; i++) {
        // 第i个参数插入对应的i%this.listData.size的数组里
        this.ulData[i % this.listData.size].push(
          this.listData.listArr[i]
        );
      }
    },
    // 下拉条拉到底部触发
    load() {
      this.loading = true;
      setTimeout(() => {
        this.loadData(this.index);
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
.infinite-list-wrapper {
  height: 100%;
  overflow: auto;
  .waterfallLayout {
    margin: 0 auto;
    height: 100%;
    ul {
      float: left;
      li {
        list-style: none;
        border: 1px solid #ccc;
        text-align: center;
        margin: 5px;
        padding: 10px;
        overflow: hidden;
        p{
          margin: 5px 0;
          &:nth-of-type(2){
            font-size: 14px;
            color: #888;
            text-align: left;
          }
          &:nth-of-type(3){
            font-size: 12px;
            color: #ccc;
          }
        }
      }
    }
    .clear {
      clear: both;
    }
  }
  p {
    width: 100%;
    text-align: center;
  }
}
</style>