import Vue from 'vue';
import Vuex from 'vuex';
import shortid from 'shortid';

Vue.use(Vuex);

const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export default new Vuex.Store({
  state: {
    filter: VisibilityFilters.SHOW_ALL,
    todos: [
      {
        id: 1,
        text: 'Bread',
        completed: true,
      },
      {
        id: 2,
        text: 'Milk',
        completed: false,
      },
      {
        id: 3,
        text: 'Cheese',
        completed: false,
      },
    ],
  },
  mutations: {
    SET_VISIBILITY_FILTER: (state, filter) => {
      state.filter = filter;
    },
    SET_TODOS: (state, todos) => {
      state.todos = todos;
    },
  },
  actions: {
    showAll: ({ commit }) => {
      commit('SET_VISIBILITY_FILTER', VisibilityFilters.SHOW_ALL);
    },
    showCompleted: ({ commit }) => {
      commit('SET_VISIBILITY_FILTER', VisibilityFilters.SHOW_COMPLETED);
    },
    showActive: ({ commit }) => {
      commit('SET_VISIBILITY_FILTER', VisibilityFilters.SHOW_ACTIVE);
    },
    addTodo: ({ state, commit }, text) => commit('SET_TODOS', [
      ...state.todos,
      {
        id: shortid.generate(),
        text,
        completed: false,
      },
    ]),
    toggleTodo: ({ state, commit }, id) => {
      const todos = state.todos.map(
        todo => (todo.id !== id ? todo : { ...todo, completed: !todo.completed }),
      );
      commit('SET_TODOS', todos);
    },
  },
  getters: {
    filter: state => state.filter,
    todos: state => state.todos,
    filteredTodos: (state) => {
      switch (state.filter) {
        case VisibilityFilters.SHOW_COMPLETED:
          return state.todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
          return state.todos.filter(todo => !todo.completed);
        case VisibilityFilters.SHOW_ALL:
        default:
          return state.todos;
      }
    },
  },
});
