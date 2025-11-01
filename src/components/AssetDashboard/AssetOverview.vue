<template>
  <div class="summary-card">
  
  <div class="summary-values">
    <span class="title"><strong>資產總覽：</strong></span>
    <strong class="asset">資產：{{ totals.assets.toLocaleString() }}</strong>
    <span class="divider">｜</span>
    <strong class="liability">負債：{{ totals.liabilities.toLocaleString() }}</strong>
    <span class="divider">｜</span>
    <strong :class="totals.netWorth >= 0 ? 'net-positive' : 'net-negative'">
      淨值：{{ totals.netWorth.toLocaleString() }}
    </strong>
  </div>
</div>

</template>

<script setup>
defineProps({
  totals: Object
})
</script>
<style>
.title {
  color: rgb(67, 63, 63);
}
.asset {
  color: #4CAF50; /* 綠色 */
  font-weight: 600;
}

.liability {
  color: #F44336; /* 紅色 */
  font-weight: 600;
}

.net-positive {
  color: #FF9800;
  font-weight: 600;
}

.net-negative {
  color: #f40808; /* 代表負值 */
  font-weight: 600;
}

.divider {
  margin: 0 12px;
  color: #999;
}

.summary-values {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 16px;
}

</style>
