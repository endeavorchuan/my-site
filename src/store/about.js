/**
 * @name: about
 * @author: chuanchuan
 * @date: 2022-03-01 17:55
 * @description：about
 * @update: 2022-03-01 17:55
 */

import { getAbout } from "@/api/about";

export default {
  namespaced: true,

  state: {
    loading: false,
    data: ""
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
    async fetchAbout(ctx) {
      if(ctx.state.data) {
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getAbout();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    }
  }
}