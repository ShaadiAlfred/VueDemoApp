const API_URL = process.env.VUE_APP_API_URL;

const state = {
  albums: [],
};

const getters = {
  allAlbums: state => state.albums,
};

const actions = {
  async fetchAlbums({ commit }) {
    commit('loadingStatus', true);

    const response = await (await fetch(
      `${API_URL}/albums`
    ).then(res => res.json()));

    commit('setAlbums', response);
    commit('loadingStatus', false);
  },
};

const mutations = {
  setAlbums: (state, albums) => state.albums = albums,
};

export default {
  state,
  getters,
  mutations,
  actions,
}
