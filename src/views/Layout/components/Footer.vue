<template>
  <div class="footer-box">
    <div class="footer-box-box">
      <div class="footer-box-top-box-box">
        <el-row justify="center" type="flex">
          <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="24">
            <div class="footer-box-top-box">
              <span>友情链接:</span>
              <a href="http://124.71.201.151:88/" target="_blank">中瀚资产评估</a>
              <a href="https://www.cnipa.gov.cn/" target="_blank">国家知识产权局</a>
              <a href="http://amr.ah.gov.cn/" target="_blank">安徽省知识产权局</a>
              <a href="http://amr.hefei.gov.cn/hfszscqj/index.html" target="_blank">合肥市知识产权局</a>
              <a href="http://pss-system.cnipa.gov.cn/" target="_blank">专利检索</a>
              <a href="https://www.12321.cn/" target="_blank">网络投诉咨询中心</a>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="footer-box-center-box">
        <el-row justify="center" type="flex">
          <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
            <img class="footer-box-center-box-logo-img" :src="store.state.Config.baseLogo" alt="">
          </el-col>
          <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="4">
            <div class="footer-box-center-box-title-flex">
              <router-link rel="noopener" to="/PatentEvaluation">专利评估</router-link>
<!--              <router-link rel="noopener" to="/IntellectualPropertyFinancialProducts">融资产品</router-link>-->
              <router-link rel="noopener" to="/IntellectualPropertyDataService">知识产权服务</router-link>
              <router-link rel="noopener" to="/IpoGrowthCamp">IPO成长营</router-link>
              <router-link rel="noopener" to="/About">关于我们</router-link>
            </div>
          </el-col>
          <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="footer-box-center-lin"></div>
            <div class="footer-box-center-box-code-flex">
              <div class="footer-box-center-box-code-flex-left">
                <img class="footer-box-center-box-code-flex-left-img" :src="store.state.Config.qrCode1" alt="">
                微信公众号
              </div>
              <div class="footer-box-center-box-code-flex-left">
                <img class="footer-box-center-box-code-flex-left-img" :src="store.state.Config.qrCode2" alt="">
                微信咨询
              </div>
            </div>
          </el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="5">
            <div class="footer-box-center-lin"></div>
            <div class="footer-box-center-box-service-flex">
              <div class="footer-box-center-box-service-flex-btn">在线客服</div>
              <div class="footer-box-center-box-service-flex-phone">{{ store.state.Config.telephone }}</div>
              <div class="footer-box-center-box-service-flex-time">人工客服: 09:00-17:00</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="footer-box-bottom-box">
        <div class="footer-box-bottom-box-top">版权所有©2021 安徽知值科技有限公司 皖ICP备2021005815号-2</div>
        <div class="footer-box-bottom-box-bottom">技术支持：安徽知值科技有限公司</div>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex"; // 引入
export default {
  // asyncData ({ store, route }) {
  //   // 触发 action 后，会返回 Promise
  //   return store.dispatch('fetchItem', route.params.id)
  // },
  setup() {
    const store = useStore();
    return {
      store
    }

  }
}
</script>

<style rel="stylesheet" lang="scss" scoped>
.footer-box {
  width: 100%;
  background: #06060b;
  color: #606061;
  .footer-box-box {
    max-width: 1300px;
    min-width: 1000px;
    margin: 0 auto;
  }
  .footer-box-top-box-box {
    text-align: left;
    .footer-box-top-box {
      font-size: 14px;
      color: rgba(255, 255, 255, .7);
      padding: 40px 0 20px 0;

      span {
        color: #606061;
        margin: 0 10px;
      }

      a {
        color: #606061;
        margin: 0 10px;
        cursor: pointer;

        &:hover {
          color: #ffffff;

        }
      }
    }
  }

  .footer-box-center-box {
    margin: 48px auto 0;
    .footer-box-center-box-logo-img {
      width: 100%;
      max-width: 260px;
    }

    .footer-box-center-box-title-flex {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 16px;

      a {
        color: #606061;
        margin-bottom: 15px;

        &:hover {
          color: #ffffff;

        }
      }
    }

    .footer-box-center-box-code-flex {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;

      .footer-box-center-box-code-flex-left {
        margin: 0 15px;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        color: #606061;
        font-size: 14px;

        .footer-box-center-box-code-flex-left-img {
          margin-bottom: 10px;
          width: 140px;
          height: 140px;
          border-radius: 10px;
        }
      }
    }

    .footer-box-center-box-service-flex {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-content: flex-end;
      align-items: flex-end;
      color: #606061;

      .footer-box-center-box-service-flex-btn {
        width: 140px;
        height: 44px;
        line-height: 46px;
        font-size: 16px;
        border: 2px solid #606061;
        border-radius: 10px;
        transition: 1s;
        cursor: pointer;

        &:hover {
          border: 2px solid #ffffff;
          background-color: #ffffff;
          color: #606061;
        }
      }

      .footer-box-center-box-service-flex-phone {
        font-size: 26px;
        margin: 10px 0 0 0;
      }

      .footer-box-center-box-service-flex-time {
        font-size: 14px;
        color: #606061;
      }
    }

    //.footer-box-center-lin {
    //  width: 0.5px;
    //  height: 140px;
    //  background-color: #171b29;
    //}
  }

  .footer-box-bottom-box {
    font-size: 14px;
    color: #606061;
    text-align: center;
    margin-top: 80px;

    .footer-box-bottom-box-top {
      margin-bottom: 10px;
    }

    .footer-box-bottom-box-bottom {
      padding-bottom: 30px;
    }
  }

}

//响应式布局
//@media screen and (min-width:1440px ) {
//  .footer-box-center-box{
//    width: 1300px !important;
//  }
//}
//@media screen and (max-width:1920px ) {
//  .footer-box-center-box{
//    width: 1000px !important;
//  }
//}
</style>
