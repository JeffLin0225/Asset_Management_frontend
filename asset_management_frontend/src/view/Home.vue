
<template>
  <div class="home-wrapper">
    <div>
      <h1>您好：{{ userName }}</h1>
    </div>    

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
    title: '資產編輯教學',
    preview: 'https://cdn.jxwebs.com/img/aimga.png',
    video: 'https://cdn.jxwebs.com/videos/tutorial1.mp4'
  },
  {
    id: 2,
    title: '拖曳分類示範',
    preview: 'https://cdn.jxwebs.com/img/bimgb.png',
    video: 'https://cdn.jxwebs.com/videos/tutorial2.mp4'
  },
  {
    id: 3,
    title: '拖曳分類示範',
    preview: 'https://cdn.jxwebs.com/img/bimgb.png',
    video: 'https://cdn.jxwebs.com/videos/tutorial2.mp4'
  }
]

</script>
<style scoped>
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