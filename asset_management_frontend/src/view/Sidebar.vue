<template>
  <div class="layout">
    <!-- 懸浮選單 -->
    <nav class="floating-nav">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :class="{ active: $route.path === item.path }"
      >
        {{ item.label }}
      </router-link>
    </nav>

    <!-- 主內容 -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
const menuItems = [
  { path: '/assetDashboard', label: '資產總覽' },
  { path: '/assetDraggable', label: '資產編輯' }
]
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

/* 主內容 */
.main-content {
  padding: 32px;
}
</style>
