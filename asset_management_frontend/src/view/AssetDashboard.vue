<template>
  <div>
    <div>
    <!-- 資產總覽 -->
    <AssetOverview :totals="latest.totals" />

    <div class="summary-row">
      <!-- 資產｜負債｜其他趨勢圖 -->
      <CategoryTrendChart :snapshots="snapshots" @day-click="handleDayClick" />   

      <!-- 淨值趨勢圖 -->
      <NetWorthTrendChart :snapshots="snapshots" />
    </div>

    <!-- 細項 -->
    <CategoryDetailPie
      v-if="drillCategory && selectedSnapshot"
      :items="getDrillItems()"
      :title="`${drillCategory} 細項`"
    />

    <div class="pie-row">
      <CategoryPie
        v-if="selectedSnapshot"
        :data="selectedSnapshot.assets as any"
        title="資產分布"
        @navigate="handleNavigate"
      />

      <CategoryPie
        v-if="selectedSnapshot"
        :data="selectedSnapshot.liabilities as any"
        title="負債分布"
        @navigate="handleNavigate"
      />

      <CategoryPie
        v-if="selectedSnapshot"
        :data="selectedSnapshot.others as any"
        title="其他分布"
        @navigate="handleNavigate"
      />
    </div>

  </div>
  </div>
</template>

<script setup lang="ts">
import AssetOverview from '../components/AssetDashboard/AssetOverview.vue'
import CategoryTrendChart from '../components/AssetDashboard/CategoryTrendChart.vue'
import CategoryPie from '../components/AssetDashboard/CategoryPie.vue'
import CategoryDetailPie from '../components/AssetDashboard/CategoryDetailPie.vue'
import NetWorthTrendChart from '../components/AssetDashboard/NetWorthTrendChart.vue'

import { ref  } from 'vue'

// 模擬 10 筆快照資料
import mockSnapshots from '../mock/snapshots.json'

const snapshots = ref(mockSnapshots) // 資料
const latest = snapshots.value[snapshots.value.length - 1] 
const drillCategory = ref<string|null>(null)
const selectedSnapshot = ref<typeof mockSnapshots[0] | null>(null)



// 大標題（折線圖選擇） -> 3個 小標題圓餅圖
function handleDayClick({ date, snapshot }: { date: string; snapshot: any }) {
  console.log('使用者點擊日期：', date)
  selectedSnapshot.value = snapshot
}
// 小標題圓餅圖（圓餅圖選擇） -> 細項 1 個圓餅圖 [資產,負債,其他]
function handleNavigate(category:string) {
  console.log('點擊：'+category)
  drillCategory.value = category
}

// 資料切換 (細項 1 個圓餅圖 [資產,負債,其他])
function getDrillItems(): Record<string, number> {
  const snap = selectedSnapshot.value
  const key = drillCategory.value
  if (!snap || !key) return {}

  return (
    (snap.assets as Record<string,any>)[key]?.items ||
    (snap.liabilities as Record<string,any>)[key]?.items ||
    (snap.others as Record<string,any>)[key]?.items ||
    {}
  )
}

</script>
<style scoped>

.pie-row {
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 24px;
}

.pie-row > * {
  /* 容器大小 */
  flex: 1 1 400px;
  max-width: 500px;
  min-width: 300px;
  
  /* 卡片效果 */
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 16px;
  transition: box-shadow 0.3s ease;
}
.summary-row {
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.summary-row > * {
  flex: 1 1 400px;
  min-width: 300px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 10px;
  margin: 10px;
}

</style>
    
