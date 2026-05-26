<template>
  <div class="climate-container">
    <div class="climate-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="climate-content">
      <div class="climate-content-left">
        <div class="climate-card climate-card-01">
          <div class="climate-card-header"><i class="iconfont icon-quanqiuqihou"></i>气候总体特征</div>

          <p class="mb-8">
            东南亚大部分位于低纬度热带地区，气候以<strong>热带季风气候</strong>和
            <strong>热带雨林气候</strong>为主，整体表现为<strong>全年高温，降水丰富</strong>。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">气温特点</div>
              <div class="feature-value">全年高温</div>
              <div class="feature-desc">纬度低，太阳辐射强，年平均气温较高。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">降水特点</div>
              <div class="feature-value">降水丰富</div>
              <div class="feature-desc">受海洋和季风影响，降水量较多。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              东南亚气候的关键词是：
              <strong>热带、湿热、季风、雨林</strong>。湿热气候为水稻和热带经济作物生长提供了重要自然条件。
            </div>
          </div>
        </div>

        <div class="climate-card climate-card-02">
          <div class="climate-card-header"><i class="iconfont icon-fenbu"></i>主要气候类型</div>

          <div class="climate-type-item">
            <div class="item-title">热带季风气候</div>
            <div class="item-desc">主要分布在中南半岛和菲律宾北部等地区，全年高温，降水季节变化明显，通常分为旱季和雨季。</div>
          </div>

          <div class="climate-type-item">
            <div class="item-title">热带雨林气候</div>
            <div class="item-desc">主要分布在马来群岛大部分地区和赤道附近，全年高温多雨，森林茂密，生物资源丰富。</div>
          </div>

          <div class="climate-type-item">
            <div class="item-title">气候差异</div>
            <div class="item-desc">中南半岛季风影响明显，旱雨季较突出；马来群岛赤道附近终年湿热，降水更加均匀。</div>
          </div>
        </div>

        <div class="climate-card climate-card-03">
          <div class="climate-card-header"><i class="iconfont icon-jifeng"></i>季风影响</div>

          <p class="mb-8">
            东南亚受季风影响明显，季风风向随季节变化，带来降水季节差异。
            夏季来自海洋的湿润气流增强，降水较多；冬季部分地区受较干燥气流影响，降水减少。
          </p>

          <div class="season-grid">
            <div class="season-card wet">
              <div class="season-icon">🌧️</div>
              <div class="season-title">雨季</div>
              <div class="season-desc">湿润季风带来大量水汽，降水集中，有利于水稻生长。</div>
            </div>

            <div class="season-card dry">
              <div class="season-icon">☀️</div>
              <div class="season-title">旱季</div>
              <div class="season-desc">降水减少，部分地区需依靠灌溉保障农业生产。</div>
            </div>
          </div>
        </div>

        <div class="climate-card climate-card-04">
          <div class="climate-card-header"><i class="iconfont icon-nongye"></i>气候对农业的影响</div>

          <div class="impact-item">
            <div class="item-title">适合水稻生长</div>
            <div class="item-desc">水稻生长需要高温和充足水分，东南亚湿热气候条件十分有利。</div>
          </div>

          <div class="impact-item">
            <div class="item-title">热带经济作物丰富</div>
            <div class="item-desc">橡胶、油棕、椰子、蕉麻等作物适合在高温多雨环境中生长。</div>
          </div>

          <div class="impact-item">
            <div class="item-title">气象灾害影响</div>
            <div class="item-desc">季风变化可能带来洪涝、干旱、台风等灾害，对农业和生活造成影响。</div>
          </div>
        </div>

        <div class="climate-card climate-card-05">
          <div class="climate-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记纬度：</strong>东南亚大部分位于热带。</li>
            <li><strong>二记气候：</strong>热带季风气候和热带雨林气候为主。</li>
            <li><strong>三记特点：</strong>全年高温，降水丰富。</li>
            <li><strong>四记分布：</strong>中南半岛季风气候明显，马来群岛雨林气候广布。</li>
            <li><strong>五记农业：</strong>湿热气候适合水稻和热带经济作物生长。</li>
          </ul>
        </div>
      </div>

      <div class="climate-content-right">
        <div id="southeastAsiaClimateMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看东南亚气候分布</div>

        <div class="layer-control-panel">
          <div class="panel-title">图层控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showClimateLayer" @change="toggleClimateLayer" />
            东南亚气候类型
          </label>

          <label>
            <input type="checkbox" v-model="showRainLayer" @change="toggleRainLayer" />
            东南亚七月降水量
          </label>

          <label>
            <input type="checkbox" v-model="showSummerMonsoonLines" @change="refreshMapLayers" />
            夏季风方向
          </label>

          <label>
            <input type="checkbox" v-model="showWinterMonsoonLines" @change="refreshMapLayers" />
            冬季风方向
          </label>

          <label>
            <input type="checkbox" v-model="showTropicLines" @change="refreshMapLayers" />
            赤道与热带范围
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area rainforest-area"></span>
              <span>热带雨林气候</span>
            </div>

            <div class="legend-row">
              <span class="legend-area monsoon-area"></span>
              <span>热带季风气候</span>
            </div>

            <div class="legend-row">
              <span class="legend-arrow summer-arrow"></span>
              <span>夏季风方向</span>
            </div>

            <div class="legend-row">
              <span class="legend-arrow winter-arrow"></span>
              <span>冬季风方向</span>
            </div>

            <div class="legend-row">
              <span class="legend-line tropic-line"></span>
              <span>赤道 / 热带线</span>
            </div>
          </div>

          <div class="map-note">
            <div class="map-note-title">读图提示</div>
            <div>观察气候类型与降水分布，可理解东南亚水稻和热带作物分布的自然基础。</div>
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
  arrowSize?: number
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

let climateLayer: L.GeoJSON | null = null
let rainLayer: L.GeoJSON | null = null
let climateAbortController: AbortController | null = null
let rainAbortController: AbortController | null = null

const baseGeoUrl = 'https://course-code.oss-cn-shanghai.aliyuncs.com/geojson/'

const centerLat = 6
const centerLng = 108
const zoomLevel = 4

const useGoogle = ref(false)
const showClimateLayer = ref(true)
const showRainLayer = ref(false)
const showSummerMonsoonLines = ref(false)
const showWinterMonsoonLines = ref(false)
const showTropicLines = ref(true)

const summerMonsoonLayer = L.layerGroup()
const winterMonsoonLayer = L.layerGroup()
const tropicLayer = L.layerGroup()

const climateLabels: DomLabel[] = []
const rainLabels: DomLabel[] = []
const summerMonsoonLabels: DomLabel[] = []
const winterMonsoonLabels: DomLabel[] = []
const tropicLabels: DomLabel[] = []

const summerMonsoonLines: LineItem[] = [
  {
    name: '夏季风',
    path: [
      [-8.5, 88.5],
      [-5.5, 92.0],
      [-2.5, 95.0],
      [0.8, 98.2],
      [4.0, 101.0],
      [7.2, 103.6],
      [10.5, 105.8],
      [13.8, 107.6],
      [17.0, 109.2],
      [20.0, 110.5],
    ],
    desc: '夏季来自印度洋的湿润气流进入中南半岛，带来大量降水。',
    color: '#0ea5e9',
    dashArray: '8 6',
    weight: 3,
    arrowSize: 1.35,
    className: 'monsoon-label-dom',
  },
  {
    name: '夏季风',
    path: [
      [-6.5, 94.0],
      [-3.5, 97.0],
      [-0.2, 100.0],
      [3.0, 103.0],
      [6.2, 105.8],
      [9.4, 108.0],
      [12.6, 110.0],
      [15.8, 111.6],
    ],
    desc: '湿润夏季风沿中南半岛向东北推进，形成雨季。',
    color: '#0ea5e9',
    dashArray: '8 6',
    weight: 3,
    arrowSize: 1.3,
    className: 'monsoon-label-dom',
  },
  {
    name: '夏季风',
    path: [
      [-8.8, 103.0],
      [-5.8, 106.0],
      [-2.8, 109.0],
      [0.4, 112.0],
      [3.5, 115.0],
      [6.6, 118.0],
      [9.6, 121.0],
      [12.8, 124.0],
      [16.0, 126.5],
    ],
    desc: '夏季来自海洋的湿润气流影响马来群岛和菲律宾附近。',
    color: '#0ea5e9',
    dashArray: '8 6',
    weight: 3,
    arrowSize: 1.3,
    className: 'monsoon-label-dom',
  },
  {
    name: '夏季风',
    path: [
      [-10.0, 110.0],
      [-7.0, 113.0],
      [-4.0, 116.0],
      [-1.0, 119.0],
      [2.0, 122.0],
      [5.2, 125.0],
      [8.4, 127.8],
      [11.6, 130.0],
    ],
    desc: '夏季风影响菲律宾群岛及其周边海域。',
    color: '#0ea5e9',
    dashArray: '8 6',
    weight: 3,
    arrowSize: 1.25,
    className: 'monsoon-label-dom',
  },
  {
    name: '夏季风',
    path: [
      [-3.5, 90.0],
      [-0.8, 93.5],
      [2.0, 97.0],
      [5.0, 100.5],
      [8.2, 103.4],
      [11.4, 105.8],
      [14.6, 107.8],
    ],
    desc: '印度洋湿润气流影响缅甸、泰国和湄南河流域。',
    color: '#0ea5e9',
    dashArray: '8 6',
    weight: 3,
    arrowSize: 1.25,
    className: 'monsoon-label-dom',
  },
  {
    name: '夏季风',
    path: [
      [-6.0, 99.5],
      [-3.2, 102.5],
      [-0.4, 105.4],
      [2.5, 108.0],
      [5.6, 110.4],
      [8.8, 112.6],
      [12.0, 114.4],
    ],
    desc: '夏季风从海洋向陆地输送水汽，增强东南亚降水。',
    color: '#0ea5e9',
    dashArray: '8 6',
    weight: 3,
    arrowSize: 1.2,
    className: 'monsoon-label-dom',
  },
  {
    name: '夏季风',
    path: [
      [-2.0, 112.0],
      [0.8, 114.8],
      [3.6, 117.4],
      [6.6, 119.8],
      [9.6, 122.0],
      [12.6, 124.0],
      [15.6, 126.0],
    ],
    desc: '湿润气流影响南海、菲律宾和周边岛屿地区。',
    color: '#0ea5e9',
    dashArray: '8 6',
    weight: 3,
    arrowSize: 1.2,
    className: 'monsoon-label-dom',
  },
]

const winterMonsoonLines: LineItem[] = [
  {
    name: '冬季风',
    path: [
      [27.0, 116.0],
      [24.0, 113.0],
      [21.0, 110.0],
      [18.0, 107.0],
      [15.0, 104.0],
      [12.0, 101.0],
      [9.0, 98.0],
    ],
    desc: '冬季风由大陆吹向海洋，部分地区降水减少。',
    color: '#f97316',
    dashArray: '6 5',
    weight: 3,
    arrowSize: 1.15,
    className: 'dry-monsoon-label-dom',
  },
  {
    name: '冬季风',
    path: [
      [25.0, 122.0],
      [22.0, 119.0],
      [19.0, 116.0],
      [16.0, 113.0],
      [13.0, 110.0],
      [10.0, 107.0],
      [7.0, 104.0],
    ],
    desc: '东北季风影响南海和中南半岛东部。',
    color: '#f97316',
    dashArray: '6 5',
    weight: 3,
    arrowSize: 1.15,
    className: 'dry-monsoon-label-dom',
  },
  {
    name: '冬季风',
    path: [
      [23.5, 127.0],
      [20.5, 124.2],
      [17.5, 121.4],
      [14.5, 118.6],
      [11.5, 115.8],
      [8.5, 113.0],
      [5.5, 110.2],
    ],
    desc: '冬季风向西南方向影响菲律宾和南海附近地区。',
    color: '#f97316',
    dashArray: '6 5',
    weight: 3,
    arrowSize: 1.15,
    className: 'dry-monsoon-label-dom',
  },
  {
    name: '冬季风',
    path: [
      [22.0, 108.0],
      [19.0, 105.5],
      [16.0, 103.0],
      [13.0, 100.5],
      [10.0, 98.2],
      [7.0, 96.0],
    ],
    desc: '冬季大陆气流南下，部分地区进入相对少雨季节。',
    color: '#f97316',
    dashArray: '6 5',
    weight: 3,
    arrowSize: 1.1,
    className: 'dry-monsoon-label-dom',
  },
  {
    name: '冬季风',
    path: [
      [20.5, 119.0],
      [17.4, 116.2],
      [14.4, 113.2],
      [11.4, 110.2],
      [8.4, 107.2],
      [5.4, 104.2],
      [2.4, 101.5],
    ],
    desc: '冬季风由东北向西南影响南海和马来半岛附近。',
    color: '#f97316',
    dashArray: '6 5',
    weight: 3,
    arrowSize: 1.1,
    className: 'dry-monsoon-label-dom',
  },
]

const tropicLines: LineItem[] = [
  {
    name: '赤道',
    path: [
      [0, 88],
      [0, 96],
      [0, 104],
      [0, 112],
      [0, 120],
      [0, 128],
      [0, 136],
    ],
    desc: '赤道穿过马来群岛附近，赤道附近全年高温多雨。',
    color: '#dc2626',
    dashArray: '10 6',
    weight: 2,
    className: 'equator-label-dom',
  },
  {
    name: '北回归线附近',
    path: [
      [23.5, 92],
      [23.5, 100],
      [23.5, 108],
      [23.5, 116],
      [23.5, 124],
    ],
    desc: '东南亚大部分位于北回归线以南，热带特征明显。',
    color: '#7c3aed',
    dashArray: '8 6',
    weight: 2,
    className: 'tropic-label-dom',
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

  if (showClimateLayer.value) climateLabels.forEach(updateOneLabelPosition)
  if (showRainLayer.value) rainLabels.forEach(updateOneLabelPosition)
  if (showSummerMonsoonLines.value) summerMonsoonLabels.forEach(updateOneLabelPosition)
  if (showWinterMonsoonLines.value) winterMonsoonLabels.forEach(updateOneLabelPosition)
  if (showTropicLines.value) tropicLabels.forEach(updateOneLabelPosition)
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

function getDefaultClimateFillColor(feature: any) {
  const props = feature?.properties || {}
  const name = props.name || props.labelText || props.type || ''

  if (String(name).includes('雨林')) return '#22c55e'
  if (String(name).includes('季风')) return '#84cc16'

  return '#10b981'
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

async function loadClimateLayer() {
  if (!map) return

  clearClimateLayer()

  const abortController = new AbortController()
  climateAbortController = abortController

  try {
    const response = await fetch(baseGeoUrl + '东南亚气候类型.geojson', {
      signal: abortController.signal,
    })

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    const data = await response.json()

    if (abortController.signal.aborted || !map || !showClimateLayer.value) return

    climateLayer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },
      style: feature => {
        const props = feature?.properties || {}

        return {
          color: props.strokeColor || '#ffffff',
          weight: props.weight || 1,
          opacity: props.opacity ?? 0.9,
          fillColor: props.fillColor || getDefaultClimateFillColor(feature),
          fillOpacity: 0.8,
        }
      },
    }).addTo(map)

    addGeoJsonDomLabels(data, climateLabels, 'climate-label-dom')

    await nextTick()
    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('东南亚气候类型请求已取消')
    } else {
      console.error('加载东南亚气候类型失败：', error)
      showClimateLayer.value = false
      clearDomLabels(climateLabels)
    }
  } finally {
    if (climateAbortController === abortController) climateAbortController = null
  }
}

async function loadRainLayer() {
  if (!map) return

  clearRainLayer()

  const abortController = new AbortController()
  rainAbortController = abortController

  try {
    const response = await fetch(baseGeoUrl + '东南亚七月降水量分布.geojson', {
      signal: abortController.signal,
    })

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

    const data = await response.json()

    if (abortController.signal.aborted || !map || !showRainLayer.value) return

    rainLayer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },
      style: feature => {
        const props = feature?.properties || {}

        return {
          color: props.strokeColor || 'rgba(255,255,255,0)',
          weight: props.weight || 1,
          opacity: props.opacity ?? 0.85,
          fillColor: props.fillColor || '#0ea5e9',
          fillOpacity: 0.8,
        }
      },
    }).addTo(map)

    addGeoJsonDomLabels(data, rainLabels, 'rain-label-dom')

    await nextTick()
    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('东南亚七月降水量请求已取消')
    } else {
      console.error('加载东南亚七月降水量失败：', error)
      showRainLayer.value = false
      clearDomLabels(rainLabels)
    }
  } finally {
    if (rainAbortController === abortController) rainAbortController = null
  }
}

function clearClimateLayer() {
  if (climateAbortController) {
    climateAbortController.abort()
    climateAbortController = null
  }

  if (climateLayer && map) {
    climateLayer.removeFrom(map)
    climateLayer = null
  }

  clearDomLabels(climateLabels)
}

function clearRainLayer() {
  if (rainAbortController) {
    rainAbortController.abort()
    rainAbortController = null
  }

  if (rainLayer && map) {
    rainLayer.removeFrom(map)
    rainLayer = null
  }

  clearDomLabels(rainLabels)
}

function toggleClimateLayer() {
  if (showClimateLayer.value) {
    loadClimateLayer()
  } else {
    clearClimateLayer()
  }
}

function toggleRainLayer() {
  if (showRainLayer.value) {
    loadRainLayer()
  } else {
    clearRainLayer()
  }
}

function addGeoJsonDomLabels(geojson: any, targetLabels: DomLabel[], className: string) {
  const features = getGeoJsonFeatures(geojson)

  features.forEach((feature: any) => {
    if (!feature?.geometry) return

    const type = feature.geometry.type

    if (type === 'Point') {
      addGeoJsonPointLabel(feature, targetLabels, className)
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
          targetLabels,
          className,
        )
      })
    }
  })
}

function getGeoJsonFeatures(geojson: any) {
  if (!geojson) return []
  if (geojson.type === 'FeatureCollection') return Array.isArray(geojson.features) ? geojson.features : []
  if (geojson.type === 'Feature') return [geojson]
  return []
}

function addGeoJsonPointLabel(feature: any, targetLabels: DomLabel[], className: string) {
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

  if (label) targetLabels.push(label)
}

function addLineLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], lines: LineItem[]) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  lines.forEach(item => {
    L.polyline(item.path, {
      color: item.color,
      weight: item.weight || 3,
      opacity: 0.88,
      dashArray: item.dashArray || '',
      smoothFactor: 0,
      lineJoin: 'miter',
      lineCap: 'butt',
    }).addTo(targetLayer)

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

function refreshMapLayers() {
  if (!map) return

  if (showSummerMonsoonLines.value) {
    addLineLayer(summerMonsoonLayer, summerMonsoonLabels, summerMonsoonLines)
  } else {
    summerMonsoonLayer.clearLayers()
    clearDomLabels(summerMonsoonLabels)
  }

  if (showWinterMonsoonLines.value) {
    addLineLayer(winterMonsoonLayer, winterMonsoonLabels, winterMonsoonLines)
  } else {
    winterMonsoonLayer.clearLayers()
    clearDomLabels(winterMonsoonLabels)
  }

  if (showTropicLines.value) {
    addLineLayer(tropicLayer, tropicLabels, tropicLines)
  } else {
    tropicLayer.clearLayers()
    clearDomLabels(tropicLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  clearClimateLayer()
  clearRainLayer()

  summerMonsoonLayer.clearLayers()
  winterMonsoonLayer.clearLayers()
  tropicLayer.clearLayers()

  if (map.hasLayer(summerMonsoonLayer)) summerMonsoonLayer.removeFrom(map)
  if (map.hasLayer(winterMonsoonLayer)) winterMonsoonLayer.removeFrom(map)
  if (map.hasLayer(tropicLayer)) tropicLayer.removeFrom(map)

  clearDomLabels(summerMonsoonLabels)
  clearDomLabels(winterMonsoonLabels)
  clearDomLabels(tropicLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaClimateMap', {
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

  if (showClimateLayer.value) {
    loadClimateLayer()
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
.climate-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.climate-header {
  margin-bottom: 32px;
}

.climate-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.climate-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.climate-content-right {
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

.climate-card {
  border-radius: 8px;
  border: 1px solid rgba(16, 185, 129, 0.26);
  padding: 14px;
}

.climate-card-01 {
  background: #ecfdf5;
  border-color: rgba(16, 185, 129, 0.35);
}

.climate-card-02 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.climate-card-03 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.climate-card-04 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.climate-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.climate-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #047857;
}

.climate-card-03 .climate-card-header {
  color: #0369a1;
}

.climate-card-05 .climate-card-header {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.climate-card-03 .iconfont {
  color: #0369a1;
}

.climate-card-05 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.climate-card p {
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

.climate-type-item,
.impact-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 8px;
}

.climate-type-item:last-child,
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

.season-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.season-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.season-card.wet {
  border: 1px solid #bae6fd;
}

.season-card.dry {
  border: 1px solid #fed7aa;
}

.season-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.season-title {
  font-weight: bold;
  margin-bottom: 4px;
}

.season-card.wet .season-title {
  color: #0369a1;
}

.season-card.dry .season-title {
  color: #c2410c;
}

.season-desc {
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
  width: 245px;
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

.rainforest-area {
  background: rgba(34, 197, 94, 0.42);
  border: 1px solid #16a34a;
}

.monsoon-area {
  background: rgba(132, 204, 22, 0.38);
  border: 1px solid #65a30d;
}

.legend-line {
  width: 24px;
  height: 0;
  display: inline-block;
  flex-shrink: 0;
}

.tropic-line {
  border-top: 2px dashed #dc2626;
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
  border-top: 3px solid currentColor;
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

.summer-arrow {
  color: #0ea5e9;
}

.winter-arrow {
  color: #f97316;
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

:deep(.climate-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(4, 120, 87, 0.86);
  color: #fff;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.rain-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(3, 105, 161, 0.86);
  color: #fff;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.monsoon-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(14, 116, 144, 0.86);
  color: #fff;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.dry-monsoon-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(194, 65, 12, 0.86);
  color: #fff;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.equator-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(220, 38, 38, 0.86);
  color: #fff;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

:deep(.tropic-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(124, 58, 237, 0.86);
  color: #fff;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}
</style>
