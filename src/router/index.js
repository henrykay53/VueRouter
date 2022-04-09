import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Audi from '../views/Audi.vue'
import Benz from '../views/Benz.vue'
import Ford from '../views/Ford.vue'






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
