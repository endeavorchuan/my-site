// 入口文件

import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "../src/router"
import store from "../src/store"
import "@/eventBus"

// 全局网站数据，一开始就要加载出来
store.dispatch("setting/fetchSetting");

// 直接注入到vue实例中，每次使用不需要再导入
import showMessage from "@/utils/showMessage";
Vue.prototype.$showMessage = showMessage;

import "./api/banner"

// 注册全局指令
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');




// 测试代码
// import * as blogApi from "./api/blog"
// blogApi.getBlogTypes().then((r) => {
//   console.log("博客分类", r);
// });
// blogApi.getBlogs(2, 10, 3).then((r) => {
//   console.log("博客", r);
// });

// 测试接口
import * as blogApi from "./api/blog";
// blogApi.getBlog("dsaas").then((r) => {
//   console.log(r);
// });

// blogApi.postComment({
//   nickname: "昵称",
//   content: "评论内容，纯文本",
//   blogid: "123"
// }).then((r) => {
//   console.log(r);
// });

// blogApi.getComments("123123").then((r) => {
//   console.log(r);
// });


// 测试事件总线
// import eventBus from "@/eventBus";
// function handler1(data) {
//   console.log("handler1", data);
// }
// function handler2(data) {
//   console.log("handler2", data);
// }
// eventBus.$on("event1", handler1);
// eventBus.$on("event1", handler2);
// eventBus.$on("event2", handler1);
//
// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;

// vuex测试
// import {getSetting} from "@/api/setting";
// getSetting().then((resp) => {
//   console.log(resp);
// });