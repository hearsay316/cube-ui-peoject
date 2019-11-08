// noinspection NpmUsedModulesInstalled
import { fetchCategory } from "@/api/home.js";
import * as type from "../../utils/actions-type";

export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    [type.SET_CATEGORIES](state, res) {
      state.categories = res; //更新
    }
  },
  actions: {
    async [type.SET_CATEGORIES]({ commit }) {
      let categories = await fetchCategory();
      commit(type.SET_CATEGORIES, categories); // 提交状态
    }
  }
};
