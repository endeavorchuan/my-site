<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>


<script>
// 映射对象，更改图标名字，提高代码可读性
const classMap = {
  home: "icon-zhuye",
  success: "icon-zhengque",
  error: "icon-cuowu",
  close: "icon-guanbi",
  warn: "icon-jinggao",
  info: "icon-xinxi",
  blog: "icon-blog",
  code: "icon-code",
  about: "icon-set_about_hov",
  weixin: "icon-weixin",
  mail: "icon-dianziyoujianemail71",
  github: "icon-github-fill",
  qq: "icon-QQ-circle-fill",
  arrowUp: "icon-jiantoushang",
  arrowDown: "icon-jiantouxia",
  empty: "icon-empty",
  chat: "icon-liuyan",
}

export default {
  props: {
    type: {
      type: String,
      require: true
    }
  },

  computed: {
    // 图标类样式
    fontClass() {
      return classMap[this.type];
    }
  }
}
</script>


<style scoped>
@import "//at.alicdn.com/t/font_3168722_05vahug9owz6.css";
.iconfont {
    color: inherit;
    font-size: inherit;
}
</style>