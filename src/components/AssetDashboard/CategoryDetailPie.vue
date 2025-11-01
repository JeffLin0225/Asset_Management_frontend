  <template>
    <div ref="chartRef" style="height: 300px;"></div>
  </template>

  <script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import * as echarts from 'echarts'

  const props = defineProps<{ items: Record<string, number>; title: string }>()
  const chartRef = ref<HTMLDivElement | null>(null)
  let chart: echarts.ECharts | null = null

  function updateChart() {
    if (!chart) return

    const data = Object.entries(props.items).map(([name, value]) => ({
      name,
      value
    }))

    chart.setOption({
      title: { text: props.title, left: 'center' },
      tooltip: { trigger: 'item' },
      series: [{
        type: 'pie',
        radius: '50%',
        data,
        label: {
          formatter: ({ name, value, percent }: any) => {
            const val = typeof value === 'number' ? value : Number(value)
            return `${name}: $${val.toLocaleString()} (${percent}%)`
          }
        }
      }]
    })
  }

  onMounted(() => {
    if (!chartRef.value) return
    chart = echarts.init(chartRef.value)
    updateChart()
  })

  watch(() => props.items, updateChart, { deep: true })
  watch(() => props.title, updateChart)
  </script>
