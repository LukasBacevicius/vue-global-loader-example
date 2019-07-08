import Vue from "vue";
import Vuex from "vuex";

import { loader } from './modules/loader';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
    },
    modules: {
        loader
    }
});
