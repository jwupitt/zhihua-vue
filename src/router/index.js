/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: resolve => require.ensure([], () => resolve(require('../Hello/hello.vue')), 'hello')
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require.ensure([], () => resolve(require('../components/test.vue')), 'test')
    },
  ],
});
