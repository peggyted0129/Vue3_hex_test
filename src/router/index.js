import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router' // hash 模式

const routes = [{
  path: '/',
  name: 'FrontStage',
  component: () => import('../components/FrontStage.vue'),
  children: [
    {
      path: '',
      component: () => import('../views/Home.vue')
    },
    {
      path: 'orderdetail',
      component: () => import('../views/OrderDetail.vue')
    },
    {
      path: 'tmc_cat',
      component: () => import('../views/Tmc_Cat.vue')
    },
    {
      path: 'tmc_hct',
      component: () => import('../views/Tmc_Hct.vue')
    },
    {
      path: 'print',
      component: () => import('../views/Print.vue')
    },
    {
      path: 'invoice',
      component: () => import('../views/Invoice.vue')
    },
    {
      path: 'admin',
      component: () => import('../views/Admin.vue')
    }
  ]
},
{
  path: '/login',
  component: () => import('../views/Login.vue')
}
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(), // hash 模式
  routes
})

export default router
