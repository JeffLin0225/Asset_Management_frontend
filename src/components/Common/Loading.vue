<!-- components/LoadingOverlay.vue -->
<template>
  <transition name="fade">
    <div v-if="loading.active" class="loading-overlay">
      <div class="loader">
        <span v-for="n in 12" :key="n"></span>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useLoadingStore } from '../../store/loading_store'
const loading = useLoadingStore()
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 10, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* 炫酷旋轉光圈 */
.loader {
  position: relative;
  width: 80px;
  height: 80px;
}
.loader span {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top-color: #d3f5e4;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}
.loader span:nth-child(2) {
  border-top-color: #c9fae6;
  animation-delay: -0.6s;
}
@keyframes spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
}

/* 過場淡入淡出 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
