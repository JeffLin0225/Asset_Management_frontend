
<template>
  <div class="home-wrapper">
    <header class="home-header">
      <h1>您好：{{ userName }}</h1>
    </header>    

    <div class="home">
      <Carousel :items="carouselItems" />
      <!-- <FeaturePanel />
      <UpdateInfo /> -->
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Carousel from '../components/Home/Carousel.vue'

const route = useRoute()  
/// 從 query 讀取 ID
const queryId = route.query.ID as string | undefined

if (queryId) {
  localStorage.setItem('userID', queryId)
}

const userName = ref(localStorage.getItem('userName')||'請先登入體驗')


const carouselItems = [
  {
    id: 1,
    title: '訪客登入教學',
    preview: 'http://cdn.jxwebs.com/img/loginImg.png',
    video: 'https://cdn.jxwebs.com/video/loginVideo.mp4'
  },
  {
    id: 2,
    title: '資產管理',
    preview: 'http://cdn.jxwebs.com/img/assetImg.png',
    video: 'https://cdn.jxwebs.com/video/assetVideo.mp4'
  },
  {
    id: 3,
    title: '資產分析',
    preview: 'http://cdn.jxwebs.com/img/analyzeImg.png',
    video: 'https://cdn.jxwebs.com/video/analyzeVideo.mp4'
  }
]

</script>
<style scoped>
.home-header {
  margin-bottom: 24px;
  text-align: center;
}
.home-header h1 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 2px 6px rgba(0,0,0,0.6);
}
.feature-panel {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}
.feature-card {
  flex: 1;
  cursor: pointer;
  transition: transform 0.2s;
}
.feature-card:hover {
  transform: translateY(-4px);
}
</style>