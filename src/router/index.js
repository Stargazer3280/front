import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //公共
    {
        path: '/',
        redirect: '/upload'
    },
    {
        path: '/upload',
        name: '上传',
        component: () => import('../views/Upload.vue')
    },
    {
        path: '/information',
        name: '信息展示',
        component: () => import('../views/Information.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
