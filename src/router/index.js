import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Audi from '../views/AudiDetails.vue'
import Benz from '../views/BenzDetails.vue'
import Ford from '../views/FordDetails.vue'






const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Audi',
    name: 'Audi',
    component: Audi
  },

  {
    path: '/Benz',
    name: 'Benz',
    component: Benz
  },

  {
    path: '/Ford',
    name: 'Ford',
    component: Ford
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
