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
install(Vue);

export default new Store({
  modules: {
    banner,
    setting,
    about,
    project
  },
  strict: true
});