<template>
  <div class="sub-column">
    <div class="sub-header">
      <template v-if="editingSubId === sub.id">
        <input
          v-model="sub.title"
          @blur="stopEditing"
          @keyup.enter="stopEditing"
          class="edit-input"
          ref="editInput"
        />
      </template>
      <template v-else>
        <h4 class="sub-title" @dblclick="startEditing">{{ sub.title }}</h4>
      </template>
      <button class="delete-btn" @click="$emit('remove-sub')" title="刪除小標題">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <button class="add-btn" @click="$emit('add-item')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      新增卡片
    </button>

    <draggable
      v-model="sub.cardList"
      group="items"
      item-key="id"
      class="items-container"
      :animation="120"
      :ghost-class="'item-drag-ghost'"
      :chosen-class="'item-drag-chosen'"
      :force-fallback="false"
      :fallback-tolerance="0"
      :scroll-sensitivity="100"
      :scroll-speed="10"
    >
      <template v-if="sub.cardList.length === 0">
        <div class="empty-placeholder">
          <div class="empty-icon">💳</div>
          <p>拖拉卡片到這裡</p>
        </div>
      </template>

      <template #item="{ element: item }">
        <CardItem 
          :item="item" 
          @remove="$emit('remove-item', item.id)" 
        />
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'
import draggable from 'vuedraggable'
import CardItem from './AssetDraggable/CardItem.vue'

const props = defineProps({
  sub: {
    type: Object,
    required: true
  },
  columnId: {
    type: String,
    required: true
  },
  editingSubId: {
    type: String,
    default: null
  }
})

const emit = defineEmits([
  'remove-sub',
  'add-item',
  'remove-item',
  'update:editing-sub-id'
])

const editInput = ref(null)

const startEditing = () => {
  emit('update:editing-sub-id', props.sub.id)
}

const stopEditing = () => {
  emit('update:editing-sub-id', null)
}

watch(() => props.editingSubId, async (newVal) => {
  if (newVal === props.sub.id) {
    await nextTick()
    editInput.value?.focus()
    editInput.value?.select()
  }
})
</script>

<style scoped>
.sub-column {
  background: rgba(248, 250, 252, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(180, 180, 180, 0.4); /* 中等 */
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  transition: all 0.2s ease;
}

.sub-column:hover {
  background: rgba(245, 247, 250, 0.95);
  border: 1px solid rgba(180, 180, 180, 0.4); /* 中等 */
  transform: translateY(-0.5px);
}

.sub-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.sub-title {
  margin: 0;
  color: #2a2a2a;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
  flex: 1;
  user-select: none;
}

.sub-title:hover {
  background: rgba(220, 220, 220, 0.3);
  color: #1a1a1a;
}

.edit-input {
  border: 2px solid #4f46e5;
  background: rgba(255, 255, 255, 0.95);
  color: #1a1a1a;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 600;
  flex: 1;
  outline: none;
}

.sub-column .delete-btn {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 6px;
  padding: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
}

.sub-column .delete-btn:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: #ef4444;
  transform: scale(1.1);
}

.add-btn {
  width: 100%;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 14px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.add-btn:hover {
  transform: translateY(-1px);
}

.items-container {
  min-height: 80px;
}

.sub-column .empty-placeholder {
  padding: 24px 16px;
  text-align: center;
  color: #5a5a5a;
  border: 4px dashed rgba(26, 26, 26, 0.3);
  border-radius: 8px;
  background: rgba(245, 245, 245, 0.6);
  transition: all 0.2s ease;
}

.sub-column .empty-placeholder:hover {
  border-color: rgba(26, 26, 26, 0.5);
  background: rgba(240, 240, 240, 0.8);
  color: #3a3a3a;
}

.sub-column .empty-icon {
  font-size: 18px;
  margin-bottom: 8px;
}

.sub-column .empty-placeholder p {
  margin: 0;
  font-size: 12px;
}

:global(.item-drag-ghost) {
  opacity: 1 !important;
  background: transparent !important;
  border: 3px dashed #1a1a1a !important;
  box-shadow: none !important;
  transform: none !important;
  border-radius: 6px !important;
}
</style>