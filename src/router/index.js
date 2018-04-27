import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import Job from '@/components/Job';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Job',
      component: Job,
    },
    {
      path: '/job',
      name: 'Job',
      component: Job,
    },
  ],
});
