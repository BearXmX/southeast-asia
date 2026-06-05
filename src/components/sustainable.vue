<template>
  <div class="sustainable-container">
    <div class="sustainable-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="sustainable-content">
      <div class="sustainable-content-left">
        <div class="sustainable-card sustainable-card-01">
          <div class="sustainable-card-header">
            <i class="iconfont icon-qiyuan"></i>
            生态保护与可持续发展总览
          </div>

          <p class="mb-8">
            东南亚自然环境以<strong>热带湿热、海岛众多、雨林广布、火山地震活跃</strong>为重要特征。
            这里旅游、农业、港口、城市和产业发展速度较快，但也面临<strong>雨林减少、海洋生态破坏、灾害风险、城市扩张和资源开发压力</strong>。
            因此，学习东南亚不能只看“资源丰富”，还要理解<strong>如何在开发中保护，在合作中实现可持续发展</strong>。
          </p>

          <div class="feature-grid mb-8">
            <div class="feature-box">
              <div class="feature-title">生态优势</div>
              <div class="feature-value">热带多样性</div>
              <div class="feature-desc">热带雨林、珊瑚礁、红树林、火山地貌和海岛景观共同构成高价值生态资源。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">发展压力</div>
              <div class="feature-value">开发与保护矛盾</div>
              <div class="feature-desc">农业扩张、海岛旅游、城市发展和交通建设会改变生态系统，需要科学管理。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              东南亚可持续发展要抓住：
              <strong>保护雨林与海洋生态、防范自然灾害、发展绿色旅游、推动区域绿色合作。</strong>
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-02">
          <div class="sustainable-card-header">
            <i class="iconfont icon-quanqiuqihou"></i>
            热带雨林保护
          </div>

          <p class="mb-8">
            东南亚位于低纬热带地区，婆罗洲、苏门答腊、新几内亚西部和中南半岛部分山区雨林资源丰富。
            热带雨林具有<strong>涵养水源、保持水土、调节气候、保护生物多样性</strong>等生态功能。
          </p>

          <div class="knowledge-list">
            <div class="knowledge-item">
              <span>生态价值</span>
              <p>雨林物种丰富，是许多珍稀动植物的栖息地，对维持区域生态平衡和全球生物多样性有重要意义。</p>
            </div>

            <div class="knowledge-item">
              <span>主要压力</span>
              <p>木材采伐、油棕种植扩张、矿产开发、道路建设和火灾会导致雨林破碎化。</p>
            </div>

            <div class="knowledge-item">
              <span>保护方向</span>
              <p>建立自然保护区、控制过度开发、发展生态旅游、推广可持续林业和加强跨国合作。</p>
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-03">
          <div class="sustainable-card-header">
            <i class="iconfont icon-shuiziyuan"></i>
            珊瑚礁、红树林与海洋生态
          </div>

          <p class="mb-8">
            东南亚海域广阔，菲律宾、印度尼西亚、马来西亚、泰国南部等地海洋生态资源丰富。
            珊瑚礁和红树林不仅是旅游资源，也是海洋生物栖息地和海岸防护屏障。
          </p>

          <div class="marine-grid">
            <div class="marine-card">
              <div class="marine-title">珊瑚礁</div>
              <div class="marine-desc">支撑潜水旅游和渔业资源，但对海水温度、污染和游客踩踏十分敏感。</div>
            </div>

            <div class="marine-card">
              <div class="marine-title">红树林</div>
              <div class="marine-desc">分布在热带海岸和河口地区，可抵御风浪、保护海岸、提供鱼虾栖息地。</div>
            </div>

            <div class="marine-card">
              <div class="marine-title">海岛生态</div>
              <div class="marine-desc">热门海岛承载力有限，过度开发会带来淡水不足、垃圾污染和海滩退化。</div>
            </div>

            <div class="marine-card">
              <div class="marine-title">保护措施</div>
              <div class="marine-desc">控制游客数量、限制破坏性捕捞、建设海洋保护区、完善污水和垃圾处理。</div>
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-04">
          <div class="sustainable-card-header">
            <i class="iconfont icon-nongye"></i>
            农业开发与生态压力
          </div>

          <p class="mb-8">
            东南亚湿热环境适合水稻、天然橡胶、油棕、椰子、蕉麻等作物生长。
            但大规模经济作物种植也可能带来森林减少、水土流失、生境破碎和单一化种植风险。
          </p>

          <div class="compare-table">
            <div class="compare-row compare-head">
              <div>项目</div>
              <div>发展价值</div>
              <div>生态压力</div>
            </div>

            <div class="compare-row">
              <div>水稻农业</div>
              <div>保障粮食供应，支撑三角洲人口和聚落发展</div>
              <div>过度用水、化肥农药使用和湿地减少可能影响水环境</div>
            </div>

            <div class="compare-row">
              <div>油棕种植</div>
              <div>提供油料产品和出口收益，带动加工产业</div>
              <div>可能导致雨林砍伐、生物多样性下降和碳排放增加</div>
            </div>

            <div class="compare-row">
              <div>橡胶种植</div>
              <div>适合湿热环境，是重要热带经济作物</div>
              <div>单一种植可能改变原有生态系统和土壤水分条件</div>
            </div>

            <div class="compare-row">
              <div>绿色方向</div>
              <div>发展认证农业、节水灌溉和农产品加工</div>
              <div>控制开发边界，保护雨林、湿地和生物栖息地</div>
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-05">
          <div class="sustainable-card-header">
            <i class="iconfont icon-redian"></i>
            自然灾害风险与防灾减灾
          </div>

          <div class="risk-grid">
            <div class="risk-card volcano">
              <div class="risk-icon">🌋</div>
              <div class="risk-title">火山地震</div>
              <div class="risk-desc">马来群岛位于板块交界地带，印度尼西亚、菲律宾等地火山地震较多。</div>
            </div>

            <div class="risk-card typhoon">
              <div class="risk-icon">🌀</div>
              <div class="risk-title">台风风暴潮</div>
              <div class="risk-desc">菲律宾、越南沿海、泰国湾等地可能受台风、风暴潮和强降雨影响。</div>
            </div>

            <div class="risk-card flood">
              <div class="risk-icon">🌊</div>
              <div class="risk-title">洪涝灾害</div>
              <div class="risk-desc">热带季风降水集中，湄公河、湄南河、红河等流域下游易出现洪涝风险。</div>
            </div>

            <div class="risk-card tsunami">
              <div class="risk-icon">⚠️</div>
              <div class="risk-title">海啸风险</div>
              <div class="risk-desc">印度洋和板块边界附近海域存在海啸风险，需要预警系统和避险教育。</div>
            </div>
          </div>

          <div class="note-box risk-note">
            <div class="note-title">防灾减灾思路</div>
            <div>完善监测预警、合理规划城市和旅游设施、保护红树林与湿地、加强公众避险教育。</div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-06">
          <div class="sustainable-card-header">
            <i class="iconfont icon-renwen"></i>
            绿色旅游与文化遗产保护
          </div>

          <div class="protect-grid">
            <div class="protect-card">
              <div class="protect-title">海岛旅游</div>
              <div class="protect-desc">控制游客容量，减少塑料污染和污水排放，保护珊瑚礁、海滩和海洋生物。</div>
            </div>

            <div class="protect-card">
              <div class="protect-title">雨林旅游</div>
              <div class="protect-desc">以生态观察、自然教育和低影响游览为主，避免修路、采伐和商业设施过度扩张。</div>
            </div>

            <div class="protect-card">
              <div class="protect-title">火山旅游</div>
              <div class="protect-desc">强化风险评估和路线管理，设置避险指示，避免游客进入高风险区域。</div>
            </div>

            <div class="protect-card">
              <div class="protect-title">文化遗产</div>
              <div class="protect-desc">吴哥窟、蒲甘、会安等遗产地要保护原真性，尊重宗教习俗和地方社区。</div>
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-07">
          <div class="sustainable-card-header">
            <i class="iconfont icon-CPhezuo"></i>
            区域合作中的可持续发展
          </div>

          <p class="mb-8">
            东南亚许多生态问题和灾害风险具有跨国影响，例如河流流域治理、海洋污染、跨境烟霾、森林火灾、濒危物种保护和绿色基础设施建设。
            因此，中国与东盟合作不仅是贸易和交通合作，也包括<strong>绿色发展和生态治理合作</strong>。
          </p>

          <div class="cooperation-green-grid">
            <div class="green-coop-card">
              <div class="green-coop-title">绿色交通</div>
              <div class="green-coop-desc">铁路、港口和城市交通建设需要兼顾生态廊道、低碳运输和土地节约。</div>
            </div>

            <div class="green-coop-card">
              <div class="green-coop-title">清洁能源</div>
              <div class="green-coop-desc">太阳能、水电、风电、电网互联和节能技术合作有助于降低碳排放。</div>
            </div>

            <div class="green-coop-card">
              <div class="green-coop-title">流域治理</div>
              <div class="green-coop-desc">湄公河等跨境河流需要在水资源利用、防洪、生态保护方面加强协调。</div>
            </div>

            <div class="green-coop-card">
              <div class="green-coop-title">生态旅游</div>
              <div class="green-coop-desc">共同制定保护标准、旅游承载力和生态教育机制，提升旅游质量。</div>
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-08">
          <div class="sustainable-card-header">
            <i class="iconfont icon-wenhuajiaoyu"></i>
            可持续发展识图干货
          </div>

          <div class="knowledge-list">
            <div class="knowledge-item">
              <span>看生态区</span>
              <p>先找婆罗洲、苏门答腊、马来半岛和菲律宾等雨林、海岛和海洋生态资源集中区。</p>
            </div>

            <div class="knowledge-item">
              <span>看压力区</span>
              <p>再找油棕、橡胶、港口城市、海岛旅游和人口密集区，判断开发活动可能带来的生态压力。</p>
            </div>

            <div class="knowledge-item">
              <span>看风险带</span>
              <p>马来群岛和菲律宾靠近板块边界，火山、地震和海啸风险更明显；沿海地区要注意台风和风暴潮。</p>
            </div>

            <div class="knowledge-item">
              <span>看治理点</span>
              <p>绿色合作节点通常与港口、铁路、跨境河流、保护区、旅游地和重要城市相联系。</p>
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-09">
          <div class="sustainable-card-header">
            <i class="iconfont icon-hexin"></i>
            发展选择影响链
          </div>

          <div class="influence-grid">
            <div class="influence-card">
              <div class="influence-title">资源开发 → 经济增长</div>
              <div class="influence-desc">农产品、矿产、港口、旅游和城市建设能够增加就业和收入，推动区域发展。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">开发强度 → 生态压力</div>
              <div class="influence-desc">如果缺少规划，雨林砍伐、海岛污染、珊瑚退化和城市扩张会削弱生态服务功能。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">生态保护 → 长期收益</div>
              <div class="influence-desc">保护雨林、红树林、珊瑚礁和遗产地，可以维持旅游吸引力和生态安全。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">区域合作 → 共同治理</div>
              <div class="influence-desc">跨境河流、海洋污染、灾害预警和绿色基础设施需要多国协同解决。</div>
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-10">
          <div class="sustainable-card-header">
            <i class="iconfont icon-bangzhuyushuoming"></i>
            常见易混点
          </div>

          <div class="mix-list">
            <div class="mix-item">
              <div class="mix-title">资源丰富不等于可以无限开发</div>
              <div class="mix-desc">热带雨林、珊瑚礁和海岛生态系统恢复慢，开发必须考虑承载力和保护红线。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">火山不只有灾害影响</div>
              <div class="mix-desc">火山会带来喷发和地震风险，也可能形成肥沃火山灰土壤、温泉和独特旅游景观。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">生态保护不是停止发展</div>
              <div class="mix-desc">可持续发展强调在保护环境的前提下改善民生、发展经济和提高资源利用效率。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">灾害风险要结合位置判断</div>
              <div class="mix-desc">马来群岛多火山地震，沿海低地更易受风暴潮和洪涝影响，河流下游要关注季风降水。</div>
            </div>
          </div>
        </div>

        <div class="sustainable-card sustainable-card-11">
          <div class="sustainable-card-header">
            <i class="iconfont icon-kaoshi"></i>
            中考记忆点
          </div>

          <ul class="exam-list">
            <li><strong>一记生态：</strong>东南亚有热带雨林、珊瑚礁、红树林、海岛和火山等重要生态资源。</li>
            <li><strong>二记压力：</strong>农业扩张、旅游开发、城市建设、矿产开发和交通建设可能带来生态压力。</li>
            <li><strong>三记灾害：</strong>马来群岛多火山地震，沿海地区有台风、风暴潮、海啸和洪涝风险。</li>
            <li><strong>四记保护：</strong>保护雨林、珊瑚礁、红树林、湿地和文化遗产，控制开发强度。</li>
            <li><strong>五记合作：</strong>跨境河流、海洋污染、灾害预警和绿色基础设施需要区域合作。</li>
            <li><strong>六记发展：</strong>可持续发展不是不发展，而是在生态保护基础上实现长期发展。</li>
            <li><strong>七记口诀：</strong>雨林海岛要保护，火山台风要防灾，绿色合作促发展。</li>
          </ul>
        </div>
      </div>

      <div class="sustainable-content-right">
        <div id="southeastAsiaSustainableMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看东南亚生态保护与可持续发展</div>

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
            <input type="checkbox" v-model="showForestAreas" @change="refreshMapLayers" />
            热带雨林保护重点
          </label>

          <label>
            <input type="checkbox" v-model="showMarineAreas" @change="refreshMapLayers" />
            海洋生态保护重点
          </label>

          <label>
            <input type="checkbox" v-model="showPressureAreas" @change="refreshMapLayers" />
            开发压力区域
          </label>

          <label>
            <input type="checkbox" v-model="showRiskAreas" @change="refreshMapLayers" />
            自然灾害风险带
          </label>

          <label>
            <input type="checkbox" v-model="showGreenNodes" @change="refreshMapLayers" />
            绿色发展节点
          </label>

          <label>
            <input type="checkbox" v-model="showCooperationRoutes" @change="refreshMapLayers" />
            绿色合作联系
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area boundary-area"></span>
              <span>国家轮廓</span>
            </div>

            <div class="legend-row">
              <span class="legend-area forest-area"></span>
              <span>热带雨林保护重点</span>
            </div>

            <div class="legend-row">
              <span class="legend-area marine-area"></span>
              <span>海洋生态保护重点</span>
            </div>

            <div class="legend-row">
              <span class="legend-area pressure-area"></span>
              <span>开发压力区域</span>
            </div>

            <div class="legend-row">
              <span class="legend-line risk-line"></span>
              <span>自然灾害风险带</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot green-dot"></span>
              <span>绿色发展节点</span>
            </div>

            <div class="legend-row">
              <span class="legend-line cooperation-line"></span>
              <span>绿色合作联系</span>
            </div>
          </div>

          <div class="map-note">
            <div class="map-note-title">读图提示</div>
            <div>先看生态资源集中区，再叠加开发压力和灾害风险，最后分析哪些区域需要绿色合作和可持续治理。</div>
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
          <div class="focus-desc">可点击雨林保护区、海洋生态区、开发压力区、灾害风险带、绿色发展节点和绿色合作线路；左下角会显示对应知识点。</div>
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

const centerLat = 5
const centerLng = 110
const zoomLevel = 4

const useGoogle = ref(false)
const showBoundaryLayer = ref(true)
const showForestAreas = ref(true)
const showMarineAreas = ref(true)
const showPressureAreas = ref(true)
const showRiskAreas = ref(true)
const showGreenNodes = ref(true)
const showCooperationRoutes = ref(true)
const activeName = ref('')
const activeMapInfo = ref<MapInfoItem | null>(null)

const forestAreaLayer = L.layerGroup()
const marineAreaLayer = L.layerGroup()
const pressureAreaLayer = L.layerGroup()
const riskAreaLayer = L.layerGroup()
const greenNodeLayer = L.layerGroup()
const cooperationRouteLayer = L.layerGroup()

const boundaryLabels: DomLabel[] = []
const forestLabels: DomLabel[] = []
const marineLabels: DomLabel[] = []
const pressureLabels: DomLabel[] = []
const riskLabels: DomLabel[] = []
const greenNodeLabels: DomLabel[] = []
const cooperationRouteLabels: DomLabel[] = []

const forestAreas: AreaItem[] = [
  {
    name: '婆罗洲热带雨林保护重点',
    lat: 0.5,
    lng: 114.5,
    radius: 620000,
    color: '#047857',
    fillColor: '#22c55e',
    fillOpacity: 0.16,
    desc: '婆罗洲雨林生物多样性高，是红毛猩猩等珍稀物种的重要栖息地，但也面临伐木、油棕扩张和道路开发压力。',
    className: 'forest-label-dom',
  },
  {
    name: '苏门答腊雨林保护重点',
    lat: -1.5,
    lng: 101.0,
    radius: 520000,
    color: '#047857',
    fillColor: '#22c55e',
    fillOpacity: 0.14,
    desc: '苏门答腊雨林与热带经济作物开发关系密切，需要在油棕、橡胶和生态保护之间寻找平衡。',
    className: 'forest-label-dom',
  },
  {
    name: '中南半岛北部山地雨林',
    lat: 19.5,
    lng: 102.5,
    radius: 500000,
    color: '#047857',
    fillColor: '#22c55e',
    fillOpacity: 0.12,
    desc: '中南半岛北部山地森林对水源涵养、保持水土和保护湄公河等河流上游生态具有重要意义。',
    className: 'forest-label-dom',
  },
]

const marineAreas: AreaItem[] = [
  {
    name: '泰国南部海岛生态保护区',
    lat: 8.2,
    lng: 99.0,
    radius: 300000,
    color: '#0284c7',
    fillColor: '#38bdf8',
    fillOpacity: 0.14,
    desc: '普吉岛、苏梅岛等热门海岛旅游区需要控制游客容量，保护海滩、珊瑚礁和海洋水质。',
    className: 'marine-label-dom',
  },
  {
    name: '菲律宾珊瑚与潜水生态区',
    lat: 10.5,
    lng: 122.0,
    radius: 520000,
    color: '#0284c7',
    fillColor: '#38bdf8',
    fillOpacity: 0.13,
    desc: '菲律宾群岛海域珊瑚礁和海岛资源丰富，潜水旅游发达，但也需要防止海洋污染和珊瑚破坏。',
    className: 'marine-label-dom',
  },
  {
    name: '印尼群岛海洋生态区',
    lat: -5.5,
    lng: 118.0,
    radius: 610000,
    color: '#0284c7',
    fillColor: '#38bdf8',
    fillOpacity: 0.13,
    desc: '印度尼西亚海域广阔，珊瑚、海岛和海洋生物多样性丰富，适合发展低影响生态旅游。',
    className: 'marine-label-dom',
  },
  {
    name: '红树林与河口湿地保护区',
    lat: 10.0,
    lng: 106.5,
    radius: 280000,
    color: '#0f766e',
    fillColor: '#2dd4bf',
    fillOpacity: 0.13,
    desc: '湄公河三角洲等河口湿地与红树林有助于保护海岸、减轻风暴潮和维持渔业资源。',
    className: 'marine-label-dom',
  },
]

const pressureAreas: AreaItem[] = [
  {
    name: '油棕与橡胶开发压力区',
    lat: 2.0,
    lng: 102.0,
    radius: 450000,
    color: '#c2410c',
    fillColor: '#fb923c',
    fillOpacity: 0.13,
    desc: '马来半岛和苏门答腊部分地区油棕、橡胶种植较多，农业扩张可能带来森林减少和生态破碎化。',
    className: 'pressure-label-dom',
  },
  {
    name: '爪哇城市与人口压力区',
    lat: -6.8,
    lng: 108.5,
    radius: 480000,
    color: '#c2410c',
    fillColor: '#fb923c',
    fillOpacity: 0.13,
    desc: '爪哇岛人口和城市高度集中，土地利用强度大，需要处理城市扩张、交通拥堵和环境污染问题。',
    className: 'pressure-label-dom',
  },
  {
    name: '湄公河三角洲水环境压力区',
    lat: 10.0,
    lng: 105.6,
    radius: 260000,
    color: '#c2410c',
    fillColor: '#fb923c',
    fillOpacity: 0.13,
    desc: '湄公河三角洲农业和人口密集，面临洪涝、海水入侵、水污染和湿地保护等问题。',
    className: 'pressure-label-dom',
  },
]

const riskLines: LineItem[] = [
  {
    name: '环太平洋火山地震风险带',
    path: [
      [18.5, 121.0],
      [13.0, 123.0],
      [8.0, 126.0],
      [1.0, 128.0],
      [-5.0, 124.0],
      [-8.0, 118.0],
      [-8.5, 110.0],
      [-6.0, 103.0],
    ],
    desc: '菲律宾和印度尼西亚位于板块交界附近，火山、地震和海啸风险较高，需要监测预警和避险规划。',
    color: '#ef4444',
    dashArray: '8 6',
    weight: 3,
    className: 'risk-label-dom',
    arrowSize: 1.2,
  },
  {
    name: '台风与强降水影响方向',
    path: [
      [18.0, 130.0],
      [15.0, 124.0],
      [13.0, 120.0],
      [12.0, 116.0],
      [15.0, 110.0],
      [17.0, 106.0],
    ],
    desc: '菲律宾、南海和越南沿海常受台风、强降水和风暴潮影响，沿海城市与旅游区需要加强防灾减灾。',
    color: '#f97316',
    dashArray: '10 7',
    weight: 3,
    className: 'risk-label-dom',
    arrowSize: 1.2,
  },
]

const greenNodes: PointItem[] = [
  {
    name: '新加坡',
    icon: '🌱',
    lat: 1.3521,
    lng: 103.8198,
    type: '绿色城市与港口节点',
    desc: '新加坡位于马六甲海峡附近，城市治理、港口服务、绿色建筑和水资源管理经验突出。',
    color: '#065f46',
    fillColor: '#34d399',
    className: 'green-node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '曼谷',
    icon: '🌊',
    lat: 13.7563,
    lng: 100.5018,
    type: '洪涝治理与城市适应节点',
    desc: '曼谷位于湄南河下游平原，城市发展需要关注洪涝、地面沉降、排水和海平面上升风险。',
    color: '#065f46',
    fillColor: '#34d399',
    className: 'green-node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '胡志明市',
    icon: '🌊',
    lat: 10.8231,
    lng: 106.6297,
    type: '三角洲城市适应节点',
    desc: '胡志明市靠近湄公河三角洲，需要关注洪涝、海水入侵、湿地保护和城市排水。',
    color: '#065f46',
    fillColor: '#34d399',
    className: 'green-node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '雅加达',
    icon: '🏙️',
    lat: -6.2088,
    lng: 106.8456,
    type: '城市环境治理节点',
    desc: '雅加达人口密集，城市扩张、交通拥堵、地面沉降和沿海风险突出，需要综合治理。',
    color: '#065f46',
    fillColor: '#34d399',
    className: 'green-node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '婆罗洲雨林',
    icon: '🌳',
    lat: 0.8,
    lng: 114.0,
    type: '生物多样性保护节点',
    desc: '婆罗洲雨林是东南亚重要生物多样性保护区域，需要控制开发并推动跨境生态合作。',
    color: '#065f46',
    fillColor: '#34d399',
    className: 'green-node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
]

const cooperationRoutes: LineItem[] = [
  {
    name: '绿色陆路合作联系',
    path: [
      [27.0, 102.7],
      [25.0, 102.7],
      [21.2, 101.7],
      [18.0, 102.6],
      [13.8, 100.5],
    ],
    desc: '从云南经中老铁路联系中南半岛，可在交通建设、生态廊道、低碳运输和沿线旅游保护方面加强合作。',
    color: '#16a34a',
    dashArray: '8 6',
    weight: 3,
    className: 'cooperation-label-dom',
    arrowSize: 1.1,
  },
  {
    name: '绿色海上合作联系',
    path: [
      [22.7, 113.5],
      [18.0, 112.0],
      [12.0, 110.0],
      [6.0, 106.5],
      [1.35, 103.82],
    ],
    desc: '从华南经南海至新加坡方向，可在绿色港口、低碳航运、海洋污染治理和海洋生态保护方面合作。',
    color: '#0284c7',
    dashArray: '8 6',
    weight: 3,
    className: 'cooperation-label-dom',
    arrowSize: 1.1,
  },
  {
    name: '湄公河流域生态合作联系',
    path: [
      [25.0, 102.7],
      [21.0, 101.8],
      [17.9, 102.6],
      [13.5, 105.0],
      [10.0, 105.6],
    ],
    desc: '湄公河流域跨越多个国家，水资源利用、防洪、湿地保护和农业适应需要区域协作。',
    color: '#0f766e',
    dashArray: '8 6',
    weight: 3,
    className: 'cooperation-label-dom',
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
  if (showForestAreas.value) forestLabels.forEach(updateOneLabelPosition)
  if (showMarineAreas.value) marineLabels.forEach(updateOneLabelPosition)
  if (showPressureAreas.value) pressureLabels.forEach(updateOneLabelPosition)
  if (showRiskAreas.value) riskLabels.forEach(updateOneLabelPosition)
  if (showGreenNodes.value) greenNodeLabels.forEach(updateOneLabelPosition)
  if (showCooperationRoutes.value) cooperationRouteLabels.forEach(updateOneLabelPosition)
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
          color: props.strokeColor || '#059669',
          weight: props.weight || 1.4,
          opacity: props.opacity ?? 0.9,
          fillColor: props.fillColor || '#34d399',
          fillOpacity: props.fillOpacity ?? 0.1,
        }
      },
      onEachFeature: (feature, layer) => {
        const props = feature?.properties || {}
        const name = props.name || props.NAME || props.Name || '东南亚国家'
        const desc = props.desc || props.description || '东南亚国家轮廓范围，可与生态保护、开发压力和可持续发展图层进行对照。'

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
  greenNodeLabels.forEach(label => {
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

  if (showForestAreas.value) {
    addAreaLayer(forestAreaLayer, forestLabels, forestAreas, '热带雨林保护重点')
  } else {
    forestAreaLayer.clearLayers()
    clearDomLabels(forestLabels)
  }

  if (showMarineAreas.value) {
    addAreaLayer(marineAreaLayer, marineLabels, marineAreas, '海洋生态保护重点')
  } else {
    marineAreaLayer.clearLayers()
    clearDomLabels(marineLabels)
  }

  if (showPressureAreas.value) {
    addAreaLayer(pressureAreaLayer, pressureLabels, pressureAreas, '开发压力区域')
  } else {
    pressureAreaLayer.clearLayers()
    clearDomLabels(pressureLabels)
  }

  if (showRiskAreas.value) {
    addLineLayer(riskAreaLayer, riskLabels, riskLines, '自然灾害风险带')
  } else {
    riskAreaLayer.clearLayers()
    clearDomLabels(riskLabels)
  }

  if (showGreenNodes.value) {
    addPointLayer(greenNodeLayer, greenNodeLabels, greenNodes)
  } else {
    greenNodeLayer.clearLayers()
    clearDomLabels(greenNodeLabels)
  }

  if (showCooperationRoutes.value) {
    addLineLayer(cooperationRouteLayer, cooperationRouteLabels, cooperationRoutes, '绿色合作联系')
  } else {
    cooperationRouteLayer.clearLayers()
    clearDomLabels(cooperationRouteLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  clearBoundaryLayer()

  forestAreaLayer.clearLayers()
  marineAreaLayer.clearLayers()
  pressureAreaLayer.clearLayers()
  riskAreaLayer.clearLayers()
  greenNodeLayer.clearLayers()
  cooperationRouteLayer.clearLayers()

  if (map.hasLayer(forestAreaLayer)) forestAreaLayer.removeFrom(map)
  if (map.hasLayer(marineAreaLayer)) marineAreaLayer.removeFrom(map)
  if (map.hasLayer(pressureAreaLayer)) pressureAreaLayer.removeFrom(map)
  if (map.hasLayer(riskAreaLayer)) riskAreaLayer.removeFrom(map)
  if (map.hasLayer(greenNodeLayer)) greenNodeLayer.removeFrom(map)
  if (map.hasLayer(cooperationRouteLayer)) cooperationRouteLayer.removeFrom(map)

  clearDomLabels(boundaryLabels)
  clearDomLabels(forestLabels)
  clearDomLabels(marineLabels)
  clearDomLabels(pressureLabels)
  clearDomLabels(riskLabels)
  clearDomLabels(greenNodeLabels)
  clearDomLabels(cooperationRouteLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaSustainableMap', {
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
.sustainable-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.sustainable-header {
  margin-bottom: 32px;
}

.sustainable-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.sustainable-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.sustainable-content-right {
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

.sustainable-card {
  border-radius: 8px;
  border: 1px solid rgba(15, 143, 179, 0.26);
  padding: 14px;
}

.sustainable-card-01 {
  background: #ecfeff;
  border-color: rgba(15, 143, 179, 0.35);
}

.sustainable-card-02 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.sustainable-card-03 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.sustainable-card-04 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.sustainable-card-05 {
  background: #fef2f2;
  border-color: #fecaca;
}

.sustainable-card-06 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.sustainable-card-07 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.sustainable-card-08 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.sustainable-card-09 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.sustainable-card-10 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.sustainable-card-11 {
  background: #fefce8;
  border-color: #fde68a;
}

.sustainable-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-color, #0f8fb3);
}

.sustainable-card-02 .sustainable-card-header,
.sustainable-card-08 .sustainable-card-header {
  color: #0f766e;
}

.sustainable-card-03 .sustainable-card-header,
.sustainable-card-09 .sustainable-card-header {
  color: #0369a1;
}

.sustainable-card-04 .sustainable-card-header,
.sustainable-card-10 .sustainable-card-header {
  color: #c2410c;
}

.sustainable-card-05 .sustainable-card-header {
  color: #b91c1c;
}

.sustainable-card-07 .sustainable-card-header {
  color: #334155;
}

.sustainable-card-11 .sustainable-card-header {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color, #0f8fb3);
}

.sustainable-card-02 .iconfont,
.sustainable-card-08 .iconfont {
  color: #0f766e;
}

.sustainable-card-03 .iconfont,
.sustainable-card-09 .iconfont {
  color: #0369a1;
}

.sustainable-card-04 .iconfont,
.sustainable-card-10 .iconfont {
  color: #c2410c;
}

.sustainable-card-05 .iconfont {
  color: #b91c1c;
}

.sustainable-card-07 .iconfont {
  color: #334155;
}

.sustainable-card-11 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.sustainable-card p {
  margin-top: 0;
  line-height: 1.65;
  color: #1f2937;
}

.feature-grid,
.marine-grid,
.risk-grid,
.protect-grid,
.cooperation-green-grid,
.influence-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.feature-box,
.marine-card,
.risk-card,
.protect-card,
.green-coop-card,
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
.marine-desc,
.risk-desc,
.protect-desc,
.green-coop-desc,
.influence-desc {
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

.marine-title,
.protect-title,
.green-coop-title,
.influence-title {
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 4px;
}

.risk-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.risk-title {
  font-weight: bold;
  margin-bottom: 4px;
}

.risk-card.volcano .risk-title {
  color: #b91c1c;
}

.risk-card.typhoon .risk-title {
  color: #0369a1;
}

.risk-card.flood .risk-title {
  color: #0284c7;
}

.risk-card.tsunami .risk-title {
  color: #c2410c;
}

.risk-note {
  margin-top: 10px;
  border-left-color: #ef4444;
}

.risk-note .note-title {
  color: #b91c1c;
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
  background: rgba(52, 211, 153, 0.25);
  border: 1px solid #059669;
}

.forest-area {
  background: rgba(34, 197, 94, 0.24);
  border: 1px solid #047857;
}

.marine-area {
  background: rgba(56, 189, 248, 0.24);
  border: 1px solid #0284c7;
}

.pressure-area {
  background: rgba(251, 146, 60, 0.24);
  border: 1px solid #c2410c;
}

.legend-line {
  width: 25px;
  height: 0;
  display: inline-block;
  flex-shrink: 0;
}

.risk-line {
  border-top: 3px dashed #ef4444;
}

.cooperation-line {
  border-top: 3px dashed #16a34a;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.green-dot {
  background: #34d399;
  border: 2px solid #065f46;
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
:deep(.forest-label-dom),
:deep(.marine-label-dom),
:deep(.pressure-label-dom),
:deep(.risk-label-dom),
:deep(.green-node-label-dom),
:deep(.cooperation-label-dom) {
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
:deep(.forest-label-dom),
:deep(.marine-label-dom),
:deep(.pressure-label-dom),
:deep(.risk-label-dom),
:deep(.cooperation-label-dom) {
  transform: translate(-50%, -50%);
}

:deep(.green-node-label-dom) {
  transform: translate(0, -50%);
}

:deep(.boundary-label-dom) {
  background: rgba(4, 120, 87, 0.86);
}

:deep(.forest-label-dom) {
  background: rgba(4, 120, 87, 0.9);
}

:deep(.marine-label-dom) {
  background: rgba(3, 105, 161, 0.9);
}

:deep(.pressure-label-dom) {
  background: rgba(194, 65, 12, 0.9);
}

:deep(.risk-label-dom) {
  background: rgba(185, 28, 28, 0.9);
}

:deep(.green-node-label-dom) {
  background: rgba(15, 118, 110, 0.92);
}

:deep(.cooperation-label-dom) {
  background: rgba(22, 163, 74, 0.9);
}

:deep(.green-node-label-dom.active) {
  background: var(--primary-color, #0f8fb3);
  color: #fff;
  font-size: 13px;
}
</style>
