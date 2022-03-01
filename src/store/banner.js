/**
 * @name: banner
 * @author: chuanchuan
 * @date: 2022-03-01 14:02
 * @description：banner
 * @update: 2022-03-01 14:02
 */

import { getBanners } from "@/api/banner";

export default {
  namespaced: true,

  state: {
    loading: false,
    data: [],

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
    async fetchBanner(ctx) {
      if(ctx.state.data.length) {
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getBanners();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    }
  }
}