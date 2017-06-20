import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(Router);

// todo: add catch all rule to htaccess https://router.vuejs.org/en/essentials/history-mode.html
export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '*', component: NotFound} // history mode disables server handling
    ]
});
