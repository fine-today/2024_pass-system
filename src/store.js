import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      layout: "sub",
    };
  },
  mutations: {
    setLayout(state, payload) {
      state.layout = payload;
    },
  },
  actions: {
    //ajax 요청
  },
});

export default store;
