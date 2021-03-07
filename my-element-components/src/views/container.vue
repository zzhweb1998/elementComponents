<template>
  <el-container>
    <el-aside>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">练习</el-radio-button>
        <el-radio-button :label="true">组件库</el-radio-button>
      </el-radio-group>
      <div class="menuBox" v-show="!isCollapse">
        <el-menu v-for="(itm,index) in demo" :key="index" :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          router active-text-color="#409EFF">
          <el-submenu :index="index.toString()">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{itm.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(itm2,index2) in itm.children" :key="index2" :index="itm2.url">{{itm2.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="menuBox" v-show="isCollapse">
        <el-menu v-for="(itm,index) in components" :key="index" :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen"
          @close="handleClose" router active-text-color="#409EFF">
          <el-submenu :index="index.toString()">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{itm.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(itm2,index2) in itm.children" :key="index2" :index="itm2.url">{{itm2.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      demo: [
        {
          title: 'Form组件',
          children: [
            {
              name: '动态',
              url: '/form/dynamicContainer'
            },
            {
              name: '递归',
              url: '/form/recursionContainer'
            },
            {
              name: '回车跳转',
              url: '/form/enterForm'
            },
            {
              name: '验证码',
              url: '/form/verificationContainer'
            },
            {
              name: '图片',
              url: '/form/imageContainer'
            },
            {
              name: '商品',
              url: '/form/goodsContainer'
            }
          ]
        },
        {
          title: 'Table组件',
          children: [
            {
              name: '自定义',
              url: '/table/customContainer'
            },
            {
              name: '常用Table',
              url: '/table/CommonlyContainer'
            }
          ]
        },
        {
          title: 'Layout布局',
          children: [
            {
              name: '瀑布流',
              url: '/layout/waterfallContainer'
            }
          ]
        },
        {
          title: 'Api接口',
          children: [
            {
              name: '测试',
              url: '/test/test1'
            },
            {
              name: '聊天',
              url: '/test/webSocket'
            }
          ]
        },
        {
          title: '其它组件',
          children: [
            {
              name: '时钟',
              url: '/timer/timer'
            },
          ]
        },
      ],
      components: [
        {
          title: '测试',
          children: [
            {
              name: '测试',
              url: '/base/ceshi2'
            },
          ]
        },
      ]
    };
  },
  created () {
    this.isCollapse = sessionStorage.getItem('isCollapse') || false
  },
  watch: {
    isCollapse (newValue, oldValue) {
      sessionStorage.setItem('isCollapse', newValue)
    }
  },
  methods: {
    handleOpen () { },
    handleClose () { },
  },
};
</script>

<style lang="less" scoped>
.el-container {
  height: calc(100% - 60px);
  .el-aside {
    width: 220px !important;
    margin: 20px 0;
    border-right: 1px solid #ccc;
    .el-radio-group {
      margin-left: 30px;
    }
  }
  .el-main {
    height: 100%;
  }
}
</style>