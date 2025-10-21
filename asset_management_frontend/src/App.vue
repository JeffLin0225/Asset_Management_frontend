
<template>
  <div>
    <transition name="fade">
    <Login v-if="isLoginPage" />
    
    <Sidebar v-else />
    </transition>
    <Loading />
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Sidebar from './view/Sidebar.vue'
import Login from './view/Login.vue'
import Loading from './components/Common/Loading.vue'
const route = useRoute()
const isLoginPage = computed(() => route.path === '/login')

</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
