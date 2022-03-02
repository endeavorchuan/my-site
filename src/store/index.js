/**
 * @name: index
 * @author: chuanchuan
 * @date: 2022-03-01 14:02
 * @description：index
 * @update: 2022-03-01 14:02
 */

import {Store, install} from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "@/store/project";

// 若使用常规方式导入，会造成全局变量污染，判断是否有全局变量，就可以知道导入方式
if(!window.Vue) {
  install(Vue);

}

export default new Store({
  modules: {
    banner,
    setting,
    about,
    project
  },
  strict: true
});