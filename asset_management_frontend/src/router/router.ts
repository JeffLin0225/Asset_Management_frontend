import { createRouter, createWebHistory } from 'vue-router'

// 匯入頁面元件
import Login from '../view/Auth/Login.vue'
import Board from '../view/Board.vue'

const routes = [
  { path: '/'      , name: 'board', component: Board },
  { path: '/login' , name: 'login', component: Login }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
