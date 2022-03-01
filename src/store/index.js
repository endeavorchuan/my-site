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
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    banner,
    setting
  },
  strict: true
});