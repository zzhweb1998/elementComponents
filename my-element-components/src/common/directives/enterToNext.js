import Vue from 'vue'

//回车跳转(在el-form上绑定指令：v-enter-to-next="'(el-form的ref名)'")
Vue.directive('enterToNext', {
  bind: function (el, binding, vnode) {
    let element = vnode.elm.elements
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener('keyup', (ev) => {
        if (ev.keyCode === 13) {
          let index = i
          if (element[index].type == "text") {
            //如果是下拉选择框则需要添加相同的name和ref
            if (element[index].name == "select") {
              setTimeout(() => {
                //vnode.context相当于this
                vnode.context.$refs[element[index].name].blur()
              }, 100);
            }
            while (element[index].disabled) {
              index++
            }
            element[index+1].focus()
          }

          if (element[index].type == "textarea" || element[index].type == "number") {
            while (element[index].disabled) {
              index++
            }
            element[index+1].focus()
          }

          if (element[index].type == "radio" || element[index].type == "checkbox") {
            while (element[index].disabled) {
              index++
            }
            console.log(element[index]);
            if(element[index+1]&& typeof element[index+1].focus==='function'){
              if(element[index].type == "radio"){
                element[index].previousElementSibling.style.borderColor = ""
              }
              if(element[index+1].type == "radio"){
                element[index+1].previousElementSibling.style.borderColor = "#409EFF"
              }
              element[index+1].focus()
              element[index+1].select()
            }else if(!element[index+1]){
              element[index+1].blur()
            }
          }
        }
      })
    }
  }
})