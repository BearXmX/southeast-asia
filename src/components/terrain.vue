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
          <div class="terrain-card-header"><i class="iconfont icon-mti-heliu"></i>主要河流</div>

          <div class="river-item">
            <div class="item-title">湄公河</div>
            <div class="item-desc">
              东南亚重要国际河流，流经中国、缅甸、老挝、泰国、柬埔寨、越南等地，下游形成湄公河三角洲，是东南亚重要水稻产区和人口集中区。
            </div>
          </div>

          <div class="river-item">
            <div class="item-title">湄南河</div>
            <div class="item-desc">流经泰国中部，湄南河平原地势低平，灌溉便利，是泰国重要农业区，曼谷位于其下游附近，体现河流对城市发展的影响。</div>
          </div>

          <div class="river-item">
            <div class="item-title">伊洛瓦底江</div>
            <div class="item-desc">缅甸重要河流，纵贯缅甸中部，流域内平原和三角洲地区地势较低平、土壤肥沃，是缅甸重要农业和人口分布区。</div>
          </div>

          <div class="river-item">
            <div class="item-title">红河</div>
            <div class="item-desc">流经越南北部，红河三角洲地势低平、人口稠密，河内和海防等城市与其水源、农业和交通条件密切相关。</div>
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
          <div class="terrain-card-header"><i class="iconfont icon-haibagaodu"></i>马来群岛地形特点</div>

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

        <div class="terrain-card terrain-card-11">
          <div class="terrain-card-header"><i class="iconfont icon-diqiu"></i>全球六大板块分界线</div>

          <p class="mb-8">
            全球岩石圈并不是一个完整整体，而是由若干大板块组成。东南亚尤其是马来群岛靠近
            <strong>亚欧板块、印度洋板块、太平洋板块和菲律宾海板块</strong>等板块交界地带， 因此火山、地震、海沟和岛弧现象比较突出。地图上的板块名称从
            GeoJSON 要素的 properties.labelText 读取，便于你在资源文件中统一维护标注内容和位置。
          </p>

          <div class="knowledge-list">
            <div class="knowledge-item">
              <span>看边界</span>
              <p>板块分界线常与火山地震带、海沟、岛弧、山脉和洋中脊等地貌相联系，读图时要先找板块交界位置。</p>
            </div>

            <div class="knowledge-item">
              <span>看东南亚</span>
              <p>印度尼西亚和菲律宾附近处在多个板块相互作用区域，地壳运动活跃，所以火山地震比中南半岛更频繁。</p>
            </div>

            <div class="knowledge-item">
              <span>看影响</span>
              <p>板块运动既带来地震、火山喷发和海啸风险，也形成火山土壤、火山景观、温泉和丰富地热资源。</p>
            </div>
          </div>
        </div>

        <div class="terrain-card terrain-card-06">
          <div class="terrain-card-header"><i class="iconfont icon-diqiu"></i>读图方法与地形影响</div>

          <div class="read-map-grid">
            <div class="read-map-item">
              <div class="read-map-title">看颜色</div>
              <div class="read-map-desc">结合 OTM 地形底图，绿色多为低地平原，褐色多为丘陵山地，颜色越深地势越高。</div>
            </div>

            <div class="read-map-item">
              <div class="read-map-title">看走向</div>
              <div class="read-map-desc">中南半岛北部山地向南延伸，河流也多顺地势自北向南流，形成纵列格局。</div>
            </div>

            <div class="read-map-item">
              <div class="read-map-title">看河口</div>
              <div class="read-map-desc">河口三角洲地势低平、土壤肥沃，常成为城市、人口和农业密集区。</div>
            </div>

            <div class="read-map-item">
              <div class="read-map-title">看群岛</div>
              <div class="read-map-desc">马来群岛岛屿呈弧形分布，位于板块交界附近，火山地震较频繁。</div>
            </div>
          </div>
        </div>

        <div class="terrain-card terrain-card-07">
          <div class="terrain-card-header"><i class="iconfont icon-mti-heliu"></i>地形河流识图干货</div>

          <div class="knowledge-list">
            <div class="knowledge-item">
              <span>先看地势</span>
              <p>中南半岛北部与中国西南山地相连，整体地势大致北高南低，因此许多河流顺地势自北向南流。</p>
            </div>

            <div class="knowledge-item">
              <span>再看走向</span>
              <p>山脉和河流大致呈南北向延伸，山地与河谷相互间隔，形成“山河相间、纵列分布”的典型格局。</p>
            </div>

            <div class="knowledge-item">
              <span>重点看河口</span>
              <p>河流下游和河口三角洲地势低平、水源充足、土壤肥沃，是水稻种植、人口集聚和城市发展的重点区域。</p>
            </div>

            <div class="knowledge-item">
              <span>群岛看板块</span>
              <p>马来群岛位于板块交界附近，火山、地震较多，岛屿地形起伏大，沿海和火山岛平原更适合人口集中。</p>
            </div>
          </div>
        </div>

        <div class="terrain-card terrain-card-09">
          <div class="terrain-card-header"><i class="iconfont icon-hexin"></i>地形对人类活动的影响</div>

          <div class="influence-grid">
            <div class="influence-card">
              <div class="influence-title">地形 → 农业</div>
              <div class="influence-desc">平原和三角洲地势低平、灌溉便利，适合水稻种植；山地坡度较大，耕作条件相对受限。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">河流 → 城市</div>
              <div class="influence-desc">河流提供水源和交通，河口三角洲便于形成城市，如曼谷、河内、胡志明市等。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">山地 → 交通</div>
              <div class="influence-desc">山地阻隔会增加陆路交通建设难度，交通线常沿河谷、盆地和平原布局。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">火山 → 利弊</div>
              <div class="influence-desc">火山带来地震、喷发等风险，也形成肥沃火山灰土壤和独特自然旅游资源。</div>
            </div>
          </div>
        </div>

        <div class="terrain-card terrain-card-10">
          <div class="terrain-card-header"><i class="iconfont icon-bangzhuyushuoming"></i>常见易混点</div>

          <div class="mix-list">
            <div class="mix-item">
              <div class="mix-title">“山河相间”不是整个东南亚都适用</div>
              <div class="mix-desc">这个特征主要描述中南半岛。马来群岛的重点是岛屿众多、火山地震较多、海岸曲折。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">河流多向南流，但不代表全部完全正南方向</div>
              <div class="mix-desc">受地形影响，中南半岛主要河流总体由北向南流，但具体河段会受山地、盆地和海岸线影响而弯曲。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">三角洲不是普通河谷</div>
              <div class="mix-desc">三角洲位于河流入海口附近，由泥沙堆积形成，地势低平、土壤肥沃，农业和人口密度通常较高。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">火山地震多与板块位置有关</div>
              <div class="mix-desc">马来群岛位于板块交界地带，地壳运动活跃，因此不能只用“岛屿多”解释火山地震多。</div>
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
            <input type="checkbox" v-model="showRiverLayer" @change="toggleRiverLayer" />
            东南亚主要河流
          </label>

          <label>
            <input type="checkbox" v-model="showPlateBoundaryLayer" @change="togglePlateBoundaryLayer" />
            全球六大板块分界线
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
              <span class="legend-line plate-boundary-line"></span>
              <span>全球六大板块分界线</span>
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
            <div>观察中南半岛河流与山脉走向，可以理解“山河相间、纵列分布”；叠加全球六大板块分界线，可以解释马来群岛火山地震多发原因。</div>
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
            可点击主要河流、全球六大板块分界线、山河相间示意线、主要三角洲和主要城市，左下角会显示对应地形知识点；板块名称读取 GeoJSON 中的
            labelText。
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

type MapInfoItem = {
  name: string
  type: string
  desc: string
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

let riverLayer: L.GeoJSON | null = null
let riverAbortController: AbortController | null = null

let plateBoundaryLayer: L.GeoJSON | null = null
let plateBoundaryAbortController: AbortController | null = null

const centerLat = 9
const centerLng = 106
const zoomLevel = 4

const useGoogle = ref(false)
const showRiverLayer = ref(true)
const showPlateBoundaryLayer = ref(false)
const showMountainRiverLines = ref(true)
const showDeltaAreas = ref(true)
const showCities = ref(true)
const activeMapInfo = ref<MapInfoItem | null>(null)

const mountainRiverLayer = L.layerGroup()
const deltaLayer = L.layerGroup()
const cityLayer = L.layerGroup()

const riverLabels: DomLabel[] = []
const plateBoundaryLabels: DomLabel[] = []
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
    desc: '位于越南南部，地势低平，水网密布，土壤肥沃，是重要水稻产区，也是人口和城市较集中的地区。',
  },
  {
    name: '红河三角洲',
    lat: 20.9,
    lng: 106.0,
    radius: 105000,
    desc: '位于越南北部，地势平坦，人口密集，农业历史悠久，河内、海防等城市发展与该三角洲关系密切。',
  },
  {
    name: '湄南河三角洲',
    lat: 13.6,
    lng: 100.5,
    radius: 120000,
    desc: '位于泰国中南部，曼谷附近，湄南河带来水源和冲积平原，使农业、交通和城市活动集中。',
  },
  {
    name: '伊洛瓦底江三角洲',
    lat: 16.0,
    lng: 95.5,
    radius: 140000,
    desc: '位于缅甸南部，地势低平，泥沙沉积明显，是缅甸重要农业区，也利于人口和聚落集中。',
  },
]

const cityPoints: PointItem[] = [
  // 原有的城市
  {
    name: '河内',
    lat: 21.0278,
    lng: 105.8342,
    desc: '位于红河三角洲附近，地势较低平，水源和交通条件较好，是越南北部重要城市。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '曼谷',
    lat: 13.7563,
    lng: 100.5018,
    desc: '位于湄南河下游平原附近，河流、平原和港口条件共同促进其成为泰国首都和经济中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '金边',
    lat: 11.5564,
    lng: 104.9282,
    desc: '位于湄公河沿岸，河流为城市提供水源、交通和农业联系，是柬埔寨首都。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '仰光',
    lat: 16.8409,
    lng: 96.1735,
    desc: '位于伊洛瓦底江三角洲附近，靠近河口和沿海平原，是缅甸重要城市和交通节点。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '胡志明市',
    lat: 10.8231,
    lng: 106.6297,
    desc: '靠近湄公河三角洲，联系河流平原、港口和南部经济腹地，是越南南部重要城市。',
    offsetX: 10,
    offsetY: -2,
  },

  // 👇 以下为新增的东南亚城市
  {
    name: '新加坡',
    lat: 1.3521,
    lng: 103.8198,
    desc: '位于马六甲海峡附近，虽非河流三角洲城市，但依托海峡和港口发展为国际金融、航运和贸易中心。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '吉隆坡',
    lat: 3.139,
    lng: 101.6869,
    desc: '马来西亚首都，位于马来半岛西部城市带，受半岛地形、交通通道和港口联系影响明显。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '雅加达',
    lat: -6.2088,
    lng: 106.8456,
    desc: '位于爪哇岛西北部沿海平原，人口密集，体现马来群岛人口沿海和岛屿平原集中的特点。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '马尼拉',
    lat: 14.5995,
    lng: 120.9842,
    desc: '位于吕宋岛西岸马尼拉湾附近，沿海平原和港湾条件促进城市发展。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '清迈',
    lat: 18.7878,
    lng: 98.9931,
    desc: '位于泰国北部山间盆地，体现山地地区城市多依托盆地、河谷和交通节点分布。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '芭提雅',
    lat: 12.9261,
    lng: 100.8661,
    desc: '位于泰国湾沿岸，体现沿海地形和旅游资源对城市发展的影响。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '暹粒',
    lat: 13.3671,
    lng: 103.861,
    desc: '位于柬埔寨西北部，靠近洞里萨湖区域，历史文化资源与平原水系条件共同影响城市发展。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '万象',
    lat: 17.9757,
    lng: 102.6331,
    desc: '老挝首都，位于湄公河沿岸，体现内陆国家城市沿河流和交通节点分布的特点。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '内比都',
    lat: 19.7633,
    lng: 96.0785,
    desc: '缅甸首都，位于中部平原地区，平坦地形和陆路交通条件有利于城市建设。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '槟城',
    lat: 5.4164,
    lng: 100.3327,
    desc: '位于马来半岛西北部沿海，港口和海峡通道条件突出，体现沿海城市发展特点。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '马六甲',
    lat: 2.1936,
    lng: 102.2501,
    desc: '位于马六甲海峡沿岸，海峡通道和港口区位使其成为历史贸易和文化交流节点。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '宿务',
    lat: 10.3157,
    lng: 123.8854,
    desc: '位于菲律宾中部岛屿地区，沿海港口、海岛旅游和群岛交通联系突出。',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '登巴萨',
    lat: -8.3405,
    lng: 115.092,
    desc: '位于巴厘岛，受火山地貌、海岛景观和旅游资源影响明显，是印尼著名旅游城市。',
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

  const url = TILE_MAP.otm

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
  const size = map.getSize()
  const left = point.x + label.offsetX
  const top = point.y + label.offsetY
  const padding = 80

  // 防止坐标异常或标签在当前地图视野外时，DOM 默认堆到左上角
  if (!Number.isFinite(left) || !Number.isFinite(top) || left < -padding || top < -padding || left > size.x + padding || top > size.y + padding) {
    label.el.style.display = 'none'
    return
  }

  label.el.style.display = 'block'
  label.el.style.left = `${left}px`
  label.el.style.top = `${top}px`
}

function updateAllLabelPositions() {
  updateLabelRaf = 0

  if (showRiverLayer.value) {
    riverLabels.forEach(updateOneLabelPosition)
  }

  if (showPlateBoundaryLayer.value) {
    plateBoundaryLabels.forEach(updateOneLabelPosition)
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

async function loadRiverLayer() {
  if (!map) return

  clearRiverLayer()

  const abortController = new AbortController()
  riverAbortController = abortController

  try {
    const data = (GEOJSON_MAP as Record<string, any>)['东南亚河流分布'] || (GEOJSON_MAP as Record<string, any>)['东南亚河流分布.geojson']

    if (!data) {
      throw new Error('GEOJSON_MAP 中未找到“东南亚河流分布”')
    }

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

        bindInfoPopup(layer, name, desc, '主要河流')
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

function getPlateBoundaryGeojson() {
  const mapRecord = GEOJSON_MAP as Record<string, any>

  return (
    mapRecord['全球六大板块分界线'] ||
    mapRecord['全球六大板块分界线.geojson'] ||
    mapRecord['全球六大板块边界线'] ||
    mapRecord['全球六大板块边界线.geojson'] ||
    mapRecord['全球板块分界线'] ||
    mapRecord['全球板块分界线.geojson'] ||
    mapRecord['全球板块边界线'] ||
    mapRecord['全球板块边界线.geojson'] ||
    mapRecord['六大板块分界线'] ||
    mapRecord['六大板块分界线.geojson'] ||
    mapRecord['六大板块边界线'] ||
    mapRecord['六大板块边界线.geojson'] ||
    null
  )
}

function getFeatureDisplayName(props: Record<string, any>, fallbackName: string) {
  return props.name || props.NAME || props.Name || props.title || props.labelText || props.名称 || fallbackName
}

function getFeatureDisplayDesc(props: Record<string, any>, fallbackDesc: string) {
  return props.desc || props.description || props.Descriptio || props.说明 || props.简介 || fallbackDesc
}

function normalizeGeoCoordinate(coord: any): [number, number] | null {
  if (!Array.isArray(coord) || coord.length < 2) return null

  const lng = Number(coord[0])
  const lat = Number(coord[1])

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null
  return [lat, lng]
}

function getGeometryMiddleLatLng(geometry: any): [number, number] | null {
  if (!geometry) return null

  if (geometry.type === 'Point') {
    return normalizeGeoCoordinate(geometry.coordinates)
  }

  if (geometry.type === 'MultiPoint') {
    const points = Array.isArray(geometry.coordinates) ? geometry.coordinates : []
    return points.length ? normalizeGeoCoordinate(points[Math.floor(points.length / 2)]) : null
  }

  if (geometry.type === 'LineString') {
    const coordinates = Array.isArray(geometry.coordinates) ? geometry.coordinates : []
    return coordinates.length ? normalizeGeoCoordinate(coordinates[Math.floor(coordinates.length / 2)]) : null
  }

  if (geometry.type === 'MultiLineString') {
    const lines = Array.isArray(geometry.coordinates) ? geometry.coordinates : []
    const longestLine = lines.filter((line: any[]) => Array.isArray(line) && line.length).sort((a: any[], b: any[]) => b.length - a.length)[0]

    return longestLine?.length ? normalizeGeoCoordinate(longestLine[Math.floor(longestLine.length / 2)]) : null
  }

  if (geometry.type === 'Polygon') {
    const rings = Array.isArray(geometry.coordinates) ? geometry.coordinates : []
    const outerRing = rings[0]
    return Array.isArray(outerRing) && outerRing.length ? normalizeGeoCoordinate(outerRing[Math.floor(outerRing.length / 2)]) : null
  }

  if (geometry.type === 'MultiPolygon') {
    const polygons = Array.isArray(geometry.coordinates) ? geometry.coordinates : []
    const firstPolygon = polygons[0]
    const outerRing = Array.isArray(firstPolygon) ? firstPolygon[0] : null
    return Array.isArray(outerRing) && outerRing.length ? normalizeGeoCoordinate(outerRing[Math.floor(outerRing.length / 2)]) : null
  }

  if (geometry.type === 'GeometryCollection') {
    const geometries = Array.isArray(geometry.geometries) ? geometry.geometries : []
    for (const item of geometries) {
      const middle = getGeometryMiddleLatLng(item)
      if (middle) return middle
    }
  }

  return null
}

function addPlateBoundaryDomLabels(geojson: any) {
  clearDomLabels(plateBoundaryLabels)

  const features = getGeoJsonFeatures(geojson)

  features.forEach((feature: any) => {
    if (!feature?.geometry) return

    const labelText = feature?.properties?.labelText

    // 只读取 GeoJSON 里明确配置的 labelText，不再手动写死板块名称
    if (!labelText) return

    const middle = getGeometryMiddleLatLng(feature.geometry)

    if (!middle) return

    const label = createDomLabel({
      lat: middle[0],
      lng: middle[1],
      content: labelText,
      className: 'plate-label-dom',
      offsetX: Number(feature?.properties?.offsetX ?? 0),
      offsetY: Number(feature?.properties?.offsetY ?? -10),
    })

    if (label) plateBoundaryLabels.push(label)
  })
}

async function loadPlateBoundaryLayer() {
  if (!map) return

  clearPlateBoundaryLayer()

  const abortController = new AbortController()
  plateBoundaryAbortController = abortController

  try {
    const data = getPlateBoundaryGeojson()

    if (!data) {
      throw new Error('GEOJSON_MAP 中未找到“全球六大板块分界线”')
    }

    if (abortController.signal.aborted || !map || !showPlateBoundaryLayer.value) return

    plateBoundaryLayer = L.geoJSON(data, {
      style: feature => {
        const props = feature?.properties || {}

        return {
          color: props.strokeColor || props.color || '#ef4444',
          weight: Number(props.weight || 2.4),
          opacity: Number(props.opacity ?? 0.92),
          dashArray: props.dashArray || '8 6',
          fillColor: props.fillColor || '#ef4444',
          fillOpacity: Number(props.fillOpacity ?? 0.06),
        }
      },
      pointToLayer: (feature, latlng) => {
        const props = feature?.properties || {}

        return L.circleMarker(latlng, {
          radius: Number(props.radius || 4.8),
          color: props.strokeColor || props.color || '#ef4444',
          weight: 2,
          fillColor: props.fillColor || '#f87171',
          fillOpacity: Number(props.fillOpacity ?? 0.96),
        })
      },
      onEachFeature: (feature, layer) => {
        const props = feature?.properties || {}
        const name = getFeatureDisplayName(props, '全球六大板块分界线')
        const desc = getFeatureDisplayDesc(
          props,
          '板块分界线反映全球岩石圈板块相互作用的位置，东南亚尤其是马来群岛靠近板块交界地带，因此火山、地震、海沟和岛弧现象较明显。',
        )

        bindInfoPopup(layer, name, desc, '全球六大板块分界线')
      },
    }).addTo(map)

    addPlateBoundaryDomLabels(data)

    await nextTick()

    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('全球六大板块分界线请求已取消')
    } else {
      console.error('加载全球六大板块分界线失败：', error)
      showPlateBoundaryLayer.value = false
      showMapInfo('全球六大板块分界线', 'GeoJSON 图层未找到', '')
      clearDomLabels(plateBoundaryLabels)
    }
  } finally {
    if (plateBoundaryAbortController === abortController) {
      plateBoundaryAbortController = null
    }
  }
}

function clearPlateBoundaryLayer() {
  if (plateBoundaryAbortController) {
    plateBoundaryAbortController.abort()
    plateBoundaryAbortController = null
  }

  if (plateBoundaryLayer && map) {
    plateBoundaryLayer.removeFrom(map)
    plateBoundaryLayer = null
  }

  clearDomLabels(plateBoundaryLabels)
}

function toggleRiverLayer() {
  if (showRiverLayer.value) {
    loadRiverLayer()
  } else {
    clearRiverLayer()
  }
}

function togglePlateBoundaryLayer() {
  if (showPlateBoundaryLayer.value) {
    loadPlateBoundaryLayer()
  } else {
    clearPlateBoundaryLayer()
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

    bindInfoPopup(line, item.name, item.desc, '山河相间示意')

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

    bindInfoPopup(circle, item.name, item.desc, '河口三角洲')

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

    bindInfoPopup(marker, item.name, item.desc, '主要城市')

    marker.on('click', () => {
      showMapInfo(item.name, '主要城市', item.desc)
    })

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
  clearPlateBoundaryLayer()

  mountainRiverLayer.clearLayers()
  deltaLayer.clearLayers()
  cityLayer.clearLayers()

  if (map.hasLayer(mountainRiverLayer)) mountainRiverLayer.removeFrom(map)
  if (map.hasLayer(deltaLayer)) deltaLayer.removeFrom(map)
  if (map.hasLayer(cityLayer)) cityLayer.removeFrom(map)

  clearDomLabels(plateBoundaryLabels)
  clearDomLabels(mountainRiverLabels)
  clearDomLabels(deltaLabels)
  clearDomLabels(cityLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaTerrainMap', {
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

.terrain-card-06 {
  background: #f8fafc;
  border-color: #cbd5e1;
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

.terrain-card-06 .terrain-card-header {
  color: #334155;
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

.terrain-card-06 .iconfont {
  color: #334155;
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

.read-map-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.read-map-item {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #e2e8f0;
}

.read-map-title {
  font-weight: bold;
  color: #334155;
  margin-bottom: 4px;
}

.read-map-desc {
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
  overflow: hidden;
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

.terrain-card-07 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.terrain-card-08 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.terrain-card-09 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.terrain-card-10 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.terrain-card-07 .terrain-card-header {
  color: #0f766e;
}

.terrain-card-08 .terrain-card-header {
  color: #334155;
}

.terrain-card-09 .terrain-card-header {
  color: #0369a1;
}

.terrain-card-10 .terrain-card-header {
  color: #c2410c;
}

.terrain-card-07 .iconfont {
  color: #0f766e;
}

.terrain-card-08 .iconfont {
  color: #334155;
}

.terrain-card-09 .iconfont {
  color: #0369a1;
}

.terrain-card-10 .iconfont {
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
  width: 300px;
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

.plate-boundary-line {
  border-top: 3px dashed #ef4444;
}

:deep(.plate-label-dom) {
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(185, 28, 28, 0.92);
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

.terrain-card-11 {
  background: #fef2f2;
  border-color: #fecaca;
}

.terrain-card-11 .terrain-card-header {
  color: #b91c1c;
}

.terrain-card-11 .iconfont {
  color: #b91c1c;
}
</style>
