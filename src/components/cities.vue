<template>
  <div class="cities-container">
    <div class="cities-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="cities-content">
      <div class="cities-content-left">
        <div class="cities-card cities-card-01">
          <div class="cities-card-header"><i class="iconfont icon-mti-shiyourenkou"></i>城市与人口总体特征</div>

          <p class="mb-8">
            东南亚人口和城市分布具有明显的<strong>沿河、沿海、沿交通通道</strong>集中特征。
            中南半岛人口多集中在河流下游平原和三角洲，马来群岛人口多集中在沿海平原、港口城市和部分火山岛平原。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">人口稠密</div>
              <div class="feature-value">河谷、三角洲、沿海</div>
              <div class="feature-desc">水源充足、地势低平、交通便利，农业与城市发展条件较好。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">城市集中</div>
              <div class="feature-value">港口、首都、交通节点</div>
              <div class="feature-desc">多数大城市靠近河口、海港、海峡或国际航线。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              东南亚城市与人口分布可以概括为：
              <strong>沿河沿海密集，内陆山地稀疏；港口带动城市，交通塑造格局。</strong>
            </div>
          </div>
        </div>

        <div class="cities-card cities-card-02">
          <div class="cities-card-header"><i class="iconfont icon-fenbu"></i>人口稠密区</div>

          <div class="rule-item">
            <div class="item-title">湄公河三角洲与胡志明市周边</div>
            <div class="item-desc">湄公河三角洲地势低平、水网密布、稻作农业发达，胡志明市及周边地区人口和经济活动集中。</div>
          </div>

          <div class="rule-item">
            <div class="item-title">湄南河平原与曼谷周边</div>
            <div class="item-desc">湄南河下游平原是泰国重要农业和城市集中区，曼谷位于河口附近，是全国政治、经济和交通中心。</div>
          </div>

          <div class="rule-item">
            <div class="item-title">红河三角洲与河内、海防</div>
            <div class="item-desc">红河三角洲人口密集，河内和海防分别体现内陆政治中心与沿海港口城市的联系。</div>
          </div>

          <div class="rule-item">
            <div class="item-title">爪哇岛城市带</div>
            <div class="item-desc">爪哇岛地形相对适宜、火山灰土壤肥沃、城市众多，是印度尼西亚人口最集中的区域。</div>
          </div>

          <div class="rule-item">
            <div class="item-title">马来半岛西海岸与新加坡周边</div>
            <div class="item-desc">吉隆坡、槟城、马六甲、新加坡等城市沿交通走廊和海峡通道分布，港口与制造业功能突出。</div>
          </div>
        </div>

        <div class="cities-card cities-card-03">
          <div class="cities-card-header"><i class="iconfont icon-shiyourenkou"></i>人口相对稀疏区</div>

          <div class="sparse-grid">
            <div class="sparse-card mountain">
              <div class="sparse-title">缅甸北部山地</div>
              <div class="sparse-desc">地形崎岖，交通建设难度较大，人口密度低于河流平原和沿海地区。</div>
            </div>

            <div class="sparse-card plateau">
              <div class="sparse-title">老挝与泰北山区</div>
              <div class="sparse-desc">山地、高原较多，人口多沿河谷和交通线呈点状分布。</div>
            </div>

            <div class="sparse-card rainforest">
              <div class="sparse-title">婆罗洲内陆雨林</div>
              <div class="sparse-desc">热带雨林广布，内陆交通和开发条件有限，人口多集中在沿海城市。</div>
            </div>

            <div class="sparse-card island">
              <div class="sparse-title">印尼东部岛屿</div>
              <div class="sparse-desc">岛屿分散、交通距离大，人口密度通常低于爪哇岛和大城市周边。</div>
            </div>
          </div>
        </div>

        <div class="cities-card cities-card-04">
          <div class="cities-card-header"><i class="iconfont icon-chengshi"></i>主要城市与功能</div>

          <p class="mb-8">
            东南亚大城市多承担<strong>首都、港口、工业、金融、旅游、交通枢纽</strong>等功能。 城市功能越复合，越容易成为区域人口和经济活动的核心。
          </p>

          <div class="city-type-grid">
            <div class="city-type-card">
              <div class="city-type-title">首都型城市</div>
              <div class="city-type-desc">曼谷、河内、金边、万象、马尼拉、雅加达等，具有政治和行政中心功能。</div>
            </div>

            <div class="city-type-card">
              <div class="city-type-title">港口型城市</div>
              <div class="city-type-desc">新加坡、海防、胡志明市、泗水、马尼拉、槟城等，依托海运和贸易发展。</div>
            </div>

            <div class="city-type-card">
              <div class="city-type-title">综合型城市</div>
              <div class="city-type-desc">新加坡、吉隆坡、雅加达、曼谷功能复合，是区域交通和经济中心。</div>
            </div>

            <div class="city-type-card">
              <div class="city-type-title">岛屿城市</div>
              <div class="city-type-desc">雅加达、泗水、马尼拉、宿务、达沃等城市体现岛屿国家沿海集中的特点。</div>
            </div>
          </div>
        </div>

        <div class="cities-card cities-card-05">
          <div class="cities-card-header"><i class="iconfont icon-anchor-full"></i>港口城市与海上交通</div>

          <div class="port-list">
            <div class="port-item">
              <span>新加坡</span>
              <p>位于马六甲海峡附近，是国际航运、金融和贸易中心，区位优势极其突出。</p>
            </div>

            <div class="port-item">
              <span>巴生港</span>
              <p>靠近吉隆坡，是马来西亚重要港口，联系马六甲海峡航道和内陆经济腹地。</p>
            </div>

            <div class="port-item">
              <span>胡志明市港区</span>
              <p>位于湄公河三角洲附近，既联系内河运输，也面向南海航线。</p>
            </div>

            <div class="port-item">
              <span>马尼拉港</span>
              <p>依托马尼拉湾，服务菲律宾首都圈和吕宋岛人口稠密区。</p>
            </div>
          </div>

          <div class="note-box port-note">
            <div class="note-title">港口城市规律</div>
            <div>东南亚港口城市往往同时具备<strong>临海、近航道、腹地广、交通便利</strong>等条件。</div>
          </div>
        </div>

        <div class="cities-card cities-card-06">
          <div class="cities-card-header"><i class="iconfont icon-wuliyinsu"></i>影响人口与城市分布的因素</div>

          <div class="factor-row">
            <div class="factor-label">地形</div>
            <div class="factor-bar">
              <div class="factor-fill terrain-fill"></div>
            </div>
            <div class="factor-text">河流平原、三角洲和沿海平原地势低平，适合农业、交通和城市建设。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">水源</div>
            <div class="factor-bar">
              <div class="factor-fill water-fill"></div>
            </div>
            <div class="factor-text">湄公河、湄南河、红河等河流提供水源、航运和农业基础。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">交通</div>
            <div class="factor-bar">
              <div class="factor-fill traffic-fill"></div>
            </div>
            <div class="factor-text">海峡、港口、河口和海岸线促进贸易往来，带动城市发展。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">产业</div>
            <div class="factor-bar">
              <div class="factor-fill industry-fill"></div>
            </div>
            <div class="factor-text">制造业、服务业、港口物流和旅游业使人口向大城市集聚。</div>
          </div>

          <div class="chart-tip">注：上图为课堂示意，用于理解分布因素，不表示严格统计比例。</div>
        </div>

        <div class="cities-card cities-card-07">
          <div class="cities-card-header"><i class="iconfont icon-fenbu"></i>人口密度与夜间灯光读图</div>

          <div class="read-map-grid">
            <div class="read-map-card">
              <div class="read-map-title">人口密度影像</div>
              <div class="read-map-desc">颜色越暖、亮度越高，通常表示人口密度越大。可重点观察三角洲、爪哇岛、马尼拉湾和马来半岛西海岸。</div>
            </div>

            <div class="read-map-card">
              <div class="read-map-title">夜间灯光影像</div>
              <div class="read-map-desc">灯光越集中，城市和经济活动越密集。新加坡、曼谷、雅加达、马尼拉等城市在夜光影像中更突出。</div>
            </div>

            <div class="read-map-card">
              <div class="read-map-title">对比判断</div>
              <div class="read-map-desc">人口密度高但灯光弱，可能以农业人口为主；人口密度高且灯光强，通常是城市群或经济中心。</div>
            </div>

            <div class="read-map-card">
              <div class="read-map-title">空间联系</div>
              <div class="read-map-desc">沿海港口、河流下游、交通走廊往往形成线状或团块状人口与城市集聚。</div>
            </div>
          </div>
        </div>

        <div class="cities-card cities-card-10">
          <div class="cities-card-header"><i class="iconfont icon-wenhuajiaoyu"></i>人口城市分布识图干货</div>

          <div class="knowledge-list">
            <div class="knowledge-item">
              <span>先看地形</span>
              <p>人口和城市最容易集中在河流平原、河口三角洲和沿海平原，因为这些地区地势低平，适合农业生产和城市建设。</p>
            </div>

            <div class="knowledge-item">
              <span>再看水源</span>
              <p>湄公河、湄南河、红河、伊洛瓦底江等河流为农业、生活和交通提供条件，下游平原常形成城市密集区。</p>
            </div>

            <div class="knowledge-item">
              <span>重点看港口</span>
              <p>新加坡、马尼拉、海防、胡志明市、槟城等城市靠近海湾、海峡或出海口，港口和贸易功能突出。</p>
            </div>

            <div class="knowledge-item">
              <span>结合影像</span>
              <p>人口密度影像看“人口多不多”，夜间灯光影像看“城市和经济活动强不强”，二者叠加更容易判断核心城市群。</p>
            </div>
          </div>
        </div>

        <div class="cities-card cities-card-11">
          <div class="cities-card-header"><i class="iconfont icon-maodunjiufen"></i>人口稠密区与稀疏区对比</div>

          <div class="compare-table">
            <div class="compare-row compare-head">
              <div>项目</div>
              <div>人口稠密区</div>
              <div>人口稀疏区</div>
            </div>

            <div class="compare-row">
              <div>典型地区</div>
              <div>湄公河三角洲、湄南河平原、红河三角洲、爪哇岛、马尼拉湾、马来半岛西海岸</div>
              <div>缅甸北部山地、老挝山区、婆罗洲内陆雨林、苏门答腊内陆高地和印尼东部部分岛屿</div>
            </div>

            <div class="compare-row">
              <div>自然条件</div>
              <div>地势低平、水源充足、土壤肥沃、交通较便利</div>
              <div>山地雨林较多、交通不便、开发难度大、部分岛屿分散</div>
            </div>

            <div class="compare-row">
              <div>人类活动</div>
              <div>农业、工业、港口、贸易、服务业和城市功能集中</div>
              <div>聚落较分散，人口多沿河谷、道路、沿海或资源点分布</div>
            </div>

            <div class="compare-row">
              <div>读图方法</div>
              <div>人口影像颜色更暖，夜间灯光更集中，城市点密集</div>
              <div>人口影像颜色较淡，夜间灯光弱，城市点少且分散</div>
            </div>
          </div>
        </div>

        <div class="cities-card cities-card-12">
          <div class="cities-card-header"><i class="iconfont icon-hexin"></i>城市形成与区位条件</div>

          <div class="influence-grid">
            <div class="influence-card">
              <div class="influence-title">河流 → 三角洲城市</div>
              <div class="influence-desc">河流下游带来水源、冲积平原和航运条件，容易形成曼谷、河内、胡志明市、仰光等城市。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">海峡 → 港口城市</div>
              <div class="influence-desc">马六甲海峡附近航线密集，新加坡、槟城、巴生港等依托港口、转运和服务业发展。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">岛屿 → 沿海集聚</div>
              <div class="influence-desc">马来群岛岛屿众多，内陆山地和雨林较多，人口和城市往往沿海、沿港口和平原集中。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">产业 → 大城市扩张</div>
              <div class="influence-desc">制造业、港口物流、旅游业、金融服务和行政职能增强人口吸引力，推动城市规模扩大。</div>
            </div>
          </div>
        </div>

        <div class="cities-card cities-card-13">
          <div class="cities-card-header"><i class="iconfont icon-bangzhuyushuoming"></i>常见易混点</div>

          <div class="mix-list">
            <div class="mix-item">
              <div class="mix-title">人口稠密不一定等于城市最发达</div>
              <div class="mix-desc">三角洲可能人口密度高但以农业人口为主；夜间灯光更强的地区，通常城市化和经济活动更明显。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">沿河沿海不是唯一条件</div>
              <div class="mix-desc">城市还受政治职能、产业基础、港口条件、交通线路、历史开发和国际贸易影响，不能只看靠不靠水。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">爪哇岛不是因为面积最大才人口最多</div>
              <div class="mix-desc">爪哇岛人口密集与火山灰土壤肥沃、农业基础好、城市和产业集中、历史开发较早等因素有关。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">内陆国家也可以沿河形成城市</div>
              <div class="mix-desc">老挝不临海，但万象位于湄公河沿岸，说明内陆地区城市也常依托河流和交通节点分布。</div>
            </div>
          </div>
        </div>

        <div class="cities-card cities-card-09">
          <div class="cities-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记总体：</strong>东南亚人口和城市分布不均，沿河沿海集中明显。</li>
            <li><strong>二记稠密：</strong>湄公河三角洲、湄南河平原、红河三角洲、爪哇岛、马尼拉湾较稠密。</li>
            <li><strong>三记稀疏：</strong>内陆山地、高原、热带雨林内陆和分散岛屿人口较少。</li>
            <li><strong>四记城市：</strong>曼谷、雅加达、新加坡、吉隆坡、河内、胡志明市、马尼拉是重要城市。</li>
            <li><strong>五记港口：</strong>新加坡位置最典型，港口和航运功能突出。</li>
            <li><strong>六记原因：</strong>地形、水源、交通、农业和产业共同影响人口与城市分布。</li>
            <li><strong>七记读图：</strong>人口密度看颜色，夜间灯光看亮度，河流沿海看集聚。</li>
          </ul>
        </div>
      </div>

      <div class="cities-content-right">
        <div id="southeastAsiaCitiesMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看东南亚城市与人口分布</div>

        <div class="layer-control-panel">
          <div class="panel-title">图层控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showPopulationTiles" @change="togglePopulationTiles" />
            人口密度影像
          </label>

          <label>
            <input type="checkbox" v-model="showNightLightTiles" @change="toggleNightLightTiles" />
            夜间灯光影像
          </label>

          <label>
            <input type="checkbox" v-model="showRiverLayer" @change="toggleRiverLayer" />
            主要河流
          </label>

          <label>
            <input type="checkbox" v-model="showDeltaAreas" @change="refreshMapLayers" />
            三角洲 / 平原
          </label>

          <label>
            <input type="checkbox" v-model="showDenseAreas" @change="refreshMapLayers" />
            人口稠密区
          </label>

          <label>
            <input type="checkbox" v-model="showSparseAreas" @change="refreshMapLayers" />
            人口稀疏区
          </label>

          <label>
            <input type="checkbox" v-model="showMajorCities" @change="refreshMapLayers" />
            主要城市
          </label>

          <label>
            <input type="checkbox" v-model="showPortCities" @change="refreshMapLayers" />
            港口城市
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area population-tile-area"></span>
              <span>人口密度影像</span>
            </div>

            <div class="legend-row">
              <span class="legend-area night-light-area"></span>
              <span>夜间灯光影像</span>
            </div>

            <div class="legend-row">
              <span class="legend-line river-line"></span>
              <span>主要河流</span>
            </div>

            <div class="legend-row">
              <span class="legend-area delta-area"></span>
              <span>三角洲 / 平原</span>
            </div>

            <div class="legend-row">
              <span class="legend-area dense-area"></span>
              <span>人口稠密区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area sparse-area"></span>
              <span>人口稀疏区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot city-dot"></span>
              <span>主要城市</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot port-dot"></span>
              <span>港口城市</span>
            </div>
          </div>

          <div v-if="showPopulationTiles" class="population-density-legend">
            <div class="density-title">人口密度图例</div>

            <div class="density-row">
              <span class="density-color density-0"></span>
              <span>0</span>
            </div>

            <div class="density-row">
              <span class="density-color density-1"></span>
              <span>1 - 5</span>
            </div>

            <div class="density-row">
              <span class="density-color density-2"></span>
              <span>6 - 25</span>
            </div>

            <div class="density-row">
              <span class="density-color density-3"></span>
              <span>26 - 50</span>
            </div>

            <div class="density-row">
              <span class="density-color density-4"></span>
              <span>51 - 100</span>
            </div>

            <div class="density-row">
              <span class="density-color density-5"></span>
              <span>101 - 500</span>
            </div>

            <div class="density-row">
              <span class="density-color density-6"></span>
              <span>501 - 2 500</span>
            </div>

            <div class="density-row">
              <span class="density-color density-7"></span>
              <span>2 501 - 5 000</span>
            </div>

            <div class="density-row density-last-row">
              <span class="density-color density-8"></span>
              <span>5 001 - 185 000</span>
            </div>

            <div class="density-unit">单位：人 / 千米²</div>
          </div>

          <div class="map-note">
            <div class="map-note-title">读图提示</div>
            <div>先看人口密度和夜间灯光，再叠加河流、三角洲和城市点，理解东南亚人口“沿河沿海分布明显”的原因。</div>
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
            可点击主要河流、三角洲 / 平原、人口稠密区、人口稀疏区、主要城市、港口城市；打开人口密度或夜间灯光影像时，也会在这里显示读图说明。
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
  color: string
  fillColor: string
  fillOpacity: number
  desc: string
  className: string
}

type CityItem = {
  name: string
  lat: number
  lng: number
  type: string
  desc: string
  level: 'mega' | 'capital' | 'port' | 'regional'
  offsetX?: number
  offsetY?: number
}

type MapInfoItem = {
  name: string
  type: string
  desc: string
}

let map: L.Map | null = null
let baseLayer: L.TileLayer | null = null
let populationTileLayer: L.TileLayer | null = null
let nightLightTileLayer: L.TileLayer | null = null
let riverLayer: L.GeoJSON | null = null
let riverAbortController: AbortController | null = null
let labelPane: HTMLDivElement | null = null
let updateLabelRaf = 0

const centerLat = 6
const centerLng = 108
const zoomLevel = 4

const useGoogle = ref(false)
const showPopulationTiles = ref(false)
const showNightLightTiles = ref(false)
const showRiverLayer = ref(true)
const showDeltaAreas = ref(true)
const showDenseAreas = ref(true)
const showSparseAreas = ref(false)
const showMajorCities = ref(true)
const showPortCities = ref(true)
const activeCity = ref('')
const activeMapInfo = ref<MapInfoItem | null>(null)

const denseAreaLayer = L.layerGroup()
const sparseAreaLayer = L.layerGroup()
const deltaAreaLayer = L.layerGroup()
const cityLayer = L.layerGroup()
const portLayer = L.layerGroup()

const denseLabels: DomLabel[] = []
const sparseLabels: DomLabel[] = []
const deltaLabels: DomLabel[] = []
const cityLabels: DomLabel[] = []
const portLabels: DomLabel[] = []
const riverLabels: DomLabel[] = []

const denseAreas: AreaItem[] = [
  {
    name: '湄公河三角洲人口稠密区',
    lat: 10.4,
    lng: 105.6,
    radius: 230000,
    color: '#047857',
    fillColor: '#34d399',
    fillOpacity: 0.18,
    desc: '水网密布、地势低平、农业发达，胡志明市及周边人口集中，是典型河口三角洲人口与经济集聚区。',
    className: 'dense-label-dom',
  },
  {
    name: '湄南河平原人口稠密区',
    lat: 13.7,
    lng: 100.5,
    radius: 210000,
    color: '#047857',
    fillColor: '#34d399',
    fillOpacity: 0.18,
    desc: '曼谷所在的湄南河下游平原，地势低平、水源充足、交通便利，是泰国人口与城市核心区。',
    className: 'dense-label-dom',
  },
  {
    name: '红河三角洲人口稠密区',
    lat: 21.0,
    lng: 106.0,
    radius: 145000,
    color: '#047857',
    fillColor: '#34d399',
    fillOpacity: 0.18,
    desc: '河内、海防周边人口密集，红河三角洲农业基础好，同时联系内陆政治中心和沿海港口。',
    className: 'dense-label-dom',
  },
  {
    name: '爪哇岛城市密集带',
    lat: -7.0,
    lng: 110.0,
    radius: 470000,
    color: '#0891b2',
    fillColor: '#22d3ee',
    fillOpacity: 0.16,
    desc: '爪哇岛是印度尼西亚人口最集中的地区，火山灰土壤肥沃、城市和产业集中，雅加达、万隆、泗水等城市分布密集。',
    className: 'dense-label-dom',
  },
  {
    name: '马尼拉湾人口稠密区',
    lat: 14.6,
    lng: 121.0,
    radius: 175000,
    color: '#0891b2',
    fillColor: '#22d3ee',
    fillOpacity: 0.16,
    desc: '马尼拉首都圈位于吕宋岛西部，马尼拉湾、沿海平原、行政职能和港口条件共同促进人口集聚。',
    className: 'dense-label-dom',
  },
  {
    name: '马来半岛西海岸城市带',
    lat: 3.5,
    lng: 101.5,
    radius: 300000,
    color: '#0f766e',
    fillColor: '#2dd4bf',
    fillOpacity: 0.16,
    desc: '吉隆坡、槟城、马六甲、新加坡等城市沿马来半岛西海岸交通走廊与马六甲海峡通道分布，港口和制造业联系明显。',
    className: 'dense-label-dom',
  },
]

const sparseAreas: AreaItem[] = [
  {
    name: '缅甸北部山地稀疏区',
    lat: 23.8,
    lng: 97.0,
    radius: 270000,
    color: '#c2410c',
    fillColor: '#fb923c',
    fillOpacity: 0.13,
    desc: '山地和高原较多，地形阻隔强、交通建设难度大，人口密度明显低于河流平原和沿海地区。',
    className: 'sparse-label-dom',
  },
  {
    name: '老挝与泰北山区稀疏区',
    lat: 19.0,
    lng: 101.8,
    radius: 230000,
    color: '#c2410c',
    fillColor: '#fb923c',
    fillOpacity: 0.13,
    desc: '山地、高原较多，平坦空间有限，人口多沿湄公河河谷、道路和盆地呈点状分布。',
    className: 'sparse-label-dom',
  },
  {
    name: '婆罗洲内陆雨林稀疏区',
    lat: 0.6,
    lng: 114.0,
    radius: 380000,
    color: '#7c3aed',
    fillColor: '#c4b5fd',
    fillOpacity: 0.12,
    desc: '热带雨林广布，内陆交通和开发条件有限，人口多集中于沿海、河口和资源开发城市，内陆相对稀疏。',
    className: 'sparse-label-dom',
  },
  {
    name: '苏门答腊内陆高地稀疏区',
    lat: -1.5,
    lng: 101.0,
    radius: 300000,
    color: '#7c3aed',
    fillColor: '#c4b5fd',
    fillOpacity: 0.12,
    desc: '山地和雨林分布较多，交通不便，人口密度低于沿海平原、河谷地带和港口城市。',
    className: 'sparse-label-dom',
  },
]

const deltaAreas: AreaItem[] = [
  {
    name: '红河三角洲',
    lat: 20.9,
    lng: 106.1,
    radius: 100000,
    color: '#65a30d',
    fillColor: '#bef264',
    fillOpacity: 0.24,
    desc: '越南北部重要平原和人口集中区，地势低平、农业基础好，河内、海防与其联系紧密。',
    className: 'delta-label-dom',
  },
  {
    name: '湄公河三角洲',
    lat: 10.2,
    lng: 105.7,
    radius: 145000,
    color: '#65a30d',
    fillColor: '#bef264',
    fillOpacity: 0.24,
    desc: '越南南部重要农业和人口集中区，水网密布、稻作农业发达，胡志明市经济影响突出。',
    className: 'delta-label-dom',
  },
  {
    name: '湄南河平原',
    lat: 14.0,
    lng: 100.4,
    radius: 150000,
    color: '#65a30d',
    fillColor: '#bef264',
    fillOpacity: 0.22,
    desc: '泰国重要平原，灌溉便利、交通条件较好，曼谷位于该区域南部河口附近。',
    className: 'delta-label-dom',
  },
  {
    name: '伊洛瓦底江三角洲',
    lat: 16.0,
    lng: 95.5,
    radius: 145000,
    color: '#65a30d',
    fillColor: '#bef264',
    fillOpacity: 0.22,
    desc: '缅甸重要农业平原与人口集聚区，河口和沿海条件使仰光附近城市发展条件较好。',
    className: 'delta-label-dom',
  },
]

const majorCities: CityItem[] = [
  {
    name: '曼谷',
    lat: 13.7563,
    lng: 100.5018,
    type: '首都 / 河口平原城市',
    desc: '泰国首都，位于湄南河下游平原，依托河流、平原、港口和交通网络发展为中南半岛重要城市和交通中心。',
    level: 'mega',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '雅加达',
    lat: -6.2088,
    lng: 106.8456,
    type: '超大城市 / 沿海城市',
    desc: '印度尼西亚首都区域，位于爪哇岛西北部沿海平原，受港口、产业和人口集聚影响，是东南亚重要人口和经济中心。',
    level: 'mega',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '新加坡',
    lat: 1.3521,
    lng: 103.8198,
    type: '城市国家 / 国际港口',
    desc: '位于马六甲海峡附近，依托国际航运、转口贸易、金融服务和港口物流形成高度城市化区域。',
    level: 'mega',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '吉隆坡',
    lat: 3.139,
    lng: 101.6869,
    type: '首都 / 综合型城市',
    desc: '马来西亚首都，位于马来半岛西部交通走廊，联系巴生港、制造业城市带和马六甲海峡航运。',
    level: 'capital',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '河内',
    lat: 21.0278,
    lng: 105.8342,
    type: '首都 / 红河三角洲城市',
    desc: '越南首都，位于红河三角洲附近，依托平原农业、水源和交通条件发展为越南北部政治文化中心。',
    level: 'capital',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '胡志明市',
    lat: 10.8231,
    lng: 106.6297,
    type: '经济中心 / 三角洲城市',
    desc: '越南南部最大城市，靠近湄公河三角洲，联系河流平原、港口和南部产业腹地，是重要经济和交通中心。',
    level: 'mega',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '马尼拉',
    lat: 14.5995,
    lng: 120.9842,
    type: '首都 / 海湾城市',
    desc: '菲律宾首都，位于马尼拉湾附近，港湾、行政职能、服务业和交通条件促使城市和人口高度集中。',
    level: 'mega',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '仰光',
    lat: 16.8409,
    lng: 96.1735,
    type: '港口城市 / 三角洲附近',
    desc: '缅甸重要城市，靠近伊洛瓦底江三角洲，兼具港口、河流腹地和经济中心功能。',
    level: 'regional',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '金边',
    lat: 11.5564,
    lng: 104.9282,
    type: '首都 / 河流交汇城市',
    desc: '柬埔寨首都，位于湄公河与洞里萨河附近，水源、河流交通和行政职能共同塑造城市地位。',
    level: 'capital',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '万象',
    lat: 17.9757,
    lng: 102.6331,
    type: '首都 / 河谷城市',
    desc: '老挝首都，位于湄公河沿岸，体现内陆国家城市依托河流、道路和边境联系发展的特点。',
    level: 'capital',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '泗水',
    lat: -7.2575,
    lng: 112.7521,
    type: '港口城市 / 爪哇城市带',
    desc: '印度尼西亚爪哇岛东部重要港口和工业城市，服务爪哇岛东部产业带和海上交通。',
    level: 'port',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '万隆',
    lat: -6.9175,
    lng: 107.6191,
    type: '内陆城市 / 爪哇城市带',
    desc: '位于爪哇岛西部高原盆地，体现岛屿内部城市可依托盆地、交通和产业发展。',
    level: 'regional',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '海防',
    lat: 20.8449,
    lng: 106.6881,
    type: '港口城市 / 红河三角洲',
    desc: '越南北部重要港口，服务红河三角洲和河内都市区，体现河流三角洲与沿海港口联动。',
    level: 'port',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '宿务',
    lat: 10.3157,
    lng: 123.8854,
    type: '岛屿港口城市',
    desc: '菲律宾中部重要城市和港口，联系群岛内部交通、海岛旅游和区域贸易。',
    level: 'port',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '达沃',
    lat: 7.1907,
    lng: 125.4553,
    type: '区域中心 / 岛屿城市',
    desc: '菲律宾南部棉兰老岛重要城市，体现岛屿国家区域中心多沿海或交通节点分布的特点。',
    level: 'regional',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '槟城',
    lat: 5.4141,
    lng: 100.3288,
    type: '港口城市 / 马六甲海峡沿岸',
    desc: '马来西亚西海岸重要港口城市，临近马六甲海峡航运通道，兼具港口、制造业和旅游文化功能。',
    level: 'port',
    offsetX: 10,
    offsetY: -2,
  },
]

const portCities: CityItem[] = [
  {
    name: '新加坡港',
    lat: 1.27,
    lng: 103.85,
    type: '国际枢纽港',
    desc: '位于马六甲海峡东南端附近，是世界重要航运和转口贸易中心。',
    level: 'port',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴生港',
    lat: 3.0,
    lng: 101.4,
    type: '马来西亚重要港口',
    desc: '靠近吉隆坡，服务马来西亚西海岸城市带和马六甲海峡航线。',
    level: 'port',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '槟城港',
    lat: 5.37,
    lng: 100.36,
    type: '海峡沿岸港口',
    desc: '位于马来半岛西北部，联系马六甲海峡航运和区域制造业。',
    level: 'port',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '海防港',
    lat: 20.86,
    lng: 106.68,
    type: '越南北部港口',
    desc: '服务红河三角洲和河内地区，是越南北部重要出海口。',
    level: 'port',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '胡志明市港',
    lat: 10.76,
    lng: 106.72,
    type: '越南南部港口',
    desc: '服务湄公河三角洲和越南南部经济中心。',
    level: 'port',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '雅加达港',
    lat: -6.12,
    lng: 106.85,
    type: '印尼重要港口',
    desc: '位于爪哇岛西北部，服务雅加达都市区和爪哇岛经济带。',
    level: 'port',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '泗水港',
    lat: -7.2,
    lng: 112.73,
    type: '爪哇岛东部港口',
    desc: '位于爪哇岛东部，是印尼重要港口和工业城市节点。',
    level: 'port',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '马尼拉港',
    lat: 14.58,
    lng: 120.96,
    type: '菲律宾首都港口',
    desc: '位于马尼拉湾，服务首都圈和吕宋岛人口稠密区。',
    level: 'port',
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

function togglePopulationTiles() {
  if (!map) return

  if (showPopulationTiles.value) {
    if (populationTileLayer) {
      populationTileLayer.removeFrom(map)
      populationTileLayer = null
    }

    populationTileLayer = L.tileLayer(TILE_MAP.population!, {
      attribution: '',
      minZoom: 0,
      maxZoom: 5,
      maxNativeZoom: 5,
      opacity: 0.72,
      zIndex: 10,
    }).addTo(map)

    showMapInfo(
      '人口密度影像',
      '栅格影像',
      '颜色越暖、亮度越高，通常表示人口密度越大。可重点观察三角洲、爪哇岛、马尼拉湾和马来半岛西海岸等人口集中区域。',
    )
  } else if (populationTileLayer) {
    populationTileLayer.removeFrom(map)
    populationTileLayer = null
  }

  scheduleUpdateLabels()
}

function toggleNightLightTiles() {
  if (!map) return

  if (showNightLightTiles.value) {
    if (nightLightTileLayer) {
      nightLightTileLayer.removeFrom(map)
      nightLightTileLayer = null
    }

    nightLightTileLayer = L.tileLayer(TILE_MAP.night!, {
      attribution: '',
      minZoom: 0,
      maxZoom: 5,
      maxNativeZoom: 5,
      opacity: 0.72,
      zIndex: 11,
    }).addTo(map)

    showMapInfo(
      '夜间灯光影像',
      '栅格影像',
      '灯光越集中，通常说明城市化和经济活动越强。新加坡、曼谷、雅加达、马尼拉、吉隆坡等城市在夜光影像中更突出。',
    )
  } else if (nightLightTileLayer) {
    nightLightTileLayer.removeFrom(map)
    nightLightTileLayer = null
  }

  scheduleUpdateLabels()
}

function clearImageLayers() {
  if (!map) return

  if (populationTileLayer) {
    populationTileLayer.removeFrom(map)
    populationTileLayer = null
  }

  if (nightLightTileLayer) {
    nightLightTileLayer.removeFrom(map)
    nightLightTileLayer = null
  }
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

  if (showRiverLayer.value) riverLabels.forEach(updateOneLabelPosition)
  if (showDeltaAreas.value) deltaLabels.forEach(updateOneLabelPosition)
  if (showDenseAreas.value) denseLabels.forEach(updateOneLabelPosition)
  if (showSparseAreas.value) sparseLabels.forEach(updateOneLabelPosition)
  if (showMajorCities.value) cityLabels.forEach(updateOneLabelPosition)
  if (showPortCities.value) portLabels.forEach(updateOneLabelPosition)
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

function getAreaInfoType(item: AreaItem) {
  if (item.className.includes('delta')) return '三角洲 / 平原'
  if (item.className.includes('dense')) return '人口稠密区'
  if (item.className.includes('sparse')) return '人口稀疏区'
  return '人口城市分布'
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
    const data = await new Promise<GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>>(resolve => {
      setTimeout(() => {
        resolve(GEOJSON_MAP['东南亚河流分布']!)
      }, 300)
    })

    if (abortController.signal.aborted || !map || !showRiverLayer.value) return

    riverLayer = L.geoJSON(data, {
      filter: feature => {
        const type = feature?.geometry?.type
        return type !== 'Point' && type !== 'MultiPoint'
      },
      style: feature => {
        const props = feature?.properties || {}

        return {
          color: props.strokeColor || '#0ea5e9',
          weight: props.weight || 2.2,
          opacity: props.opacity ?? 0.88,
          dashArray: props.dashArray || '',
        }
      },
      onEachFeature: (feature, layer) => {
        const props = feature?.properties || {}
        const name = props.name || props.labelText || '主要河流'
        const desc = props.desc || '东南亚主要河流沿岸和三角洲常形成人口与城市集聚区。'

        bindInfoPopup(layer, name, desc, '主要河流')
      },
    }).addTo(map)

    addGeoJsonDomLabels(data, riverLabels, 'river-label-dom')

    await nextTick()
    map.invalidateSize(false)
    scheduleUpdateLabels()
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      console.log('东南亚河流分布请求已取消')
    } else {
      console.error('加载东南亚河流分布失败：', error)
      showRiverLayer.value = false
      clearDomLabels(riverLabels)
    }
  } finally {
    if (riverAbortController === abortController) riverAbortController = null
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

    bindInfoPopup(circle, item.name, item.desc, getAreaInfoType(item))

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

function getCityStyle(item: CityItem) {
  if (item.level === 'mega') {
    return {
      radius: 6.6,
      color: '#7c2d12',
      fillColor: '#f97316',
      fillOpacity: 1,
    }
  }

  if (item.level === 'capital') {
    return {
      radius: 5.8,
      color: '#854d0e',
      fillColor: '#facc15',
      fillOpacity: 1,
    }
  }

  if (item.level === 'port') {
    return {
      radius: 5.8,
      color: '#075985',
      fillColor: '#38bdf8',
      fillOpacity: 1,
    }
  }

  return {
    radius: 5.2,
    color: '#064e3b',
    fillColor: '#34d399',
    fillOpacity: 1,
  }
}

function addCityLayer() {
  if (!map) return

  cityLayer.clearLayers()
  clearDomLabels(cityLabels)

  majorCities.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      ...getCityStyle(item),
      weight: 2,
    }).addTo(cityLayer)

    bindInfoPopup(marker, item.name, item.desc, item.type)

    marker.on('click', () => {
      activeCity.value = item.name
      showMapInfo(item.name, item.type, item.desc)
      updateCityLabelActiveState()
    })

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: item.name,
      className: 'city-label-dom',
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
      datasetName: item.name,
    })

    if (label) cityLabels.push(label)
  })

  cityLayer.addTo(map)
  updateCityLabelActiveState()
}

function addPortLayer() {
  if (!map) return

  portLayer.clearLayers()
  clearDomLabels(portLabels)

  portCities.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 5.8,
      color: '#0f172a',
      weight: 2,
      fillColor: '#0ea5e9',
      fillOpacity: 1,
    }).addTo(portLayer)

    bindInfoPopup(marker, item.name, item.desc, item.type)

    marker.on('click', () => {
      activeCity.value = item.name
      showMapInfo(item.name, item.type, item.desc)
      updateCityLabelActiveState()
    })

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: `⚓ ${item.name}`,
      className: 'port-label-dom',
      offsetX: item.offsetX ?? 10,
      offsetY: item.offsetY ?? -2,
      datasetName: item.name,
    })

    if (label) portLabels.push(label)
  })

  portLayer.addTo(map)
  updateCityLabelActiveState()
}

function updateCityLabelActiveState() {
  ;[...cityLabels, ...portLabels].forEach(label => {
    const name = label.el.dataset.name

    if (name && name === activeCity.value) {
      label.el.classList.add('active')
    } else {
      label.el.classList.remove('active')
    }
  })
}

function refreshMapLayers() {
  if (!map) return

  if (showDeltaAreas.value) {
    addAreaLayer(deltaAreaLayer, deltaLabels, deltaAreas)
  } else {
    deltaAreaLayer.clearLayers()
    clearDomLabels(deltaLabels)
  }

  if (showSparseAreas.value) {
    addAreaLayer(sparseAreaLayer, sparseLabels, sparseAreas)
  } else {
    sparseAreaLayer.clearLayers()
    clearDomLabels(sparseLabels)
  }

  if (showDenseAreas.value) {
    addAreaLayer(denseAreaLayer, denseLabels, denseAreas)
  } else {
    denseAreaLayer.clearLayers()
    clearDomLabels(denseLabels)
  }

  if (showMajorCities.value) {
    addCityLayer()
  } else {
    cityLayer.clearLayers()
    clearDomLabels(cityLabels)
  }

  if (showPortCities.value) {
    addPortLayer()
  } else {
    portLayer.clearLayers()
    clearDomLabels(portLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  clearImageLayers()
  clearRiverLayer()

  denseAreaLayer.clearLayers()
  sparseAreaLayer.clearLayers()
  deltaAreaLayer.clearLayers()
  cityLayer.clearLayers()
  portLayer.clearLayers()

  if (map.hasLayer(denseAreaLayer)) denseAreaLayer.removeFrom(map)
  if (map.hasLayer(sparseAreaLayer)) sparseAreaLayer.removeFrom(map)
  if (map.hasLayer(deltaAreaLayer)) deltaAreaLayer.removeFrom(map)
  if (map.hasLayer(cityLayer)) cityLayer.removeFrom(map)
  if (map.hasLayer(portLayer)) portLayer.removeFrom(map)

  clearDomLabels(denseLabels)
  clearDomLabels(sparseLabels)
  clearDomLabels(deltaLabels)
  clearDomLabels(cityLabels)
  clearDomLabels(portLabels)
  clearDomLabels(riverLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaCitiesMap', {
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

  if (showPopulationTiles.value) togglePopulationTiles()
  if (showNightLightTiles.value) toggleNightLightTiles()
  if (showRiverLayer.value) loadRiverLayer()

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
.cities-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.cities-header {
  margin-bottom: 32px;
}

.cities-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.cities-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.cities-content-right {
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

.cities-card {
  border-radius: 8px;
  border: 1px solid rgba(15, 143, 179, 0.26);
  padding: 14px;
}

.cities-card-01 {
  background: #ecfeff;
  border-color: rgba(15, 143, 179, 0.35);
}

.cities-card-02 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.cities-card-03 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.cities-card-04 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.cities-card-05 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.cities-card-06 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.cities-card-07 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.cities-card-08 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.cities-card-09 {
  background: #fefce8;
  border-color: #fde68a;
}

.cities-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-color, #0f8fb3);
}

.cities-card-03 .cities-card-header {
  color: #c2410c;
}

.cities-card-05 .cities-card-header {
  color: #0369a1;
}

.cities-card-06 .cities-card-header {
  color: #9a3412;
}

.cities-card-07 .cities-card-header {
  color: #0f766e;
}

.cities-card-08 .cities-card-header {
  color: #334155;
}

.cities-card-09 .cities-card-header {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color, #0f8fb3);
}

.cities-card-03 .iconfont {
  color: #c2410c;
}

.cities-card-05 .iconfont {
  color: #0369a1;
}

.cities-card-06 .iconfont {
  color: #9a3412;
}

.cities-card-07 .iconfont {
  color: #0f766e;
}

.cities-card-08 .iconfont {
  color: #334155;
}

.cities-card-09 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.cities-card p {
  margin-top: 0;
  line-height: 1.65;
  color: #1f2937;
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
.item-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
}

.note-box {
  padding: 8px 10px;
  border-radius: 6px;
  background: #fff;
  border-left: 3px solid var(--primary-color, #0f8fb3);
  font-size: 13px;
  color: #374151;
}

.note-title {
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 4px;
}

.rule-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color, #0f8fb3);
  margin-bottom: 8px;
}

.rule-item:last-child {
  margin-bottom: 0;
}

.item-title {
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 4px;
}

.sparse-grid,
.city-type-grid,
.read-map-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.sparse-card,
.city-type-card,
.read-map-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid rgba(15, 143, 179, 0.18);
}

.sparse-title,
.city-type-title,
.read-map-title {
  font-weight: bold;
  margin-bottom: 4px;
  color: var(--primary-color, #0f8fb3);
}

.sparse-card.mountain .sparse-title {
  color: #c2410c;
}

.sparse-card.plateau .sparse-title {
  color: #f97316;
}

.sparse-card.rainforest .sparse-title {
  color: #047857;
}

.sparse-card.island .sparse-title {
  color: #7c3aed;
}

.sparse-desc,
.city-type-desc,
.read-map-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
}

.port-list {
  display: grid;
  gap: 8px;
}

.port-item {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 8px;
  align-items: start;
  background: #fff;
  border-radius: 8px;
  padding: 9px 10px;
  border: 1px solid rgba(14, 165, 233, 0.22);
}

.port-item span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  border-radius: 999px;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.port-item p {
  margin: 0;
  color: #475569;
  font-size: 13px;
  line-height: 1.45;
}

.port-note {
  margin-top: 10px;
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

.terrain-fill {
  width: 88%;
  background: #84cc16;
}

.water-fill {
  width: 86%;
  background: #0ea5e9;
}

.traffic-fill {
  width: 94%;
  background: var(--primary-color, #0f8fb3);
}

.industry-fill {
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

.map-legend,
.population-density-legend {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(15, 39, 72, 0.12);
}

.legend-title,
.density-title {
  font-weight: bold;
  margin-bottom: 6px;
  color: #0f3554;
}

.legend-row,
.density-row {
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

.population-tile-area {
  background: linear-gradient(to right, rgba(254, 240, 138, 0.9), rgba(249, 115, 22, 0.9), rgba(185, 28, 28, 0.9));
  border: 1px solid rgba(185, 28, 28, 0.75);
}

.night-light-area {
  background: linear-gradient(to right, #111827, #facc15, #ffffff);
  border: 1px solid rgba(15, 23, 42, 0.75);
}

.delta-area {
  background: rgba(190, 242, 100, 0.4);
  border: 1px solid #65a30d;
}

.dense-area {
  background: rgba(34, 197, 94, 0.25);
  border: 1px solid #16a34a;
}

.sparse-area {
  background: rgba(249, 115, 22, 0.22);
  border: 1px solid #f97316;
}

.legend-line {
  width: 24px;
  height: 0;
  display: inline-block;
  flex-shrink: 0;
}

.river-line {
  border-top: 2px solid #0ea5e9;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.city-dot {
  background: #f97316;
  border: 2px solid #7c2d12;
  box-sizing: border-box;
}

.port-dot {
  background: #38bdf8;
  border: 2px solid #075985;
  box-sizing: border-box;
}

.density-row {
  gap: 10px;
  font-size: 12px;
  color: #222;
}

.density-color {
  width: 20px;
  height: 15px;
  display: inline-block;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.density-0 {
  background: #cfd3d8;
}

.density-1 {
  background: #ffffd8;
}

.density-2 {
  background: #ffff88;
}

.density-3 {
  background: #fbff26;
}

.density-4 {
  background: #ffb51b;
}

.density-5 {
  background: #ff6414;
}

.density-6 {
  background: #e4141c;
}

.density-7 {
  background: #b70a15;
}

.density-8 {
  background: #8f0008;
}

.density-unit {
  text-align: right;
  font-size: 11px;
  font-weight: bold;
  color: #333;
  opacity: 0.9;
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
  width: 270px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 8px;
  padding: 10px 12px;
  box-shadow: 0 2px 10px rgba(15, 39, 72, 0.16);
  border-left: 4px solid var(--primary-color, #0f8fb3);
}

.focus-title {
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  font-size: 15px;
  margin-bottom: 4px;
}

.focus-type {
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

:deep(.river-label-dom),
:deep(.delta-label-dom),
:deep(.dense-label-dom),
:deep(.sparse-label-dom),
:deep(.city-label-dom),
:deep(.port-label-dom) {
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

:deep(.river-label-dom),
:deep(.delta-label-dom),
:deep(.dense-label-dom),
:deep(.sparse-label-dom) {
  transform: translate(-50%, -50%);
}

:deep(.city-label-dom),
:deep(.port-label-dom) {
  transform: translate(0, -50%);
}

:deep(.river-label-dom) {
  background: rgba(3, 105, 161, 0.86);
}

:deep(.delta-label-dom) {
  background: rgba(101, 163, 13, 0.9);
}

:deep(.dense-label-dom) {
  background: rgba(4, 120, 87, 0.9);
}

:deep(.sparse-label-dom) {
  background: rgba(194, 65, 12, 0.9);
}

:deep(.city-label-dom) {
  background: rgba(180, 83, 9, 0.9);
}

:deep(.port-label-dom) {
  background: rgba(3, 105, 161, 0.9);
}

:deep(.city-label-dom.active),
:deep(.port-label-dom.active) {
  color: #fff;
  font-size: 13px;
}

.cities-card-10 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.cities-card-11 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.cities-card-12 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.cities-card-13 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.cities-card-10 .cities-card-header {
  color: #0f766e;
}

.cities-card-11 .cities-card-header {
  color: #334155;
}

.cities-card-12 .cities-card-header {
  color: #0369a1;
}

.cities-card-13 .cities-card-header {
  color: #c2410c;
}

.cities-card-10 .iconfont {
  color: #0f766e;
}

.cities-card-11 .iconfont {
  color: #334155;
}

.cities-card-12 .iconfont {
  color: #0369a1;
}

.cities-card-13 .iconfont {
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

.focus-card-empty {
  border-left-color: #94a3b8;
}

.focus-card-empty .focus-title {
  color: #334155;
}

.focus-card-empty .focus-type {
  color: #64748b;
}
</style>
