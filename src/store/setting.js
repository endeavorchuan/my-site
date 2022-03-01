/**
 * @name: setting
 * @author: chuanchuan
 * @date: 2022-03-01 14:02
 * @description：setting
 * @update: 2022-03-01 14:02
 */

import { getSetting } from "@/api/setting";
import {getBanners} from "@/api/banner";

export default {
  namespaced: true,

  state: {
    loading: false,
    data: null
  },

  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    }
  },

  actions: {
    async fetchSetting(ctx) {
      ctx.commit("setLoading", true);
      const resp = await getSetting();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);

      if(resp.favicon) {
        let link = document.querySelector("link[ref='shortcut icon']");
        if(link) {
          return;
        }
        link = document.createElement("link");
        link.rel = 'shortcut icon';
        link.type = "images/x-icon";
        link.href = resp.favicon;
        document.querySelector("head").appendChild(link);
      }
    }
  }
}