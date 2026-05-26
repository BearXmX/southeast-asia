<template>
  <div class="compose-container">
    <div class="compose-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="compose-content">
      <!-- 左侧内容区 -->
      <div class="compose-content-left">
        <div class="compose-card compose-card-01">
          <div class="compose-card-header"><i class="iconfont icon-app-zucheng"></i>组成总体特征</div>

          <p class="mb-8">
            东南亚主要由<strong>中南半岛</strong>和<strong>马来群岛</strong>两大部分组成。
            中南半岛位于中国以南，与我国山水相连；马来群岛岛屿众多，分布在太平洋和印度洋之间。
          </p>

          <div class="note-box">
            <div class="note-title">一句话记忆</div>
            <div>
              东南亚的组成可以概括为：
              <strong>一个半岛，一片群岛；陆地国家与岛国并存。</strong>
            </div>
          </div>
        </div>

        <div class="compose-card compose-card-02">
          <div class="compose-card-header"><i class="iconfont icon-bankuai"></i>两大组成部分</div>

          <div class="region-group">
            <div class="region-title">中南半岛</div>
            <div class="region-desc">位于中国以南，主要包括越南、老挝、柬埔寨、泰国、缅甸等国家。地形具有“山河相间、纵列分布”的特点。</div>
          </div>

          <div class="region-group">
            <div class="region-title">马来群岛</div>
            <div class="region-desc">岛屿众多，包括印度尼西亚、菲律宾、马来西亚部分地区、文莱、东帝汶等。地处板块交界附近，火山地震活动较多。</div>
          </div>

          <div class="region-group">
            <div class="region-title">重要城市国家</div>
            <div class="region-desc">新加坡位于马六甲海峡附近，地理位置优越，港口、转口贸易和金融服务业发达。</div>
          </div>
        </div>

        <div class="compose-card compose-card-03">
          <div class="compose-card-header"><i class="iconfont icon-guojia"></i>主要国家定位</div>

          <p class="mb-8 production-tip">点击下方国家名称，地图会定位到对应国家中心位置。</p>

          <div class="country-buttons">
            <button v-for="item in countryList" :key="item.name" @click="flyToCountry(item)" :class="{ active: activeCountry === item.name }">
              {{ item.name }}
            </button>
          </div>
        </div>

        <div class="compose-card compose-card-04">
          <div class="compose-card-header"><i class="iconfont icon-quyuxinxi"></i>国家分组理解</div>

          <div class="country-type-grid">
            <div class="country-type-card">
              <div class="country-type-icon">⛰️</div>
              <div class="country-type-title">半岛国家</div>
              <div class="country-type-desc">越南、老挝、柬埔寨、泰国、缅甸等。</div>
            </div>

            <div class="country-type-card">
              <div class="country-type-icon">🏝️</div>
              <div class="country-type-title">群岛国家</div>
              <div class="country-type-desc">印度尼西亚、菲律宾、东帝汶等。</div>
            </div>

            <div class="country-type-card">
              <div class="country-type-icon">⚓</div>
              <div class="country-type-title">港口国家</div>
              <div class="country-type-desc">新加坡地处海上交通要道，港口贸易发达。</div>
            </div>

            <div class="country-type-card">
              <div class="country-type-icon">🌋</div>
              <div class="country-type-title">火山国家</div>
              <div class="country-type-desc">印度尼西亚、菲律宾火山地震活动较明显。</div>
            </div>
          </div>
        </div>

        <div class="compose-card compose-card-05">
          <div class="compose-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记组成：</strong>东南亚由中南半岛和马来群岛组成。</li>
            <li><strong>二记半岛：</strong>中南半岛与中国山水相连。</li>
            <li><strong>三记群岛：</strong>马来群岛岛屿众多，火山地震较多。</li>
            <li><strong>四记国家：</strong>印度尼西亚是世界重要群岛国家。</li>
            <li><strong>五记新加坡：</strong>位于马六甲海峡附近，港口贸易发达。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="compose-content-right">
        <div id="southeastAsiaComposeMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看东南亚组成与国家</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showBoundaryLayer" @change="toggleBoundaryLayer" />
            东南亚轮廓线
          </label>

          <label>
            <input type="checkbox" v-model="showMainCountriesLayer" @change="toggleMainCountriesLayer" />
            东南亚主要国家
          </label>

          <label>
            <input type="checkbox" v-model="showPeninsulaArea" @change="refreshMapLayers" />
            中南半岛范围
          </label>

          <label>
            <input type="checkbox" v-model="showArchipelagoArea" @change="refreshMapLayers" />
            马来群岛范围
          </label>

          <label>
            <input type="checkbox" v-model="showCountryPoints" @change="toggleCountryPoints" />
            国家定位点
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-line boundary-line"></span>
              <span>东南亚轮廓线</span>
            </div>

            <div class="legend-row">
              <span class="legend-area country-area"></span>
              <span>主要国家范围</span>
            </div>

            <div class="legend-row">
              <span class="legend-area peninsula-area"></span>
              <span>中南半岛</span>
            </div>

            <div class="legend-row">
              <span class="legend-area archipelago-area"></span>
              <span>马来群岛</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot"></span>
              <span>国家定位点</span>
            </div>
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

type CountryItem = {
  name: string
  lat: number
  lng: number
  zoom: number
  group: string
  desc: string
}

type AreaItem = {
  name: string
  lat: number
  lng: number
  radius: number
  desc: string
}

type DomLabel = {
  latlng: L.LatLng
  el: HTMLDivElement
  offsetX: number
  offsetY: number
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

let boundaryLayer: L.GeoJSON | null = null
let mainCountriesLayer: L.GeoJSON | null = null
let boundaryAbortController: AbortController | null = null
let mainCountriesAbortController: AbortController | null = null

const activeCountry = ref('')
const useGoogle = ref(false)
const showBoundaryLayer = ref(false)
const showMainCountriesLayer = ref(false)
const showPeninsulaArea = ref(true)
const showArchipelagoArea = ref(true)
const showCountryPoints = ref(true)

const baseGeoUrl = 'https://course-code.oss-cn-shanghai.aliyuncs.com/geojson/'

const centerLat = 6
const centerLng = 108
const zoomLevel = 4

const countryMarkers: L.CircleMarker[] = []
const countryLabels: DomLabel[] = []

const peninsulaLayer = L.layerGroup()
const archipelagoLayer = L.layerGroup()

const peninsulaLabels: DomLabel[] = []
const archipelagoLabels: DomLabel[] = []

const countryList: CountryItem[] = [
  {
    name: '越南',
    lat: 15.8,
    lng: 108.0,
    zoom: 6,
    group: '中南半岛',
    desc: '位于中南半岛东部，沿海狭长，红河和湄公河三角洲农业发达。',
  },
  {
    name: '老挝',
    lat: 18.2,
    lng: 103.8,
    zoom: 6,
    group: '中南半岛',
    desc: '东南亚内陆国家，湄公河流经其西部边界附近。',
  },
  {
    name: '柬埔寨',
    lat: 12.7,
    lng: 104.9,
    zoom: 7,
    group: '中南半岛',
    desc: '位于中南半岛南部，洞里萨湖和湄公河影响明显。',
  },
  {
    name: '泰国',
    lat: 15.4,
    lng: 101.0,
    zoom: 6,
    group: '中南半岛',
    desc: '位于中南半岛中部，湄南河平原是重要农业区。',
  },
  {
    name: '缅甸',
    lat: 20.3,
    lng: 96.5,
    zoom: 6,
    group: '中南半岛',
    desc: '位于中南半岛西部，伊洛瓦底江流域农业条件较好。',
  },
  {
    name: '马来西亚',
    lat: 4.5,
    lng: 102.0,
    zoom: 6,
    group: '半岛与群岛',
    desc: '由马来半岛南部和加里曼丹岛北部部分地区组成。',
  },
  {
    name: '新加坡',
    lat: 1.35,
    lng: 103.82,
    zoom: 8,
    group: '城市国家',
    desc: '位于马六甲海峡附近，是世界重要港口和贸易中心。',
  },
  {
    name: '印度尼西亚',
    lat: -2.0,
    lng: 118.0,
    zoom: 5,
    group: '马来群岛',
    desc: '世界重要群岛国家，岛屿众多，火山地震活动较频繁。',
  },
  {
    name: '菲律宾',
    lat: 12.8,
    lng: 122.7,
    zoom: 6,
    group: '马来群岛',
    desc: '位于西太平洋，岛屿众多，受海洋和热带气候影响明显。',
  },
  {
    name: '文莱',
    lat: 4.5,
    lng: 114.7,
    zoom: 7,
    group: '马来群岛',
    desc: '位于加里曼丹岛北部，石油和天然气资源较丰富。',
  },
  {
    name: '东帝汶',
    lat: -8.8,
    lng: 125.8,
    zoom: 7,
    group: '马来群岛',
    desc: '位于帝汶岛东部，是东南亚岛国之一。',
  },
]

const peninsulaAreas: AreaItem[] = [
  {
    name: '中南半岛',
    lat: 16.2,
    lng: 102.4,
    radius: 850000,
    desc: '位于中国以南，主要包括越南、老挝、柬埔寨、泰国、缅甸等国家。',
  },
]

const archipelagoAreas: AreaItem[] = [
  {
    name: '马来群岛',
    lat: -1.0,
    lng: 118.0,
    radius: 1300000,
    desc: '岛屿众多，包括印度尼西亚、菲律宾、马来西亚部分地区、文莱、东帝汶等。',
  },
]

function flyToCountry(item: CountryItem) {
  activeCountry.value = item.name

  if (!map) return

  map.setView([item.lat, item.lng], item.zoom, {
    animate: false,
  })

  updateCountryLabelActiveState()
  scheduleUpdateLabels()
}

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

function createDomLabel(options: {
  lat: number
  lng: number
  content: string
  className: string
  offsetX?: number
  offsetY?: number
  datasetName?: string
}) {
  if (!labelPane) return null

  const el = document.createElement('div')
  el.className = options.className
  el.innerHTML = escapeHtml(options.content)

  if (options.datasetName) {
    el.dataset.name = options.datasetName
  }

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

  if (showCountryPoints.value) {
    countryLabels.forEach(updateOneLabelPosition)
  }

  if (showPeninsulaArea.value) {
    peninsulaLabels.forEach(updateOneLabelPosition)
  }

  if (showArchipelagoArea.value) {
    archipelagoLabels.forEach(updateOneLabelPosition)
  }
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
  labels.forEach(label => {
    label.el.remove()
  })

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

function addCountryMarkersAndLabels() {
  if (!map) return

  clearCountryMarkersAndLabels()

  countryList.forEach(country => {
    const marker = L.circleMarker([country.lat, country.lng], {
      radius: country.name === '新加坡' ? 5.5 : 4.5,
      color: '#064e3b',
      weight: 1.5,
      fillColor: '#10b981',
      fillOpacity: 1,
      interactive: true,
    }).addTo(map!)

    bindInfoPopup(marker, country.name, country.desc)

    marker.on('click', () => {
      flyToCountry(country)
    })

    countryMarkers.push(marker)

    const label = createDomLabel({
      lat: country.lat,
      lng: country.lng,
      content: country.name,
      className: 'country-label-dom',
      offsetX: 12,
      offsetY: -2,
      datasetName: country.name,
    })

    if (label) {
      countryLabels.push(label)
    }
  })

  updateCountryLabelActiveState()
  scheduleUpdateLabels()
}

function clearCountryMarkersAndLabels() {
  countryMarkers.forEach(marker => {
    if (map) marker.removeFrom(map)
  })
  countryMarkers.length = 0

  clearDomLabels(countryLabels)
}

function toggleCountryPoints() {
  if (showCountryPoints.value) {
    addCountryMarkersAndLabels()
  } else {
    clearCountryMarkersAndLabels()
  }
}

function updateCountryLabelActiveState() {
  countryLabels.forEach(label => {
    const name = label.el.dataset.name

    if (name && name === activeCountry.value) {
      label.el.classList.add('active')
    } else {
      label.el.classList.remove('active')
    }
  })
}

async function loadBoundaryLayer() {
  if (!map) return

  clearBoundaryLayer()

  const abortController = new AbortController()
  boundaryAbortController = abortController

  try {
    const response = await fetch(baseGeoUrl + '东南亚轮廓线.geojson', {
      signal: abortController.signal,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (abortController.signal.aborted || !map || !showBoundaryLayer.value) return

    boundaryLayer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },
      style: feature => {
        const props = feature?.properties || {}

        return {
          color: props.strokeColor || '#047857',
          weight: props.weight || 2.4,
          opacity: props.opacity ?? 0.96,
          fillColor: props.fillColor || '#10b981',
          fillOpacity: props.fillOpacity ?? 0.12,
        }
      },
      onEachFeature: (feature, layer) => {
        const props = feature?.properties || {}
        const name = props.name || props.labelText || '东南亚轮廓线'
        const desc = props.desc || props.description || '东南亚区域轮廓范围。'

        bindInfoPopup(layer, name, desc)
      },
    }).addTo(map)

    await nextTick()

    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('东南亚轮廓线请求已取消')
    } else {
      console.error('加载东南亚轮廓线失败：', error)
      showBoundaryLayer.value = false
    }
  } finally {
    if (boundaryAbortController === abortController) {
      boundaryAbortController = null
    }
  }
}

async function loadMainCountriesLayer() {
  if (!map) return

  clearMainCountriesLayer()

  const abortController = new AbortController()
  mainCountriesAbortController = abortController

  try {
    const response = await fetch(baseGeoUrl + '东南亚国家轮廓线.geojson', {
      signal: abortController.signal,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (abortController.signal.aborted || !map || !showMainCountriesLayer.value) return

    mainCountriesLayer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },
      style: feature => {
        const props = feature?.properties || {}

        return {
          color: props.strokeColor || '#059669',
          weight: props.weight || 1.4,
          opacity: props.opacity ?? 0.9,
          fillColor: props.fillColor || '#34d399',
          fillOpacity: props.fillOpacity ?? 0.22,
        }
      },
      onEachFeature: (feature, layer) => {
        const props = feature?.properties || {}
        const name = props.name || props.NAME || props.Name || props.labelText || '东南亚主要国家'
        const desc = props.desc || props.description || '东南亚主要国家范围。'

        bindInfoPopup(layer, name, desc)
      },
    }).addTo(map)

    await nextTick()

    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('东南亚主要国家请求已取消')
    } else {
      console.error('加载东南亚主要国家失败：', error)
      showMainCountriesLayer.value = false
    }
  } finally {
    if (mainCountriesAbortController === abortController) {
      mainCountriesAbortController = null
    }
  }
}

function clearBoundaryLayer() {
  if (boundaryAbortController) {
    boundaryAbortController.abort()
    boundaryAbortController = null
  }

  if (boundaryLayer && map) {
    boundaryLayer.removeFrom(map)
    boundaryLayer = null
  }
}

function clearMainCountriesLayer() {
  if (mainCountriesAbortController) {
    mainCountriesAbortController.abort()
    mainCountriesAbortController = null
  }

  if (mainCountriesLayer && map) {
    mainCountriesLayer.removeFrom(map)
    mainCountriesLayer = null
  }
}

function toggleBoundaryLayer() {
  if (showBoundaryLayer.value) {
    loadBoundaryLayer()
  } else {
    clearBoundaryLayer()
  }
}

function toggleMainCountriesLayer() {
  if (showMainCountriesLayer.value) {
    loadMainCountriesLayer()
  } else {
    clearMainCountriesLayer()
  }
}

function addAreaLayer(
  targetLayer: L.LayerGroup,
  targetLabels: DomLabel[],
  areas: AreaItem[],
  options: {
    color: string
    fillColor: string
    fillOpacity: number
    labelClassName: string
  },
) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  areas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color: options.color,
      weight: 2,
      fillColor: options.fillColor,
      fillOpacity: options.fillOpacity,
      opacity: 0.85,
    }).addTo(targetLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: options.labelClassName,
      offsetX: 0,
      offsetY: 0,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showPeninsulaArea.value) {
    addAreaLayer(peninsulaLayer, peninsulaLabels, peninsulaAreas, {
      color: '#10b981',
      fillColor: '#34d399',
      fillOpacity: 0.14,
      labelClassName: 'peninsula-label-dom',
    })
  } else {
    peninsulaLayer.clearLayers()
    clearDomLabels(peninsulaLabels)
  }

  if (showArchipelagoArea.value) {
    addAreaLayer(archipelagoLayer, archipelagoLabels, archipelagoAreas, {
      color: '#0ea5e9',
      fillColor: '#38bdf8',
      fillOpacity: 0.12,
      labelClassName: 'archipelago-label-dom',
    })
  } else {
    archipelagoLayer.clearLayers()
    clearDomLabels(archipelagoLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  clearBoundaryLayer()
  clearMainCountriesLayer()

  clearCountryMarkersAndLabels()

  peninsulaLayer.clearLayers()
  archipelagoLayer.clearLayers()

  if (map.hasLayer(peninsulaLayer)) peninsulaLayer.removeFrom(map)
  if (map.hasLayer(archipelagoLayer)) archipelagoLayer.removeFrom(map)

  clearDomLabels(peninsulaLabels)
  clearDomLabels(archipelagoLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaComposeMap', {
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
  addCountryMarkersAndLabels()

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
.compose-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.compose-header {
  margin-bottom: 32px;
}

.compose-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.compose-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.compose-content-right {
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

.compose-card {
  border-radius: 8px;
  border: 1px solid rgba(16, 185, 129, 0.26);
  padding: 14px;
}

.compose-card-01 {
  background: #ecfdf5;
  border-color: rgba(16, 185, 129, 0.35);
}

.compose-card-02 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.compose-card-03 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.compose-card-04 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.compose-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.compose-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #047857;
}

.compose-card-04 .compose-card-header {
  color: #0369a1;
}

.compose-card-05 .compose-card-header {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.compose-card-04 .iconfont {
  color: #0369a1;
}

.compose-card-05 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.compose-card p {
  line-height: 1.65;
  color: #1f2937;
  margin-top: 0;
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

.region-group {
  padding: 8px 10px;
  border-radius: 6px;
  background: #fff;
  margin-bottom: 8px;
  border-left: 3px solid var(--primary-color);
}

.region-group:last-child {
  margin-bottom: 0;
}

.region-title {
  font-weight: bold;
  color: #047857;
  margin-bottom: 4px;
}

.region-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
}

.production-tip {
  margin-top: 0;
  padding: 9px 10px;
  background: #fff;
  border-left: 4px solid var(--primary-color);
  border-radius: 8px;
  color: #5f6f7a;
  line-height: 1.55;
  font-size: 13px;
}

.country-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.country-buttons button {
  padding: 6px 10px;
  border: 1px solid rgba(16, 185, 129, 0.42);
  border-radius: 6px;
  background: #fff;
  color: #047857;
  cursor: pointer;
  font-size: 13px;
  line-height: 1;
}

.country-buttons button:hover {
  background: #ecfdf5;
  color: #065f46;
}

.country-buttons button.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
  font-weight: bold;
}

.country-type-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.country-type-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #bae6fd;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.country-type-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.country-type-title {
  font-weight: bold;
  color: #0369a1;
  margin-bottom: 4px;
}

.country-type-desc {
  font-size: 12px;
  color: #374151;
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

.exam-list li:last-child {
  margin-bottom: 0;
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

.map-control-panel {
  position: absolute;
  top: 48px;
  right: 10px;
  width: 220px;
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

.map-control-panel label {
  display: block;
  margin-bottom: 6px;
}

.map-control-panel label:last-of-type {
  margin-bottom: 0;
}

.map-legend {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(15, 39, 72, 0.12);
}

.legend-title {
  font-weight: bold;
  margin-bottom: 6px;
}

.legend-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  line-height: 1.35;
}

.legend-row:last-child {
  margin-bottom: 0;
}

.legend-line {
  width: 22px;
  height: 0;
  flex-shrink: 0;
}

.boundary-line {
  border-top: 2px solid #047857;
}

.legend-area {
  width: 16px;
  height: 10px;
  border-radius: 3px;
  flex-shrink: 0;
  display: inline-block;
}

.country-area {
  background: rgba(52, 211, 153, 0.28);
  border: 1px solid #059669;
}

.peninsula-area {
  background: rgba(16, 185, 129, 0.24);
  border: 1px solid #10b981;
}

.archipelago-area {
  background: rgba(14, 165, 233, 0.2);
  border: 1px solid #0ea5e9;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  border: 1px solid #064e3b;
  flex-shrink: 0;
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

:deep(.country-label-dom) {
  position: absolute;
  transform: translate(0, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #064e3b;
  background: rgba(236, 253, 245, 0.92);
  border: 1px solid rgba(16, 185, 129, 0.55);
  border-radius: 4px;
  padding: 2px 5px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.country-label-dom.active) {
  color: #fff;
  background: var(--primary-color);
  border-color: var(--primary-color);
  font-size: 13px;
}

:deep(.peninsula-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #047857;
  background: rgba(236, 253, 245, 0.94);
  border: 1px solid rgba(16, 185, 129, 0.65);
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.archipelago-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #0369a1;
  background: rgba(240, 249, 255, 0.94);
  border: 1px solid rgba(14, 165, 233, 0.65);
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}
</style>
