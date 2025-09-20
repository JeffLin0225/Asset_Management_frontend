<template>
  <div class="card">
    <div class="card-header">
      <button class="delete-btn" @click="$emit('remove')" title="刪除卡片">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="card-content">
      <input 
        v-model="item.name" 
        placeholder="輸入名稱..." 
        class="card-input name-input"
      />
      <input 
        v-model.number="item.amount" 
        type="number" 
        placeholder="金額" 
        class="card-input amount-input"
        :class="{ 'negative': item.amount < 0, 'positive': item.amount > 0 }"
      />
      <textarea 
        v-model="item.note" 
        placeholder="備註說明..."
        class="card-textarea"
        rows="2"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})

defineEmits(['remove'])
</script>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6px);
  border: 2px solid rgba(140, 140, 140, 0.6); /* 最深最粗 */
  border-radius: 10px;
  margin-bottom: 12px;
  transition: all 0.2s ease;
  overflow: hidden;
}

.card:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(140, 140, 140, 0.6);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  justify-content: flex-end;
  padding: 8px 12px 0 12px;
}

.card-content {
  padding: 0 16px 16px 16px;
}

.card-input {
  width: 100%;
  background: rgba(248, 250, 252, 0.9);
  border: 1px solid rgba(200, 200, 200, 0.4);
  border-radius: 6px;
  padding: 10px 12px;
  margin-bottom: 10px;
  font-size: 13px;
  color: #2a2a2a;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.card-input:focus {
  outline: none;
  border-color: #4f46e5;
  background: rgba(255, 255, 255, 0.95);
}

.card-input::placeholder {
  color: #888;
}

.name-input {
  font-weight: 500;
}

.amount-input.positive {
  color: #059669;
  border-color: rgba(16, 185, 129, 0.4);
}

.amount-input.negative {
  color: #dc2626;
  border-color: rgba(220, 38, 38, 0.4);
}

.card-textarea {
  width: 100%;
  background: rgba(248, 250, 252, 0.9);
  border: 1px solid rgba(200, 200, 200, 0.4);
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 12px;
  color: #3a3a3a;
  resize: vertical;
  font-family: inherit;
  min-height: 60px;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.card-textarea:focus {
  outline: none;
  border-color: #4f46e5;
  background: rgba(255, 255, 255, 0.95);
}

.card-textarea::placeholder {
  color: #888;
}

.card .delete-btn {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 5px;
  padding: 4px;
  cursor: pointer;
  font-size: 10px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card .delete-btn:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: #ef4444;
  transform: scale(1.1);
}

/* 拖拽時的預覽樣式 - 完全覆蓋所有可能的類名 */
:global(.drag-ghost),
:global(.sub-drag-ghost),
:global(.item-drag-ghost),
:global(.sortable-ghost),
:global(.ghost),
:global([class*="ghost"]) {
  opacity: 1 !important;
  background: transparent !important;
  border: 5px dashed #1a1a1a !important;
  box-shadow: none !important;
  transform: none !important;
  border-radius: 8px !important;
}

:global(.drag-ghost *),
:global(.sub-drag-ghost *),
:global(.item-drag-ghost *),
:global(.sortable-ghost *),
:global(.ghost *),
:global([class*="ghost"] *) {
  opacity: 0 !important;
  visibility: hidden !important;
}

/* 拖拽時的選中樣式 - 保持原始卡片完全不透明 */
:global(.drag-chosen),
:global(.sub-drag-chosen),
:global(.item-drag-chosen),
:global(.sortable-chosen),
:global(.chosen),
:global([class*="chosen"]) {
  opacity: 1 !important;
  box-shadow: none !important;
}

/* Fallback 樣式 */
:global(.sortable-fallback) {
  box-shadow: none !important;
  border: 5px dashed #1a1a1a !important;
  background: transparent !important;
}

/* 放置區域樣式 */
:global(.sortable-drop-placeholder) {
  border: 5px dashed #1a1a1a !important;
  background: transparent !important;
  box-shadow: none !important;
}
</style>