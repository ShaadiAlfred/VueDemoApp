const API_URL = process.env.VUE_APP_API_URL;

const state = {
  todos: [],
};

const getters = {
  allTodos: state => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await (await fetch(
      `${API_URL}/todos`
    ).then(res => res.json()));

    commit('setTodos', response);
  },
};

const mutations = {
  setTodos: (state, todos) => state.todos = todos,
};

export default {
  state,
  getters,
  mutations,
  actions,
}
