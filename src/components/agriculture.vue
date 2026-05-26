<template>
  <div class="agriculture-container">
    <div class="agriculture-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="agriculture-content">
      <div class="agriculture-content-left">
        <div class="agriculture-card agriculture-card-01">
          <div class="agriculture-card-header"><i class="iconfont icon-nongye"></i>农业总体特征</div>

          <p class="mb-8">
            东南亚大部分地区位于热带，<strong>全年高温、降水丰富</strong>，为农业发展提供了良好的自然条件。
            这里既是世界重要的<strong>水稻产区</strong>，也是多种<strong>热带经济作物</strong>的重要产地。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">粮食作物</div>
              <div class="feature-value">水稻</div>
              <div class="feature-desc">主要分布在河流沿岸平原和三角洲地区。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">经济作物</div>
              <div class="feature-value">热带作物</div>
              <div class="feature-desc">橡胶、油棕、椰子、蕉麻等作物地位突出。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              东南亚农业可以概括为：
              <strong>湿热气候适合水稻，热带环境孕育经济作物。</strong>
            </div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-02">
          <div class="agriculture-card-header"><i class="iconfont icon-shuidao"></i>水稻种植业</div>

          <div class="crop-item">
            <div class="item-title">自然条件</div>
            <div class="item-desc">水稻生长需要高温和充足水分，东南亚湿热的气候、丰富的河流水源和肥沃的冲积平原十分适合水稻生长。</div>
          </div>

          <div class="crop-item">
            <div class="item-title">主要分布</div>
            <div class="item-desc">水稻主要分布在湄公河三角洲、湄南河平原、红河三角洲、伊洛瓦底江三角洲等地区。</div>
          </div>

          <div class="crop-item">
            <div class="item-title">人文条件</div>
            <div class="item-desc">东南亚人口较多，劳动力丰富，居民以稻米为主食，水稻种植历史悠久。</div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-03">
          <div class="agriculture-card-header"><i class="iconfont icon-yezi"></i>热带经济作物</div>

          <div class="crop-grid">
            <div class="crop-mini-card">
              <div class="crop-icon">🌳</div>
              <div class="crop-title">天然橡胶</div>
              <div class="crop-desc">泰国、印度尼西亚、马来西亚等国重要。</div>
            </div>

            <div class="crop-mini-card">
              <div class="crop-icon">🌴</div>
              <div class="crop-title">油棕</div>
              <div class="crop-desc">马来西亚、印度尼西亚分布较广。</div>
            </div>

            <div class="crop-mini-card">
              <div class="crop-icon">🥥</div>
              <div class="crop-title">椰子</div>
              <div class="crop-desc">菲律宾、印度尼西亚等岛国较多。</div>
            </div>

            <div class="crop-mini-card">
              <div class="crop-icon">🧵</div>
              <div class="crop-title">蕉麻</div>
              <div class="crop-desc">菲律宾是世界重要蕉麻产地之一。</div>
            </div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-04">
          <div class="agriculture-card-header"><i class="iconfont icon-yingxiang"></i>农业区位条件分析</div>

          <div class="factor-row">
            <div class="factor-label">气候</div>
            <div class="factor-bar">
              <div class="factor-fill climate-fill"></div>
            </div>
            <div class="factor-text">全年高温，降水丰富，适合水稻和热带作物生长。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">地形</div>
            <div class="factor-bar">
              <div class="factor-fill terrain-fill"></div>
            </div>
            <div class="factor-text">河流平原和三角洲地势平坦，土壤肥沃。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">水源</div>
            <div class="factor-bar">
              <div class="factor-fill water-fill"></div>
            </div>
            <div class="factor-text">河流众多，灌溉条件较好。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">劳力</div>
            <div class="factor-bar">
              <div class="factor-fill labor-fill"></div>
            </div>
            <div class="factor-text">人口较多，劳动力资源丰富，水稻种植经验丰富。</div>
          </div>

          <div class="chart-tip">注：上图为课堂示意，用于理解农业区位条件，不表示严格统计比例。</div>
        </div>

        <div class="agriculture-card agriculture-card-05">
          <div class="agriculture-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记主粮：</strong>东南亚重要粮食作物是水稻。</li>
            <li><strong>二记条件：</strong>高温多雨、水源充足、劳动力丰富。</li>
            <li><strong>三记分布：</strong>水稻多分布在河流平原和三角洲。</li>
            <li><strong>四记作物：</strong>橡胶、油棕、椰子、蕉麻等热带经济作物重要。</li>
            <li><strong>五记联系：</strong>气候湿热是农业发展的重要自然基础。</li>
          </ul>
        </div>
      </div>

      <div class="agriculture-content-right">
        <div id="southeastAsiaAgricultureMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看东南亚农业分布</div>

        <div class="layer-control-panel">
          <div class="panel-title">图层控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showRiceAreas" @change="refreshMapLayers" />
            水稻主要产区
          </label>

          <label>
            <input type="checkbox" v-model="showRubberAreas" @change="refreshMapLayers" />
            天然橡胶产区
          </label>

          <label>
            <input type="checkbox" v-model="showPalmAreas" @change="refreshMapLayers" />
            油棕产区
          </label>

          <label>
            <input type="checkbox" v-model="showCoconutAreas" @change="refreshMapLayers" />
            椰子 / 蕉麻产区
          </label>

          <label>
            <input type="checkbox" v-model="showCropPoints" @change="refreshMapLayers" />
            主要农产品标注
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area rice-area"></span>
              <span>水稻主要产区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area rubber-area"></span>
              <span>天然橡胶产区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area palm-area"></span>
              <span>油棕产区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area coconut-area"></span>
              <span>椰子 / 蕉麻产区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot crop-dot"></span>
              <span>农产品标注点</span>
            </div>
          </div>

          <div class="map-note">
            <div class="map-note-title">读图提示</div>
            <div>水稻多沿河流平原和三角洲分布，热带经济作物多分布在湿热的岛屿和半岛地区。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

defineProps<{
  current: {
    title: string
    desc: string
    index: number
  }
}>()

type DomLabel = {
  latlng: L.LatLng
  el: HTMLDivElement
  offsetX: number
  offsetY: number
}

type AreaItem = {
  name: string
  lat: number
  lng: number
  radius: number
  desc: string
  color: string
  fillColor: string
  fillOpacity: number
  className: string
}

type CropPoint = {
  name: string
  icon: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 6
const centerLng = 108
const zoomLevel = 4

const useGoogle = ref(false)
const showRiceAreas = ref(true)
const showRubberAreas = ref(true)
const showPalmAreas = ref(true)
const showCoconutAreas = ref(true)
const showCropPoints = ref(true)

const riceLayer = L.layerGroup()
const rubberLayer = L.layerGroup()
const palmLayer = L.layerGroup()
const coconutLayer = L.layerGroup()
const cropPointLayer = L.layerGroup()

const riceLabels: DomLabel[] = []
const rubberLabels: DomLabel[] = []
const palmLabels: DomLabel[] = []
const coconutLabels: DomLabel[] = []
const cropPointLabels: DomLabel[] = []

const riceAreas: AreaItem[] = [
  {
    name: '湄公河三角洲',
    lat: 10.2,
    lng: 105.7,
    radius: 180000,
    desc: '越南南部重要水稻产区，地势低平，水网密布。',
    color: '#65a30d',
    fillColor: '#bef264',
    fillOpacity: 0.28,
    className: 'rice-label-dom',
  },
  {
    name: '湄南河平原',
    lat: 14.0,
    lng: 100.4,
    radius: 170000,
    desc: '泰国重要水稻产区，平原广阔，灌溉条件较好。',
    color: '#65a30d',
    fillColor: '#bef264',
    fillOpacity: 0.28,
    className: 'rice-label-dom',
  },
  {
    name: '红河三角洲',
    lat: 20.9,
    lng: 106.0,
    radius: 120000,
    desc: '越南北部人口和农业集中区，水稻种植发达。',
    color: '#65a30d',
    fillColor: '#bef264',
    fillOpacity: 0.28,
    className: 'rice-label-dom',
  },
  {
    name: '伊洛瓦底江三角洲',
    lat: 16.0,
    lng: 95.5,
    radius: 150000,
    desc: '缅甸重要农业区，河口三角洲适合水稻种植。',
    color: '#65a30d',
    fillColor: '#bef264',
    fillOpacity: 0.28,
    className: 'rice-label-dom',
  },
]

const rubberAreas: AreaItem[] = [
  {
    name: '泰国橡胶区',
    lat: 8.0,
    lng: 99.5,
    radius: 220000,
    desc: '泰国南部湿热，天然橡胶种植较多。',
    color: '#047857',
    fillColor: '#34d399',
    fillOpacity: 0.22,
    className: 'rubber-label-dom',
  },
  {
    name: '马来西亚橡胶区',
    lat: 4.0,
    lng: 102.0,
    radius: 260000,
    desc: '马来半岛气候湿热，适合橡胶等热带作物生长。',
    color: '#047857',
    fillColor: '#34d399',
    fillOpacity: 0.22,
    className: 'rubber-label-dom',
  },
  {
    name: '印尼橡胶区',
    lat: -1.0,
    lng: 104.0,
    radius: 300000,
    desc: '苏门答腊等岛屿天然橡胶和热带经济作物分布广。',
    color: '#047857',
    fillColor: '#34d399',
    fillOpacity: 0.22,
    className: 'rubber-label-dom',
  },
]

const palmAreas: AreaItem[] = [
  {
    name: '马来西亚油棕区',
    lat: 3.2,
    lng: 102.5,
    radius: 240000,
    desc: '马来西亚是世界重要油棕产区之一。',
    color: '#ca8a04',
    fillColor: '#facc15',
    fillOpacity: 0.24,
    className: 'palm-label-dom',
  },
  {
    name: '印尼油棕区',
    lat: 0.2,
    lng: 111.0,
    radius: 420000,
    desc: '印度尼西亚油棕分布广，是重要热带经济作物产地。',
    color: '#ca8a04',
    fillColor: '#facc15',
    fillOpacity: 0.24,
    className: 'palm-label-dom',
  },
]

const coconutAreas: AreaItem[] = [
  {
    name: '菲律宾椰子区',
    lat: 12.0,
    lng: 122.5,
    radius: 360000,
    desc: '菲律宾岛屿众多，椰子和蕉麻等热带作物较多。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    fillOpacity: 0.2,
    className: 'coconut-label-dom',
  },
  {
    name: '印尼椰子区',
    lat: -3.5,
    lng: 119.0,
    radius: 430000,
    desc: '印度尼西亚沿海和岛屿地区适合椰子等热带作物生长。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    fillOpacity: 0.2,
    className: 'coconut-label-dom',
  },
]

const cropPoints: CropPoint[] = [
  {
    name: '水稻',
    icon: '🌾',
    lat: 10.2,
    lng: 105.7,
    desc: '湄公河三角洲水稻种植发达。',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '水稻',
    icon: '🌾',
    lat: 14.0,
    lng: 100.4,
    desc: '湄南河平原是泰国重要水稻产区。',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '橡胶',
    icon: '🌳',
    lat: 5.0,
    lng: 101.2,
    desc: '马来半岛天然橡胶分布较广。',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '油棕',
    icon: '🌴',
    lat: 0.6,
    lng: 112.0,
    desc: '印度尼西亚油棕分布广。',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '椰子',
    icon: '🥥',
    lat: 12.6,
    lng: 122.8,
    desc: '菲律宾椰子等热带作物重要。',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '蕉麻',
    icon: '🧵',
    lat: 13.3,
    lng: 123.5,
    desc: '菲律宾是世界重要蕉麻产地之一。',
    offsetX: 12,
    offsetY: -4,
  },
]

function switchBaseLayer() {
  if (!map) return

  if (baseLayer) {
    baseLayer.removeFrom(map)
    baseLayer = null
  }

  const url = useGoogle.value
    ? 'https://zdys.szjx.ai-study.net/geo-resources-folder/tiles/google-tiles/{z}/{x}/{y}.png'
    : 'https://zdys.szjx.ai-study.net/geo-resources-folder/tiles/osm-tiles/{z}/{x}/{y}.png'

  baseLayer = L.tileLayer(url, {
    attribution: '',
    minZoom: 2,
    maxZoom: 8,
  }).addTo(map)

  scheduleUpdateLabels()
}

function initLabelPane() {
  if (!map) return

  const container = map.getContainer()
  const oldPane = container.querySelector('.custom-map-label-pane')

  if (oldPane) oldPane.remove()

  labelPane = document.createElement('div')
  labelPane.className = 'custom-map-label-pane'
  container.appendChild(labelPane)
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function createDomLabel(options: { lat: number; lng: number; content: string; className: string; offsetX?: number; offsetY?: number }) {
  if (!labelPane) return null

  const el = document.createElement('div')
  el.className = options.className
  el.innerHTML = escapeHtml(options.content)

  labelPane.appendChild(el)

  const label: DomLabel = {
    latlng: L.latLng(options.lat, options.lng),
    el,
    offsetX: options.offsetX ?? 0,
    offsetY: options.offsetY ?? 0,
  }

  updateOneLabelPosition(label)
  return label
}

function updateOneLabelPosition(label: DomLabel) {
  if (!map) return

  const point = map.latLngToContainerPoint(label.latlng)
  label.el.style.left = `${point.x + label.offsetX}px`
  label.el.style.top = `${point.y + label.offsetY}px`
}

function updateAllLabelPositions() {
  updateLabelRaf = 0

  if (showRiceAreas.value) riceLabels.forEach(updateOneLabelPosition)
  if (showRubberAreas.value) rubberLabels.forEach(updateOneLabelPosition)
  if (showPalmAreas.value) palmLabels.forEach(updateOneLabelPosition)
  if (showCoconutAreas.value) coconutLabels.forEach(updateOneLabelPosition)
  if (showCropPoints.value) cropPointLabels.forEach(updateOneLabelPosition)
}

function scheduleUpdateLabels() {
  if (updateLabelRaf) return
  updateLabelRaf = requestAnimationFrame(updateAllLabelPositions)
}

function bindMapLabelEvents() {
  if (!map) return

  map.on('move', scheduleUpdateLabels)
  map.on('moveend', scheduleUpdateLabels)
  map.on('zoom', scheduleUpdateLabels)
  map.on('zoomend', scheduleUpdateLabels)
  map.on('viewreset', scheduleUpdateLabels)
  map.on('resize', scheduleUpdateLabels)
}

function unbindMapLabelEvents() {
  if (!map) return

  map.off('move', scheduleUpdateLabels)
  map.off('moveend', scheduleUpdateLabels)
  map.off('zoom', scheduleUpdateLabels)
  map.off('zoomend', scheduleUpdateLabels)
  map.off('viewreset', scheduleUpdateLabels)
  map.off('resize', scheduleUpdateLabels)
}

function clearDomLabels(labels: DomLabel[]) {
  labels.forEach(label => label.el.remove())
  labels.length = 0
}

function bindInfoPopup(layer: L.Layer, title: string, desc: string) {
  if ('bindPopup' in layer && typeof layer.bindPopup === 'function') {
    layer.bindPopup(`
      <div style="min-width: 160px; line-height: 1.5;">
        <div style="font-weight: bold; margin-bottom: 4px;">${escapeHtml(title)}</div>
        <div style="font-size: 12px; color: #444;">${escapeHtml(desc)}</div>
      </div>
    `)
  }
}

function addAreaLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], areas: AreaItem[]) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  areas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: item.color,
      weight: 2,
      fillColor: item.fillColor,
      fillOpacity: item.fillOpacity,
      opacity: 0.86,
    }).addTo(targetLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: item.className,
      offsetX: 0,
      offsetY: 0,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function addCropPointLayer() {
  if (!map) return

  cropPointLayer.clearLayers()
  clearDomLabels(cropPointLabels)

  cropPoints.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 5.5,
      color: '#064e3b',
      weight: 2,
      fillColor: '#10b981',
      fillOpacity: 1,
    }).addTo(cropPointLayer)

    bindInfoPopup(marker, `${item.icon} ${item.name}`, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: `${item.icon} ${item.name}`,
      className: 'crop-point-label-dom',
      offsetX: item.offsetX ?? 12,
      offsetY: item.offsetY ?? -4,
    })

    if (label) cropPointLabels.push(label)
  })

  cropPointLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showRiceAreas.value) {
    addAreaLayer(riceLayer, riceLabels, riceAreas)
  } else {
    riceLayer.clearLayers()
    clearDomLabels(riceLabels)
  }

  if (showRubberAreas.value) {
    addAreaLayer(rubberLayer, rubberLabels, rubberAreas)
  } else {
    rubberLayer.clearLayers()
    clearDomLabels(rubberLabels)
  }

  if (showPalmAreas.value) {
    addAreaLayer(palmLayer, palmLabels, palmAreas)
  } else {
    palmLayer.clearLayers()
    clearDomLabels(palmLabels)
  }

  if (showCoconutAreas.value) {
    addAreaLayer(coconutLayer, coconutLabels, coconutAreas)
  } else {
    coconutLayer.clearLayers()
    clearDomLabels(coconutLabels)
  }

  if (showCropPoints.value) {
    addCropPointLayer()
  } else {
    cropPointLayer.clearLayers()
    clearDomLabels(cropPointLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  riceLayer.clearLayers()
  rubberLayer.clearLayers()
  palmLayer.clearLayers()
  coconutLayer.clearLayers()
  cropPointLayer.clearLayers()

  if (map.hasLayer(riceLayer)) riceLayer.removeFrom(map)
  if (map.hasLayer(rubberLayer)) rubberLayer.removeFrom(map)
  if (map.hasLayer(palmLayer)) palmLayer.removeFrom(map)
  if (map.hasLayer(coconutLayer)) coconutLayer.removeFrom(map)
  if (map.hasLayer(cropPointLayer)) cropPointLayer.removeFrom(map)

  clearDomLabels(riceLabels)
  clearDomLabels(rubberLabels)
  clearDomLabels(palmLabels)
  clearDomLabels(coconutLabels)
  clearDomLabels(cropPointLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaAgricultureMap', {
    zoomControl: true,
    attributionControl: false,
    minZoom: 2,
    maxZoom: 8,
    dragging: true,
    scrollWheelZoom: true,
    zoomAnimation: false,
    markerZoomAnimation: false,
    fadeAnimation: false,
  }).setView([centerLat, centerLng], zoomLevel)

  switchBaseLayer()
  initLabelPane()
  bindMapLabelEvents()
  refreshMapLayers()

  await nextTick()

  requestAnimationFrame(() => {
    map?.invalidateSize(false)
    scheduleUpdateLabels()
  })
})

onUnmounted(() => {
  if (updateLabelRaf) {
    cancelAnimationFrame(updateLabelRaf)
    updateLabelRaf = 0
  }

  unbindMapLabelEvents()
  cleanupMapLayers()

  if (baseLayer && map) {
    baseLayer.removeFrom(map)
    baseLayer = null
  }

  if (labelPane) {
    labelPane.remove()
    labelPane = null
  }

  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style scoped lang="scss">
.agriculture-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.agriculture-header {
  margin-bottom: 32px;
}

.agriculture-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.agriculture-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.agriculture-content-right {
  width: 61%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  position: relative;
}

:deep(.leaflet-map) {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.agriculture-card {
  border-radius: 8px;
  border: 1px solid rgba(16, 185, 129, 0.26);
  padding: 14px;
}

.agriculture-card-01 {
  background: #ecfdf5;
  border-color: rgba(16, 185, 129, 0.35);
}

.agriculture-card-02 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.agriculture-card-03 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.agriculture-card-04 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.agriculture-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.agriculture-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #047857;
}

.agriculture-card-04 .agriculture-card-header {
  color: #9a3412;
}

.agriculture-card-05 .agriculture-card-header {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.agriculture-card-04 .iconfont {
  color: #9a3412;
}

.agriculture-card-05 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.agriculture-card p {
  line-height: 1.65;
  color: #1f2937;
  margin-top: 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 12px 0;
}

.feature-box {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.feature-title {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 4px;
}

.feature-value {
  font-size: 17px;
  font-weight: bold;
  color: #047857;
  margin-bottom: 4px;
}

.feature-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.45;
}

.note-box {
  padding: 8px 10px;
  border-radius: 6px;
  background: #fff;
  border-left: 3px solid var(--primary-color);
  font-size: 13px;
  color: #374151;
}

.note-title {
  font-weight: bold;
  color: #047857;
  margin-bottom: 4px;
}

.crop-item,
.impact-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 8px;
}

.crop-item:last-child,
.impact-item:last-child {
  margin-bottom: 0;
}

.item-title {
  font-weight: bold;
  color: #047857;
  margin-bottom: 4px;
}

.item-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
}

.crop-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.crop-mini-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #cee3ed;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.crop-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.crop-title {
  font-weight: bold;
  color: #047857;
  margin-bottom: 4px;
}

.crop-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.45;
}

.factor-row {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 8px;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 8px 10px;
  margin-bottom: 8px;
}

.factor-label {
  font-weight: bold;
  color: #9a3412;
}

.factor-bar {
  height: 10px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
}

.factor-fill {
  height: 100%;
  border-radius: 999px;
}

.climate-fill {
  width: 96%;
  background: var(--primary-color);
}

.terrain-fill {
  width: 88%;
  background: #84cc16;
}

.water-fill {
  width: 86%;
  background: #0ea5e9;
}

.labor-fill {
  width: 82%;
  background: #f97316;
}

.factor-text {
  grid-column: 1 / -1;
  color: #475569;
  font-size: 12px;
  line-height: 1.45;
}

.chart-tip {
  margin-top: 8px;
  font-size: 12px;
  color: #6b7280;
  line-height: 1.45;
}

.exam-list {
  margin: 0;
  padding-left: 18px;
  color: #3f2f12;
  line-height: 1.6;
}

.exam-list li {
  margin-bottom: 6px;
}

.exam-list strong {
  color: #b45309;
}

.map-tip {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #666;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

.layer-control-panel {
  position: absolute;
  top: 48px;
  right: 10px;
  width: 235px;
  max-height: calc(100% - 70px);
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.95);
  padding: 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #333;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(15, 39, 72, 0.15);
}

.panel-title {
  font-weight: bold;
  margin-bottom: 8px;
  color: #0f3554;
}

.layer-control-panel label {
  display: block;
  margin-bottom: 6px;
}

.map-legend {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(15, 39, 72, 0.12);
}

.legend-title {
  font-weight: bold;
  margin-bottom: 6px;
  color: #0f3554;
}

.legend-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  line-height: 1.35;
}

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.rice-area {
  background: rgba(190, 242, 100, 0.5);
  border: 1px solid #65a30d;
}

.rubber-area {
  background: rgba(52, 211, 153, 0.32);
  border: 1px solid #047857;
}

.palm-area {
  background: rgba(250, 204, 21, 0.38);
  border: 1px solid #ca8a04;
}

.coconut-area {
  background: rgba(45, 212, 191, 0.32);
  border: 1px solid #0f766e;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.crop-dot {
  background: #10b981;
  border: 2px solid #064e3b;
  box-sizing: border-box;
}

.map-note {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(15, 39, 72, 0.12);
  color: #475569;
  line-height: 1.45;
}

.map-note-title {
  font-weight: bold;
  color: #047857;
  margin-bottom: 4px;
}

:deep(.custom-map-label-pane) {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 650;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

:deep(.rice-label-dom),
:deep(.rubber-label-dom),
:deep(.palm-label-dom),
:deep(.coconut-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  color: #fff;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  box-shadow:
    0 2px 8px rgba(15, 39, 72, 0.18),
    0 0 0 1px rgba(255, 255, 255, 0.5);
}

:deep(.rice-label-dom) {
  background: rgba(101, 163, 13, 0.88);
}

:deep(.rubber-label-dom) {
  background: rgba(4, 120, 87, 0.88);
}

:deep(.palm-label-dom) {
  background: rgba(202, 138, 4, 0.88);
}

:deep(.coconut-label-dom) {
  background: rgba(15, 118, 110, 0.88);
}

:deep(.crop-point-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #064e3b;
  background: rgba(236, 253, 245, 0.94);
  border: 1px solid rgba(16, 185, 129, 0.6);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}
</style>
