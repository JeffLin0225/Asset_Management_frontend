<template>
  <div ref="chartRef" style="height: 400px;"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps<{
  snapshots: Array<{
    date: string
    assets: { total: number }
    liabilities: { total: number }
    others: { total: number }
  }>
}>()

const emit = defineEmits<{
  (e: 'day-click', payload: { date: string; snapshot: any }): void
}>()

const chartRef = ref<HTMLDivElement | null>(null)
let chart: echarts.ECharts | null = null

function updateChart() {
  if (!chart) return

  const dates = props.snapshots.map(s => s.date)
  const assetSeries = props.snapshots.map(s => s.assets.total)
  const liabilitySeries = props.snapshots.map(s => s.liabilities.total)
  const otherSeries = props.snapshots.map(s => s.others.total)

  chart.setOption({
    title: { text: '資產 / 負債 / 其他 趨勢圖', left: 'center' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['資產', '負債', '其他'], orient: 'horizontal',
    bottom: 10,
    left: 'center'},
    xAxis: { type: 'category', data: dates },
    yAxis: { type: 'value' },
    series: [
      {
        name: '資產',
        type: 'line',
        data: assetSeries,
        smooth: false,
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: { color: '#01B468' },
        itemStyle: {
          color: '#01B468'
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            borderWidth: 2,
            borderColor: '#000000'
          }
        }
      },
      {
        name: '負債',
        type: 'line',
        data: liabilitySeries,
        smooth: false,
        symbol: 'rect',
        symbolSize: 8,
        lineStyle: { color: '#F75000' },
        itemStyle: {
          color: '#F75000'
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            borderWidth: 2,
            borderColor: '#000000'
          }
        }
      },
      {
        name: '其他',
        type: 'line',
        data: otherSeries,
        smooth: false,
                symbol: 'arrow',

        symbolSize: 5,
        lineStyle: { color: '#2894FF' },
        itemStyle: {
          color: '#2894FF'
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            borderWidth: 2,
            borderColor: '#000000'
          }
        }
      }
    ]
  })
}

onMounted(() => {
  if (!chartRef.value) return
  chart = echarts.init(chartRef.value)
  updateChart()

  chart.getZr().on('click', (event: any) => {
    const pointInPixel = [event.offsetX, event.offsetY]
    if (chart!.containPixel('grid', pointInPixel)) {
      const xIndex = chart!.convertFromPixel({ seriesIndex: 0 }, pointInPixel)[0]
      const clickedDate = props.snapshots[xIndex].date
      const snapshot = props.snapshots[xIndex]
      emit('day-click', { date: clickedDate, snapshot })
    }
  })
})

watch(() => props.snapshots, updateChart, { deep: true })
</script>
