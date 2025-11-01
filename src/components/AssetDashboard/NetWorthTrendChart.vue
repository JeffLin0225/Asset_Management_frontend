<template>
  <div ref="chartRef" style="height: 400px;"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps<{
  snapshots: Array<{
    date: string
    totals: { netWorth: number }
  }>
}>()

const chartRef = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null

function updateChart() {
  if (!chart) return

  const dates = props.snapshots.map(s => s.date)
  const values = props.snapshots.map(s => s.totals.netWorth)

  chart.setOption({
    title: {
      text: '淨值趨勢圖',
      left: 'center',
      textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#8D6E63'
      }
    },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: dates,
      axisLine: { lineStyle: { color: '#BCAAA4' } },
      axisLabel: { color: '#5D4037' }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#BCAAA4' } },
      axisLabel: { color: '#5D4037' },
      splitLine: { lineStyle: { color: '#EFEBE9' } }
    },
    series: [{
      name: '淨值',
      type: 'line',
      data: values,
      smooth: false,
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: {
        color: '#FFD700',
        width: 3
      },
      itemStyle: {
        color: '#FFD700'
      },
      emphasis: {
        focus: 'series',
        itemStyle: {
          borderWidth: 2,
          borderColor: '#000000'
        }
      }
    }]
  })
}

onMounted(() => {
  chart = echarts.init(chartRef.value!)
  updateChart()
})

watch(() => props.snapshots, updateChart, { deep: true })
</script>
