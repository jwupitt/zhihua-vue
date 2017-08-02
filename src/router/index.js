/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require.ensure([], () => resolve(require('../Home/home.vue')), 'home')
    },
    {
      path:'/success',
      name:'success',
      component: resolve => require.ensure([], () => resolve(require('../success/success.vue')), 'success')
    }
//  {
////    children:[
////	      {
////	      	path: '/success',
////	      	name: 'success',
////	      	component: resolve => require.ensure([], () => resolve(require('../components/success.vue')), 'success')
////	      }
////    ]
//  }   
  ]
});
