<template>
  <div class="agriculture-container">
    <div class="agriculture-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="agriculture-content">
      <div class="agriculture-content-left">
        <div class="agriculture-card agriculture-card-01">
          <div class="agriculture-card-header"><i class="iconfont icon-nongye"></i>农业总体特征</div>

          <p class="mb-8">
            东南亚大部分地区位于热带，<strong>全年高温、降水丰富</strong>，为农业发展提供了良好的自然条件。
            这里既是世界重要的<strong>水稻产区</strong>，也是多种<strong>热带经济作物</strong>的重要产地。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">粮食作物</div>
              <div class="feature-value">水稻</div>
              <div class="feature-desc">主要分布在河流沿岸平原和三角洲地区。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">经济作物</div>
              <div class="feature-value">热带作物</div>
              <div class="feature-desc">橡胶、油棕、椰子、蕉麻等作物地位突出。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              东南亚农业可以概括为：
              <strong>湿热气候适合水稻，热带环境孕育经济作物。</strong>
            </div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-02">
          <div class="agriculture-card-header"><i class="iconfont icon-shuidao"></i>水稻种植业</div>

          <div class="crop-item">
            <div class="item-title">自然条件</div>
            <div class="item-desc">
              水稻生长需要高温、充足水分和便利灌溉。东南亚大部分地区水热条件好，河流众多，下游冲积平原和三角洲土壤肥沃，适合发展水田农业。
            </div>
          </div>

          <div class="crop-item">
            <div class="item-title">主要分布</div>
            <div class="item-desc">
              水稻主要分布在湄公河三角洲、湄南河平原、红河三角洲、伊洛瓦底江三角洲等地区，这些地方地势低平、水网密布、人口集中。
            </div>
          </div>

          <div class="crop-item">
            <div class="item-title">人文条件</div>
            <div class="item-desc">东南亚人口较多，劳动力丰富，居民以稻米为主食，水稻种植历史悠久；长期农业经验和市场需求也促进了稻作农业发展。</div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-03">
          <div class="agriculture-card-header"><i class="iconfont icon-zuowu"></i>热带经济作物</div>

          <div class="crop-grid crop-image-grid">
            <button v-for="crop in cropImageList" :key="crop.name" type="button" class="crop-image-card" @click="openCropPreview(crop)">
              <div class="crop-image-wrap">
                <img :src="crop.image" :alt="crop.name" />
                <span class="crop-image-tag">{{ crop.shortName }}</span>
              </div>

              <div class="crop-title">{{ crop.name }}</div>
              <div class="crop-desc">{{ crop.desc }}</div>
              <div class="crop-place">{{ crop.place }}</div>
            </button>
          </div>

          <div class="crop-image-tip">点击作物图片可放大查看，帮助学生建立“作物—景观—产地”的直观联系。</div>
        </div>

        <div class="agriculture-card agriculture-card-06">
          <div class="agriculture-card-header"><i class="iconfont icon-diqiu"></i>农业分布读图方法</div>

          <div class="logic-list">
            <div class="logic-item">
              <span>看气候</span>
              <p>东南亚低纬度、湿热，水热条件好，是水稻和热带经济作物广布的基础。</p>
            </div>

            <div class="logic-item">
              <span>看地形</span>
              <p>水稻多集中在河流平原和三角洲，地势低平、土壤肥沃、灌溉便利。</p>
            </div>

            <div class="logic-item">
              <span>看海陆</span>
              <p>橡胶、油棕、椰子、蕉麻多分布在湿热的半岛南部和岛屿地区。</p>
            </div>

            <div class="logic-item">
              <span>看人文</span>
              <p>人口较多、劳动力丰富、稻米是主食，推动水稻种植历史悠久。</p>
            </div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-04">
          <div class="agriculture-card-header"><i class="iconfont icon-fenbu"></i>农业区位条件分析</div>

          <div class="factor-row">
            <div class="factor-label">气候</div>
            <div class="factor-bar">
              <div class="factor-fill climate-fill"></div>
            </div>
            <div class="factor-text">全年高温，降水丰富，适合水稻和热带作物生长。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">地形</div>
            <div class="factor-bar">
              <div class="factor-fill terrain-fill"></div>
            </div>
            <div class="factor-text">河流平原和三角洲地势平坦，土壤肥沃。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">水源</div>
            <div class="factor-bar">
              <div class="factor-fill water-fill"></div>
            </div>
            <div class="factor-text">河流众多，灌溉条件较好。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">劳力</div>
            <div class="factor-bar">
              <div class="factor-fill labor-fill"></div>
            </div>
            <div class="factor-text">人口较多，劳动力资源丰富，水稻种植经验丰富。</div>
          </div>

          <div class="chart-tip">注：上图为课堂示意，用于理解农业区位条件，不表示严格统计比例。</div>
        </div>

        <div class="agriculture-card agriculture-card-07">
          <div class="agriculture-card-header"><i class="iconfont icon-fenbu"></i>农业分布识图干货</div>

          <div class="knowledge-list">
            <div class="knowledge-item">
              <span>先看水热</span>
              <p>东南亚大部分处于热带，全年高温、降水丰富，水热组合好，是水稻和热带经济作物分布广的重要基础。</p>
            </div>

            <div class="knowledge-item">
              <span>再看地形</span>
              <p>水稻需要平坦地形和充足水源，因此重点看湄公河三角洲、湄南河平原、红河三角洲和伊洛瓦底江三角洲。</p>
            </div>

            <div class="knowledge-item">
              <span>作物看湿热</span>
              <p>天然橡胶、油棕、椰子、蕉麻对热量和水分要求高，多分布在半岛南部、马来群岛和沿海岛屿地区。</p>
            </div>

            <div class="knowledge-item">
              <span>联系人文</span>
              <p>东南亚人口较多、劳动力丰富，稻米是主要食物之一，长期耕作经验也推动水稻种植业发展。</p>
            </div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-08">
          <div class="agriculture-card-header"><i class="iconfont icon-maodunjiufen"></i>水稻与热带经济作物对比</div>

          <div class="compare-table">
            <div class="compare-row compare-head">
              <div>项目</div>
              <div>水稻种植</div>
              <div>热带经济作物</div>
            </div>

            <div class="compare-row">
              <div>主要作物</div>
              <div>水稻，是东南亚重要粮食作物</div>
              <div>天然橡胶、油棕、椰子、蕉麻等</div>
            </div>

            <div class="compare-row">
              <div>自然条件</div>
              <div>高温多雨、水源充足、地势低平</div>
              <div>高温湿润、热带气候、部分作物适合沿海或岛屿环境</div>
            </div>

            <div class="compare-row">
              <div>分布区域</div>
              <div>河流平原、河口三角洲、冲积平原</div>
              <div>马来半岛南部、马来群岛、菲律宾和印尼沿海岛屿</div>
            </div>

            <div class="compare-row">
              <div>区域意义</div>
              <div>保障粮食供应，影响人口和聚落分布</div>
              <div>面向市场和出口，影响区域经济与产业结构</div>
            </div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-09">
          <div class="agriculture-card-header"><i class="iconfont icon-quyuxinxi"></i>农业与区域发展的联系</div>

          <div class="influence-grid">
            <div class="influence-card">
              <div class="influence-title">农业 → 人口</div>
              <div class="influence-desc">水稻产区通常水源充足、地势平坦、农业基础好，容易形成较高人口密度。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">农业 → 城市</div>
              <div class="influence-desc">河流平原和三角洲既适合农业，也利于交通和市场集聚，推动城市发展。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">作物 → 贸易</div>
              <div class="influence-desc">橡胶、油棕、椰子、蕉麻等经济作物商品化程度较高，与出口贸易联系紧密。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">开发 → 生态</div>
              <div class="influence-desc">大规模种植可能带来雨林减少、水土流失和生态压力，需要兼顾农业发展与生态保护。</div>
            </div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-10">
          <div class="agriculture-card-header"><i class="iconfont icon-bangzhuyushuoming"></i>常见易混点</div>

          <div class="mix-list">
            <div class="mix-item">
              <div class="mix-title">水稻不是随便分布在所有热带地区</div>
              <div class="mix-desc">水稻需要高温多雨，但还要有地势低平、水源充足、灌溉便利等条件，所以河流平原和三角洲更集中。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">热带经济作物不等于粮食作物</div>
              <div class="mix-desc">水稻主要用于粮食供应，天然橡胶、油棕、椰子、蕉麻等多属于经济作物，与市场和出口联系更明显。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">油棕和椰子容易混淆</div>
              <div class="mix-desc">油棕是重要油料作物，马来西亚和印度尼西亚分布突出；椰子更常见于热带海岛和沿海地区，菲律宾、印尼等较典型。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">蕉麻不是香蕉</div>
              <div class="mix-desc">蕉麻主要取纤维，菲律宾是世界重要产地之一；它和食用香蕉不同，识记时要抓住“纤维作物”。</div>
            </div>
          </div>
        </div>

        <div class="agriculture-card agriculture-card-05">
          <div class="agriculture-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记主粮：</strong>东南亚重要粮食作物是水稻。</li>
            <li><strong>二记条件：</strong>高温多雨、水源充足、劳动力丰富。</li>
            <li><strong>三记分布：</strong>水稻多分布在河流平原和三角洲。</li>
            <li><strong>四记作物：</strong>橡胶、油棕、椰子、蕉麻等热带经济作物重要。</li>
            <li><strong>五记联系：</strong>气候湿热是农业发展的重要自然基础。</li>
            <li><strong>六记分布：</strong>水稻看三角洲，作物看热带岛屿和半岛南部。</li>
            <li><strong>七记国家：</strong>泰国、越南、缅甸等为重要稻米生产国；印尼、马来西亚、菲律宾热带作物突出。</li>
          </ul>
        </div>
      </div>

      <div class="agriculture-content-right">
        <div id="southeastAsiaAgricultureMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看东南亚农业分布</div>

        <div class="layer-control-panel">
          <div class="panel-title">图层控制</div>

          <label>
            <input type="checkbox" v-model="useGoogle" @change="switchBaseLayer" />
            切换谷歌地图
          </label>

          <label>
            <input type="checkbox" v-model="showRiceAreas" @change="refreshMapLayers" />
            水稻主要产区
          </label>

          <label>
            <input type="checkbox" v-model="showRubberAreas" @change="refreshMapLayers" />
            天然橡胶产区
          </label>

          <label>
            <input type="checkbox" v-model="showPalmAreas" @change="refreshMapLayers" />
            油棕产区
          </label>

          <label>
            <input type="checkbox" v-model="showCoconutAreas" @change="refreshMapLayers" />
            椰子 / 蕉麻产区
          </label>

          <label>
            <input type="checkbox" v-model="showCropPoints" @change="refreshMapLayers" />
            主要农产品标注
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area rice-area"></span>
              <span>水稻主要产区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area rubber-area"></span>
              <span>天然橡胶产区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area palm-area"></span>
              <span>油棕产区</span>
            </div>

            <div class="legend-row">
              <span class="legend-area coconut-area"></span>
              <span>椰子 / 蕉麻产区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot crop-dot"></span>
              <span>农产品标注点</span>
            </div>
          </div>

          <div class="map-note">
            <div class="map-note-title">读图提示</div>
            <div>水稻多沿河流平原和三角洲分布，热带经济作物多分布在湿热的岛屿和半岛地区。</div>
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
          <div class="focus-desc">可点击水稻主要产区、天然橡胶产区、油棕产区、椰子 / 蕉麻产区和主要农产品标注点，左下角会显示对应农业知识点。</div>
        </div>
      </div>
    </div>
    <div v-if="previewCrop" class="crop-preview-mask" @click.self="closeCropPreview">
      <div class="crop-preview-panel">
        <button type="button" class="crop-preview-close" @click="closeCropPreview">×</button>

        <div class="crop-preview-image">
          <img :src="previewCrop.image" :alt="previewCrop.name" />
        </div>

        <div class="crop-preview-info">
          <div class="crop-preview-title">{{ previewCrop.name }}</div>
          <div class="crop-preview-place">{{ previewCrop.place }}</div>
          <div class="crop-preview-desc">{{ previewCrop.detail }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { GEOJSON_MAP, TILE_MAP, IMAGE_MAP } from '@/resource'

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

type CropPoint = {
  name: string
  icon: string
  lat: number
  lng: number
  desc: string
  offsetX?: number
  offsetY?: number
}

type CropImageItem = {
  name: string
  shortName: string
  image: string
  desc: string
  place: string
  detail: string
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

void GEOJSON_MAP

const centerLat = 6
const centerLng = 108
const zoomLevel = 4

const useGoogle = ref(false)
const showRiceAreas = ref(true)
const showRubberAreas = ref(true)
const showPalmAreas = ref(true)
const showCoconutAreas = ref(true)
const showCropPoints = ref(true)
const previewCrop = ref<CropImageItem | null>(null)
const activeMapInfo = ref<MapInfoItem | null>(null)

const cropImageList: CropImageItem[] = [
  {
    name: '天然橡胶',
    shortName: '橡胶',
    image: IMAGE_MAP['东南亚天然橡胶']!,
    desc: '喜高温多雨，泰国、印度尼西亚、马来西亚等国种植较多。',
    place: '典型产地：泰国南部、马来半岛、印尼苏门答腊等',
    detail: '天然橡胶是重要热带经济作物，需要高温、湿润的气候条件。东南亚的热带气候和丰富降水为橡胶树生长提供了良好环境。',
  },
  {
    name: '油棕',
    shortName: '油棕',
    image: IMAGE_MAP['东南亚油棕']!,
    desc: '马来西亚、印度尼西亚分布广，是重要油料作物。',
    place: '典型产地：马来西亚、印度尼西亚',
    detail: '油棕适宜生长在高温多雨的热带地区。东南亚岛屿和马来半岛南部湿热环境明显，适合油棕规模化种植。',
  },
  {
    name: '椰子',
    shortName: '椰子',
    image: IMAGE_MAP['东南亚椰子']!,
    desc: '多见于热带海岛和沿海地区，菲律宾、印尼等国较多。',
    place: '典型产地：菲律宾、印度尼西亚等岛国',
    detail: '椰子适应热带海岸环境，东南亚岛屿众多、海岸线曲折，许多沿海地区适合椰子生长。',
  },
  {
    name: '蕉麻',
    shortName: '蕉麻',
    image: IMAGE_MAP['东南亚蕉麻']!,
    desc: '菲律宾是世界重要蕉麻产地之一，纤维用途广。',
    place: '典型产地：菲律宾',
    detail: '蕉麻喜高温湿润环境，菲律宾等热带岛屿地区具备适宜的气候条件，是东南亚代表性热带经济作物之一。',
  },
]

function openCropPreview(crop: CropImageItem) {
  previewCrop.value = crop
}

function closeCropPreview() {
  previewCrop.value = null
}

const riceLayer = L.layerGroup()
const rubberLayer = L.layerGroup()
const palmLayer = L.layerGroup()
const coconutLayer = L.layerGroup()
const cropPointLayer = L.layerGroup()

const riceLabels: DomLabel[] = []
const rubberLabels: DomLabel[] = []
const palmLabels: DomLabel[] = []
const coconutLabels: DomLabel[] = []
const cropPointLabels: DomLabel[] = []

const riceAreas: AreaItem[] = [
  {
    name: '湄公河三角洲',
    lat: 10.2,
    lng: 105.7,
    radius: 180000,
    desc: '越南南部重要水稻产区，地势低平，水网密布，土壤肥沃，是东南亚典型河口三角洲稻作农业区。',
    color: '#65a30d',
    fillColor: '#bef264',
    fillOpacity: 0.28,
    className: 'rice-label-dom',
  },
  {
    name: '湄南河平原',
    lat: 14.0,
    lng: 100.4,
    radius: 170000,
    desc: '泰国重要水稻产区，平原广阔，灌溉条件较好，湄南河带来的水源和冲积平原支撑农业发展。',
    color: '#65a30d',
    fillColor: '#bef264',
    fillOpacity: 0.28,
    className: 'rice-label-dom',
  },
  {
    name: '红河三角洲',
    lat: 20.9,
    lng: 106.0,
    radius: 120000,
    desc: '越南北部人口和农业集中区，红河三角洲地势低平，农业历史悠久，水稻种植发达。',
    color: '#65a30d',
    fillColor: '#bef264',
    fillOpacity: 0.28,
    className: 'rice-label-dom',
  },
  {
    name: '伊洛瓦底江三角洲',
    lat: 16.0,
    lng: 95.5,
    radius: 150000,
    desc: '缅甸重要农业区，伊洛瓦底江河口三角洲泥沙沉积明显，地势低平，适合水稻种植。',
    color: '#65a30d',
    fillColor: '#bef264',
    fillOpacity: 0.28,
    className: 'rice-label-dom',
  },
]

const rubberAreas: AreaItem[] = [
  {
    name: '泰国橡胶区',
    lat: 8.0,
    lng: 99.5,
    radius: 220000,
    desc: '泰国南部纬度低、气候湿热，天然橡胶种植较多，是东南亚橡胶产区的重要组成部分。',
    color: '#047857',
    fillColor: '#34d399',
    fillOpacity: 0.22,
    className: 'rubber-label-dom',
  },
  {
    name: '马来西亚橡胶区',
    lat: 4.0,
    lng: 102.0,
    radius: 260000,
    desc: '马来半岛气候高温湿润，适合橡胶等热带作物生长，也体现半岛南部湿热环境对农业类型的影响。',
    color: '#047857',
    fillColor: '#34d399',
    fillOpacity: 0.22,
    className: 'rubber-label-dom',
  },
  {
    name: '印尼橡胶区',
    lat: -1.0,
    lng: 104.0,
    radius: 300000,
    desc: '苏门答腊等岛屿高温多雨，天然橡胶和多种热带经济作物分布广，与热带雨林气候条件联系密切。',
    color: '#047857',
    fillColor: '#34d399',
    fillOpacity: 0.22,
    className: 'rubber-label-dom',
  },
]

const palmAreas: AreaItem[] = [
  {
    name: '马来西亚油棕区',
    lat: 3.2,
    lng: 102.5,
    radius: 240000,
    desc: '马来西亚是世界重要油棕产区之一，油棕种植与湿热气候、低地丘陵和出口型农业联系密切。',
    color: '#ca8a04',
    fillColor: '#facc15',
    fillOpacity: 0.24,
    className: 'palm-label-dom',
  },
  {
    name: '印尼油棕区',
    lat: 0.2,
    lng: 111.0,
    radius: 420000,
    desc: '印度尼西亚油棕分布广，是重要热带经济作物产地，苏门答腊、加里曼丹等地区较突出。',
    color: '#ca8a04',
    fillColor: '#facc15',
    fillOpacity: 0.24,
    className: 'palm-label-dom',
  },
]

const coconutAreas: AreaItem[] = [
  {
    name: '菲律宾椰子区',
    lat: 12.0,
    lng: 122.5,
    radius: 360000,
    desc: '菲律宾岛屿众多，热带海洋环境明显，椰子和蕉麻等热带作物较多，蕉麻纤维作物特征突出。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    fillOpacity: 0.2,
    className: 'coconut-label-dom',
  },
  {
    name: '印尼椰子区',
    lat: -3.5,
    lng: 119.0,
    radius: 430000,
    desc: '印度尼西亚沿海和岛屿地区高温湿润，海岸线长，适合椰子等热带作物生长。',
    color: '#0f766e',
    fillColor: '#2dd4bf',
    fillOpacity: 0.2,
    className: 'coconut-label-dom',
  },
]

const cropPoints: CropPoint[] = [
  {
    name: '水稻',
    icon: '🌾',
    lat: 10.2,
    lng: 105.7,
    desc: '湄公河三角洲地势低平、水网密布，是越南南部重要水稻产区。',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '水稻',
    icon: '🌾',
    lat: 14.0,
    lng: 100.4,
    desc: '湄南河平原地势平坦、灌溉便利，是泰国重要水稻产区。',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '橡胶',
    icon: '🌳',
    lat: 5.0,
    lng: 101.2,
    desc: '马来半岛气候湿热，天然橡胶分布较广，是典型热带经济作物产区。',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '油棕',
    icon: '🌴',
    lat: 0.6,
    lng: 112.0,
    desc: '印度尼西亚高温多雨，油棕分布广，是重要油料作物产地。',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '椰子',
    icon: '🥥',
    lat: 12.6,
    lng: 122.8,
    desc: '菲律宾岛屿众多、沿海广阔，椰子等热带作物重要。',
    offsetX: 12,
    offsetY: -4,
  },
  {
    name: '蕉麻',
    icon: '🧵',
    lat: 13.3,
    lng: 123.5,
    desc: '菲律宾是世界重要蕉麻产地之一，蕉麻是典型热带纤维作物。',
    offsetX: 12,
    offsetY: -4,
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

  if (showRiceAreas.value) riceLabels.forEach(updateOneLabelPosition)
  if (showRubberAreas.value) rubberLabels.forEach(updateOneLabelPosition)
  if (showPalmAreas.value) palmLabels.forEach(updateOneLabelPosition)
  if (showCoconutAreas.value) coconutLabels.forEach(updateOneLabelPosition)
  if (showCropPoints.value) cropPointLabels.forEach(updateOneLabelPosition)
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

function getAreaInfoType(item: AreaItem) {
  if (item.className.includes('rice')) return '水稻主要产区'
  if (item.className.includes('rubber')) return '天然橡胶产区'
  if (item.className.includes('palm')) return '油棕产区'
  if (item.className.includes('coconut')) return '椰子 / 蕉麻产区'
  return '农业产区'
}

function bindInfoPopup(layer: L.Layer, title: string, desc: string, type = '农业分布') {
  layer.on('click', () => {
    showMapInfo(title, type, desc)
  })
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

function addCropPointLayer() {
  if (!map) return

  cropPointLayer.clearLayers()
  clearDomLabels(cropPointLabels)

  cropPoints.forEach(item => {
    const marker = L.circleMarker([item.lat, item.lng], {
      radius: 5.5,
      color: '#064e3b',
      weight: 2,
      fillColor: '#10b981',
      fillOpacity: 1,
    }).addTo(cropPointLayer)

    bindInfoPopup(marker, `${item.icon} ${item.name}`, item.desc, '主要农产品标注')

    marker.on('click', () => {
      showMapInfo(`${item.icon} ${item.name}`, '主要农产品标注', item.desc)
    })

    const label = createDomLabel({
      lat: item.lat,
      lng: item.lng,
      content: `${item.icon} ${item.name}`,
      className: 'crop-point-label-dom',
      offsetX: item.offsetX ?? 12,
      offsetY: item.offsetY ?? -4,
    })

    if (label) cropPointLabels.push(label)
  })

  cropPointLayer.addTo(map)
}

function refreshMapLayers() {
  if (!map) return

  if (showRiceAreas.value) {
    addAreaLayer(riceLayer, riceLabels, riceAreas)
  } else {
    riceLayer.clearLayers()
    clearDomLabels(riceLabels)
  }

  if (showRubberAreas.value) {
    addAreaLayer(rubberLayer, rubberLabels, rubberAreas)
  } else {
    rubberLayer.clearLayers()
    clearDomLabels(rubberLabels)
  }

  if (showPalmAreas.value) {
    addAreaLayer(palmLayer, palmLabels, palmAreas)
  } else {
    palmLayer.clearLayers()
    clearDomLabels(palmLabels)
  }

  if (showCoconutAreas.value) {
    addAreaLayer(coconutLayer, coconutLabels, coconutAreas)
  } else {
    coconutLayer.clearLayers()
    clearDomLabels(coconutLabels)
  }

  if (showCropPoints.value) {
    addCropPointLayer()
  } else {
    cropPointLayer.clearLayers()
    clearDomLabels(cropPointLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  riceLayer.clearLayers()
  rubberLayer.clearLayers()
  palmLayer.clearLayers()
  coconutLayer.clearLayers()
  cropPointLayer.clearLayers()

  if (map.hasLayer(riceLayer)) riceLayer.removeFrom(map)
  if (map.hasLayer(rubberLayer)) rubberLayer.removeFrom(map)
  if (map.hasLayer(palmLayer)) palmLayer.removeFrom(map)
  if (map.hasLayer(coconutLayer)) coconutLayer.removeFrom(map)
  if (map.hasLayer(cropPointLayer)) cropPointLayer.removeFrom(map)

  clearDomLabels(riceLabels)
  clearDomLabels(rubberLabels)
  clearDomLabels(palmLabels)
  clearDomLabels(coconutLabels)
  clearDomLabels(cropPointLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaAgricultureMap', {
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
.agriculture-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.agriculture-header {
  margin-bottom: 32px;
}

.agriculture-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.agriculture-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.agriculture-content-right {
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

.agriculture-card {
  border-radius: 8px;
  border: 1px solid rgba(16, 185, 129, 0.26);
  padding: 14px;
}

.agriculture-card-01 {
  background: #ecfdf5;
  border-color: rgba(16, 185, 129, 0.35);
}

.agriculture-card-02 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.agriculture-card-03 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.agriculture-card-04 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.agriculture-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.agriculture-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: #047857;
}

.agriculture-card-04 .agriculture-card-header {
  color: #9a3412;
}

.agriculture-card-05 .agriculture-card-header {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color);
}

.agriculture-card-04 .iconfont {
  color: #9a3412;
}

.agriculture-card-05 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.agriculture-card p {
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

.crop-item,
.impact-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 8px;
}

.crop-item:last-child,
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

.crop-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.crop-mini-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #cee3ed;
  box-shadow: 0 1px 3px rgba(15, 39, 72, 0.08);
}

.crop-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.crop-title {
  font-weight: bold;
  color: #047857;
  margin-bottom: 4px;
}

.crop-desc {
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

.climate-fill {
  width: 96%;
  background: var(--primary-color);
}

.terrain-fill {
  width: 88%;
  background: #84cc16;
}

.water-fill {
  width: 86%;
  background: #0ea5e9;
}

.labor-fill {
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

.legend-area {
  width: 14px;
  height: 10px;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
}

.rice-area {
  background: rgba(190, 242, 100, 0.5);
  border: 1px solid #65a30d;
}

.rubber-area {
  background: rgba(52, 211, 153, 0.32);
  border: 1px solid #047857;
}

.palm-area {
  background: rgba(250, 204, 21, 0.38);
  border: 1px solid #ca8a04;
}

.coconut-area {
  background: rgba(45, 212, 191, 0.32);
  border: 1px solid #0f766e;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.crop-dot {
  background: #10b981;
  border: 2px solid #064e3b;
  box-sizing: border-box;
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

:deep(.rice-label-dom),
:deep(.rubber-label-dom),
:deep(.palm-label-dom),
:deep(.coconut-label-dom) {
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

:deep(.rice-label-dom) {
  background: rgba(101, 163, 13, 0.88);
}

:deep(.rubber-label-dom) {
  background: rgba(4, 120, 87, 0.88);
}

:deep(.palm-label-dom) {
  background: rgba(202, 138, 4, 0.88);
}

:deep(.coconut-label-dom) {
  background: rgba(15, 118, 110, 0.88);
}

:deep(.crop-point-label-dom) {
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

.agriculture-card-06 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.agriculture-card-06 .agriculture-card-header {
  color: #334155;
}

.agriculture-card-06 .iconfont {
  color: #334155;
}

.crop-image-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.crop-image-card {
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  text-align: left;
  background: #fff;
  border: 1px solid #cee3ed;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(15, 39, 72, 0.08);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.crop-image-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary-color);
  box-shadow: 0 6px 16px rgba(15, 39, 72, 0.14);
}

.crop-image-wrap {
  position: relative;
  height: 92px;
  overflow: hidden;
  background: #ecfdf5;
}

.crop-image-wrap img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.crop-image-tag {
  position: absolute;
  left: 8px;
  bottom: 8px;
  padding: 2px 7px;
  border-radius: 999px;
  background: rgba(4, 120, 87, 0.88);
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

.crop-image-card .crop-title {
  padding: 8px 9px 0;
}

.crop-image-card .crop-desc {
  padding: 4px 9px 0;
}

.crop-place {
  padding: 5px 9px 9px;
  color: #64748b;
  font-size: 11px;
  line-height: 1.35;
}

.crop-image-tip {
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  background: #fff;
  color: #64748b;
  font-size: 12px;
  line-height: 1.45;
  border-left: 3px solid var(--primary-color);
}

.logic-list {
  display: grid;
  gap: 8px;
}

.logic-item {
  display: grid;
  grid-template-columns: 64px 1fr;
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

.crop-preview-mask {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  background: rgba(0, 0, 0, 0.62);
}

.crop-preview-panel {
  position: relative;
  width: min(900px, 90vw);
  max-height: 88vh;
  overflow: hidden;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.36);
}

.crop-preview-close {
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 2;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.72);
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  line-height: 34px;
}

.crop-preview-image {
  max-height: 62vh;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.crop-preview-image img {
  display: block;
  max-width: 100%;
  max-height: 62vh;
  object-fit: contain;
}

.crop-preview-info {
  padding: 14px 18px 16px;
}

.crop-preview-title {
  font-size: 18px;
  font-weight: bold;
  color: #047857;
  margin-bottom: 4px;
}

.crop-preview-place {
  color: #0369a1;
  font-size: 12px;
  margin-bottom: 6px;
}

.crop-preview-desc {
  color: #475569;
  font-size: 13px;
  line-height: 1.65;
}

.agriculture-card-07 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.agriculture-card-08 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.agriculture-card-09 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.agriculture-card-10 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.agriculture-card-07 .agriculture-card-header {
  color: #0f766e;
}

.agriculture-card-08 .agriculture-card-header {
  color: #334155;
}

.agriculture-card-09 .agriculture-card-header {
  color: #0369a1;
}

.agriculture-card-10 .agriculture-card-header {
  color: #c2410c;
}

.agriculture-card-07 .iconfont {
  color: #0f766e;
}

.agriculture-card-08 .iconfont {
  color: #334155;
}

.agriculture-card-09 .iconfont {
  color: #0369a1;
}

.agriculture-card-10 .iconfont {
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
  width: 310px;
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
</style>
