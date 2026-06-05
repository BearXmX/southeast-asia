<template>
  <div class="position-container">
    <div class="position-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="position-content">
      <!-- 左侧内容区 -->
      <div class="position-content-left">
        <div class="position-card position-card-01">
          <div class="position-card-header"><i class="iconfont icon-diqiu"></i>位置总体特征</div>

          <p class="mb-8">
            东南亚位于亚洲东南部，地处<strong>亚洲与大洋洲、太平洋与印度洋</strong>之间，
            是沟通两洲两洋的重要地区，被称为<strong>“东方十字路口”</strong>。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">纬度位置</div>
              <div class="feature-value">低纬热带</div>
              <div class="feature-desc">大部分位于赤道附近，热带气候显著。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">海陆位置</div>
              <div class="feature-value">两洲两洋之间</div>
              <div class="feature-desc">连接亚洲、大洋洲、太平洋和印度洋。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              东南亚位置的重要性可以概括为：
              <strong>低纬湿热、临海广阔、交通要道、联系东西方</strong>。
            </div>
          </div>
        </div>

        <div class="position-card position-card-02">
          <div class="position-card-header"><i class="iconfont icon-quyuxinxi"></i>范围识记</div>

          <div class="rule-item">
            <div class="rule-title">组成范围</div>
            <div class="rule-desc">东南亚主要由中南半岛和马来群岛两大部分组成。</div>
          </div>

          <div class="rule-item">
            <div class="rule-title">中南半岛</div>
            <div class="rule-desc">位于中国以南，与我国山水相连，包括越南、老挝、柬埔寨、泰国、缅甸等国家。</div>
          </div>

          <div class="rule-item">
            <div class="rule-title">马来群岛</div>
            <div class="rule-desc">岛屿众多，主要包括印度尼西亚、菲律宾、马来西亚、文莱、东帝汶等国家和地区。</div>
          </div>

          <div class="rule-item">
            <div class="rule-title">重要通道</div>
            <div class="rule-desc">马六甲海峡连接印度洋和太平洋，是世界重要海上交通要道。</div>
          </div>
        </div>

        <div class="position-card position-card-03">
          <div class="position-card-header"><i class="iconfont icon-anchor-full"></i>濒临海洋与交通位置</div>

          <div class="sea-grid">
            <div class="sea-card">
              <div class="sea-icon">🌊</div>
              <div class="sea-title">太平洋</div>
              <div class="sea-desc">位于东南亚东侧，菲律宾群岛、印度尼西亚群岛与其联系密切。</div>
            </div>

            <div class="sea-card">
              <div class="sea-icon">🌊</div>
              <div class="sea-title">印度洋</div>
              <div class="sea-desc">位于东南亚西南侧，是连接中东、南亚与东亚的重要海域。</div>
            </div>

            <div class="sea-card">
              <div class="sea-icon">🚢</div>
              <div class="sea-title">马六甲海峡</div>
              <div class="sea-desc">位于马来半岛与苏门答腊岛之间，航运价值极高。</div>
            </div>

            <div class="sea-card">
              <div class="sea-icon">⚓</div>
              <div class="sea-title">新加坡</div>
              <div class="sea-desc">位于马六甲海峡附近，是重要港口城市和国际贸易中心。</div>
            </div>
          </div>
        </div>

        <div class="position-card position-card-04">
          <div class="position-card-header"><i class="iconfont icon-fenbu"></i>位置对区域发展的影响</div>

          <p class="mb-8">
            东南亚的位置不仅决定了它的自然环境，也深刻影响了交通、农业、城市、贸易和区域合作。
            分析位置时不要只说“在哪里”，还要说明<strong>这种位置带来了什么影响</strong>。
          </p>

          <div class="factor-row">
            <div class="factor-label">交通</div>
            <div class="factor-bar">
              <div class="factor-fill traffic-fill"></div>
            </div>
            <div class="factor-text">两洲两洋之间的位置，使东南亚成为印度洋与太平洋之间的重要海上通道。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">气候</div>
            <div class="factor-bar">
              <div class="factor-fill climate-fill"></div>
            </div>
            <div class="factor-text">低纬度位置使东南亚热量充足，热带季风气候和热带雨林气候分布广。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">农业</div>
            <div class="factor-bar">
              <div class="factor-fill agriculture-fill"></div>
            </div>
            <div class="factor-text">高温多雨的气候有利于水稻和天然橡胶、油棕、椰子、蕉麻等热带作物生长。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">合作</div>
            <div class="factor-bar">
              <div class="factor-fill relation-fill"></div>
            </div>
            <div class="factor-text">中国与东南亚陆海相邻，贸易、旅游、产业和交通合作基础较好。</div>
          </div>

          <div class="chart-tip">注：上图为课堂理解示意，用于说明位置因素对区域发展的影响。</div>
        </div>
        <div class="position-card position-card-05">
          <div class="position-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <div class="location-formula">北接中国，南近澳洲；东临太平洋，西通印度洋；半岛连大陆，群岛跨赤道；马六甲海峡，沟通两大洋。</div>

          <ul class="exam-list">
            <li><strong>一记方位：</strong>东南亚位于亚洲东南部。</li>
            <li><strong>二记两洲：</strong>位于亚洲与大洋洲之间。</li>
            <li><strong>三记两洋：</strong>位于太平洋与印度洋之间。</li>
            <li><strong>四记称号：</strong>被称为“东方十字路口”。</li>
            <li><strong>五记海峡：</strong>马六甲海峡是世界重要海上通道。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="position-content-right">
        <div id="southeastAsiaPositionMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看东南亚位置与范围</div>

        <div class="map-control-panel">
          <div class="panel-title">地图控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showBoundary" @change="toggleBoundaryLayer" />
            东南亚轮廓线
          </label>

          <label>
            <input type="checkbox" v-model="showCountries" @change="toggleCountryLayer" />
            东南亚主要国家
          </label>

          <label>
            <input type="checkbox" v-model="showRegions" @change="refreshMapLayers" />
            组成范围
          </label>

          <label>
            <input type="checkbox" v-model="showLatitudeLines" @change="refreshMapLayers" />
            重要纬线
          </label>

          <label>
            <input type="checkbox" v-model="showCrossroad" @change="refreshMapLayers" />
            东方十字路口
          </label>

          <label>
            <input type="checkbox" v-model="showSeaAreas" @change="refreshMapLayers" />
            重要海域
          </label>

          <label>
            <input type="checkbox" v-model="showStrait" @change="refreshMapLayers" />
            马六甲海峡
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-line boundary-line"></span>
              <span>东南亚轮廓线</span>
            </div>

            <div class="legend-row">
              <span class="legend-area country-area"></span>
              <span>东南亚主要国家</span>
            </div>

            <div class="legend-row">
              <span class="legend-area region-area"></span>
              <span>中南半岛 / 马来群岛</span>
            </div>

            <div class="legend-row">
              <span class="legend-line latitude-line"></span>
              <span>赤道 / 北回归线</span>
            </div>

            <div class="legend-row">
              <span class="legend-area crossroad-area"></span>
              <span>东方十字路口</span>
            </div>

            <div class="legend-row">
              <span class="legend-area sea-area"></span>
              <span>重要海域</span>
            </div>

            <div class="legend-row">
              <span class="legend-line strait-line"></span>
              <span>马六甲海峡</span>
            </div>
          </div>
        </div>
        <div class="focus-card" v-if="activeMapInfo">
          <div class="focus-title">{{ activeMapInfo.name }}</div>
          <div class="focus-type">{{ activeMapInfo.type }}</div>
          <div class="focus-desc">{{ activeMapInfo.desc }}</div>
        </div>

        <div class="focus-card focus-card-empty" v-else>
          <div class="focus-title">地图互动提示</div>
          <div class="focus-type">点击地图要素查看说明</div>
          <div class="focus-desc">可点击中南半岛、马来群岛、重要海域、赤道、北回归线、马六甲海峡等图层，左下角会显示对应知识点。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { GEOJSON_MAP, TILE_MAP } from '@/resource'

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
  offsetX?: number
  offsetY?: number
}

type LineItem = {
  name: string
  path: [number, number][]
  desc: string
  color: string
  dashArray?: string
}

type MapInfoItem = {
  name: string
  type: string
  desc: string
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

let boundaryLayer: L.GeoJSON | null = null
let countryLayer: L.GeoJSON | null = null
let boundaryAbortController: AbortController | null = null
let countryAbortController: AbortController | null = null

const centerLat = 6
const centerLng = 108
const zoomLevel = 4

const useGoogle = ref(false)
const showBoundary = ref(false)
const showCountries = ref(false)
const showSeaAreas = ref(true)
const showStrait = ref(true)
const showRegions = ref(true)
const showLatitudeLines = ref(true)
const showCrossroad = ref(true)
const activeMapInfo = ref<MapInfoItem | null>(null)

const seaAreaLayer = L.layerGroup()
const straitLayer = L.layerGroup()
const regionLayer = L.layerGroup()
const latitudeLineLayer = L.layerGroup()
const crossroadLayer = L.layerGroup()

const seaAreaLabels: DomLabel[] = []
const straitLabels: DomLabel[] = []
const geoJsonLabels: DomLabel[] = []
const regionLabels: DomLabel[] = []
const latitudeLineLabels: DomLabel[] = []
const crossroadLabels: DomLabel[] = []

const regionAreas: AreaItem[] = [
  {
    name: '中南半岛',
    lat: 15.5,
    lng: 103.5,
    radius: 760000,
    desc: '东南亚的大陆部分，位于中国以南，与我国山水相连，主要包括越南、老挝、柬埔寨、泰国、缅甸等国家。',
    offsetX: 0,
    offsetY: -10,
  },
  {
    name: '马来群岛',
    lat: -1.5,
    lng: 116,
    radius: 1180000,
    desc: '东南亚的岛屿部分，位于中南半岛东南方，岛屿众多，主要包括印度尼西亚、菲律宾、马来西亚、文莱、东帝汶等。',
    offsetX: 0,
    offsetY: -10,
  },
]

const latitudeLines: LineItem[] = [
  {
    name: '赤道',
    path: [
      [0, 88],
      [0, 136],
    ],
    desc: '赤道穿过东南亚岛屿地区，说明东南亚大部分位于低纬热带。',
    color: '#ef4444',
    dashArray: '8 6',
  },
  {
    name: '北回归线',
    path: [
      [23.5, 88],
      [23.5, 136],
    ],
    desc: '北回归线经过东南亚北部附近，帮助判断东南亚主要处于低纬度、热带位置。',
    color: '#9333ea',
    dashArray: '8 6',
  },
]

const crossroadAreas: AreaItem[] = [
  {
    name: '东方十字路口核心区',
    lat: 4.5,
    lng: 104.5,
    radius: 1350000,
    desc: '东南亚处于亚洲与大洋洲、太平洋与印度洋之间，是沟通两洲两洋的重要区域，海上航线密集。',
    offsetX: 0,
    offsetY: -10,
  },
  {
    name: '海陆联系枢纽区',
    lat: 11.5,
    lng: 109.5,
    radius: 760000,
    desc: '中南半岛与南海、马来群岛相连，既有陆上联系，也有海上联系，是东亚通向东南亚的重要方向。',
    offsetX: 0,
    offsetY: -10,
  },
]

const seaAreas: AreaItem[] = [
  {
    name: '太平洋',
    lat: 12,
    lng: 132,
    radius: 950000,
    desc: '位于东南亚东侧，是连接东亚、大洋洲的重要海域。',
  },
  {
    name: '印度洋',
    lat: -4,
    lng: 88,
    radius: 850000,
    desc: '位于东南亚西南侧，是沟通南亚、中东、非洲和欧洲的重要海域。',
  },
  {
    name: '南海',
    lat: 12,
    lng: 113,
    radius: 520000,
    desc: '位于中南半岛和菲律宾群岛之间，是重要海上交通区域。',
  },
]

const straitLines: LineItem[] = [
  {
    name: '马六甲海峡',
    path: [
      [1.2320506, 103.3028407],
      [1.5724445, 102.753653],
      [1.934738, 102.0726603],
      [2.3518277, 101.6992127],
      [2.7249082, 100.8973987],
      [3.7776365, 99.8429583],
      [4.161145, 99.5024619],
      [4.5663649, 99.1180305],
      [4.8290892, 98.8873717],
    ],
    desc: '东方十字路口，位于马来半岛和苏门答腊岛之间，连接印度洋和太平洋，是世界重要海上通道。',
    color: '#f97316',
  },
]

function switchBaseLayer() {
  if (!map) return

  if (baseLayer) {
    baseLayer.removeFrom(map)
    baseLayer = null
  }

  const url = useGoogle.value ? TILE_MAP.google : TILE_MAP.osm

  baseLayer = L.tileLayer(url!, {
    attribution: '',
    minZoom: 2,
    maxZoom: 5,
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

  if (showRegions.value) {
    regionLabels.forEach(updateOneLabelPosition)
  }

  if (showLatitudeLines.value) {
    latitudeLineLabels.forEach(updateOneLabelPosition)
  }

  if (showCrossroad.value) {
    crossroadLabels.forEach(updateOneLabelPosition)
  }

  if (showSeaAreas.value) {
    seaAreaLabels.forEach(updateOneLabelPosition)
  }

  if (showStrait.value) {
    straitLabels.forEach(updateOneLabelPosition)
  }

  geoJsonLabels.forEach(updateOneLabelPosition)
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

function showMapInfo(title: string, desc: string, type = '地图要素') {
  activeMapInfo.value = {
    name: title,
    type,
    desc,
  }
}

function bindInfoPopup(layer: L.Layer, title: string, desc: string, type = '地图要素') {
  layer.on('click', () => {
    showMapInfo(title, desc, type)
  })
}

async function loadGeoJsonLayer(options: { type: 'boundary' | 'country' }) {
  if (!map) return

  const isBoundary = options.type === 'boundary'

  if (isBoundary) {
    clearBoundaryLayer()
    boundaryAbortController = new AbortController()
  } else {
    clearCountryLayer()
    countryAbortController = new AbortController()
  }

  const abortController = isBoundary ? boundaryAbortController! : countryAbortController!

  try {
    const data = await new Promise<GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>>((resolve, reject) => {
      setTimeout(() => {
        resolve(GEOJSON_MAP[options.type === 'boundary' ? '东南亚轮廓线' : '东南亚国家轮廓线']!)
      }, 1000)
    })

    if (abortController.signal.aborted || !map) return
    if (isBoundary && !showBoundary.value) return
    if (!isBoundary && !showCountries.value) return

    const layer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },
      style: feature => {
        const props = feature?.properties || {}

        if (isBoundary) {
          return {
            color: props.strokeColor || '#047857',
            weight: props.weight || 2.4,
            opacity: props.opacity ?? 0.96,
            fillColor: props.fillColor || '#10b981',
            fillOpacity: props.fillOpacity ?? 0.12,
          }
        }

        return {
          color: props.strokeColor || '#059669',
          weight: props.weight || 1.4,
          opacity: props.opacity ?? 0.9,
          fillColor: props.fillColor || '#34d399',
          fillOpacity: props.fillOpacity ?? 0.2,
        }
      },
      onEachFeature: (feature, layer) => {
        const props = feature?.properties || {}
        const name = props.name || props.NAME || props.Name || props.labelText || (isBoundary ? '东南亚轮廓线' : '东南亚主要国家')
        const desc = props.desc || props.description || (isBoundary ? '东南亚区域轮廓范围。' : '东南亚主要国家范围。')

        bindInfoPopup(layer, name, desc, isBoundary ? '东南亚轮廓线' : '东南亚主要国家')
      },
    }).addTo(map)

    if (isBoundary) {
      boundaryLayer = layer
    } else {
      countryLayer = layer
    }

    addGeoJsonPointLabels(data, isBoundary ? 'geo-boundary-label-dom' : 'geo-country-label-dom')

    await nextTick()
    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log(`${isBoundary ? '东南亚轮廓线' : '东南亚主要国家'}请求已取消`)
    } else {
      console.error(`${isBoundary ? '东南亚轮廓线' : '东南亚主要国家'}加载失败：`, error)

      if (isBoundary) {
        showBoundary.value = false
      } else {
        showCountries.value = false
      }
    }
  } finally {
    if (isBoundary && boundaryAbortController === abortController) {
      boundaryAbortController = null
    }

    if (!isBoundary && countryAbortController === abortController) {
      countryAbortController = null
    }
  }
}

function addGeoJsonPointLabels(geojson: any, className: string) {
  const features = getGeoJsonFeatures(geojson)

  features.forEach((feature: any) => {
    if (!feature?.geometry) return

    const type = feature.geometry.type

    if (type === 'Point') {
      addGeoJsonPointLabel(feature, className)
    }

    if (type === 'MultiPoint') {
      const coordinates = feature.geometry.coordinates
      if (!Array.isArray(coordinates)) return

      coordinates.forEach((coord: any) => {
        addGeoJsonPointLabel(
          {
            ...feature,
            geometry: {
              type: 'Point',
              coordinates: coord,
            },
          },
          className,
        )
      })
    }
  })
}

function getGeoJsonFeatures(geojson: any) {
  if (!geojson) return []

  if (geojson.type === 'FeatureCollection') {
    return Array.isArray(geojson.features) ? geojson.features : []
  }

  if (geojson.type === 'Feature') {
    return [geojson]
  }

  return []
}

function addGeoJsonPointLabel(feature: any, className: string) {
  const labelText = feature.properties?.labelText || feature.properties?.name
  if (!labelText) return

  const coordinates = feature.geometry?.coordinates
  if (!Array.isArray(coordinates) || coordinates.length < 2) return

  const lng = Number(coordinates[0])
  const lat = Number(coordinates[1])

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return

  const label = createDomLabel({
    lat,
    lng,
    content: labelText,
    className,
    offsetX: 0,
    offsetY: -8,
  })

  if (label) {
    geoJsonLabels.push(label)
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

  clearDomLabels(geoJsonLabels)
}

function clearCountryLayer() {
  if (countryAbortController) {
    countryAbortController.abort()
    countryAbortController = null
  }

  if (countryLayer && map) {
    countryLayer.removeFrom(map)
    countryLayer = null
  }

  clearDomLabels(geoJsonLabels)
}

function toggleBoundaryLayer() {
  if (showBoundary.value) {
    loadGeoJsonLayer({
      type: 'boundary',
    })
  } else {
    clearBoundaryLayer()
  }
}

function toggleCountryLayer() {
  if (showCountries.value) {
    loadGeoJsonLayer({
      type: 'country',
    })
  } else {
    clearCountryLayer()
  }
}

function addAreaLayer(
  targetLayer: L.LayerGroup,
  targetLabels: DomLabel[],
  areas: AreaItem[],
  labelClassName: string,
  color: string,
  fillOpacity = 0.14,
  infoType = '范围区域',
) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  areas.forEach(item => {
    const circle = L.circle([item.lat, item.lng], {
      radius: item.radius,
      color,
      weight: 2,
      fillColor: color,
      fillOpacity,
      opacity: 0.78,
    }).addTo(targetLayer)

    bindInfoPopup(circle, item.name, item.desc, infoType)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: labelClassName,
      offsetX: item.offsetX ?? 0,
      offsetY: item.offsetY ?? 0,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function addLineLayer(
  targetLayer: L.LayerGroup,
  targetLabels: DomLabel[],
  lines: LineItem[],
  labelClassName = 'strait-label-dom',
  infoType = '线状要素',
) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  lines.forEach(item => {
    const line = L.polyline(item.path, {
      color: item.color,
      weight: 4,
      opacity: 0.9,
      dashArray: item.dashArray || '',
    }).addTo(targetLayer)

    bindInfoPopup(line, item.name, item.desc, infoType)

    const midIndex = Math.floor(item.path.length / 2)
    const midPoint = item.path[midIndex]

    if (midPoint) {
      const label = createDomLabel({
        lat: midPoint[0],
        lng: midPoint[1],
        content: item.name,
        className: labelClassName,
        offsetX: 10,
        offsetY: -20,
      })

      if (label) targetLabels.push(label)
    }
  })

  targetLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showRegions.value) {
    addAreaLayer(regionLayer, regionLabels, regionAreas, 'region-label-dom', '#10b981', 0.12, '组成范围')
  } else {
    regionLayer.clearLayers()
    clearDomLabels(regionLabels)
  }

  if (showLatitudeLines.value) {
    addLineLayer(latitudeLineLayer, latitudeLineLabels, latitudeLines, 'latitude-label-dom', '重要纬线')
  } else {
    latitudeLineLayer.clearLayers()
    clearDomLabels(latitudeLineLabels)
  }

  if (showCrossroad.value) {
    addAreaLayer(crossroadLayer, crossroadLabels, crossroadAreas, 'crossroad-label-dom', '#f59e0b', 0.22, '东方十字路口')
  } else {
    crossroadLayer.clearLayers()
    clearDomLabels(crossroadLabels)
  }

  if (showSeaAreas.value) {
    addAreaLayer(seaAreaLayer, seaAreaLabels, seaAreas, 'sea-label-dom', '#0ea5e9', 0.12, '重要海域')
  } else {
    seaAreaLayer.clearLayers()
    clearDomLabels(seaAreaLabels)
  }

  if (showStrait.value) {
    addLineLayer(straitLayer, straitLabels, straitLines, 'strait-label-dom', '重要海峡')
  } else {
    straitLayer.clearLayers()
    clearDomLabels(straitLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  clearBoundaryLayer()
  clearCountryLayer()

  regionLayer.clearLayers()
  latitudeLineLayer.clearLayers()
  crossroadLayer.clearLayers()
  seaAreaLayer.clearLayers()
  straitLayer.clearLayers()

  if (map.hasLayer(regionLayer)) regionLayer.removeFrom(map)
  if (map.hasLayer(latitudeLineLayer)) latitudeLineLayer.removeFrom(map)
  if (map.hasLayer(crossroadLayer)) crossroadLayer.removeFrom(map)
  if (map.hasLayer(seaAreaLayer)) seaAreaLayer.removeFrom(map)
  if (map.hasLayer(straitLayer)) straitLayer.removeFrom(map)

  clearDomLabels(regionLabels)
  clearDomLabels(latitudeLineLabels)
  clearDomLabels(crossroadLabels)
  clearDomLabels(seaAreaLabels)
  clearDomLabels(straitLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaPositionMap', {
    zoomControl: true,
    attributionControl: false,
    minZoom: 2,
    maxZoom: 5,
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
.position-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.position-header {
  margin-bottom: 32px;
}

.position-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.position-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.position-content-right {
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

.position-card {
  border-radius: 8px;
  border: 1px solid rgba(16, 185, 129, 0.26);
  padding: 14px;
}

.position-card-01 {
  background: #ecfdf5;
  border-color: rgba(16, 185, 129, 0.35);
}

.position-card-02 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.position-card-03 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.position-card-04 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.position-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.position-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #047857;
}

.position-card-03 .position-card-header {
  color: #0369a1;
}

.position-card-04 .position-card-header {
  color: #9a3412;
}

.position-card-05 .position-card-header {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.position-card-03 .iconfont {
  color: #0369a1;
}

.position-card-04 .iconfont {
  color: #9a3412;
}

.position-card-05 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.position-card p {
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

.rule-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 8px;
}

.rule-item:last-child {
  margin-bottom: 0;
}

.rule-title {
  font-weight: bold;
  color: #047857;
  margin-bottom: 4px;
}

.rule-desc {
  font-size: 13px;
  color: #444;
  line-height: 1.45;
}

.sea-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.sea-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #bae6fd;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.sea-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.sea-title {
  font-weight: bold;
  color: #0369a1;
  margin-bottom: 4px;
}

.sea-desc {
  font-size: 12px;
  color: #374151;
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

.traffic-fill {
  width: 94%;
  background: #0ea5e9;
}

.climate-fill {
  width: 90%;
  background: var(--primary-color);
}

.agriculture-fill {
  width: 86%;
  background: #84cc16;
}

.relation-fill {
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

.location-formula {
  margin-bottom: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  background: #fff;
  border-left: 3px solid #f59e0b;
  color: #7c2d12;
  font-size: 13px;
  line-height: 1.55;
  font-weight: 600;
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

.map-control-panel {
  position: absolute;
  top: 48px;
  right: 10px;
  width: 220px;
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
  width: 24px;
  height: 0;
  display: inline-block;
  flex-shrink: 0;
}

.boundary-line {
  border-top: 2px solid #047857;
}

.strait-line {
  border-top: 3px solid #f97316;
}

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.country-area {
  background: rgba(52, 211, 153, 0.28);
  border: 1px solid #059669;
}

.sea-area {
  background: rgba(14, 165, 233, 0.18);
  border: 1px solid #0ea5e9;
}

.region-area {
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid #10b981;
}

.crossroad-area {
  background: rgba(245, 158, 11, 0.24);
  border: 1px solid #f59e0b;
}

.latitude-line {
  border-top: 2px dashed #ef4444;
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

:deep(.sea-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #0369a1;
  background: rgba(240, 249, 255, 0.94);
  border: 1px solid rgba(14, 165, 233, 0.6);
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.strait-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #c2410c;
  background: rgba(255, 247, 237, 0.95);
  border: 1px solid rgba(249, 115, 22, 0.65);
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.region-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 13px;
  font-weight: bold;
  color: #047857;
  background: rgba(236, 253, 245, 0.96);
  border: 1px solid rgba(16, 185, 129, 0.72);
  border-radius: 999px;
  padding: 4px 10px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  box-shadow: 0 2px 8px rgba(15, 118, 110, 0.18);
}

:deep(.latitude-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #991b1b;
  background: rgba(254, 242, 242, 0.95);
  border: 1px solid rgba(239, 68, 68, 0.6);
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.crossroad-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #b45309;
  background: rgba(255, 251, 235, 0.96);
  border: 1px solid rgba(245, 158, 11, 0.72);
  border-radius: 999px;
  padding: 4px 10px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  box-shadow: 0 2px 8px rgba(180, 83, 9, 0.16);
}

:deep(.geo-boundary-label-dom),
:deep(.geo-country-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: bold;
  color: #047857;
  background: rgba(236, 253, 245, 0.94);
  border: 1px solid rgba(16, 185, 129, 0.62);
  border-radius: 999px;
  padding: 3px 8px;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

.position-card-06 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.position-card-07 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.position-card-06 .position-card-header {
  color: #334155;
}

.position-card-07 .position-card-header {
  color: #0f766e;
}

.position-card-06 .iconfont {
  color: #334155;
}

.position-card-07 .iconfont {
  color: #0f766e;
}

.answer-method {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
}

.method-title {
  font-weight: bold;
  color: #334155;
  margin-bottom: 10px;
}

.method-step {
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 8px;
  align-items: flex-start;
  padding: 8px 0;
  border-bottom: 1px solid #e2e8f0;
}

.method-step:last-child {
  border-bottom: 0;
}

.method-step span {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #e0f2fe;
  color: #0369a1;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.method-step strong {
  color: #334155;
}

.method-step p {
  margin: 4px 0 0;
  color: #475569;
  font-size: 13px;
  line-height: 1.45;
}

.task-list {
  display: grid;
  gap: 8px;
}

.task-item {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 8px;
  align-items: start;
  background: #fff;
  border-radius: 8px;
  padding: 9px 10px;
  border: 1px solid rgba(20, 184, 166, 0.22);
}

.task-item span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  border-radius: 999px;
  background: #ccfbf1;
  color: #0f766e;
  font-size: 12px;
  font-weight: bold;
}

.task-item p {
  margin: 0;
  color: #475569;
  font-size: 13px;
  line-height: 1.45;
}

.focus-card {
  position: absolute;
  left: 12px;
  bottom: 12px;
  z-index: 1000;
  width: 310px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 8px;
  padding: 10px 12px;
  box-shadow: 0 2px 10px rgba(15, 39, 72, 0.16);
  border-left: 4px solid var(--primary-color);
}

.focus-card-empty {
  border-left-color: #94a3b8;
}

.focus-title {
  font-weight: bold;
  color: var(--primary-color);
  font-size: 15px;
  margin-bottom: 4px;
}

.focus-card-empty .focus-title {
  color: #334155;
}

.focus-type {
  font-size: 12px;
  color: #0369a1;
  margin-bottom: 4px;
}

.focus-card-empty .focus-type {
  color: #64748b;
}

.focus-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.45;
}
</style>
