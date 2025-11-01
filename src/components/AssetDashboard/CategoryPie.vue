<template>
  <div ref="chartRef" style="height: 300px;"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps<{
  data: Record<string, { total: number; items: Record<string, number> }>
  title: string
}>()

const emit = defineEmits<{
  (e: 'navigate', category: string): void
}>()

const chartRef = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null

function getChartData() {
  return Object.entries(props.data)
    .filter(([key]) => key !== 'total')
    .map(([key, value]) => ({
      name: key,
      value: value.total
    }))
}

function updateChart() {
  if (!chart) return
  chart.setOption({
    title: { text: props.title, left: 'center' },
    tooltip: { trigger: 'item' },
    legend: {
      orient: 'horizontal', bottom: 0, left: 'center'
    },
    series: [{
      type: 'pie',
      radius: '50%',
      data: getChartData(),
      label: { formatter: '{b}: ${c} ({d}%)', rich: { b: { fontSize: 14 }, c: { fontSize: 14 }, d: { fontSize: 14 } } }

    }]
  })
}

onMounted(() => {
  if (!chartRef.value) return
  chart = echarts.init(chartRef.value)
  updateChart()

  chart.on('click', (params: any) => {
    emit('navigate', params.name)
  })
})

watch(() => props.data, updateChart, { deep: true })
</script>


