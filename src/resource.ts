import geojson01 from '@/assets/geojson/东南亚国家轮廓线.geojson?raw'
import geojson02 from '@/assets/geojson/东南亚河流分布.geojson?raw'
import geojson03 from '@/assets/geojson/东南亚轮廓线.geojson?raw'
import geojson04 from '@/assets/geojson/东南亚七月降水量分布.geojson?raw'
import geojson05 from '@/assets/geojson/东南亚气候类型.geojson?raw'
import geojson06 from '@/assets/geojson/东南亚马六甲海峡世界航线.geojson?raw'
import geojson07 from '@/assets/geojson/东南亚泛亚铁路东线.geojson?raw'
import geojson08 from '@/assets/geojson/东南亚泛亚铁路西线.geojson?raw'
import geojson09 from '@/assets/geojson/东南亚泛亚铁路中线.geojson?raw'
import geojson10 from '@/assets/geojson/全球六大板块分界线.geojson?raw'

export const TILE_SRC_PREFIX = import.meta.env.VITE_APP_ONLINE == '1' ? 'https://zdys.szjx.ai-study.net/geo-resources-folder/tiles' : './tiles'

// 路径区分：开发读src/assets，生产读public
const getImageUrl = (fileName: string) => {
  if (import.meta.env.DEV) {
    return '/image/' + fileName
  } else {
    return `./image/${fileName}`
  }
}

export const GEOJSON_MAP: Record<string, GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>> = {
  东南亚国家轮廓线: JSON.parse(geojson01),
  东南亚河流分布: JSON.parse(geojson02),
  东南亚轮廓线: JSON.parse(geojson03),
  东南亚七月降水量分布: JSON.parse(geojson04),
  东南亚气候类型: JSON.parse(geojson05),
  东南亚马六甲海峡世界航线: JSON.parse(geojson06),
  东南亚泛亚铁路东线: JSON.parse(geojson07),
  东南亚泛亚铁路西线: JSON.parse(geojson08),
  东南亚泛亚铁路中线: JSON.parse(geojson09),
  全球六大板块分界线: JSON.parse(geojson10),
}

export const IMAGE_MAP: Record<string, string> = {
  东南亚封面: getImageUrl('东南亚封面.png'),
  东南亚天然橡胶: getImageUrl('东南亚天然橡胶.png'),
  东南亚油棕: getImageUrl('东南亚油棕.png'),
  东南亚椰子: getImageUrl('东南亚椰子.png'),
  东南亚蕉麻: getImageUrl('东南亚蕉麻.png'),

  东南亚热带海岛: getImageUrl('东南亚热带海岛.png'),
  东南亚国际门户: getImageUrl('东南亚国际门户.png'),
  东南亚生态景观: getImageUrl('东南亚生态景观.png'),
  东南亚宗教古迹: getImageUrl('东南亚宗教古迹.png'),

  东南亚泰国南部海岛: getImageUrl('东南亚泰国南部海岛.png'),
  东南亚印度尼西亚巴厘岛: getImageUrl('东南亚印度尼西亚巴厘岛.png'),
  东南亚菲律宾群岛: getImageUrl('东南亚菲律宾群岛.png'),
  东南亚马来西亚海岛: getImageUrl('东南亚马来西亚海岛.png'),

  东南亚热带雨林: getImageUrl('东南亚热带雨林.png'),
  东南亚火山景观: getImageUrl('东南亚火山景观.png'),
  东南亚河流与三角洲: getImageUrl('东南亚河流与三角洲.png'),
  东南亚珊瑚与潜水: getImageUrl('东南亚珊瑚与潜水.png'),

  东南亚会安古城: getImageUrl('东南亚会安古城.png'),
  东南亚蒲甘古城: getImageUrl('东南亚蒲甘古城.png'),
  东南亚吴哥窟: getImageUrl('东南亚吴哥窟.png'),
  东南亚婆罗浮屠: getImageUrl('东南亚婆罗浮屠.png'),

  东南亚曼谷: getImageUrl('东南亚曼谷.png'),
  东南亚吉隆坡: getImageUrl('东南亚吉隆坡.png'),
  东南亚新加坡: getImageUrl('东南亚新加坡.png'),
  东南亚雅加达: getImageUrl('东南亚雅加达.png'),
}

export const TILE_MAP: Record<string, string> = {
  google: `${TILE_SRC_PREFIX}/google-tiles/{z}/{x}/{y}.png`,
  osm: `${TILE_SRC_PREFIX}/osm-tiles/{z}/{x}/{y}.png`,
  otm: `${TILE_SRC_PREFIX}/otm-tiles/{z}/{x}/{y}.png`,
  night: `${TILE_SRC_PREFIX}/night-light-tiles/{z}/{x}/{y}.png`,
  population: `${TILE_SRC_PREFIX}/population-tiles/{z}/{x}/{y}.png`,
}
