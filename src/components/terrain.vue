<template>
  <div class="terrain-container">
    <div class="terrain-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="terrain-content">
      <!-- 左侧文字内容区 -->
      <div class="terrain-content-left">
        <div class="terrain-card terrain-card-01">
          <div class="terrain-card-header"><i class="iconfont icon-haibagaodu"></i>地形总体特征</div>

          <p class="mb-8">
            东南亚地形差异明显，其中<strong>中南半岛</strong>地形特点最突出：
            山脉和河流大多由北向南延伸，形成<strong>山河相间、纵列分布</strong>的格局。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">中南半岛</div>
              <div class="feature-value">山河相间</div>
              <div class="feature-desc">山脉和河流大致南北延伸，交替分布。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">马来群岛</div>
              <div class="feature-value">岛屿众多</div>
              <div class="feature-desc">地处板块交界附近，火山地震活动较多。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>东南亚地形河流影响了<strong>人口、城市、农业和交通</strong>分布， 河流沿岸和河口三角洲往往是人类活动集中的地区。</div>
          </div>
        </div>

        <div class="terrain-card terrain-card-02">
          <div class="terrain-card-header"><i class="iconfont icon-heliu"></i>主要河流</div>

          <div class="river-item">
            <div class="item-title">湄公河</div>
            <div class="item-desc">东南亚重要国际河流，流经多个国家，下游形成湄公河三角洲，是重要水稻产区。</div>
          </div>

          <div class="river-item">
            <div class="item-title">湄南河</div>
            <div class="item-desc">流经泰国中部，湄南河平原地势平坦，是泰国重要农业区，曼谷位于其下游附近。</div>
          </div>

          <div class="river-item">
            <div class="item-title">伊洛瓦底江</div>
            <div class="item-desc">缅甸重要河流，流域内平原和三角洲地区农业条件较好。</div>
          </div>

          <div class="river-item">
            <div class="item-title">红河</div>
            <div class="item-desc">流经越南北部，红河三角洲人口稠密，农业和城市发展较早。</div>
          </div>
        </div>

        <div class="terrain-card terrain-card-03">
          <div class="terrain-card-header"><i class="iconfont icon-nongye"></i>河流与农业城市</div>

          <p class="mb-8">东南亚许多河流下游形成广阔的平原和三角洲，地势平坦、土壤肥沃、水源充足， 适合发展<strong>水稻种植业</strong>。</p>

          <div class="effect-item">
            <div class="item-title">河流平原</div>
            <div class="item-desc">便于耕作，水源充足，是人口和农业集中地区。</div>
          </div>

          <div class="effect-item">
            <div class="item-title">河口三角洲</div>
            <div class="item-desc">地势低平，土壤肥沃，是东南亚重要水稻产区。</div>
          </div>

          <div class="effect-item">
            <div class="item-title">沿河城市</div>
            <div class="item-desc">河流提供水源和交通条件，促进城市发展。</div>
          </div>
        </div>

        <div class="terrain-card terrain-card-04">
          <div class="terrain-card-header"><i class="iconfont icon-huoshanshan"></i>马来群岛地形特点</div>

          <p class="mb-8">
            马来群岛位于板块交界附近，地壳运动活跃，火山、地震较多。 印度尼西亚、菲律宾等国火山分布较多，也形成了独特的火山地貌和肥沃火山灰土壤。
          </p>

          <div class="island-grid">
            <div class="island-card">
              <div class="island-icon">🌋</div>
              <div class="island-title">火山较多</div>
              <div class="island-desc">地处板块交界附近，火山活动明显。</div>
            </div>

            <div class="island-card">
              <div class="island-icon">🏝️</div>
              <div class="island-title">岛屿众多</div>
              <div class="island-desc">群岛分布广，是世界岛屿密集区之一。</div>
            </div>

            <div class="island-card">
              <div class="island-icon">🌊</div>
              <div class="island-title">海岸曲折</div>
              <div class="island-desc">港湾众多，海上交通联系密切。</div>
            </div>

            <div class="island-card">
              <div class="island-icon">🌾</div>
              <div class="island-title">土壤肥沃</div>
              <div class="island-desc">部分火山灰土壤利于农业生产。</div>
            </div>
          </div>
        </div>

        <div class="terrain-card terrain-card-05">
          <div class="terrain-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记地形：</strong>中南半岛山河相间，纵列分布。</li>
            <li><strong>二记流向：</strong>主要河流多自北向南流。</li>
            <li><strong>三记河流：</strong>湄公河是东南亚重要国际河流。</li>
            <li><strong>四记三角洲：</strong>河口三角洲适合水稻种植。</li>
            <li><strong>五记群岛：</strong>马来群岛岛屿众多，火山地震较多。</li>
          </ul>
        </div>
      </div>

      <!-- 右侧地图区域 -->
      <div class="terrain-content-right">
        <div id="southeastAsiaTerrainMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看东南亚地形河流</div>

        <div class="layer-control-panel">
          <div class="panel-title">图层控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showRiverLayer" @change="toggleRiverLayer" />
            东南亚主要河流
          </label>

          <label>
            <input type="checkbox" v-model="showMountainRiverLines" @change="refreshMapLayers" />
            山河相间示意
          </label>

          <label>
            <input type="checkbox" v-model="showDeltaAreas" @change="refreshMapLayers" />
            主要三角洲
          </label>

          <label>
            <input type="checkbox" v-model="showCities" @change="refreshMapLayers" />
            主要城市
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-line river-line"></span>
              <span>主要河流</span>
            </div>

            <div class="legend-row">
              <span class="legend-line mountain-line"></span>
              <span>山脉走向</span>
            </div>

            <div class="legend-row">
              <span class="legend-area delta-area"></span>
              <span>河口三角洲</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot city-dot"></span>
              <span>主要城市</span>
            </div>
          </div>

          <div class="elevation-legend">
            <div class="legend-title">海拔图例</div>

            <div class="elevation-gradient"></div>

            <div class="elevation-scale">
              <span>低</span>
              <span>高</span>
            </div>

            <div class="elevation-item">
              <span class="elevation-color deep-sea"></span>
              <span>深海区域</span>
            </div>

            <div class="elevation-item">
              <span class="elevation-color shallow-sea"></span>
              <span>浅海、陆架</span>
            </div>

            <div class="elevation-item">
              <span class="elevation-color lowland"></span>
              <span>低地平原：0–200米</span>
            </div>

            <div class="elevation-item">
              <span class="elevation-color hill"></span>
              <span>丘陵山地：200–1000米</span>
            </div>

            <div class="elevation-item">
              <span class="elevation-color mountain"></span>
              <span>高山地区：1000–3000米</span>
            </div>

            <div class="elevation-item">
              <span class="elevation-color high-mountain"></span>
              <span>高海拔雪山：3000米以上</span>
            </div>
          </div>

          <div class="map-note">
            <div class="map-note-title">读图提示</div>
            <div>观察中南半岛河流与山脉走向，可以理解“山河相间、纵列分布”。</div>
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
  offsetX?: number
  offsetY?: number
}

type PointItem = {
  name: string
  lat: number
  lng: number
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

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

let riverLayer: L.GeoJSON | null = null
let riverAbortController: AbortController | null = null

const baseGeoUrl = 'https://course-code.oss-cn-shanghai.aliyuncs.com/geojson/'

const centerLat = 9
const centerLng = 106
const zoomLevel = 4

const useGoogle = ref(false)
const showRiverLayer = ref(true)
const showMountainRiverLines = ref(true)
const showDeltaAreas = ref(true)
const showCities = ref(true)

const mountainRiverLayer = L.layerGroup()
const deltaLayer = L.layerGroup()
const cityLayer = L.layerGroup()

const riverLabels: DomLabel[] = []
const mountainRiverLabels: DomLabel[] = []
const deltaLabels: DomLabel[] = []
const cityLabels: DomLabel[] = []

const mountainRiverLines: LineItem[] = [
  {
    name: '山脉纵列分布',
    path: [
      [27.5, 97.0],
      [22.0, 98.0],
      [17.0, 99.0],
      [12.0, 100.0],
    ],
    desc: '中南半岛山脉大致南北延伸，与河流相间分布。',
    color: '#8b5e34',
    dashArray: '6 6',
  },
  {
    name: '山脉纵列分布',
    path: [
      [26.0, 101.0],
      [21.0, 102.2],
      [16.0, 103.2],
      [11.0, 104.2],
    ],
    desc: '山脉和河流交替分布，形成纵列格局。',
    color: '#8b5e34',
    dashArray: '6 6',
  },
  {
    name: '山脉纵列分布',
    path: [
      [24.5, 105.0],
      [20.0, 106.2],
      [16.0, 107.0],
      [11.5, 108.2],
    ],
    desc: '地势北高南低，河流多向南流。',
    color: '#8b5e34',
    dashArray: '6 6',
  },
]

const deltaAreas: AreaItem[] = [
  {
    name: '湄公河三角洲',
    lat: 10.2,
    lng: 105.7,
    radius: 155000,
    desc: '位于越南南部，地势低平，水网密布，是重要水稻产区。',
  },
  {
    name: '红河三角洲',
    lat: 20.9,
    lng: 106.0,
    radius: 105000,
    desc: '位于越南北部，人口密集，农业和城市发展较早。',
  },
  {
    name: '湄南河三角洲',
    lat: 13.6,
    lng: 100.5,
    radius: 120000,
    desc: '位于泰国中南部，曼谷附近，农业和城市活动集中。',
  },
  {
    name: '伊洛瓦底江三角洲',
    lat: 16.0,
    lng: 95.5,
    radius: 140000,
    desc: '位于缅甸南部，地势低平，是缅甸重要农业区。',
  },
]

const cityPoints: PointItem[] = [
  {
    name: '河内',
    lat: 21.0278,
    lng: 105.8342,
    desc: '位于红河三角洲附近，是越南重要城市。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '曼谷',
    lat: 13.7563,
    lng: 100.5018,
    desc: '位于湄南河下游附近，是泰国首都。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '金边',
    lat: 11.5564,
    lng: 104.9282,
    desc: '位于湄公河沿岸，是柬埔寨首都。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '仰光',
    lat: 16.8409,
    lng: 96.1735,
    desc: '位于伊洛瓦底江三角洲附近，是缅甸重要城市。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '胡志明市',
    lat: 10.8231,
    lng: 106.6297,
    desc: '靠近湄公河三角洲，是越南南部重要城市。',
    offsetX: 10,
    offsetY: -2,
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
    : 'https://zdys.szjx.ai-study.net/geo-resources-folder/tiles/otm-tiles/{z}/{x}/{y}.png'

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

  if (showRiverLayer.value) {
    riverLabels.forEach(updateOneLabelPosition)
  }

  if (showMountainRiverLines.value) {
    mountainRiverLabels.forEach(updateOneLabelPosition)
  }

  if (showDeltaAreas.value) {
    deltaLabels.forEach(updateOneLabelPosition)
  }

  if (showCities.value) {
    cityLabels.forEach(updateOneLabelPosition)
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

async function loadRiverLayer() {
  if (!map) return

  clearRiverLayer()

  const abortController = new AbortController()
  riverAbortController = abortController

  try {
    const response = await fetch(baseGeoUrl + '东南亚河流分布.geojson', {
      signal: abortController.signal,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (abortController.signal.aborted || !map || !showRiverLayer.value) return

    riverLayer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },
      style: feature => {
        const props = feature?.properties || {}

        return {
          color: props.strokeColor || props.fillColor || '#0ea5e9',
          weight: props.weight || 3,
          opacity: props.opacity ?? 0.95,
          dashArray: props.dashArray || '',
        }
      },
      onEachFeature: (feature, layer) => {
        const props = feature?.properties || {}
        const name = props.name || props.NAME || props.Name || props.labelText || '东南亚主要河流'
        const desc = props.desc || props.description || '东南亚河流多自北向南流，沿岸和三角洲地区农业、城市较集中。'

        bindInfoPopup(layer, name, desc)
      },
    }).addTo(map)

    addGeoJsonDomLabels(data)

    await nextTick()

    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('东南亚主要河流请求已取消')
    } else {
      console.error('加载东南亚主要河流失败：', error)
      showRiverLayer.value = false
      clearDomLabels(riverLabels)
    }
  } finally {
    if (riverAbortController === abortController) {
      riverAbortController = null
    }
  }
}

function clearRiverLayer() {
  if (riverAbortController) {
    riverAbortController.abort()
    riverAbortController = null
  }

  if (riverLayer && map) {
    riverLayer.removeFrom(map)
    riverLayer = null
  }

  clearDomLabels(riverLabels)
}

function toggleRiverLayer() {
  if (showRiverLayer.value) {
    loadRiverLayer()
  } else {
    clearRiverLayer()
  }
}

function addGeoJsonDomLabels(geojson: any) {
  const features = getGeoJsonFeatures(geojson)

  features.forEach((feature: any) => {
    if (!feature?.geometry) return

    const type = feature.geometry.type

    if (type === 'Point') {
      addGeoJsonPointLabel(feature)
    }

    if (type === 'MultiPoint') {
      const coordinates = feature.geometry.coordinates
      if (!Array.isArray(coordinates)) return

      coordinates.forEach((coord: any) => {
        addGeoJsonPointLabel({
          ...feature,
          geometry: {
            type: 'Point',
            coordinates: coord,
          },
        })
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

function addGeoJsonPointLabel(feature: any) {
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
    className: 'river-label-dom',
    offsetX: 0,
    offsetY: -8,
  })

  if (label) {
    riverLabels.push(label)
  }
}

function addLineLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], lines: LineItem[]) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  lines.forEach(item => {
    const line = L.polyline(item.path, {
      color: item.color,
      weight: 3,
      opacity: 0.85,
      dashArray: item.dashArray || '',
    }).addTo(targetLayer)

    bindInfoPopup(line, item.name, item.desc)

    const midIndex = Math.floor(item.path.length / 2)
    const midPoint = item.path[midIndex]

    if (midPoint) {
      const label = createDomLabel({
        lat: midPoint[0],
        lng: midPoint[1],
        content: item.name,
        className: 'mountain-label-dom',
        offsetX: 0,
        offsetY: -10,
      })

      if (label) targetLabels.push(label)
    }
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
      color: '#84cc16',
      weight: 2,
      fillColor: '#bef264',
      fillOpacity: 0.22,
      opacity: 0.85,
    }).addTo(targetLayer)

    bindInfoPopup(circle, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'delta-label-dom',
      offsetX: item.offsetX ?? 0,
      offsetY: item.offsetY ?? 0,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function addPointLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], points: PointItem[]) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  points.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 5.2,
      color: '#064e3b',
      weight: 2,
      fillColor: '#10b981',
      fillOpacity: 1,
    }).addTo(targetLayer)

    bindInfoPopup(marker, item.name, item.desc)

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'city-label-dom',
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showMountainRiverLines.value) {
    addLineLayer(mountainRiverLayer, mountainRiverLabels, mountainRiverLines)
  } else {
    mountainRiverLayer.clearLayers()
    clearDomLabels(mountainRiverLabels)
  }

  if (showDeltaAreas.value) {
    addAreaLayer(deltaLayer, deltaLabels, deltaAreas)
  } else {
    deltaLayer.clearLayers()
    clearDomLabels(deltaLabels)
  }

  if (showCities.value) {
    addPointLayer(cityLayer, cityLabels, cityPoints)
  } else {
    cityLayer.clearLayers()
    clearDomLabels(cityLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  clearRiverLayer()

  mountainRiverLayer.clearLayers()
  deltaLayer.clearLayers()
  cityLayer.clearLayers()

  if (map.hasLayer(mountainRiverLayer)) mountainRiverLayer.removeFrom(map)
  if (map.hasLayer(deltaLayer)) deltaLayer.removeFrom(map)
  if (map.hasLayer(cityLayer)) cityLayer.removeFrom(map)

  clearDomLabels(mountainRiverLabels)
  clearDomLabels(deltaLabels)
  clearDomLabels(cityLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaTerrainMap', {
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

  if (showRiverLayer.value) {
    loadRiverLayer()
  }

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
.terrain-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.terrain-header {
  margin-bottom: 32px;
}

.terrain-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.terrain-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.terrain-content-right {
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

.terrain-card {
  border-radius: 8px;
  border: 1px solid rgba(16, 185, 129, 0.26);
  padding: 14px;
}

.terrain-card-01 {
  background: #ecfdf5;
  border-color: rgba(16, 185, 129, 0.35);
}

.terrain-card-02 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.terrain-card-03 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.terrain-card-04 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.terrain-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.terrain-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #047857;
}

.terrain-card-04 .terrain-card-header {
  color: #9a3412;
}

.terrain-card-05 .terrain-card-header {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.terrain-card-04 .iconfont {
  color: #9a3412;
}

.terrain-card-05 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.terrain-card p {
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

.river-item,
.effect-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 8px;
}

.river-item:last-child,
.effect-item:last-child {
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

.island-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.island-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #fed7aa;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.island-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.island-title {
  font-weight: bold;
  color: #9a3412;
  margin-bottom: 4px;
}

.island-desc {
  font-size: 12px;
  color: #475569;
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
  width: 250px;
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

.river-line {
  border-top: 3px solid #0ea5e9;
}

.mountain-line {
  border-top: 3px dashed #8b5e34;
}

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.delta-area {
  background: rgba(190, 242, 100, 0.36);
  border: 1px solid #84cc16;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.city-dot {
  background: #10b981;
  border: 2px solid #064e3b;
  box-sizing: border-box;
}

.elevation-legend {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(15, 39, 72, 0.12);
}

.elevation-gradient {
  width: 100%;
  height: 12px;
  border-radius: 999px;
  margin-bottom: 4px;
  background: linear-gradient(to right, #064273 0%, #0ea5e9 18%, #39a85a 36%, #b8c95a 52%, #b8793b 72%, #8b4a2b 88%, #f4f1e8 100%);
  border: 1px solid rgba(15, 39, 72, 0.16);
}

.elevation-scale {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #667085;
  margin-bottom: 8px;
}

.elevation-item {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 5px;
  line-height: 1.4;
  color: #334155;
}

.elevation-item:last-child {
  margin-bottom: 0;
}

.elevation-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  flex-shrink: 0;
  border: 1px solid rgba(15, 39, 72, 0.15);
}

.elevation-color.deep-sea {
  background: #064273;
}

.elevation-color.shallow-sea {
  background: #0ea5e9;
}

.elevation-color.lowland {
  background: #39a85a;
}

.elevation-color.hill {
  background: #b8c95a;
}

.elevation-color.mountain {
  background: #b8793b;
}

.elevation-color.high-mountain {
  background: #f4f1e8;
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

:deep(.river-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(14, 116, 144, 0.88);
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
    0 0 0 1px rgba(255, 255, 255, 0.55);
}

:deep(.mountain-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(120, 76, 34, 0.88);
  color: #fff;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.delta-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(77, 124, 15, 0.86);
  color: #fff;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.city-label-dom) {
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
