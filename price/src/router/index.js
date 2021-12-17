
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Db from '../components/Db.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/db',
    name: 'db',
    component: Db
  }
]
 
const router = createRouter({
  history: createWebHistory(),
  routes
})
 
export default router