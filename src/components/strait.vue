<template>
  <div class="strait-container">
    <div class="strait-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="strait-content">
      <div class="strait-content-left">
        <div class="strait-card strait-card-01">
          <div class="strait-card-header"><i class="iconfont icon-haiyang"></i>马六甲海峡的位置</div>

          <p class="mb-8">
            马六甲海峡位于<strong>马来半岛</strong>和<strong>苏门答腊岛</strong>之间，
            是连接<strong>印度洋</strong>和<strong>太平洋</strong>的重要海上通道。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">连接海域</div>
              <div class="feature-value">两洋通道</div>
              <div class="feature-desc">沟通印度洋和太平洋，是东西方海上交通要道。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">相邻地区</div>
              <div class="feature-value">半岛与岛屿</div>
              <div class="feature-desc">位于马来半岛和苏门答腊岛之间。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              马六甲海峡的重要性可以概括为：
              <strong>位置关键、航运繁忙、沟通两洋、联系东西。</strong>
            </div>
          </div>
        </div>

        <div class="strait-card strait-card-02">
          <div class="strait-card-header"><i class="iconfont icon-lunchuan"></i>世界重要海上通道</div>

          <div class="info-item">
            <div class="item-title">连接东西方航线</div>
            <div class="item-desc">来自欧洲、西亚、南亚的船舶，可以通过马六甲海峡进入南海，再通往中国、日本、韩国等东亚地区。</div>
          </div>

          <div class="info-item">
            <div class="item-title">能源运输通道</div>
            <div class="item-desc">西亚石油运往东亚的重要航线经过马六甲海峡，因此它具有突出的能源运输价值。</div>
          </div>

          <div class="info-item">
            <div class="item-title">新加坡区位优势</div>
            <div class="item-desc">新加坡位于马六甲海峡东南端附近，凭借优越位置发展成为世界重要港口和国际贸易中心。</div>
          </div>
        </div>

        <div class="strait-card strait-card-03">
          <div class="strait-card-header"><i class="iconfont icon-gangkou"></i>重要港口与节点</div>

          <div class="node-grid">
            <div class="node-card">
              <div class="node-icon">⚓</div>
              <div class="node-title">新加坡</div>
              <div class="node-desc">位于海峡东南端附近，是世界重要港口和转口贸易中心。</div>
            </div>

            <div class="node-card">
              <div class="node-icon">🚢</div>
              <div class="node-title">吉隆坡附近港口</div>
              <div class="node-desc">马来西亚西海岸港口与海峡航运联系密切。</div>
            </div>

            <div class="node-card">
              <div class="node-icon">🛢️</div>
              <div class="node-title">西亚石油航线</div>
              <div class="node-desc">西亚石油经印度洋、马六甲海峡运往东亚。</div>
            </div>

            <div class="node-card">
              <div class="node-icon">🌏</div>
              <div class="node-title">东亚市场</div>
              <div class="node-desc">中国、日本、韩国等地区与该航道联系密切。</div>
            </div>
          </div>
        </div>

        <div class="strait-card strait-card-04">
          <div class="strait-card-header"><i class="iconfont icon-yingxiang"></i>为什么重要？</div>

          <div class="factor-row">
            <div class="factor-label">位置</div>
            <div class="factor-bar">
              <div class="factor-fill position-fill"></div>
            </div>
            <div class="factor-text">位于两洋之间，是东南亚“十字路口”地位的重要体现。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">航运</div>
            <div class="factor-bar">
              <div class="factor-fill shipping-fill"></div>
            </div>
            <div class="factor-text">连接印度洋和太平洋，过往船舶多，航运价值突出。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">能源</div>
            <div class="factor-bar">
              <div class="factor-fill energy-fill"></div>
            </div>
            <div class="factor-text">西亚石油运往东亚的重要海上通道，能源战略意义明显。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">贸易</div>
            <div class="factor-bar">
              <div class="factor-fill trade-fill"></div>
            </div>
            <div class="factor-text">促进东南亚港口、贸易、物流和服务业发展。</div>
          </div>

          <div class="chart-tip">注：上图为课堂示意，用于理解马六甲海峡的重要性，不表示严格统计比例。</div>
        </div>

        <div class="strait-card strait-card-05">
          <div class="strait-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记位置：</strong>马六甲海峡位于马来半岛和苏门答腊岛之间。</li>
            <li><strong>二记连接：</strong>连接印度洋和太平洋。</li>
            <li><strong>三记航线：</strong>是东西方海上交通要道。</li>
            <li><strong>四记能源：</strong>西亚石油运往东亚的重要通道。</li>
            <li><strong>五记城市：</strong>新加坡因临近海峡，港口和贸易发达。</li>
          </ul>
        </div>
      </div>

      <div class="strait-content-right">
        <div id="southeastAsiaStraitMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看马六甲海峡位置</div>

        <div class="layer-control-panel">
          <div class="panel-title">图层控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showStraitLine" @change="refreshMapLayers" />
            马六甲海峡
          </label>

          <label>
            <input type="checkbox" v-model="showOilRoute" @change="refreshMapLayers" />
            西亚石油航线
          </label>

          <label>
            <input type="checkbox" v-model="showEastAsiaRoute" @change="refreshMapLayers" />
            东亚贸易航线
          </label>

          <label>
            <input type="checkbox" v-model="showPortPoints" @change="refreshMapLayers" />
            重要港口城市
          </label>

          <label>
            <input type="checkbox" v-model="showSeaLabels" @change="refreshMapLayers" />
            重要海域标注
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-line strait-line"></span>
              <span>马六甲海峡</span>
            </div>

            <div class="legend-row">
              <span class="legend-arrow oil-arrow"></span>
              <span>西亚石油航线</span>
            </div>

            <div class="legend-row">
              <span class="legend-arrow trade-arrow"></span>
              <span>东亚贸易航线</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot port-dot"></span>
              <span>重要港口城市</span>
            </div>

            <div class="legend-row">
              <span class="legend-area sea-area"></span>
              <span>重要海域</span>
            </div>
          </div>

          <div class="map-note">
            <div class="map-note-title">读图提示</div>
            <div>重点观察马六甲海峡连接印度洋和太平洋的位置，理解新加坡港口发展的区位优势。</div>
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

type LineItem = {
  name: string
  path: [number, number][]
  desc: string
  color: string
  dashArray?: string
  weight?: number
  className: string
  arrow?: boolean
  arrowSize?: number
}

type PointItem = {
  name: string
  icon: string
  lat: number
  lng: number
  desc: string
  color: string
  fillColor: string
  className: string
  offsetX?: number
  offsetY?: number
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

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 4
const centerLng = 104
const zoomLevel = 5

const useGoogle = ref(false)
const showStraitLine = ref(true)
const showOilRoute = ref(true)
const showEastAsiaRoute = ref(true)
const showPortPoints = ref(true)
const showSeaLabels = ref(true)

const straitLayer = L.layerGroup()
const oilRouteLayer = L.layerGroup()
const eastAsiaRouteLayer = L.layerGroup()
const portLayer = L.layerGroup()
const seaLabelLayer = L.layerGroup()

const straitLabels: DomLabel[] = []
const oilRouteLabels: DomLabel[] = []
const eastAsiaRouteLabels: DomLabel[] = []
const portLabels: DomLabel[] = []
const seaLabels: DomLabel[] = []

const straitLines: LineItem[] = [
  {
    name: '马六甲海峡',
    path: [
      [6.1, 95.2],
      [5.5, 96.3],
      [4.7, 97.6],
      [3.9, 99.0],
      [3.0, 100.4],
      [2.2, 101.8],
      [1.35, 103.8],
    ],
    desc: '马六甲海峡位于马来半岛和苏门答腊岛之间，连接印度洋和太平洋。',
    color: '#f97316',
    weight: 5,
    className: 'strait-label-dom',
  },
]

const oilRoutes: LineItem[] = [
  {
    name: '西亚石油航线',
    path: [
      [18.0, 58.0],
      [12.0, 67.0],
      [7.0, 76.0],
      [5.0, 86.0],
      [4.0, 96.0],
      [1.35, 103.8],
      [8.0, 112.0],
      [16.0, 120.0],
      [24.0, 122.0],
    ],
    desc: '西亚石油经印度洋、马六甲海峡和南海运往东亚地区。',
    color: '#0ea5e9',
    dashArray: '9 7',
    weight: 4,
    className: 'oil-route-label-dom',
    arrow: true,
    arrowSize: 1.5,
  },
]

const eastAsiaRoutes: LineItem[] = [
  {
    name: '东亚贸易航线',
    path: [
      [1.35, 103.8],
      [4.0, 108.0],
      [8.0, 112.0],
      [12.0, 116.0],
      [18.0, 120.5],
      [25.0, 123.0],
      [31.0, 125.0],
    ],
    desc: '马六甲海峡经南海连接中国、日本、韩国等东亚市场。',
    color: '#10b981',
    dashArray: '8 6',
    weight: 4,
    className: 'trade-route-label-dom',
    arrow: true,
    arrowSize: 1.3,
  },
]

const portPoints: PointItem[] = [
  {
    name: '新加坡',
    icon: '⚓',
    lat: 1.35,
    lng: 103.82,
    desc: '位于马六甲海峡东南端附近，是世界重要港口和国际贸易中心。',
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '吉隆坡',
    icon: '🏙️',
    lat: 3.14,
    lng: 101.69,
    desc: '马来西亚重要城市，靠近马六甲海峡航运通道。',
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '槟城',
    icon: '⚓',
    lat: 5.41,
    lng: 100.33,
    desc: '马来西亚西海岸重要港口城市，临近马六甲海峡。',
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '棉兰',
    icon: '⚓',
    lat: 3.59,
    lng: 98.67,
    desc: '位于苏门答腊岛北部，靠近马六甲海峡西南侧。',
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
    offsetX: 12,
    offsetY: -4,
  },
]

const seaAreas: AreaItem[] = [
  {
    name: '印度洋',
    lat: 2.0,
    lng: 82.0,
    radius: 750000,
    desc: '马六甲海峡西侧连接印度洋。',
    color: '#0ea5e9',
    fillColor: '#38bdf8',
    fillOpacity: 0.1,
    className: 'sea-label-dom',
  },
  {
    name: '南海',
    lat: 11.0,
    lng: 113.0,
    radius: 600000,
    desc: '马六甲海峡东侧经南海连接东亚地区。',
    color: '#0ea5e9',
    fillColor: '#38bdf8',
    fillOpacity: 0.1,
    className: 'sea-label-dom',
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

  if (showStraitLine.value) straitLabels.forEach(updateOneLabelPosition)
  if (showOilRoute.value) oilRouteLabels.forEach(updateOneLabelPosition)
  if (showEastAsiaRoute.value) eastAsiaRouteLabels.forEach(updateOneLabelPosition)
  if (showPortPoints.value) portLabels.forEach(updateOneLabelPosition)
  if (showSeaLabels.value) seaLabels.forEach(updateOneLabelPosition)
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
      <div style="min-width: 170px; line-height: 1.5;">
        <div style="font-weight: bold; margin-bottom: 4px;">${escapeHtml(title)}</div>
        <div style="font-size: 12px; color: #444;">${escapeHtml(desc)}</div>
      </div>
    `)
  }
}

function getArrowHeadPoints(path: [number, number][], size = 1.2): [number, number][] {
  const end = path[path.length - 1]
  const before = path[path.length - 2]

  if (!end || !before) return []

  const [endLat, endLng] = end
  const [beforeLat, beforeLng] = before

  const dx = endLng - beforeLng
  const dy = endLat - beforeLat
  const length = Math.sqrt(dx * dx + dy * dy)

  if (!length) return []

  const ux = dx / length
  const uy = dy / length

  const baseLat = endLat - uy * size
  const baseLng = endLng - ux * size

  const perpendicularX = -uy
  const perpendicularY = ux
  const width = size * 0.55

  return [
    [endLat, endLng],
    [baseLat + perpendicularY * width, baseLng + perpendicularX * width],
    [baseLat - perpendicularY * width, baseLng - perpendicularX * width],
  ]
}

function addLineLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], lines: LineItem[]) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  lines.forEach(item => {
    const line = L.polyline(item.path, {
      color: item.color,
      weight: item.weight || 3,
      opacity: 0.9,
      dashArray: item.dashArray || '',
      smoothFactor: 0,
      lineJoin: 'round',
      lineCap: 'round',
    }).addTo(targetLayer)

    bindInfoPopup(line, item.name, item.desc)

    if (item.arrow) {
      const arrowHeadPoints = getArrowHeadPoints(item.path, item.arrowSize || 1.2)

      if (arrowHeadPoints.length) {
        L.polygon(arrowHeadPoints, {
          color: item.color,
          weight: 1,
          fillColor: item.color,
          fillOpacity: 0.9,
          opacity: 0.9,
        }).addTo(targetLayer)
      }
    }

    const midIndex = Math.floor(item.path.length / 2)
    const midPoint = item.path[midIndex]

    if (midPoint) {
      const label = createDomLabel({
        lat: midPoint[0],
        lng: midPoint[1],
        content: item.name,
        className: item.className,
        offsetX: 0,
        offsetY: -10,
      })

      if (label) targetLabels.push(label)
    }
  })

  targetLayer.addTo(map)
}

function addPointLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], points: PointItem[]) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  points.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 5.5,
      color: item.color,
      weight: 2,
      fillColor: item.fillColor,
      fillOpacity: 1,
    }).addTo(targetLayer)

    bindInfoPopup(marker, `${item.icon} ${item.name}`, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: `${item.icon} ${item.name}`,
      className: item.className,
      offsetX: item.offsetX ?? 12,
      offsetY: item.offsetY ?? -4,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
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
      opacity: 0.78,
    }).addTo(targetLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: item.className,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showStraitLine.value) {
    addLineLayer(straitLayer, straitLabels, straitLines)
  } else {
    straitLayer.clearLayers()
    clearDomLabels(straitLabels)
  }

  if (showOilRoute.value) {
    addLineLayer(oilRouteLayer, oilRouteLabels, oilRoutes)
  } else {
    oilRouteLayer.clearLayers()
    clearDomLabels(oilRouteLabels)
  }

  if (showEastAsiaRoute.value) {
    addLineLayer(eastAsiaRouteLayer, eastAsiaRouteLabels, eastAsiaRoutes)
  } else {
    eastAsiaRouteLayer.clearLayers()
    clearDomLabels(eastAsiaRouteLabels)
  }

  if (showPortPoints.value) {
    addPointLayer(portLayer, portLabels, portPoints)
  } else {
    portLayer.clearLayers()
    clearDomLabels(portLabels)
  }

  if (showSeaLabels.value) {
    addAreaLayer(seaLabelLayer, seaLabels, seaAreas)
  } else {
    seaLabelLayer.clearLayers()
    clearDomLabels(seaLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  straitLayer.clearLayers()
  oilRouteLayer.clearLayers()
  eastAsiaRouteLayer.clearLayers()
  portLayer.clearLayers()
  seaLabelLayer.clearLayers()

  if (map.hasLayer(straitLayer)) straitLayer.removeFrom(map)
  if (map.hasLayer(oilRouteLayer)) oilRouteLayer.removeFrom(map)
  if (map.hasLayer(eastAsiaRouteLayer)) eastAsiaRouteLayer.removeFrom(map)
  if (map.hasLayer(portLayer)) portLayer.removeFrom(map)
  if (map.hasLayer(seaLabelLayer)) seaLabelLayer.removeFrom(map)

  clearDomLabels(straitLabels)
  clearDomLabels(oilRouteLabels)
  clearDomLabels(eastAsiaRouteLabels)
  clearDomLabels(portLabels)
  clearDomLabels(seaLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaStraitMap', {
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
.strait-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.strait-header {
  margin-bottom: 32px;
}

.strait-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.strait-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.strait-content-right {
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

.strait-card {
  border-radius: 8px;
  border: 1px solid rgba(16, 185, 129, 0.26);
  padding: 14px;
}

.strait-card-01 {
  background: #ecfdf5;
  border-color: rgba(16, 185, 129, 0.35);
}

.strait-card-02 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.strait-card-03 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.strait-card-04 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.strait-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.strait-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #047857;
}

.strait-card-04 .strait-card-header {
  color: #9a3412;
}

.strait-card-05 .strait-card-header {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.strait-card-04 .iconfont {
  color: #9a3412;
}

.strait-card-05 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.strait-card p {
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

.info-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 8px;
}

.info-item:last-child {
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

.node-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.node-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #cee3ed;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.node-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.node-title {
  font-weight: bold;
  color: #0369a1;
  margin-bottom: 4px;
}

.node-desc {
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

.position-fill {
  width: 96%;
  background: var(--primary-color);
}

.shipping-fill {
  width: 94%;
  background: #0ea5e9;
}

.energy-fill {
  width: 90%;
  background: #f97316;
}

.trade-fill {
  width: 86%;
  background: #8b5cf6;
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

.legend-line {
  width: 24px;
  height: 0;
  display: inline-block;
  flex-shrink: 0;
}

.strait-line {
  border-top: 4px solid #f97316;
}

.legend-arrow {
  width: 30px;
  height: 10px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}

.legend-arrow::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  width: 22px;
  border-top: 3px dashed currentColor;
}

.legend-arrow::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  border-left: 9px solid currentColor;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}

.oil-arrow {
  color: #0ea5e9;
}

.trade-arrow {
  color: #10b981;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.port-dot {
  background: #10b981;
  border: 2px solid #064e3b;
  box-sizing: border-box;
}

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.sea-area {
  background: rgba(56, 189, 248, 0.2);
  border: 1px solid #0ea5e9;
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

:deep(.strait-label-dom),
:deep(.oil-route-label-dom),
:deep(.trade-route-label-dom),
:deep(.sea-label-dom) {
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

:deep(.strait-label-dom) {
  background: rgba(249, 115, 22, 0.9);
}

:deep(.oil-route-label-dom) {
  background: rgba(14, 116, 144, 0.9);
}

:deep(.trade-route-label-dom) {
  background: rgba(4, 120, 87, 0.9);
}

:deep(.sea-label-dom) {
  background: rgba(3, 105, 161, 0.82);
}

:deep(.port-label-dom) {
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
