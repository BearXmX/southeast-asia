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
          <div class="strait-card-header"><i class="iconfont icon-diqiu"></i>马六甲海峡的位置</div>

          <p class="mb-8">
            马六甲海峡位于<strong>马来半岛</strong>和<strong>苏门答腊岛</strong>之间，
            是连接<strong>印度洋</strong>和<strong>太平洋</strong>的重要海上通道。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">连接海域</div>
              <div class="feature-value">两洋通道</div>
              <div class="feature-desc">沟通印度洋和太平洋，联系西亚、南亚、东南亚与东亚，是东西方海上交通要道。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">相邻地区</div>
              <div class="feature-value">半岛与岛屿</div>
              <div class="feature-desc">位于马来半岛和苏门答腊岛之间，东南端附近是新加坡，西北侧联系印度洋方向。</div>
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
          <div class="strait-card-header"><i class="iconfont icon-jingweidu"></i>世界重要海上通道</div>

          <div class="info-item">
            <div class="item-title">连接东西方航线</div>
            <div class="item-desc">
              来自欧洲、西亚、南亚的船舶，可以通过印度洋进入马六甲海峡，再经南海通往中国、日本、韩国等东亚地区，是国际海运线路中的关键节点。
            </div>
          </div>

          <div class="info-item">
            <div class="item-title">能源运输通道</div>
            <div class="item-desc">
              西亚石油运往东亚的重要航线经过马六甲海峡，因此它具有突出的能源运输价值。对中国、日本、韩国等能源进口国而言，该通道具有明显战略意义。
            </div>
          </div>

          <div class="info-item">
            <div class="item-title">新加坡区位优势</div>
            <div class="item-desc">
              新加坡位于马六甲海峡东南端附近，扼守国际航线节点，凭借优越位置发展成为世界重要港口、转口贸易中心和国际金融服务中心。
            </div>
          </div>
        </div>

        <div class="strait-card strait-card-03">
          <div class="strait-card-header"><i class="iconfont icon-anchor-full"></i>重要港口与节点</div>

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
          <div class="strait-card-header"><i class="iconfont icon-hexin"></i>为什么重要？</div>

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

        <div class="strait-card strait-card-06">
          <div class="strait-card-header"><i class="iconfont icon-wenhuajiaoyu"></i>海峡识图干货</div>

          <div class="knowledge-list">
            <div class="knowledge-item">
              <span>找位置</span>
              <p>先在地图上找到马来半岛和苏门答腊岛，二者之间狭长水道就是马六甲海峡，东南端附近是新加坡。</p>
            </div>

            <div class="knowledge-item">
              <span>看连接</span>
              <p>海峡西接印度洋方向，东经南海通向太平洋和东亚地区，所以它是沟通两洋的重要海上通道。</p>
            </div>

            <div class="knowledge-item">
              <span>看航线</span>
              <p>西亚、南亚和欧洲方向的船舶经印度洋进入海峡，再经过南海通向中国、日本、韩国等东亚市场。</p>
            </div>

            <div class="knowledge-item">
              <span>看港口</span>
              <p>新加坡、巴生港、槟城港等靠近海峡，依托航运、转口贸易、物流和金融服务发展起来。</p>
            </div>
          </div>
        </div>

        <div class="strait-card strait-card-07">
          <div class="strait-card-header"><i class="iconfont icon-wuliyinsu"></i>马六甲海峡的区位影响</div>

          <div class="influence-grid">
            <div class="influence-card">
              <div class="influence-title">海峡 → 航运</div>
              <div class="influence-desc">狭长通道缩短了印度洋与太平洋之间的航程，使大量国际船舶选择经此通行。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">航运 → 港口</div>
              <div class="influence-desc">航线密集带来补给、转运、维修、仓储和金融服务需求，推动新加坡等港口发展。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">能源 → 战略</div>
              <div class="influence-desc">西亚石油经印度洋和马六甲海峡运往东亚，使其成为重要能源运输通道。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">贸易 → 区域发展</div>
              <div class="influence-desc">海峡促进东南亚与东亚、南亚、西亚和欧洲的贸易联系，带动港口城市和服务业发展。</div>
            </div>
          </div>
        </div>

        <div class="strait-card strait-card-08">
          <div class="strait-card-header"><i class="iconfont icon-maodunjiufen"></i>航线对比</div>

          <div class="compare-table">
            <div class="compare-row compare-head">
              <div>项目</div>
              <div>西亚石油航线</div>
              <div>东亚贸易航线</div>
            </div>

            <div class="compare-row">
              <div>主要方向</div>
              <div>西亚、印度洋 → 马六甲海峡 → 南海 → 东亚</div>
              <div>东亚市场 → 南海 → 马六甲海峡 → 印度洋方向</div>
            </div>

            <div class="compare-row">
              <div>核心货物</div>
              <div>石油、天然气等能源运输更突出</div>
              <div>工业品、消费品、原材料和集装箱运输更突出</div>
            </div>

            <div class="compare-row">
              <div>影响区域</div>
              <div>联系西亚能源产区与中国、日本、韩国等东亚消费市场</div>
              <div>联系东亚制造业和东南亚、南亚、西亚、欧洲市场</div>
            </div>

            <div class="compare-row">
              <div>区位节点</div>
              <div>新加坡港、马六甲海峡、南海航道</div>
              <div>新加坡港、巴生港、南海与东亚港口群</div>
            </div>
          </div>
        </div>

        <div class="strait-card strait-card-09">
          <div class="strait-card-header"><i class="iconfont icon-bangzhuyushuoming"></i>常见易混点</div>

          <div class="mix-list">
            <div class="mix-item">
              <div class="mix-title">马六甲海峡不是连接“大西洋和太平洋”</div>
              <div class="mix-desc">它连接的是印度洋和太平洋方向，西侧通向印度洋，东侧经南海通向太平洋和东亚。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">马六甲海峡不在菲律宾群岛旁边</div>
              <div class="mix-desc">它位于马来半岛和苏门答腊岛之间，识图时要抓住“半岛—岛屿之间的狭长水道”。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">新加坡重要不只因为面积小</div>
              <div class="mix-desc">新加坡面积虽小，但位于马六甲海峡东南端附近，靠近国际航线，港口、金融和转口贸易优势突出。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">能源通道和贸易通道不能混为一谈</div>
              <div class="mix-desc">能源通道强调西亚石油运往东亚；贸易通道范围更广，包括集装箱、工业品、原材料和消费品运输。</div>
            </div>
          </div>
        </div>

        <div class="strait-card strait-card-10">
          <div class="strait-card-header"><i class="iconfont icon-hangxian"></i>马六甲海峡世界航线图层</div>

          <div class="knowledge-list">
            <div class="knowledge-item">
              <span>航线范围</span>
              <p>
                “马六甲海峡世界航线”图层用于展示经过或联系马六甲海峡的全球海上航线。它能帮助学生把马六甲海峡放到世界海运网络中理解，而不只是局限在东南亚局部区域。
              </p>
            </div>

            <div class="knowledge-item">
              <span>读图重点</span>
              <p>观察航线从印度洋方向进入马六甲海峡，再经南海联系东亚市场，理解“西亚—南亚—东南亚—东亚”之间的能源、贸易和集装箱运输联系。</p>
            </div>

            <div class="knowledge-item">
              <span>空间意义</span>
              <p>世界航线越密集，越能体现马六甲海峡的咽喉地位。新加坡、巴生港、槟城港等港口也因靠近航线节点而具有重要区位优势。</p>
            </div>

            <div class="knowledge-item">
              <span>综合判断</span>
              <p>分析马六甲海峡时，可以把“海峡位置、世界航线、能源运输、东亚贸易、港口城市”五个图层叠加起来，形成完整空间认知。</p>
            </div>
          </div>
        </div>

        <div class="strait-card strait-card-05">
          <div class="strait-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记位置：</strong>马六甲海峡位于马来半岛和苏门答腊岛之间，东南端附近是新加坡，西北侧联系印度洋方向。</li>
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
            <input type="checkbox" v-model="showWorldRouteGeojson" @change="toggleWorldRouteGeojsonLayer" />
            马六甲海峡世界航线
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
              <span class="legend-arrow world-arrow"></span>
              <span>马六甲海峡世界航线</span>
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
        <div class="map-focus-card" v-if="activeMapInfo">
          <div class="focus-title">{{ activeMapInfo.name }}</div>
          <div class="focus-group">{{ activeMapInfo.type }}</div>
          <div class="focus-desc">{{ activeMapInfo.desc }}</div>
        </div>

        <div class="map-focus-card map-focus-card-empty" v-else>
          <div class="focus-title">地图互动提示</div>
          <div class="focus-group">点击地图要素查看说明</div>
          <div class="focus-desc">
            可点击马六甲海峡、西亚石油航线、东亚贸易航线、马六甲海峡世界航线、重要港口城市和重要海域，左下角会显示对应知识点。
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

type MapInfoItem = {
  name: string
  type: string
  desc: string
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
const showWorldRouteGeojson = ref(true)
const showPortPoints = ref(true)
const showSeaLabels = ref(true)
const activeMapInfo = ref<MapInfoItem | null>(null)

const straitLayer = L.layerGroup()
const oilRouteLayer = L.layerGroup()
const eastAsiaRouteLayer = L.layerGroup()
let worldRouteGeojsonLayer: L.GeoJSON | null = null
const portLayer = L.layerGroup()
const seaLabelLayer = L.layerGroup()

const straitLabels: DomLabel[] = []
const oilRouteLabels: DomLabel[] = []
const eastAsiaRouteLabels: DomLabel[] = []
const worldRouteGeojsonLabels: DomLabel[] = []
const portLabels: DomLabel[] = []
const seaLabels: DomLabel[] = []

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
    desc: '马六甲海峡位于马来半岛和苏门答腊岛之间，西接印度洋方向，东经南海通向太平洋和东亚，是东南亚交通地位的重要体现。',
    color: '#f97316',
    weight: 5,
    className: 'strait-label-dom',
  },
]

const oilRoutes: LineItem[] = [
  {
    name: '西亚石油航线',
    path: [
      [35.151636, 130.1344139],
      [33.3557383, 128.8999779],
      [32.1021573, 128.0669841],
      [28.2762361, 125.9253904],
      [26.5622599, 124.8222857],
      [24.2552258, 123.2020127],
      [22.9088959, 122.3262967],
      [21.2961169, 121.0792186],
      [19.6627188, 119.6601794],
      [15.8215753, 115.9532582],
      [12.0655124, 113.6021698],
      [8.2425519, 110.9894013],
      [5.4243347, 108.8671889],
      [3.002252, 107.4960702],
      [2.0307816, 106.5880913],
      [0.7024488, 105.6333076],
      [0.4080713, 105.1479593],
      [0.5035467, 104.169306],
      [0.9729417, 103.5805228],
      [1.2752313, 103.1349571],
      [1.8319815, 102.3949998],
      [2.0864414, 101.9176079],
      [2.6508701, 101.0026069],
      [3.4836208, 100.0289592],
      [4.3726497, 99.2969584],
      [5.1100697, 98.2307833],
      [5.688317, 97.0134341],
      [6.1707469, 95.2259607],
      [6.4811472, 93.179843],
      [6.5025472, 91.4998726],
      [5.713243, 84.7625605],
      [4.9116805, 81.6854095],
      [4.5272705, 78.5547982],
      [3.5896234, 75.9183828],
      [3.528208, 72.9401856],
      [4.1560313, 71.4066815],
      [5.5304946, 69.7855928],
      [6.7943157, 67.7636929],
      [8.0519896, 66.8517872],
      [9.9678488, 64.9567402],
      [11.2357123, 63.3426955],
      [12.824451, 60.5199946],
      [14.6026516, 58.7675163],
      [15.7813117, 56.9199687],
      [16.3232512, 56.4249977],
      [16.8843927, 55.7377361],
    ].reverse() as [number, number][],
    desc: '西亚石油经印度洋、马六甲海峡和南海运往东亚地区，是联系西亚能源产区与东亚能源消费市场的重要海上通道。',
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
      [34.4774535, 129.2009949],
      [32.2047052, 127.7524565],
      [29.8740047, 126.6358115],
      [27.0143809, 124.9954115],
      [23.0907642, 122.7892624],
      [20.8383325, 121.3196893],
      [16.9358652, 118.4739406],
      [11.3078832, 113.9916686],
      [6.2294461, 110.3037478],
      [3.5408662, 108.1800278],
      [2.0315259, 106.6521998],
      [0.3765547, 105.472338],
      [0.2990227, 104.7806631],
      [0.489059, 104.3722236],
      [0.7607915, 104.0177091],
      [1.0053913, 103.6076228],
      [1.154994, 103.3197777],
    ].reverse() as [number, number][],
    desc: '马六甲海峡经南海连接中国、日本、韩国等东亚市场，也是东亚制造业产品和世界市场联系的重要海上通道。',
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
    name: '棉兰',
    icon: '⚓',
    lat: 3.59,
    lng: 98.67,
    desc: '位于苏门答腊岛北部，靠近马六甲海峡西南侧，是印尼面向海峡航运的重要节点之一。',
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
    offsetX: 12,
    offsetY: -4,
  },

  {
    name: '新加坡港',
    lat: 1.27,
    lng: 103.85,
    icon: '⚓',
    desc: '位于马六甲海峡东南端附近，依托航线密集、港口条件和服务业优势，成为世界重要航运和转口贸易中心。',
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴生港',
    lat: 3.0,
    lng: 101.4,
    icon: '⚓',
    desc: '靠近吉隆坡，服务马来西亚西海岸城市带和马六甲海峡航线，是马来西亚重要港口之一。',
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '槟城港',
    lat: 5.37,
    lng: 100.36,
    icon: '⚓',
    desc: '位于马来半岛西北部，联系马六甲海峡航运、区域制造业和马来西亚西海岸城市带。',
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '海防港',
    lat: 20.86,
    lng: 106.68,
    icon: '⚓',
    desc: '服务红河三角洲和河内地区，是越南北部重要出海口，与南海航线和东亚贸易联系密切。',
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '胡志明市港',
    lat: 10.76,
    lng: 106.72,
    desc: '服务湄公河三角洲和越南南部经济中心，体现河流三角洲、港口和海上贸易的联系。',
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
    icon: '⚓',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '雅加达港',
    lat: -6.12,
    lng: 106.85,
    icon: '⚓',
    desc: '位于爪哇岛西北部，服务雅加达都市区和爪哇岛经济带，是印尼重要海上贸易节点。',
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '泗水港',
    lat: -7.2,
    lng: 112.73,
    icon: '⚓',
    desc: '位于爪哇岛东部，是印尼重要港口和工业城市节点，联系群岛内部市场与国际航线。',
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '马尼拉港',
    lat: 14.58,
    lng: 120.96,
    icon: '⚓',
    desc: '位于马尼拉湾，服务首都圈和吕宋岛人口稠密区，是菲律宾联系东亚和东南亚航线的重要港口。',
    offsetX: 10,
    offsetY: -2,
    color: '#064e3b',
    fillColor: '#10b981',
    className: 'port-label-dom',
  },
]

const seaAreas: AreaItem[] = [
  {
    name: '印度洋',
    lat: 2.0,
    lng: 82.0,
    radius: 750000,
    desc: '马六甲海峡西侧连接印度洋方向，是西亚、南亚和欧洲航线进入东南亚的重要方向。',
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
    desc: '马六甲海峡东侧经南海连接东亚地区，通向中国、日本、韩国等重要贸易市场。',
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

  if (showStraitLine.value) straitLabels.forEach(updateOneLabelPosition)
  if (showOilRoute.value) oilRouteLabels.forEach(updateOneLabelPosition)
  if (showEastAsiaRoute.value) eastAsiaRouteLabels.forEach(updateOneLabelPosition)
  if (showWorldRouteGeojson.value) worldRouteGeojsonLabels.forEach(updateOneLabelPosition)
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

function showMapInfo(title: string, type: string, desc: string) {
  activeMapInfo.value = {
    name: title,
    type,
    desc,
  }
}

function getLineInfoType(item: LineItem) {
  if (item.className.includes('strait')) return '马六甲海峡'
  if (item.className.includes('oil')) return '西亚石油航线'
  if (item.className.includes('trade')) return '东亚贸易航线'
  return '航线'
}

function bindInfoPopup(layer: L.Layer, title: string, desc: string, type = '地图要素') {
  layer.on('click', () => {
    showMapInfo(title, type, desc)
  })
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

    bindInfoPopup(line, item.name, item.desc, getLineInfoType(item))

    if (item.arrow) {
      const arrowHeadPoints = getArrowHeadPoints(item.path, item.arrowSize || 1.2)

      if (arrowHeadPoints.length) {
        const arrow = L.polygon(arrowHeadPoints, {
          color: item.color,
          weight: 1,
          fillColor: item.color,
          fillOpacity: 0.9,
          opacity: 0.9,
        }).addTo(targetLayer)

        bindInfoPopup(arrow, item.name, item.desc, getLineInfoType(item))
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

    bindInfoPopup(marker, `${item.icon} ${item.name}`, item.desc, '重要港口城市')

    marker.on('click', () => {
      showMapInfo(`${item.icon} ${item.name}`, '重要港口城市', item.desc)
    })

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

    bindInfoPopup(circle, item.name, item.desc, '重要海域')

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

function getWorldRouteGeojson() {
  const mapRecord = GEOJSON_MAP as Record<string, any>
  return mapRecord['东南亚马六甲海峡世界航线'] || null
}

function getFeatureName(props: Record<string, any>) {
  return props.name || props.NAME || props.Name || props.title || props.route || props.航线名称 || '马六甲海峡世界航线'
}

function getFeatureDesc(props: Record<string, any>) {
  return (
    props.desc ||
    props.description ||
    props.Descriptio ||
    props.说明 ||
    props.简介 ||
    '该航线来自 GeoJSON 图层，用于展示经过马六甲海峡并联系印度洋、南海和东亚市场的世界海上运输线路。'
  )
}

function normalizeLatLngFromCoordinate(coord: any): [number, number] | null {
  if (!Array.isArray(coord) || coord.length < 2) return null

  const lng = Number(coord[0])
  const lat = Number(coord[1])

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null
  return [lat, lng]
}

function getLineMiddleLatLngFromGeometry(geometry: any): [number, number] | null {
  if (!geometry) return null

  if (geometry.type === 'LineString') {
    const coordinates = geometry.coordinates
    if (!Array.isArray(coordinates) || !coordinates.length) return null

    return normalizeLatLngFromCoordinate(coordinates[Math.floor(coordinates.length / 2)])
  }

  if (geometry.type === 'MultiLineString') {
    const lines = geometry.coordinates
    if (!Array.isArray(lines) || !lines.length) return null

    const longestLine = lines.filter((item: any) => Array.isArray(item) && item.length).sort((a: any[], b: any[]) => b.length - a.length)[0]

    if (!longestLine) return null
    return normalizeLatLngFromCoordinate(longestLine[Math.floor(longestLine.length / 2)])
  }

  if (geometry.type === 'Point') {
    return normalizeLatLngFromCoordinate(geometry.coordinates)
  }

  if (geometry.type === 'MultiPoint') {
    const points = geometry.coordinates
    if (!Array.isArray(points) || !points.length) return null

    return normalizeLatLngFromCoordinate(points[Math.floor(points.length / 2)])
  }

  return null
}

function addWorldRouteGeojsonLabels(geojson: any) {
  clearDomLabels(worldRouteGeojsonLabels)

  const features = geojson?.type === 'FeatureCollection' ? geojson.features : geojson?.type === 'Feature' ? [geojson] : []

  if (!Array.isArray(features)) return

  features.forEach((feature: any, index: number) => {
    const props = feature?.properties || {}
    const name = getFeatureName(props)
    const middle = getLineMiddleLatLngFromGeometry(feature?.geometry)

    if (!middle) return

    const label = createDomLabel({
      lat: middle[0],
      lng: middle[1],
      content: index === 0 ? name : `${name}`,
      className: 'world-route-label-dom',
      offsetX: 0,
      offsetY: -10,
    })

    if (label) worldRouteGeojsonLabels.push(label)
  })
}

function toggleWorldRouteGeojsonLayer() {
  if (!map) return

  if (!showWorldRouteGeojson.value) {
    if (worldRouteGeojsonLayer) {
      worldRouteGeojsonLayer.removeFrom(map)
      worldRouteGeojsonLayer = null
    }

    clearDomLabels(worldRouteGeojsonLabels)
    return
  }

  loadWorldRouteGeojsonLayer()
}

function loadWorldRouteGeojsonLayer() {
  if (!map) return

  if (worldRouteGeojsonLayer) {
    worldRouteGeojsonLayer.removeFrom(map)
    worldRouteGeojsonLayer = null
  }

  clearDomLabels(worldRouteGeojsonLabels)

  const geojson = getWorldRouteGeojson()

  if (!geojson) {
    showWorldRouteGeojson.value = false
    showMapInfo(
      '马六甲海峡世界航线',
      'GeoJSON 图层未找到',
      "当前 GEOJSON_MAP 中未找到 '马六甲海峡世界航线'。请在 @/resource 中加入 GEOJSON_MAP['马六甲海峡世界航线'] 后再开启该图层。",
    )
    return
  }

  worldRouteGeojsonLayer = L.geoJSON(geojson, {
    filter: feature => {
      const type = feature?.geometry?.type
      return type === 'LineString' || type === 'MultiLineString' || type === 'Point' || type === 'MultiPoint'
    },
    style: feature => {
      const props = feature?.properties || {}

      return {
        color: props.strokeColor || props.color || '#7c3aed',
        weight: Number(props.weight || 3.2),
        opacity: Number(props.opacity ?? 0.86),
        dashArray: props.dashArray || '12 7',
        lineJoin: 'round',
        lineCap: 'round',
      }
    },
    pointToLayer: (feature, latlng) => {
      const props = feature?.properties || {}

      return L.circleMarker(latlng, {
        radius: Number(props.radius || 4.8),
        color: props.strokeColor || props.color || '#7c3aed',
        weight: 2,
        fillColor: props.fillColor || '#a78bfa',
        fillOpacity: Number(props.fillOpacity ?? 0.95),
      })
    },
    onEachFeature: (feature, layer) => {
      const props = feature?.properties || {}
      const name = getFeatureName(props)
      const desc = getFeatureDesc(props)

      bindInfoPopup(layer, name, desc, '马六甲海峡世界航线')
    },
  }).addTo(map)

  addWorldRouteGeojsonLabels(geojson)
  scheduleUpdateLabels()
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

  if (showWorldRouteGeojson.value) {
    loadWorldRouteGeojsonLayer()
  } else {
    if (worldRouteGeojsonLayer) {
      worldRouteGeojsonLayer.removeFrom(map)
      worldRouteGeojsonLayer = null
    }

    clearDomLabels(worldRouteGeojsonLabels)
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

  if (worldRouteGeojsonLayer) {
    worldRouteGeojsonLayer.removeFrom(map)
    worldRouteGeojsonLayer = null
  }

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
  clearDomLabels(worldRouteGeojsonLabels)
  clearDomLabels(portLabels)
  clearDomLabels(seaLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaStraitMap', {
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

.strait-card-06 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.strait-card-07 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.strait-card-08 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.strait-card-09 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.strait-card-06 .strait-card-header {
  color: #0f766e;
}

.strait-card-07 .strait-card-header {
  color: #0369a1;
}

.strait-card-08 .strait-card-header {
  color: #334155;
}

.strait-card-09 .strait-card-header {
  color: #c2410c;
}

.strait-card-06 .iconfont {
  color: #0f766e;
}

.strait-card-07 .iconfont {
  color: #0369a1;
}

.strait-card-08 .iconfont {
  color: #334155;
}

.strait-card-09 .iconfont {
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

.influence-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.influence-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #bae6fd;
}

.influence-title {
  font-weight: bold;
  color: #0369a1;
  margin-bottom: 4px;
}

.influence-desc {
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

.map-focus-card {
  position: absolute;
  left: 12px;
  bottom: 12px;
  z-index: 1000;
  width: 320px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 8px;
  padding: 10px 12px;
  box-shadow: 0 2px 10px rgba(15, 39, 72, 0.16);
  border-left: 4px solid var(--primary-color);
}

.map-focus-card-empty {
  border-left-color: #94a3b8;
}

.focus-title {
  font-weight: bold;
  color: #047857;
  font-size: 15px;
  margin-bottom: 4px;
}

.map-focus-card-empty .focus-title {
  color: #334155;
}

.focus-group {
  font-size: 12px;
  color: #0369a1;
  margin-bottom: 4px;
}

.map-focus-card-empty .focus-group {
  color: #64748b;
}

.focus-desc {
  font-size: 12px;
  color: #475569;
  line-height: 1.45;
}

.world-arrow {
  color: #7c3aed;
}

:deep(.world-route-label-dom) {
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
  background: rgba(109, 40, 217, 0.9);
  box-shadow:
    0 2px 8px rgba(15, 39, 72, 0.18),
    0 0 0 1px rgba(255, 255, 255, 0.5);
}

.strait-card-10 {
  background: #f5f3ff;
  border-color: #ddd6fe;
}

.strait-card-10 .strait-card-header {
  color: #6d28d9;
}

.strait-card-10 .iconfont {
  color: #6d28d9;
}
</style>
