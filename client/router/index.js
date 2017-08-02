import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import Landing from '../views/Landing.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/table', component: Landing },
        { path: '*', component: NotFound }, // history mode disables server handling

        // Todo: automate routing of new stores
        { path: '/:barId', component: Landing, props: true }, // bar id
        { path: '/bar1', component: Landing }, // Test store 2
        { path: '/bar2', component: Landing } // Test store 3
    ]
});
