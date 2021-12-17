import {Vue} from 'vue'

Vue.use(VueRouter)

const history = createWebHistory();
const routes = [
  {
    path: "/",
    component: Services
  },
  {
    path: "/Db.vue",
    component: Costumers
  },
];
const router = createRouter({
  history,
  routes
});
export default router;  