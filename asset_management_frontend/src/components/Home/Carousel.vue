<template>
  <div class="carousel-wrapper">
    <el-carousel
      ref="carouselRef"
      :interval="4000"
      type="card"
      height="360px"
      indicator-position="none"
      @change="onChange"
    >
      <el-carousel-item
        v-for="item in items"
        :key="item.id"
        @click="openVideo(item.video)"
      >
        <img :src="item.preview" class="carousel-image" />
        <div class="carousel-title">{{ item.title }}</div>
      </el-carousel-item>
    </el-carousel>

    <!-- 自訂底線指示器 -->
    <div class="line-indicators">
      <span
        v-for="(item, i) in items"
        :key="item.id"
        class="line"
        :class="{ active: i === activeIndex }"
        @click="go(i)"
        @mouseenter="go(i)"
      ></span>
    </div>
  </div>

  <el-dialog
    v-model="showVideo"
    width="70%"
    class="video-dialog"
    :show-close="false"
    center
  >
    <video :src="currentVideo" controls autoplay class="video-player" />
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  items: { id: number; title: string; preview: string; video: string }[]
}>()

const carouselRef = ref()
const activeIndex = ref(0)

const onChange = (index: number) => {
  activeIndex.value = index
}

const go = (index: number) => {
  activeIndex.value = index
  carouselRef.value?.setActiveItem(index)
}

const showVideo = ref(false)
const currentVideo = ref('')
const openVideo = (url: string) => {
  currentVideo.value = url
  showVideo.value = true
}
</script>

<style scoped>
.carousel-wrapper {
  background: #111;
  border: 3px solid whitesmoke;
  padding: 60px;
  border-radius: 12px;
}

.carousel-image {
  border: 3px solid whitesmoke;
  width: 80%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
}

.carousel-title {
  position: absolute;
  bottom: 8px;
  left: 12px;
  color: white;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
  border-radius: 4px;
}

.carousel-card {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 比例 */
}
.carousel-card img {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


/* 自訂底線指示器 */
.line-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}
.line {
  display: block;
  width: 40px;
  height: 3px;
  background: #444;
  border-radius: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.line:hover {
  background: #666;
}
.line.active {
  background: whitesmoke; /* 主題色 */
  width: 50px;         /* 活動狀態稍微加長 */
}
.video-dialog .el-dialog {
  background: #000;
  border-radius: 12px;
}
.video-player {
  width: 100%;
  border-radius: 8px;
}
</style>
