import { createRouter, createWebHistory } from 'vue-router'

// 匯入頁面元件
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import AssetDraggable from '../view/AssetDraggable.vue'
import AssetDashboard from '../view/AssetDashboard.vue'


const routes = [
  { path: '/' , name: 'home', component: Home },
  { path: '/login' , name: 'login', component: Login },
  { path: '/assetDraggable' , name: 'assetDraggable', component: AssetDraggable },
  { path: '/assetDashboard' , name: 'assetDashboard', component: AssetDashboard },

]

export default createRouter({
  history: createWebHistory(),
  routes
})
