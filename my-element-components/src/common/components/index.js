// 基础组件的自动化全局注册
import Vue from 'vue'
const requireComponent = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\.vue$/
)
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 全局注册组件
  Vue.component(
      componentConfig.default.name,   // 此处的name,是组件属性定义的name
      componentConfig.default
  )
})