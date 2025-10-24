<template>
  <div class="layout">
    <!-- 懸浮選單 -->
    <nav class="floating-nav">
      <!-- 首頁 -->
      <router-link
        to="/"
        class="nav-item"
        :class="{ active: $route.path === '/' }"
      >
        <Icon icon="mdi:home" class="nav-icon" />
        <span>首頁</span>
      </router-link>

      <!-- 資產總覽 -->
      <router-link
        to="/assetDashboard"
        class="nav-item"
        :class="{ active: $route.path === '/assetDashboard' }"
      >
        <Icon icon="mdi:chart-bar" class="nav-icon" />
        <span>資產總覽</span>
      </router-link>

      <!-- 資產編輯 -->
      <router-link
        to="/assetDraggable"
        class="nav-item"
        :class="{ active: $route.path === '/assetDraggable' }"
      >
        <Icon icon="mdi:pencil" class="nav-icon" />
        <span>資產編輯</span>
      </router-link>

      <!-- GitHub 外部連結 -->
      <a
        href="https://github.com/"
        class="nav-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="octicon:mark-github-16" class="nav-icon" />
        <span>GitHub</span>
      </a>

      <!-- 使用者資訊 -->
      <div class="nav-item" v-if="userName" @click="toggleMenu">
        <Icon icon="octicon:feed-person-16" class="nav-icon" />
        <span>&thinsp;{{ userName }}</span>

        <!-- 下拉選單 -->
        <div v-if="showMenu" class="dropdown">
          <div class="dropdown-item" @click="doLogout">
            <Icon icon="material-symbols:logout" class="nav-icon" />
            <span>登出</span>
          </div>
        </div>
      </div>
      
      <div class="nav-item" v-if="!userName" @click="doLogin">
        <Icon icon="material-symbols:logout" class="nav-icon" />
        <span>登入</span>
      </div>
    </nav>

    <!-- 主內容 -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { onMounted ,ref} from 'vue';
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import { login } from '../api/loginApi';

const router = useRouter()
const userName = ref('')
const showMenu = ref(false)

onMounted(()=>{
  userName.value = localStorage.getItem('userName')
})

const doLogin = () => {
  // 清掉 session/localStorage
  
  router.push('/login')
  // 如果需要，也可以加上 
}
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const doLogout = () => {
  localStorage.removeItem('userName')
  localStorage.removeItem('access_token')
  userName.value = ''
  showMenu.value = false
  
  if (router.currentRoute.value.path === '/') {
    // 已經在首頁 → 強制刷新
    window.location.reload()
  } else {
    // 不是首頁 → 導去首頁
    router.push('/')
  }
}
</script>

<style scoped>
.layout {
  /* background: #7e7878; */
  color: #fff;
  min-height: 100vh;
  padding-top: 80px;
}

/* 懸浮選單 */
.floating-nav {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(20, 20, 20, 0.9);
  border: 2px solid white;
  border-radius: 12px;
  padding: 8px 20px;
  display: flex;
  gap: 32px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.nav-item {
  display: flex;              /* 讓 icon + 文字水平對齊 */
  align-items: center;        /* 垂直置中 */
  gap: 6px;                   /* icon 與文字間距 */
  color: #ccc;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  padding-bottom: 4px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-item:hover {
  color: #fff;
  border-bottom: 3px dashed #fff; /* 白色虛線 */
  padding-bottom: 2px;            /* 保持文字與底線間距 */
}

.nav-item.active {
  color: #fff;
  border-bottom: none;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  border-radius: 1px;
}

.nav-icon {
  font-size: 20px;            
  color: #fff;            
  flex-shrink: 0;     
}

/* 主內容 */
.main-content {
  padding: 32px;
}

/* 過場動畫 */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 登出畫面 */
.dropdown {
  position: absolute;
  top: 120%;
  left: 0;
  background: #222;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 6px 12px;
  z-index: 2000;
  min-width: 100px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  cursor: pointer;
  padding: 4px 0;
}

.dropdown-item:hover {
  color: #ff6b6b;
  border-bottom: 3px dashed #ff6b6b; /* 白色虛線 */
  padding-bottom: 2px;            /* 保持文字與底線間距 */
}
</style>
