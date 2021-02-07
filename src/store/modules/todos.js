const API_URL = process.env.VUE_APP_API_URL;

const state = {
  todos: [],
};

const getters = {
  allTodos: state => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    commit('loadingStatus', true);

    const response = await (await fetch(
      `${API_URL}/todos`
    ).then(res => res.json()));

    commit('setTodos', response);
    commit('loadingStatus', false);
  },
  async updateTodo({ commit }, todo) {
    let updatedTodo;

    if (todo.id <= 200) {
      updatedTodo = await (await fetch(
        `${API_URL}/todos/${todo.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(todo)
        }
      ).then(res => res.json()));
    } else {
      updatedTodo = todo;
    }

    commit('updateTodo', updatedTodo);
  },
  async addTodo({ commit, getters }, title) {
    const response = await (await fetch(
      `${API_URL}/todos`,
      {
        method: 'POST',
        body: JSON.stringify({
          title,
          completed: false,
        }),
      }
    )).json();

    response.id; // Always 201

    const todo = {
      id: getters.allTodos.length,
      title,
      completed: false
    };

    commit('addTodo', todo);
  },
};

const mutations = {
  setTodos: (state, todos) => state.todos = todos,
  updateTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      // state.todos.splice(index, 1, updatedTodo);
    }
  },
  addTodo: (state, todo) => state.todos.unshift(todo),
};

export default {
  state,
  getters,
  mutations,
  actions,
}
