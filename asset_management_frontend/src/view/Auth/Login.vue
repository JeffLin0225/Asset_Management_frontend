<template>
  <div class="pin-container">
    <el-card class="pin-card" shadow="hover">
      <h2 class="title">輸入 PIN 碼</h2>
      <div class="pin-inputs">
        <el-input
          v-for="(_, index) in pinDigits"
          :key="index"
          v-model="pinDigits[index]"
          maxlength="1"
          size="large"
          class="pin-box"
          :class="{ filled: pinDigits[index] !== '' }"
          @input="onInput(index)"
          @keydown.backspace.prevent="onBackspace(index)"
          ref="inputRefs"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { ElMessage } from 'element-plus'
import { login } from '../../api/loginApi'

const pinDigits = ref(['', '', '', ''])
const inputRefs = ref([]) as any

function onInput(index: number) {
  pinDigits.value[index] = pinDigits.value[index].replace(/\D/g, '')
  if (pinDigits.value[index] && index < 3) {
    nextTick(() => inputRefs.value[index + 1]?.focus())
  }
}

function onBackspace(index: number) {
  if (!pinDigits.value[index] && index > 0) {
    nextTick(() => inputRefs.value[index - 1]?.focus())
  } else {
    pinDigits.value[index] = ''
  }
}

watch(pinDigits, async (val) => {
  if (val.every(d => d !== '')) {
    const pin = val.join('')
    try {
      const res = await login({ID:'cb67a8f12e' , pin:pin})
      ElMessage.success(res.ID + '登入成功'+res.access_token  )
    } catch(err:any) {
      const msg = err.response?.data?.detail || 'PIN 碼錯誤'
      ElMessage.error(msg)
      pinDigits.value = ['', '', '', '']
      nextTick(() => inputRefs.value[0]?.focus())
    }
  }
}, { deep: true })
</script>

<style scoped>
.pin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212; /* 深黑灰背景 */
}

.pin-card {
  width: 300px;
  text-align: center;
  padding: 20px;
  border-radius: 16px;
  background-color: #1E1E1E; /* 卡片背景 */
  border: 1px solid #2C2C2C; /* 暗灰邊框 */
  box-shadow: 0 4px 40px rgba(231, 225, 225, 0.6);
}

.title {
  margin-bottom: 20px;
  color: white; /* 淺灰白文字 */
  font-weight: 600;
}

.pin-inputs {
  display: flex;
  justify-content: space-between;
}

.pin-box {
  width: 60px;
}

/* 文字樣式 */
.pin-box :deep(input) {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
}

/* 預設狀態 */
.pin-box :deep(.el-input__wrapper) {
  border: 2px solid #3A3A3A;
  border-radius: 12px;
  background-color: #2A2A2A;
  transition: all 0.25s ease;
}

/* 第一格預設突出 */
.pin-box:first-child :deep(.el-input__wrapper) {
  border-color: #FFFFFF; /* 白色邊框 */
  background-color: #2E2E2E; /* 稍亮背景 */
  box-shadow: 0 0 6px rgba(255,255,255,0.3);
}

/* 聚焦狀態（所有格） */
.pin-box :deep(.el-input__wrapper.is-focus) {
  border-color: #FFFFFF;
  background-color: #000000;
  box-shadow: 0 0 10px rgba(255,255,255,0.5);
  transform: scale(1.2); /* 輕微放大 */
}

/* 已輸入狀態 */
.pin-box.filled :deep(.el-input__wrapper) {
  border-color: #FFFFFF;
  background-color: #333333;
}

</style>
