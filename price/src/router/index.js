
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Db from '../components/Db.vue'
import Register from '../components/Register.vue'
import SignIn from '../components/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/db',
    name: 'Db',
    component: Db
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SignIn
  },
]
 
const router = createRouter({
  history: createWebHistory(),
  routes
})
 
export default router