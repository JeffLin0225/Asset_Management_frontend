<template>
  <div class="board">
    <!-- 儲存狀態 -->
    <div class="save-status" :class="{ 'saving': isSaving, 'saved': isSaved && !isSaving }">
      <div v-if="isSaving" class="spinner">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <svg v-if="isSaved && !isSaving" class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
    </div>

    <!-- 拖移 -->
    <draggable
      v-model="columns"
      group="columns"
      item-key="id"
      class="board-container"
      :animation="200"
      :ghost-class="'drag-ghost'"
      :chosen-class="'drag-chosen'"
      :drag-class="'drag-active'"
    >
      <template #item="{ element: col }">
        <Column
          :column="col"
          :editing-sub-id="editingSubId"
          @remove-column="removeColumn"
          @add-sub="addSubCategory"
          @remove-sub="removeSubCategory"
          @add-item="addItem"
          @remove-item="removeItem"
          @update:editing-sub-id="updateEditingSubId"
        />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import draggable from 'vuedraggable'
import debounce from 'lodash.debounce'

import Column from '../components/Column.vue'
import type { Category, SubCategory, Card } from '../type/Asset'

const isSaving = ref(false)
const isSaved = ref(true)
const columns = ref<Category[]>([]) 

// 儲存資料
const saveDate = () => {
  console.log('資料已更新:', JSON.parse(JSON.stringify(columns.value)))
  console.log('正在儲存至後端...')}

// 抖動
const debouncedSave = debounce(async () => {
  // 儲存後端
  await saveDate() 

  isSaving.value = false  
  isSaved.value = true
  
  // 已儲存消失
  setTimeout(() => { 
    isSaved.value = false
  }, 2000)

}, 1000)

// 初始化資產資料
const initData = () => {
  columns.value = [
    { id: 'asset', title: '資產', order: 1, updatedTime: new Date().toISOString(), subCategoryList: [] },
    { id: 'liability', title: '負債', order: 2, updatedTime: new Date().toISOString(), subCategoryList: [] },
    { id: 'other', title: '其他', order: 3, updatedTime: new Date().toISOString(), subCategoryList: [] }
  ]
}

onMounted(() => {
  initData()
})

watch(columns, () => {
  isSaving.value = true
  isSaved.value = false
  debouncedSave()
}, { deep: true })

// 正在輸入框 編輯中
const editingSubId = ref<string | null>(null)

const updateEditingSubId = (value: string | null) => {
  editingSubId.value = value
}

const removeColumn = (id: string) => {
  const idx = columns.value.findIndex(c => c.id === id)
  if (idx !== -1) columns.value.splice(idx, 1)
}

// ########## 小標題 ##########
const addSubCategory = (categoryId: string) => {
  const col = columns.value.find(c => c.id === categoryId)
  if (col) {
    const newSub: SubCategory = {
      id: Date.now().toString(),
      title: '請輸入小標題名稱',
      order: col.subCategoryList.length + 1,
      cardList: [],   // ✅ 符合型別
      updatedTime: new Date().toISOString()
    }
    col.subCategoryList.push(newSub)   // ✅ 符合型別
  }
}

const removeSubCategory = (categoryId: string, subId: string) => {
  const col = columns.value.find(c => c.id === categoryId)
  if (col) {
    col.subCategoryList = col.subCategoryList.filter((s: { id: string }) => s.id !== subId)
  }
}

// ########## 卡片 ##########
const addItem = (categoryId: string, subId: string) => {
  const col = columns.value.find(c => c.id === categoryId)
  const sub = col?.subCategoryList.find(s => s.id === subId)
  if (sub) {
    const newCard: Card = {
      id: Date.now().toString(),
      name: '',
      amount: 0,
      note: '',
      order: sub.cardList.length + 1,
      updatedTime: new Date().toISOString()
    }
    sub.cardList.push(newCard)
  }
}

const removeItem = (categoryId: string, subId: string, itemId: string) => {
  const col = columns.value.find(c => c.id === categoryId)
  const sub = col?.subCategoryList.find(s => s.id === subId)
  if (sub) {
    sub.cardList = sub.cardList.filter(i => i.id !== itemId)
  }
}
</script>

<style scoped>
.board {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.board-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  min-height: calc(100vh - 48px);
  max-width: 1400px;
  margin: 0 auto;
}

:global(.drag-ghost) {
  opacity: 1 !important;
  background: transparent !important;
  border: 5px dashed #1a1a1a !important;
  border-radius: 8px !important;
}

/* 儲存狀態 */
.save-status {
  position: fixed;
  top: 20px; /* 改為左上角 */
  left: 20px;
  width: 40px;
  height: 40px;
  background: #f8fafc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1000;
  border:3px solid  #9a5cb4;
}

.save-status.saving,
.save-status.saved {
  opacity: 1;
}

.save-status.saved {
  background: #f8fafc; /* 綠色背景 */
  border:3px solid #3ebe07;
}

.spinner {
  width: 24px;
  height: 24px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dot {
  width: 6px;
  height: 6px;
  background: linear-gradient(90deg, #3498db, #8e44ad); /* 漸變色 */
  border-radius: 50%;
  animation: pulse 1.2s ease-in-out infinite;
}

.dot:nth-child(2) { animation-delay: 0.4s; }
.dot:nth-child(3) { animation-delay: 0.8s; }

.checkmark {
  width: 58px; /* 放大 */
  height: 58px;
  display: block;
  animation: scaleCheck 0.3s ease-in-out 0.2s forwards;
}

.checkmark__check {
  stroke: #3ebe07; /* 你的顏色 */
  stroke-width: 8; /* 你的線條寬度 */
  stroke-dasharray: 60; /* 適配放大尺寸 */
  stroke-dashoffset: 60;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.5); opacity: 1; }
}

@keyframes stroke {
  to { stroke-dashoffset: 0; }
}

@keyframes scaleCheck {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
</style>
