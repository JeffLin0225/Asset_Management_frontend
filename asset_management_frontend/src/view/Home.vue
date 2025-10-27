
<template>
    <div>
        <h1>您好：{{userName}}</h1>
    </div>    
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()  
/// 從 query 讀取 ID
const queryId = route.query.ID as string | undefined

if (queryId) {
  localStorage.setItem('userID', queryId)
}

const userName = ref(localStorage.getItem('userName')||'請先登入體驗')

</script>
