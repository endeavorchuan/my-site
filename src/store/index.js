/**
 * @name: index
 * @author: chuanchuan
 * @date: 2022-03-01 14:02
 * @description：index
 * @update: 2022-03-01 14:02
 */

import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "@/store/project";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    banner,
    setting,
    about,
    project
  },
  strict: true
});