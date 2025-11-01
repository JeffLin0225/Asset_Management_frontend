<template>
  <div class="card">
    <!-- 主列：名稱、金額、按鈕 -->
    <div class="card-row">
      <input v-model="item.name" placeholder="名稱" class="card-input name-input" />

      <input
        v-model.number="item.amount"
        type="number"
        placeholder="金額"
        class="card-input amount-input"
        :class="{ negative: item.amount < 0, positive: item.amount > 0 }"
      />

      <button class="action-btn note-btn" @click="showNote = !showNote">
        {{ showNote ? '收起備註' : '展開備註' }}
      </button>

      <button class="action-btn delete-btn" @click="$emit('remove')" title="刪除卡片">
        ✕
      </button>
    </div>

    <!-- 展開區：備註欄位獨立一行，寬度對齊 -->
    <transition name="fade">
      <div v-if="showNote" class="note-row">
        <textarea
          v-model="item.note"
          placeholder="備註說明..."
          class="card-textarea"
          rows="2"
        ></textarea>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ item: Object })
defineEmits(['remove'])

const showNote = ref(false)
</script>

<style scoped>
.card {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: nowrap;
}

.card-input {
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 13px;
  background: #f9f9f9;
}

.name-input {
  flex: 1;
  min-width: 120px;
}

.amount-input {
  width: 100px;
  text-align: right;
}

.amount-input.positive {
  color: #059669;
  border-color: rgba(16, 185, 129, 0.4);
}

.amount-input.negative {
  color: #dc2626;
  border-color: rgba(220, 38, 38, 0.4);
}

.action-btn {
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  white-space: nowrap;
  border: none;
}

.note-btn {
  background: #4f46e5;
  color: #fff;
}

.note-btn:hover {
  background: #4338ca;
}

.delete-btn {
  background: #ef4444;
  color: #fff;
}

.delete-btn:hover {
  background: #dc2626;
}

.note-row {
  width: 100%;
}

.card-textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 12px;
  background: #fdfdfd;
  resize: vertical;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
