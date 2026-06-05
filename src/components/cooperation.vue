<template>
  <div class="cooperation-container">
    <div class="cooperation-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="cooperation-content">
      <div class="cooperation-content-left">
        <div class="cooperation-card cooperation-card-01">
          <div class="cooperation-card-header">
            <i class="iconfont icon-quyuxinxi"></i>
            区域联系与发展总览
          </div>

          <p class="mb-8">
            东南亚地处亚洲与大洋洲、太平洋与印度洋之间，是联系东亚、南亚、大洋洲和西亚的重要通道。
            中国与东盟国家山水相连、陆海相邻，经济互补性强，在<strong>贸易、交通、产业、能源、农业、旅游和人文交流</strong>等方面联系密切。
          </p>

          <div class="feature-grid mb-8">
            <div class="feature-box">
              <div class="feature-title">地理联系</div>
              <div class="feature-value">陆海相邻</div>
              <div class="feature-desc">中国西南、华南与中南半岛和南海相连，具备陆路、海路和航空联系条件。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">发展联系</div>
              <div class="feature-value">互利合作</div>
              <div class="feature-desc">中国市场、资金、技术与东盟资源、劳动力、区位和市场形成互补。</div>
            </div>
          </div>
          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              中国与东盟合作可以概括为：
              <strong>地缘相近、交通相连、产业互补、贸易活跃、共同发展。</strong>
            </div>
          </div>
        </div>

        <div class="cooperation-card cooperation-card-02">
          <div class="cooperation-card-header">
            <i class="iconfont icon-renwen"></i>
            什么是东盟
          </div>

          <p class="mb-8">
            东盟是东南亚国家之间的重要区域合作组织，成员国主要分布在中南半岛和马来群岛。
            其合作内容涉及经济贸易、互联互通、社会文化、安全合作和可持续发展等多个领域。
          </p>

          <div class="asean-grid">
            <div class="asean-box mainland">
              <div class="asean-title">中南半岛国家</div>
              <div class="asean-desc">越南、老挝、柬埔寨、泰国、缅甸与中国西南地区联系较近，陆路交通合作潜力突出。</div>
            </div>

            <div class="asean-box island">
              <div class="asean-title">海岛与半岛国家</div>
              <div class="asean-desc">马来西亚、新加坡、印度尼西亚、菲律宾、文莱等沿海和岛屿国家，海运、港口和海洋经济联系明显。</div>
            </div>
          </div>

          <div class="mini-summary">
            <span>记忆关键词</span>
            <strong>中南半岛 + 马来群岛 + 区域合作</strong>
          </div>
        </div>

        <div class="cooperation-card cooperation-card-03">
          <div class="cooperation-card-header">
            <i class="iconfont icon-jingji"></i>
            贸易往来与市场联系
          </div>

          <div class="rule-item">
            <div class="item-title">商品贸易</div>
            <div class="item-desc">中国与东盟之间农产品、机电产品、电子产品、原材料、消费品等贸易活跃，体现市场和产业互补。</div>
          </div>

          <div class="rule-item">
            <div class="item-title">边境贸易</div>
            <div class="item-desc">云南、广西与越南、老挝、缅甸等地相邻，边境口岸促进人员往来、物流运输和地方经济发展。</div>
          </div>

          <div class="rule-item">
            <div class="item-title">自由贸易合作</div>
            <div class="item-desc">中国—东盟自贸区和区域经济合作机制降低贸易成本，促进商品、资本、技术和服务流动。</div>
          </div>

          <div class="trade-card">
            <div class="trade-card-title">读图思路</div>
            <div class="trade-card-desc">看贸易联系时，要把<strong>港口、铁路、口岸、城市群和产业区</strong>放在一起分析。</div>
          </div>
        </div>

        <div class="cooperation-card cooperation-card-04">
          <div class="cooperation-card-header">
            <i class="iconfont icon-gaosu"></i>
            互联互通：铁路、公路、港口与航线
          </div>

          <div class="transport-grid">
            <div class="transport-card rail">
              <div class="transport-icon">🚄</div>
              <div class="transport-title">陆路通道</div>
              <div class="transport-desc">中老铁路、西部陆海新通道和跨境公路提升中国西南与中南半岛联系。</div>
            </div>

            <div class="transport-card port">
              <div class="transport-icon">⚓</div>
              <div class="transport-title">港口通道</div>
              <div class="transport-desc">北部湾港、广州港、深圳港与新加坡、雅加达、马尼拉等港口联系海上贸易。</div>
            </div>

            <div class="transport-card air">
              <div class="transport-icon">✈️</div>
              <div class="transport-title">航空联系</div>
              <div class="transport-desc">昆明、南宁、广州、曼谷、新加坡、吉隆坡等城市之间航线密集。</div>
            </div>

            <div class="transport-card digital">
              <div class="transport-icon">🌐</div>
              <div class="transport-title">数字通道</div>
              <div class="transport-desc">跨境电商、数字支付、智慧物流和信息服务增强区域经济联系。</div>
            </div>
          </div>
        </div>

        <div class="cooperation-card cooperation-card-05">
          <div class="cooperation-card-header">
            <i class="iconfont icon-zhizaoye"></i>
            产业合作与园区建设
          </div>

          <p class="mb-8">中国与东盟产业合作不仅是商品买卖，还包括产业链分工、跨境园区、加工制造、基础设施、能源合作和现代服务业。</p>

          <div class="industry-list">
            <div class="industry-item">
              <span>制造业</span>
              <p>电子信息、机械制造、纺织服装、汽车零部件等产业可在不同国家之间形成分工协作。</p>
            </div>

            <div class="industry-item">
              <span>园区合作</span>
              <p>跨境经济合作区和产业园区有利于集中承接投资、改善基础设施和扩大就业。</p>
            </div>

            <div class="industry-item">
              <span>物流服务</span>
              <p>铁路、港口、保税区和跨境电商共同提升区域物流效率。</p>
            </div>

            <div class="industry-item">
              <span>能源合作</span>
              <p>电力、油气、新能源和电网互联合作有助于保障区域能源供应。</p>
            </div>
          </div>
        </div>

        <div class="cooperation-card cooperation-card-06">
          <div class="cooperation-card-header">
            <i class="iconfont icon-xiaomai"></i>
            农业、资源与消费合作
          </div>

          <div class="resource-grid">
            <div class="resource-card">
              <div class="resource-title">热带农产品</div>
              <div class="resource-desc">东南亚热带水果、天然橡胶、油棕、椰子、咖啡等产品与中国市场联系紧密。</div>
            </div>

            <div class="resource-card">
              <div class="resource-title">能源与矿产</div>
              <div class="resource-desc">部分东盟国家资源较丰富，中国市场和技术可促进资源开发与加工合作。</div>
            </div>

            <div class="resource-card">
              <div class="resource-title">消费市场</div>
              <div class="resource-desc">东盟人口众多、年轻消费群体增长，中国商品、服务和数字平台具有合作空间。</div>
            </div>

            <div class="resource-card">
              <div class="resource-title">旅游消费</div>
              <div class="resource-desc">旅游、留学、文化交流和跨境人员往来促进服务贸易发展。</div>
            </div>
          </div>
        </div>

        <div class="cooperation-card cooperation-card-07">
          <div class="cooperation-card-header">
            <i class="iconfont icon-CPhezuo"></i>
            重点合作区域
          </div>

          <div class="area-grid">
            <div class="area-card">
              <div class="area-title">广西北部湾</div>
              <div class="area-desc">面向东盟的海上门户，连接西部陆海新通道和东南亚海上航线。</div>
            </div>

            <div class="area-card">
              <div class="area-title">云南面向南亚东南亚</div>
              <div class="area-desc">通过中老铁路、边境口岸和跨境公路联系老挝、缅甸、越南和泰国。</div>
            </div>

            <div class="area-card">
              <div class="area-title">粤港澳大湾区</div>
              <div class="area-desc">制造业、港口、金融和科技优势突出，是中国联系东盟的重要开放平台。</div>
            </div>

            <div class="area-card">
              <div class="area-title">中南半岛经济走廊</div>
              <div class="area-desc">越南、老挝、柬埔寨、泰国、缅甸之间陆路交通和产业联系持续加强。</div>
            </div>
          </div>
        </div>

        <div class="cooperation-card cooperation-card-08">
          <div class="cooperation-card-header">
            <i class="iconfont icon-wuliyinsu"></i>
            合作带来的发展影响
          </div>

          <div class="factor-row">
            <div class="factor-label">交通</div>
            <div class="factor-bar">
              <div class="factor-fill traffic-fill"></div>
            </div>
            <div class="factor-text">铁路、港口、口岸和航线提升区域可达性，缩短运输时间，降低物流成本。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">产业</div>
            <div class="factor-bar">
              <div class="factor-fill industry-fill"></div>
            </div>
            <div class="factor-text">跨境产业链和园区建设带来就业、技术扩散和产业升级机会。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">市场</div>
            <div class="factor-bar">
              <div class="factor-fill market-fill"></div>
            </div>
            <div class="factor-text">区域市场扩大，企业可面向更大消费群体配置资源。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">人文</div>
            <div class="factor-bar">
              <div class="factor-fill culture-fill"></div>
            </div>
            <div class="factor-text">旅游、教育和文化交流增进理解，增强区域合作基础。</div>
          </div>

          <div class="chart-tip">注：上图为课堂示意，用于理解区域合作影响，不表示严格统计比例。</div>
        </div>

        <div class="cooperation-card cooperation-card-09">
          <div class="cooperation-card-header">
            <i class="iconfont icon-quanqiuqihou"></i>
            发展中的问题与可持续合作
          </div>

          <div class="challenge-grid">
            <div class="challenge-card">
              <div class="challenge-title">发展差异</div>
              <div class="challenge-desc">国家间经济发展水平、基础设施和产业结构差异明显，需要协调合作节奏。</div>
            </div>

            <div class="challenge-card">
              <div class="challenge-title">生态压力</div>
              <div class="challenge-desc">交通和产业建设可能影响森林、河流和海洋生态，需要绿色规划。</div>
            </div>

            <div class="challenge-card">
              <div class="challenge-title">灾害风险</div>
              <div class="challenge-desc">台风、洪涝、地震、火山、海啸等自然灾害影响交通和产业安全。</div>
            </div>

            <div class="challenge-card">
              <div class="challenge-title">文化差异</div>
              <div class="challenge-desc">民族、宗教、语言和制度差异需要通过沟通、尊重和规则建设来化解。</div>
            </div>
          </div>

          <div class="note-box green-note">
            <div class="note-title">可持续合作方向</div>
            <div>推动绿色基础设施、清洁能源、生态保护、数字互联和民生项目，是区域合作的重要方向。</div>
          </div>
        </div>

        <div class="cooperation-card cooperation-card-12">
          <div class="cooperation-card-header">
            <i class="iconfont icon-wenhuajiaoyu"></i>
            区域合作识图干货
          </div>

          <div class="knowledge-list">
            <div class="knowledge-item">
              <span>先看邻近</span>
              <p>中国与东盟合作首先建立在“陆海相邻”的地理基础上。西南方向看云南与中南半岛，华南方向看广西、广东与南海、北部湾和东南亚海上航线。</p>
            </div>

            <div class="knowledge-item">
              <span>再看通道</span>
              <p>陆路重点看中老铁路、中越口岸和中南半岛南向通道；海路重点看北部湾、南海、马六甲海峡以及新加坡等港口节点。</p>
            </div>

            <div class="knowledge-item">
              <span>重点看节点</span>
              <p>昆明、南宁、广州、新加坡、曼谷、吉隆坡、雅加达等城市承担交通组织、贸易集散、产业联系和服务合作功能。</p>
            </div>

            <div class="knowledge-item">
              <span>联系产业</span>
              <p>交通通道不是单独存在的，它通常会带动物流、加工制造、跨境电商、旅游、人文交流和区域市场一体化发展。</p>
            </div>
          </div>
        </div>

        <div class="cooperation-card cooperation-card-13">
          <div class="cooperation-card-header">
            <i class="iconfont icon-maodunjiufen"></i>
            陆路合作与海上合作对比
          </div>

          <div class="compare-table">
            <div class="compare-row compare-head">
              <div>项目</div>
              <div>陆路合作</div>
              <div>海上合作</div>
            </div>

            <div class="compare-row">
              <div>主要方向</div>
              <div>中国西南、广西方向联系中南半岛内陆和边境地区</div>
              <div>中国华南、北部湾、南海方向联系东南亚港口和岛屿国家</div>
            </div>

            <div class="compare-row">
              <div>典型节点</div>
              <div>昆明、南宁、磨憨口岸、凭祥口岸、万象、河内、曼谷</div>
              <div>北部湾港、新加坡港、巴生港、雅加达港、马尼拉港</div>
            </div>

            <div class="compare-row">
              <div>合作重点</div>
              <div>铁路、公路、口岸物流、边境贸易、跨境产业园区</div>
              <div>海运、港口、航线、转口贸易、能源运输和海洋经济</div>
            </div>

            <div class="compare-row">
              <div>区域意义</div>
              <div>增强内陆地区开放性，带动边境地区和中南半岛经济走廊发展</div>
              <div>连接国际市场，强化中国—东盟与印度洋、太平洋航运联系</div>
            </div>
          </div>
        </div>

        <div class="cooperation-card cooperation-card-14">
          <div class="cooperation-card-header">
            <i class="iconfont icon-CPhezuo"></i>
            合作链条：交通如何带动发展
          </div>

          <div class="influence-grid">
            <div class="influence-card">
              <div class="influence-title">交通通道 → 物流效率</div>
              <div class="influence-desc">铁路、港口、口岸和航线缩短运输时间，降低跨境物流成本，使商品流动更加便捷。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">物流效率 → 贸易增长</div>
              <div class="influence-desc">农产品、机电产品、电子产品、能源和消费品流通更顺畅，区域市场联系增强。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">贸易增长 → 产业合作</div>
              <div class="influence-desc">制造业、加工贸易、产业园区、跨境电商和现代服务业获得更多合作空间。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">产业合作 → 共同发展</div>
              <div class="influence-desc">就业、技术、基础设施和消费市场联动提升，推动中国与东盟优势互补、共同发展。</div>
            </div>
          </div>
        </div>

        <div class="cooperation-card cooperation-card-15">
          <div class="cooperation-card-header">
            <i class="iconfont icon-bangzhuyushuoming"></i>
            常见易混点
          </div>

          <div class="mix-list">
            <div class="mix-item">
              <div class="mix-title">东盟不等于整个亚洲</div>
              <div class="mix-desc">东盟主要是东南亚国家的区域合作组织，学习时要把它和亚洲、东亚、南亚等更大区域概念区分开。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">区域合作不只是贸易</div>
              <div class="mix-desc">中国与东盟合作还包括交通基础设施、产业园区、能源、农业、旅游、人文交流、数字经济和生态保护等方面。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">陆路通道和海上通道作用不同</div>
              <div class="mix-desc">陆路通道更突出边境联系和中南半岛互联互通；海上通道更突出港口航运、能源运输和国际贸易联系。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">发展合作也要考虑生态与风险</div>
              <div class="mix-desc">交通和产业建设可能带来生态压力，东南亚又多台风、洪涝、地震、火山、海啸等风险，因此需要可持续合作。</div>
            </div>
          </div>
        </div>

        <div class="cooperation-card cooperation-card-11">
          <div class="cooperation-card-header">
            <i class="iconfont icon-kaoshi"></i>
            中考记忆点
          </div>

          <ul class="exam-list">
            <li><strong>一记位置：</strong>东南亚位于两洲两洋之间，是连接中国与印度洋、太平洋的重要通道。</li>
            <li><strong>二记联系：</strong>中国与东盟陆海相邻，交通、贸易、产业和人文联系密切。</li>
            <li><strong>三记通道：</strong>陆路看云南、广西与中南半岛；海路看南海、北部湾和马六甲海峡。</li>
            <li><strong>四记合作：</strong>贸易往来、基础设施、产业园区、能源农业和旅游文化是重点方向。</li>
            <li><strong>五记影响：</strong>促进区域互联互通、产业升级、市场扩大和共同发展。</li>
            <li><strong>六记问题：</strong>发展差异、生态保护、自然灾害和文化差异需要协调解决。</li>
            <li><strong>七记口诀：</strong>陆海相连看通道，产业互补促发展，绿色合作向未来。</li>
          </ul>
        </div>
      </div>

      <div class="cooperation-content-right">
        <div id="southeastAsiaCooperationMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看中国与东盟区域合作联系</div>

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
            <input type="checkbox" v-model="showCooperationAreas" @change="refreshMapLayers" />
            重点合作区域
          </label>

          <label>
            <input type="checkbox" v-model="showLandCorridors" @change="refreshMapLayers" />
            陆路合作通道
          </label>

          <label>
            <input type="checkbox" v-model="showSeaRoutes" @change="refreshMapLayers" />
            海上合作航线
          </label>

          <label>
            <input type="checkbox" v-model="showNodeCities" @change="refreshMapLayers" />
            合作节点城市
          </label>

          <label>
            <input type="checkbox" v-model="showPortNodes" @change="refreshMapLayers" />
            港口与口岸节点
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area boundary-area"></span>
              <span>东南亚国家轮廓</span>
            </div>

            <div class="legend-row">
              <span class="legend-area cooperation-area"></span>
              <span>重点合作区域</span>
            </div>

            <div class="legend-row">
              <span class="legend-line land-line"></span>
              <span>陆路合作通道</span>
            </div>

            <div class="legend-row">
              <span class="legend-line sea-line"></span>
              <span>海上合作航线</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot node-dot"></span>
              <span>合作节点城市</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot port-dot"></span>
              <span>港口 / 口岸</span>
            </div>
          </div>

          <div class="map-note">
            <div class="map-note-title">读图提示</div>
            <div>先看中国西南、华南与东南亚的位置关系，再叠加陆路通道、海上航线和节点城市，理解区域合作的空间基础。</div>
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
            可点击东南亚国家轮廓、重点合作区域、陆路合作通道、海上合作航线、合作节点城市、港口与口岸节点；左下角会显示对应区域合作知识点。
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

const centerLat = 13
const centerLng = 108
const zoomLevel = 4

const useGoogle = ref(false)
const showBoundaryLayer = ref(true)
const showCooperationAreas = ref(true)
const showLandCorridors = ref(true)
const showSeaRoutes = ref(true)
const showNodeCities = ref(true)
const showPortNodes = ref(true)
const activeName = ref('')
const activeMapInfo = ref<MapInfoItem | null>(null)

const cooperationAreaLayer = L.layerGroup()
const landCorridorLayer = L.layerGroup()
const seaRouteLayer = L.layerGroup()
const nodeCityLayer = L.layerGroup()
const portNodeLayer = L.layerGroup()

const boundaryLabels: DomLabel[] = []
const areaLabels: DomLabel[] = []
const landLabels: DomLabel[] = []
const seaLabels: DomLabel[] = []
const nodeLabels: DomLabel[] = []
const portLabels: DomLabel[] = []

const cooperationAreas: AreaItem[] = [
  {
    name: '广西北部湾开放合作区',
    lat: 21.6,
    lng: 108.5,
    radius: 230000,
    color: '#0f766e',
    fillColor: '#2dd4bf',
    fillOpacity: 0.16,
    desc: '面向东盟的海上门户，联系西部陆海新通道、北部湾港和东南亚海上航线，是中国西部地区通过海运联系东盟的重要出口。',
    className: 'area-label-dom',
  },
  {
    name: '云南面向东南亚合作区',
    lat: 24.0,
    lng: 102.8,
    radius: 270000,
    color: '#047857',
    fillColor: '#34d399',
    fillOpacity: 0.15,
    desc: '通过昆明、磨憨口岸、中老铁路和跨境公路联系老挝、缅甸、越南和泰国，体现中国西南地区面向东南亚开放的前沿作用。',
    className: 'area-label-dom',
  },
  {
    name: '粤港澳大湾区开放平台',
    lat: 22.7,
    lng: 113.5,
    radius: 210000,
    color: '#0891b2',
    fillColor: '#22d3ee',
    fillOpacity: 0.13,
    desc: '制造业、科技、金融、港口和国际航运优势突出，可通过海运、航空、产业链和服务贸易联系东盟市场。',
    className: 'area-label-dom',
  },
  {
    name: '中南半岛经济走廊',
    lat: 15.5,
    lng: 103.0,
    radius: 470000,
    color: '#f97316',
    fillColor: '#fdba74',
    fillOpacity: 0.13,
    desc: '越南、老挝、柬埔寨、泰国、缅甸之间陆路交通和产业联系明显，是理解中南半岛互联互通和产业合作的重要区域。',
    className: 'area-label-dom',
  },
  {
    name: '马六甲海峡海上通道',
    lat: 3.2,
    lng: 101.5,
    radius: 310000,
    color: '#0369a1',
    fillColor: '#38bdf8',
    fillOpacity: 0.13,
    desc: '连接印度洋与太平洋，是中国与东盟、西亚、欧洲贸易联系的重要海上通道，也是能源运输和国际航运的重要节点。',
    className: 'area-label-dom',
  },
]

const nodeCities: PointItem[] = [
  {
    name: '昆明',
    icon: '🚄',
    lat: 25.0389,
    lng: 102.7183,
    type: '中国西南门户城市',
    desc: '面向南亚东南亚的重要节点城市，通过铁路、公路和航空联系中南半岛，是中国西南开放和中老铁路联系的重要起点。',
    color: '#064e3b',
    fillColor: '#34d399',
    className: 'node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '南宁',
    icon: '🚄',
    lat: 22.817,
    lng: 108.366,
    type: '中国—东盟合作门户',
    desc: '面向东盟开放合作的重要城市，联系广西北部湾、越南和东南亚市场，是中国—东盟交流合作的重要门户。',
    color: '#064e3b',
    fillColor: '#34d399',
    className: 'node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '广州',
    icon: '🏙️',
    lat: 23.1291,
    lng: 113.2644,
    type: '华南开放中心',
    desc: '制造业、港口、航空和服务业发达，可通过粤港澳大湾区产业链、港口和航空网络联系东盟。',
    color: '#064e3b',
    fillColor: '#34d399',
    className: 'node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '河内',
    icon: '🏙️',
    lat: 21.0278,
    lng: 105.8342,
    type: '越南北部节点城市',
    desc: '临近中国广西和云南方向，是中越陆路贸易、产业联系和越南北部市场的重要节点。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '万象',
    icon: '🚄',
    lat: 17.9757,
    lng: 102.6331,
    type: '中老铁路节点城市',
    desc: '老挝首都，通过中老铁路联系昆明，是中国与中南半岛互联互通的重要节点，也体现内陆国家通过铁路提升开放性的意义。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '曼谷',
    icon: '🏙️',
    lat: 13.7563,
    lng: 100.5018,
    type: '中南半岛经济中心',
    desc: '泰国首都，是区域消费市场、制造业、旅游和交通网络的重要中心，承接中南半岛南向通道和航空联系功能。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '吉隆坡',
    icon: '🏙️',
    lat: 3.139,
    lng: 101.6869,
    type: '马来半岛综合节点',
    desc: '马来西亚首都，制造业、金融、航空和服务业联系密切，并通过巴生港和马六甲海峡联系国际市场。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '新加坡',
    icon: '⚓',
    lat: 1.3521,
    lng: 103.8198,
    type: '国际航运与金融中心',
    desc: '位于马六甲海峡附近，是中国与东盟海上贸易、金融服务、转口贸易和物流合作的重要节点。',
    color: '#075985',
    fillColor: '#38bdf8',
    className: 'node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '雅加达',
    icon: '🏙️',
    lat: -6.2088,
    lng: 106.8456,
    type: '群岛国家门户城市',
    desc: '印度尼西亚重要城市，联系爪哇岛产业带和印尼群岛市场，是中国与印尼贸易、投资和航运联系的重要门户。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '马尼拉',
    icon: '🏙️',
    lat: 14.5995,
    lng: 120.9842,
    type: '菲律宾门户城市',
    desc: '菲律宾首都和海上交通节点，联系西太平洋群岛市场，是中国与菲律宾贸易、航运和服务合作的重要门户。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'node-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
]

const portNodes: PointItem[] = [
  {
    name: '北部湾港',
    icon: '⚓',
    lat: 21.45,
    lng: 108.6,
    type: '中国面向东盟海上门户',
    desc: '连接西部陆海新通道和东南亚航线，是广西面向东盟开放的重要港口群，服务中国西部内陆与东盟市场联系。',
    color: '#0f172a',
    fillColor: '#0ea5e9',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '磨憨口岸',
    icon: '🚉',
    lat: 21.18,
    lng: 101.68,
    type: '中老铁路口岸',
    desc: '位于云南南部，是中老铁路出境的重要口岸节点，承担跨境客货运输、口岸物流和边境贸易功能。',
    color: '#0f172a',
    fillColor: '#0ea5e9',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '凭祥口岸',
    icon: '🚚',
    lat: 22.1,
    lng: 106.75,
    type: '中越边境口岸',
    desc: '广西与越南陆路贸易联系的重要口岸，促进跨境物流、边境贸易和中越产业联系。',
    color: '#0f172a',
    fillColor: '#0ea5e9',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '新加坡港',
    icon: '⚓',
    lat: 1.27,
    lng: 103.85,
    type: '国际枢纽港',
    desc: '位于马六甲海峡附近，是区域海运、转口贸易和物流服务核心节点，也是连接东亚、东南亚和印度洋航线的重要港口。',
    color: '#0f172a',
    fillColor: '#0ea5e9',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴生港',
    icon: '⚓',
    lat: 3.0,
    lng: 101.4,
    type: '马来西亚重要港口',
    desc: '靠近吉隆坡，服务马来西亚西海岸产业和海上贸易，是马来半岛西海岸城市带的重要港口。',
    color: '#0f172a',
    fillColor: '#0ea5e9',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '雅加达港',
    icon: '⚓',
    lat: -6.12,
    lng: 106.85,
    type: '印尼重要港口',
    desc: '服务雅加达都市区和爪哇岛产业带，是中国与印尼海上贸易、工业品流通和群岛市场联系的重要节点。',
    color: '#0f172a',
    fillColor: '#0ea5e9',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '马尼拉港',
    icon: '⚓',
    lat: 14.58,
    lng: 120.96,
    type: '菲律宾首都港口',
    desc: '服务菲律宾首都圈和吕宋岛市场，是中国与菲律宾海上贸易、物流服务和群岛市场联系的重要节点。',
    color: '#0f172a',
    fillColor: '#0ea5e9',
    className: 'port-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
]

const landCorridors: LineItem[] = [
  {
    name: '中老铁路合作通道',
    path: [
      [25.0389, 102.7183],
      [21.18, 101.68],
      [19.9, 102.2],
      [17.9757, 102.6331],
    ],
    desc: '昆明—磨憨—老挝—万象方向，增强中国西南与中南半岛之间的铁路联系，有利于降低内陆运输成本并带动沿线产业和旅游发展。',
    color: '#16a34a',
    dashArray: '8 6',
    weight: 3,
    className: 'land-label-dom',
    arrowSize: 1.1,
  },
  {
    name: '中越陆路贸易通道',
    path: [
      [22.817, 108.366],
      [22.1, 106.75],
      [21.0278, 105.8342],
      [20.8449, 106.6881],
    ],
    desc: '南宁—凭祥—河内—海防方向，是中国广西与越南北部陆路贸易联系的重要通道，连接口岸物流、越南北部市场和海防港出海通道。',
    color: '#22c55e',
    dashArray: '8 6',
    weight: 3,
    className: 'land-label-dom',
    arrowSize: 1.1,
  },
  {
    name: '中南半岛南向通道',
    path: [
      [17.9757, 102.6331],
      [13.7563, 100.5018],
      [3.139, 101.6869],
      [1.3521, 103.8198],
    ],
    desc: '从老挝、泰国、马来半岛到新加坡方向，体现中南半岛陆路与马六甲海峡、新加坡港等海上门户的衔接。',
    color: '#f97316',
    dashArray: '8 6',
    weight: 3,
    className: 'land-label-dom',
    arrowSize: 1.1,
  },
]

const seaRoutes: LineItem[] = [
  {
    name: '华南—新加坡海上航线',
    path: [
      [23.1291, 113.2644],
      [20.0, 112.0],
      [15.0, 110.0],
      [8.0, 106.0],
      [1.3521, 103.8198],
    ],
    desc: '从华南港口经南海至新加坡，体现中国与东盟海上贸易、港口物流和转口贸易联系。',
    color: '#0ea5e9',
    dashArray: '10 7',
    weight: 3,
    className: 'sea-label-dom',
    arrowSize: 1.2,
  },
  {
    name: '北部湾—马六甲航线',
    path: [
      [21.45, 108.6],
      [16.0, 109.0],
      [10.0, 106.0],
      [4.0, 103.0],
      [1.27, 103.85],
    ],
    desc: '北部湾港连接越南南部、马六甲海峡和新加坡港，服务西部陆海新通道，使中国西部地区更便捷地进入东盟和国际市场。',
    color: '#0284c7',
    dashArray: '10 7',
    weight: 3,
    className: 'sea-label-dom',
    arrowSize: 1.2,
  },
  {
    name: '中国—印尼群岛航线',
    path: [
      [23.1291, 113.2644],
      [15.0, 113.0],
      [8.0, 111.0],
      [1.3521, 103.8198],
      [-6.2088, 106.8456],
    ],
    desc: '经南海、新加坡附近至雅加达，联系中国与印度尼西亚群岛市场，体现海运对群岛国家贸易联系的重要作用。',
    color: '#0369a1',
    dashArray: '10 7',
    weight: 3,
    className: 'sea-label-dom',
    arrowSize: 1.2,
  },
  {
    name: '中国—菲律宾海上航线',
    path: [
      [23.1291, 113.2644],
      [19.0, 116.0],
      [16.5, 119.0],
      [14.5995, 120.9842],
    ],
    desc: '从华南经南海至马尼拉，体现中国与菲律宾之间的海上交通联系，也连接吕宋岛市场和西太平洋群岛区域。',
    color: '#38bdf8',
    dashArray: '10 7',
    weight: 3,
    className: 'sea-label-dom',
    arrowSize: 1.2,
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
  if (showCooperationAreas.value) areaLabels.forEach(updateOneLabelPosition)
  if (showLandCorridors.value) landLabels.forEach(updateOneLabelPosition)
  if (showSeaRoutes.value) seaLabels.forEach(updateOneLabelPosition)
  if (showNodeCities.value) nodeLabels.forEach(updateOneLabelPosition)
  if (showPortNodes.value) portLabels.forEach(updateOneLabelPosition)
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

function bindMapInfo(layer: L.Layer, title: string, desc: string, type = '区域合作') {
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
        const desc = props.desc || props.description || '东南亚国家轮廓范围，可与中国—东盟区域合作联系进行对照。'

        bindMapInfo(layer, name, desc, '东盟国家轮廓')
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

    bindMapInfo(circle, item.name, item.desc, '重点合作区域')

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
  ;[...nodeLabels, ...portLabels].forEach(label => {
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

  if (showCooperationAreas.value) {
    addAreaLayer(cooperationAreaLayer, areaLabels, cooperationAreas)
  } else {
    cooperationAreaLayer.clearLayers()
    clearDomLabels(areaLabels)
  }

  if (showLandCorridors.value) {
    addLineLayer(landCorridorLayer, landLabels, landCorridors, '陆路合作通道')
  } else {
    landCorridorLayer.clearLayers()
    clearDomLabels(landLabels)
  }

  if (showSeaRoutes.value) {
    addLineLayer(seaRouteLayer, seaLabels, seaRoutes, '海上合作航线')
  } else {
    seaRouteLayer.clearLayers()
    clearDomLabels(seaLabels)
  }

  if (showNodeCities.value) {
    addPointLayer(nodeCityLayer, nodeLabels, nodeCities)
  } else {
    nodeCityLayer.clearLayers()
    clearDomLabels(nodeLabels)
  }

  if (showPortNodes.value) {
    addPointLayer(portNodeLayer, portLabels, portNodes)
  } else {
    portNodeLayer.clearLayers()
    clearDomLabels(portLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  clearBoundaryLayer()

  cooperationAreaLayer.clearLayers()
  landCorridorLayer.clearLayers()
  seaRouteLayer.clearLayers()
  nodeCityLayer.clearLayers()
  portNodeLayer.clearLayers()

  if (map.hasLayer(cooperationAreaLayer)) cooperationAreaLayer.removeFrom(map)
  if (map.hasLayer(landCorridorLayer)) landCorridorLayer.removeFrom(map)
  if (map.hasLayer(seaRouteLayer)) seaRouteLayer.removeFrom(map)
  if (map.hasLayer(nodeCityLayer)) nodeCityLayer.removeFrom(map)
  if (map.hasLayer(portNodeLayer)) portNodeLayer.removeFrom(map)

  clearDomLabels(boundaryLabels)
  clearDomLabels(areaLabels)
  clearDomLabels(landLabels)
  clearDomLabels(seaLabels)
  clearDomLabels(nodeLabels)
  clearDomLabels(portLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaCooperationMap', {
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
.cooperation-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.cooperation-header {
  margin-bottom: 32px;
}

.cooperation-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.cooperation-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.cooperation-content-right {
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

.cooperation-card {
  border-radius: 8px;
  border: 1px solid rgba(15, 143, 179, 0.26);
  padding: 14px;
}

.cooperation-card-01 {
  background: #ecfeff;
  border-color: rgba(15, 143, 179, 0.35);
}

.cooperation-card-02 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.cooperation-card-03 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.cooperation-card-04 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.cooperation-card-05 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.cooperation-card-06 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.cooperation-card-07 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.cooperation-card-08 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.cooperation-card-09 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.cooperation-card-10 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.cooperation-card-11 {
  background: #fefce8;
  border-color: #fde68a;
}

.cooperation-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-color, #0f8fb3);
}

.cooperation-card-03 .cooperation-card-header,
.cooperation-card-08 .cooperation-card-header {
  color: #9a3412;
}

.cooperation-card-05 .cooperation-card-header {
  color: #0369a1;
}

.cooperation-card-07 .cooperation-card-header {
  color: #334155;
}

.cooperation-card-09 .cooperation-card-header {
  color: #0f766e;
}

.cooperation-card-10 .cooperation-card-header {
  color: #334155;
}

.cooperation-card-11 .cooperation-card-header {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color, #0f8fb3);
}

.cooperation-card-03 .iconfont,
.cooperation-card-08 .iconfont {
  color: #9a3412;
}

.cooperation-card-05 .iconfont {
  color: #0369a1;
}

.cooperation-card-07 .iconfont,
.cooperation-card-10 .iconfont {
  color: #334155;
}

.cooperation-card-09 .iconfont {
  color: #0f766e;
}

.cooperation-card-11 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.cooperation-card p {
  margin-top: 0;
  line-height: 1.65;
  color: #1f2937;
}

.feature-grid,
.asean-grid,
.transport-grid,
.resource-grid,
.area-grid,
.challenge-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.feature-box,
.asean-box,
.transport-card,
.resource-card,
.area-card,
.challenge-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid rgba(15, 143, 179, 0.18);
}

.feature-title,
.asean-title,
.transport-title,
.resource-title,
.area-title,
.challenge-title {
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 4px;
}

.feature-title {
  font-size: 13px;
  color: #64748b;
}

.feature-value {
  font-size: 17px;
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 4px;
}

.feature-desc,
.asean-desc,
.transport-desc,
.resource-desc,
.area-desc,
.challenge-desc,
.item-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
}

.asean-box.mainland .asean-title {
  color: #047857;
}

.asean-box.island .asean-title {
  color: #0369a1;
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

.green-note {
  margin-top: 10px;
  border-left-color: #0f766e;
}

.green-note .note-title {
  color: #0f766e;
}

.mini-summary {
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  background: #fff;
  border-left: 3px solid #0f8fb3;
  color: #475569;
  font-size: 13px;
}

.mini-summary span {
  color: #64748b;
  margin-right: 8px;
}

.mini-summary strong {
  color: var(--primary-color, #0f8fb3);
}

.rule-item {
  padding: 8px 10px;
  background: #fff;
  border-radius: 6px;
  border-left: 3px solid #f97316;
  margin-bottom: 8px;
}

.rule-item:last-child {
  margin-bottom: 0;
}

.item-title {
  font-weight: bold;
  color: #c2410c;
  margin-bottom: 4px;
}

.trade-card {
  margin-top: 10px;
  padding: 9px 10px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #fed7aa;
}

.trade-card-title {
  font-weight: bold;
  color: #c2410c;
  margin-bottom: 4px;
}

.trade-card-desc {
  color: #475569;
  font-size: 13px;
  line-height: 1.45;
}

.transport-card {
  position: relative;
  overflow: hidden;
}

.transport-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.transport-card.rail .transport-title {
  color: #047857;
}

.transport-card.port .transport-title {
  color: #0369a1;
}

.transport-card.air .transport-title {
  color: #ea580c;
}

.transport-card.digital .transport-title {
  color: #7c3aed;
}

.industry-list {
  display: grid;
  gap: 8px;
}

.industry-item {
  display: grid;
  grid-template-columns: 76px 1fr;
  gap: 8px;
  align-items: start;
  background: #fff;
  border-radius: 8px;
  padding: 9px 10px;
  border: 1px solid rgba(14, 165, 233, 0.22);
}

.industry-item span {
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

.industry-item p {
  margin: 0;
  color: #475569;
  font-size: 13px;
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

.traffic-fill {
  width: 94%;
  background: #0ea5e9;
}

.industry-fill {
  width: 88%;
  background: #f97316;
}

.market-fill {
  width: 90%;
  background: var(--primary-color, #0f8fb3);
}

.culture-fill {
  width: 82%;
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

.cooperation-area {
  background: rgba(45, 212, 191, 0.22);
  border: 1px solid #0f766e;
}

.legend-line {
  width: 25px;
  height: 0;
  display: inline-block;
  flex-shrink: 0;
}

.land-line {
  border-top: 3px dashed #16a34a;
}

.sea-line {
  border-top: 3px dashed #0ea5e9;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.node-dot {
  background: #f97316;
  border: 2px solid #7c2d12;
  box-sizing: border-box;
}

.port-dot {
  background: #38bdf8;
  border: 2px solid #075985;
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
  width: 290px;
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

:deep(.boundary-label-dom),
:deep(.area-label-dom),
:deep(.land-label-dom),
:deep(.sea-label-dom),
:deep(.node-label-dom),
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

:deep(.boundary-label-dom),
:deep(.area-label-dom),
:deep(.land-label-dom),
:deep(.sea-label-dom) {
  transform: translate(-50%, -50%);
}

:deep(.node-label-dom),
:deep(.port-label-dom) {
  transform: translate(0, -50%);
}

:deep(.boundary-label-dom) {
  background: rgba(4, 120, 87, 0.86);
}

:deep(.area-label-dom) {
  background: rgba(13, 148, 136, 0.9);
}

:deep(.land-label-dom) {
  background: rgba(22, 163, 74, 0.9);
}

:deep(.sea-label-dom) {
  background: rgba(3, 105, 161, 0.88);
}

:deep(.node-label-dom) {
  background: rgba(194, 65, 12, 0.9);
}

:deep(.port-label-dom) {
  background: rgba(3, 105, 161, 0.9);
}

:deep(.node-label-dom.active),
:deep(.port-label-dom.active) {
  background: var(--primary-color, #0f8fb3);
  color: #fff;
  font-size: 13px;
}

.cooperation-card-12 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.cooperation-card-13 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.cooperation-card-14 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.cooperation-card-15 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.cooperation-card-12 .cooperation-card-header {
  color: #0f766e;
}

.cooperation-card-13 .cooperation-card-header {
  color: #334155;
}

.cooperation-card-14 .cooperation-card-header {
  color: #0369a1;
}

.cooperation-card-15 .cooperation-card-header {
  color: #c2410c;
}

.cooperation-card-12 .iconfont {
  color: #0f766e;
}

.cooperation-card-13 .iconfont {
  color: #334155;
}

.cooperation-card-14 .iconfont {
  color: #0369a1;
}

.cooperation-card-15 .iconfont {
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
