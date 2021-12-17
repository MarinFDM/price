import {Vue} from 'vue'
import {createRouter, createWebHistory}  from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:"Home",
    }
    ,
    {
        path:'db',
        name:"Db",
        component:()=>import('./components/Db.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router