//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/posts',
        name: 'posts.index',
        component: () => import( /* webpackChunkName: "index" */ '../views/posts/Index.vue')
    },
    {
        path: '/create',
        name: 'posts.create',
        component: () => import( /* webpackChunkName: "create" */ '../views/posts/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'posts.edit',
        component: () => import( /* webpackChunkName: "edit" */ '../views/posts/Edit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router