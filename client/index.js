import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router';
import store from './store';
import './promise-polyfill';

sync(store, router);

const app = new Vue({
    router,
    store,
    ...App
});

// enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
    require('./pwa');
}

app.$mount('#app');
