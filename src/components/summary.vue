<template>
  <div class="summary-container">
    <div class="summary-header module-header">
      <span>{{ current.index < 10 ? `0${current.index}` : current.index }}</span>
      <span>{{ current.title }}：</span>
      <span>“{{ current.desc }}”</span>
    </div>

    <div class="summary-content">
      <div class="summary-left">
        <div class="summary-card summary-card-01">
          <div class="summary-card-header">
            <i class="iconfont icon-zuzhijiegou"></i>
            东南亚区域特征总览
          </div>

          <p>
            学习东南亚，要从
            <strong
              >地理位置、区域组成、地形河流、气候特征、农业生产、交通要道、工业与交通、人口城市、旅游资源、区域合作、生态保护与可持续发展</strong
            >
            等角度综合分析。东南亚既是热带自然环境典型区域，也是世界海陆交通、工业产业转移、中国—东盟合作和生态保护议题都很突出的区域。
          </p>

          <div class="core-grid">
            <div class="core-box">
              <div class="core-title">位置范围</div>
              <div class="core-value">两洲两洋之间</div>
              <div class="core-desc">位于亚洲东南部，联系亚洲与大洋洲，沟通太平洋与印度洋，海陆交通位置突出。</div>
            </div>

            <div class="core-box">
              <div class="core-title">区域组成</div>
              <div class="core-value">中南半岛 + 马来群岛</div>
              <div class="core-desc">中南半岛山河相间、纵列分布；马来群岛岛屿众多，火山和海岛景观突出。</div>
            </div>

            <div class="core-box">
              <div class="core-title">气候农业</div>
              <div class="core-value">热带气候，水热充足</div>
              <div class="core-desc">以热带季风气候和热带雨林气候为主，适宜水稻和热带经济作物生长。</div>
            </div>

            <div class="core-box">
              <div class="core-title">人文发展</div>
              <div class="core-value">沿河沿海，联系增强</div>
              <div class="core-desc">人口城市多集中于河流平原、三角洲和沿海港口，中国与东盟合作不断深化。</div>
            </div>

            <div class="core-box">
              <div class="core-title">工业交通</div>
              <div class="core-value">沿港沿线，陆海联运</div>
              <div class="core-desc">工业多沿海、沿港、沿城市和交通干线分布，泛亚铁路加强中国与中南半岛陆路联系。</div>
            </div>

            <div class="core-box core-box-wide">
              <div class="core-title">可持续发展</div>
              <div class="core-value">开发保护并重</div>
              <div class="core-desc">雨林、珊瑚礁、红树林和火山海岛生态价值高，发展旅游、农业和交通时要兼顾生态保护、灾害防范和绿色合作。</div>
            </div>
          </div>

          <div class="memory-strip">
            <div class="memory-title">核心口诀</div>
            <div class="memory-text">
              <span>两洲两洋看位置</span>
              <span>半岛群岛看组成</span>
              <span>山河纵列看地形</span>
              <span>热带水热看农业</span>
              <span>马六甲看交通</span>
              <span>工业交通看产业</span>
              <span>东盟合作看发展</span>
              <span>绿色保护看未来</span>
            </div>
          </div>
        </div>

        <div class="summary-card summary-card-02">
          <div class="summary-card-header">
            <i class="iconfont icon-fenbu"></i>
            读图归纳：从地图看东南亚
          </div>

          <div class="map-read-list">
            <div class="map-read-item">
              <div class="read-index">01</div>
              <div>
                <div class="read-title">看位置</div>
                <div class="read-desc">先判断东南亚位于亚洲东南部，再看其位于亚洲与大洋洲、太平洋与印度洋之间。</div>
              </div>
            </div>

            <div class="map-read-item">
              <div class="read-index">02</div>
              <div>
                <div class="read-title">看组成</div>
                <div class="read-desc">把东南亚分成中南半岛和马来群岛两部分，分别观察半岛、岛屿和海域分布。</div>
              </div>
            </div>

            <div class="map-read-item">
              <div class="read-index">03</div>
              <div>
                <div class="read-title">看地形河流</div>
                <div class="read-desc">中南半岛重点看山脉与河流方向，归纳“山河相间、纵列分布”；马来群岛重点看火山岛弧。</div>
              </div>
            </div>

            <div class="map-read-item">
              <div class="read-index">04</div>
              <div>
                <div class="read-title">看气候农业</div>
                <div class="read-desc">结合赤道、热带范围、季风和降水分布，理解水稻种植和热带经济作物分布。</div>
              </div>
            </div>

            <div class="map-read-item">
              <div class="read-index">05</div>
              <div>
                <div class="read-title">看交通要道</div>
                <div class="read-desc">找出马六甲海峡，说明其连接印度洋与太平洋，是世界重要海上通道。</div>
              </div>
            </div>

            <div class="map-read-item">
              <div class="read-index">06</div>
              <div>
                <div class="read-title">看工业与交通</div>
                <div class="read-desc">叠加工业城市、港口节点、工业走廊、泛亚铁路东线 / 中线 / 西线和中老铁路，理解产业沿港沿线集聚。</div>
              </div>
            </div>

            <div class="map-read-item">
              <div class="read-index">07</div>
              <div>
                <div class="read-title">看人类活动</div>
                <div class="read-desc">联系人口、城市、港口、旅游资源和中国—东盟合作，分析区域发展特征。</div>
              </div>
            </div>

            <div class="map-read-item">
              <div class="read-index">08</div>
              <div>
                <div class="read-title">看可持续发展</div>
                <div class="read-desc">叠加雨林、珊瑚礁、红树林、火山地震带、台风路径和开发压力区，判断保护重点与发展选择。</div>
              </div>
            </div>
          </div>
        </div>

        <div class="summary-card summary-card-03">
          <div class="summary-card-header">
            <i class="iconfont icon-kaoshi"></i>
            中考答题模板
          </div>

          <div class="answer-template">
            <div class="template-title">分析东南亚区域特征，一般从这些角度作答：</div>

            <div class="template-line">
              <span>位置交通：</span>
              <strong>亚洲东南部 → 两洲两洋之间 → 马六甲海峡 → 海上交通要道</strong>
            </div>

            <div class="template-line">
              <span>自然环境：</span>
              <strong>中南半岛和马来群岛 → 山河相间 / 岛屿众多 → 热带季风与热带雨林气候</strong>
            </div>

            <div class="template-line">
              <span>农业生产：</span>
              <strong>水热充足 → 水稻种植广 → 天然橡胶、油棕、椰子、蕉麻等热带作物突出</strong>
            </div>

            <div class="template-line">
              <span>人文发展：</span>
              <strong>人口城市沿河沿海集中 → 海岛风光和多元文化旅游丰富 → 中国与东盟合作密切</strong>
            </div>

            <div class="template-line">
              <span>工业交通：</span>
              <strong>工业沿港沿城沿线布局 → 泛亚铁路 / 中老铁路强化陆路联系 → 港口航线衔接世界市场</strong>
            </div>

            <div class="template-line">
              <span>持续发展：</span>
              <strong>雨林 / 珊瑚 / 红树林保护 → 灾害风险防范 → 绿色旅游与区域绿色合作</strong>
            </div>
          </div>
        </div>

        <div class="summary-card summary-card-04">
          <div class="summary-card-header">
            <i class="iconfont icon-quyuxinxi"></i>
            区域综合分析路径
          </div>

          <div class="analysis-flow">
            <div class="flow-item">
              <div class="flow-num">1</div>
              <div>
                <div class="flow-title">先定位置</div>
                <div class="flow-desc">判断半球、纬度、海陆和交通位置，抓住“两洲两洋”和马六甲海峡。</div>
              </div>
            </div>

            <div class="flow-item">
              <div class="flow-num">2</div>
              <div>
                <div class="flow-title">再看自然</div>
                <div class="flow-desc">比较中南半岛与马来群岛的地形、河流、气候和自然灾害。</div>
              </div>
            </div>

            <div class="flow-item">
              <div class="flow-num">3</div>
              <div>
                <div class="flow-title">联系生产</div>
                <div class="flow-desc">用水热条件解释水稻和热带经济作物，用地形、交通和产业联系解释城市与工业布局。</div>
              </div>
            </div>

            <div class="flow-item">
              <div class="flow-num">4</div>
              <div>
                <div class="flow-title">综合发展</div>
                <div class="flow-desc">从工业交通、旅游、贸易、产业链、泛亚铁路、中国—东盟合作和生态保护归纳区域发展方向。</div>
              </div>
            </div>
          </div>
        </div>

        <div class="summary-card summary-card-05">
          <div class="summary-card-header">
            <i class="iconfont icon-bangzhuyushuoming"></i>
            易错点提醒
          </div>

          <div class="mistake-list">
            <div class="mistake-item">
              <span>易错 1</span>
              <p>东南亚不是只有海岛，也包括<strong>中南半岛</strong>。组成要答“中南半岛和马来群岛”。</p>
            </div>

            <div class="mistake-item">
              <span>易错 2</span>
              <p>“山河相间、纵列分布”主要描述<strong>中南半岛</strong>，不要直接套到整个东南亚。</p>
            </div>

            <div class="mistake-item">
              <span>易错 3</span>
              <p>马六甲海峡沟通<strong>印度洋与太平洋</strong>，位于马来半岛和苏门答腊岛之间。</p>
            </div>

            <div class="mistake-item">
              <span>易错 4</span>
              <p>东南亚气候不是单一类型，主要有<strong>热带季风气候</strong>和<strong>热带雨林气候</strong>。</p>
            </div>

            <div class="mistake-item">
              <span>易错 5</span>
              <p>人口城市并非均匀分布，而是多集中在<strong>河流平原、三角洲和沿海地区</strong>。</p>
            </div>

            <div class="mistake-item">
              <span>易错 6</span>
              <p>泛亚铁路不是一条单独铁路，而是<strong>东线、中线、西线等组成的跨国铁路网络设想</strong>。</p>
            </div>

            <div class="mistake-item">
              <span>易错 7</span>
              <p>可持续发展不是“停止开发”，而是强调<strong>保护生态、降低风险、提高资源利用效率</strong>。</p>
            </div>
          </div>
        </div>

        <div class="summary-card summary-card-06">
          <div class="summary-card-header">
            <i class="iconfont icon-bankuai"></i>
            章节知识串联
          </div>

          <div class="chapter-chain">
            <div class="chapter-item">
              <span>01</span>
              <div>
                <strong>地理位置</strong>
                <p>抓住亚洲东南部、两洲两洋之间、海陆交通要道三个关键词。</p>
              </div>
            </div>

            <div class="chapter-item">
              <span>02</span>
              <div>
                <strong>区域组成</strong>
                <p>中南半岛与马来群岛共同构成东南亚，半岛和群岛自然环境差异明显。</p>
              </div>
            </div>

            <div class="chapter-item">
              <span>03</span>
              <div>
                <strong>地形河流</strong>
                <p>中南半岛山河相间、纵列分布，河流多自北向南流，河谷平原人口集中。</p>
              </div>
            </div>

            <div class="chapter-item">
              <span>04</span>
              <div>
                <strong>气候特征</strong>
                <p>热带季风气候和热带雨林气候为主，全年高温，降水丰富但季节差异不同。</p>
              </div>
            </div>

            <div class="chapter-item">
              <span>05</span>
              <div>
                <strong>农业生产</strong>
                <p>水稻种植需要高温多雨和充足劳动力，热带经济作物体现水热条件优势。</p>
              </div>
            </div>

            <div class="chapter-item">
              <span>06</span>
              <div>
                <strong>马六甲海峡</strong>
                <p>位于马来半岛和苏门答腊岛之间，连接印度洋与太平洋，被称为海上交通咽喉。</p>
              </div>
            </div>

            <div class="chapter-item">
              <span>07</span>
              <div>
                <strong>工业与交通</strong>
                <p>工业多沿海、沿港、沿城市和交通干线布局，泛亚铁路与中老铁路加强陆路互联互通。</p>
              </div>
            </div>

            <div class="chapter-item">
              <span>08</span>
              <div>
                <strong>人口城市</strong>
                <p>人口城市沿河沿海、三角洲和平原集中，港口城市与国际贸易联系密切。</p>
              </div>
            </div>

            <div class="chapter-item">
              <span>09</span>
              <div>
                <strong>旅游资源</strong>
                <p>海岛风光、热带雨林、火山景观、宗教古迹和多元文化共同构成旅游优势。</p>
              </div>
            </div>

            <div class="chapter-item">
              <span>10</span>
              <div>
                <strong>区域合作</strong>
                <p>中国与东盟在贸易、交通、产业、农业、旅游和人文交流方面联系增强。</p>
              </div>
            </div>

            <div class="chapter-item">
              <span>11</span>
              <div>
                <strong>可持续发展</strong>
                <p>热带雨林、珊瑚礁、红树林和火山海岛生态价值高，开发中要重视保护、防灾和绿色合作。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="summary-card summary-card-07">
          <div class="summary-card-header">
            <i class="iconfont icon-wuliyinsu"></i>
            自然条件影响人类活动
          </div>

          <div class="cause-grid">
            <div class="cause-card">
              <div class="cause-title">位置 → 交通</div>
              <div class="cause-desc">两洲两洋之间的位置，使东南亚成为连接印度洋、太平洋和东亚航线的重要区域。</div>
              <div class="cause-result">结果：马六甲海峡和新加坡等港口地位突出。</div>
            </div>

            <div class="cause-card">
              <div class="cause-title">气候 → 农业</div>
              <div class="cause-desc">热带气候水热充足，适合水稻和天然橡胶、油棕、椰子、蕉麻等作物生长。</div>
              <div class="cause-result">结果：形成稻作农业和热带经济作物产区。</div>
            </div>

            <div class="cause-card">
              <div class="cause-title">河流 → 城市</div>
              <div class="cause-desc">河流下游平原和三角洲地势低平、水源丰富、交通便利，适合人口集聚。</div>
              <div class="cause-result">结果：曼谷、河内、胡志明市等城市发展条件较好。</div>
            </div>

            <div class="cause-card">
              <div class="cause-title">岛屿 → 旅游</div>
              <div class="cause-desc">岛屿众多、海岸曲折、海洋景观丰富，叠加火山、雨林和多元文化资源。</div>
              <div class="cause-result">结果：海岛度假和文化旅游成为重要产业。</div>
            </div>

            <div class="cause-card">
              <div class="cause-title">交通通道 → 工业</div>
              <div class="cause-desc">港口、海峡、泛亚铁路、中老铁路和跨境公路降低运输成本，增强产业联系。</div>
              <div class="cause-result">结果：工业城市、港口节点和产业走廊沿交通线集聚。</div>
            </div>

            <div class="cause-card">
              <div class="cause-title">湿热生态 → 保护</div>
              <div class="cause-desc">雨林、珊瑚礁、红树林和湿地生态系统价值高，但对开发强度和环境变化较敏感。</div>
              <div class="cause-result">结果：旅游、农业、港口和城市发展要走绿色可持续道路。</div>
            </div>
          </div>
        </div>

        <div class="summary-card summary-card-08">
          <div class="summary-card-header">
            <i class="iconfont icon-kongjian"></i>
            综合题常用表达
          </div>

          <div class="sentence-bank">
            <div class="sentence-item">
              <span>位置类</span>
              <p>东南亚位于亚洲东南部，地处亚洲与大洋洲、太平洋与印度洋之间，海陆交通位置十分重要。</p>
            </div>

            <div class="sentence-item">
              <span>地形类</span>
              <p>中南半岛北部多山，山脉和河流大致南北延伸，形成山河相间、纵列分布的地表格局。</p>
            </div>

            <div class="sentence-item">
              <span>农业类</span>
              <p>东南亚大部分位于热带，水热条件充足，平原和三角洲土壤肥沃、水源丰富，有利于水稻种植。</p>
            </div>

            <div class="sentence-item">
              <span>城市类</span>
              <p>人口和城市多集中在河流沿岸、河口三角洲、沿海平原和港口地区，因为这些地区交通便利、经济活动集中。</p>
            </div>

            <div class="sentence-item">
              <span>工业类</span>
              <p>东南亚工业多沿海、沿港、沿大城市和交通干线分布，泛亚铁路、中老铁路与港口航线共同促进产业集聚和区域联系。</p>
            </div>

            <div class="sentence-item">
              <span>合作类</span>
              <p>中国与东盟地缘相近、经济互补性强，通过交通互联、贸易往来和产业合作促进区域共同发展。</p>
            </div>

            <div class="sentence-item">
              <span>生态类</span>
              <p>东南亚雨林、珊瑚礁、红树林和海岛生态价值高，开发旅游、农业和交通时要保护生态、控制承载力并加强灾害防范。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="summary-right">
        <div class="knowledge-board knowledge-board-alt">
          <div class="board-title"><i class="iconfont icon-zuzhijiegou"></i> 东南亚知识结构图</div>

          <div class="structure-board structure-board-tall">
            <div class="structure-top">
              <div class="structure-title-main">东南亚区域综合认知</div>
              <div class="structure-sub">以“位置—自然—人文—工业交通—发展—保护”为主线，把各章节串成完整区域认知</div>
            </div>

            <div class="structure-mainline">
              <div class="mainline-axis">
                <div class="axis-dot">1</div>
                <div class="axis-line"></div>
                <div class="axis-dot">2</div>
                <div class="axis-line"></div>
                <div class="axis-dot">3</div>
                <div class="axis-line"></div>
                <div class="axis-dot">4</div>
                <div class="axis-line"></div>
                <div class="axis-dot">5</div>
                <div class="axis-line"></div>
                <div class="axis-dot">6</div>
              </div>

              <div class="mainline-content">
                <div class="structure-section section-position">
                  <div class="section-title-row">
                    <div>
                      <div class="section-title">空间定位：先知道“在哪里”</div>
                      <div class="section-subtitle">位置与范围 / 组成与国家</div>
                    </div>
                    <span>两洲两洋</span>
                  </div>

                  <div class="section-grid">
                    <div class="section-card">
                      <strong>位置与范围</strong>
                      <p>东南亚位于亚洲东南部，联系亚洲与大洋洲，沟通太平洋与印度洋。</p>
                    </div>

                    <div class="section-card">
                      <strong>组成与国家</strong>
                      <p>由中南半岛和马来群岛组成，半岛与群岛共同构成区域空间骨架。</p>
                    </div>
                  </div>
                </div>

                <div class="structure-section section-nature">
                  <div class="section-title-row">
                    <div>
                      <div class="section-title">自然基础：再解释“为什么”</div>
                      <div class="section-subtitle">地形河流 / 热带气候 / 自然灾害</div>
                    </div>
                    <span>湿热多山</span>
                  </div>

                  <div class="section-grid">
                    <div class="section-card">
                      <strong>地形与河流</strong>
                      <p>中南半岛山河相间、纵列分布；河流下游平原和三角洲利于人口、农业和城市集中。</p>
                    </div>

                    <div class="section-card">
                      <strong>气候与灾害</strong>
                      <p>热带季风和热带雨林气候为主；马来群岛火山地震多，沿海地区还需关注台风、海啸和洪涝。</p>
                    </div>
                  </div>
                </div>

                <div class="structure-section section-human">
                  <div class="section-title-row">
                    <div>
                      <div class="section-title">人类活动：看自然如何影响生产生活</div>
                      <div class="section-subtitle">农业 / 城市人口 / 旅游资源</div>
                    </div>
                    <span>沿河沿海</span>
                  </div>

                  <div class="section-grid">
                    <div class="section-card">
                      <strong>水稻与热带作物</strong>
                      <p>水热充足，平原三角洲适合水稻；湿热地区适合天然橡胶、油棕、椰子和蕉麻。</p>
                    </div>

                    <div class="section-card">
                      <strong>人口城市与旅游</strong>
                      <p>人口城市多沿河沿海、沿港口分布；海岛风光、雨林火山和宗教古迹形成丰富旅游资源。</p>
                    </div>
                  </div>
                </div>

                <div class="structure-section section-industry">
                  <div class="section-title-row">
                    <div>
                      <div class="section-title">工业交通：看产业如何沿通道组织</div>
                      <div class="section-subtitle">工业布局 / 泛亚铁路 / 中老铁路 / 港口节点</div>
                    </div>
                    <span>沿港沿线</span>
                  </div>

                  <div class="section-grid">
                    <div class="section-card">
                      <strong>工业布局</strong>
                      <p>工业多沿海、沿港、沿大城市和交通干线分布，出口加工、电子制造、纺织服装、石化和食品加工较突出。</p>
                    </div>

                    <div class="section-card">
                      <strong>泛亚铁路</strong>
                      <p>东线、中线、西线和中老铁路强化中国与中南半岛陆路联系，推动物流、产业和旅游合作。</p>
                    </div>
                  </div>
                </div>

                <div class="structure-section section-development">
                  <div class="section-title-row">
                    <div>
                      <div class="section-title">区域发展：看交通如何带动联系</div>
                      <div class="section-subtitle">马六甲海峡 / 中国与东盟合作 / 区域联系</div>
                    </div>
                    <span>通道合作</span>
                  </div>

                  <div class="section-grid">
                    <div class="section-card">
                      <strong>马六甲海峡</strong>
                      <p>位于马来半岛和苏门答腊岛之间，连接印度洋与太平洋，是世界重要海上通道。</p>
                    </div>

                    <div class="section-card">
                      <strong>区域联系与发展</strong>
                      <p>中国与东盟陆海相邻，在交通、贸易、产业、农业、旅游和人文方面联系密切。</p>
                    </div>
                  </div>
                </div>

                <div class="structure-section section-sustainable">
                  <div class="section-title-row">
                    <div>
                      <div class="section-title">可持续发展：最后判断“怎么发展更长久”</div>
                      <div class="section-subtitle">生态保护 / 防灾减灾 / 绿色合作</div>
                    </div>
                    <span>保护未来</span>
                  </div>

                  <div class="section-grid">
                    <div class="section-card">
                      <strong>生态保护</strong>
                      <p>保护热带雨林、珊瑚礁、红树林、湿地和海岛生态，控制旅游与农业开发强度。</p>
                    </div>

                    <div class="section-card">
                      <strong>绿色合作</strong>
                      <p>跨境河流、海洋污染、灾害预警、绿色港口和清洁能源需要区域协同治理。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="structure-bottom">
              <div class="bottom-node">
                <span>核心逻辑</span>
                <strong>位置决定联系，自然影响生产，工业交通带动发展，保护保障未来。</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="summary-card region-card">
          <div class="summary-card-header"><i class="iconfont icon-leixing"></i>东南亚重点内容快速回顾</div>

          <div class="region-grid">
            <div class="region-item position">
              <div class="region-title">地理位置</div>
              <div class="region-desc">位于亚洲东南部，两洲两洋之间，海陆交通地位重要。</div>
            </div>

            <div class="region-item compose">
              <div class="region-title">区域组成</div>
              <div class="region-desc">由中南半岛和马来群岛组成，半岛与群岛差异明显。</div>
            </div>

            <div class="region-item terrain">
              <div class="region-title">地形河流</div>
              <div class="region-desc">中南半岛山河相间、纵列分布，河流多自北向南流。</div>
            </div>

            <div class="region-item climate">
              <div class="region-title">气候类型</div>
              <div class="region-desc">以热带季风气候和热带雨林气候为主，全年高温、降水丰富。</div>
            </div>

            <div class="region-item agriculture">
              <div class="region-title">农业作物</div>
              <div class="region-desc">水稻是主要粮食作物，天然橡胶、油棕、椰子、蕉麻等热带作物突出。</div>
            </div>

            <div class="region-item strait">
              <div class="region-title">马六甲海峡</div>
              <div class="region-desc">位于马来半岛和苏门答腊岛之间，是连接印度洋与太平洋的重要通道。</div>
            </div>

            <div class="region-item industry">
              <div class="region-title">工业与交通</div>
              <div class="region-desc">工业多沿港口、城市和交通线集聚，泛亚铁路和中老铁路强化陆路联系。</div>
            </div>

            <div class="region-item cities">
              <div class="region-title">人口城市</div>
              <div class="region-desc">人口城市多沿河沿海、平原三角洲和港口分布。</div>
            </div>

            <div class="region-item tourism">
              <div class="region-title">旅游资源</div>
              <div class="region-desc">海岛风光、多元文化、宗教古迹丰富，门户城市和旅游线路联系明显。</div>
            </div>

            <div class="region-item cooperation">
              <div class="region-title">区域合作</div>
              <div class="region-desc">中国与东盟陆海相邻，在交通、贸易、产业、旅游和人文方面联系密切。</div>
            </div>

            <div class="region-item sustainable">
              <div class="region-title">可持续发展</div>
              <div class="region-desc">保护雨林、珊瑚礁、红树林和湿地，控制开发强度，加强灾害防范。</div>
            </div>
          </div>
        </div>

        <div class="summary-card compare-card">
          <div class="summary-card-header"><i class="iconfont icon-maodunjiufen"></i>中南半岛与马来群岛对比</div>

          <div class="compare-table">
            <div class="compare-row compare-head">
              <div>项目</div>
              <div>中南半岛</div>
              <div>马来群岛</div>
            </div>

            <div class="compare-row">
              <div>位置形态</div>
              <div>大陆向南延伸的半岛</div>
              <div>岛屿众多、海域广阔</div>
            </div>

            <div class="compare-row">
              <div>地形特点</div>
              <div>山河相间、纵列分布</div>
              <div>火山地震较多，岛屿地形复杂</div>
            </div>

            <div class="compare-row">
              <div>主要气候</div>
              <div>热带季风气候显著</div>
              <div>热带雨林气候分布广</div>
            </div>

            <div class="compare-row">
              <div>人类活动</div>
              <div>人口沿河谷、平原和三角洲集中</div>
              <div>人口多沿海、港口和火山岛平原集中</div>
            </div>

            <div class="compare-row">
              <div>工业交通</div>
              <div>泛亚铁路、中老铁路和跨境公路联系较突出，工业多沿河谷、首都和交通走廊布局</div>
              <div>港口、海运和群岛内部航线更重要，工业多沿沿海城市、港口和岛屿平原布局</div>
            </div>

            <div class="compare-row">
              <div>持续发展</div>
              <div>关注流域治理、洪涝防治、三角洲水环境和农业可持续</div>
              <div>关注雨林保护、珊瑚礁保护、火山地震海啸风险和海岛承载力</div>
            </div>
          </div>
        </div>

        <div class="summary-card task-card">
          <div class="summary-card-header task-header">
            <div><i class="iconfont icon-duihao"></i>课堂任务</div>
            <span class="task-tip">点击题目查看答案</span>
          </div>

          <div class="task-list">
            <div
              v-for="(task, index) in tasks"
              :key="task.question"
              class="task-item"
              :class="{ active: activeTaskIndex === index }"
              @click="toggleTask(index)"
            >
              <div class="task-question-row">
                <span class="task-num">{{ index + 1 }}</span>

                <div class="task-question">{{ task.question }}</div>

                <span class="task-arrow">{{ activeTaskIndex === index ? '收起' : '答案' }}</span>
              </div>

              <div v-if="activeTaskIndex === index" class="task-answer">
                <div class="answer-icon">
                  <i class="iconfont icon-duihao"></i>
                </div>
                <div class="answer-content">{{ task.answer }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="summary-card keyword-card">
          <div class="summary-card-header"><i class="iconfont icon-hexin"></i>关键词速记矩阵</div>

          <div class="keyword-grid">
            <div class="keyword-item">
              <span>位置</span>
              <strong>两洲两洋</strong>
            </div>

            <div class="keyword-item">
              <span>组成</span>
              <strong>半岛群岛</strong>
            </div>

            <div class="keyword-item">
              <span>地形</span>
              <strong>山河相间</strong>
            </div>

            <div class="keyword-item">
              <span>气候</span>
              <strong>热带湿热</strong>
            </div>

            <div class="keyword-item">
              <span>农业</span>
              <strong>水稻作物</strong>
            </div>

            <div class="keyword-item">
              <span>交通</span>
              <strong>马六甲</strong>
            </div>

            <div class="keyword-item">
              <span>工业</span>
              <strong>沿港沿线</strong>
            </div>

            <div class="keyword-item">
              <span>铁路</span>
              <strong>泛亚中老</strong>
            </div>

            <div class="keyword-item">
              <span>人口</span>
              <strong>沿河沿海</strong>
            </div>

            <div class="keyword-item">
              <span>旅游</span>
              <strong>海岛文化</strong>
            </div>

            <div class="keyword-item">
              <span>合作</span>
              <strong>中国东盟</strong>
            </div>

            <div class="keyword-item">
              <span>生态</span>
              <strong>雨林珊瑚</strong>
            </div>

            <div class="keyword-item">
              <span>灾害</span>
              <strong>火山台风</strong>
            </div>

            <div class="keyword-item">
              <span>发展</span>
              <strong>绿色合作</strong>
            </div>
          </div>
        </div>

        <div class="summary-card exam-card">
          <div class="summary-card-header"><i class="iconfont icon-kaoshi"></i>高频考点追问</div>

          <div class="exam-question-list">
            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">位置交通</span>
                为什么东南亚被称为“十字路口”？
              </div>
              <div class="exam-question-desc">
                东南亚位于亚洲东南部，地处亚洲与大洋洲、太平洋与印度洋之间，既联系东亚、南亚和大洋洲，也沟通印度洋和太平洋。这里附近有马六甲海峡等重要海上通道，大量国际航线和贸易运输经过，因此被称为“十字路口”。
              </div>
              <div class="exam-answer-template">答题模板：<strong>地理位置 + 连接对象 + 交通通道 + 经济意义</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">交通要道</span>
                马六甲海峡为什么被称为“海上咽喉”？
              </div>
              <div class="exam-question-desc">
                马六甲海峡位于马来半岛和苏门答腊岛之间，是连接印度洋和太平洋的近道。来自西亚、南亚、欧洲方向的船只前往东亚时常经过这里，因此它对石油运输、国际贸易和海上航运都非常重要。新加坡等港口城市也因靠近这一通道而发展迅速。
              </div>
              <div class="exam-answer-template">答题模板：<strong>位置准确 + 连接两洋 + 航线繁忙 + 影响港口城市</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">工业交通</span>
                东南亚工业为什么多沿海、沿港口和交通线分布？
              </div>
              <div class="exam-question-desc">
                东南亚许多工业面向国际市场，原料、零部件和产品需要通过港口、铁路、公路和海上航线运输。沿海港口和大城市交通便利、劳动力和市场集中，外资、产业园区和服务业条件较好，所以电子装配、纺织服装、食品加工、石化、橡胶加工等工业容易在这些地区集聚。
              </div>
              <div class="exam-answer-template">答题模板：<strong>交通便利 + 港口开放 + 劳动力市场 + 外资产业园 + 出口导向</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">泛亚铁路</span>
                泛亚铁路和中老铁路对区域联系有什么意义？
              </div>
              <div class="exam-question-desc">
                泛亚铁路通过东线、中线、西线等方向加强中国与中南半岛、马来半岛和新加坡方向的陆路联系。中老铁路是中国与老挝互联互通的重要代表，能够缩短运输时间、降低物流成本，带动沿线贸易、旅游、产业园区和城市发展，也使内陆地区对外联系更加便利。
              </div>
              <div class="exam-answer-template">答题模板：<strong>缩短距离 + 降低成本 + 促进物流贸易 + 带动产业旅游 + 加强区域合作</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">地形河流</span>
                “山河相间、纵列分布”是什么意思？
              </div>
              <div class="exam-question-desc">
                这是中南半岛典型的地形河流特征。半岛北部与中国西南山地相连，山脉大致南北延伸，湄公河、湄南河、红河、伊洛瓦底江等河流也多自北向南流，山脉和河流相互间隔、纵向排列，所以称为“山河相间、纵列分布”。
              </div>
              <div class="exam-answer-template">答题模板：<strong>对象是中南半岛 + 山脉方向 + 河流流向 + 空间排列</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">人口城市</span>
                为什么中南半岛城市多沿河流和三角洲分布？
              </div>
              <div class="exam-question-desc">
                河流沿岸和三角洲地区通常地势低平、土壤肥沃、水源充足，有利于水稻种植和人口集聚；河流还可以提供航运和交通条件，方便商品流通与城市发展。因此，曼谷、河内、胡志明市等城市都与河流平原或三角洲关系密切。
              </div>
              <div class="exam-answer-template">答题模板：<strong>地形低平 + 水源充足 + 农业发达 + 交通便利 + 人口集聚</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">气候农业</span>
                为什么东南亚适合种植水稻？
              </div>
              <div class="exam-question-desc">
                东南亚大部分位于热带，全年气温较高，降水丰富，水热条件好。中南半岛河流下游平原和三角洲地势低平、水源充足，适合发展水田农业。再加上人口较多、劳动力充足，水稻就成为东南亚重要的粮食作物。
              </div>
              <div class="exam-answer-template">答题模板：<strong>热量充足 + 降水丰富 + 平原三角洲 + 劳动力 + 饮食需求</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">热带作物</span>
                为什么天然橡胶、油棕、椰子、蕉麻等热带作物在东南亚分布广？
              </div>
              <div class="exam-question-desc">
                这些作物对热量和水分要求较高，而东南亚纬度较低，热带气候广布，全年高温，降水充足，适合热带经济作物生长。马来群岛和中南半岛南部尤其具备高温湿润条件，因此天然橡胶、油棕、椰子、蕉麻等成为当地重要经济作物。
              </div>
              <div class="exam-answer-template">答题模板：<strong>低纬热带 + 全年高温 + 降水丰富 + 作物习性匹配</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">灾害地貌</span>
                为什么马来群岛火山、地震较多？
              </div>
              <div class="exam-question-desc">
                马来群岛位于板块交界地带，地壳运动活跃，岩浆活动和构造运动频繁，因此多火山、地震。这种地质条件一方面带来灾害风险，另一方面也形成火山地貌、肥沃火山灰土壤和独特旅游景观。
              </div>
              <div class="exam-answer-template">答题模板：<strong>板块交界 + 地壳活跃 + 火山地震多 + 利弊分析</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">旅游资源</span>
                为什么东南亚旅游资源丰富？
              </div>
              <div class="exam-question-desc">
                东南亚自然旅游资源和人文旅游资源都很丰富。自然方面，东南亚有热带海岛、沙滩、珊瑚礁、热带雨林、火山和河流三角洲；人文方面，多民族、多宗教、多文化交融，形成吴哥窟、婆罗浮屠、蒲甘古城、会安古城等文化遗产。因此旅游类型多样，吸引力强。
              </div>
              <div class="exam-answer-template">答题模板：<strong>自然资源丰富 + 人文景观多元 + 交通便利 + 旅游类型多样</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">人口分布</span>
                东南亚人口和城市分布有什么共同规律？
              </div>
              <div class="exam-question-desc">
                东南亚人口和城市分布不均，整体表现为沿河、沿海、沿交通线集中。中南半岛人口多集中在河流平原、河口三角洲和沿海地区；马来群岛人口多集中在沿海平原、港口城市和部分火山岛平原。内陆山地、热带雨林深处和交通不便地区人口相对稀疏。
              </div>
              <div class="exam-answer-template">答题模板：<strong>分布不均 + 稠密区 + 稀疏区 + 影响因素</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">区域合作</span>
                中国与东盟合作为什么具有明显优势？
              </div>
              <div class="exam-question-desc">
                中国与东盟国家地缘相近、陆海相邻，交通联系便利；双方在资源、市场、产业、劳动力、资金、技术等方面具有互补性。通过贸易往来、铁路港口建设、产业园区、农业合作、旅游文化交流等方式，可以促进互联互通和共同发展。
              </div>
              <div class="exam-answer-template">答题模板：<strong>地缘相近 + 交通便利 + 经济互补 + 合作领域 + 共同发展</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">可持续发展</span>
                东南亚发展旅游和热带农业时为什么要重视生态保护？
              </div>
              <div class="exam-question-desc">
                东南亚拥有热带雨林、珊瑚礁、红树林、海岛和火山等生态资源，这些资源既是旅游和农业发展的基础，也比较脆弱。若过度开发，可能造成雨林减少、珊瑚退化、水土流失、海岸污染和生物多样性下降，反过来削弱旅游吸引力和农业发展条件。因此应控制开发强度，保护生态系统，发展绿色旅游和可持续农业。
              </div>
              <div class="exam-answer-template">答题模板：<strong>生态资源价值 + 开发压力 + 破坏后果 + 保护措施</strong></div>
            </div>

            <div class="exam-question-item">
              <div class="exam-question-title">
                <span class="exam-tag">灾害防范</span>
                东南亚哪些地区自然灾害风险较突出？
              </div>
              <div class="exam-question-desc">
                马来群岛和菲律宾靠近板块交界地带，火山、地震和海啸风险较突出；菲律宾、越南沿海和南海周边易受台风、暴雨和风暴潮影响；湄公河、湄南河、红河等河流下游平原和三角洲在雨季容易出现洪涝风险。分析时要把板块位置、海陆位置、季风降水和地形低平等因素结合起来。
              </div>
              <div class="exam-answer-template">答题模板：<strong>板块边界 + 沿海位置 + 季风降水 + 低平地形</strong></div>
            </div>
          </div>
        </div>

        <div class="final-slogan">
          <div class="slogan-main">东南亚区域综合归纳</div>
          <div class="slogan-sub">从位置到产业，从交通到保护，用综合思维理解热带海陆交汇区</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  current: {
    title: string
    desc: string
    index: number
  }
}>()

const activeTaskIndex = ref<number | null>(null)

const tasks = [
  {
    question: '用一句话概括东南亚的地理位置特点。',
    answer: '东南亚位于亚洲东南部，处在亚洲与大洋洲、太平洋与印度洋之间，是世界重要海陆交通通道。',
  },
  {
    question: '东南亚由哪两大部分组成？分别有什么特点？',
    answer: '东南亚由中南半岛和马来群岛组成。中南半岛山河相间、纵列分布，河流多自北向南流；马来群岛岛屿众多，火山地震较多，海岛风光突出。',
  },
  {
    question: '为什么东南亚适合种植水稻和热带经济作物？',
    answer: '东南亚大部分位于热带，全年高温，降水丰富，水热条件充足；河流平原和三角洲地势低平、水源充足，因此适合水稻和热带经济作物生长。',
  },
  {
    question: '马六甲海峡为什么重要？',
    answer: '马六甲海峡位于马来半岛和苏门答腊岛之间，连接印度洋和太平洋，是东亚、东南亚、南亚、西亚和欧洲之间海上贸易的重要通道。',
  },
  {
    question: '东南亚人口和城市分布有什么规律？',
    answer: '东南亚人口和城市多集中在河流沿岸、河口三角洲、沿海平原和港口地区，因为这些地区地势低平、水源充足、交通便利、经济活动集中。',
  },
  {
    question: '东南亚工业与交通布局有什么共同特点？',
    answer:
      '东南亚工业多沿海、沿港口、沿大城市和交通干线分布，主要因为这些地区交通便利、劳动力和市场集中、便于进口原料和出口产品。泛亚铁路和中老铁路强化了中国与中南半岛的陆路联系，港口和海上航线则加强了东南亚与世界市场的联系。',
  },
  {
    question: '中国与东盟合作体现了哪些区域发展联系？',
    answer: '中国与东盟合作体现在贸易往来、交通互联、产业合作、农业资源、旅游文化和港口航运等方面，说明区域之间可以通过优势互补促进共同发展。',
  },
  {
    question: '从自然条件角度说明东南亚旅游资源丰富的原因。',
    answer:
      '东南亚地处热带，海岛众多，海岸线曲折，拥有热带海岛、雨林、火山、珊瑚礁等自然景观；同时多民族、多宗教、多文化交融，形成丰富的人文旅游资源。',
  },
  {
    question: '结合东南亚位置，说明中国与东盟合作的地理基础。',
    answer:
      '中国与东南亚陆海相邻，中国西南和华南可通过铁路、公路、港口和海上航线联系东盟国家；东南亚又处在重要国际航线附近，因此双方交通和贸易合作基础好。',
  },
  {
    question: '为什么东南亚要重视生态保护与可持续发展？',
    answer:
      '东南亚雨林、珊瑚礁、红树林、海岛和火山生态资源丰富，但农业扩张、旅游开发、城市建设和交通建设会带来生态压力；同时火山、地震、台风、洪涝和海啸风险较高，因此要在发展经济的同时保护生态、控制开发强度并加强防灾减灾。',
  },
]

function toggleTask(index: number) {
  activeTaskIndex.value = activeTaskIndex.value === index ? null : index
}
</script>

<style scoped lang="scss">
.summary-container {
  padding: 16px;
  height: 100%;
  width: 100%;
}

.summary-header {
  margin-bottom: 32px;
}

.summary-content {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 80px);
  gap: 20px;
}

.summary-left {
  width: 42%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.summary-right {
  width: 57%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding-right: 4px;
}

.summary-card {
  border-radius: 10px;
  border: 1px solid rgba(15, 143, 179, 0.26);
  padding: 14px;
  background: #fff;
}

.summary-card-01 {
  background: #ecfeff;
  border-color: rgba(15, 143, 179, 0.35);
}

.summary-card-02 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.summary-card-03 {
  background: #fff7ed;
  border-color: #fed7aa;
}

.summary-card-04 {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.summary-card-05 {
  background: #fefce8;
  border-color: #fde68a;
}

.region-card {
  background: #f0fdfa;
  border-color: rgba(20, 184, 166, 0.32);
}

.compare-card {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.task-card {
  background: #fefce8;
  border-color: #fde68a;
}

.summary-card-header {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-color, #0f8fb3);
}

.summary-card-03 .summary-card-header {
  color: #c2410c;
}

.summary-card-04 .summary-card-header {
  color: #0f766e;
}

.summary-card-05 .summary-card-header,
.task-card .summary-card-header {
  color: #854d0e;
}

.compare-card .summary-card-header {
  color: #334155;
}

.iconfont {
  margin-right: 8px;
  color: var(--primary-color, #0f8fb3);
}

.summary-card-03 .iconfont {
  color: #c2410c;
}

.summary-card-04 .iconfont {
  color: #0f766e;
}

.summary-card-05 .iconfont,
.task-card .iconfont {
  color: #854d0e;
}

.compare-card .iconfont {
  color: #334155;
}

.summary-card p {
  margin: 0;
  line-height: 1.65;
  color: #1f2937;
}

.core-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 12px;
}

.core-box {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid rgba(15, 143, 179, 0.18);
}

.core-title {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 4px;
}

.core-value {
  font-size: 17px;
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 4px;
}

.core-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
}

.memory-strip {
  margin-top: 12px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  border-left: 3px solid var(--primary-color, #0f8fb3);
}

.memory-title {
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 8px;
}

.memory-text {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.memory-text span {
  display: inline-flex;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(15, 143, 179, 0.1);
  color: #0f6f8a;
  font-size: 12px;
  font-weight: 700;
}

.map-read-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.map-read-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  background: #fff;
  border-radius: 8px;
  padding: 9px 10px;
  border-left: 3px solid var(--primary-color, #0f8fb3);
}

.read-index {
  min-width: 34px;
  height: 26px;
  border-radius: 999px;
  background: rgba(15, 143, 179, 0.12);
  color: var(--primary-color, #0f8fb3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
}

.read-title {
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 3px;
}

.read-desc {
  color: #475569;
  font-size: 13px;
  line-height: 1.45;
}

.answer-template {
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  color: #374151;
}

.template-title {
  font-weight: bold;
  color: #c2410c;
  margin-bottom: 8px;
}

.template-line {
  margin-bottom: 8px;
  line-height: 1.55;
}

.template-line:last-child {
  margin-bottom: 0;
}

.template-line span {
  font-weight: bold;
  color: #854d0e;
}

.template-line strong {
  color: #1f2937;
}

.analysis-flow {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
}

.flow-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.flow-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #0f766e;
  color: #fff;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flow-title {
  font-weight: bold;
  color: #0f766e;
  margin-bottom: 4px;
}

.flow-desc {
  color: #475569;
  font-size: 13px;
  line-height: 1.45;
}

.flow-arrow {
  margin: 6px 0 6px 13px;
  color: #0f766e;
  font-weight: bold;
}

.mistake-list {
  display: grid;
  gap: 8px;
}

.mistake-item {
  display: grid;
  grid-template-columns: 62px 1fr;
  gap: 8px;
  align-items: start;
  background: #fff;
  border-radius: 8px;
  padding: 9px 10px;
  border: 1px solid rgba(245, 158, 11, 0.22);
}

.mistake-item span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  border-radius: 999px;
  background: rgba(245, 158, 11, 0.14);
  color: #b45309;
  font-size: 12px;
  font-weight: bold;
}

.mistake-item p {
  margin: 0;
  color: #475569;
  font-size: 13px;
  line-height: 1.45;
}

.knowledge-board {
  position: relative;
  min-height: 430px;
  border-radius: 14px;
  padding: 16px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 48%, rgba(15, 143, 179, 0.18), transparent 34%), linear-gradient(135deg, #ecfeff 0%, #f0f9ff 48%, #eff6ff 100%);
  border: 1px solid rgba(15, 143, 179, 0.28);
}

.board-title {
  font-weight: bold;
  font-size: 17px;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 10px;
}

.mind-map {
  position: relative;
  height: 368px;
}

.mind-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 122px;
  height: 122px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color, #0f8fb3), #38bdf8);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 900;
  box-shadow: 0 10px 24px rgba(15, 143, 179, 0.26);
  z-index: 2;
}

.mind-branch {
  position: absolute;
  width: 165px;
  min-height: 70px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid rgba(15, 143, 179, 0.2);
  padding: 9px;
  box-shadow: 0 4px 14px rgba(15, 39, 72, 0.08);
}

.mind-branch::before {
  content: '';
  position: absolute;
  width: 48px;
  border-top: 2px dashed rgba(15, 143, 179, 0.55);
}

.branch-01 {
  left: 18px;
  top: 14px;
}

.branch-01::before {
  right: -44px;
  top: 58%;
  transform: rotate(26deg);
}

.branch-02 {
  right: 18px;
  top: 14px;
}

.branch-02::before {
  left: -44px;
  top: 58%;
  transform: rotate(-26deg);
}

.branch-03 {
  left: 0;
  top: 106px;
}

.branch-03::before {
  right: -44px;
  top: 50%;
  transform: rotate(8deg);
}

.branch-04 {
  right: 0;
  top: 106px;
}

.branch-04::before {
  left: -44px;
  top: 50%;
  transform: rotate(-8deg);
}

.branch-05 {
  left: 0;
  bottom: 106px;
}

.branch-05::before {
  right: -44px;
  top: 50%;
  transform: rotate(-8deg);
}

.branch-06 {
  right: 0;
  bottom: 106px;
}

.branch-06::before {
  left: -44px;
  top: 50%;
  transform: rotate(8deg);
}

.branch-07 {
  left: 18px;
  bottom: 14px;
}

.branch-07::before {
  right: -44px;
  top: 30%;
  transform: rotate(-26deg);
}

.branch-08 {
  right: 18px;
  bottom: 14px;
}

.branch-08::before {
  left: -44px;
  top: 30%;
  transform: rotate(26deg);
}

.branch-title {
  font-weight: bold;
  color: var(--primary-color, #0f8fb3);
  margin-bottom: 5px;
}

.branch-desc {
  font-size: 13px;
  line-height: 1.4;
  color: #475569;
}

.region-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9px;
}

.region-item {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border-left: 4px solid var(--primary-color, #0f8fb3);
}

.region-title {
  font-weight: bold;
  margin-bottom: 4px;
}

.region-desc {
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
}

.region-item.position .region-title {
  color: #0f8fb3;
}

.region-item.compose .region-title {
  color: #047857;
}

.region-item.terrain .region-title {
  color: #7c3aed;
}

.region-item.climate .region-title {
  color: #0369a1;
}

.region-item.agriculture .region-title {
  color: #c2410c;
}

.region-item.strait .region-title {
  color: #2563eb;
}

.region-item.cities .region-title {
  color: #b45309;
}

.region-item.tourism .region-title {
  color: #0f766e;
}

.compare-table {
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #fff;
}

.compare-row {
  display: grid;
  grid-template-columns: 86px 1fr 1fr;
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

.task-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task-tip {
  font-size: 12px;
  font-weight: normal;
  color: #854d0e;
  background: rgba(245, 158, 11, 0.14);
  border: 1px solid rgba(245, 158, 11, 0.28);
  padding: 3px 8px;
  border-radius: 999px;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.task-item {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  color: #3f2f12;
  line-height: 1.45;
  cursor: pointer;
  border: 1px solid rgba(245, 158, 11, 0.22);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease;
}

.task-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(120, 53, 15, 0.12);
  border-color: rgba(245, 158, 11, 0.48);
}

.task-item.active {
  background: linear-gradient(180deg, #fff 0%, #fffbeb 100%);
  border-color: rgba(245, 158, 11, 0.62);
}

.task-question-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.task-num {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f59e0b;
  color: #fff;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-question {
  flex: 1;
  font-weight: 700;
  color: #3f2f12;
}

.task-arrow {
  flex-shrink: 0;
  font-size: 12px;
  color: #b45309;
  background: rgba(245, 158, 11, 0.12);
  border-radius: 999px;
  padding: 3px 8px;
}

.task-answer {
  margin-top: 9px;
  padding: 10px;
  border-radius: 8px;
  background: rgba(255, 247, 237, 0.95);
  border-left: 3px solid #f59e0b;
  display: flex;
  gap: 8px;
  align-items: flex-start;
  animation: answerFadeIn 0.18s ease;
}

.answer-icon {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(245, 158, 11, 0.16);
  color: #b45309;
  display: flex;
  align-items: center;
  justify-content: center;
}

.answer-icon .iconfont {
  margin-right: 0;
  font-size: 13px;
  color: #b45309;
}

.answer-content {
  color: #5f3b12;
  font-size: 13px;
  line-height: 1.55;
}

@keyframes answerFadeIn {
  from {
    opacity: 0;
    transform: translateY(-3px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
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

.final-slogan {
  border-radius: 14px;
  padding: 18px;
  text-align: center;
  background: linear-gradient(135deg, var(--primary-color, #0f8fb3), #0369a1);
  color: #fff;
  box-shadow: 0 8px 20px rgba(15, 143, 179, 0.24);
}

.slogan-main {
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 4px;
  margin-bottom: 6px;
}

.slogan-sub {
  font-size: 14px;
  opacity: 0.9;
}

.summary-card-06 {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.summary-card-07 {
  background: #eefcf8;
  border-color: rgba(45, 212, 191, 0.32);
}

.summary-card-08 {
  background: #f0f9ff;
  border-color: #bae6fd;
}

.summary-card-06 .summary-card-header,
.compare-card .summary-card-header {
  color: #334155;
}

.summary-card-07 .summary-card-header {
  color: #0f766e;
}

.summary-card-08 .summary-card-header,
.keyword-card .summary-card-header {
  color: #0369a1;
}

.chapter-chain {
  display: grid;
  gap: 8px;
}

.chapter-item {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 9px;
  align-items: start;
  background: #fff;
  border-radius: 8px;
  padding: 9px 10px;
  border: 1px solid #e2e8f0;
}

.chapter-item span {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #e0f2fe;
  color: #0369a1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
}

.chapter-item strong {
  color: #334155;
}

.chapter-item p {
  margin: 4px 0 0;
  color: #475569;
  font-size: 13px;
  line-height: 1.45;
}

.cause-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.cause-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid rgba(20, 184, 166, 0.24);
}

.cause-title {
  font-weight: bold;
  color: #0f766e;
  margin-bottom: 5px;
}

.cause-desc {
  font-size: 13px;
  line-height: 1.45;
  color: #475569;
  margin-bottom: 6px;
}

.cause-result {
  padding: 6px 8px;
  border-radius: 6px;
  background: #ecfdf5;
  color: #047857;
  font-size: 12px;
  line-height: 1.45;
  font-weight: 700;
}

.sentence-bank {
  display: grid;
  gap: 8px;
}

.sentence-item {
  display: grid;
  grid-template-columns: 66px 1fr;
  gap: 8px;
  align-items: start;
  background: #fff;
  border-radius: 8px;
  padding: 9px 10px;
  border-left: 3px solid #0ea5e9;
}

.sentence-item span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  border-radius: 999px;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 12px;
  font-weight: bold;
}

.sentence-item p {
  margin: 0;
  color: #475569;
  font-size: 13px;
  line-height: 1.55;
}

.keyword-card {
  background: #eff6ff;
  border-color: #bfdbfe;
}

.keyword-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 9px;
}

.keyword-item {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  border: 1px solid rgba(37, 99, 235, 0.16);
  box-shadow: 0 1px 4px rgba(15, 39, 72, 0.06);
}

.keyword-item span {
  display: block;
  font-size: 12px;
  color: #64748b;
  margin-bottom: 5px;
}

.keyword-item strong {
  display: block;
  color: #0369a1;
  font-size: 15px;
}

.exam-card {
  background: #fff7ed;
  border-color: #fed7aa;
}

.exam-card .summary-card-header {
  color: #c2410c;
}

.exam-question-list {
  display: grid;
  gap: 8px;
}

.exam-question-item {
  background: #fff;
  border-radius: 9px;
  padding: 10px;
  border-left: 3px solid #f97316;
}

.exam-question-title {
  font-weight: bold;
  color: #c2410c;
  margin-bottom: 5px;
}

.exam-question-desc {
  color: #475569;
  font-size: 13px;
  line-height: 1.5;
}

.exam-question-item {
  position: relative;
  padding: 11px 12px;
}

.exam-question-title {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}

.exam-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 7px;
  border-radius: 999px;
  background: rgba(249, 115, 22, 0.13);
  color: #c2410c;
  font-size: 12px;
  font-weight: 800;
}

.exam-question-desc {
  margin-top: 6px;
}

.exam-answer-template {
  margin-top: 8px;
  padding: 7px 9px;
  border-radius: 7px;
  background: #fff7ed;
  color: #7c2d12;
  font-size: 12px;
  line-height: 1.5;
}

.exam-answer-template strong {
  color: #c2410c;
}

.core-box-wide {
  grid-column: 1 / -1;
}

.knowledge-board-alt {
  min-height: auto;
  background:
    radial-gradient(circle at 18% 20%, rgba(45, 212, 191, 0.18), transparent 28%),
    radial-gradient(circle at 86% 18%, rgba(56, 189, 248, 0.18), transparent 30%), linear-gradient(135deg, #ecfeff 0%, #f8fafc 48%, #eff6ff 100%);
}

.structure-board {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.structure-top {
  padding: 12px 14px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary-color, #0f8fb3), #0f766e);
  color: #fff;
  box-shadow: 0 8px 18px rgba(15, 143, 179, 0.18);
}

.structure-title-main {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 4px;
}

.structure-sub {
  font-size: 13px;
  opacity: 0.92;
}

.structure-lanes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.structure-lane {
  position: relative;
  min-height: 182px;
  border-radius: 14px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(15, 143, 179, 0.18);
  box-shadow: 0 4px 14px rgba(15, 39, 72, 0.07);
  overflow: hidden;
}

.structure-lane::after {
  content: '';
  position: absolute;
  right: -30px;
  top: -30px;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: rgba(15, 143, 179, 0.08);
}

.lane-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 10px;
}

.lane-num {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 900;
  background: var(--primary-color, #0f8fb3);
  box-shadow: 0 4px 10px rgba(15, 143, 179, 0.24);
}

.lane-title {
  font-weight: 900;
  color: #0f3554;
  font-size: 15px;
}

.lane-subtitle {
  color: #64748b;
  font-size: 12px;
}

.lane-card {
  position: relative;
  z-index: 1;
  padding: 9px 10px;
  border-radius: 9px;
  background: #fff;
  border-left: 4px solid var(--primary-color, #0f8fb3);
  margin-bottom: 8px;
}

.lane-card:last-child {
  margin-bottom: 0;
}

.lane-card strong {
  display: block;
  color: #0f3554;
  margin-bottom: 4px;
}

.lane-card p {
  margin: 0;
  color: #475569;
  font-size: 12px;
  line-height: 1.45;
}

.lane-position .lane-num,
.lane-position .lane-card {
  border-left-color: #0f8fb3;
}

.lane-nature .lane-num {
  background: #0f766e;
}

.lane-nature .lane-card {
  border-left-color: #0f766e;
}

.lane-human .lane-num {
  background: #c2410c;
}

.lane-human .lane-card {
  border-left-color: #f97316;
}

.lane-development .lane-num {
  background: #2563eb;
}

.lane-development .lane-card {
  border-left-color: #2563eb;
}

.structure-bottom {
  padding: 10px 12px;
  border-radius: 12px;
  background: #fff;
  border: 1px dashed rgba(15, 143, 179, 0.45);
}

.bottom-node {
  display: flex;
  align-items: center;
  gap: 10px;
}

.bottom-node span {
  flex-shrink: 0;
  border-radius: 999px;
  padding: 4px 9px;
  background: rgba(15, 143, 179, 0.1);
  color: var(--primary-color, #0f8fb3);
  font-size: 12px;
  font-weight: 900;
}

.bottom-node strong {
  color: #0f3554;
  line-height: 1.45;
}

.region-item.cooperation .region-title {
  color: #2563eb;
}

.region-item.sustainable .region-title {
  color: #0f766e;
}

@media (max-width: 1280px) {
  .structure-lanes {
    grid-template-columns: 1fr;
  }
}

/* 重新优化知识结构图：纵向主线版，避免右侧结构图被挤压 */
.knowledge-board-alt {
  min-height: 780px;
  padding: 18px;
}

.structure-board-tall {
  min-height: 710px;
  display: flex;
  flex-direction: column;
}

.structure-board-tall .structure-top {
  flex-shrink: 0;
}

.structure-mainline {
  flex: 1;
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 12px;
  margin-top: 12px;
}

.mainline-axis {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
}

.axis-dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color, #0f8fb3), #0f766e);
  color: #fff;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(15, 143, 179, 0.22);
  flex-shrink: 0;
}

.axis-line {
  width: 2px;
  flex: 1;
  min-height: 88px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(15, 143, 179, 0.58), rgba(15, 118, 110, 0.32));
}

.mainline-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.structure-section {
  border-radius: 14px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(15, 143, 179, 0.16);
  box-shadow: 0 4px 14px rgba(15, 39, 72, 0.07);
}

.section-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 9px;
}

.section-title {
  font-weight: 900;
  color: #0f3554;
  font-size: 15px;
}

.section-subtitle {
  margin-top: 3px;
  color: #64748b;
  font-size: 12px;
}

.section-title-row > span {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 4px 9px;
  color: #fff;
  font-size: 12px;
  font-weight: 900;
  background: var(--primary-color, #0f8fb3);
}

.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.section-card {
  border-radius: 10px;
  padding: 9px 10px;
  background: #f8fafc;
  border-left: 4px solid var(--primary-color, #0f8fb3);
}

.section-card strong {
  display: block;
  color: #0f3554;
  margin-bottom: 4px;
}

.section-card p {
  margin: 0;
  color: #475569;
  font-size: 12px;
  line-height: 1.48;
}

.section-position .section-title-row > span,
.section-position .section-card {
  border-left-color: #0f8fb3;
}

.section-nature .section-title-row > span {
  background: #0f766e;
}

.section-nature .section-card {
  border-left-color: #0f766e;
}

.section-human .section-title-row > span {
  background: #c2410c;
}

.section-human .section-card {
  border-left-color: #f97316;
}

.section-development .section-title-row > span {
  background: #2563eb;
}

.section-development .section-card {
  border-left-color: #2563eb;
}

.section-sustainable .section-title-row > span {
  background: #16a34a;
}

.section-sustainable .section-card {
  border-left-color: #16a34a;
}

.structure-board-tall .structure-bottom {
  margin-top: 12px;
  flex-shrink: 0;
}

@media (max-width: 1280px) {
  .knowledge-board-alt {
    min-height: 920px;
  }

  .structure-mainline {
    grid-template-columns: 34px 1fr;
  }

  .section-grid {
    grid-template-columns: 1fr;
  }

  .axis-line {
    min-height: 128px;
  }
}

/* 知识结构图自适应高度修正：不再写死高度，完全跟随内容撑开 */
.knowledge-board,
.knowledge-board-alt {
  min-height: auto !important;
  height: auto !important;
  overflow: visible !important;
}

.structure-board,
.structure-board-tall {
  min-height: 0 !important;
  height: auto !important;
}

.structure-board-tall {
  display: block !important;
}

.structure-mainline {
  flex: none !important;
  align-items: stretch;
  grid-template-columns: 42px minmax(0, 1fr);
}

.mainline-axis {
  height: 100%;
}

.axis-line {
  flex: 1 1 auto;
  min-height: 0 !important;
}

.mainline-content {
  height: auto;
}

.structure-section {
  height: auto;
}

.structure-board-tall .structure-bottom {
  margin-top: 12px;
}

@media (max-width: 1280px) {
  .knowledge-board,
  .knowledge-board-alt {
    min-height: auto !important;
  }

  .axis-line {
    min-height: 0 !important;
  }
}

.region-item.industry .region-title {
  color: #6d28d9;
}

.section-industry .section-title-row > span {
  background: #6d28d9;
}

.section-industry .section-card {
  border-left-color: #6d28d9;
}
</style>
