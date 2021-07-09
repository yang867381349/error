<template>
  <div
      :class="dataList.metaName === 'AchievementTransformation'?'AchievementTransformation-none':'AchievementTransformation-back'">
    <div class="header-content-box">

      <div class="header-content-box-flex">
        <el-row span="24" justify="center" type="flex">
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="min-width: 271px;">
            <router-link to="/" class="header-content-box-flex-logo-flex">
              <img class="header-content-box-logo"
                   :src="store.state.Config.headLogo"
                   alt="知值网">
            </router-link>
          </el-col>
          <el-col :xs="0" :sm="0" :md="0" :lg="2" :xl="4"></el-col>
          <el-col :xs="16" :sm="16" :md="16" :lg="14" :xl="14">
            <div class="header-content-box-right-flex">
              <router-link :to="'/rzcp/'+dataList.pathUrl" class="header-content-box-search-flex">
                <input class="header-content-box-search-input" disabled type="text" placeholder="请输入要搜索的融资产品">
                <div class="header-content-box-search-input-btn">
                  <div>
                    搜索
                  </div>
                  <div class="btn-English">
                    Search
                  </div>
                </div>
              </router-link>
              <div class="header-content-box-search-flex-two">
                <div class="header-content-box-search-flex-two-title">服务热线</div>
                <div class="header-content-box-search-flex-two-phone">{{ store.state.Config.telephone }}</div>
              </div>
              <div class="header-content-box-search-flex-three" @click="SignIn"
                   v-if="!dataList.token || !dataList.phone" style="border:1px solid #999999;">
                <div>登录</div>
                <div class="header-content-box-search-flex-three-line"></div>
                <div>注册</div>
              </div>
              <div class="header-content-box-search-flex-three" v-else>
                <el-badge :value="dataList.count" :hidden="dataList.count > 0?false:true" :max="99" class="item">
                  <router-link to="/me/InfoList" class="header-content-box-search-flex-three-iphones">
                    <svg class="icon svg-icon" fill="#999999" aria-hidden="true">
                      <use xlink:href="#icon-lingdang"></use>
                    </svg>
                  </router-link>
                </el-badge>
                <el-dropdown trigger="hover">
                  <div class="header-content-box-search-flex-three-iphone">
                    <svg class="icon svg-icon" aria-hidden="true">
                      <use xlink:href="#icon-icon-test-copy"></use>
                    </svg>
                  </div>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <router-link to="/me/PersonalCore">
                        <el-dropdown-item class="clearfix">
                          用户中心
                        </el-dropdown-item>
                      </router-link>
                      <div @click="signOut">
                        <el-dropdown-item class="clearfix">
                          退出登录
                        </el-dropdown-item>
                      </div>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
                <!--            <el-button size="mini" type="danger" style="margin-left:20px;background-color: #FF6930;" @click="signOut">退出登录</el-button>-->
              </div>
            </div>
          </el-col>
        </el-row>
      </div>


    </div>
    <div class="header-footer-box"
         :style="dataList.PageHeader?'box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);':'box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);'">
      <div class="header-footer-box-center">

        <el-row span="24" justify="center" type="flex">
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="min-width: 271px;">
            <!--    @mouseenter="HandleMouseenter()"
                           @mouseleave="TimeHandleMouseleave()"    -->
            <div class="header-footer-box-center-left">
              <div class="header-footer-box-center-left">
                <i class="iconfont icon-fenlei header-iconleimu"></i>
                <div class="header-category">
                  服务分类
                </div>
              </div>
            </div>
            <!--        <div :class="dataList.classList" @mouseleave="HandleMouseleave()" @mouseenter="HandleMouseenters()">-->
            <!--          <div class="header-category-box-padding-hover" v-for="(item, index) in dataList.NavList" :key="index"-->
            <!--               @mouseenter="HandleMouseentersSubset(item.children,index)" @mouseleave="HandleMouseentersSubsets(item.children,index)">-->
            <!--            <img class="header-category-box-padding-hover-img" v-if="dataList.Index == index" :src="item.imgs"/>-->
            <!--            <img class="header-category-box-padding-hover-img" v-else :src="item.img"/>-->
            <!--            <div class="header-category-box-padding-hover-title">{{ item.title }}</div>-->
            <!--            <div class="header-category-box-padding-hover-content-flex">-->
            <!--              <div class="header-category-box-padding-hover-content-flex-top" v-if="item.name[0]">-->
            <!--                <div class="header-category-box-padding-hover-content-flex-text-nowrap" v-if="item.name[0]">-->
            <!--                  {{ item.name[0] }}-->
            <!--                </div>-->
            <!--                <div class="header-category-box-padding-hover-bottom-lin" v-if="item.name[1]"></div>-->
            <!--                <div class="header-category-box-padding-hover-content-flex-text-nowrap" v-if="item.name[1]">-->
            <!--                  {{ item.name[1] }}-->
            <!--                </div>-->
            <!--              </div>-->
            <!--              <div class="header-category-box-padding-hover-content-flex-bottom" v-if="item.name[2]">-->
            <!--                <div class="header-category-box-padding-hover-content-flex-text-nowrap" v-if="item.name[2]">-->
            <!--                  {{ item.name[2] }}-->
            <!--                </div>-->
            <!--                <div class="header-category-box-padding-hover-bottom-lin" v-if="item.name[3]"></div>-->
            <!--                <div class="header-category-box-padding-hover-content-flex-text-nowrap" v-if="item.name[3]">-->
            <!--                  {{ item.name[3] }}-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
            <!--            <i class="iconfont icon-jiantou header-iconyou"></i>-->
            <!--          </div>-->
            <!--右侧扩展项-->
            <!--          <div ref="BoxRef" class="header-category-subset-box" v-if="dataList.children">-->
            <!--            <div class="header-category-subset-box-flex" v-for="(val,k) in dataList.children" :key="k">-->
            <!--              <div class="header-category-subset-box-title-left">{{ val.title }}</div>-->
            <!--              <div class="header-category-subset-box-lin-center"></div>-->
            <!--              <div class="header-category-subset-box-flex-subset-box-flex" v-if="val">-->
            <!--                <router-link to="" v-for="(item,index) in val.name" :key="index">{{ item }}</router-link>-->
            <!--              </div>-->
            <!--            </div>-->
            <!--          </div>-->
            <!--        </div>-->
          </el-col>
          <el-col :xs="0" :sm="0" :md="0" :lg="2" :xl="4"></el-col>
          <el-col :xs="16" :sm="16" :md="16" :lg="14" :xl="14">
            <div class="nav-flex-left">
              <div class="el-menu-nav-list">
                <router-link
                    rel="noopener"
                    :class="dataList.modernName === 'Home'?'el-menu-nav-list-title addColor':'l-menu-nav-list-title'"
                    to="/">
                  首页
                  <div class="el-menu-nav-list-line"></div>
                </router-link>
              </div>
              <div class="el-menu-nav-list">
                <router-link
                    rel="noopener"
                    :class="dataList.modernName === 'Products'?'el-menu-nav-list-title addColor':'l-menu-nav-list-title'"
                    :to="'/rzcp/'+dataList.pathUrl">
                  融资产品
                  <div class="el-menu-nav-list-line"></div>
                </router-link>
              </div>
              <div class="el-menu-nav-list">
                <router-link
                    rel="noopener"
                    :class="dataList.modernName === 'PatentEvaluation'?'el-menu-nav-list-title addColor':'l-menu-nav-list-title'"
                    to="/PatentEvaluation">
                  专利评估
                  <div class="el-menu-nav-list-line"></div>
                </router-link>
              </div>
              <div class="el-menu-nav-list">
                <router-link
                    :class="dataList.modernName === 'zixun'?'el-menu-nav-list-title addColor':'l-menu-nav-list-title'"
                    to="/zixun">
                  资讯中心
                  <div class="el-menu-nav-list-line"></div>
                </router-link>
              </div>

              <!--          <div class="el-menu-nav-list">-->
              <!--            <router-link :class="dataList.modernName === 'PropertyRight'?'el-menu-nav-list-title addColor':'l-menu-nav-list-title'" to="/PropertyRight">-->
              <!--              专利交易-->
              <!--              <div class="el-menu-nav-list-line"></div>-->
              <!--            </router-link>-->
              <!--&lt;!&ndash;            <i class="iconfont icon-jiantou-copy"></i>&ndash;&gt;-->
              <!--&lt;!&ndash;            <div class="el-menu-nav-list-son">&ndash;&gt;-->
              <!--&lt;!&ndash;              <router-link class="el-menu-nav-list-son-text" to="/PropertyRight">专利交易</router-link>&ndash;&gt;-->
              <!--&lt;!&ndash;&lt;!&ndash;              <router-link class="el-menu-nav-list-son-text notAllowed" to="">商标交易</router-link>&ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;&lt;!&ndash;              <router-link class="el-menu-nav-list-son-text notAllowed" to="">著作权交易</router-link>&ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;&lt;!&ndash;              <router-link class="el-menu-nav-list-son-text notAllowed" to="">需求中心</router-link>&ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;            </div>&ndash;&gt;-->
              <!--          </div>-->
              <div class="el-menu-nav-list">
                <router-link
                    :class="dataList.modernName === 'PropertyRight'?'el-menu-nav-list-title addColor':'l-menu-nav-list-title'"
                    to="/PropertyRight">
                  知识产权交易
                  <div class="el-menu-nav-list-line"></div>
                </router-link>
              </div>
<!--              <div class="el-menu-nav-list">-->
<!--                <router-link-->
<!--                    rel="noopener"-->
<!--                    :class="dataList.modernName === 'IntellectualPropertyDataService'?'el-menu-nav-list-title addColor':'l-menu-nav-list-title'"-->
<!--                    to="/IntellectualPropertyDataService">-->
<!--                  知产数据服务-->
<!--                  <div class="el-menu-nav-list-line"></div>-->
<!--                </router-link>-->
<!--              </div>-->
              <div class="el-menu-nav-list">
                <router-link
                    :class="dataList.modernName === 'IpoGrowthCamp'?'el-menu-nav-list-title addColor':'l-menu-nav-list-title'"
                    to="/IpoGrowthCamp">
                  IPO成长营
                  <div class="el-menu-nav-list-line"></div>
                </router-link>
              </div>
<!--              <div class="el-menu-nav-list">-->
<!--                <router-link-->
<!--                    :class="dataList.modernName === 'About'?'el-menu-nav-list-title addColor':'l-menu-nav-list-title'"-->
<!--                    to="/About">-->
<!--                  关于我们-->
<!--                  <div class="el-menu-nav-list-line"></div>-->
<!--                </router-link>-->
<!--              </div>-->
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="lin"></div>
  </div>
  <AsyncComp :sub-typeList="dataList.dialogVisible" @DataEmits="EmitsContent"
             @DataEmitsStatus="EmitsContentStatus"></AsyncComp>
</template>
<script>
import {
  ref,
  reactive,
  watch,
  nextTick,
  onMounted
} from "vue";
import {ElMessageBox} from "element-plus";
import AsyncComp from '../../../components/Login/Login.vue'
import {useRoute, useRouter} from 'vue-router'
import {PostCount} from '/src/Axios/API/Config/index.js'
import {useStore} from "vuex";
import {AllList} from '/src/Axios/API/TechnologyFinancialProducts.js'
export default {
  name: 'Header',
  setup() {
    const store = useStore();
    const router = useRouter();
    const dataList = reactive({
      NavList: [
        {
          title: '知识产权融资',
          img: "/Header/画板@2x.png",
          imgs: '/Header/画板 2@2x.png',
          name: [
            '知识产权质押',
            '知识产权信托',
          ],
          children: [
            {
              title: '知识产权融资',
              name: [
                '知识产权质押',
                '知识产权信托',
                '知识产权证券化',
                '知识产权保险',
                '知识产权基金',
                '知识产权融资租赁',
                '融资需求'
              ],
            }
          ]
        },
        {
          title: '科技融资产品',
          img: '/Header/画板@2x.png',
          imgs: '/Header/画板 2@2x.png',
          name: [
            '创新贷',
            '雏鹰贷',
          ],
          children: [
            {
              title: '科技融资产品',
              name: [
                '创新贷',
                '雏鹰贷',
                '瞪羚贷',
                '科技贷',
                '青创贷',
                '政银贷',
                '科创贷',
                '医租通'
              ],
            }
          ]
        },
        {
          title: '知识产权交易',
          img: '/Header/画板@2x.png',
          imgs: '/Header/知识产权交易2@2x.png',
          name: [
            '专利交易',
            '商标交易'
          ],
          children: [
            {
              title: '知识产权交易',
              name: [
                '专利交易',
                '商标交易',
                '著作权交易',
                '需求中心'
              ],
            }
          ]
        },
        {
          title: '知识产权服务',
          img: '/Header/知识产权服务@2x.png',
          imgs: '/Header/知识产权服务2@2x.png',
          name: [
            '发明专利申请',
            '商标复审'
          ],
          children: [
            {
              title: '专利服务',
              name: [
                '发明专利申请',
                '实用新型申请',
                '外观设计申请',
                'PCT申请',
                '专利权恢复',
                '审查意见答复',
                '专利无效答辩',
                '专利无效宣告',
                '专利申请复审',
              ],
            },
            {
              title: '商标服务',
              name: [
                '商标申请',
                '商标变更',
                '商标续展',
                '商标转让',
                '商标驳回复审',
                '商标无效宣告',
                '商标撤销',
                '商标异议'
              ],
            },
            {
              title: '版权服务',
              name: [
                '计算机著作权'
              ],
            }
          ]
        }
      ],
      children: {},
      activeIndex: '/',
      path: 'Home',
      pathUrl: '',
      dialogVisible: false,
      Index: null,
      route: '',
      PageHeader: false,
      classList: 'header-category-box',
      onAddAnimation: null,
      classFlex: '',
      scroll: 0,
      w: 0,
      count: 0,
      token: null,
      phone: null,
      modernName: '',
      metaName: '',
      modernTitle: '',
    })
    const SignIn = () => {
      dataList.dialogVisible = true
    }
    const EmitsContent = () => {
      dataList.dialogVisible = false
    }
    const EmitsContentStatus = () => {
      dataList.dialogVisible = false
    }
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 0) {
        dataList.PageHeader = true
      } else {
        dataList.PageHeader = false
      }
    }
    const BoxRef = ref(null);
    // 鼠标移入 移出
    const HandleMouseenter = () => {
      dataList.classList = 'header-category-box AddAnimation';
    }
    const TimeHandleMouseleave = () => {
      dataList.onAddAnimation = setTimeout(function () {
        RemoveClassList()
      }, 100)
    }
    const signOut = () => {
      ElMessageBox.confirm('是否确认退出当前登录？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        localStorage.setItem('token', null);
        localStorage.setItem('phone', null);
        localStorage.setItem('count', 0);
        store.commit('userCountInfo', '');
        store.commit('tokenInfo', '');
        store.commit('phoneInfo', '');
        dataList.token = '';
        router.push({path: '/'});
      }).catch((err) => {
        console.log(err)
      })
    }
    // 清除 定时器
    const HandleMouseenters = () => {
      clearTimeout(dataList.onAddAnimation)
    }
    const RemoveClassList = () => {
      dataList.classList = 'header-category-box';
      nextTick(function () {
        BoxRef.value.style.display = 'none'
      })
    }
    const HandleMouseleave = () => {
      dataList.classList = 'header-category-box';
      nextTick(function () {
        BoxRef.value.style.display = 'none'
      })
    }
    const HandleMouseentersSubset = (item, index) => {
      nextTick(function () {
        dataList.Index = index;
        dataList.children = item
        BoxRef.value.style.display = 'flex'
      })
    }
    const HandleMouseentersSubsets = () => {
      nextTick(function () {
        dataList.Index = null;
      })
    }
    const useRoutes = useRoute();
    dataList.modernName = useRoutes.meta.name;
    if (useRoutes.meta.name) {
      dataList.metaName = useRoutes.meta.name ? useRoutes.meta.name : null;
      dataList.modernTitle = useRoutes.meta.title ? useRoutes.meta.title : null;
    }
    watch([() => useRoutes.meta.name, () => useRoutes.meta.title, () => store.state.token, () => useRoutes.meta.name], () => {
      dataList.modernName = useRoutes.meta.name;
      dataList.token = localStorage.getItem('token') ? localStorage.getItem('token') : store.state.token
      dataList.phone = localStorage.getItem('phone') ? localStorage.getItem('phone') : store.state.phone
      dataList.modernTitle = useRoutes.meta.title ? useRoutes.meta.title : null;
      dataList.metaName = useRoutes.meta.name ? useRoutes.meta.name : null;
    })
    // watchEffect(() => {
    //   dataList.count = store.state.count ? store.state.count : localStorage.getItem('count')
    // })
    onMounted(() => {
      dataList.count = store.state.count ? store.state.count : localStorage.getItem('count')
      AllList({
        type: 'Condition'
      }).then(res => {
        if (res.data.code == 200) {
          let List = [];
          res.data.data.filter(item=>{
            List.push(0)
          })
          List.push(1)
          dataList.pathUrl = List.join('a');
        }
      }).catch(err => {
        console.log(err)
      })
      window.addEventListener("scroll", handleScroll, {passive: true});
      if (dataList.token || dataList.phone) {
        PostCount().then(res => {
          dataList.count = res.data.data.count
        })
      }
    })
    return {
      dataList,
      handleScroll,
      HandleMouseenter,
      TimeHandleMouseleave,
      HandleMouseenters,
      HandleMouseleave,
      HandleMouseentersSubset,
      HandleMouseentersSubsets,
      EmitsContentStatus,
      BoxRef,
      signOut,
      EmitsContent,
      store,
      SignIn
    }
  },
  components: {
    AsyncComp
  }
}
</script>

<style rel="stylesheet" lang="scss" scoped>
//@import "/src/assets/styles/share.scss";


.AchievementTransformation-back {
  display: block;
}

.AchievementTransformation-none {
  display: none;
}


// 最顶部 灰色区域
.header-top-box {
  width: 100%;
  background-color: #F2F2F2;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .header-top-box-w {
    width: 1300px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;

    .header-top-box-right {
      display: flex;
      justify-content: flex-end;

      .header-top-box-right-left {
        margin-right: 60px
      }
    }
  }
}

// LOGO/搜索框/服务热线/登录/注册
.header-content-box {
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  .header-content-box-flex {
    max-width: 1300px;
    min-width: 1000px;
    height: 83px;
    margin: 0 auto;

    .header-content-box-flex-logo-flex {
      height: 83px;
      display: flex;
      align-items: center;

      .header-content-box-logo {
        height: 60px;
        width: 271px;
        align-items: end;
      }
    }

    .header-content-box-right-flex {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;

      .header-content-box-search-flex {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0 2px 10px 0 rgba(220, 220, 220, 0.5);
        overflow: hidden;
        cursor: pointer;

        .header-content-box-search-input {
          width: 259px;
          height: 46px;
          padding: 0 20px;
          font-size: 14px;
          border-bottom: 0;
          border-top: 0;
          cursor: pointer;
          border-left: 0;
          border-right: 0;
          background-color: #ffffff;

        }

        .header-content-box-search-input-btn {
          background-color: #FF6A3B;
          width: 86px;
          height: 46px;
          font-size: 12px;
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

      .header-content-box-search-flex-two {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: flex-end;
        width: 167px;
        margin-left: 20px;
        margin-right: 20px;

        .header-content-box-search-flex-two-title {
          font-size: 14px;
        }

        .header-content-box-search-flex-two-phone {
          font-size: 18px;
        }
      }

      .header-content-box-search-flex-three {
        display: flex;
        justify-content: center;
        align-content: center;
        font-size: 14px;
        align-items: center;
        width: 90px;
        cursor: pointer;
        padding: 8px 15px;
        border-radius: 5px;

        .item {
          margin-right: 40px;
          margin-left: -10px;
        }

        .header-content-box-search-flex-three-iphone {
          font-size: 16px;
          font-weight: bold;
          color: #377DE8;

          .svg-icon {
            width: 40px;
            height: 40px;

          }
        }

        .header-content-box-search-flex-three-iphones {
          font-size: 16px;
          font-weight: bold;
          color: #377DE8;

          .svg-icon {
            width: 40px;
            height: 40px;
            fill: #999999;
          }
        }

        .header-content-box-search-flex-three-line {
          height: 14px;
          width: 1px;
          background-color: #333333;
          margin: 0 10px;
        }
      }
    }


  }
}

// 向下扩展分类
.header-footer-box {
  position: fixed;
  top: 83px;
  left: 0;
  z-index: 999;
  height: 45px;
  width: 100%;
  background-color: #ffffff;

  .header-footer-box-center {
    max-width: 1300px;
    min-width: 1000px;
    margin: 0 auto;
    height: 45px;
    position: relative;

    .nav-flex-left {
      display: flex;
      justify-content: flex-end;
      align-content: center;
      align-items: center;
    }

    // 右侧向下子扩展项
    .el-menu-nav-list {
      font-size: 18px;
      position: relative;
      background-color: rgba(0, 0, 0, 0);
      height: 45px;
      display: flex;
      align-items: center;
      margin: 0 0 0 20px;

      .icon-jiantou-copy {
        margin-left: 10px;
      }

      &:hover {
        .el-menu-nav-list-son {
          display: block;
        }
      }

      .el-menu-nav-list-title {
        color: #333333;
        text-decoration: none;
        position: relative;
        margin-right: 0;

        .el-menu-nav-list-line {
          position: absolute;
          bottom: -11px;
          left: 50%;
          margin-left: -16px;
          width: 32px;
          height: 2px;
        }

      }

      .addColor {
        color: #FF6A3B;
      }

      .el-menu-nav-list-son {
        position: absolute;
        left: 0;
        top: 54px;
        min-width: 108px;
        background-color: #192130;
        border-radius: 4px;
        padding: 10px 16px 10px;
        display: none;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);

        &::before {
          content: '';
          border-top: 10px solid transparent;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #333333;
          position: absolute;
          top: -20px;
          left: 50%;
          margin-left: -10px;
        }

        .el-menu-nav-list-son-text {
          display: block;
          padding: 12px 0;
          font-size: 16px;
          text-decoration: none;
          color: #FFFFFF;
          border-bottom: 1px solid #F2F4F6;

          &:hover {
            color: #FF6A3B;
          }

          &:nth-last-child(1) {
            border-bottom: 0 solid #F2F4F6;
          }
        }

        .notAllowed {
          cursor: not-allowed;
        }
      }
    }

    .header-footer-box-center-left {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      width: 256px;
      height: 45px;
      border-top: 14px solid #ffffff;
      margin-top: -14px;
      text-align: center;
      background: linear-gradient(104deg, #FFA25E 0%, #FF884B 48%, #FA5516 100%);
      position: relative;
      z-index: 99;
      cursor: not-allowed;

      .header-iconleimu {
        font-size: 18px;
        color: #ffffff;
        position: absolute;
        left: 60px;
        line-height: 43px;
        font-weight: bold;
      }

      // 扩展内容
      .header-category {
        font-size: 16px;
        color: #ffffff;
        position: relative;
      }
    }

    .AddAnimation {
      top: 43px !important;
      opacity: 1 !important;
      transition: 0.3s;
    }

    .header-category-box {
      display: flex;
      flex-direction: column;
      position: absolute;
      opacity: 0;
      top: -563px;
      left: 0;
      transition: 0.3s;

      .header-category-box-padding-hover {
        width: 198px;
        height: 96px;
        padding: 29px;
        background-color: rgba(0, 0, 0, 0.9);
        position: relative;

        &:hover {
          background-color: #FF6930;

          .header-category-box-padding-hover-content-flex-text-nowrap {
            color: #ffffff !important;
          }

          .header-iconyou {
            color: #ffffff;
          }

          .header-category-box-padding-hover-bottom-lin {
            background-color: #ffffff !important;
          }

          .header-category-box-padding-hover-title {
            color: #ffffff;
          }

        }


        .header-iconyou {
          font-size: 18px;
          color: #ffffff;
          position: absolute;
          right: 23px;
          top: 50%;
          margin-top: -5px;
        }

        .header-category-box-padding-hover-img {
          width: 39px;
          height: 39px;
          margin-left: -100px;
          margin-bottom: 10px;
        }

        .header-category-box-padding-hover-title {
          font-size: 18px;
          color: #FF6A3B;
          padding-bottom: 11px;
          text-align: left;
        }

        .header-category-box-padding-hover-content-flex {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;

          .header-category-box-padding-hover-content-flex-top {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: flex-start;
            font-size: 14px;
            color: #999999;

            .header-category-box-padding-hover-bottom-lin {
              height: 12px;
              width: 1px;
              background-color: #ffffff;
              margin: 5px 5px 0;
            }

            .header-category-box-padding-hover-content-flex-text-nowrap {
              max-width: 95px;
              color: #ffffff;
              text-align: left;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }

          .header-category-box-padding-hover-content-flex-bottom {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: flex-start;
            font-size: 14px;
            color: #999999;

            .header-category-box-padding-hover-bottom-lin {
              height: 12px;
              width: 1px;
              background-color: #ffffff;
              margin: 5px 5px 0;
            }

            .header-category-box-padding-hover-content-flex-text-nowrap {
              max-width: 95px;
              color: #ffffff;
              text-align: left;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }


      .header-category-subset-box {
        width: 990px;
        height: 553px;
        padding: 27px 27px 22px 27px;
        background-color: rgba(0, 0, 0, 0.9);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: center;
        position: absolute;
        left: 256px;
        top: 14px;
        font-size: 14px;
        color: #ffffff;

        .header-category-subset-box-flex {
          display: flex;
          width: 100%;
          justify-content: flex-start;
          align-items: flex-start;
          align-content: flex-start;
          flex-direction: row;
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
          margin-bottom: 20px;

          .header-category-subset-box-title-left {
            max-width: 115px;
            white-space: nowrap;
          }

          .header-category-subset-box-lin-center {
            width: 1px;
            height: 12px;
            background-color: #333333;
            margin: 5px 5px 0 5px;
          }

          .header-category-subset-box-flex-subset-box-flex {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: flex-start;
            flex-direction: row;
            flex-wrap: wrap;

            a {
              color: #ffffff;
              margin: 0 15px 15px 15px;

              &:hover {
                color: #FF6A3B
              }
            }
          }
        }
      }


    }
  }
}


// 向下扩展分类
.header-footers-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 83px;
  width: 100%;
  background-color: #ffffff;

  .header-footer-box-center {
    max-width: 1300px;
    min-width: 1000px;
    margin: 0 auto;
    height: 83px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .header-content-box-flex-logo-flex {
      .header-content-box-logo {
        width: 271px;
        height: 60px;
      }
    }

    .nav-flex-left {
      display: flex;
      justify-content: flex-end;
      align-content: center;
      align-items: center;
    }

    // 右侧向下子扩展项
    .el-menu-nav-list {
      font-size: 18px;
      position: relative;
      background-color: rgba(0, 0, 0, 0);
      height: 45px;
      display: flex;
      align-items: center;
      margin: 0 0 0 30px;

      &:hover {
        .el-menu-nav-list-son {
          display: block;
        }
      }

      .el-menu-nav-list-title {
        color: #333333;
        text-decoration: none;
        position: relative;
        margin-right: 0;

        .el-menu-nav-list-line {
          position: absolute;
          bottom: -11px;
          left: 50%;
          margin-left: -16px;
          width: 32px;
          height: 2px;
        }
      }

      .addColor {
        color: #FF6A3B;
      }

      .el-menu-nav-list-son {
        position: absolute;
        left: 0;
        top: 54px;
        min-width: 108px;
        background-color: #192130;
        border-radius: 4px;
        padding: 10px 16px 10px;
        display: none;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);

        &::before {
          content: '';
          border-top: 10px solid transparent;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #333333;
          position: absolute;
          top: -20px;
          left: 50%;
          margin-left: -10px;
        }

        .el-menu-nav-list-son-text {
          display: block;
          padding: 12px 0;
          font-size: 16px;
          text-decoration: none;
          color: #FFFFFF;
          border-bottom: 1px solid #F2F4F6;

          &:hover {
            color: #FF6A3B;
          }

          &:nth-last-child(1) {
            border-bottom: 0 solid #F2F4F6;
          }
        }
      }
    }

    .header-footer-box-center-left {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      width: 256px;
      height: 45px;
      border-top: 14px solid #ffffff;
      text-align: center;
      background-color: #FF6A3B;
      position: relative;
      z-index: 99;

      .header-iconleimu {
        font-size: 18px;
        color: #ffffff;
        position: absolute;
        left: 30px;
        line-height: 43px;
        font-weight: bold;
      }

      // 扩展内容
      .header-category {
        font-size: 16px;
        color: #ffffff;
        position: relative;
      }
    }

    .AddAnimation {
      top: 43px !important;
      opacity: 1 !important;
      transition: 0.3s;
    }

    .header-category-box {
      display: flex;
      flex-direction: column;
      position: absolute;
      opacity: 0;
      top: -563px;
      left: 0;
      transition: 0.3s;

      .header-category-box-padding-hover {
        width: 198px;
        height: 66px;
        padding: 29px;
        background-color: rgba(0, 0, 0, 0.3);
        position: relative;

        &:hover {
          background-color: #ffffff;

          .header-category-box-padding-hover-content-flex-text-nowrap {
            color: #999999 !important;
          }

          .header-iconyou {
            color: #999999;
          }

          .header-category-box-padding-hover-bottom-lin {
            background-color: #999999 !important;
          }

        }


        .header-iconyou {
          font-size: 18px;
          color: #ffffff;
          position: absolute;
          right: 23px;
          top: 50%;
          margin-top: -5px;
        }

        .header-category-box-padding-hover-title {
          font-size: 18px;
          color: #FF6A3B;
          padding-bottom: 11px;
          text-align: left;
        }

        .header-category-box-padding-hover-content-flex {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;

          .header-category-box-padding-hover-content-flex-top {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: flex-start;
            font-size: 14px;
            color: #999999;

            .header-category-box-padding-hover-bottom-lin {
              height: 12px;
              width: 1px;
              background-color: #ffffff;
              margin: 5px 5px 0;
            }

            .header-category-box-padding-hover-content-flex-text-nowrap {
              max-width: 95px;
              color: #ffffff;
              text-align: left;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }

          .header-category-box-padding-hover-content-flex-bottom {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: flex-start;
            font-size: 14px;
            color: #999999;

            .header-category-box-padding-hover-bottom-lin {
              height: 12px;
              width: 1px;
              background-color: #ffffff;
              margin: 5px 5px 0;

            }

            .header-category-box-padding-hover-content-flex-text-nowrap {
              max-width: 95px;
              color: #ffffff;
              text-align: left;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }


      .header-category-subset-box {
        width: 1008px;
        height: 556px;
        padding: 27px 0 22px 27px;
        background-color: #ffffff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: center;
        position: absolute;
        left: 256px;
        top: 14px;
        font-size: 14px;
        color: #333333;

        .header-category-subset-box-flex {
          display: flex;
          width: 100%;
          justify-content: flex-start;
          align-items: flex-start;
          align-content: flex-start;
          flex-direction: row;

          .header-category-subset-box-title-left {
            max-width: 115px;
            white-space: nowrap;
          }

          .header-category-subset-box-lin-center {
            width: 1px;
            height: 12px;
            background-color: #333333;
            margin: 5px 5px 0 5px;
          }

          .header-category-subset-box-flex-subset-box-flex {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: flex-start;
            flex-direction: row;
            flex-wrap: wrap;

            a {
              margin: 0 15px 15px 15px;

              &:hover {
                color: #FF6A3B
              }
            }
          }
        }
      }


    }
  }
}


// 虚拟高度
.lin {
  height: 128px;
  width: 100%;
}

// 虚拟高度2
.lins {
  height: 83px;
  width: 100%;
}














//响应式布局
@media screen and (max-width:1200px ) {
  .el-menu-nav-list{
    font-size: 16px !important;

  }
  .header-content-box-search-input{
    width: 180px !important;
  }

}
@media screen and (max-width:1000px ) {
  .el-menu-nav-list{
    font-size: 15px !important;
    margin-left: 20px !important;
  }
  .header-content-box-search-flex-two{
    width: 120px  !important;
  }
}
</style>
