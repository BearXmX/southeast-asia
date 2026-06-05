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
          <div class="compose-card-header">
            <i class="iconfont icon-app-zucheng"></i>
            组成总体特征
          </div>

          <p class="mb-8">
            东南亚主要由<strong>中南半岛</strong>和<strong>马来群岛</strong>两大部分组成。
            中南半岛位于中国以南，与我国山水相连；马来群岛岛屿众多，分布在
            <strong>太平洋与印度洋之间</strong>。
          </p>

          <div class="compose-key-row">
            <div class="compose-key-item">
              <div class="key-value">1 个半岛</div>
              <div class="key-label">中南半岛</div>
            </div>

            <div class="compose-key-item">
              <div class="key-value">1 片群岛</div>
              <div class="key-label">马来群岛</div>
            </div>

            <div class="compose-key-item">
              <div class="key-value">11 国</div>
              <div class="key-label">大陆国、岛国、城市国家并存</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">一句话记忆</div>
            <div>
              东南亚的组成可以概括为：
              <strong>一个半岛，一片群岛；北连大陆，南跨赤道；陆地国家与岛国并存。</strong>
            </div>
          </div>
        </div>

        <div class="compose-card compose-card-02">
          <div class="compose-card-header">
            <i class="iconfont icon-bankuai"></i>
            两大组成部分
          </div>

          <div class="region-group">
            <div class="region-title">中南半岛</div>
            <div class="region-desc">
              位于中国以南，主要包括越南、老挝、柬埔寨、泰国、缅甸等国家。 其北部与我国西南地区山水相连，是东南亚的<strong>大陆部分</strong>。
            </div>
          </div>

          <div class="region-group">
            <div class="region-title">马来群岛</div>
            <div class="region-desc">
              岛屿众多，包括印度尼西亚、菲律宾、马来西亚部分地区、文莱、东帝汶等。 岛屿分散在赤道附近，是东南亚的<strong>岛屿部分</strong>。
            </div>
          </div>

          <div class="region-group">
            <div class="region-title">特殊识记：马来西亚</div>
            <div class="region-desc">
              马来西亚比较特殊，既有马来半岛南部的西马，也有加里曼丹岛北部的东马， 因此可理解为<strong>半岛与群岛兼具</strong>。
            </div>
          </div>

          <div class="region-group">
            <div class="region-title">重要城市国家：新加坡</div>
            <div class="region-desc">
              新加坡位于马六甲海峡附近，国土面积较小，但扼守海上交通要道， 是东南亚组成中非常典型的<strong>城市国家</strong>。
            </div>
          </div>
        </div>

        <div class="compose-card compose-card-03">
          <div class="compose-card-header">
            <i class="iconfont icon-jingweidu"></i>
            主要国家定位
          </div>

          <p class="mb-8 production-tip">点击下方国家名称，地图会定位到对应国家中心位置；点击地图中的国家点也可以快速定位。</p>

          <div class="country-buttons">
            <button v-for="item in countryList" :key="item.name" @click="flyToCountry(item)" :class="{ active: activeCountry === item.name }">
              {{ item.name }}
            </button>
          </div>
        </div>

        <div class="compose-card compose-card-04">
          <div class="compose-card-header">
            <i class="iconfont icon-quyuxinxi"></i>
            国家分组理解
          </div>

          <div class="country-type-grid">
            <div class="country-type-card">
              <div class="country-type-icon">⛰️</div>
              <div class="country-type-title">半岛国家</div>
              <div class="country-type-desc">越南、老挝、柬埔寨、泰国、缅甸，主要位于中南半岛。</div>
            </div>

            <div class="country-type-card">
              <div class="country-type-icon">🏝️</div>
              <div class="country-type-title">群岛国家</div>
              <div class="country-type-desc">印度尼西亚、菲律宾、东帝汶，岛屿众多，分布分散。</div>
            </div>

            <div class="country-type-card">
              <div class="country-type-icon">🧩</div>
              <div class="country-type-title">兼具类型</div>
              <div class="country-type-desc">马来西亚跨马来半岛和加里曼丹岛，是识图常考特殊点。</div>
            </div>

            <div class="country-type-card">
              <div class="country-type-icon">⚓</div>
              <div class="country-type-title">城市国家</div>
              <div class="country-type-desc">新加坡地处海上交通要道，是重要港口和国际贸易中心。</div>
            </div>
          </div>
        </div>

        <div class="compose-card compose-card-06">
          <div class="compose-card-header">
            <i class="iconfont icon-diqiu"></i>
            组成与位置的关系
          </div>

          <div class="logic-list">
            <div class="logic-item">
              <span>北部</span>
              <p>中南半岛与亚洲大陆相连，体现东南亚的大陆性部分。</p>
            </div>

            <div class="logic-item">
              <span>南部</span>
              <p>马来群岛跨赤道分布，体现东南亚的海洋性与岛屿性。</p>
            </div>

            <div class="logic-item">
              <span>通道</span>
              <p>马六甲海峡位于两大组成部分之间，是理解东南亚交通位置的关键。</p>
            </div>
          </div>
        </div>

        <div class="compose-card compose-card-07">
          <div class="compose-card-header">
            <i class="iconfont icon-app-zucheng"></i>
            组成识图干货
          </div>

          <div class="knowledge-list">
            <div class="knowledge-item">
              <span>半岛判断</span>
              <p>中南半岛是东南亚与亚洲大陆直接相连的部分，北接中国，南接马来半岛，地图上呈现“大陆向南伸出”的形态。</p>
            </div>

            <div class="knowledge-item">
              <span>群岛判断</span>
              <p>马来群岛位于中南半岛东南方，岛屿数量多、分布范围广，跨赤道明显，是理解东南亚海洋性的重要线索。</p>
            </div>

            <div class="knowledge-item">
              <span>特殊国家</span>
              <p>马来西亚最容易混淆，因为它既有马来半岛南部的西马，又有加里曼丹岛北部的东马，不能简单归为单一半岛国家。</p>
            </div>

            <div class="knowledge-item">
              <span>空间口诀</span>
              <p>北半岛、南群岛；越老柬泰缅看大陆，印菲文东看群岛，马来西亚跨两边，新加坡小而关键。</p>
            </div>
          </div>
        </div>

        <div class="compose-card compose-card-08">
          <div class="compose-card-header">
            <i class="iconfont icon-maodunjiufen"></i>
            中南半岛与马来群岛对比
          </div>

          <div class="compare-table">
            <div class="compare-row compare-head">
              <div>项目</div>
              <div>中南半岛</div>
              <div>马来群岛</div>
            </div>

            <div class="compare-row">
              <div>空间形态</div>
              <div>大陆向南延伸，陆地连续性较强</div>
              <div>岛屿众多，海域广阔，分布较分散</div>
            </div>

            <div class="compare-row">
              <div>主要国家</div>
              <div>越南、老挝、柬埔寨、泰国、缅甸</div>
              <div>印度尼西亚、菲律宾、文莱、东帝汶等</div>
            </div>

            <div class="compare-row">
              <div>自然联系</div>
              <div>与中国西南山水相连，河流多自北向南流</div>
              <div>跨赤道，火山地震较多，海岛与雨林特征明显</div>
            </div>

            <div class="compare-row">
              <div>人类活动</div>
              <div>人口多沿河谷、平原、三角洲和沿海分布</div>
              <div>人口多沿海、港口、火山岛平原和城市周边集中</div>
            </div>
          </div>
        </div>

        <div class="compose-card compose-card-09">
          <div class="compose-card-header">
            <i class="iconfont icon-bangzhuyushuoming"></i>
            常见易混点
          </div>

          <div class="mix-list">
            <div class="mix-item">
              <div class="mix-title">老挝不是岛国</div>
              <div class="mix-desc">老挝是东南亚唯一的内陆国家，位于中南半岛内部，不临海。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">新加坡不是大国</div>
              <div class="mix-desc">新加坡面积小，但位于马六甲海峡附近，区位价值很高，是城市国家和国际交通节点。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">马来西亚跨两部分</div>
              <div class="mix-desc">马来西亚包括西马和东马，西马在马来半岛，东马在加里曼丹岛北部。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">印度尼西亚不是一个岛</div>
              <div class="mix-desc">印度尼西亚是群岛国家，由大量岛屿组成，爪哇岛、苏门答腊岛、加里曼丹岛部分地区等都很重要。</div>
            </div>
          </div>
        </div>

        <div class="compose-card compose-card-05">
          <div class="compose-card-header">
            <i class="iconfont icon-kaoshi"></i>
            中考记忆点
          </div>

          <ul class="exam-list">
            <li><strong>一记组成：</strong>东南亚由中南半岛和马来群岛组成。</li>
            <li><strong>二记半岛：</strong>中南半岛位于中国以南，与我国山水相连。</li>
            <li><strong>三记群岛：</strong>马来群岛岛屿众多，跨赤道附近海域。</li>
            <li><strong>四记国家：</strong>印度尼西亚是世界重要群岛国家。</li>
            <li><strong>五记特殊：</strong>马来西亚兼具半岛和岛屿部分，新加坡是城市国家。</li>
            <li><strong>六记口诀：</strong>北半岛、南群岛；半岛连大陆，群岛跨赤道。</li>
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

        <div class="map-focus-card" v-if="activeMapInfo">
          <div class="focus-title">{{ activeMapInfo.name }}</div>
          <div class="focus-group">{{ activeMapInfo.type }}</div>
          <div class="focus-desc">{{ activeMapInfo.desc }}</div>
        </div>

        <div class="map-focus-card map-focus-card-empty" v-else>
          <div class="focus-title">地图互动提示</div>
          <div class="focus-group">点击地图要素查看说明</div>
          <div class="focus-desc">可点击中南半岛、马来群岛、国家定位点、东南亚轮廓线和主要国家范围，左下角会显示对应知识点。</div>
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

type CountryItem = {
  name: string
  lat: number
  lng: number
  zoom: number
  group: string
  desc: string
}

type MapInfoItem = {
  name: string
  type: string
  desc: string
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
const activeMapInfo = ref<MapInfoItem | null>(null)
const useGoogle = ref(false)
const showBoundaryLayer = ref(false)
const showMainCountriesLayer = ref(false)
const showPeninsulaArea = ref(true)
const showArchipelagoArea = ref(true)
const showCountryPoints = ref(true)

const centerLat = 6
const centerLng = 108
const zoomLevel = 4

const countryMarkers: L.CircleMarker[] = []
const countryLabels: DomLabel[] = []
const geoJsonLabels: DomLabel[] = []

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
    group: '中南半岛国家',
    desc: '位于中南半岛东部，国土南北狭长，东临南海，红河三角洲和湄公河三角洲是重要人口、农业和城市集中区。识图时可抓住“东侧临海、南北狭长、两大三角洲”。',
  },
  {
    name: '老挝',
    lat: 18.2,
    lng: 103.8,
    zoom: 6,
    group: '中南半岛国家',
    desc: '东南亚唯一的内陆国家，位于中南半岛内部，湄公河流经其境内。识图时可抓住“内陆、沿湄公河、夹在泰国和越南之间”。',
  },
  {
    name: '柬埔寨',
    lat: 12.7,
    lng: 104.9,
    zoom: 7,
    group: '中南半岛国家',
    desc: '位于中南半岛南部，与泰国、老挝、越南相邻，洞里萨湖和湄公河对其农业、聚落和交通具有重要影响。',
  },
  {
    name: '泰国',
    lat: 15.4,
    lng: 101.0,
    zoom: 6,
    group: '中南半岛国家',
    desc: '位于中南半岛中部，南部延伸到马来半岛北部，既联系大陆内部，又接近海上通道。曼谷所在的湄南河平原是人口和经济核心区。',
  },
  {
    name: '缅甸',
    lat: 20.3,
    lng: 96.5,
    zoom: 6,
    group: '中南半岛国家',
    desc: '位于中南半岛西部，西临孟加拉湾和安达曼海，伊洛瓦底江流域是重要农业和人口分布区，是半岛西侧的重要国家。',
  },
  {
    name: '马来西亚',
    lat: 4.5,
    lng: 102.0,
    zoom: 6,
    group: '半岛与群岛兼具',
    desc: '由马来半岛南部的西马和加里曼丹岛北部的东马组成，兼具半岛和岛屿两种空间属性，是东南亚组成类型中的常考特殊国家。',
  },
  {
    name: '新加坡',
    lat: 1.35,
    lng: 103.82,
    zoom: 8,
    group: '城市国家',
    desc: '位于马六甲海峡东南端附近，国土面积小但区位优势强，是典型城市国家，也是国际港口、航运、金融和贸易中心。',
  },
  {
    name: '印度尼西亚',
    lat: -2.0,
    lng: 118.0,
    zoom: 5,
    group: '马来群岛国家',
    desc: '世界重要群岛国家，岛屿众多，主体分布在马来群岛范围内，跨赤道分布明显，火山、地震、海岛和热带雨林特征突出。',
  },
  {
    name: '菲律宾',
    lat: 12.8,
    lng: 122.7,
    zoom: 6,
    group: '马来群岛国家',
    desc: '位于西太平洋，岛屿众多，是马来群岛东北部的重要国家。识图时可抓住“太平洋西岸、群岛国家、马尼拉位于吕宋岛附近”。',
  },
  {
    name: '文莱',
    lat: 4.5,
    lng: 114.7,
    zoom: 7,
    group: '马来群岛国家',
    desc: '位于加里曼丹岛北部，国土面积较小，属于马来群岛中的小型国家，油气资源较重要。',
  },
  {
    name: '东帝汶',
    lat: -8.8,
    lng: 125.8,
    zoom: 7,
    group: '马来群岛国家',
    desc: '位于帝汶岛东部，是东南亚岛国之一，位置偏东南，常用于判断马来群岛东南端范围。',
  },
]

const peninsulaAreas: AreaItem[] = [
  {
    name: '中南半岛',
    lat: 16.2,
    lng: 102.4,
    radius: 850000,
    desc: '东南亚的大陆部分，位于中国以南，主要包括越南、老挝、柬埔寨、泰国、缅甸等国家。',
    offsetX: 0,
    offsetY: -8,
  },
]

const archipelagoAreas: AreaItem[] = [
  {
    name: '马来群岛',
    lat: -1.0,
    lng: 118.0,
    radius: 1300000,
    desc: '东南亚的岛屿部分，岛屿众多，主要包括印度尼西亚、菲律宾、马来西亚部分地区、文莱、东帝汶等。',
    offsetX: 0,
    offsetY: -8,
  },
]

function flyToCountry(item: CountryItem) {
  activeCountry.value = item.name
  showMapInfo(item.name, item.group, item.desc)

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

function showMapInfo(title: string, type: string, desc: string) {
  activeMapInfo.value = {
    name: title,
    type,
    desc,
  }
}

function bindInfoPopup(layer: L.Layer, title: string, desc: string, type = '地图要素') {
  layer.on('click', () => {
    showMapInfo(title, type, desc)
  })
}

function addCountryMarkersAndLabels() {
  if (!map) return

  clearCountryMarkersAndLabels()

  countryList.forEach(country => {
    const marker = L.circleMarker([country.lat, country.lng], {
      radius: country.name === '新加坡' ? 5.5 : 4.5,
      color: '#064e3b',
      weight: 1.5,
      fillColor: country.group.includes('马来群岛') ? '#0ea5e9' : '#10b981',
      fillOpacity: 1,
      interactive: true,
    }).addTo(map!)

    bindInfoPopup(marker, country.name, country.desc, country.group)

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

async function loadGeoJsonLayer(options: { type: 'boundary' | 'country' }) {
  if (!map) return

  const isBoundary = options.type === 'boundary'

  if (isBoundary) {
    clearBoundaryLayer()
    boundaryAbortController = new AbortController()
  } else {
    clearMainCountriesLayer()
    mainCountriesAbortController = new AbortController()
  }

  const abortController = isBoundary ? boundaryAbortController! : mainCountriesAbortController!

  try {
    const data = await new Promise<GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>>(resolve => {
      setTimeout(() => {
        resolve(GEOJSON_MAP[isBoundary ? '东南亚轮廓线' : '东南亚国家轮廓线']!)
      }, 300)
    })

    if (abortController.signal.aborted || !map) return
    if (isBoundary && !showBoundaryLayer.value) return
    if (!isBoundary && !showMainCountriesLayer.value) return

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
          fillOpacity: props.fillOpacity ?? 0.22,
        }
      },
      onEachFeature: (feature, layer) => {
        const props = feature?.properties || {}
        const name = props.name || props.NAME || props.Name || props.labelText || (isBoundary ? '东南亚轮廓线' : '东南亚主要国家')
        const desc = props.desc || props.description || (isBoundary ? '东南亚区域轮廓范围。' : '东南亚主要国家范围。')

        bindInfoPopup(layer, name, desc, isBoundary ? '东南亚轮廓线' : '主要国家范围')
      },
    }).addTo(map)

    if (isBoundary) {
      boundaryLayer = layer
    } else {
      mainCountriesLayer = layer
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
        showBoundaryLayer.value = false
      } else {
        showMainCountriesLayer.value = false
      }
    }
  } finally {
    if (isBoundary && boundaryAbortController === abortController) {
      boundaryAbortController = null
    }

    if (!isBoundary && mainCountriesAbortController === abortController) {
      mainCountriesAbortController = null
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

function clearGeoJsonLabels() {
  clearDomLabels(geoJsonLabels)
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

  clearGeoJsonLabels()
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

  clearGeoJsonLabels()
}

function toggleBoundaryLayer() {
  if (showBoundaryLayer.value) {
    loadGeoJsonLayer({
      type: 'boundary',
    })
  } else {
    clearBoundaryLayer()
  }
}

function toggleMainCountriesLayer() {
  if (showMainCountriesLayer.value) {
    loadGeoJsonLayer({
      type: 'country',
    })
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

    bindInfoPopup(circle, item.name, item.desc, item.name.includes('中南') ? '中南半岛范围' : '马来群岛范围')

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: options.labelClassName,
      offsetX: item.offsetX ?? 0,
      offsetY: item.offsetY ?? 0,
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
  clearGeoJsonLabels()
}

onMounted(async () => {
  map = L.map('southeastAsiaComposeMap', {
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

.compose-card-06 {
  background: #f8fafc;
  border-color: #cbd5e1;
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

.compose-card-06 .compose-card-header {
  color: #334155;
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

.compose-card-06 .iconfont {
  color: #334155;
}

.mb-8 {
  margin-bottom: 8px;
}

.compose-card p {
  line-height: 1.65;
  color: #1f2937;
  margin-top: 0;
}

.compose-key-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin: 12px 0;
}

.compose-key-item {
  background: #fff;
  border: 1px solid rgba(16, 185, 129, 0.18);
  border-radius: 8px;
  padding: 9px 8px;
}

.key-value {
  font-weight: bold;
  color: #047857;
  font-size: 15px;
  margin-bottom: 4px;
}

.key-label {
  color: #64748b;
  font-size: 12px;
  line-height: 1.35;
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

.logic-list {
  display: grid;
  gap: 8px;
}

.logic-item {
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 8px;
  align-items: start;
  background: #fff;
  border-radius: 8px;
  padding: 9px 10px;
  border: 1px solid #e2e8f0;
}

.logic-item span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  border-radius: 999px;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 12px;
  font-weight: bold;
}

.logic-item p {
  margin: 0;
  color: #475569;
  font-size: 13px;
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

.map-focus-card {
  position: absolute;
  left: 12px;
  bottom: 12px;
  z-index: 1000;
  width: 260px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 8px;
  padding: 10px 12px;
  box-shadow: 0 2px 10px rgba(15, 39, 72, 0.16);
  border-left: 4px solid var(--primary-color);
}

.focus-title {
  font-weight: bold;
  color: #047857;
  font-size: 15px;
  margin-bottom: 4px;
}

.focus-group {
  font-size: 12px;
  color: #0369a1;
  margin-bottom: 4px;
}

.focus-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.45;
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

.compose-card-07 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.compose-card-08 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.compose-card-09 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.compose-card-07 .compose-card-header {
  color: #0f766e;
}

.compose-card-08 .compose-card-header {
  color: #334155;
}

.compose-card-09 .compose-card-header {
  color: #c2410c;
}

.compose-card-07 .iconfont {
  color: #0f766e;
}

.compose-card-08 .iconfont {
  color: #334155;
}

.compose-card-09 .iconfont {
  color: #c2410c;
}

.knowledge-list {
  display: grid;
  gap: 8px;
}

.knowledge-item {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 8px;
  align-items: start;
  background: #fff;
  border-radius: 8px;
  padding: 9px 10px;
  border: 1px solid rgba(20, 184, 166, 0.24);
}

.knowledge-item span {
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

.knowledge-item p {
  margin: 0;
  color: #475569;
  font-size: 13px;
  line-height: 1.45;
}

.compare-table {
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #fff;
}

.compare-row {
  display: grid;
  grid-template-columns: 80px 1fr 1fr;
  border-bottom: 1px solid #e2e8f0;
}

.compare-row:last-child {
  border-bottom: 0;
}

.compare-row > div {
  padding: 8px 9px;
  font-size: 13px;
  line-height: 1.45;
  color: #475569;
  border-right: 1px solid #e2e8f0;
}

.compare-row > div:last-child {
  border-right: 0;
}

.compare-head {
  background: #ecfeff;
}

.compare-head > div {
  color: var(--primary-color);
  font-weight: bold;
}

.mix-list {
  display: grid;
  gap: 8px;
}

.mix-item {
  background: #fff;
  border-radius: 8px;
  padding: 9px 10px;
  border-left: 3px solid #f97316;
}

.mix-title {
  font-weight: bold;
  color: #c2410c;
  margin-bottom: 4px;
}

.mix-desc {
  color: #475569;
  font-size: 13px;
  line-height: 1.45;
}

.map-focus-card-empty {
  border-left-color: #94a3b8;
}

.map-focus-card-empty .focus-title {
  color: #334155;
}

.map-focus-card-empty .focus-group {
  color: #64748b;
}
</style>
