<template>
  <div ref="chartRef" style="height: 400px;"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({ snapshots: Array })
const chartRef = ref(null)

onMounted(() => {
  const chart = echarts.init(chartRef.value)
  const dates = props.snapshots.map(s => s.date)
  const values = props.snapshots.map(s => s.totals.netWorth)

  chart.setOption({
  title: {
    text: '淨值趨勢圖',
    left: 'center',
    textStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#8D6E63' // 深金棕色
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
  symbolSize: 10,
  lineStyle: {
    color: '#FFD700', // 黃金色
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

})
</script>
