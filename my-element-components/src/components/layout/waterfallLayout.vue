<template>
  <div class="infinite-list-wrapper" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
    <div class="waterfallLayout" :style="{width:((listData.lWidth+10) * listData.size)+'px'}">
      <ul v-for="(item,index) in ulData" :key="index" :style="{width:listData.lWidth+'px'}">
        <li
          v-for="(item2,index2) in item"
          :style="{height:item2.lHeight+'px',lineHeight:item2.lHeight+'px'}"
          :key="index2"
        >{{ listData.lWidth +'X'+ item2.lHeight }}</li>
      </ul>
      <div class="clear"></div>
    </div>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: {
        lWidth: 200,
        size: 4,
        listArr: [
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
          {
            lHeight: parseInt(Math.random() * 300),
          },
        ],
      },
      ulData: [],
      index: 0,
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.count >= this.listData.listArr.length - 1;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  created() {
    for (let i = 0; i < this.listData.size; i++) {
      this.ulData.push([]);
    }
    this.index = this.listData.size * 4;
    this.loadData(0);
  },
  methods: {
    loadData(index) {
      let i = index;
      if (index !== 0) {
        this.index = this.index + 4;
      }
      for (; i < this.index; i++) {
        this.ulData[i > 3 ? i % this.listData.size : i].push(
          this.listData.listArr[i]
        );
      }
    },
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
    padding-bottom: 50px;
  }
  ul {
    float: left;
    li {
      list-style: none;
      border: 1px solid #ccc;
      text-align: center;
      margin: 5px;
    }
  }
  .clear{
      clear: both;
  }
}
</style>