<template>
  <div class="industry-transport-container">
    <div class="industry-transport-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="industry-transport-content">
      <div class="industry-transport-content-left">
        <div class="it-card it-card-01">
          <div class="it-card-header">
            <i class="iconfont icon-gongyede-"></i>
            工业与交通总体特征
          </div>

          <p class="mb-8">
            东南亚工业发展与<strong>资源条件、劳动力、市场、港口、城市和交通通道</strong>密切相关。
            早期工业多依托农矿产品加工和港口贸易，近年来随着外资进入、产业转移和区域合作增强，
            <strong>电子制造、汽车装配、石油化工、纺织服装、食品加工、橡胶加工</strong>等产业发展明显。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">工业区位</div>
              <div class="feature-value">沿海沿港沿交通</div>
              <div class="feature-desc">工业多分布在首都、大城市、港口、交通干线和出口加工区附近。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">交通骨架</div>
              <div class="feature-value">陆海联动</div>
              <div class="feature-desc">海上通道联系世界市场，泛亚铁路和中老铁路强化陆路联系。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              本章重点不是重复马六甲海峡，而是理解：
              <strong>工业为什么这样分布，泛亚铁路怎样改变中国与中南半岛的联系。</strong>
            </div>
          </div>
        </div>

        <div class="it-card it-card-02">
          <div class="it-card-header">
            <i class="iconfont icon-zhizaoye"></i>
            主要工业类型
          </div>

          <div class="industry-type-item">
            <div class="item-title">资源加工型工业</div>
            <div class="item-desc">依托石油、天然气、锡矿、橡胶、油棕、椰子、水稻等资源，发展石油化工、橡胶加工、食品加工、油脂加工等产业。</div>
          </div>

          <div class="industry-type-item">
            <div class="item-title">劳动密集型工业</div>
            <div class="item-desc">越南、柬埔寨、缅甸、印尼等地劳动力资源丰富，纺织服装、鞋帽、电子装配和轻工业发展较快。</div>
          </div>

          <div class="industry-type-item">
            <div class="item-title">出口导向型工业</div>
            <div class="item-desc">新加坡、马来西亚、泰国、越南等地依托港口、外资、交通和产业园区，发展面向国际市场的制造业。</div>
          </div>

          <div class="industry-type-item">
            <div class="item-title">高端制造与服务业</div>
            <div class="item-desc">新加坡、吉隆坡、曼谷等城市金融、物流、电子、研发、航空服务和现代服务业较突出。</div>
          </div>
        </div>

        <div class="it-card it-card-03">
          <div class="it-card-header">
            <i class="iconfont icon-fenbu"></i>
            工业布局识图干货
          </div>

          <div class="knowledge-list">
            <div class="knowledge-item">
              <span>看港口</span>
              <p>新加坡、巴生港、槟城、雅加达、马尼拉、海防、胡志明市等港口附近，交通便利，便于进口原料和出口产品。</p>
            </div>

            <div class="knowledge-item">
              <span>看城市</span>
              <p>曼谷、吉隆坡、河内、胡志明市、雅加达、马尼拉等大城市人口多、市场大、劳动力和服务业条件好。</p>
            </div>

            <div class="knowledge-item">
              <span>看资源</span>
              <p>油气、橡胶、油棕、锡矿、农产品等资源会影响石化、橡胶、食品和农产品加工工业布局。</p>
            </div>

            <div class="knowledge-item">
              <span>看通道</span>
              <p>泛亚铁路、中老铁路、跨境公路、港口和海上航线共同影响工业走廊和产业合作方向。</p>
            </div>
          </div>
        </div>

        <div class="it-card it-card-04">
          <div class="it-card-header">
            <i class="iconfont icon-gaosu"></i>
            泛亚铁路：陆路交通主线
          </div>

          <p class="mb-8">
            泛亚铁路设想通过铁路把中国与中南半岛、马来半岛和新加坡等地区联系起来，
            形成南向陆路交通网络。它可以缩短运输时间，促进贸易、产业、旅游和人员往来。
          </p>

          <div class="railway-grid">
            <div class="railway-card east">
              <div class="railway-title">东线</div>
              <div class="railway-desc">大致联系中国—越南—柬埔寨—泰国—马来西亚—新加坡方向，靠近中南半岛东部和沿海城市。</div>
            </div>

            <div class="railway-card middle">
              <div class="railway-title">中线</div>
              <div class="railway-desc">大致联系中国—老挝—泰国—马来西亚—新加坡方向，中老铁路是这一联系中的重要现实节点。</div>
            </div>

            <div class="railway-card west">
              <div class="railway-title">西线</div>
              <div class="railway-desc">大致联系中国—缅甸—泰国—马来西亚—新加坡方向，可加强中国西南与印度洋方向和中南半岛西侧联系。</div>
            </div>

            <div class="railway-card laos">
              <div class="railway-title">中老铁路</div>
              <div class="railway-desc">昆明—磨憨—万象方向，是中国与东南亚陆路互联互通的重要代表，带动物流、旅游和沿线产业。</div>
            </div>
          </div>
        </div>

        <div class="it-card it-card-05">
          <div class="it-card-header">
            <i class="iconfont icon-hexin"></i>
            交通对工业发展的影响
          </div>

          <div class="influence-grid">
            <div class="influence-card">
              <div class="influence-title">铁路 → 陆路物流</div>
              <div class="influence-desc">泛亚铁路 GeoJSON 和中老铁路能降低中南半岛内陆地区运输成本，增强内陆城市开放性。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">港口 → 出口加工</div>
              <div class="influence-desc">港口附近便于进口零部件和出口制成品，推动出口加工区、保税区和工业园区发展。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">城市 → 产业集聚</div>
              <div class="influence-desc">大城市劳动力、市场、资金、技术和服务业集中，更容易形成工业和服务业集聚。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">通道 → 区域合作</div>
              <div class="influence-desc">陆路与海上通道衔接，推动中国—东盟产业链、供应链和贸易网络联系增强。</div>
            </div>
          </div>
        </div>

        <div class="it-card it-card-06">
          <div class="it-card-header">
            <i class="iconfont icon-maodunjiufen"></i>
            工业城市与交通节点对比
          </div>

          <div class="compare-table">
            <div class="compare-row compare-head">
              <div>类型</div>
              <div>典型地区</div>
              <div>区位优势</div>
            </div>

            <div class="compare-row">
              <div>港口工业</div>
              <div>新加坡、巴生港、槟城、雅加达、马尼拉、海防</div>
              <div>临海临港，便于进出口和国际物流</div>
            </div>

            <div class="compare-row">
              <div>首都工业</div>
              <div>曼谷、吉隆坡、河内、金边、万象</div>
              <div>人口市场大，政策、资金、服务业集中</div>
            </div>

            <div class="compare-row">
              <div>资源加工</div>
              <div>苏门答腊、加里曼丹、马来半岛、泰国南部</div>
              <div>靠近油气、橡胶、油棕、农矿产品产地</div>
            </div>

            <div class="compare-row">
              <div>铁路节点</div>
              <div>昆明、磨憨、万象、曼谷、吉隆坡、新加坡</div>
              <div>承担跨境物流、旅游和产业联系功能</div>
            </div>
          </div>
        </div>

        <div class="it-card it-card-08">
          <div class="it-card-header">
            <i class="iconfont icon-bangzhuyushuoming"></i>
            常见易混点
          </div>

          <div class="mix-list">
            <div class="mix-item">
              <div class="mix-title">工业不是只分布在资源产地</div>
              <div class="mix-desc">工业还受港口、交通、劳动力、市场、政策、外资和产业园区影响，很多制造业集中在沿海城市和出口加工区。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">泛亚铁路不是一条单独铁路线</div>
              <div class="mix-desc">
                泛亚铁路更像一个跨国铁路网络设想，常说东线、中线、西线。本组件中三条线改为读取 GEOJSON 图层，方便和真实线路数据保持一致。
              </div>
            </div>

            <div class="mix-item">
              <div class="mix-title">中老铁路不是泛亚铁路全部</div>
              <div class="mix-desc">中老铁路是中国与老挝互联互通的重要线路，也是泛亚铁路中线联系中的重要组成部分，但不能代表全部泛亚铁路。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">马六甲不是本章唯一重点</div>
              <div class="mix-desc">本章马六甲只作为海上通道补充，重点仍是工业布局、泛亚铁路、陆海联运和产业联系。</div>
            </div>
          </div>
        </div>

        <div class="it-card it-card-09">
          <div class="it-card-header">
            <i class="iconfont icon-kaoshi"></i>
            中考记忆点
          </div>

          <ul class="exam-list">
            <li><strong>一记区位：</strong>东南亚工业多沿海、沿港、沿交通干线和大城市分布。</li>
            <li><strong>二记类型：</strong>资源加工、劳动密集型制造、出口导向型工业较突出。</li>
            <li><strong>三记城市：</strong>新加坡、曼谷、吉隆坡、雅加达、河内、胡志明市等是重要工业和交通节点。</li>
            <li><strong>四记铁路：</strong>泛亚铁路加强中国与中南半岛、马来半岛和新加坡方向的陆路联系。</li>
            <li><strong>五记中老：</strong>中老铁路是中国—东南亚陆路互联互通的重要代表。</li>
            <li><strong>六记海陆：</strong>东南亚交通要理解为铁路、公路、港口和海上航线的陆海联运网络。</li>
            <li><strong>七记综合：</strong>交通改善会促进物流、贸易、工业园区、旅游和区域合作。</li>
          </ul>
        </div>
      </div>

      <div class="industry-transport-content-right">
        <div id="southeastAsiaIndustryTransportMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看东南亚工业与交通联系</div>

        <div class="layer-control-panel">
          <div class="panel-title">图层控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showBoundaryLayer" @change="toggleBoundaryLayer" />
            东南亚国家轮廓
          </label>

          <label>
            <input type="checkbox" v-model="showIndustrialCities" @change="refreshMapLayers" />
            主要工业城市
          </label>

          <label>
            <input type="checkbox" v-model="showIndustrialCorridors" @change="refreshMapLayers" />
            工业走廊
          </label>

          <label>
            <input type="checkbox" v-model="showPanAsiaEastRailway" @change="refreshMapLayers" />
            泛亚铁路东线
          </label>

          <label>
            <input type="checkbox" v-model="showPanAsiaMiddleRailway" @change="refreshMapLayers" />
            泛亚铁路中线
          </label>

          <label>
            <input type="checkbox" v-model="showPanAsiaWestRailway" @change="refreshMapLayers" />
            泛亚铁路西线
          </label>

          <label>
            <input type="checkbox" v-model="showChinaLaosRailway" @change="refreshMapLayers" />
            中老铁路
          </label>

          <label>
            <input type="checkbox" v-model="showPortNodes" @change="refreshMapLayers" />
            港口与工业节点
          </label>

          <label>
            <input type="checkbox" v-model="showSeaRoute" @change="refreshMapLayers" />
            海上补充航线
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area boundary-area"></span>
              <span>国家轮廓</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot city-dot"></span>
              <span>主要工业城市</span>
            </div>

            <div class="legend-row">
              <span class="legend-area corridor-area"></span>
              <span>工业走廊</span>
            </div>

            <div class="legend-row">
              <span class="legend-line panasia-east-line"></span>
              <span>泛亚铁路东线</span>
            </div>

            <div class="legend-row">
              <span class="legend-line panasia-middle-line"></span>
              <span>泛亚铁路中线</span>
            </div>

            <div class="legend-row">
              <span class="legend-line panasia-west-line"></span>
              <span>泛亚铁路西线</span>
            </div>

            <div class="legend-row">
              <span class="legend-line laos-line"></span>
              <span>中老铁路</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot port-dot"></span>
              <span>港口与工业节点</span>
            </div>

            <div class="legend-row">
              <span class="legend-line sea-line"></span>
              <span>海上补充航线</span>
            </div>
          </div>

          <div class="map-note">
            <div class="map-note-title">读图提示</div>
            <div>先看工业城市和港口，再叠加泛亚铁路东线 / 中线 / 西线、中老铁路和工业走廊，理解工业为何沿城市、港口和交通通道集聚。</div>
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
          <div class="focus-desc">
            可点击工业城市、工业走廊、泛亚铁路东线 / 中线 / 西线、中老铁路、港口节点和海上补充航线；左下角会显示对应工业交通知识点。
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
  color: string
  fillColor: string
  fillOpacity: number
  className: string
}

type PointItem = {
  name: string
  icon: string
  lat: number
  lng: number
  type: string
  desc: string
  color: string
  fillColor: string
  className: string
  offsetX?: number
  offsetY?: number
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

type MapInfoItem = {
  name: string
  type: string
  desc: string
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let boundaryLayer: L.GeoJSON | null = null
let boundaryAbortController: AbortController | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 7.5
const centerLng = 108
const zoomLevel = 4

const useGoogle = ref(false)
const showBoundaryLayer = ref(true)
const showIndustrialCities = ref(true)
const showIndustrialCorridors = ref(true)
const showPanAsiaEastRailway = ref(true)
const showPanAsiaMiddleRailway = ref(true)
const showPanAsiaWestRailway = ref(true)
const showChinaLaosRailway = ref(true)
const showPortNodes = ref(true)
const showSeaRoute = ref(false)
const activeName = ref('')
const activeMapInfo = ref<MapInfoItem | null>(null)

const industrialCityLayer = L.layerGroup()
const industrialCorridorLayer = L.layerGroup()
const panAsiaEastRailwayLayer = L.layerGroup()
const panAsiaMiddleRailwayLayer = L.layerGroup()
const panAsiaWestRailwayLayer = L.layerGroup()
const chinaLaosRailwayLayer = L.layerGroup()
const portNodeLayer = L.layerGroup()
const seaRouteLayer = L.layerGroup()

const boundaryLabels: DomLabel[] = []
const industrialCityLabels: DomLabel[] = []
const industrialCorridorLabels: DomLabel[] = []
const panAsiaEastRailwayLabels: DomLabel[] = []
const panAsiaMiddleRailwayLabels: DomLabel[] = []
const panAsiaWestRailwayLabels: DomLabel[] = []
const chinaLaosRailwayLabels: DomLabel[] = []
const portNodeLabels: DomLabel[] = []
const seaRouteLabels: DomLabel[] = []

const industrialCities: PointItem[] = [
  {
    name: '新加坡',
    icon: '🏭',
    lat: 1.3521,
    lng: 103.8198,
    type: '高端制造与国际航运中心',
    desc: '新加坡位于马六甲海峡附近，港口、金融、电子、生物医药、炼油和物流服务发达，是东南亚工业与交通联系的重要枢纽。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    className: 'industrial-city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '曼谷',
    icon: '🚗',
    lat: 13.7563,
    lng: 100.5018,
    type: '汽车与制造业中心',
    desc: '曼谷位于湄南河下游平原，人口和市场集中，汽车装配、电子、食品加工和服务业发达，是泰国工业核心城市。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    className: 'industrial-city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '吉隆坡',
    icon: '💡',
    lat: 3.139,
    lng: 101.6869,
    type: '电子与服务业中心',
    desc: '吉隆坡位于马来半岛西部城市带，联系巴生港和马六甲海峡，电子、金融、服务业和制造业联系明显。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    className: 'industrial-city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '雅加达',
    icon: '🏙️',
    lat: -6.2088,
    lng: 106.8456,
    type: '印尼工业与市场中心',
    desc: '雅加达位于爪哇岛西北部沿海平原，人口规模大，港口、制造业、消费市场和服务业条件突出。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    className: 'industrial-city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '河内',
    icon: '🔧',
    lat: 21.0278,
    lng: 105.8342,
    type: '越南北部工业中心',
    desc: '河内靠近红河三角洲，联系中国广西、云南方向和海防港，电子装配、机械、轻工业和外向型制造业发展明显。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    className: 'industrial-city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '胡志明市',
    icon: '📦',
    lat: 10.8231,
    lng: 106.6297,
    type: '越南南部制造业中心',
    desc: '胡志明市靠近湄公河三角洲和南部港口，纺织服装、电子装配、食品加工和物流业联系紧密。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    className: 'industrial-city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '马尼拉',
    icon: '⚙️',
    lat: 14.5995,
    lng: 120.9842,
    type: '菲律宾首都工业服务中心',
    desc: '马尼拉位于马尼拉湾附近，人口和市场集中，电子、食品、服装、港口物流和服务业发展突出。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    className: 'industrial-city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '金边',
    icon: '🧵',
    lat: 11.5564,
    lng: 104.9282,
    type: '轻工业与纺织中心',
    desc: '金边位于湄公河沿岸，是柬埔寨首都，纺织服装、食品加工、建筑材料和服务业发展较突出。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    className: 'industrial-city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '万象',
    icon: '🚆',
    lat: 17.9757,
    lng: 102.6331,
    type: '中老铁路节点城市',
    desc: '万象位于湄公河沿岸，是中老铁路的重要终点城市，陆路交通改善带动物流、旅游和产业联系。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    className: 'industrial-city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
]

const portNodes: PointItem[] = [
  {
    name: '新加坡港',
    icon: '⚓',
    lat: 1.2644,
    lng: 103.8222,
    type: '国际航运与转口贸易港',
    desc: '新加坡港靠近马六甲海峡，是全球重要集装箱港和转口贸易节点，对东南亚工业出口和海运联系意义重大。',
    color: '#1d4ed8',
    fillColor: '#60a5fa',
    className: 'port-node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴生港',
    icon: '⚓',
    lat: 2.999,
    lng: 101.392,
    type: '马来西亚西海岸港口',
    desc: '巴生港靠近吉隆坡，服务马来半岛西海岸工业城市带，联系马六甲海峡和国际航线。',
    color: '#1d4ed8',
    fillColor: '#60a5fa',
    className: 'port-node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '槟城港',
    icon: '⚓',
    lat: 5.4141,
    lng: 100.3288,
    type: '电子工业与港口节点',
    desc: '槟城位于马来半岛西北部，电子制造、加工贸易和港口联系明显，是马来西亚重要工业节点。',
    color: '#1d4ed8',
    fillColor: '#60a5fa',
    className: 'port-node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '海防港',
    icon: '⚓',
    lat: 20.8449,
    lng: 106.6881,
    type: '越南北部出海口',
    desc: '海防港服务红河三角洲和河内都市区，联系中国广西方向与越南北部制造业。',
    color: '#1d4ed8',
    fillColor: '#60a5fa',
    className: 'port-node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '胡志明港区',
    icon: '⚓',
    lat: 10.75,
    lng: 106.75,
    type: '越南南部港口群',
    desc: '胡志明港区服务越南南部制造业和湄公河三角洲，是纺织、电子、农产品和消费品运输节点。',
    color: '#1d4ed8',
    fillColor: '#60a5fa',
    className: 'port-node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '雅加达港',
    icon: '⚓',
    lat: -6.1047,
    lng: 106.8805,
    type: '印尼爪哇岛港口',
    desc: '雅加达港服务爪哇岛工业带和印尼国内市场，是群岛国家工业品流通和国际贸易的重要节点。',
    color: '#1d4ed8',
    fillColor: '#60a5fa',
    className: 'port-node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '马尼拉港',
    icon: '⚓',
    lat: 14.58,
    lng: 120.96,
    type: '菲律宾首都港口',
    desc: '马尼拉港服务菲律宾首都圈和吕宋岛市场，是菲律宾制造业、消费品和国际贸易的重要港口。',
    color: '#1d4ed8',
    fillColor: '#60a5fa',
    className: 'port-node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
]

const industrialCorridors: AreaItem[] = [
  {
    name: '越南北部工业走廊',
    lat: 20.8,
    lng: 106.1,
    radius: 250000,
    desc: '河内—海防—北宁等区域靠近中国方向和海防港，电子装配、机械、轻工业和出口加工发展明显。',
    color: '#c2410c',
    fillColor: '#fb923c',
    fillOpacity: 0.15,
    className: 'corridor-label-dom',
  },
  {
    name: '越南南部工业走廊',
    lat: 10.8,
    lng: 106.7,
    radius: 260000,
    desc: '胡志明市及周边靠近港口和湄公河三角洲，纺织服装、电子、食品加工和物流业集聚。',
    color: '#c2410c',
    fillColor: '#fb923c',
    fillOpacity: 0.14,
    className: 'corridor-label-dom',
  },
  {
    name: '泰国中部工业走廊',
    lat: 13.3,
    lng: 101.0,
    radius: 300000,
    desc: '曼谷及泰国湾东岸工业带汽车、电子、石化和出口制造业突出，港口与城市联系紧密。',
    color: '#c2410c',
    fillColor: '#fb923c',
    fillOpacity: 0.14,
    className: 'corridor-label-dom',
  },
  {
    name: '马来半岛西海岸工业走廊',
    lat: 3.7,
    lng: 101.1,
    radius: 360000,
    desc: '吉隆坡、巴生港、槟城等沿马来半岛西海岸分布，电子、制造业、港口物流和服务业联系明显。',
    color: '#c2410c',
    fillColor: '#fb923c',
    fillOpacity: 0.14,
    className: 'corridor-label-dom',
  },
  {
    name: '爪哇岛工业城市带',
    lat: -6.9,
    lng: 108.8,
    radius: 520000,
    desc: '爪哇岛人口、城市和产业高度集中，雅加达、万隆、泗水等城市构成印尼重要制造业与消费市场。',
    color: '#c2410c',
    fillColor: '#fb923c',
    fillOpacity: 0.13,
    className: 'corridor-label-dom',
  },
  {
    name: '新加坡—柔佛—巴生工业联系区',
    lat: 2.2,
    lng: 103.0,
    radius: 260000,
    desc: '新加坡、柔佛和马来西亚西海岸联系紧密，港口、电子、石化、物流和现代服务业互补性强。',
    color: '#c2410c',
    fillColor: '#fb923c',
    fillOpacity: 0.13,
    className: 'corridor-label-dom',
  },
]

type PanAsiaRailwayGeojsonItem = {
  key: 'east' | 'middle' | 'west'
  name: string
  keys: string[]
  type: string
  desc: string
  color: string
  dashArray: string
  weight: number
  className: string
  arrowSize: number
}

const panAsiaRailwayGeojsonConfigs: PanAsiaRailwayGeojsonItem[] = [
  {
    key: 'east',
    name: '泛亚铁路东线',
    keys: ['东南亚泛亚铁路东线', '东南亚泛亚铁路东线.geojson', '泛亚铁路东线', '泛亚铁路东线.geojson'],
    type: '泛亚铁路东线',
    desc: '东线大致联系中国云南、越南、柬埔寨、泰国、马来西亚和新加坡方向，靠近中南半岛东部与沿海经济区。',
    color: '#2563eb',
    dashArray: '9 6',
    weight: 3,
    className: 'panasia-label-dom',
    arrowSize: 1.25,
  },
  {
    key: 'middle',
    name: '泛亚铁路中线',
    keys: ['东南亚泛亚铁路中线', '东南亚泛亚铁路中线.geojson', '泛亚铁路中线', '泛亚铁路中线.geojson'],
    type: '泛亚铁路中线',
    desc: '中线大致经中国云南、老挝、泰国、马来西亚到新加坡，中老铁路强化了中国与中南半岛的陆路联系。',
    color: '#7c3aed',
    dashArray: '9 6',
    weight: 3,
    className: 'panasia-label-dom',
    arrowSize: 1.25,
  },
  {
    key: 'west',
    name: '泛亚铁路西线',
    keys: ['东南亚泛亚铁路西线', '东南亚泛亚铁路西线.geojson', '泛亚铁路西线', '泛亚铁路西线.geojson'],
    type: '泛亚铁路西线',
    desc: '西线大致联系中国云南、缅甸、泰国、马来西亚和新加坡方向，有利于加强中南半岛西侧与中国西南的联系。',
    color: '#0f766e',
    dashArray: '9 6',
    weight: 3,
    className: 'panasia-label-dom',
    arrowSize: 1.25,
  },
]

const chinaLaosRailway: LineItem[] = [
  {
    name: '中老铁路',
    path: [
      [25.0, 102.7],
      [22.0, 100.8],
      [21.2, 101.7],
      [19.9, 102.2],
      [17.98, 102.63],
    ],
    desc: '中老铁路连接昆明、磨憨、磨丁和万象，是中国与老挝互联互通的重要线路，有利于带动跨境物流、旅游和沿线产业发展。',
    color: '#dc2626',
    dashArray: '',
    weight: 4,
    className: 'china-laos-label-dom',
    arrowSize: 1.25,
  },
]

const seaRoutes: LineItem[] = [
  {
    name: '海上补充航线',
    path: [
      [22.7, 113.5],
      [18.0, 112.0],
      [12.0, 110.0],
      [6.0, 106.0],
      [1.35, 103.82],
      [3.0, 101.4],
      [5.4, 100.3],
    ],
    desc: '该航线用于补充说明东南亚海上交通联系：华南、南海、马六甲海峡、新加坡和马来半岛港口之间存在密切海运联系。',
    color: '#0284c7',
    dashArray: '8 6',
    weight: 3,
    className: 'sea-route-label-dom',
    arrowSize: 1.1,
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
    maxNativeZoom: 5,
    zIndex: 1,
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

  if (showBoundaryLayer.value) boundaryLabels.forEach(updateOneLabelPosition)
  if (showIndustrialCities.value) industrialCityLabels.forEach(updateOneLabelPosition)
  if (showIndustrialCorridors.value) industrialCorridorLabels.forEach(updateOneLabelPosition)
  if (showPanAsiaEastRailway.value) panAsiaEastRailwayLabels.forEach(updateOneLabelPosition)
  if (showPanAsiaMiddleRailway.value) panAsiaMiddleRailwayLabels.forEach(updateOneLabelPosition)
  if (showPanAsiaWestRailway.value) panAsiaWestRailwayLabels.forEach(updateOneLabelPosition)
  if (showChinaLaosRailway.value) chinaLaosRailwayLabels.forEach(updateOneLabelPosition)
  if (showPortNodes.value) portNodeLabels.forEach(updateOneLabelPosition)
  if (showSeaRoute.value) seaRouteLabels.forEach(updateOneLabelPosition)
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

function bindMapInfo(layer: L.Layer, title: string, desc: string, type = '地图要素') {
  layer.on('click', () => {
    showMapInfo(title, type, desc)
  })
}

async function loadBoundaryLayer() {
  if (!map) return

  clearBoundaryLayer()

  const abortController = new AbortController()
  boundaryAbortController = abortController

  try {
    const data = await new Promise<GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>>(resolve => {
      setTimeout(() => {
        resolve(GEOJSON_MAP['东南亚国家轮廓线']! || GEOJSON_MAP['东南亚轮廓线']!)
      }, 300)
    })

    if (abortController.signal.aborted || !map || !showBoundaryLayer.value) return

    boundaryLayer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },
      style: feature => {
        const props = feature?.properties || {}

        return {
          color: props.strokeColor || '#0f766e',
          weight: props.weight || 1.4,
          opacity: props.opacity ?? 0.9,
          fillColor: props.fillColor || '#2dd4bf',
          fillOpacity: props.fillOpacity ?? 0.08,
        }
      },
      onEachFeature: (feature, layer) => {
        const props = feature?.properties || {}
        const name = props.name || props.NAME || props.Name || '东南亚国家'
        const desc = props.desc || props.description || '东南亚国家轮廓范围，可与工业城市、交通通道和泛亚铁路图层进行对照。'

        bindMapInfo(layer, name, desc, '国家轮廓')
      },
    }).addTo(map)

    addGeoJsonDomLabels(data, boundaryLabels, 'boundary-label-dom')

    await nextTick()
    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('东南亚国家轮廓请求已取消')
    } else {
      console.error('加载东南亚国家轮廓失败：', error)
      showBoundaryLayer.value = false
      clearDomLabels(boundaryLabels)
    }
  } finally {
    if (boundaryAbortController === abortController) boundaryAbortController = null
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

  clearDomLabels(boundaryLabels)
}

function toggleBoundaryLayer() {
  if (showBoundaryLayer.value) {
    loadBoundaryLayer()
  } else {
    clearBoundaryLayer()
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

function addAreaLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], areas: AreaItem[], type: string) {
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

    bindMapInfo(circle, item.name, item.desc, type)

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

function addPointLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], points: PointItem[]) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  points.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 5.8,
      color: item.color,
      weight: 2,
      fillColor: item.fillColor,
      fillOpacity: 1,
    }).addTo(targetLayer)

    bindMapInfo(marker, `${item.icon} ${item.name}`, item.desc, item.type)

    marker.on('click', () => {
      activeName.value = item.name
      showMapInfo(`${item.icon} ${item.name}`, item.type, item.desc)
      updatePointLabelActiveState()
    })

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: `${item.icon} ${item.name}`,
      className: item.className,
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
      datasetName: item.name,
    })

    if (label) targetLabels.push(label)
  })

  targetLayer.addTo(map)
  updatePointLabelActiveState()
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

function normalizeResourceKey(key: string) {
  return key
    .replace(/\.geojson$/i, '')
    .replace(/\s+/g, '')
    .trim()
}

function getGeojsonFromResource(keys: string[]) {
  const mapRecord = GEOJSON_MAP as Record<string, any>

  for (const key of keys) {
    if (mapRecord[key]) return mapRecord[key]
  }

  const availableKeys = Object.keys(mapRecord)
  const normalizedTargets = keys.map(normalizeResourceKey)

  const fuzzyKey = availableKeys.find(key => {
    const normalizedKey = normalizeResourceKey(key)
    return normalizedTargets.some(target => normalizedKey === target || normalizedKey.includes(target) || target.includes(normalizedKey))
  })

  if (fuzzyKey) return mapRecord[fuzzyKey]

  console.warn('未找到泛亚铁路 GeoJSON，可用 GEOJSON_MAP keys：', availableKeys, '目标 keys：', keys)
  return null
}

function getFeatureDisplayName(props: Record<string, any>, fallbackName: string) {
  return props.name || props.NAME || props.Name || props.title || props.labelText || props.线路名称 || props.名称 || fallbackName
}

function getFeatureDisplayDesc(props: Record<string, any>, fallbackDesc: string) {
  return props.desc || props.description || props.Descriptio || props.说明 || props.简介 || fallbackDesc
}

function normalizeGeoCoordinate(coord: any): [number, number] | null {
  if (!Array.isArray(coord) || coord.length < 2) return null

  const first = Number(coord[0])
  const second = Number(coord[1])

  if (!Number.isFinite(first) || !Number.isFinite(second)) return null

  // 标准 GeoJSON 是 [lng, lat]，但部分课件资源可能导出成 [lat, lng]。
  // 东南亚经度一般在 90-130，纬度一般在 -12-30。
  // 如果第一个值像纬度、第二个值像东南亚经度，则自动按 [lat, lng] 处理。
  const looksLikeLatLng = Math.abs(first) <= 35 && second >= 90 && second <= 135

  if (looksLikeLatLng) {
    return [first, second]
  }

  return [second, first]
}

function getLatLngPathsFromGeometry(geometry: any): [number, number][][] {
  if (!geometry) return []

  if (geometry.type === 'LineString') {
    const coordinates = Array.isArray(geometry.coordinates) ? geometry.coordinates : []
    const path = coordinates.map(normalizeGeoCoordinate).filter(Boolean) as [number, number][]
    return path.length >= 2 ? [path] : []
  }

  if (geometry.type === 'MultiLineString') {
    const lines = Array.isArray(geometry.coordinates) ? geometry.coordinates : []

    return lines
      .map((line: any[]) => {
        const path = Array.isArray(line) ? (line.map(normalizeGeoCoordinate).filter(Boolean) as [number, number][]) : []
        return path
      })
      .filter((path: [number, number][]) => path.length >= 2)
  }

  // 兼容铁路资源被导出成 Polygon：把每个外环 / 内环当成一条可绘制路径
  if (geometry.type === 'Polygon') {
    const rings = Array.isArray(geometry.coordinates) ? geometry.coordinates : []

    return rings
      .map((ring: any[]) => {
        const path = Array.isArray(ring) ? (ring.map(normalizeGeoCoordinate).filter(Boolean) as [number, number][]) : []
        return path
      })
      .filter((path: [number, number][]) => path.length >= 2)
  }

  // 兼容铁路资源被导出成 MultiPolygon：把所有 polygon 的 ring 提取出来绘制
  if (geometry.type === 'MultiPolygon') {
    const polygons = Array.isArray(geometry.coordinates) ? geometry.coordinates : []

    return polygons.flatMap((polygon: any[]) => {
      const rings = Array.isArray(polygon) ? polygon : []

      return rings
        .map((ring: any[]) => {
          const path = Array.isArray(ring) ? (ring.map(normalizeGeoCoordinate).filter(Boolean) as [number, number][]) : []
          return path
        })
        .filter((path: [number, number][]) => path.length >= 2)
    })
  }

  if (geometry.type === 'GeometryCollection') {
    const geometries = Array.isArray(geometry.geometries) ? geometry.geometries : []
    return geometries.flatMap(getLatLngPathsFromGeometry)
  }

  return []
}

function getMiddlePointFromPath(path: [number, number][]) {
  if (!path.length) return null
  return path[Math.floor(path.length / 2)]
}

function addGeojsonRailwayArrow(targetLayer: L.LayerGroup, path: [number, number][], config: PanAsiaRailwayGeojsonItem, name: string, desc: string) {
  const arrowHeadPoints = getArrowHeadPoints(path, config.arrowSize)

  if (!arrowHeadPoints.length) return

  const arrow = L.polygon(arrowHeadPoints, {
    color: config.color,
    weight: 1,
    fillColor: config.color,
    fillOpacity: 0.92,
    opacity: 0.92,
  }).addTo(targetLayer)

  bindMapInfo(arrow, name, desc, config.type)
}

function addGeojsonRailwayLabelsAndArrows(geojson: any, config: PanAsiaRailwayGeojsonItem, targetLayer: L.LayerGroup, targetLabels: DomLabel[]) {
  const features = geojson?.type === 'FeatureCollection' ? geojson.features : geojson?.type === 'Feature' ? [geojson] : []

  if (!Array.isArray(features)) return

  features.forEach((feature: any, index: number) => {
    const props = feature?.properties || {}
    const name = getFeatureDisplayName(props, config.name)
    const desc = getFeatureDisplayDesc(props, config.desc)
    const paths = getLatLngPathsFromGeometry(feature?.geometry)

    paths.forEach((path, pathIndex) => {
      addGeojsonRailwayArrow(targetLayer, path, config, name, desc)

      const middle = getMiddlePointFromPath(path)

      if (!middle) return

      const labelName = index === 0 && pathIndex === 0 ? name : `${name}${index + pathIndex + 1}`
      const label = createDomLabel({
        lat: middle[0],
        lng: middle[1],
        content: labelName,
        className: config.className,
        offsetX: 0,
        offsetY: -10,
      })

      if (label) targetLabels.push(label)
    })
  })
}

function getGeojsonFeaturesForManualDraw(geojson: any) {
  if (!geojson) return []
  if (geojson.type === 'FeatureCollection') return Array.isArray(geojson.features) ? geojson.features : []
  if (geojson.type === 'Feature') return [geojson]
  if (
    geojson.type === 'LineString' ||
    geojson.type === 'MultiLineString' ||
    geojson.type === 'Polygon' ||
    geojson.type === 'MultiPolygon' ||
    geojson.type === 'GeometryCollection'
  ) {
    return [
      {
        type: 'Feature',
        properties: {},
        geometry: geojson,
      },
    ]
  }
  return []
}

function getLatLngPolygonsFromGeometry(geometry: any): [number, number][][][] {
  if (!geometry) return []

  if (geometry.type === 'Polygon') {
    const rings = Array.isArray(geometry.coordinates) ? geometry.coordinates : []

    const polygon = rings
      .map((ring: any[]) => {
        const path = Array.isArray(ring) ? (ring.map(normalizeGeoCoordinate).filter(Boolean) as [number, number][]) : []
        return path
      })
      .filter((path: [number, number][]) => path.length >= 3)

    return polygon.length ? [polygon] : []
  }

  if (geometry.type === 'MultiPolygon') {
    const polygons = Array.isArray(geometry.coordinates) ? geometry.coordinates : []

    return polygons
      .map((polygon: any[]) => {
        const rings = Array.isArray(polygon) ? polygon : []

        return rings
          .map((ring: any[]) => {
            const path = Array.isArray(ring) ? (ring.map(normalizeGeoCoordinate).filter(Boolean) as [number, number][]) : []
            return path
          })
          .filter((path: [number, number][]) => path.length >= 3)
      })
      .filter((polygon: [number, number][][]) => polygon.length)
  }

  if (geometry.type === 'GeometryCollection') {
    const geometries = Array.isArray(geometry.geometries) ? geometry.geometries : []
    return geometries.flatMap(getLatLngPolygonsFromGeometry)
  }

  return []
}

function getPolygonLabelPoint(polygon: [number, number][][]): [number, number] | null {
  const outerRing = polygon[0]

  if (!outerRing?.length) return null

  const sum = outerRing.reduce(
    (acc, point) => {
      acc.lat += point[0]
      acc.lng += point[1]
      return acc
    },
    { lat: 0, lng: 0 },
  )

  return [sum.lat / outerRing.length, sum.lng / outerRing.length]
}

function drawPanAsiaRailwayPolygons(geojson: any, config: PanAsiaRailwayGeojsonItem, targetLayer: L.LayerGroup, targetLabels: DomLabel[]) {
  const features = getGeojsonFeaturesForManualDraw(geojson)
  let drawCount = 0

  features.forEach((feature: any, featureIndex: number) => {
    const props = feature?.properties || {}
    const name = getFeatureDisplayName(props, config.name)
    const desc = getFeatureDisplayDesc(props, config.desc)
    const polygons = getLatLngPolygonsFromGeometry(feature?.geometry)

    polygons.forEach((polygon, polygonIndex) => {
      const area = L.polygon(polygon, {
        color: props.strokeColor || props.color || config.color,
        weight: Number(props.weight || config.weight),
        opacity: Number(props.opacity ?? 0.92),
        fillColor: props.fillColor || props.color || config.color,
        fillOpacity: Number(props.fillOpacity ?? 0.18),
        dashArray: props.dashArray || config.dashArray,
        lineJoin: 'round',
      }).addTo(targetLayer)

      bindMapInfo(area, name, desc, config.type)

      // MultiPolygon 是面状缓冲区时，箭头无法准确表达方向，这里只加面和标签。
      const labelPoint = getPolygonLabelPoint(polygon)

      if (labelPoint) {
        const labelName = featureIndex === 0 && polygonIndex === 0 ? name : `${name}${featureIndex + polygonIndex + 1}`

        const label = createDomLabel({
          lat: labelPoint[0],
          lng: labelPoint[1],
          content: labelName,
          className: config.className,
          offsetX: 0,
          offsetY: -10,
        })

        if (label) targetLabels.push(label)
      }

      drawCount += 1
    })
  })

  return drawCount
}

function drawPanAsiaRailwayGeojson(geojson: any, config: PanAsiaRailwayGeojsonItem, targetLayer: L.LayerGroup, targetLabels: DomLabel[]) {
  const polygonDrawCount = drawPanAsiaRailwayPolygons(geojson, config, targetLayer, targetLabels)

  if (polygonDrawCount) {
    return polygonDrawCount
  }

  const features = getGeojsonFeaturesForManualDraw(geojson)
  let drawCount = 0

  features.forEach((feature: any, featureIndex: number) => {
    const props = feature?.properties || {}
    const name = getFeatureDisplayName(props, config.name)
    const desc = getFeatureDisplayDesc(props, config.desc)
    const paths = getLatLngPathsFromGeometry(feature?.geometry)

    paths.forEach((path, pathIndex) => {
      const line = L.polyline(path, {
        color: props.strokeColor || props.color || config.color,
        weight: Number(props.weight || config.weight),
        opacity: Number(props.opacity ?? 0.9),
        dashArray: props.dashArray || config.dashArray,
        smoothFactor: 0,
        lineJoin: 'round',
        lineCap: 'round',
      }).addTo(targetLayer)

      bindMapInfo(line, name, desc, config.type)
      addGeojsonRailwayArrow(targetLayer, path, config, name, desc)

      const middle = getMiddlePointFromPath(path)

      if (middle) {
        const labelName = featureIndex === 0 && pathIndex === 0 ? name : `${name}${featureIndex + pathIndex + 1}`

        const label = createDomLabel({
          lat: middle[0],
          lng: middle[1],
          content: labelName,
          className: config.className,
          offsetX: 0,
          offsetY: -10,
        })

        if (label) targetLabels.push(label)
      }

      drawCount += 1
    })
  })

  return drawCount
}

function loadSinglePanAsiaRailwayGeojsonLayer(config: PanAsiaRailwayGeojsonItem, targetLayer: L.LayerGroup, targetLabels: DomLabel[]) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  const geojson = getGeojsonFromResource(config.keys)

  if (!geojson) {
    showMapInfo(
      config.name,
      'GeoJSON 图层未找到',
      `当前 GEOJSON_MAP 中没有找到：${config.keys[0]}。请在 @/resource 中加入 ${config.keys[0]} 后再开启该图层。`,
    )
    return
  }

  const drawCount = drawPanAsiaRailwayGeojson(geojson, config, targetLayer, targetLabels)

  if (!drawCount) {
    showMapInfo(
      config.name,
      'GeoJSON 坐标未识别',
      '已找到该 GeoJSON，但没有识别到 LineString / MultiLineString / Polygon / MultiPolygon / GeometryCollection 要素。请检查文件 geometry.type 和 coordinates 结构。',
    )
    return
  }

  targetLayer.addTo(map)
  scheduleUpdateLabels()
}

function getPanAsiaConfigByKey(key: 'east' | 'middle' | 'west') {
  return panAsiaRailwayGeojsonConfigs.find(item => item.key === key)!
}

function addLineLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], lines: LineItem[], type: string) {
  if (!map) return

  targetLayer.clearLayers()
  clearDomLabels(targetLabels)

  lines.forEach(item => {
    const line = L.polyline(item.path, {
      color: item.color,
      weight: item.weight || 3,
      opacity: 0.88,
      dashArray: item.dashArray || '',
      smoothFactor: 0,
      lineJoin: 'round',
      lineCap: 'round',
    }).addTo(targetLayer)

    bindMapInfo(line, item.name, item.desc, type)

    const arrowHeadPoints = getArrowHeadPoints(item.path, item.arrowSize || 1.2)

    if (arrowHeadPoints.length) {
      const arrow = L.polygon(arrowHeadPoints, {
        color: item.color,
        weight: 1,
        fillColor: item.color,
        fillOpacity: 0.92,
        opacity: 0.92,
      }).addTo(targetLayer)

      bindMapInfo(arrow, item.name, item.desc, type)
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

function updatePointLabelActiveState() {
  ;[...industrialCityLabels, ...portNodeLabels].forEach(label => {
    const name = label.el.dataset.name

    if (name && name === activeName.value) {
      label.el.classList.add('active')
    } else {
      label.el.classList.remove('active')
    }
  })
}

function refreshMapLayers() {
  if (!map) return

  if (showIndustrialCities.value) {
    addPointLayer(industrialCityLayer, industrialCityLabels, industrialCities)
  } else {
    industrialCityLayer.clearLayers()
    clearDomLabels(industrialCityLabels)
  }

  if (showIndustrialCorridors.value) {
    addAreaLayer(industrialCorridorLayer, industrialCorridorLabels, industrialCorridors, '工业走廊')
  } else {
    industrialCorridorLayer.clearLayers()
    clearDomLabels(industrialCorridorLabels)
  }

  if (showPanAsiaEastRailway.value) {
    loadSinglePanAsiaRailwayGeojsonLayer(getPanAsiaConfigByKey('east'), panAsiaEastRailwayLayer, panAsiaEastRailwayLabels)
  } else {
    panAsiaEastRailwayLayer.clearLayers()
    clearDomLabels(panAsiaEastRailwayLabels)
  }

  if (showPanAsiaMiddleRailway.value) {
    loadSinglePanAsiaRailwayGeojsonLayer(getPanAsiaConfigByKey('middle'), panAsiaMiddleRailwayLayer, panAsiaMiddleRailwayLabels)
  } else {
    panAsiaMiddleRailwayLayer.clearLayers()
    clearDomLabels(panAsiaMiddleRailwayLabels)
  }

  if (showPanAsiaWestRailway.value) {
    loadSinglePanAsiaRailwayGeojsonLayer(getPanAsiaConfigByKey('west'), panAsiaWestRailwayLayer, panAsiaWestRailwayLabels)
  } else {
    panAsiaWestRailwayLayer.clearLayers()
    clearDomLabels(panAsiaWestRailwayLabels)
  }

  if (showChinaLaosRailway.value) {
    addLineLayer(chinaLaosRailwayLayer, chinaLaosRailwayLabels, chinaLaosRailway, '中老铁路')
  } else {
    chinaLaosRailwayLayer.clearLayers()
    clearDomLabels(chinaLaosRailwayLabels)
  }

  if (showPortNodes.value) {
    addPointLayer(portNodeLayer, portNodeLabels, portNodes)
  } else {
    portNodeLayer.clearLayers()
    clearDomLabels(portNodeLabels)
  }

  if (showSeaRoute.value) {
    addLineLayer(seaRouteLayer, seaRouteLabels, seaRoutes, '海上补充航线')
  } else {
    seaRouteLayer.clearLayers()
    clearDomLabels(seaRouteLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  clearBoundaryLayer()

  industrialCityLayer.clearLayers()
  industrialCorridorLayer.clearLayers()
  panAsiaEastRailwayLayer.clearLayers()
  panAsiaMiddleRailwayLayer.clearLayers()
  panAsiaWestRailwayLayer.clearLayers()
  chinaLaosRailwayLayer.clearLayers()
  portNodeLayer.clearLayers()
  seaRouteLayer.clearLayers()

  if (map.hasLayer(industrialCityLayer)) industrialCityLayer.removeFrom(map)
  if (map.hasLayer(industrialCorridorLayer)) industrialCorridorLayer.removeFrom(map)
  if (map.hasLayer(panAsiaEastRailwayLayer)) panAsiaEastRailwayLayer.removeFrom(map)
  if (map.hasLayer(panAsiaMiddleRailwayLayer)) panAsiaMiddleRailwayLayer.removeFrom(map)
  if (map.hasLayer(panAsiaWestRailwayLayer)) panAsiaWestRailwayLayer.removeFrom(map)
  if (map.hasLayer(chinaLaosRailwayLayer)) chinaLaosRailwayLayer.removeFrom(map)
  if (map.hasLayer(portNodeLayer)) portNodeLayer.removeFrom(map)
  if (map.hasLayer(seaRouteLayer)) seaRouteLayer.removeFrom(map)

  clearDomLabels(boundaryLabels)
  clearDomLabels(industrialCityLabels)
  clearDomLabels(industrialCorridorLabels)
  clearDomLabels(panAsiaEastRailwayLabels)
  clearDomLabels(panAsiaMiddleRailwayLabels)
  clearDomLabels(panAsiaWestRailwayLabels)
  clearDomLabels(chinaLaosRailwayLabels)
  clearDomLabels(portNodeLabels)
  clearDomLabels(seaRouteLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaIndustryTransportMap', {
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

  if (showBoundaryLayer.value) {
    loadBoundaryLayer()
  }

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
.industry-transport-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.industry-transport-header {
  margin-bottom: 32px;
}

.industry-transport-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.industry-transport-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.industry-transport-content-right {
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

.it-card {
  border-radius: 8px;
  border: 1px solid rgba(15, 143, 179, 0.26);
  padding: 14px;
}

.it-card-01 {
  background: #ecfeff;
  border-color: rgba(15, 143, 179, 0.35);
}

.it-card-02 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.it-card-03 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.it-card-04 {
  background: #eff6ff;
  border-color: #bfdbfe;
}

.it-card-05 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.it-card-06 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.it-card-07 {
  background: #f5f3ff;
  border-color: #ddd6fe;
}

.it-card-08 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.it-card-09 {
  background: #fefce8;
  border-color: #fde68a;
}

.it-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-color, #0f8fb3);
}

.it-card-02 .it-card-header,
.it-card-03 .it-card-header {
  color: #0f766e;
}

.it-card-04 .it-card-header,
.it-card-05 .it-card-header {
  color: #2563eb;
}

.it-card-06 .it-card-header {
  color: #334155;
}

.it-card-07 .it-card-header {
  color: #6d28d9;
}

.it-card-08 .it-card-header {
  color: #c2410c;
}

.it-card-09 .it-card-header {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color, #0f8fb3);
}

.it-card-02 .iconfont,
.it-card-03 .iconfont {
  color: #0f766e;
}

.it-card-04 .iconfont,
.it-card-05 .iconfont {
  color: #2563eb;
}

.it-card-06 .iconfont {
  color: #334155;
}

.it-card-07 .iconfont {
  color: #6d28d9;
}

.it-card-08 .iconfont {
  color: #c2410c;
}

.it-card-09 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.it-card p {
  margin-top: 0;
  line-height: 1.65;
  color: #1f2937;
}

.feature-grid,
.railway-grid,
.influence-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.feature-box,
.railway-card,
.influence-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid rgba(15, 143, 179, 0.18);
}

.feature-title {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 4px;
}

.feature-value {
  font-size: 17px;
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 4px;
}

.feature-desc,
.railway-desc,
.influence-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
}

.note-box,
.link-box {
  margin-top: 12px;
  padding: 8px 10px;
  border-radius: 6px;
  background: #fff;
  border-left: 3px solid var(--primary-color, #0f8fb3);
  font-size: 13px;
  color: #374151;
}

.note-title,
.link-title {
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 4px;
}

.industry-type-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid #0f766e;
  margin-bottom: 8px;
}

.industry-type-item:last-child {
  margin-bottom: 0;
}

.item-title {
  font-weight: bold;
  color: #0f766e;
  margin-bottom: 4px;
}

.item-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
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

.railway-title {
  font-weight: bold;
  margin-bottom: 4px;
}

.railway-card.east .railway-title {
  color: #2563eb;
}

.railway-card.middle .railway-title {
  color: #7c3aed;
}

.railway-card.west .railway-title {
  color: #0f766e;
}

.railway-card.laos .railway-title {
  color: #dc2626;
}

.influence-title {
  font-weight: bold;
  color: #0369a1;
  margin-bottom: 4px;
}

.compare-table {
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #fff;
}

.compare-row {
  display: grid;
  grid-template-columns: 82px 1fr 1fr;
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
  color: var(--primary-color, #0f8fb3);
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
  width: 255px;
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
  margin-bottom: 5px;
  line-height: 1.35;
}

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.boundary-area {
  background: rgba(45, 212, 191, 0.2);
  border: 1px solid #0f766e;
}

.corridor-area {
  background: rgba(251, 146, 60, 0.24);
  border: 1px solid #c2410c;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.city-dot {
  background: #2dd4bf;
  border: 2px solid #0f766e;
  box-sizing: border-box;
}

.port-dot {
  background: #60a5fa;
  border: 2px solid #1d4ed8;
  box-sizing: border-box;
}

.legend-line {
  width: 25px;
  height: 0;
  display: inline-block;
  flex-shrink: 0;
}

.panasia-east-line {
  border-top: 3px dashed #2563eb;
}

.panasia-middle-line {
  border-top: 3px dashed #7c3aed;
}

.panasia-west-line {
  border-top: 3px dashed #0f766e;
}

.laos-line {
  border-top: 4px solid #dc2626;
}

.sea-line {
  border-top: 3px dashed #0284c7;
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
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 4px;
}

.focus-card {
  position: absolute;
  left: 12px;
  bottom: 12px;
  z-index: 1000;
  width: 320px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 8px;
  padding: 10px 12px;
  box-shadow: 0 2px 10px rgba(15, 39, 72, 0.16);
  border-left: 4px solid var(--primary-color, #0f8fb3);
}

.focus-card-empty {
  border-left-color: #94a3b8;
}

.focus-title {
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
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

:deep(.custom-map-label-pane) {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 650;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

:deep(.boundary-label-dom),
:deep(.industrial-city-label-dom),
:deep(.port-node-label-dom),
:deep(.corridor-label-dom),
:deep(.panasia-label-dom),
:deep(.china-laos-label-dom),
:deep(.sea-route-label-dom) {
  position: absolute;
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
    0 0 0 1px rgba(255, 255, 255, 0.45);
}

:deep(.boundary-label-dom),
:deep(.corridor-label-dom),
:deep(.panasia-label-dom),
:deep(.china-laos-label-dom),
:deep(.sea-route-label-dom) {
  transform: translate(-50%, -50%);
}

:deep(.industrial-city-label-dom),
:deep(.port-node-label-dom) {
  transform: translate(0, -50%);
}

:deep(.boundary-label-dom) {
  background: rgba(15, 118, 110, 0.88);
}

:deep(.industrial-city-label-dom) {
  background: rgba(15, 118, 110, 0.92);
}

:deep(.port-node-label-dom) {
  background: rgba(29, 78, 216, 0.92);
}

:deep(.corridor-label-dom) {
  background: rgba(194, 65, 12, 0.9);
}

:deep(.panasia-label-dom) {
  background: rgba(109, 40, 217, 0.9);
}

:deep(.china-laos-label-dom) {
  background: rgba(220, 38, 38, 0.92);
}

:deep(.sea-route-label-dom) {
  background: rgba(2, 132, 199, 0.9);
}

:deep(.industrial-city-label-dom.active),
:deep(.port-node-label-dom.active) {
  background: var(--primary-color, #0f8fb3);
  color: #fff;
  font-size: 13px;
}

.geojson-tip {
  margin: 8px 0 10px;
  padding: 8px 10px;
  border-radius: 7px;
  background: #eef2ff;
  border-left: 3px solid #6366f1;
  color: #475569;
  font-size: 12px;
  line-height: 1.55;
}

.geojson-tip strong {
  color: #4338ca;
}
</style>
