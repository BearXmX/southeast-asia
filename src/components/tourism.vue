<template>
  <div class="tourism-container">
    <div class="tourism-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="tourism-content">
      <div class="tourism-content-left">
        <div class="tourism-card tourism-card-01">
          <div class="tourism-card-header"><i class="iconfont icon-lvyouye"></i>旅游资源总体特征</div>

          <p class="mb-8">
            东南亚旅游资源类型丰富，既有<strong>热带海岛、火山雨林、河流三角洲</strong>等自然景观，
            也有<strong>佛教、伊斯兰教、印度教、华人文化和殖民城市遗产</strong>等多元文化景观。
            其旅游资源分布具有明显的<strong>沿海、沿岛、沿古都、沿交通节点</strong>特点。
          </p>

          <div class="feature-grid">
            <div class="feature-box">
              <div class="feature-title">自然旅游</div>
              <div class="feature-value">海岛风光</div>
              <div class="feature-desc">海岸线曲折、岛屿众多，形成海滩、珊瑚礁、潜水、火山和雨林景观。</div>
            </div>

            <div class="feature-box">
              <div class="feature-title">人文旅游</div>
              <div class="feature-value">多元文化</div>
              <div class="feature-desc">多民族、多宗教、多语言交融，古迹、寺庙、城市街区和节庆活动丰富。</div>
            </div>
          </div>

          <div class="note-box">
            <div class="note-title">核心理解</div>
            <div>
              东南亚旅游资源可以概括为：
              <strong>海岛多、文化杂、港口密、交通便，热带风光与多元文化并重。</strong>
            </div>
          </div>
        </div>

        <div class="tourism-card tourism-card-visual">
          <div class="tourism-card-header"><i class="iconfont icon-quyuxinxi"></i>典型旅游资源图文速览</div>

          <div class="tourism-visual-grid image-card-grid">
            <button
              v-for="item in tourismVisualImageList"
              :key="item.name"
              type="button"
              class="tourism-visual-card tourism-visual-image-card"
              @click="openImagePreview(item)"
            >
              <div class="tourism-visual-thumb">
                <img :src="item.image" :alt="item.name" />
                <span class="scene-tag">{{ item.category }}</span>
                <span class="scene-icon">{{ item.icon }}</span>
              </div>

              <div class="tourism-visual-info">
                <div class="visual-title">{{ item.name }}</div>
                <div class="visual-desc">{{ item.desc }}</div>
              </div>
            </button>
          </div>

          <div class="section-image-tip">点击图文速览卡片可以放大查看资源主题图。</div>
        </div>

        <div class="tourism-card tourism-card-02">
          <div class="tourism-card-header"><i class="iconfont icon-ziranfengguang"></i>海岛风光与滨海旅游</div>

          <div class="island-image-grid image-card-grid">
            <button
              v-for="item in islandTourismImageList"
              :key="item.name"
              type="button"
              class="section-image-card island-section-card"
              @click="openImagePreview(item)"
            >
              <div class="section-image-wrap">
                <img :src="item.image" :alt="item.name" />
                <span class="section-image-category">{{ item.category }}</span>
                <span class="section-image-icon">{{ item.icon }}</span>
              </div>

              <div class="section-image-info">
                <div class="item-title">{{ item.name }}</div>
                <div class="section-image-location">{{ item.location }}</div>
                <div class="item-desc">{{ item.desc }}</div>
              </div>
            </button>
          </div>

          <div class="section-image-tip">点击海岛旅游图文卡片可放大查看，方便把海岛名称、位置和旅游特色对应起来。</div>
        </div>

        <div class="tourism-card tourism-card-03">
          <div class="tourism-card-header"><i class="iconfont icon-shuiziyuan"></i>热带雨林、火山与生态旅游</div>

          <div class="nature-grid image-card-grid">
            <button v-for="item in natureImageList" :key="item.name" type="button" class="section-image-card" @click="openImagePreview(item)">
              <div class="section-image-wrap">
                <img :src="item.image" :alt="item.name" />
                <span class="section-image-category">{{ item.category }}</span>
                <span class="section-image-icon">{{ item.icon }}</span>
              </div>

              <div class="section-image-info">
                <div class="nature-title">{{ item.name }}</div>
                <div class="section-image-location">{{ item.location }}</div>
                <div class="nature-desc">{{ item.desc }}</div>
              </div>
            </button>
          </div>
        </div>

        <div class="tourism-card tourism-card-04">
          <div class="tourism-card-header"><i class="iconfont icon-wenhuajiaoyu"></i>历史古迹与世界遗产</div>

          <p class="mb-8">东南亚历史文化景观丰富，古代王国、宗教建筑、港口贸易和殖民城市共同塑造了多样化旅游资源。</p>

          <div class="heritage-grid image-card-grid">
            <button v-for="item in heritageImageList" :key="item.name" type="button" class="section-image-card" @click="openImagePreview(item)">
              <div class="section-image-wrap">
                <img :src="item.image" :alt="item.name" />
                <span class="section-image-category">{{ item.category }}</span>
                <span class="section-image-icon">{{ item.icon }}</span>
              </div>

              <div class="section-image-info">
                <div class="heritage-title">{{ item.name }}</div>
                <div class="section-image-location">{{ item.location }}</div>
                <div class="heritage-desc">{{ item.desc }}</div>
              </div>
            </button>
          </div>
        </div>

        <div class="tourism-card tourism-card-06">
          <div class="tourism-card-header"><i class="iconfont icon-chengshi"></i>旅游城市与国际门户</div>

          <div class="city-type-grid image-card-grid">
            <button
              v-for="item in gatewayCityImageList"
              :key="item.name"
              type="button"
              class="section-image-card city-gateway-image-card"
              @click="openImagePreview(item)"
            >
              <div class="section-image-wrap">
                <img :src="item.image" :alt="item.name" />
                <span class="section-image-category">{{ item.category }}</span>
                <span class="section-image-icon">{{ item.icon }}</span>
              </div>

              <div class="section-image-info">
                <div class="city-type-title">{{ item.name }}</div>
                <div class="section-image-location">{{ item.location }}</div>
                <div class="city-type-desc">{{ item.desc }}</div>
              </div>
            </button>
          </div>

          <div class="section-image-tip">点击门户城市图文卡片可放大查看城市旅游资源。</div>
        </div>

        <div class="tourism-card tourism-card-05">
          <div class="tourism-card-header"><i class="iconfont icon-biangengminzu"></i>多元文化与宗教景观</div>

          <div class="culture-list">
            <div class="culture-item">
              <span>佛教文化</span>
              <p>泰国、缅甸、老挝、柬埔寨等地佛教寺庙众多，佛塔、僧侣、节庆构成重要人文景观。</p>
            </div>

            <div class="culture-item">
              <span>伊斯兰文化</span>
              <p>印度尼西亚、马来西亚、文莱等国穆斯林人口较多，清真寺、节日和饮食文化具有特色。</p>
            </div>

            <div class="culture-item">
              <span>印度教文化</span>
              <p>巴厘岛印度教文化特色鲜明，宗教仪式、神庙、舞蹈与海岛景观结合紧密。</p>
            </div>

            <div class="culture-item">
              <span>华人文化</span>
              <p>新加坡、马来西亚、泰国、越南等地华人社区和传统街区丰富，体现区域交流历史。</p>
            </div>
          </div>

          <div class="note-box culture-note">
            <div class="note-title">文化旅游规律</div>
            <div>东南亚文化旅游的优势在于<strong>宗教多元、民族多样、港口交流历史悠久</strong>。</div>
          </div>
        </div>

        <div class="tourism-card tourism-card-07">
          <div class="tourism-card-header"><i class="iconfont icon-gaosu"></i>旅游区位与交通条件</div>

          <div class="factor-row">
            <div class="factor-label">海陆</div>
            <div class="factor-bar">
              <div class="factor-fill sea-fill"></div>
            </div>
            <div class="factor-text">位于亚洲与大洋洲、印度洋与太平洋之间，海岛众多，滨海旅游条件突出。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">航道</div>
            <div class="factor-bar">
              <div class="factor-fill route-fill"></div>
            </div>
            <div class="factor-text">马六甲海峡和南海航线提升区域可达性，港口城市容易发展旅游和贸易。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">航空</div>
            <div class="factor-bar">
              <div class="factor-fill air-fill"></div>
            </div>
            <div class="factor-text">曼谷、新加坡、吉隆坡、雅加达、马尼拉等航空枢纽联系国际游客市场。</div>
          </div>

          <div class="factor-row">
            <div class="factor-label">文化</div>
            <div class="factor-bar">
              <div class="factor-fill culture-fill"></div>
            </div>
            <div class="factor-text">多元文化、宗教遗产和殖民城市街区丰富，增强旅游吸引力。</div>
          </div>

          <div class="chart-tip">注：上图为课堂示意，用于理解旅游发展条件，不表示严格统计比例。</div>
        </div>

        <div class="tourism-card tourism-card-08">
          <div class="tourism-card-header"><i class="iconfont icon-qiyuan"></i>旅游开发与生态保护</div>

          <div class="protect-grid">
            <div class="protect-card">
              <div class="protect-title">海岛承载力</div>
              <div class="protect-desc">热门海岛游客集中，需控制开发强度，保护海滩、珊瑚礁和海洋生态。</div>
            </div>

            <div class="protect-card">
              <div class="protect-title">雨林保护</div>
              <div class="protect-desc">热带雨林生物多样性高，生态旅游应减少破坏，避免过度商业化。</div>
            </div>

            <div class="protect-card">
              <div class="protect-title">文化保护</div>
              <div class="protect-desc">古迹、寺庙和历史街区需要维护原真性，避免单纯消费化。</div>
            </div>

            <div class="protect-card">
              <div class="protect-title">灾害风险</div>
              <div class="protect-desc">台风、火山、地震、海啸等自然风险影响旅游安全，需要完善预警和管理。</div>
            </div>
          </div>
        </div>

        <div class="tourism-card tourism-card-11">
          <div class="tourism-card-header"><i class="iconfont icon-wenhuajiaoyu"></i>旅游资源识图干货</div>

          <div class="knowledge-list">
            <div class="knowledge-item">
              <span>先看海陆</span>
              <p>东南亚岛屿多、海岸线长，海岛风光和滨海度假资源集中在泰国南部、马来半岛、菲律宾群岛、印尼群岛和沙巴周边。</p>
            </div>

            <div class="knowledge-item">
              <span>再看热带</span>
              <p>低纬度位置带来高温多雨的热带环境，形成雨林、珊瑚、火山、瀑布、河流三角洲等自然旅游资源。</p>
            </div>

            <div class="knowledge-item">
              <span>重点看文化</span>
              <p>吴哥窟、婆罗浮屠、蒲甘古城、会安古城等资源说明东南亚人文景观具有宗教多元、历史悠久、港口交流明显的特点。</p>
            </div>

            <div class="knowledge-item">
              <span>联系门户</span>
              <p>曼谷、新加坡、吉隆坡、雅加达、马尼拉等城市既是旅游目的地，也是机场、港口和国际游客进入区域的重要门户。</p>
            </div>
          </div>
        </div>

        <div class="tourism-card tourism-card-12">
          <div class="tourism-card-header"><i class="iconfont icon-maodunjiufen"></i>自然旅游与人文旅游对比</div>

          <div class="compare-table">
            <div class="compare-row compare-head">
              <div>项目</div>
              <div>自然旅游资源</div>
              <div>人文旅游资源</div>
            </div>

            <div class="compare-row">
              <div>典型类型</div>
              <div>热带海岛、沙滩、珊瑚、潜水、火山、雨林、河流三角洲</div>
              <div>宗教建筑、古城遗址、港口街区、民族节庆、殖民建筑和城市景观</div>
            </div>

            <div class="compare-row">
              <div>形成条件</div>
              <div>低纬热带气候、岛屿海岸、板块活动、海洋生态和河流地貌</div>
              <div>古代王国、宗教传播、海上贸易、殖民历史和多民族交流</div>
            </div>

            <div class="compare-row">
              <div>分布规律</div>
              <div>多沿海、沿岛、沿火山带、沿雨林和海洋生态区分布</div>
              <div>多沿古都、宗教中心、港口城市和交通节点分布</div>
            </div>

            <div class="compare-row">
              <div>开发重点</div>
              <div>控制游客容量，保护海洋、雨林、珊瑚和火山生态安全</div>
              <div>保护遗产原真性，尊重宗教习俗和地方文化，避免过度商业化</div>
            </div>
          </div>
        </div>

        <div class="tourism-card tourism-card-13">
          <div class="tourism-card-header"><i class="iconfont icon-hexin"></i>旅游开发与区域发展的联系</div>

          <div class="influence-grid">
            <div class="influence-card">
              <div class="influence-title">旅游 → 交通</div>
              <div class="influence-desc">热门旅游地会推动机场、港口、跨岛航线和城市交通建设，提高区域可达性。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">旅游 → 城市</div>
              <div class="influence-desc">曼谷、新加坡、吉隆坡等门户城市通过住宿、餐饮、会展、购物和交通服务吸引人口与产业集聚。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">旅游 → 文化</div>
              <div class="influence-desc">宗教古迹、港口古城和民族文化提升区域吸引力，也要求尊重文化差异和保护历史遗产。</div>
            </div>

            <div class="influence-card">
              <div class="influence-title">旅游 → 生态</div>
              <div class="influence-desc">海岛、雨林、珊瑚和火山旅游价值高，但开发过度会带来生态破坏和灾害风险管理压力。</div>
            </div>
          </div>
        </div>

        <div class="tourism-card tourism-card-14">
          <div class="tourism-card-header"><i class="iconfont icon-bangzhuyushuoming"></i>常见易混点</div>

          <div class="mix-list">
            <div class="mix-item">
              <div class="mix-title">海岛旅游不只在一个国家</div>
              <div class="mix-desc">泰国南部、菲律宾、印度尼西亚、马来西亚都有典型海岛旅游资源，不能把东南亚海岛风光只对应到巴厘岛。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">文化遗产不等于现代城市景观</div>
              <div class="mix-desc">吴哥窟、婆罗浮屠、蒲甘古城、会安古城等属于历史文化遗产；新加坡、吉隆坡等更多体现现代城市和门户功能。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">自然景观开发要考虑生态承载力</div>
              <div class="mix-desc">珊瑚礁、热带雨林、海滩和火山地区对环境变化敏感，旅游开发不能只看经济收益，还要看生态保护。</div>
            </div>

            <div class="mix-item">
              <div class="mix-title">旅游门户城市不一定资源单一</div>
              <div class="mix-desc">曼谷、新加坡、吉隆坡、雅加达等既有交通枢纽功能，也集中了购物、文化、会展、餐饮和城市景观。</div>
            </div>
          </div>
        </div>

        <div class="tourism-card tourism-card-10">
          <div class="tourism-card-header"><i class="iconfont icon-kaoshi"></i>中考记忆点</div>

          <ul class="exam-list">
            <li><strong>一记资源：</strong>东南亚旅游资源丰富，包括海岛风光、热带雨林、火山地貌和文化遗产。</li>
            <li><strong>二记分布：</strong>海岛风光多分布在马来群岛、菲律宾群岛、泰国南部和马来半岛附近。</li>
            <li><strong>三记文化：</strong>佛教、伊斯兰教、印度教、华人文化和殖民城市遗产共同形成多元文化景观。</li>
            <li><strong>四记城市：</strong>曼谷、新加坡、吉隆坡、雅加达、马尼拉是重要旅游门户城市。</li>
            <li><strong>五记区位：</strong>海峡、港口、机场和国际航线提升东南亚旅游可达性。</li>
            <li><strong>六记保护：</strong>旅游开发要保护海洋生态、热带雨林和历史文化遗产。</li>
            <li><strong>七记口诀：</strong>海岛看群岛，文化看古都，门户看港口，保护看生态。</li>
          </ul>
        </div>
      </div>

      <div class="tourism-content-right">
        <div id="southeastAsiaTourismMap" class="leaflet-map"></div>

        <div class="map-tip">支持拖拽 / 滚轮缩放查看东南亚旅游资源分布</div>

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
            <input type="checkbox" v-model="showIslandAreas" @change="refreshMapLayers" />
            海岛风光区
          </label>

          <label>
            <input type="checkbox" v-model="showNatureSpots" @change="refreshMapLayers" />
            自然景观点
          </label>

          <label>
            <input type="checkbox" v-model="showCultureSpots" @change="refreshMapLayers" />
            文化遗产点
          </label>

          <label>
            <input type="checkbox" v-model="showTourismCities" @change="refreshMapLayers" />
            旅游门户城市
          </label>

          <label>
            <input type="checkbox" v-model="showTourismRoutes" @change="refreshMapLayers" />
            旅游交通线路
          </label>

          <div class="map-legend">
            <div class="legend-title">图例</div>

            <div class="legend-row">
              <span class="legend-area boundary-area"></span>
              <span>国家轮廓</span>
            </div>

            <div class="legend-row">
              <span class="legend-area island-area"></span>
              <span>海岛风光区</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot nature-dot"></span>
              <span>自然景观点</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot culture-dot"></span>
              <span>文化遗产点</span>
            </div>

            <div class="legend-row">
              <span class="legend-dot city-dot"></span>
              <span>旅游门户城市</span>
            </div>

            <div class="legend-row">
              <span class="legend-arrow route-arrow"></span>
              <span>旅游交通线路</span>
            </div>
          </div>

          <div class="map-note">
            <div class="map-note-title">读图提示</div>
            <div>对比海岛风光区、文化遗产点和旅游门户城市，理解东南亚旅游资源“自然与人文并重”的特点。</div>
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
            可点击国家轮廓、海岛风光区、自然景观点、文化遗产点、旅游门户城市和旅游交通线路；左下角会显示对应旅游资源知识点。
          </div>
        </div>
      </div>
    </div>
    <div v-if="previewImageCard" class="image-preview-mask" @click.self="closeImagePreview">
      <div class="image-preview-panel">
        <button type="button" class="image-preview-close" @click="closeImagePreview">×</button>

        <div class="image-preview-img">
          <img :src="previewImageCard.image" :alt="previewImageCard.name" />
        </div>

        <div class="image-preview-content">
          <div class="image-preview-title">
            <span>{{ previewImageCard.icon }}</span>
            {{ previewImageCard.name }}
          </div>
          <div class="image-preview-meta">{{ previewImageCard.category }} · {{ previewImageCard.location }}</div>
          <div class="image-preview-desc">{{ previewImageCard.desc }}</div>
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
  color: string
  fillColor: string
  fillOpacity: number
  desc: string
  className: string
}

type TourismPointItem = {
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

type ImageCardItem = {
  name: string
  category: string
  image: string
  desc: string
  location: string
  icon: string
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

const centerLat = 6
const centerLng = 108
const zoomLevel = 4

const useGoogle = ref(false)
const showBoundaryLayer = ref(true)
const showIslandAreas = ref(true)
const showNatureSpots = ref(true)
const showCultureSpots = ref(true)
const showTourismCities = ref(true)
const showTourismRoutes = ref(true)
const activeTourism = ref('')
const activeMapInfo = ref<MapInfoItem | null>(null)
const previewImageCard = ref<ImageCardItem | null>(null)

const tourismVisualImageList: ImageCardItem[] = [
  {
    name: '热带海岛',
    category: '海岛风光',
    image: IMAGE_MAP['东南亚热带海岛']!,
    desc: '普吉岛、长滩岛、巴厘岛等地沙滩、海湾、潜水资源突出。',
    location: '东南亚 · 马来群岛与中南半岛沿海',
    icon: '🏝️',
  },
  {
    name: '生态景观',
    category: '火山雨林',
    image: IMAGE_MAP['东南亚生态景观']!,
    desc: '印尼火山、婆罗洲雨林和海洋生态体现热带自然特色。',
    location: '马来群岛 · 赤道附近',
    icon: '🌋',
  },
  {
    name: '宗教古迹',
    category: '文化遗产',
    image: IMAGE_MAP['东南亚宗教古迹']!,
    desc: '吴哥窟、婆罗浮屠、蒲甘古城展示多元宗教与古代文明。',
    location: '柬埔寨 · 印尼 · 缅甸',
    icon: '🛕',
  },
  {
    name: '国际门户',
    category: '门户城市',
    image: IMAGE_MAP['东南亚国际门户']!,
    desc: '曼谷、新加坡、吉隆坡等城市连接机场、港口和国际游客市场。',
    location: '曼谷 · 新加坡 · 吉隆坡',
    icon: '🏙️',
  },
]

const islandTourismImageList: ImageCardItem[] = [
  {
    name: '泰国南部海岛',
    category: '滨海度假',
    image: IMAGE_MAP['东南亚泰国南部海岛']!,
    desc: '普吉岛、苏梅岛等海岛依托热带气候、沙滩、海湾和潜水资源发展滨海度假旅游。',
    location: '泰国南部 · 安达曼海与泰国湾',
    icon: '🏝️',
  },
  {
    name: '印度尼西亚巴厘岛',
    category: '海岛文化',
    image: IMAGE_MAP['东南亚印度尼西亚巴厘岛']!,
    desc: '巴厘岛兼具海滩、火山、梯田和印度教文化，是自然风光与文化景观结合的典型地区。',
    location: '印度尼西亚 · 小巽他群岛',
    icon: '🌋',
  },
  {
    name: '菲律宾群岛',
    category: '海洋旅游',
    image: IMAGE_MAP['东南亚菲律宾群岛']!,
    desc: '长滩岛、宿务、巴拉望等地岛屿众多，海水清澈，适合海岛度假、潜水和海洋生态旅游。',
    location: '菲律宾 · 西太平洋群岛',
    icon: '🐠',
  },
  {
    name: '马来西亚海岛',
    category: '海岛雨林',
    image: IMAGE_MAP['东南亚马来西亚海岛']!,
    desc: '兰卡威、槟城、沙巴等地兼具海岛、雨林和城市文化，旅游资源类型较丰富。',
    location: '马来西亚 · 马来半岛与沙巴周边',
    icon: '🌴',
  },
]

const natureImageList: ImageCardItem[] = [
  {
    name: '热带雨林',
    category: '生态旅游',
    image: IMAGE_MAP['东南亚热带雨林']!,
    desc: '马来群岛和赤道附近雨林广布，生物多样性高，适合生态考察和自然教育。',
    location: '马来群岛 · 婆罗洲 · 赤道附近',
    icon: '🌴',
  },
  {
    name: '火山景观',
    category: '地貌景观',
    image: IMAGE_MAP['东南亚火山景观']!,
    desc: '印尼位于板块交界附近，火山众多，火山湖、火山口和火山地貌具有观赏价值。',
    location: '印度尼西亚 · 爪哇岛 · 巴厘岛',
    icon: '🌋',
  },
  {
    name: '河流与三角洲',
    category: '水域景观',
    image: IMAGE_MAP['东南亚河流与三角洲']!,
    desc: '湄公河、湄南河、红河等河流沿线形成水上市场、三角洲农业和河流文化旅游。',
    location: '中南半岛 · 湄公河 / 湄南河 / 红河',
    icon: '🏞️',
  },
  {
    name: '珊瑚与潜水',
    category: '海洋旅游',
    image: IMAGE_MAP['东南亚珊瑚与潜水']!,
    desc: '菲律宾、印尼、马来西亚部分海域有珊瑚礁和丰富海洋生物，适合潜水旅游。',
    location: '菲律宾 · 印度尼西亚 · 马来西亚海域',
    icon: '🐠',
  },
]

const heritageImageList: ImageCardItem[] = [
  {
    name: '吴哥窟',
    category: '文化遗产',
    image: IMAGE_MAP['东南亚吴哥窟']!,
    desc: '位于柬埔寨，是高棉文明的重要代表，宗教建筑和石刻艺术突出。',
    location: '柬埔寨 · 暹粒附近',
    icon: '🛕',
  },
  {
    name: '婆罗浮屠',
    category: '佛教遗迹',
    image: IMAGE_MAP['东南亚婆罗浮屠']!,
    desc: '位于印度尼西亚爪哇岛，是著名佛教建筑遗产，体现宗教文化影响。',
    location: '印度尼西亚 · 爪哇岛',
    icon: '🛕',
  },
  {
    name: '蒲甘古城',
    category: '佛塔遗产',
    image: IMAGE_MAP['东南亚蒲甘古城']!,
    desc: '位于缅甸，佛塔众多，反映东南亚佛教文化与古代城市景观。',
    location: '缅甸 · 伊洛瓦底江流域',
    icon: '🛕',
  },
  {
    name: '会安古城',
    category: '港口古城',
    image: IMAGE_MAP['东南亚会安古城']!,
    desc: '位于越南中部，融合港口贸易、华人文化和殖民建筑风格。',
    location: '越南 · 中部沿海',
    icon: '🏘️',
  },
]

const gatewayCityImageList: ImageCardItem[] = [
  {
    name: '曼谷',
    category: '旅游门户',
    image: IMAGE_MAP['东南亚曼谷']!,
    desc: '泰国首都，寺庙、王宫、水上市场和都市旅游资源丰富，是中南半岛重要旅游门户。',
    location: '泰国 · 湄南河下游',
    icon: '🏙️',
  },
  {
    name: '新加坡',
    category: '国际门户',
    image: IMAGE_MAP['东南亚新加坡']!,
    desc: '国际航空和海运枢纽，城市景观、主题乐园、会展旅游和多元文化特色明显。',
    location: '马六甲海峡东南端',
    icon: '✈️',
  },
  {
    name: '吉隆坡',
    category: '综合城市',
    image: IMAGE_MAP['东南亚吉隆坡']!,
    desc: '现代城市景观与多民族文化结合，联系马来半岛西海岸旅游城市带。',
    location: '马来西亚 · 马来半岛西部',
    icon: '🏙️',
  },
  {
    name: '雅加达',
    category: '群岛门户',
    image: IMAGE_MAP['东南亚雅加达']!,
    desc: '印度尼西亚重要门户城市，联系爪哇岛、巴厘岛和印尼群岛旅游网络，是群岛国家航空和城市旅游的重要节点。',
    location: '印度尼西亚 · 爪哇岛西北部',
    icon: '🌆',
  },
]

function openImagePreview(item: ImageCardItem) {
  previewImageCard.value = item
}

function closeImagePreview() {
  previewImageCard.value = null
}

const islandAreaLayer = L.layerGroup()
const natureSpotLayer = L.layerGroup()
const cultureSpotLayer = L.layerGroup()
const tourismCityLayer = L.layerGroup()
const tourismRouteLayer = L.layerGroup()

const boundaryLabels: DomLabel[] = []
const islandLabels: DomLabel[] = []
const natureLabels: DomLabel[] = []
const cultureLabels: DomLabel[] = []
const cityLabels: DomLabel[] = []
const routeLabels: DomLabel[] = []

const islandAreas: AreaItem[] = [
  {
    name: '泰国南部海岛旅游区',
    lat: 8.2,
    lng: 98.8,
    radius: 280000,
    color: '#0ea5e9',
    fillColor: '#38bdf8',
    fillOpacity: 0.16,
    desc: '以普吉岛、苏梅岛等为代表，海岛、沙滩、潜水和度假旅游资源丰富，体现泰国南部沿海和岛屿旅游开发优势。',
    className: 'island-label-dom',
  },
  {
    name: '马来半岛与新加坡旅游带',
    lat: 3.0,
    lng: 102.0,
    radius: 310000,
    color: '#0ea5e9',
    fillColor: '#38bdf8',
    fillOpacity: 0.14,
    desc: '兰卡威、槟城、吉隆坡、马六甲和新加坡联系紧密，兼具城市、海岛、港口、文化遗产和国际门户旅游功能。',
    className: 'island-label-dom',
  },
  {
    name: '巴厘岛及爪哇旅游区',
    lat: -7.7,
    lng: 113.2,
    radius: 470000,
    color: '#10b981',
    fillColor: '#34d399',
    fillOpacity: 0.14,
    desc: '巴厘岛海岛风光突出，爪哇岛拥有火山、婆罗浮屠等古迹和雅加达、泗水等城市旅游资源，是印尼旅游核心区之一。',
    className: 'island-label-dom',
  },
  {
    name: '菲律宾群岛旅游区',
    lat: 11.5,
    lng: 123.2,
    radius: 430000,
    color: '#0ea5e9',
    fillColor: '#38bdf8',
    fillOpacity: 0.14,
    desc: '长滩岛、宿务、巴拉望等地海岛旅游资源丰富，潜水、珊瑚、海湾和海洋生态特色明显，体现群岛国家旅游优势。',
    className: 'island-label-dom',
  },
  {
    name: '沙巴与婆罗洲生态旅游区',
    lat: 3.0,
    lng: 116.5,
    radius: 330000,
    color: '#047857',
    fillColor: '#22c55e',
    fillOpacity: 0.12,
    desc: '雨林、山地、海岛和海洋生态景观兼具，既有热带雨林和高山生态，也有潜水和海洋生态资源，是生态旅游的重要区域。',
    className: 'island-label-dom',
  },
]

const natureSpots: TourismPointItem[] = [
  {
    name: '普吉岛',
    icon: '🏝️',
    lat: 7.8804,
    lng: 98.3923,
    type: '海岛度假',
    desc: '泰国著名海岛旅游地，以海滩、海湾、潜水和度假设施著称，是东南亚滨海旅游和国际游客集中的代表地区。',
    color: '#075985',
    fillColor: '#38bdf8',
    className: 'nature-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '苏梅岛',
    icon: '🏖️',
    lat: 9.512,
    lng: 100.013,
    type: '海岛度假',
    desc: '泰国湾著名海岛，适合滨海休闲、潜水和海岛度假，说明泰国南部东西两侧海域都具有旅游开发价值。',
    color: '#075985',
    fillColor: '#38bdf8',
    className: 'nature-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴厘岛',
    icon: '🌋',
    lat: -8.3405,
    lng: 115.092,
    type: '海岛 / 火山 / 文化景观',
    desc: '印度尼西亚著名旅游岛，海岛风光、火山地貌、梯田和印度教文化融合，是自然景观与人文景观结合最典型的旅游地之一。',
    color: '#064e3b',
    fillColor: '#34d399',
    className: 'nature-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '长滩岛',
    icon: '🏝️',
    lat: 11.9674,
    lng: 121.9248,
    type: '海岛沙滩',
    desc: '菲律宾著名海岛，以白沙滩和滨海度假资源闻名，体现菲律宾群岛海岛旅游和海洋休闲特色。',
    color: '#075985',
    fillColor: '#38bdf8',
    className: 'nature-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '巴拉望',
    icon: '🐠',
    lat: 9.8349,
    lng: 118.7384,
    type: '海洋生态 / 潜水',
    desc: '菲律宾海洋生态旅游代表地区，海湾、珊瑚礁和岛屿景观丰富，适合联系海洋生态保护和旅游开发承载力。',
    color: '#075985',
    fillColor: '#38bdf8',
    className: 'nature-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '京那巴鲁山',
    icon: '⛰️',
    lat: 6.075,
    lng: 116.558,
    type: '山地 / 雨林生态',
    desc: '位于马来西亚沙巴，是婆罗洲著名山地和生态旅游资源，体现热带雨林、高山生态与海岛旅游的组合。',
    color: '#047857',
    fillColor: '#22c55e',
    className: 'nature-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '科莫多岛',
    icon: '🦎',
    lat: -8.55,
    lng: 119.45,
    type: '生态旅游',
    desc: '以科莫多巨蜥和海洋生态景观著名，体现独特生物多样性，是生态旅游和自然保护结合的典型案例。',
    color: '#047857',
    fillColor: '#22c55e',
    className: 'nature-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
]

const cultureSpots: TourismPointItem[] = [
  {
    name: '吴哥窟',
    icon: '🛕',
    lat: 13.4125,
    lng: 103.867,
    type: '世界遗产 / 高棉文明',
    desc: '柬埔寨代表性文化遗产，体现古代高棉文明和宗教建筑艺术，是东南亚宗教古迹和世界遗产旅游的重要代表。',
    color: '#854d0e',
    fillColor: '#facc15',
    className: 'culture-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '蒲甘古城',
    icon: '🛕',
    lat: 21.1717,
    lng: 94.8585,
    type: '佛教遗产',
    desc: '缅甸著名古城，佛塔众多，是佛教文化旅游的重要地点，也体现伊洛瓦底江流域古代城市和宗教景观。',
    color: '#854d0e',
    fillColor: '#facc15',
    className: 'culture-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '婆罗浮屠',
    icon: '🛕',
    lat: -7.6079,
    lng: 110.2038,
    type: '佛教遗产',
    desc: '印度尼西亚爪哇岛著名佛教建筑遗产，宗教文化价值突出，常与爪哇岛火山、城市和历史旅游资源联系分析。',
    color: '#854d0e',
    fillColor: '#facc15',
    className: 'culture-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '会安古城',
    icon: '🏘️',
    lat: 15.8801,
    lng: 108.338,
    type: '港口古城',
    desc: '越南中部历史港口城市，融合华人、日本和欧洲建筑文化，体现海上贸易带来的多元文化交流。',
    color: '#854d0e',
    fillColor: '#facc15',
    className: 'culture-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '琅勃拉邦',
    icon: '🛕',
    lat: 19.8834,
    lng: 102.1347,
    type: '古城 / 佛教文化',
    desc: '老挝著名古城，寺庙、传统街区和湄公河景观融合，体现内陆国家河流文化和佛教文化旅游特色。',
    color: '#854d0e',
    fillColor: '#facc15',
    className: 'culture-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '马六甲古城',
    icon: '🏛️',
    lat: 2.1896,
    lng: 102.2501,
    type: '港口贸易遗产',
    desc: '马来西亚历史港口城市，体现海上贸易、殖民建筑和多元文化交汇，是马六甲海峡沿岸人文旅游的重要节点。',
    color: '#854d0e',
    fillColor: '#facc15',
    className: 'culture-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
]

const tourismCities: TourismPointItem[] = [
  {
    name: '曼谷',
    icon: '✈️',
    lat: 13.7563,
    lng: 100.5018,
    type: '旅游门户城市',
    desc: '泰国首都，寺庙、王宫、水上市场和都市旅游资源丰富，同时是中南半岛航空、交通和国际游客集散门户。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '新加坡',
    icon: '✈️',
    lat: 1.3521,
    lng: 103.8198,
    type: '国际旅游与交通枢纽',
    desc: '位于马六甲海峡附近，城市景观、多元文化、主题乐园、会展旅游和国际交通枢纽优势明显。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '吉隆坡',
    icon: '🏙️',
    lat: 3.139,
    lng: 101.6869,
    type: '综合旅游城市',
    desc: '现代城市景观与多民族文化结合，联系马来半岛西海岸、马六甲海峡和周边海岛旅游，是马来西亚重要旅游门户。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '雅加达',
    icon: '🏙️',
    lat: -6.2088,
    lng: 106.8456,
    type: '群岛国家门户',
    desc: '印度尼西亚重要门户城市，联系爪哇岛、巴厘岛和印尼群岛旅游网络，是群岛国家航空和城市旅游的重要节点。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '马尼拉',
    icon: '🏙️',
    lat: 14.5995,
    lng: 120.9842,
    type: '菲律宾旅游门户',
    desc: '位于马尼拉湾，是菲律宾首都圈和群岛旅游的重要入口，联系吕宋岛和菲律宾中南部海岛旅游线路。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '胡志明市',
    icon: '🏙️',
    lat: 10.8231,
    lng: 106.6297,
    type: '越南南部旅游门户',
    desc: '联系湄公河三角洲、城市文化、战争历史景观和越南南部旅游线路，是越南南部重要门户城市。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
  {
    name: '河内',
    icon: '🏙️',
    lat: 21.0278,
    lng: 105.8342,
    type: '越南北部旅游门户',
    desc: '联系红河三角洲、下龙湾和越南北部历史文化旅游资源，是越南北部旅游门户和文化中心。',
    color: '#7c2d12',
    fillColor: '#f97316',
    className: 'city-label-dom',
    offsetX: 10,
    offsetY: -2,
  },
]

const tourismRoutes: LineItem[] = [
  {
    name: '海岛度假线路',
    path: [
      [1.35, 103.82],
      [3.0, 101.6],
      [6.0, 99.5],
      [8.0, 98.4],
      [9.5, 100.0],
    ],
    desc: '新加坡、马来半岛西海岸和泰国南部海岛联系紧密，体现海峡港口、沿海城市和海岛度假资源之间的旅游线路组合。',
    color: '#0ea5e9',
    dashArray: '8 6',
    weight: 3,
    className: 'route-label-dom',
    arrowSize: 1.1,
  },
  {
    name: '群岛旅游线路',
    path: [
      [1.35, 103.82],
      [-3.0, 107.0],
      [-6.2, 106.8],
      [-7.6, 110.2],
      [-8.3, 115.1],
    ],
    desc: '从新加坡、雅加达到爪哇和巴厘岛的旅游联系，体现群岛国家依靠航空、港口和跨岛交通组织旅游线路的特点。',
    color: '#10b981',
    dashArray: '8 6',
    weight: 3,
    className: 'route-label-dom',
    arrowSize: 1.1,
  },
  {
    name: '文化遗产线路',
    path: [
      [13.75, 100.5],
      [13.41, 103.87],
      [15.88, 108.34],
      [19.88, 102.13],
      [21.17, 94.86],
    ],
    desc: '曼谷、吴哥窟、会安、琅勃拉邦、蒲甘等人文旅游资源联系明显，体现中南半岛佛教文化、古都遗产和历史港口旅游线路。',
    color: '#f97316',
    dashArray: '8 6',
    weight: 3,
    className: 'route-label-dom',
    arrowSize: 1.1,
  },
  {
    name: '菲律宾海岛线路',
    path: [
      [14.6, 120.98],
      [12.0, 121.9],
      [10.3, 123.9],
      [9.8, 118.7],
      [7.2, 125.4],
    ],
    desc: '马尼拉、长滩岛、宿务、巴拉望和达沃等地体现菲律宾群岛旅游网络，适合理解岛屿分散地区依靠航空和海运连接旅游目的地。',
    color: '#0ea5e9',
    dashArray: '8 6',
    weight: 3,
    className: 'route-label-dom',
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
  if (showIslandAreas.value) islandLabels.forEach(updateOneLabelPosition)
  if (showNatureSpots.value) natureLabels.forEach(updateOneLabelPosition)
  if (showCultureSpots.value) cultureLabels.forEach(updateOneLabelPosition)
  if (showTourismCities.value) cityLabels.forEach(updateOneLabelPosition)
  if (showTourismRoutes.value) routeLabels.forEach(updateOneLabelPosition)
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
  if (item.name.includes('海岛')) return '海岛风光区'
  if (item.name.includes('生态')) return '生态旅游区'
  if (item.name.includes('爪哇') || item.name.includes('巴厘')) return '复合旅游区'
  return '旅游资源范围'
}

function bindInfoPopup(layer: L.Layer, title: string, desc: string, type = '旅游资源') {
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
          fillOpacity: props.fillOpacity ?? 0.12,
        }
      },
      onEachFeature: (feature, layer) => {
        const props = feature?.properties || {}
        const name = props.name || props.NAME || props.Name || '东南亚国家'
        const desc = props.desc || props.description || '东南亚国家轮廓范围，可与旅游资源分布进行对照。'

        bindInfoPopup(layer, name, desc, '国家轮廓')
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

function addPointLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], points: TourismPointItem[]) {
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

    bindInfoPopup(marker, `${item.icon} ${item.name}`, item.desc, item.type)

    marker.on('click', () => {
      activeTourism.value = item.name
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

function addLineLayer(targetLayer: L.LayerGroup, targetLabels: DomLabel[], lines: LineItem[]) {
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

    bindInfoPopup(line, item.name, item.desc, '旅游交通线路')

    const arrowHeadPoints = getArrowHeadPoints(item.path, item.arrowSize || 1.2)

    if (arrowHeadPoints.length) {
      const arrow = L.polygon(arrowHeadPoints, {
        color: item.color,
        weight: 1,
        fillColor: item.color,
        fillOpacity: 0.9,
        opacity: 0.9,
      }).addTo(targetLayer)

      bindInfoPopup(arrow, item.name, item.desc, '旅游交通线路')
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
  ;[...natureLabels, ...cultureLabels, ...cityLabels].forEach(label => {
    const name = label.el.dataset.name

    if (name && name === activeTourism.value) {
      label.el.classList.add('active')
    } else {
      label.el.classList.remove('active')
    }
  })
}

function refreshMapLayers() {
  if (!map) return

  if (showIslandAreas.value) {
    addAreaLayer(islandAreaLayer, islandLabels, islandAreas)
  } else {
    islandAreaLayer.clearLayers()
    clearDomLabels(islandLabels)
  }

  if (showNatureSpots.value) {
    addPointLayer(natureSpotLayer, natureLabels, natureSpots)
  } else {
    natureSpotLayer.clearLayers()
    clearDomLabels(natureLabels)
  }

  if (showCultureSpots.value) {
    addPointLayer(cultureSpotLayer, cultureLabels, cultureSpots)
  } else {
    cultureSpotLayer.clearLayers()
    clearDomLabels(cultureLabels)
  }

  if (showTourismCities.value) {
    addPointLayer(tourismCityLayer, cityLabels, tourismCities)
  } else {
    tourismCityLayer.clearLayers()
    clearDomLabels(cityLabels)
  }

  if (showTourismRoutes.value) {
    addLineLayer(tourismRouteLayer, routeLabels, tourismRoutes)
  } else {
    tourismRouteLayer.clearLayers()
    clearDomLabels(routeLabels)
  }

  scheduleUpdateLabels()
}

function cleanupMapLayers() {
  if (!map) return

  clearBoundaryLayer()

  islandAreaLayer.clearLayers()
  natureSpotLayer.clearLayers()
  cultureSpotLayer.clearLayers()
  tourismCityLayer.clearLayers()
  tourismRouteLayer.clearLayers()

  if (map.hasLayer(islandAreaLayer)) islandAreaLayer.removeFrom(map)
  if (map.hasLayer(natureSpotLayer)) natureSpotLayer.removeFrom(map)
  if (map.hasLayer(cultureSpotLayer)) cultureSpotLayer.removeFrom(map)
  if (map.hasLayer(tourismCityLayer)) tourismCityLayer.removeFrom(map)
  if (map.hasLayer(tourismRouteLayer)) tourismRouteLayer.removeFrom(map)

  clearDomLabels(boundaryLabels)
  clearDomLabels(islandLabels)
  clearDomLabels(natureLabels)
  clearDomLabels(cultureLabels)
  clearDomLabels(cityLabels)
  clearDomLabels(routeLabels)
}

onMounted(async () => {
  map = L.map('southeastAsiaTourismMap', {
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
.tourism-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.tourism-header {
  margin-bottom: 32px;
}

.tourism-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.tourism-content-left {
  width: 38%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.tourism-content-right {
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

.tourism-card {
  border-radius: 8px;
  border: 1px solid rgba(15, 143, 179, 0.26);
  padding: 14px;
}

.tourism-card-01 {
  background: #ecfeff;
  border-color: rgba(15, 143, 179, 0.35);
}

.tourism-card-02 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.tourism-card-03 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.tourism-card-04 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.tourism-card-05 {
  background: #f7fbfd;
  border-color: #cee3ed;
}

.tourism-card-06 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.tourism-card-07 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.tourism-card-08 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.tourism-card-09 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.tourism-card-10 {
  background: #fefce8;
  border-color: #fde68a;
}

.tourism-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-color, #0f8fb3);
}

.tourism-card-04 .tourism-card-header {
  color: #9a3412;
}

.tourism-card-05 .tourism-card-header {
  color: #0369a1;
}

.tourism-card-07 .tourism-card-header {
  color: #9a3412;
}

.tourism-card-08 .tourism-card-header {
  color: #0f766e;
}

.tourism-card-09 .tourism-card-header {
  color: #334155;
}

.tourism-card-10 .tourism-card-header {
  color: #854d0e;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color, #0f8fb3);
}

.tourism-card-04 .iconfont {
  color: #9a3412;
}

.tourism-card-05 .iconfont {
  color: #0369a1;
}

.tourism-card-07 .iconfont {
  color: #9a3412;
}

.tourism-card-08 .iconfont {
  color: #0f766e;
}

.tourism-card-09 .iconfont {
  color: #334155;
}

.tourism-card-10 .iconfont {
  color: #854d0e;
}

.mb-8 {
  margin-bottom: 8px;
}

.tourism-card p {
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

.nature-grid,
.heritage-grid,
.city-type-grid,
.protect-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.nature-card,
.heritage-card,
.city-type-card,
.protect-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid rgba(15, 143, 179, 0.18);
}

.nature-icon {
  font-size: 24px;
  margin-bottom: 4px;
}

.nature-title,
.heritage-title,
.city-type-title,
.protect-title {
  font-weight: bold;
  margin-bottom: 4px;
  color: var(--primary-color, #0f8fb3);
}

.nature-card.rainforest .nature-title {
  color: #047857;
}

.nature-card.volcano .nature-title {
  color: #c2410c;
}

.nature-card.river .nature-title {
  color: #0369a1;
}

.nature-card.island .nature-title {
  color: #0f8fb3;
}

.nature-desc,
.heritage-desc,
.city-type-desc,
.protect-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
}

.culture-list {
  display: grid;
  gap: 8px;
}

.culture-item {
  display: grid;
  grid-template-columns: 76px 1fr;
  gap: 8px;
  align-items: start;
  background: #fff;
  border-radius: 8px;
  padding: 9px 10px;
  border: 1px solid rgba(14, 165, 233, 0.22);
}

.culture-item span {
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

.culture-item p {
  margin: 0;
  color: #475569;
  font-size: 13px;
  line-height: 1.45;
}

.culture-note {
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

.sea-fill {
  width: 94%;
  background: #0ea5e9;
}

.route-fill {
  width: 90%;
  background: var(--primary-color, #0f8fb3);
}

.air-fill {
  width: 86%;
  background: #f97316;
}

.culture-fill {
  width: 88%;
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

.read-map-box {
  padding: 9px 10px;
  background: #fff;
  border-radius: 8px;
  border-left: 3px solid #14b8a6;
}

.read-map-title {
  font-weight: bold;
  color: #0f766e;
  margin-bottom: 6px;
}

.read-map-box ol {
  margin: 0;
  padding-left: 18px;
  color: #475569;
  font-size: 12px;
  line-height: 1.55;
}

.read-map-box li {
  margin-bottom: 4px;
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

.island-area {
  background: rgba(56, 189, 248, 0.22);
  border: 1px solid #0ea5e9;
}

.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.nature-dot {
  background: #34d399;
  border: 2px solid #064e3b;
  box-sizing: border-box;
}

.culture-dot {
  background: #facc15;
  border: 2px solid #854d0e;
  box-sizing: border-box;
}

.city-dot {
  background: #f97316;
  border: 2px solid #7c2d12;
  box-sizing: border-box;
}

.legend-arrow {
  width: 30px;
  height: 10px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  color: #0ea5e9;
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

:deep(.boundary-label-dom),
:deep(.island-label-dom),
:deep(.nature-label-dom),
:deep(.culture-label-dom),
:deep(.city-label-dom),
:deep(.route-label-dom) {
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
:deep(.island-label-dom),
:deep(.route-label-dom) {
  transform: translate(-50%, -50%);
}

:deep(.nature-label-dom),
:deep(.culture-label-dom),
:deep(.city-label-dom) {
  transform: translate(0, -50%);
}

:deep(.boundary-label-dom) {
  background: rgba(4, 120, 87, 0.86);
}

:deep(.island-label-dom) {
  background: rgba(3, 105, 161, 0.86);
}

:deep(.nature-label-dom) {
  background: rgba(4, 120, 87, 0.9);
}

:deep(.culture-label-dom) {
  background: rgba(180, 83, 9, 0.9);
}

:deep(.city-label-dom) {
  background: rgba(194, 65, 12, 0.9);
}

:deep(.route-label-dom) {
  background: rgba(14, 116, 144, 0.86);
}

:deep(.nature-label-dom.active),
:deep(.culture-label-dom.active),
:deep(.city-label-dom.active) {
  background: var(--primary-color, #0f8fb3);
  color: #fff;
  font-size: 13px;
}

.tourism-card-visual {
  background: #f8fbff;
  border-color: rgba(14, 165, 233, 0.26);
}

.tourism-card-visual .tourism-card-header {
  color: #0369a1;
}

.tourism-card-visual .iconfont {
  color: #0369a1;
}

.tourism-visual-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.tourism-visual-card {
  overflow: hidden;
  border-radius: 10px;
  background: #fff;
  border: 1px solid rgba(15, 143, 179, 0.18);
  box-shadow: 0 1px 4px rgba(15, 39, 72, 0.08);
}

.tourism-visual-thumb {
  position: relative;
  height: 78px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scene-ocean .tourism-visual-thumb {
  background:
    radial-gradient(circle at 78% 18%, rgba(255, 255, 255, 0.9), transparent 18%), linear-gradient(135deg, #7dd3fc 0%, #22d3ee 45%, #14b8a6 100%);
}

.scene-rainforest .tourism-visual-thumb {
  background:
    radial-gradient(circle at 25% 20%, rgba(255, 255, 255, 0.45), transparent 18%), linear-gradient(135deg, #86efac 0%, #16a34a 48%, #0f766e 100%);
}

.scene-heritage .tourism-visual-thumb {
  background:
    radial-gradient(circle at 75% 20%, rgba(255, 255, 255, 0.45), transparent 18%), linear-gradient(135deg, #fde68a 0%, #f59e0b 52%, #92400e 100%);
}

.scene-city .tourism-visual-thumb {
  background:
    radial-gradient(circle at 80% 18%, rgba(255, 255, 255, 0.55), transparent 18%), linear-gradient(135deg, #bfdbfe 0%, #38bdf8 42%, #1d4ed8 100%);
}

.scene-icon {
  font-size: 34px;
  filter: drop-shadow(0 4px 8px rgba(15, 23, 42, 0.22));
}

.scene-tag {
  position: absolute;
  left: 8px;
  bottom: 8px;
  padding: 2px 7px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.62);
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

.tourism-visual-info {
  padding: 8px 9px 10px;
}

.visual-title {
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 4px;
}

.visual-desc {
  font-size: 12px;
  line-height: 1.45;
  color: #475569;
}

:deep(.leaflet-popup-pane) {
  z-index: 1400 !important;
}

:deep(.leaflet-tooltip-pane) {
  z-index: 1300 !important;
}

:deep(.leaflet-popup) {
  z-index: 1401 !important;
}

:deep(.leaflet-popup-content-wrapper) {
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.22);
}

.tourism-card-image {
  background: #f8fbff;
  border-color: rgba(14, 165, 233, 0.28);
}

.tourism-card-image .tourism-card-header {
  color: #0369a1;
}

.tourism-card-image .iconfont {
  color: #0369a1;
}

.resource-image-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.resource-image-card {
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

.resource-image-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary-color, #0f8fb3);
  box-shadow: 0 6px 16px rgba(15, 39, 72, 0.14);
}

.resource-image-wrap {
  position: relative;
  height: 92px;
  overflow: hidden;
  background: #ecfeff;
}

.resource-image-wrap img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.resource-image-category {
  position: absolute;
  left: 8px;
  bottom: 8px;
  padding: 2px 7px;
  border-radius: 999px;
  background: rgba(3, 105, 161, 0.88);
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

.resource-image-icon {
  position: absolute;
  right: 8px;
  top: 8px;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.16);
}

.resource-image-info {
  padding: 8px 9px 10px;
}

.resource-image-title {
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 3px;
}

.resource-image-location {
  color: #0369a1;
  font-size: 11px;
  margin-bottom: 4px;
}

.resource-image-desc {
  color: #475569;
  font-size: 12px;
  line-height: 1.45;
}

.resource-image-tip {
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  background: #fff;
  color: #64748b;
  font-size: 12px;
  line-height: 1.45;
  border-left: 3px solid var(--primary-color, #0f8fb3);
}

.image-preview-mask {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  background: rgba(0, 0, 0, 0.62);
}

.image-preview-panel {
  position: relative;
  width: min(900px, 90vw);
  max-height: 88vh;
  overflow: hidden;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.36);
}

.image-preview-close {
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

.image-preview-img {
  max-height: 62vh;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-preview-img img {
  display: block;
  max-width: 100%;
  max-height: 62vh;
  object-fit: contain;
}

.image-preview-content {
  padding: 14px 18px 16px;
}

.image-preview-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 18px;
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 4px;
}

.image-preview-meta {
  color: #0369a1;
  font-size: 12px;
  margin-bottom: 6px;
}

.image-preview-desc {
  color: #475569;
  font-size: 13px;
  line-height: 1.65;
}

.section-image-card {
  width: 100%;
  padding: 0;
  overflow: hidden;
  text-align: left;
  background: #fff;
  border: 1px solid rgba(15, 143, 179, 0.18);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(15, 39, 72, 0.08);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.section-image-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary-color, #0f8fb3);
  box-shadow: 0 6px 16px rgba(15, 39, 72, 0.14);
}

.section-image-wrap {
  position: relative;
  height: 92px;
  overflow: hidden;
  background: #ecfeff;
}

.section-image-wrap img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.section-image-category {
  position: absolute;
  left: 8px;
  bottom: 8px;
  padding: 2px 7px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.66);
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

.section-image-icon {
  position: absolute;
  right: 8px;
  top: 8px;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.16);
}

.section-image-info {
  padding: 8px 9px 10px;
}

.section-image-location {
  color: #0369a1;
  font-size: 11px;
  margin-bottom: 4px;
}

.island-image-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.island-section-card .section-image-category {
  background: rgba(14, 116, 144, 0.88);
}

.section-image-tip {
  margin-top: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  background: #fff;
  color: #64748b;
  font-size: 12px;
  line-height: 1.45;
  border-left: 3px solid var(--primary-color, #0f8fb3);
}

.tourism-visual-image-card {
  width: 100%;
  padding: 0;
  text-align: left;
  cursor: pointer;
  font: inherit;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.tourism-visual-image-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary-color, #0f8fb3);
  box-shadow: 0 6px 16px rgba(15, 39, 72, 0.14);
}

.tourism-visual-image-card .tourism-visual-thumb {
  height: 92px;
  background: #ecfeff;
}

.tourism-visual-image-card .tourism-visual-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tourism-visual-image-card .scene-icon {
  position: absolute;
  right: 8px;
  top: 8px;
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.16);
}

.tourism-visual-image-card .scene-tag {
  position: absolute;
  left: 8px;
  bottom: 8px;
  padding: 2px 7px;
  border-radius: 999px;
  background: rgba(3, 105, 161, 0.88);
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

.tourism-card-11 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.tourism-card-12 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.tourism-card-13 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.tourism-card-14 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.tourism-card-11 .tourism-card-header {
  color: #0f766e;
}

.tourism-card-12 .tourism-card-header {
  color: #334155;
}

.tourism-card-13 .tourism-card-header {
  color: #0369a1;
}

.tourism-card-14 .tourism-card-header {
  color: #c2410c;
}

.tourism-card-11 .iconfont {
  color: #0f766e;
}

.tourism-card-12 .iconfont {
  color: #334155;
}

.tourism-card-13 .iconfont {
  color: #0369a1;
}

.tourism-card-14 .iconfont {
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
