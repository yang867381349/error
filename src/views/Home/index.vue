<template>
<!--  <el-button>321321321</el-button>-->
  321321
  <div>fdsafdsafdsa</div>
  <el-button>321321</el-button>
  <div>{{ mess }}</div>
  <div>{{config.title}}111</div>
  <div>{{configs.title}}222</div>
  <el-cascader v-model="dataList.form.area"
               :props="{value:'text',label:'text'}"
               :options="FormFinancing.options"
               :show-all-levels="true">
  </el-cascader>
</template>

<script>
import {useStore} from "vuex";
import {reactive} from "vue";
const meta = {
      title: 'Test page titles',
      description: 'Test page description',
      keywords: 'Test page keywords',
    }
export default {
  meta,
  asyncData(store){
    return store.dispatch('config',{}) //在这里可以执行一个方法。 在store 内执行多个
  },
  setup(){
    const store = useStore();
    const dataList = reactive({
      form:{
        area:[]
      }
    })
    meta.title = '我是标题'
    return {
      dataList,
      mess:store.state.message,
      FormFinancing:store.state.FormFinancing,
      config:store.state.config,
      configs:store.state.configs
    }
  }
}
</script>

<style rel="stylesheet" scoped>

</style>
