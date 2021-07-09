<template>
  <div>1111111111111111111111111111111111111111111111111111111111111111111111</div>
  <el-button>rewrew</el-button>
  {{dateList.name}}
</template>

<script setup>
import {PostTechnologyFinancialProducts} from '/src/Axios/API/TechnologyFinancialProducts.js'
import {reactive, onMounted } from 'vue'
const dateList = reactive({
  name:'rerewrewrewrw',
  pageParam: {
    pageNum: 1,
    pageSize: 10,
  },
})
onMounted(() => {
  PostTechnologyFinancialProducts({
    entity: {},
    pageParam: dateList.pageParam
  }).then(res => {
    if (res.data.code == 200) {
      dateList.Lists = res.data.data.rows.slice(0, 5)
      for (let i = 0; i < dateList.Lists.length; i++) {
        if (res.data.data.rows[i].field) {
          dateList.Lists[i].field = JSON.parse(res.data.data.rows[i].field)
        }
      }
    }
  }).catch(err => {
    console.log(err)
  })
})
</script>

<style rel="stylesheet" scoped>
</style>
