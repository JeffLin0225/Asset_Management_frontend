<template>
  <el-carousel :interval="4000" type="card" height="240px">
    <el-carousel-item
      v-for="item in items"
      :key="item.id"
      @click="openVideo(item.video)"
    >
      <img :src="item.preview" class="carousel-image" />
      <div class="carousel-title">{{ item.title }}</div>
    </el-carousel-item>
  </el-carousel>

  <el-dialog v-model="showVideo" width="60%">
    <video :src="currentVideo" controls style="width: 100%" />
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  items: { id: number; title: string; preview: string; video: string }[]
}>()

const showVideo = ref(false)
const currentVideo = ref('')

const openVideo = (url: string) => {
  currentVideo.value = url
  showVideo.value = true
}
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
</style>
