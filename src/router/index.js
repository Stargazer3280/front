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
        component: resolve => require(['../views/Upload'], resolve)
    },
    {
        path: '/information',
        name: '信息展示',
        component: resolve => require(['../views/Information'], resolve)
    },
    ///////////////////////////////////////////////////////////////////
    {
        path: '/insert/civilStructure',
        name: '插入土木结构房屋破坏统计表',
        component: resolve => require(['../views/insert/CivilStructure'], resolve)
    },
    {
        path: '/insert/collapseRecord',
        name: '插入人员死亡统计表',
        component: resolve => require(['../views/insert/CivilStructure'], resolve)
    },
    {
        path: '/insert/commDisaster',
        name: '插入通信系统灾情统计表  ',
        component: resolve => require(['../views/insert/CommDisaster'], resolve)
    },
    {
        path: '/insert/deathStatistics',
        name: '插入人员死亡统计表',
        component: resolve => require(['../views/insert/DeathStatistics'], resolve)
    },
    {
        path: '/insert/disasterInfo',
        name: '插入灾情预测',
        component: resolve => require(['../views/insert/DisasterInfo'], resolve)
    },
    {
        path: '/insert/disasterPrediction',
        name: '插入灾情预测',
        component: resolve => require(['../views/insert/DisasterPrediction'], resolve)
    },
    {
        path: '/insert/landslideRecord',
        name: '插入滑坡',
        component: resolve => require(['../views/insert/LandslideRecord'], resolve)
    },
    {
        path: '/insert/masonryStructure',
        name: '插入砖混结构房屋破坏',
        component: resolve => require(['../views/insert/MasonryStructure'], resolve)
    },
    {
        path: '/insert/missingStatistics',
        name: '插入失踪人数',
        component: resolve => require(['../views/insert/MissingStatistics'], resolve)
    },
    {
        path: '/insert/trafficDisaster',
        name: '插入交通',
        component: resolve => require(['../views/insert/TrafficDisaster'], resolve)
    },
    ////////////////////////////////////////////////////////////////////
    {
        path: '/update/civilStructure',
        name: '更新土木结构房屋破坏统计表',
        component: resolve => require(['../views/update/CivilStructure'], resolve)
    },
    {
        path: '/update/collapseRecord',
        name: '更新人员死亡统计表',
        component: resolve => require(['../views/update/CollapseRecord'], resolve)
    },
    {
        path: '/update/commDisaster',
        name: '更新通信系统灾情统计表  ',
        component: resolve => require(['../views/update/CommDisaster'], resolve)
    },
    {
        path: '/update/deathStatistics',
        name: '更新人员死亡统计表',
        component: resolve => require(['../views/update/DeathStatistics'], resolve)
    },
    {
        path: '/update/disasterInfo',
        name: '更新灾情预测',
        component: resolve => require(['../views/update/DisasterInfo'], resolve)
    },
    {
        path: '/update/disasterPrediction',
        name: '更新灾情预测',
        component: resolve => require(['../views/update/DisasterPrediction'], resolve)
    },
    {
        path: '/update/landslideRecord',
        name: '更新滑坡',
        component: resolve => require(['../views/update/LandslideRecord'], resolve)
    },
    {
        path: '/update/masonryStructure',
        name: '更新砖混结构房屋破坏',
        component: resolve => require(['../views/update/MasonryStructure'], resolve)
    },
    {
        path: '/update/missingStatistics',
        name: '更新失踪人数',
        component: resolve => require(['../views/update/MissingStatistics'], resolve)
    },
    {
        path: '/update/trafficDisaster',
        name: '更新交通',
        component: resolve => require(['../views/update/TrafficDisaster'], resolve)
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
