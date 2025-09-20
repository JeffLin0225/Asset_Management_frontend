<template>
  <div class="board">
    <draggable
      v-model="columns"
      group="columns"
      item-key="id"
      class="board-container"
      :animation="200"
      :ghost-class="'drag-ghost'"
      :chosen-class="'drag-chosen'"
      :drag-class="'drag-active'"
      :force-fallback="false"
      :fallback-tolerance="0"
      :scroll-sensitivity="100"
      :scroll-speed="20"
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

<script setup>
import { reactive, ref } from 'vue'
import draggable from 'vuedraggable'
import Column from '../components/Column.vue'

const columns = reactive([
  { 
    id: 'asset', 
    title: '資產', 
    subCategories: [
      { 
        id: 'cash', 
        title: '現金', 
        items: [
          { id: 1, name: '錢包', amount: 5000, note: '日常現金' }
        ] 
      }
    ] 
  },
  { 
    id: 'liability', 
    title: '負債', 
    subCategories: [
      { 
        id: 'credit', 
        title: '信用卡', 
        items: [
          { id: 2, name: '台新卡', amount: -2000, note: '水電費' }
        ] 
      }
    ] 
  },
  { 
    id: 'other', 
    title: '其他', 
    subCategories: [] 
  }
])

const editingSubId = ref(null)

const updateEditingSubId = (value) => {
  editingSubId.value = value
}

const removeColumn = (id) => {
  const idx = columns.findIndex(c => c.id === id)
  if (idx !== -1) columns.splice(idx, 1)
}

const addSubCategory = (columnId) => {
  const col = columns.find(c => c.id === columnId)
  if (col) {
    col.subCategories.push({ 
      id: Date.now().toString(), 
      title: '新小標題', 
      items: [] 
    })
  }
}

const removeSubCategory = (columnId, subId) => {
  const col = columns.find(c => c.id === columnId)
  if (col) {
    col.subCategories = col.subCategories.filter(s => s.id !== subId)
  }
}

const addItem = (columnId, subId) => {
  const col = columns.find(c => c.id === columnId)
  const sub = col?.subCategories.find(s => s.id === subId)
  if (sub) {
    sub.items.push({ 
      id: Date.now(), 
      name: '', 
      amount: 0, 
      note: '' 
    })
  }
}

const removeItem = (columnId, subId, itemId) => {
  const col = columns.find(c => c.id === columnId)
  const sub = col?.subCategories.find(s => s.id === subId)
  if (sub) {
    sub.items = sub.items.filter(i => i.id !== itemId)
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

/* 拖拽時的預覽樣式 - 黑色虛線 */
:global(.drag-ghost) {
  opacity: 1 !important;
  background: transparent !important;
  border: 5px dashed #1a1a1a !important;
  box-shadow: none !important;
  transform: none !important;
  border-radius: 8px !important;
}

:global(.drag-chosen) {
  opacity: 1 !important;
  z-index: 1000;
  box-shadow: none !important;
}

:global(.drag-active) {
  opacity: 1 !important;
  box-shadow: none !important;
}
</style>