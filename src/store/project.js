/**
 * @name: project
 * @author: chuanchuan
 * @date: 2022-03-01 19:48
 * @description：project
 * @update: 2022-03-01 19:48
 */

import { getProjects } from "@/api/project";

export default {
  namespaced: true,

  state: {
    loading: false,
    data: []
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
    async fetchProject(ctx) {
      if(ctx.state.data.length) {
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getProjects();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    }
  }
}