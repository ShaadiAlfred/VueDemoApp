import Vue from "vue";
import Vuex from "vuex";
import todos from './modules/todos';
import albums from './modules/albums';
import images from './modules/images';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingStatus: false,
  },
  getters: {
    loadingStatus: state => state.loadingStatus,
  },
  mutations: {
    loadingStatus: (state, loadingStatus) => state.loadingStatus = loadingStatus,
  },
  modules: {
    todos,
    albums,
    images,
  }
});
