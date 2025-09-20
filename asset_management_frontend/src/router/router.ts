import { createRouter, createWebHistory } from 'vue-router'

// 匯入頁面元件
import Board from '../view/Board.vue'

const routes = [
  { path: '/', name: 'board', component: Board }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
