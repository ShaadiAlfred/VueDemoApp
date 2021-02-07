const API_URL = process.env.VUE_APP_API_URL;

const state = {
  album: {},
  images: [],
};

const getters = {
  album: state => state.album,
  images: state => state.images,
};

const actions = {
  async fetchAlbum({ commit }, albumId) {
    commit('loadingStatus', true);

    const album = (await (await fetch(
      `${API_URL}/albums?id=${albumId}`
    )).json())[0];

    commit('setAlbum', album);
  },
  async fetchImages({ commit, getters }) {
    const images = await (await fetch(
      `${API_URL}/photos?albumId=${getters.album.id}`
    )).json();

    commit('setImages', images);
    commit('loadingStatus', false);
  },
};

const mutations = {
  setImages: (state, images) => state.images = images,
  setAlbum: (state, album) => state.album = album,
};

export default {
  state,
  getters,
  mutations,
  actions,
}
