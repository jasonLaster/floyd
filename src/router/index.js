import Vue from 'vue'
import VueRouter from 'vue-router'
import Incidents from '@/views/Incidents.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/incident/:id',
    name: 'IncidentDetails',
    // route level code-splitting
    // this generates a separate chunk ([page].[hash].js) for these routes
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Incident" */ '@/views/Incident.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '@/views/About.vue'),
  },
  {
    path: '/',
    name: 'Root',
    component: Incidents,
    props: true,
    children: [
      {
        path: 'city/:city',
        name: 'City',
        component: Incidents,
      },
    ],
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "NotFound" */ '@/views/NotFound.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
