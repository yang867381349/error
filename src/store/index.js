import { createStore as _createStore } from "vuex";
import AxIos from "/src/Axios/AxiosServer.js";



const listDataChildren = (val) => {
  val.filter(item => {
    if (item.children.length <= 0) {
      delete item.children
    }
    delete item.endTime
    delete item.beginTime
    delete item.createBy
    delete item.createTime
    delete item.pid
    delete item.fullPath
    delete item.params
    delete item.searchValue
    delete item.updateBy
    delete item.updateTime
    delete item.remark
    if (item.children != null && item.children && item.children.length > 0) {
      listDataChildren(item.children)
    }
  })
}



export function createStore() {
  return _createStore({
    state: {
      message: "Hello Test Page",
      mess: {},
      config: {

      },
      FormFinancing:{
        options:[]
      },
      configs: {},
    },
    mutations: {},
    actions: {
      fetchMessage: ({state}) => {
        return new Promise(resolve => {
          setTimeout(() => {
            state.message = "Vite2 + Route + Store + SSR + 杨军权";
            resolve();
          }, 200);
        });
      },
      config:({state},data)=>{
        return new Promise((resolve, reject) => {
          AxIos('get','http://124.71.201.151:8080/api/information/1',{}).then(res=>{
            state.config = res.data.data
            Promise.all([
              AxIos('get','http://124.71.201.151:8080/api/information/1',{}).then(re=>{
                state.configs = re.data.data
                state.configs.title+='fe'
              }),
              AxIos('post', '/api/area/list', {id:'340000'}).then(v => {
                if (v.data.code === '200') {
                  listDataChildren(v.data.data);
                  state.FormFinancing.options = v.data.data
                }
              })
            ]).then(()=>{
              resolve()
            })

          })
        })
      }
    },
    modules: {}
  });
}
