<template>
  <div class="column">
    <div class="column-header">
      <h3 class="column-title">{{ column.title }}</h3>
      <button class="delete-btn" @click="$emit('remove-column', column.id)" title="刪除欄位">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <button class="add-sub-btn" @click="$emit('add-sub', column.id)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      新增小標題
    </button>

    <draggable
      v-model="column.subCategoryList"
      group="subCategoryList"
      item-key="id"
      class="sub-categories-container"
      :animation="150"
      :ghost-class="'sub-drag-ghost'"
      :chosen-class="'sub-drag-chosen'"
      :force-fallback="false"
      :fallback-tolerance="0"
      :scroll-sensitivity="100"
      :scroll-speed="15"
    >
      <template v-if="column.subCategoryList.length === 0">
        <div class="empty-placeholder">
          <div class="empty-icon">📋</div>
          <p>拖拉小標題到這裡</p>
        </div>
      </template>

      <template #item="{ element: sub }">
        <SubCategory
          :sub="sub"
          :column-id="column.id"
          :editing-sub-id="editingSubId"
          @update:editing-sub-id="$emit('update:editing-sub-id', $event)"
          @remove-sub="$emit('remove-sub', column.id, sub.id)"
          @add-item="$emit('add-item', column.id, sub.id)"
          @remove-item="$emit('remove-item', column.id, sub.id, $event)"
        />
      </template>
    </draggable>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import SubCategory from './SubCategory.vue'

defineProps({
  column: {
    type: Object,
    required: true
  },
  editingSubId: {
    type: String,
    default: null
  }
})

defineEmits([
  'remove-column',
  'add-sub',
  'remove-sub',
  'add-item',
  'remove-item',
  'update:editing-sub-id'
])
</script>

<style scoped>
.column {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(220, 220, 220, 0.3); /* 最淺 */
  border-radius: 16px;
  padding: 20px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.column:hover {
  /* transform: translateY(-2px); */
  border-color: rgba(220, 220, 220, 0.3); 
}

.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(200, 200, 200, 0.4);
}

.column-title {
  margin: 0;
  color: #1a1a1a;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.delete-btn {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-btn:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: #ef4444;
  transform: scale(1.05);
}

.add-sub-btn {
  width: 100%;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 20px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.add-sub-btn:hover {
  transform: translateY(-1px);
}

.sub-categories-container {
  flex: 1;
  min-height: 200px;
}

.empty-placeholder {
  padding: 40px 20px;
  text-align: center;
  color: #4a4a4a;
  border: 6px dashed rgba(26, 26, 26, 0.4);
  border-radius: 12px;
  background: rgba(240, 240, 240, 0.5);
  transition: all 0.3s ease;
}

.empty-placeholder:hover {
  border-color: rgba(26, 26, 26, 0.6);
  background: rgba(235, 235, 235, 0.7);
  color: #2a2a2a;
}

.empty-icon {
  font-size: 24px;
  margin-bottom: 12px;
}

.empty-placeholder p {
  margin: 0;
  font-size: 14px;
}

:global(.sub-drag-ghost) {
  opacity: 1 !important;
  background: transparent !important;
  border: 4px dashed #1a1a1a !important;
  box-shadow: none !important;
  transform: none !important;
  border-radius: 8px !important;
}

:global(.sub-drag-chosen) {
  opacity: 1 !important;
  box-shadow: none !important;
}

</style>