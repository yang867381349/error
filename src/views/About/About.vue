<template>
  <div class="About-box">
    <el-row justify="center" type="flex">
      <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="24">
        <div class="About-box-title">
          知值网——知识产权价值发现者！
        </div>
        <div class="About-box-text">
          安徽知值科技有限公司，知识产权互联网平台服务商，聚焦于知识产权价值评估、融资咨询、资产运营等行业痛点领域。
          知值网产品线包括“知估”、“知交所”、“知孵保”三大业务板块，服务内容为知识产权评估、交易、融资、成果转化、大数据、项目孵化等应用服务，为广大企业科技创新保驾护航。
        </div>
        <div class="About-box-text">
          知值网初创团队由清华大学和中国科技大学研究生团队组建而成，团队骨干成员有超十年的NASDAQ和A股上市公司服务经验。公司现有团队现有GP两位，LP两位，同时正在积极接触政府和资本市场，寻求VC意向。
        </div>
        <div class="About-box-text">
          知科科技与各级知识产权主管部门合作紧密，共同推动支持产权产业化进程。
        </div>
        <div class="About-box-text">
          知值网现有自用办公面积600平米，非常期待各位小伙伴的加入！
        </div>
      </el-col>
    </el-row>
<!--    <div>{{ item.title }}</div>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  // asyncData ({ store, route }) {
  //   // 触发 action 后，会返回 Promise
  //   return store.dispatch('fetchItem', route.params.id)
  // },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    // item () {
    //   return this.$store.state.items[this.$route.params.id]
    // }
  }
}
</script>
<style rel="stylesheet" lang="scss" scoped>
.About-box {
  max-width: 1300px;
  min-width: 1000px;
  text-align: left;
  font-size: 16px;
  margin: 60px auto 80px;

  .About-box-title {
    font-size: 36px;
    color: #333333;
    margin-bottom: 40px;
    font-weight: bold;
  }

  .About-box-text {
    font-size: 20px;
    color: #666666;
    text-indent: 40px;
    margin-bottom: 30px;
  }
}
</style>
