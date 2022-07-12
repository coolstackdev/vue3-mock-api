import { createStore } from 'vuex';
import Calculator, { Occurance } from '../api/Calculator';

export default createStore({
  state: {
    result: null,
  },
  mutations: {
    setResult(state, payload) {
      state.result = payload;
    },
  },
  actions: {
    async fetchResult(context, payload: number): Promise<void> {
      const res: Occurance = await Calculator.getResult(payload);
      context.commit('setResult', res);
    },
  },
});
