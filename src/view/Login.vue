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
      <el-button class="guest-entry" plain @click="guestDialogVisible = true">
        以訪客身分體驗
      </el-button>

    <!-- 訪客登入 Dialog -->
    <el-dialog 
      class="guest-card"
      v-model="guestDialogVisible"
      
      width="400"
    >
      <div class="guest-content">
        <h2>訪客體驗帳號</h2>
        <p>(<strong>PIN碼 ：</strong>0000)</p>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button class="guest-button" @click="guestDialogVisible = false">取消</el-button>
          <el-button
            class="guest-button" 
            type="primary"
            @click="fillGuestPin"
          >
            一鍵訪客登入！
          </el-button>
        </div>
      </template>
    </el-dialog>

    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { login } from '../api/loginApi'

const guestDialogVisible = ref(false)

const router = useRouter()
const pinDigits = ref(['', '', '', '']) // pin碼：原始狀態
const inputRefs = ref([]) as any
const userId = ref(localStorage.getItem('userID') || '06b06c76-0df1-4b6a-af38-89784ab24e66')

// 訪客登入
const fillGuestPin = () => {
  userId.value = '06b06c76-0df1-4b6a-af38-89784ab24e66'
  pinDigits.value = ['0','0','0','0']
  guestDialogVisible.value = false
}

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

// 監控使用者輸入
watch(pinDigits, async (val) => {
  if (val.every(d => d !== '')) {
    const pin = val.join('')
    try {
      console.log("ID:"+userId.value)
      const res = await login({ID: userId.value , pin:pin})
      localStorage.setItem('userID' , res.ID)
      localStorage.setItem('userName' , res.name)
      localStorage.setItem('access_token' , res.access_token)

      // 登入成功
      ElMessage.success('登入成功')
      router.push('/') // 倒轉首頁

    } catch(err:any) {
      const msg = err.response?.data?.detail || '伺服器錯誤，請稍後再試'
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
  position: relative;            /* 讓按鈕的 absolute 以卡片為準 */
  width: 300px;
  text-align: center;
  padding: 20px;
  padding-bottom: 68px;          /* 預留空間給右下角按鈕 */
  border-radius: 16px;
  background-color: #1E1E1E;
  border: 1px solid #2C2C2C;
  box-shadow: 0 4px 40px rgba(231, 225, 225, 0.6);
  overflow: visible;             /* 確保底部內容不被裁切 */
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

/* 隱藏對話框 */
.guest-entry {
  position: absolute;
  right: 16px;
  bottom: 16px;
  border-color: #060505;
  background-color: #333333;
}

.guest-entry:hover {
  color: #FFFFFF;
  border-color: #f1e3e3;
  background-color: #161414;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  /* width: 320px; */
}
.guest-card {
  background-color: #222 !important;
  color: #fff;
}
.guest-button {
  color: #8e8080;
  border-color: #060505;
  background-color: #333333;
}
.guest-button:hover {
  color: #FFFFFF;
  border-color: #f1e3e3;
  background-color: black;
  /* width: 320px; */
}
.guest-content ul {
  margin-top: 8px;
  padding-left: 18px;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

</style>
