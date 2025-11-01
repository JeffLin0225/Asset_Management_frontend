import { createRouter, createWebHistory } from 'vue-router'
import { ElMessage } from 'element-plus'

// 匯入頁面元件
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import AssetDraggable from '../view/AssetDraggable.vue'
import AssetDashboard from '../view/AssetDashboard.vue'

// 建立 router 實例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/assetDraggable', name: 'assetDraggable', component: AssetDraggable, meta: { requiresAuth: true } },
    { path: '/assetDashboard', name: 'assetDashboard', component: AssetDashboard, meta: { requiresAuth: true } },
  ]
})

// 加入全域導航守衛
router.beforeEach((to, _, next) => {
  const token = localStorage.getItem('access_token')
  if (to.meta.requiresAuth && !token) {
    ElMessage.warning('請先登入')
    next('/login')
  } else {
    next()
  }
})

export default router
