
<template>
    <div>
    <h1>首頁</h1>
  </div>    
</template>


<script setup lang="ts">
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = ref('')

onMounted(()=> {
    const queryId = route.query.ID as string | undefined
    if (queryId) {
        // URL 有帶 ID → 儲存並使用
        userId.value = queryId
        localStorage.setItem('userID', queryId)
    } else {
        // URL 沒帶 → 看 localStorage
        const savedId = localStorage.getItem('userID')
        userId.value = savedId || '06b06c76-0df1-4b6a-af38-89784ab24e66'
    }
})
</script>
