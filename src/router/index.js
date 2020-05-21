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
    },
    {
        path: '/insert/civilStructure',
        name: '插入土木结构房屋破坏统计表',
        component: () => import('../views/insert/CivilStructure')
    },
    {
        path: '/insert/collapseRecord',
        name: '插入人员死亡统计表',
        component: () => import('../views/insert/CollapseRecord')
    },
    {
        path: '/insert/commDisaster',
        name: '插入通信系统灾情统计表  ',
        component: () => import('../views/insert/CommDisaster')
    },
    {
        path: '/insert/deathStatistics',
        name: '插入人员死亡统计表',
        component: () => import('../views/insert/DeathStatistics')
    },
    {
        path: '/insert/disasterPrediction',
        name: '插入灾情预测',
        component: () => import('../views/insert/DisasterPrediction')
    },
    ////////////////////////////////////////////////////////////////////
    {
        path: '/update/civilStructure',
        name: '更新土木结构房屋破坏统计表',
        component: () => import('../views/update/CivilStructure')
    },
    {
        path: '/update/collapseRecord',
        name: '更新人员死亡统计表',
        component: () => import('../views/update/CollapseRecord')
    },
    {
        path: '/update/commDisaster',
        name: '更新通信系统灾情统计表  ',
        component: () => import('../views/update/CommDisaster')
    },
    {
        path: '/update/deathStatistics',
        name: '更新人员死亡统计表',
        component: () => import('../views/update/DeathStatistics')
    },
    {
        path: '/update/disasterPrediction',
        name: '更新灾情预测',
        component: () => import('../views/update/DisasterPrediction')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
