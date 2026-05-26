<template>
  <div class="cover-container">
    <div class="cover-overlay"></div>

    <div class="cover-content">
      <div class="cover-kicker">
        <span class="kicker-dot"></span>
        初中地理 · 七年级下册 · 区域地理专题
      </div>

      <div class="cover-main">
        <div class="title-line"></div>

        <div>
          <h1 class="cover-title">东南亚</h1>
          <p class="cover-subtitle">Southeast Asia</p>
        </div>
      </div>

      <p class="cover-desc">从“东方十字路口”的位置出发，认识中南半岛与马来群岛， 理解热带气候、水稻农业、马六甲海峡、城市人口分布与区域合作。</p>

      <div class="cover-tag">
        <span>位置与范围</span>
        <span>中南半岛</span>
        <span>马来群岛</span>
        <span>热带气候</span>
        <span>水稻农业</span>
        <span>热带作物</span>
        <span>马六甲海峡</span>
        <span>城市人口</span>
        <span>旅游资源</span>
        <span>东盟合作</span>
      </div>

      <div class="cover-info">
        <div class="info-card">
          <div class="info-value">两洲</div>
          <div class="info-label">位于亚洲与大洋洲之间</div>
        </div>

        <div class="info-card">
          <div class="info-value">两洋</div>
          <div class="info-label">连接太平洋与印度洋</div>
        </div>

        <div class="info-card">
          <div class="info-value">湿热</div>
          <div class="info-label">热带气候广布，全年高温</div>
        </div>

        <div class="info-card">
          <div class="info-value">通道</div>
          <div class="info-label">马六甲海峡交通地位突出</div>
        </div>
      </div>

      <div class="cover-bottom">
        <span>区域认知 · 综合思维 · 人地协调观</span>
        <span>Geography Courseware</span>
      </div>
    </div>

    <div class="decor-map-card">
      <div class="decor-title">SOUTHEAST ASIA</div>
      <div class="decor-line"></div>
      <div class="decor-list">
        <span>China Sea</span>
        <span>Malacca Strait</span>
        <span>Indian Ocean</span>
      </div>
    </div>

    <div class="decor-circle decor-circle-01"></div>
    <div class="decor-circle decor-circle-02"></div>
    <div class="decor-circle decor-circle-03"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.cover-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: clamp(28px, 4.2vw, 56px);
  background:
    linear-gradient(135deg, rgba(6, 78, 59, 0.92), rgba(15, 118, 110, 0.7)),
    url('https://course-code.oss-cn-shanghai.aliyuncs.com/image/东南亚封面.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.cover-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 76% 28%, rgba(45, 212, 191, 0.28), transparent 30%),
    radial-gradient(circle at 16% 78%, rgba(16, 185, 129, 0.24), transparent 32%),
    linear-gradient(90deg, rgba(5, 46, 22, 0.92) 0%, rgba(6, 78, 59, 0.78) 42%, rgba(15, 118, 110, 0.42) 72%, rgba(15, 118, 110, 0.18) 100%);
  z-index: 1;
}

.cover-content {
  position: relative;
  z-index: 3;
  max-width: min(1020px, 76%);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(-2%);
}

.cover-kicker {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
  padding: 7px 14px;
  margin-bottom: clamp(16px, 2.2vw, 28px);
  border-radius: 999px;
  color: #d1fae5;
  background: rgba(255, 255, 255, 0.13);
  border: 1px solid rgba(209, 250, 229, 0.28);
  font-size: clamp(12px, 0.9vw, 15px);
  font-weight: 800;
  letter-spacing: 0.08em;
  backdrop-filter: blur(8px);
}

.kicker-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 12px rgba(52, 211, 153, 0.9);
}

.cover-main {
  display: flex;
  align-items: center;
  gap: clamp(12px, 1.5vw, 18px);
  margin-bottom: clamp(10px, 1.4vw, 16px);
}

.title-line {
  width: 7px;
  height: clamp(62px, 7.4vw, 108px);
  border-radius: 999px;
  background: linear-gradient(to bottom, #6ee7b7, var(--primary-color));
  box-shadow: 0 0 18px rgba(16, 185, 129, 0.5);
  flex-shrink: 0;
}

.cover-title {
  margin: 0;
  color: #fff;
  font-size: clamp(56px, 7vw, 108px);
  line-height: 0.95;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-shadow:
    0 4px 18px rgba(0, 0, 0, 0.55),
    0 0 2px rgba(255, 255, 255, 0.45);
}

.cover-subtitle {
  margin: clamp(6px, 0.8vw, 10px) 0 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(15px, 1.3vw, 22px);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.cover-desc {
  max-width: 920px;
  margin: 0 0 clamp(14px, 1.8vw, 22px);
  color: rgba(255, 255, 255, 0.93);
  font-size: clamp(15px, 1.42vw, 23px);
  line-height: 1.5;
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
}

.cover-tag {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(7px, 0.8vw, 10px);
  max-width: 900px;
  margin-bottom: clamp(16px, 2vw, 24px);

  > span {
    display: inline-flex;
    align-items: center;
    min-height: clamp(28px, 2.4vw, 34px);
    padding: 0 clamp(10px, 1vw, 13px);
    border-radius: 999px;
    color: #fff;
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.26);
    font-size: clamp(12px, 0.95vw, 14px);
    font-weight: 800;
    letter-spacing: 0.02em;
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  }
}

.cover-info {
  display: grid;
  grid-template-columns: repeat(4, minmax(112px, 1fr));
  gap: clamp(8px, 1vw, 12px);
  max-width: 900px;
}

.info-card {
  padding: clamp(9px, 1vw, 12px) clamp(10px, 1.1vw, 14px);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.13);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
}

.info-value {
  color: #a7f3d0;
  font-size: clamp(18px, 1.8vw, 28px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
}

.info-label {
  color: rgba(255, 255, 255, 0.86);
  font-size: clamp(11px, 0.86vw, 12px);
  line-height: 1.42;
  font-weight: 600;
}

.cover-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: min(900px, 100%);
  margin-top: clamp(14px, 1.8vw, 24px);
  padding-top: clamp(10px, 1vw, 14px);
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.76);
  font-size: clamp(11px, 0.9vw, 13px);
  font-weight: 700;
  letter-spacing: 0.05em;
}

.decor-map-card {
  position: absolute;
  z-index: 2;
  right: clamp(28px, 4vw, 68px);
  bottom: clamp(34px, 4vw, 72px);
  width: clamp(220px, 23vw, 360px);
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(209, 250, 229, 0.28);
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.22);
}

.decor-title {
  color: rgba(255, 255, 255, 0.88);
  font-size: clamp(15px, 1.4vw, 22px);
  font-weight: 900;
  letter-spacing: 0.12em;
}

.decor-line {
  height: 3px;
  width: 72px;
  margin: 12px 0;
  border-radius: 999px;
  background: linear-gradient(to right, #6ee7b7, var(--primary-color));
}

.decor-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 12px;
  font-weight: 700;
}

.decor-circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(167, 243, 208, 0.28);
  z-index: 2;
}

.decor-circle-01 {
  width: 260px;
  height: 260px;
  right: 8%;
  top: 12%;
}

.decor-circle-02 {
  width: 160px;
  height: 160px;
  right: 22%;
  top: 42%;
}

.decor-circle-03 {
  width: 90px;
  height: 90px;
  right: 4%;
  bottom: 22%;
}

@media (max-width: 980px) {
  .cover-content {
    max-width: 100%;
  }

  .cover-info {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }

  .cover-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .decor-map-card {
    display: none;
  }
}

@media (max-height: 720px) {
  .cover-container {
    padding: 28px 42px;
  }

  .cover-content {
    justify-content: flex-start;
    padding-top: 12px;
    transform: none;
  }

  .cover-kicker {
    margin-bottom: 14px;
    padding: 6px 12px;
  }

  .cover-title {
    font-size: clamp(46px, 6vw, 82px);
  }

  .title-line {
    height: clamp(58px, 6.5vw, 86px);
  }

  .cover-desc {
    font-size: clamp(14px, 1.25vw, 18px);
    line-height: 1.45;
    margin-bottom: 12px;
  }

  .cover-tag {
    gap: 6px;
    margin-bottom: 14px;

    > span {
      min-height: 28px;
      font-size: 12px;
      padding: 0 10px;
    }
  }

  .info-card {
    padding: 8px 10px;
  }

  .info-value {
    font-size: 18px;
    margin-bottom: 3px;
  }

  .info-label {
    font-size: 11px;
    line-height: 1.32;
  }

  .cover-bottom {
    margin-top: 12px;
    padding-top: 10px;
  }
}

@media (max-height: 600px) {
  .cover-tag > span:nth-child(n + 7) {
    display: none;
  }

  .cover-info {
    grid-template-columns: repeat(4, minmax(92px, 1fr));
  }

  .cover-bottom {
    margin-top: 10px;
  }
}
</style>
