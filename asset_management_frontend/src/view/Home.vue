
<template>
    <div>
        <h1>您好：{{userName}}</h1>
    </div>    
</template>


<script setup lang="ts">
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const userName = ref(localStorage.getItem('userName')||'請先登入體驗')

</script>
