<template>
  <!-- banner -->
  <img class="home-banner-img" @click="opens" src="/Home/banner.jpg" alt="知值网-知识产权价值发现者" title="知值网-知识产权价值发现者">


  <router-link rel="noopener" to="/PatentEvaluation" style="display: inline-block;margin: 60px auto 60px;">
    <div class="header-content-box-search-flex">
      <input class="header-content-box-search-input" type="text" value="" placeholder="请输入专利号">
      <div class="header-content-box-search-input-btn">
        <div>
          免费评估
        </div>
      </div>
    </div>
  </router-link>

  <!-- classification -->
  <!--  <div class="classification-box">-->
  <!--    <router-link :to="item.hasChild == '1' ?'/IntellectualPropertyFinancialProductsList/'+item.id:'/IntellectualPropertyFinancialProductsDetail/'+item.id" class="classification-box-flex" v-for="(item,index) in dataList.List" :key="index">-->
  <!--      <div>-->
  <!--        <img class="classification-box-flex-img" :src="item.image" alt="">-->
  <!--      </div>-->
  <!--      <div class="classification-box-flex-title">{{item.name}}</div>-->
  <!--      <img class="classification-box-flex-back-hover-img" :src="item.image" alt="">-->
  <!--    </router-link>-->
  <!--  </div>-->


  <!-- product-list -->


<!--  <div class="product-list">-->
<!--    <div class="product-list-box-title-s">-->
<!--      <el-row span="24" justify="center" type="flex">-->
<!--        <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="24">-->
<!--          <div class="product-list-box-title">融资产品</div>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </div>-->
<!--    <div class="product-list-box">-->
<!--      <div class="product-list-box-title-more">-->
<!--        <el-row justify="center" type="flex">-->
<!--          <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="24">-->
<!--            <router-link to="/IntellectualPropertyFinancialProducts">-->
<!--              查看更多-->
<!--              <i class="iconfont icon-jiantou1"></i>-->
<!--            </router-link>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->
<!--      <div class="product-list-box-content-box">-->
<!--        <el-row justify="center" type="flex">-->
<!--          <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="24">-->
<!--            <div class="product-list-box-max-w-box-flex">-->
<!--              <el-row justify="center" type="flex" :gutter="32">-->
<!--                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"-->
<!--                        v-for="(item,index) in dataList.Lists.slice(0,4)"-->
<!--                        :key="item.id">-->
<!--                  <div class="product-list-box-max-w-box-flex-box">-->
<!--                    <div class="product-list-box-max-w-box-flex-box-title-one">{{ item.name }}</div>-->
<!--                    <div v-if="item.field">-->
<!--                      <div v-for="(items,indexs) in item.field.slice(0,3)" :key="indexs">-->
<!--                        <div class="product-list-box-max-w-box-flex-box-text">{{ items.label }}</div>-->
<!--                        <div class="product-list-box-max-w-box-flex-box-content">{{ items.value }}</div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <router-link rel="noopener" :to="'/IntellectualPropertyFinancialProductsDetail/'+item.id"-->
<!--                                 class="product-list-box-max-w-box-flex-box-btn">查看详情-->
<!--                    </router-link>-->
<!--                  </div>-->
<!--                </el-col>-->
<!--              </el-row>-->
<!--            </div>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <!-- advertisement -->

<!--  <router-link rel="noopener" :to="store.state.Config.purl">-->
<!--    <img class="advertisement-img" src="/Home/组-794@2x.jpg" alt="">-->
<!--  </router-link>-->


  <!-- product-tabs -->
  <!--  <div class="product-tabs-box">-->
  <!--    <div class="product-tabs-box-flex">-->
  <!--      <div class="product-tabs-box-flex-title">知识产权交易</div>-->
  <!--      <router-link rel="noopener" to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-right-flex">-->
  <!--        查看更多-->
  <!--        <i class="iconfont icon-jiantou1"></i>-->
  <!--      </router-link>-->
  <!--    </div>-->
  <!--    <div class="product-tabs-box-tab-position-box">-->
  <!--      <div class="product-tabs-box-tab-position-box-flex">-->
  <!--        <div v-for="(item, index) in dataList.titleList" :key="index"-->
  <!--             :class="dataList.isDefault == index?'selected product-tabs-box-tab-position-box-flex-tab':'product-tabs-box-tab-position-box-flex-tab' "-->
  <!--             @mouseenter="productMouseenter(item,index)">-->
  <!--          {{ item }}-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="product-tabs-box-tab-position-box-flex-tab-box" v-if="dataList.isDefault == 0">-->
  <!--        <div class="product-tabs-box-tab-position-box-flex-tab-box-top">-->
  <!--&lt;!&ndash;          <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex">&ndash;&gt;-->
  <!--&lt;!&ndash;            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-left-flex">&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-left-flex-title">发明专利</div>&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-left-flex-title">实用新型</div>&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-left-flex-title">外观专利</div>&ndash;&gt;-->
  <!--&lt;!&ndash;            </div>&ndash;&gt;-->
  <!--&lt;!&ndash;            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-right-flex">&ndash;&gt;-->
  <!--&lt;!&ndash;              查看更多&ndash;&gt;-->
  <!--&lt;!&ndash;              <i class="iconfont icon-jiantou1"></i>&ndash;&gt;-->
  <!--&lt;!&ndash;            </div>&ndash;&gt;-->
  <!--&lt;!&ndash;          </div>&ndash;&gt;-->
  <!--          <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box">-->
  <!--            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/5555555.png" alt="">-->
  <!--              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">灯盏花乙素－磷脂复合物-->
  <!--                及其固体分散体、微乳......-->
  <!--              </div>-->
  <!--              <router-link rel="noopener" to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                查看详情-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/202102241703586184774@2x.png" alt="">-->
  <!--              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">灯盏花乙素－磷脂复合物-->
  <!--                及其固体分散体、微乳......-->
  <!--              </div>-->
  <!--              <router-link rel="noopener" to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                查看详情-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/202102241703457687815@2x.png" alt="">-->
  <!--              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">灯盏花乙素－磷脂复合物-->
  <!--                及其固体分散体、微乳......-->
  <!--              </div>-->
  <!--              <router-link rel="noopener" to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                查看详情-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/202102241703469369585@2x.png" alt="">-->
  <!--              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">灯盏花乙素－磷脂复合物-->
  <!--                及其固体分散体、微乳......-->
  <!--              </div>-->
  <!--              <router-link rel="noopener" to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                查看详情-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="product-tabs-box-tab-position-box-flex-tab-box" v-if="dataList.isDefault == 1">-->
  <!--        <div class="product-tabs-box-tab-position-box-flex-tab-box-top">-->
  <!--          <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box">-->
  <!--            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/5555555.png" alt="">-->
  <!--              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">灯盏花乙素－磷脂复合物-->
  <!--                及其固体分散体、微乳......-->
  <!--              </div>-->
  <!--              <router-link to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                查看详情-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/202102241703457687815@2x.png" alt="">-->
  <!--              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">灯盏花乙素－磷脂复合物-->
  <!--                及其固体分散体、微乳......-->
  <!--              </div>-->
  <!--              <router-link to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                查看详情-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/202102241703586184774@2x.png" alt="">-->
  <!--              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">灯盏花乙素－磷脂复合物-->
  <!--                及其固体分散体、微乳......-->
  <!--              </div>-->
  <!--              <router-link to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                查看详情-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/202102241703469369585@2x.png" alt="">-->
  <!--              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">灯盏花乙素－磷脂复合物-->
  <!--                及其固体分散体、微乳......-->
  <!--              </div>-->
  <!--              <router-link to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                查看详情-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="product-tabs-box-tab-position-box-flex-tab-box" v-if="dataList.isDefault == 2">-->
  <!--        <div class="product-tabs-box-tab-position-box-flex-tab-box-top">-->
  <!--          <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box">-->
  <!--            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/202102241703457687815@2x.png" alt="">-->
  <!--              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">灯盏花乙素－磷脂复合物-->
  <!--                及其固体分散体、微乳......-->
  <!--              </div>-->
  <!--              <router-link to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                查看详情-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/202102241703469369585@2x.png" alt="">-->
  <!--              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">灯盏花乙素－磷脂复合物-->
  <!--                及其固体分散体、微乳......-->
  <!--              </div>-->
  <!--              <router-link to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                查看详情-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/5555555.png" alt="">-->
  <!--              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">灯盏花乙素－磷脂复合物-->
  <!--                及其固体分散体、微乳......-->
  <!--              </div>-->
  <!--              <router-link to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                查看详情-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--            <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/202102241703586184774@2x.png" alt="">-->
  <!--              <div class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">灯盏花乙素－磷脂复合物-->
  <!--                及其固体分散体、微乳......-->
  <!--              </div>-->
  <!--              <router-link to="/PropertyRight" class="product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                查看详情-->
  <!--              </router-link>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="product-tabs-box-flex-subset-flex">-->
  <!--        <router-link to="/PropertyRight" class="product-tabs-box-flex-subset-flex-doubt-btn">我要购买知识产权</router-link>-->
  <!--        <router-link to="/PropertyRight" class="product-tabs-box-flex-subset-flex-doubt-btn">我要出售知识产权</router-link>-->
  <!--      </div>-->
  <!--    </div>-->

  <!--  </div>-->


  <!-- product-achievements -->
  <!--  <div class="product-achievements-box">-->
  <!--    <div class="product-achievements-box-flex">-->
  <!--      <div class="product-achievements-box-flex-title">成果转化</div>-->
  <!--    </div>-->
  <!--    <div class="product-achievements-box-tab-position-box">-->
  <!--      <div class="product-achievements-box-tab-position-box-flex-tab-box">-->
  <!--        <div class="product-achievements-box-tab-position-box-flex-tab-box-top">-->
  <!--          <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box">-->
  <!--            <div class="product-achievements-box-tab-position-box-flex">-->
  <!--              <div v-for="(item, index) in dataList.tabList" :key="index"-->
  <!--                   :class="dataList.isDefaults == index?'selected-achievements product-achievements-box-tab-position-box-flex-tab':'product-achievements-box-tab-position-box-flex-tab' "-->
  <!--                   @mouseenter="productMouseenterAchievements(item,index)">-->
  <!--                {{ item }}-->
  <!--              </div>-->
  <!--              <div class="selected-achievements-lin"></div>-->
  <!--              <router-link to="/PropertyRightDemand" class="product-achievements-box-tab-position-box-flex-btn">发布需求</router-link>-->
  <!--            </div>-->
  <!--            <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/4CAF1AA3-BFF7-40E0-85CE-ADB732E833CB.jpg" alt="">-->
  <!--              <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">-->
  <!--                可循环纤塑材料 废旧纺织品资源化 再利用-->
  <!--              </div>-->
  <!--              <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-text">-->
  <!--                聚对苯二甲酸乙二醇酯（PET）是生活中常见的、数量最大的一种高分子材料。PET产品形态-->
  <!--              </div>-->
  <!--              <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn-box">-->
  <!--                <div>-->
  <!--                  <router-link to="" class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                    节能环保-->
  <!--                  </router-link>-->
  <!--                  <router-link to="" class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                    新材料-->
  <!--                  </router-link>-->
  <!--                </div>-->
  <!--                <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn-box-label">-->
  <!--                  产业化-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--            <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/1615969731606_2BF75E26-191F-45ED-8849-A15516489D9D-1.png" alt="">-->
  <!--              <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">-->
  <!--                可循环纤塑材料 废旧纺织品资源化 再利用-->
  <!--              </div>-->
  <!--              <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-text">-->
  <!--                聚对苯二甲酸乙二醇酯（PET）是生活中常见的、数量最大的一种高分子材料。PET产品形态-->
  <!--              </div>-->
  <!--              <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn-box">-->
  <!--                <div>-->
  <!--                  <router-link to="" class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                    节能环保-->
  <!--                  </router-link>-->
  <!--                  <router-link to="" class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                    新材料-->
  <!--                  </router-link>-->
  <!--                </div>-->
  <!--                <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn-box-label">-->
  <!--                  产业化-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--            <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div">-->
  <!--              <img class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img"-->
  <!--                   src="/Home/C4AD3CC7-C0D2-4ACF-B08A-94CFBAE510A2.jpg" alt="">-->
  <!--              <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title">-->
  <!--                可循环纤塑材料 废旧纺织品资源化 再利用-->
  <!--              </div>-->
  <!--              <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-text">-->
  <!--                聚对苯二甲酸乙二醇酯（PET）是生活中常见的、数量最大的一种高分子材料。PET产品形态-->
  <!--              </div>-->
  <!--              <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn-box">-->
  <!--                <div>-->
  <!--                  <router-link to="" class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                    节能环保-->
  <!--                  </router-link>-->
  <!--                  <router-link to="" class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn">-->
  <!--                    新材料-->
  <!--                  </router-link>-->
  <!--                </div>-->
  <!--                <div class="product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn-box-label">-->
  <!--                  产业化-->
  <!--                </div>-->
  <!--              </div>-->

  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

  <!-- product-service -->
  <div class="product-service-box">
    <div class="product-service-box-flex">
      <el-row justify="center" type="flex">
        <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="24">
          <div class="product-service-box-flex-title">合作案例</div>
        </el-col>
      </el-row>
      <div class="product-service-box-tab-position-box">
        <div class="product-service-box-tab-position-box-right">
          <el-row justify="center" type="flex">
            <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="24">
              <div class="product-service-box-tab-position-box-right-bottom">
                <el-row justify="center" type="flex" :gutter="20">
                  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" :offset="-10">
                    <div class="product-service-box-tab-position-box-right-bottom-box">
                      <img class="product-service-box-tab-position-box-right-bottom-img" src="/Home/zhuanli/1.png"
                           alt="">
                    </div>
                  </el-col>
                  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                    <div class="product-service-box-tab-position-box-right-bottom-box">
                      <img class="product-service-box-tab-position-box-right-bottom-img" src="/Home/zhuanli/2.png"
                           alt="">
                    </div>
                  </el-col>
                  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                    <div class="product-service-box-tab-position-box-right-bottom-box">
                      <img class="product-service-box-tab-position-box-right-bottom-img" src="/Home/zhuanli/3.png"
                           alt="">
                    </div>
                  </el-col>
                  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" :push="-10">
                    <div class="product-service-box-tab-position-box-right-bottom-box">
                      <img class="product-service-box-tab-position-box-right-bottom-img" src="/Home/zhuanli/4.jpg"
                           alt="">
                    </div>
                  </el-col>
                </el-row>
                <el-row justify="center" type="flex" :gutter="20">
                  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" :offset="-10">
                    <div class="product-service-box-tab-position-box-right-bottom-box">
                      <img class="product-service-box-tab-position-box-right-bottom-img" src="/Home/zhuanli/5.png"
                           alt="">
                    </div>
                  </el-col>
                  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                    <div class="product-service-box-tab-position-box-right-bottom-box">
                      <img class="product-service-box-tab-position-box-right-bottom-img" src="/Home/zhuanli/6.png"
                           alt="">
                    </div>
                  </el-col>
                  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                    <div class="product-service-box-tab-position-box-right-bottom-box">
                      <img class="product-service-box-tab-position-box-right-bottom-img" src="/Home/zhuanli/7.png"
                           alt="">
                    </div>
                  </el-col>
                  <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" :push="-10">
                    <div class="product-service-box-tab-position-box-right-bottom-box">
                      <img class="product-service-box-tab-position-box-right-bottom-img" src="/Home/zhuanli/8.jpg"
                           alt="">
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>

        </div>
      </div>
    </div>
  </div>


  <!-- mechanism-list -->
  <div class="mechanism-list-box">
    <div class="mechanism-list-box-top">
      <el-row justify="center" type="flex">
        <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="24">
          <div class="mechanism-list-box-top-btn-list">
            <div class="mechanism-list-box-top-title">合作融资机构</div>
            <div
                :class="dataList.isDefaultss === index?'isDefaultss mechanism-list-box-top-btn-list-btn':'mechanism-list-box-top-btn-list-btn'"
                v-for="(item,index) in ['合作银行','融资机构']" :key="item" @mouseenter="MechanismMouseenter(item,index)">
              {{ item }}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row justify="center" type="flex">
      <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="24">
        <div class="mechanism-list-box-bottom" v-if="dataList.isDefaultss === 0">
          <el-row justify="start" type="flex" :gutter="30">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :offset="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/1.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/4.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/5.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/6.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :push="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/7.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :push="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/8.png" alt="">
            </el-col>
          </el-row>
          <el-row justify="start" type="flex" :gutter="30">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :offset="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/9.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/10.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/11.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/12.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :push="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/13.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :push="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/14.png" alt="">
            </el-col>
          </el-row>
          <el-row justify="start" type="flex" :gutter="30">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :offset="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/15.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/16.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/17.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/18.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :push="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/19.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :push="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/20.png" alt="">
            </el-col>
          </el-row>
          <el-row justify="start" type="flex" :gutter="30">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :offset="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/21.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/22.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/23.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/24.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :push="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/hezuo/25.png" alt="">
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row justify="center" type="flex">
      <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="24">
        <div class="mechanism-list-box-bottom" v-if="dataList.isDefaultss === 1">
          <el-row justify="start" type="flex" :gutter="30">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :offset="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/jigou/1.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/jigou/2.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/jigou/3.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/jigou/4.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/jigou/6.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :push="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/jigou/5.png" alt="">
            </el-col>
          </el-row>
          <el-row justify="start" type="flex" :gutter="30">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :offset="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/jigou/8.png" alt="">
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :push="-30">
              <img class="mechanism-list-box-bottom-box-img" src="/Home/jigou/9.png" alt="">
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  onMounted
} from "vue";
import {PostTechnologyFinancialProducts} from '/src/Axios/API/TechnologyFinancialProducts.js'
import {useStore} from 'vuex'
export default {
  setup() {
    const store = useStore()
    const data = ref('string,number')
    const dataList = reactive({
      List: [],
      Lists: [],
      pageParam: {
        pageNum: 1,
        pageSize: 10,
      },
      titleList: [
        '专利',
        '商标',
        '著作权'
      ],
      tabList: [
        '科技成果',
        '技术需求',
        '人才专家',
        '服务机构'
      ],
      isDefaultss: 0,
      isDefault: 0,
      isDefaults: 0
    })
    const productMouseenter = (item, index) => {
      dataList.isDefault = index;
    }
    const productMouseenterAchievements = (item, index) => {
      dataList.isDefaults = index;
    }
    const MechanismMouseenter = (item, index) => {
      dataList.isDefaultss = index;
    }
    const opens = ()=>{
      window.open(store.state.Config.purl,'_blank')
    }
    onMounted(() => {
      PostTechnologyFinancialProducts({
        entity: {},
        pageParam: dataList.pageParam
      }).then(res => {
        if (res.data.code == 200) {
          dataList.Lists = res.data.data.rows.slice(0, 5)
          for (let i = 0; i < dataList.Lists.length; i++) {
            if (res.data.data.rows[i].field) {
              dataList.Lists[i].field = JSON.parse(res.data.data.rows[i].field)
            }
          }
        }
      }).catch(err => {
        console.log(err)
      })
    })
    return {
      tabPosition: 'top',
      data,
      dataList,
      opens,
      store,
      productMouseenter,
      productMouseenterAchievements,
      MechanismMouseenter
    }
  },


}
</script>

<style rel="stylesheet" lang="scss" scoped>

//banner
.home-banner-img {
  width: 100%;
  cursor: pointer;
}

//classification
.classification-box {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-flow: wrap;
  width: 1300px;
  margin: 40px auto;

  .classification-box-flex {
    width: 32%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    transition: 1s;
    padding: 19px 0;
    margin: 1%;
    background-color: #ffffff;
    border-radius: 10px;

    &:nth-child(n-1) {
      margin-left: 0;
    }

    &:nth-child(n+3) {
      margin-right: 0;
    }

    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      .classification-box-flex-back-hover-img {
        opacity: 0.2;
      }
    }

    .classification-box-flex-img {
      width: 88px;
      height: 88px;
      margin-right: 45px;

    }

    .classification-box-flex-title {
      font-size: 20px;
      font-weight: bold;
    }

    .classification-box-flex-back-hover-img {
      position: absolute;
      right: -20px;
      bottom: -20px;
      width: 144px;
      height: 144px;
      opacity: 0;
      transition: 1s;
    }
  }
}

//product-list
.product-list {
  width: 100%;
  position: relative;

  .product-list-box-title-s {
    max-width: 1300px;
    min-width: 1000px;
    margin: 59px auto 39px;

    .product-list-box-title {
      font-size: 32px;
      font-weight: bold;
      text-align: left;
      color: #333333;
      text-indent: 22px;
      text-shadow: 0 1px 2px rgba(74, 74, 74, 0.5);
      position: relative;

      &:before {
        content: '';
        width: 8px;
        height: 38px;
        background: #FF6930;
        position: absolute;
        left: 0;
        top: 3px;
        box-shadow: 2px 2px 2px 0 rgba(107, 39, 13, 0.17);
      }
    }
  }


  .product-list-back-img {
    width: 100%;
    height: 573px;
  }

  .product-list-box {
    background-image: url("/Home/位图.jpg");
    background-size:100%;
    background-repeat: no-repeat;

    .product-list-box-title-more {
      max-width: 1300px;
      min-width: 1000px;
      padding-top: 16px;
      margin: 0 auto 16px;
      font-size: 16px;
      text-align: right;

      a {
        font-size: 16px;
        color: #FFFFFF;
      }
    }

    .product-list-box-content-box {
      max-width: 1300px;
      min-width: 1000px;
      margin: 0 auto;
    }

    .product-list-box-max-w-box-flex {
      margin: 0 auto 0;
      padding-bottom: 64px;

      .product-list-box-max-w-box-flex-box {
        min-width: 220px;
        border-radius: 10px;
        overflow: hidden;
        flex-shrink: 1;
        padding: 20px 20px;
        background-color: #ffffff;
        text-align: center;
        transition: 0.3s;

        &:nth-child(1) {
          margin-left: 0;
        }

        &:nth-last-child(1) {
          margin-right: 0;
        }

        &:hover {
          box-shadow: 0 2px 12px 0 rgba(255, 106, 59, 0.4);
          transform: scale(1.05, 1.05);
        }

        .product-list-box-max-w-box-flex-box-title-one {
          font-size: 19px;
          font-weight: bold;
          margin-bottom: 25px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .product-list-box-max-w-box-flex-box-title {
          font-size: 19px;
          font-weight: bold;
          overflow: hidden;
          margin-bottom: 10px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .product-list-box-max-w-box-flex-box-text {
          color: #333333;
          font-size: 18px;
          display: inline-block;
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .product-list-box-max-w-box-flex-box-content {
          color: #888888;
          font-size: 14px;
          margin-bottom: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .product-list-box-max-w-box-flex-box-btn {
          display: inline-block;
          border: 2px solid #FF6A3B;
          background-color: #ffffff;
          color: #FF6A3B;
          font-size: 14px;
          width: 140px;
          height: 42px;
          margin: 0 auto;
          line-height: 42px;
          border-radius: 8px;
          text-align: center;
          transition: 0.3s;

          &:hover {
            background-color: #FF6930;
            color: #ffffff;
            box-shadow: 0 2px 12px 0 rgba(255, 106, 59, 0.4);
          }
        }
      }
    }

  }
}

//advertisement
.advertisement-img {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: #FB8B46;

  .advertisement-img-title {
    font-size: 24px;
    margin-right: 38px;
    color: #ffffff;
  }

  .advertisement-img-btn {
    padding: 5px 15px;
    font-size: 22px;
    border: 2px solid #ffffff;
    border-radius: 4px;
    color: #ffffff;
  }
}

// 搜索框
.header-content-box-search-flex {
  display: flex;
  width: 700px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 4px 20px 0 rgba(152, 152, 152, 0.5);
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    transform: scale(1.06, 1.06);
  }

  .header-content-box-search-input {
    width: 482px;
    height: 90px;
    padding: 0 30px;
    font-size: 24px;
    border-bottom: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    cursor: pointer;

  }

  .header-content-box-search-input-btn {
    background-color: #FF6A3B;
    width: 158px;
    flex: 1;
    height: 90px;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    line-height: 12px;
    cursor: pointer;
    justify-content: center;
    color: #ffffff;

    .btn-English {
      color: #ffffff;
      font-size: 10px;
    }
  }
}


//product-tabs
.product-tabs-box {
  width: 1300px;
  margin: 0 auto 0;

  .product-tabs-box-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    .product-tabs-box-flex-title {
      width: 1300px;
      margin: 59px auto 39px;
      font-size: 32px;
      font-weight: bold;
      text-align: left;
      color: #333333;
      text-indent: 22px;
      text-shadow: 0 1px 2px rgba(74, 74, 74, 0.5);
      position: relative;

      &:before {
        content: '';
        width: 8px;
        height: 38px;
        background: #FF6930;
        position: absolute;
        left: 0;
        top: 3px;
        box-shadow: 2px 2px 2px 0 rgba(107, 39, 13, 0.17);
      }
    }

    .product-tabs-box-tab-position-box-flex-tab-box-top-flex-right-flex {
      display: flex;
      justify-content: flex-end;
      align-content: flex-end;
      align-items: center;
      color: #FF6A3B;
      font-size: 14px;
      margin-top: 90px;
      width: 100px;

      .icon-jiantou1 {
        font-size: 20px;
        margin-right: 0;
      }
    }
  }

  .product-tabs-box-tab-position-box {
    width: 1300px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.11);
    border-radius: 8px 8px 0 0;

    .product-tabs-box-flex-subset-flex {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      padding: 34px 0;

      .product-tabs-box-flex-subset-flex-doubt-title {
        font-size: 17px;
        color: #333333;
      }

      .product-tabs-box-flex-subset-flex-doubt-btn {
        height: 46px;
        border: 2px solid #FF6A3B;
        display: inline-block;
        color: #FF6A3B;
        font-size: 14px;
        line-height: 48px;
        padding: 0 20px;
        border-radius: 30px;
        text-align: center;
        transition: 0.3s;
        margin: 0 16px;

        &:hover {
          background-color: #FF6A3B;
          color: #ffffff;
          box-shadow: 0 2px 12px 0 rgba(255, 106, 59, 0.4);
        }
      }
    }

    .product-tabs-box-tab-position-box-flex {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      color: #ffffff;
      position: relative;

      .product-tabs-box-tab-position-box-flex-tab {
        width: 1300px;
        height: 72px;
        line-height: 72px;
        font-size: 20px;
        font-weight: bold;
        background-color: #FF6A3B;
        color: #ffffff;
        position: relative;
      }

      .selected {
        background-color: #ffffff;
        color: #333333;
      }

    }

    .product-tabs-box-tab-position-box-flex-tab-box {
      display: block;
      width: 1240px;
      padding: 31px 30px 0 30px;
      background-color: #ffffff;

      .product-tabs-box-tab-position-box-flex-tab-box-top-flex {
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        margin-bottom: 40px;

        .product-tabs-box-tab-position-box-flex-tab-box-top-flex-left-flex {
          display: flex;
          justify-content: flex-start;
          align-content: flex-start;
          align-items: center;

          .product-tabs-box-tab-position-box-flex-tab-box-top-flex-left-flex-title {
            margin: 0 20px;
            color: #666666;
            font-size: 14px;
          }
        }


      }

      .product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;

        .product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div {
          background-color: #ffffff;
          width: 25%;
          display: flex;
          justify-content: center;
          align-content: center;
          flex-flow: wrap;
          margin: 0 15px;
          transition: 0.3s;
          box-shadow: 0 2px 14px 0 rgba(197, 197, 197, 0.5);
          border-radius: 8px;

          &:nth-child(1) {
            margin-left: 0;
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }

          &:hover {
            box-shadow: 0 2px 16px 0 rgba(128, 128, 128, 0.5);
            transform: scale(1.06, 1.06);

            .product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn {
              background-color: #FF6A3B;
              color: #ffffff;
              box-shadow: 0 2px 12px 0 rgba(255, 106, 59, 0.4);
            }

          }

          .product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img {
            width: 268px;
            height: 185px;
            margin-top: 9px;
          }

          .product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title {
            font-size: 17px;
            color: #333333;
            margin-top: 13px;
            text-align: left;
            line-height: initial;
            padding: 0 20px;
          }

          .product-tabs-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn {
            width: 127px;
            height: 39px;
            border: 2px solid #FF6A3B;
            border-radius: 8px;
            line-height: 39px;
            font-size: 15px;
            text-align: center;
            background-color: #ffffff;
            color: #FF6A3B;
            transition: 0.3s;
            margin-top: 22px;
            margin-bottom: 24px;
          }
        }
      }
    }
  }
}

//product-achievements
.product-achievements-box {
  width: 1300px;
  margin: 60px auto 0;
  background-color: #F9F9F9;

  .product-achievements-box-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 43px;

    .product-achievements-box-flex-title {
      font-size: 36px;
      color: #333333;
    }
  }

  .product-achievements-box-tab-position-box {
    width: 1300px;
    margin: 0 auto;

    .product-achievements-box-tab-position-box-flex-tab-box {
      display: block;
      width: 1300px;
      background-color: #F9F9F9;


      .product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;

        .product-achievements-box-tab-position-box-flex {
          width: 280px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          align-content: center;
          color: #333333;
          background-color: #4C9EFC;
          padding-top: 23px;
          margin-right: 15px;

          .selected-achievements-lin {
            height: 26px;
            width: 100%;
            background-color: #4C9EFC;
            position: relative;
          }

          .product-achievements-box-tab-position-box-flex-btn {
            display: inline-block;
            border: 1px solid #ffffff;
            background-color: #4C9EFC;
            color: #ffffff;
            font-size: 18px;
            width: 194px;
            height: 56px;
            line-height: 57px;
            border-radius: 30px;
            text-align: center;
            transition: 0.3s;
            margin-bottom: 26px;

            &:hover {
              box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
            }
          }

          .product-achievements-box-tab-position-box-flex-tab {
            width: 280px;
            height: 59px;
            line-height: 59px;
            font-size: 16px;
            background-color: #4C9EFC;
            color: #ffffff;
            position: relative;
          }

          .selected-achievements {
            background-color: #227DE7;
            color: #ffffff;
            position: relative;

            &::before {
              content: '';
              width: 14px;
              height: 59px;
              background-color: #227DE7;
              position: absolute;
              left: -14px;
              top: 0;
            }

            &::after {
              content: '';
              border-top: 14px solid #227DE7;
              border-bottom: 14px solid transparent;
              border-left: 14px solid transparent;
              border-right: 14px solid transparent;
              position: absolute;
              left: -14px;
              bottom: -28px;
              z-index: 0;
            }
          }
        }

        .product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div {
          background-color: #ffffff;
          width: 25%;
          display: flex;
          justify-content: center;
          align-content: center;
          flex-flow: wrap;
          margin: 0 15px;
          transition: 0.3s;

          &:hover {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }

          .product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-img {
            width: 288px;
            height: 194px;
            margin: 11px 10px 0 10px;
          }

          .product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-title {
            font-size: 16px;
            color: #333333;
            margin-top: 20px;
            line-height: initial;
            padding: 0 10px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-align: left;
          }

          .product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-text {
            font-size: 14px;
            text-align: left;
            color: #666666;
            display: -webkit-box;
            padding: 10px 10px 0;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }

          .product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn-box {
            width: 100%;
            margin-top: 18px;
            padding: 0 10px;
            margin-bottom: 24px;
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;

            .product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn-box-label {
              color: #FF6A3B;
              font-size: 12px;
            }

            .product-achievements-box-tab-position-box-flex-tab-box-top-flex-content-box-div-btn {
              font-size: 12px;
              text-align: center;
              background-color: #E8EFFF;
              color: #4573DF;
              transition: 0.3s;
              padding: 8px;
              margin-right: 9px;

              &:hover {
                background-color: #3f84ec;
                color: #ffffff;
                box-shadow: 0 2px 12px 0 rgba(63, 132, 236, 0.4);
              }
            }
          }

        }
      }
    }
  }
}

//product-service
.product-service-box {
  max-width: 1300px;
  min-width: 1000px;
  margin: 60px auto 0;

  .product-service-box-flex {
    text-align: left;

    .product-service-box-flex-title {
      font-size: 32px;
      font-weight: bold;
      color: #333333;
      margin-bottom: 37px;
      text-indent: 22px;
      position: relative;
      text-shadow: 0 1px 2px rgba(74, 74, 74, 0.5);

      &:before {
        content: '';
        width: 8px;
        height: 38px;
        background: #FF6930;
        position: absolute;
        left: 0;
        top: 3px;
        box-shadow: 2px 2px 2px 0 rgba(107, 39, 13, 0.17);
      }
    }

    .product-service-box-tab-position-box {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;

      .product-service-box-tab-position-box-left {
        width: 279px;
        padding: 21px 23px 18px 24px;
        height: 415px;
        margin-right: 15px;
        background-color: #ffffff;

        .product-service-box-tab-position-box-left-title {
          font-size: 18px;
          color: #335FC4;
          width: 100%;
          text-align: left;
          margin-bottom: 21px;
        }

        .product-service-box-tab-position-box-left-title-box {
          height: 363px;
        }

        .product-service-box-tab-position-box-left-title-img {
          width: 279px;
          height: 338px;
        }

        .el-carousel__item h3 {
          color: #ffffff;
          font-size: 18px;
          opacity: 0.75;
          line-height: 338px;
          margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
          //background-color: #456ECA;
        }

        .el-carousel__item:nth-child(2n+1) {
          //background-color: #456ECA;
        }
      }

      .product-service-box-tab-position-box-right {
        //margin-left:15px;
        background-color: #ffffff;
        width: 1300px;
        padding: 26.5px 0;

        .product-service-box-tab-position-box-right-top {
          width: 100%;
          font-size: 18px;
          color: #335FC4;
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center;
          margin-bottom: 22px;

          .product-service-box-tab-position-box-right-top-left {
            font-size: 18px;
            color: #335FC4;
          }

          .product-service-box-tab-position-box-right-top-right {
            font-size: 16px;
            color: #335FC4;

            .icon-jiantou1 {
              font-size: 18px;
            }
          }
        }

        .product-service-box-tab-position-box-right-bottom {
          font-size: 18px;
          color: #335FC4;

          .product-service-box-tab-position-box-right-bottom-box {
            height: 94px;
            display: flex;
            align-content: center;
            justify-content: center;
            background-color: #ffffff;
            box-shadow: 0 4px 18px 0 rgba(217, 217, 217, 0.5);
            align-items: center;
            margin: 12px 0;
            overflow: hidden;

            &:hover {
              box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
            }

            .product-service-box-tab-position-box-right-bottom-img {
              height: 35px;
              //margin-top:28px;
            }

            .product-service-box-tab-position-box-right-bottom-title {
              font-size: 20px;
              color: #333333;
              margin-top: 7px;
            }

            .product-service-box-tab-position-box-right-bottom-text {
              font-size: 14px;
              color: #666666;
              margin-top: 11px;
            }

            .product-service-box-tab-position-box-right-bottom-communicate {
              font-size: 18px;
              color: #FF6A3B;
              margin-top: 6px;
            }
          }
        }
      }
    }
  }
}


//mechanism-list
.mechanism-list-box {
  max-width: 1300px;
  min-width: 1000px;
  margin: 66px auto 60px;

  .mechanism-list-box-top {
    text-align: left;


    .mechanism-list-box-top-btn-list {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      align-content: center;

      .mechanism-list-box-top-title {
        margin-right: 33px;
        font-size: 32px;
        width: 240px;
        color: #333333;
        font-weight: bold;
        text-indent: 22px;
        text-shadow: 0 1px 2px rgba(74, 74, 74, 0.5);
        position: relative;

        &:before {
          content: '';
          width: 8px;
          height: 38px;
          background: #FF6930;
          position: absolute;
          left: 0;
          top: 3px;
          box-shadow: 2px 2px 2px 0 rgba(107, 39, 13, 0.17);
        }
      }

      .mechanism-list-box-top-btn-list-btn {
        padding: 6px 7px 6px 8px;
        background-color: #FFFFFF;
        border: 1px solid #CECECE;
        font-size: 14px;
        border-radius: 4px;
        margin: 0 5px;
        cursor: pointer;
      }

      .isDefaultss {
        background-color: #3461C5;
        color: #ffffff;
      }
    }
  }

  .mechanism-list-box-bottom {
    margin-top: 40px;

    .mechanism-list-box-bottom-box-img {
      height: 60px;
      margin: 10px 0;
      vertical-align: middle;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      //&:nth-child(5n+5) {
      //  margin-right: 0;
      //}
      //
      //&:nth-child(5n+1) {
      //  margin-left: 0;
      //}

      &:hover {
        //border:1px solid rgba(0, 0, 0, 0.4);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
      }
    }
  }
}


//响应式布局
@media screen and (min-width: 1920px) {
  .product-list-box {
  }
}

@media screen and (max-width: 1920px) {
  .product-list-box {
  }
}

//
//@media screen and (max-width: 1200px) {
//  .product-list-box-title {
//    width: 1000px !important;
//  }
//  .product-tabs-box {
//    width: 1000px !important;
//  }
//}
//
//@media screen and (max-width: 1100px) {
//  .product-list-box-title {
//    width: 900px !important;
//  }
//  .product-tabs-box {
//    width: 900px !important;
//  }
//}
//
//@media screen and (max-width: 1000px) {
//  .product-list-box-title {
//    width: 800px !important;
//  }
//  .product-tabs-box {
//    width: 800px !important;
//  }
//}
</style>
