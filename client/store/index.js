import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        location: {
            name: '',
            seats: 0
        },

        count: 0
    },
    mutations: {
        INCREMENT(state) {
            state.count++;
        },
        DECREMENT(state) {
            state.count--;
        }
    },
    actions: {
        incrementAsync({ commit }) {
            setTimeout(() => {
                commit('INCREMENT');
            }, 200);
        }
    }
});

export default store;
